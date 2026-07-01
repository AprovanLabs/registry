import {
  Stack,
  Duration,
  RemovalPolicy,
  CfnOutput,
  aws_cognito as cognito,
} from "aws-cdk-lib";
import { type ITable } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import {
  LOCALHOST_CALLBACK_URLS,
  COGNITO_DOMAIN_TEMPLATE,
} from "../core/constants";
import { namer } from "../core/utils";
import { PostConfirmationLambda } from "../lambdas/post-confirmation";

export interface AuthProps {
  usersTable: ITable;
  workspacesTable: ITable;
  membershipsTable: ITable;
  invitesTable: ITable;
  googleClientId?: string;
  googleClientSecret?: string;
  callbackUrl?: string;
  logoutUrl?: string;
}

export class Auth extends Construct {
  public readonly userPool: cognito.UserPool;
  public readonly userPoolClient: cognito.UserPoolClient;
  public readonly userPoolDomain: cognito.UserPoolDomain;
  public readonly signInUrl: string;
  public readonly domainPrefix: string;

  constructor(scope: Construct, id: string, props: AuthProps) {
    super(scope, id);

    const stack = Stack.of(this);

    this.userPool = new cognito.UserPool(this, "Pool", {
      removalPolicy: RemovalPolicy.DESTROY,
      userPoolName: namer().regional(),
      signInAliases: {
        username: false,
        email: true,
      },
      autoVerify: {
        email: true,
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: false,
        tempPasswordValidity: Duration.days(7),
      },
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: "Verify Your Email for Aprovan",
        emailBody:
          "Thanks for signing up for Aprovan! Verify your account by clicking on {##Verify Email##}",
        emailStyle: cognito.VerificationEmailStyle.LINK,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
    });

    const postConfirmation = new PostConfirmationLambda(this, "PostConfirmation", {
      usersTable: props.usersTable,
      workspacesTable: props.workspacesTable,
      membershipsTable: props.membershipsTable,
      invitesTable: props.invitesTable,
    });

    this.userPool.addTrigger(
      cognito.UserPoolOperation.POST_CONFIRMATION,
      postConfirmation.function,
    );

    const callbackUrls = [
      ...(props.callbackUrl ? [props.callbackUrl] : []),
      ...LOCALHOST_CALLBACK_URLS,
    ];

    const logoutUrls = [
      ...(props.logoutUrl ? [props.logoutUrl] : []),
      ...LOCALHOST_CALLBACK_URLS,
    ];

    this.userPoolClient = this.userPool.addClient("Client", {
      userPoolClientName: namer().regional(),
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [
          cognito.OAuthScope.OPENID,
          cognito.OAuthScope.PROFILE,
          cognito.OAuthScope.EMAIL,
        ],
        callbackUrls,
        logoutUrls,
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
        ...(props.googleClientId && props.googleClientSecret
          ? [cognito.UserPoolClientIdentityProvider.GOOGLE]
          : []),
      ],
    });

    this.domainPrefix = namer().regional();
    this.userPoolDomain = this.userPool.addDomain("Domain", {
      cognitoDomain: {
        domainPrefix: this.domainPrefix,
      },
    });

    this.signInUrl = COGNITO_DOMAIN_TEMPLATE(this.domainPrefix, stack.region);

    if (props.googleClientId && props.googleClientSecret) {
      new cognito.UserPoolIdentityProviderGoogle(this, "GoogleProvider", {
        userPool: this.userPool,
        clientId: props.googleClientId,
        clientSecret: props.googleClientSecret,
        attributeMapping: {
          email: cognito.ProviderAttribute.GOOGLE_EMAIL,
        },
        scopes: ["email"],
      });
    }

    new CfnOutput(this, "UserPoolId", {
      value: this.userPool.userPoolId,
      exportName: namer().regional("user-pool-id"),
    });

    new CfnOutput(this, "UserPoolClientId", {
      value: this.userPoolClient.userPoolClientId,
      exportName: namer().regional("user-pool-client-id"),
    });

    new CfnOutput(this, "UserPoolDomainName", {
      value: this.domainPrefix,
    });
  }
}
