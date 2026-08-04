export type Error = {
  /** A short identifier corresponding to the HTTP status code returned. For  example, the ID for a response returning a 404 status code would be "not_found." */
  id: string;
  /** A message providing additional information about the error, including  details to help resolve it when possible. */
  message: string;
  /** Optionally, some endpoints may include a request ID that should be  provided when reporting bugs or opening support tickets to help  identify the issue. */
  request_id?: string;
};

export type OneClicks = {
  /** The slug identifier for the 1-Click application. */
  slug: string;
  /** The type of the 1-Click application. */
  type: string;
};

export type OneClicksCreate = {
  /** An array of 1-Click Application slugs to be installed to the Kubernetes cluster. */
  addon_slugs: (string)[];
  /** A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed. */
  cluster_uuid: string;
};

export type Account = {
  /** The total number of Droplets current user or team may have active at one time. <br><br>Requires `droplet:read` scope.  */
  droplet_limit: number;
  /** The total number of Floating IPs the current user or team may have. <br><br>Requires `reserved_ip:read` scope.  */
  floating_ip_limit: number;
  /** The email address used by the current user to register for DigitalOcean. */
  email: string;
  /** The display name for the current user. */
  name?: string;
  /** The unique universal identifier for the current user. */
  uuid: string;
  /** If true, the user has verified their account via email. False otherwise. */
  email_verified: boolean;
  /** This value is one of "active", "warning" or "locked". */
  status: "active" | "warning" | "locked";
  /** A human-readable message giving more details about the status of the account. */
  status_message: string;
  /** When authorized in a team context, includes information about the current team. */
  team?: { uuid?: string; name?: string };
};

/** A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet. */
export type SshKeyId = number;

/** A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account. */
export type SshKeyFingerprint = string;

/** A human-readable display name for this key, used to easily identify the SSH keys when they are displayed. */
export type SshKeyName = string;

export type SshKeys = {
  id?: SshKeyId;
  fingerprint?: SshKeyFingerprint;
  /** The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation. */
  public_key: string;
  name: SshKeyName;
};

export type LinkToLastPage = {
  /** URI of the last page of the results. */
  last?: string;
};

export type LinkToNextPage = {
  /** URI of the next page of the results. */
  next?: string;
};

export type ForwardLinks = LinkToLastPage & LinkToNextPage;

export type LinkToFirstPage = {
  /** URI of the first page of the results. */
  first?: string;
};

export type LinkToPrevPage = {
  /** URI of the previous page of the results. */
  prev?: string;
};

export type BackwardLinks = LinkToFirstPage & LinkToPrevPage;

export type PageLinks = {
  pages?: ForwardLinks | BackwardLinks | unknown;
};

export type Pagination = {
  links?: PageLinks;
};

/** Information about the response itself. */
export type MetaProperties = {
  /** Number of objects returned by the request. */
  total?: number;
};

export type Meta = {
  meta: MetaProperties & unknown;
};

export type Region = {
  /** The display name of the region.  This will be a full name that is used in the control panel and other interfaces. */
  name: string;
  /** A human-readable string that is used as a unique identifier for each region. */
  slug: string;
  /** This attribute is set to an array which contains features available in this region */
  features: (string)[];
  /** This is a boolean value that represents whether new Droplets can be created in this region. */
  available: boolean;
  /** This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view. */
  sizes: (string)[];
};

export type Action = {
  /** A unique numeric ID that can be used to identify and reference an action. */
  id?: number;
  /** The current status of the action. This can be "in-progress", "completed", or "errored". */
  status?: "in-progress" | "completed" | "errored";
  /** This is the type of action that the object represents. For example, this could be "transfer" to represent the state of an image transfer action. */
  type?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the action was initiated. */
  started_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the action was completed. */
  completed_at?: string | null;
  /** A unique identifier for the resource that the action is associated with. */
  resource_id?: number | null;
  /** The type of resource that the action is associated with. */
  resource_type?: string;
  region?: Region;
  /** A human-readable string that is used as a unique identifier for each region. */
  region_slug?: string | null;
};

export type AddonsFeature = {
  /** Unique identifier for the app feature. */
  id: number;
  /** Name of the feature. */
  name: string;
  /** Feature type, indicating the kind of data it holds. */
  type: "unknown" | "string" | "boolean" | "allowance";
  /** Unit of measurement for the feature, if applicable. Units apply to allowance features. */
  unit?: "unit_unknown" | "GB" | "GIB" | "count" | "byte" | "byte_second";
  /** Value of the feature, which can vary based on the type. */
  value: string | boolean | string;
  /** Timestamp when the feature was created. */
  created_at: string;
  /** Timestamp when the feature was last updated. */
  updated_at: string;
};

export type AddonsDimensionVolumeWithPrice = {
  /** Unique identifier for the addon. */
  id: number;
  /** The minimum volume for the volume pricing tier. */
  low_volume: number;
  /** The maximum volume for the volume pricing tier. */
  max_volume: number;
  /** The price per unit for the volume tier in US dollars. */
  price_per_unit: string;
};

export type AddonsDimensionWithPrice = {
  /** Unique identifier for the dimension. */
  id: number;
  /** Unique string identifier for the dimension, tied to a price. */
  sku: string;
  /** Slug identifier for the dimension. */
  slug: string;
  /** Display name for the dimension. */
  display_name: string;
  /** Name of the feature associated with the dimension. */
  feature_name: string;
  /** A list of volumes associated with the dimension, each with its own price. */
  volumes: (AddonsDimensionVolumeWithPrice)[];
};

export type AddonsPlan = {
  /** ID of a given plan. */
  id: number;
  /** ID of the app associated with this plan. */
  app_id: number;
  /** Display name for a given plan. */
  display_name: string;
  /** Description of an app plan. */
  description?: string;
  /** Slug identifier for the plan. */
  slug: string;
  /** Price of a month's usage of the plan in US dollars. */
  price_per_month: number;
  /** Indicates if the plan is currently active. */
  active: boolean;
  /** Current state of the plan. */
  state: "unknown" | "draft" | "in_review" | "approved" | "suspended" | "archived";
  /** List of features included in the plan. */
  features?: (AddonsFeature)[];
  /** Timestamp when the plan was created. */
  created_at: string;
  /** Timestamp when the plan was last updated. */
  updated_at: string;
  /** Indicates if the plan is available for selection. */
  available: boolean;
  /** Unique identifier for the plan. */
  uuid: string;
  /** Indicates if this plan is the default option for the app. */
  by_default: boolean;
  /** List of dimensions associated with the plan, each with its own pricing. */
  dimensions?: (AddonsDimensionWithPrice)[];
};

export type AddonsAppInfo = {
  /** The slug identifier for the application associated with the resource. */
  app_slug: string;
  /** The Terms of Service URL for the resource. */
  tos: string;
  /** The End User License Agreement URL for the resource. */
  eula: string;
  /** A list of plans available for the resource. */
  plans: (AddonsPlan)[];
};

export type AddonsAppMetadata = {
  /** Unique identifier for the addon metadata item. */
  id: number;
  /** The name of the metadata item. */
  name: string;
  /** The display name of the metadata item. */
  display_name: string;
  /** A brief description of the metadata item. */
  description: string;
  /** The data type of the metadata value. */
  type: "string" | "boolean";
  options?: (string)[];
};

export type AddonsResourceMetadata = {
  /** The name of the metadata item to be set. */
  name: string;
  /** The value to be set for the metadata item, which can be a string or boolean. */
  value: string | boolean;
};

export type AddonsResource = {
  /** The unique identifier for the addon resource. */
  uuid: string;
  /** The name of the addon resource. */
  name: string;
  /** The state the resource is currently in. */
  state: "pending" | "provisioning" | "provisioned" | "deprovisioning" | "deprovisioned" | "provisioning-failed" | "deprovisioning-failed" | "suspended";
  /** The name of the application associated with the resource. */
  app_name?: string;
  /** The slug identifier for the application associated with the resource. */
  app_slug: string;
  /** The name of the plan associated with the resource. */
  plan_name?: string;
  /** The slug identifier for the plan associated with the resource. */
  plan_slug: string;
  /** The price of the plan per month in US dollars. */
  plan_price_per_month?: number;
  /** Indicates if the resource has configuration values set by the vendor. */
  has_config: boolean;
  /** Metadata associated with the resource, set by the user. */
  metadata?: (AddonsResourceMetadata)[];
  /** The Single Sign-On URL for the resource, if applicable. */
  sso_url?: string;
  /** A message related to the resource, if applicable. */
  message?: string;
};

export type AddonsResourceNew = {
  /** The slug identifier for the application associated with the resource. */
  app_slug: string;
  /** The slug identifier for the plan associated with the resource. */
  plan_slug: string;
  /** The name of the addon resource. */
  name: string;
  /** Metadata associated with the resource, set by the user. Metadata expected varies per app, and can be verified with a GET request to "/v2/add-ons/apps/{app_slug}/metadata" */
  metadata: (AddonsResourceMetadata)[];
  /** ID of the droplet to be linked to this resource, if applicable. */
  linked_droplet_id?: number;
  /** UUID of the fleet/project to which this resource will belong. */
  fleet_uuid?: string;
};

export type AppsDeploymentJob = {
  name?: string;
  source_commit_hash?: string;
};

export type AppsDeploymentFunctions = {
  name?: string;
  /** The commit hash of the repository that was used to build this functions component. */
  source_commit_hash?: string;
  /** The namespace where the functions are deployed. */
  namespace?: string;
};

export type AppsDeploymentPhase = "UNKNOWN" | "PENDING_BUILD" | "BUILDING" | "PENDING_DEPLOY" | "DEPLOYING" | "ACTIVE" | "SUPERSEDED" | "ERROR" | "CANCELED";

export type AppsDeploymentProgressStepReason = {
  code?: string;
  message?: string;
};

export type AppsDeploymentProgressStepStatus = "UNKNOWN" | "PENDING" | "RUNNING" | "ERROR" | "SUCCESS";

export type AppsDeploymentProgressStep = {
  component_name?: string;
  ended_at?: string;
  /** The base of a human-readable description of the step intended to be combined with the component name for presentation. For example:  `message_base` = "Building service" `component_name` = "api" */
  message_base?: string;
  name?: string;
  reason?: AppsDeploymentProgressStepReason;
  started_at?: string;
  status?: AppsDeploymentProgressStepStatus;
  steps?: ({ [key: string]: unknown })[];
};

export type AppsDeploymentProgress = {
  error_steps?: number;
  pending_steps?: number;
  running_steps?: number;
  steps?: (AppsDeploymentProgressStep)[];
  success_steps?: number;
  summary_steps?: (AppsDeploymentProgressStep)[];
  total_steps?: number;
};

export type AppsDeploymentService = {
  name?: string;
  source_commit_hash?: string;
};

export type AppDomainSpec = {
  /** The hostname for the domain */
  domain: string;
  /** - DEFAULT: The default `.ondigitalocean.app` domain assigned to this app - PRIMARY: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app's live URL. Only one domain may be set as primary. - ALIAS: A non-primary domain */
  type?: "UNSPECIFIED" | "DEFAULT" | "PRIMARY" | "ALIAS";
  /** Indicates whether the domain includes all sub-domains, in addition to the given domain */
  wildcard?: boolean;
  /** Optional. If the domain uses DigitalOcean DNS and you would like App Platform to automatically manage it for you, set this to the name of the domain on your account.  For example, If the domain you are adding is `app.domain.com`, the zone could be `domain.com`. */
  zone?: string;
  /** The minimum version of TLS a client application can use to access resources for the domain.  Must be one of the following values wrapped within quotations: `"1.2"` or `"1.3"`. */
  minimum_tls_version?: "1.2" | "1.3";
};

export type AppsGitSourceSpec = {
  /** The name of the branch to use */
  branch?: string;
  /** The clone URL of the repo. Example: `https://github.com/digitalocean/sample-golang.git` */
  repo_clone_url?: string;
};

export type AppsGithubSourceSpec = {
  /** The name of the branch to use */
  branch?: string;
  /** Whether to automatically deploy new commits made to the repo */
  deploy_on_push?: boolean;
  /** The name of the repo in the format owner/repo. Example: `digitalocean/sample-golang` */
  repo?: string;
};

export type AppsGitlabSourceSpec = {
  /** The name of the branch to use */
  branch?: string;
  /** Whether to automatically deploy new commits made to the repo */
  deploy_on_push?: boolean;
  /** The name of the repo in the format owner/repo. Example: `digitalocean/sample-golang` */
  repo?: string;
};

export type AppsBitbucketSourceSpec = {
  /** The name of the branch to use */
  branch?: string;
  /** Whether to automatically deploy new commits made to the repo */
  deploy_on_push?: boolean;
  /** The name of the repo in the format owner/repo. Example: `digitalocean/sample-golang` */
  repo?: string;
};

export type AppsImageSourceSpec = {
  /** The registry name. Must be left empty for the `DOCR` registry type. */
  registry?: string;
  /** - DOCKER_HUB: The DockerHub container registry type. - DOCR: The DigitalOcean container registry type. - GHCR: The Github container registry type. */
  registry_type?: "DOCKER_HUB" | "DOCR" | "GHCR";
  /** The credentials to be able to pull the image. The value will be encrypted on first submission. On following submissions, the encrypted value should be used. - "$username:$access_token" for registries of type `DOCKER_HUB`. - "$username:$access_token" for registries of type `GHCR`. */
  registry_credentials?: string;
  /** The repository name. */
  repository?: string;
  /** The repository tag. Defaults to `latest` if not provided and no digest is provided. Cannot be specified if digest is provided. */
  tag?: string;
  /** The image digest. Cannot be specified if tag is provided. */
  digest?: string;
  deploy_on_push?: { enabled?: boolean };
};

export type AppVariableDefinition = {
  /** The variable name */
  key: string;
  /** - RUN_TIME: Made available only at run-time - BUILD_TIME: Made available only at build-time - RUN_AND_BUILD_TIME: Made available at both build and run-time */
  scope?: "UNSET" | "RUN_TIME" | "BUILD_TIME" | "RUN_AND_BUILD_TIME";
  /** - GENERAL: A plain-text environment variable - SECRET: A secret encrypted environment variable */
  type?: "GENERAL" | "SECRET";
  /** The value. If the type is `SECRET`, the value will be encrypted on first submission. On following submissions, the encrypted value should be used. */
  value?: string;
};

/** Papertrail configuration. */
export type AppLogDestinationPapertrailSpec = {
  /** Papertrail syslog endpoint. */
  endpoint: string;
};

/** DataDog configuration. */
export type AppLogDestinationDatadogSpec = {
  /** Datadog HTTP log intake endpoint. */
  endpoint?: string;
  /** Datadog API key. */
  api_key: string;
};

/** Logtail configuration. */
export type AppLogDestinationLogtailSpec = {
  /** Logtail token. */
  token?: string;
};

/** Configure Username and/or Password for Basic authentication. */
export type AppLogDestinationOpenSearchSpecBasicAuth = {
  /** Username to authenticate with. Only required when `endpoint` is set. Defaults to `doadmin` when `cluster_name` is set. */
  user?: string;
  /** Password for user defined in User. Is required when `endpoint` is set. Cannot be set if using a DigitalOcean DBaaS OpenSearch cluster. */
  password?: string;
};

/** OpenSearch configuration. */
export type AppLogDestinationOpenSearchSpec = {
  /** OpenSearch API Endpoint. Only HTTPS is supported. Format: https://<host>:<port>. Cannot be specified if `cluster_name` is also specified. */
  endpoint?: string;
  basic_auth?: AppLogDestinationOpenSearchSpecBasicAuth;
  /** The index name to use for the logs. If not set, the default index name is "logs". */
  index_name?: string;
  /** The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination. Cannot be specified if `endpoint` is also specified. */
  cluster_name?: string;
};

export type AppLogDestinationDefinition = {
  name: string;
  papertrail?: AppLogDestinationPapertrailSpec;
  datadog?: AppLogDestinationDatadogSpec;
  logtail?: AppLogDestinationLogtailSpec;
  open_search?: AppLogDestinationOpenSearchSpec;
};

export type AppComponentBase = {
  /** The name. Must be unique across all components within the same app. */
  name?: string;
  git?: AppsGitSourceSpec;
  github?: AppsGithubSourceSpec;
  gitlab?: AppsGitlabSourceSpec;
  bitbucket?: AppsBitbucketSourceSpec;
  image?: AppsImageSourceSpec;
  /** The path to the Dockerfile relative to the root of the repo. If set, it will be used to build this component. Otherwise, App Platform will attempt to build it using buildpacks. */
  dockerfile_path?: string;
  /** An optional build command to run while building this component from source. */
  build_command?: string;
  /** An optional run command to override the component's default. */
  run_command?: string;
  /** An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo. */
  source_dir?: string;
  /** A list of environment variables made available to the component. */
  envs?: (AppVariableDefinition)[];
  /** An environment slug describing the type of this app. For a full list, please refer to [the product documentation](https://docs.digitalocean.com/products/app-platform/). */
  environment_slug?: string;
  /** A list of configured log forwarding destinations. */
  log_destinations?: (AppLogDestinationDefinition)[];
};

export type AppComponentInstanceBase = {
  /** The amount of instances that this component should be scaled to. Default: 1. Must not be set if autoscaling is used. */
  instance_count?: number;
  /** The instance size to use for this component. Default: `apps-s-1vcpu-0.5gb` */
  instance_size_slug?: "apps-s-1vcpu-0.5gb" | "apps-s-1vcpu-1gb-fixed" | "apps-s-1vcpu-1gb" | "apps-s-1vcpu-2gb" | "apps-s-2vcpu-4gb" | "apps-d-1vcpu-0.5gb" | "apps-d-1vcpu-1gb" | "apps-d-1vcpu-2gb" | "apps-d-1vcpu-4gb" | "apps-d-2vcpu-4gb" | "apps-d-2vcpu-8gb" | "apps-d-4vcpu-8gb" | "apps-d-4vcpu-16gb" | "apps-d-8vcpu-32gb" | "basic-xxs" | "basic-xs" | "basic-s" | "basic-m" | "professional-xs" | "professional-s" | "professional-m" | "professional-1l" | "professional-l" | "professional-xl";
};

/** Configuration for automatically scaling this component based on metrics. */
export type AppAutoscalingSpec = {
  /** The minimum amount of instances for this component. */
  min_instance_count?: number;
  /** The maximum amount of instances for this component. Maximum 250. Consider using a larger instance size if your application requires more than 250 instances. */
  max_instance_count?: number;
  /** The metrics that the component is scaled on. */
  metrics?: { cpu?: { percent?: number } };
};

export type AppAutoscalingSpecService = AppAutoscalingSpec & { metrics?: { requests_per_second?: { per_instance?: number }; request_duration?: { p95_milliseconds?: number } } };

export type AppsStringMatch = {
  /** Exact string match. Only 1 of `exact`, `prefix`, or `regex` must be set. An empty string is a valid value and will be serialized explicitly rather than being omitted from the payload. */
  exact?: string | null;
  /** Prefix-based match. Only 1 of `exact`, `prefix`, or `regex` must be set. */
  prefix?: string | null;
  /** RE2 style regex-based match. Only 1 of `exact`, `prefix`, or `regex` must be set. For more information about RE2 syntax, see: https://github.com/google/re2/wiki/Syntax */
  regex?: string;
};

export type AppsCorsPolicy = {
  /** The set of allowed CORS origins. */
  allow_origins?: (AppsStringMatch)[];
  /** The set of allowed HTTP methods. This configures the `Access-Control-Allow-Methods` header. */
  allow_methods?: (string)[];
  /** The set of allowed HTTP request headers. This configures the `Access-Control-Allow-Headers` header. */
  allow_headers?: (string)[];
  /** The set of HTTP response headers that browsers are allowed to access. This configures the `Access-Control-Expose-Headers` header. */
  expose_headers?: (string)[];
  /** An optional duration specifying how long browsers can cache the results of a preflight request. This configures the `Access-Control-Max-Age` header. */
  max_age?: string;
  /** Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is include. This configures the `Access-Control-Allow-Credentials` header. */
  allow_credentials?: boolean;
};

export type AppServiceSpecHealthCheck = {
  /** The number of failed health checks before considered unhealthy. */
  failure_threshold?: number;
  /** The port on which the health check will be performed. If not set, the health check will be performed on the component's http_port. */
  port?: number;
  /** The route path used for the HTTP health check ping. If not set, the HTTP health check will be disabled and a TCP health check used instead. */
  http_path?: string;
  /** The number of seconds to wait before beginning health checks. */
  initial_delay_seconds?: number;
  /** The number of seconds to wait between health checks. */
  period_seconds?: number;
  /** The number of successful health checks before considered healthy. */
  success_threshold?: number;
  /** The number of seconds after which the check times out. */
  timeout_seconds?: number;
};

export type AppHealthCheckSpec = {
  /** The number of failed health checks before considered unhealthy. */
  failure_threshold?: number;
  /** The port on which the health check will be performed. */
  port?: number;
  /** The route path used for the HTTP health check ping. If not set, the HTTP health check will be disabled and a TCP health check used instead. */
  http_path?: string;
  /** The number of seconds to wait before beginning health checks. */
  initial_delay_seconds?: number;
  /** The number of seconds to wait between health checks. */
  period_seconds?: number;
  /** The number of successful health checks before considered healthy. */
  success_threshold?: number;
  /** The number of seconds after which the check times out. */
  timeout_seconds?: number;
};

export type AppRouteSpec = {
  /** (Deprecated - Use Ingress Rules instead). An HTTP path prefix. Paths must start with / and must be unique across all components within an app. */
  path?: string;
  /** An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If this value is `true`, the path will remain `/api/list`. */
  preserve_path_prefix?: boolean;
};

export type AppServiceSpecTermination = {
  /** The number of seconds to wait between selecting a container instance for termination and issuing the TERM signal. Selecting a container instance for termination begins an asynchronous drain of new requests on upstream load-balancers. (Default 15) */
  drain_seconds?: number;
  /** The number of seconds to wait between sending a TERM signal to a container and issuing a KILL which causes immediate shutdown. (Default 120) */
  grace_period_seconds?: number;
};

export type AppServiceSpec = AppComponentBase & AppComponentInstanceBase & { autoscaling?: AppAutoscalingSpecService; cors?: AppsCorsPolicy & unknown & unknown; health_check?: AppServiceSpecHealthCheck; liveness_health_check?: AppHealthCheckSpec; protocol?: "HTTP" | "HTTP2"; http_port?: number; internal_ports?: (number)[]; routes?: (AppRouteSpec)[]; termination?: AppServiceSpecTermination };

export type AppStaticSiteSpec = AppComponentBase & { index_document?: string; error_document?: string; catchall_document?: string; output_dir?: string; cors?: AppsCorsPolicy & unknown & unknown; routes?: (AppRouteSpec)[] };

export type AppJobSpecTermination = {
  /** The number of seconds to wait between sending a TERM signal to a container and issuing a KILL which causes immediate shutdown. (Default 120) */
  grace_period_seconds?: number;
};

export type AppJobSpec = AppComponentBase & AppComponentInstanceBase & { kind?: "UNSPECIFIED" | "PRE_DEPLOY" | "POST_DEPLOY" | "FAILED_DEPLOY"; termination?: AppJobSpecTermination };

export type AppWorkerSpecTermination = {
  /** The number of seconds to wait between sending a TERM signal to a container and issuing a KILL which causes immediate shutdown. (Default 120) */
  grace_period_seconds?: number;
};

export type AppWorkerSpec = AppComponentBase & AppComponentInstanceBase & { autoscaling?: AppAutoscalingSpec; termination?: AppWorkerSpecTermination; liveness_health_check?: AppHealthCheckSpec };

export type AppAlertSpecRule = "UNSPECIFIED_RULE" | "CPU_UTILIZATION" | "MEM_UTILIZATION" | "RESTART_COUNT" | "DEPLOYMENT_FAILED" | "DEPLOYMENT_LIVE" | "DOMAIN_FAILED" | "DOMAIN_LIVE" | "AUTOSCALE_FAILED" | "AUTOSCALE_SUCCEEDED" | "FUNCTIONS_ACTIVATION_COUNT" | "FUNCTIONS_AVERAGE_DURATION_MS" | "FUNCTIONS_ERROR_RATE_PER_MINUTE" | "FUNCTIONS_AVERAGE_WAIT_TIME_MS" | "FUNCTIONS_ERROR_COUNT" | "FUNCTIONS_GB_RATE_PER_SECOND" | "REQUESTS_PER_SECOND" | "REQUEST_DURATION_P95_MS";

export type AppAlertSpecOperator = "UNSPECIFIED_OPERATOR" | "GREATER_THAN" | "LESS_THAN";

export type AppAlertSpecWindow = "UNSPECIFIED_WINDOW" | "FIVE_MINUTES" | "TEN_MINUTES" | "THIRTY_MINUTES" | "ONE_HOUR";

export type AppAlertSpec = {
  rule?: AppAlertSpecRule;
  /** Is the alert disabled? */
  disabled?: boolean;
  operator?: AppAlertSpecOperator;
  /** Threshold value for alert */
  value?: number;
  window?: AppAlertSpecWindow;
};

export type AppFunctionsSpec = {
  cors?: AppsCorsPolicy & unknown & unknown;
  /** (Deprecated - Use Ingress Rules instead). A list of HTTP routes that should be routed to this component. */
  routes?: (AppRouteSpec)[];
  /** The name. Must be unique across all components within the same app. */
  name: string;
  /** An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo. */
  source_dir?: string;
  alerts?: (AppAlertSpec)[];
  /** A list of environment variables made available to the component. */
  envs?: (AppVariableDefinition)[];
  git?: AppsGitSourceSpec;
  github?: AppsGithubSourceSpec;
  gitlab?: AppsGitlabSourceSpec;
  bitbucket?: AppsBitbucketSourceSpec;
  /** A list of configured log forwarding destinations. */
  log_destinations?: (AppLogDestinationDefinition)[];
};

export type AppDatabaseSpec = {
  /** The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned. */
  cluster_name?: string;
  /** The name of the MySQL or PostgreSQL database to configure. */
  db_name?: string;
  /** The name of the MySQL or PostgreSQL user to configure. */
  db_user?: string;
  /** - MYSQL: MySQL - PG: PostgreSQL - REDIS: Caching - MONGODB: MongoDB - KAFKA: Kafka - OPENSEARCH: OpenSearch - VALKEY: ValKey */
  engine?: "UNSET" | "MYSQL" | "PG" | "REDIS" | "MONGODB" | "KAFKA" | "OPENSEARCH" | "VALKEY";
  /** The database's name. The name must be unique across all components within the same app and cannot use capital letters. */
  name: string;
  /** Whether this is a production or dev database. */
  production?: boolean;
  /** The version of the database engine */
  version?: string;
};

/** The path to match on. */
export type AppIngressSpecRuleStringMatchPrefix = {
  /** Prefix-based match. For example, `/api` will match `/api`, `/api/`, and any nested paths such as `/api/v1/endpoint`. */
  prefix: string | null;
};

/** The authority to match on. */
export type AppIngressSpecRuleStringMatchExact = {
  /** Exact string match. An empty string is a valid value and will be serialized explicitly rather than being omitted from the payload. */
  exact: string | null;
};

/** The match configuration for the rule. */
export type AppIngressSpecRuleMatch = {
  path?: AppIngressSpecRuleStringMatchPrefix;
  authority?: AppIngressSpecRuleStringMatchExact;
};

/** The component to route to. Only one of `component` or `redirect` may be set. */
export type AppIngressSpecRuleRoutingComponent = {
  /** The name of the component to route to. */
  name: string;
  /** An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If this value is `true`, the path will remain `/api/list`. Note: this is not applicable for Functions Components and is mutually exclusive with `rewrite`. */
  preserve_path_prefix?: string;
  /** An optional field that will rewrite the path of the component to be what is specified here. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If you specified the rewrite to be `/v1/`, requests to `/api/list` would be rewritten to `/v1/list`. Note: this is mutually exclusive with `preserve_path_prefix`. */
  rewrite?: string;
};

/** The redirect configuration for the rule. Only one of `component` or `redirect` may be set. */
export type AppIngressSpecRuleRoutingRedirect = {
  /** An optional URI path to redirect to. Note: if this is specified the whole URI of the original request will be overwritten to this value, irrespective of the original request URI being matched. */
  uri?: string;
  /** The authority/host to redirect to. This can be a hostname or IP address. Note: use `port` to set the port. */
  authority?: string;
  /** The port to redirect to. */
  port?: number;
  /** The scheme to redirect to. Supported values are `http` or `https`. Default: `https`. */
  scheme?: string;
  /** The redirect code to use. Defaults to `302`. Supported values are 300, 301, 302, 303, 304, 307, 308. */
  redirect_code?: number;
};

export type AppIngressSpecRule = {
  match?: AppIngressSpecRuleMatch;
  cors?: AppsCorsPolicy;
  component?: AppIngressSpecRuleRoutingComponent;
  redirect?: AppIngressSpecRuleRoutingRedirect;
};

/** Specification for app ingress configurations. */
export type AppIngressSpec = {
  /** Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects. */
  rules?: (AppIngressSpecRule)[];
  /** Optional HTTPS URL of a custom error page to display when the app is unreachable. The page is shown in a full-viewport iframe. The target must allow framing: avoid `X-Frame-Options: DENY` and a restrictive `Content-Security-Policy` `frame-ancestors` that blocks the platform. If omitted, the default platform error page is used. */
  custom_error_page_url?: string;
};

export type AppEgressTypeSpec = "AUTOASSIGN" | "DEDICATED_IP";

/** Specification for app egress configurations. */
export type AppEgressSpec = {
  type?: AppEgressTypeSpec;
};

/** Specification to configure maintenance settings for the app, such as maintenance mode and archiving the app. */
export type AppMaintenanceSpec = {
  /** Indicates whether maintenance mode should be enabled for the app. */
  enabled?: boolean;
  /** Indicates whether the app should be archived. Setting this to true implies that enabled is set to true. */
  archive?: boolean;
  /** A custom offline page to display when maintenance mode is enabled or the app is archived. */
  offline_page_url?: string;
};

export type AppsVpcEgressIp = {
  ip?: string;
};

export type AppsVpc = {
  id?: string;
  egress_ips?: (AppsVpcEgressIp)[];
};

/** The desired configuration of an application. */
export type AppSpec = {
  /** The name of the app. Must be unique across all apps in the same account. */
  name: string;
  /** The slug form of the geographical origin of the app. Default: `nearest available` */
  region?: "atl" | "nyc" | "sfo" | "tor" | "ams" | "fra" | "lon" | "blr" | "sgp" | "syd";
  /** If set to `true`, the app will **not** be cached at the edge (CDN). Enable this option if you want to manage CDN configuration yourself—whether by using an external CDN provider or by handling static content and caching within your app. This setting is also recommended for apps that require real-time data or serve dynamic content, such as those using Server-Sent Events (SSE) over GET, or hosting an MCP (Model Context Protocol) Server that utilizes SSE.   **Note:** This feature is not available for static site components.   For more information, see [Disable CDN Cache](https://docs.digitalocean.com/products/app-platform/how-to/cache-content/#disable-cdn-cache). */
  disable_edge_cache?: boolean;
  /** If set to `true`, email addresses in the app will not be obfuscated. This is useful for apps that require email addresses to be visible (in the HTML markup). */
  disable_email_obfuscation?: boolean;
  /** If set to `true`, suspicious requests will go through additional security checks to help mitigate layer 7 DDoS attacks. */
  enhanced_threat_control_enabled?: boolean;
  /** A set of hostnames where the application will be available. */
  domains?: (AppDomainSpec)[];
  /** Workloads which expose publicly-accessible HTTP services. */
  services?: (AppServiceSpec)[];
  /** Content which can be rendered to static web assets. */
  static_sites?: (AppStaticSiteSpec)[];
  /** Pre and post deployment workloads which do not expose publicly-accessible HTTP routes. */
  jobs?: (AppJobSpec)[];
  /** Workloads which do not expose publicly-accessible HTTP services. */
  workers?: (AppWorkerSpec)[];
  /** Workloads which expose publicly-accessible HTTP services via Functions Components. */
  functions?: (AppFunctionsSpec)[];
  /** Database instances which can provide persistence to workloads within the application. */
  databases?: (AppDatabaseSpec)[];
  ingress?: AppIngressSpec;
  egress?: AppEgressSpec;
  maintenance?: AppMaintenanceSpec;
  vpc?: AppsVpc;
};

export type AppsDeploymentStaticSite = {
  name?: string;
  source_commit_hash?: string;
};

export type AppsDeploymentWorker = {
  name?: string;
  source_commit_hash?: string;
};

export type AppsDeployment = {
  cause?: string;
  cloned_from?: string;
  created_at?: string;
  id?: string;
  jobs?: (AppsDeploymentJob)[];
  functions?: (AppsDeploymentFunctions)[];
  phase?: AppsDeploymentPhase;
  phase_last_updated_at?: string;
  progress?: AppsDeploymentProgress;
  services?: (AppsDeploymentService)[];
  spec?: AppSpec;
  static_sites?: (AppsDeploymentStaticSite)[];
  tier_slug?: string;
  updated_at?: string;
  workers?: (AppsDeploymentWorker)[];
};

export type AppsDomainPhase = "UNKNOWN" | "PENDING" | "CONFIGURING" | "ACTIVE" | "ERROR";

export type AppsDomainProgress = {
  steps?: ({ [key: string]: unknown })[];
};

export type AppDomainValidation = {
  txt_name?: string;
  txt_value?: string;
};

export type AppsDomain = {
  id?: string;
  phase?: AppsDomainPhase;
  progress?: AppsDomainProgress;
  spec?: AppDomainSpec;
  validations?: (AppDomainValidation)[];
  rotate_validation_records?: boolean;
  certificate_expires_at?: string;
};

export type AppsRegion = {
  continent?: string;
  data_centers?: (string)[];
  /** Whether or not the region is presented as the default. */
  default?: boolean;
  disabled?: boolean;
  flag?: string;
  label?: string;
  reason?: string;
  slug?: string;
};

export type AppsDedicatedEgressIpStatus = "UNKNOWN" | "ASSIGNING" | "ASSIGNED" | "REMOVED";

export type AppsDedicatedEgressIp = {
  ip?: string;
  id?: string;
  status?: AppsDedicatedEgressIpStatus;
};

/** An application's configuration and status. */
export type App = {
  active_deployment?: AppsDeployment;
  created_at?: string;
  default_ingress?: string;
  domains?: (AppsDomain)[];
  id?: string;
  in_progress_deployment?: AppsDeployment;
  last_deployment_created_at?: string;
  live_domain?: string;
  live_url?: string;
  live_url_base?: string;
  owner_uuid?: string;
  pending_deployment?: unknown & AppsDeployment;
  /** Requires `project:read` scope. */
  project_id?: string;
  region?: AppsRegion;
  spec: AppSpec;
  tier_slug?: string;
  updated_at?: string;
  pinned_deployment?: unknown & AppsDeployment;
  dedicated_ips?: (AppsDedicatedEgressIp)[];
  vpc?: AppsVpc;
};

export type AppsResponse = { apps?: (App)[] } & Pagination & Meta;

export type AppsCreateAppRequest = {
  spec: AppSpec;
  /** The ID of the project the app should be assigned to. If omitted, it will be assigned to your default project. <br><br>Requires `project:assign_resource` scope.  */
  project_id?: string;
};

export type AppResponse = {
  app?: App;
};

export type AppsUpdateAppRequest = {
  spec: AppSpec;
  /** Whether or not to update the source versions (for example fetching a new commit or image digest) of all components. By default (when this is false) only newly added sources will be updated to avoid changes like updating the scale of a component from also updating the respective code. */
  update_all_source_versions?: boolean;
};

export type AppsDeleteAppResponse = {
  id?: string;
};

export type AppsRestartRequest = {
  components?: (string)[];
};

export type AppsDeploymentResponse = {
  deployment?: AppsDeployment;
};

export type AppsGetLogsResponse = {
  historic_urls?: (string)[];
  /** A URL of the real-time live logs. This URL may use either the `https://` or `wss://` protocols and will keep pushing live logs as they become available. */
  live_url?: string;
};

export type AppsGetExecResponse = {
  /** A websocket URL that allows sending/receiving console input and receiving console output. */
  url?: string;
};

export type AppInstance = {
  /** Name of the component, from the app spec. */
  component_name?: string;
  /** Supported compute component by DigitalOcean App Platform. */
  component_type?: "SERVICE" | "WORKER" | "JOB";
  /** Name of the instance, which is a unique identifier for the instance. */
  instance_name?: string;
  /** Readable identifier, an alias of the instance name, reference for mapping insights to instance names. */
  instance_alias?: string;
};

export type AppInstances = {
  instances?: (AppInstance)[];
};

export type AppsDeploymentsResponse = { deployments?: (AppsDeployment)[] } & Pagination & Meta;

export type AppsCreateDeploymentRequest = {
  force_build?: boolean;
};

export type Schema = string;

export type AppJobInvocation = {
  id?: string;
  job_name?: string;
  deployment_id?: string;
  /** The phase of the job invocation */
  phase?: "UNKNOWN" | "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED" | "SKIPPED";
  trigger?: { type?: "MANUAL" | "SCHEDULE" | "UNKNOWN"; scheduled?: { schedule?: { cron?: string; time_zone?: string } }; manual?: { user?: { uuid?: string; email?: string; full_name?: string } } };
  created_at?: string;
  started_at?: string;
  completed_at?: string;
};

export type AppJobInvocations = { job_invocations?: (AppJobInvocation)[] } & Pagination;

export type AppEvent = {
  id?: string;
  /** The type of event */
  type?: "UNKNOWN" | "DEPLOYMENT" | "AUTOSCALING";
  created_at?: string;
  /** For deployment events, this is the same as the deployment's ID. For autoscaling events, this is the deployment that was autoscaled. */
  deployment_id?: string;
  deployment?: AppsDeployment;
  /** Autoscaling event details. Only present for autoscaling events. */
  autoscaling?: { phase?: "UNKNOWN" | "PENDING" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "CANCELED"; components?: { [key: string]: { from?: number; to?: number; triggering_metric?: string } | undefined } };
};

export type AppEvents = { events?: (AppEvent)[] } & Pagination;

export type InstanceSizeCpuType = "UNSPECIFIED" | "SHARED" | "DEDICATED";

export type AppsInstanceSize = {
  bandwidth_allowance_gib?: string;
  cpu_type?: InstanceSizeCpuType;
  cpus?: string;
  deprecation_intent?: boolean;
  memory_bytes?: string;
  name?: string;
  scalable?: boolean;
  single_instance_only?: boolean;
  slug?: string;
  tier_downgrade_to?: string;
  tier_slug?: string;
  tier_upgrade_to?: string;
  usd_per_month?: string;
  usd_per_second?: string;
};

export type AppsListInstanceSizesResponse = {
  discount_percent?: number;
  instance_sizes?: (AppsInstanceSize)[];
};

export type AppsGetInstanceSizeResponse = {
  instance_size?: AppsInstanceSize;
};

export type AppsListRegionsResponse = {
  regions?: (AppsRegion)[];
};

export type AppPropose = {
  spec: AppSpec;
  /** An optional ID of an existing app. If set, the spec will be treated as a proposed update to the specified app. The existing app is not modified using this method. */
  app_id?: string;
};

export type AppProposeResponse = {
  /** Indicates whether the app is a static app. */
  app_is_static?: boolean;
  /** Indicates whether the app name is available. */
  app_name_available?: boolean;
  /** The suggested name if the proposed app name is unavailable. */
  app_name_suggestion?: string;
  /** The maximum number of free static apps the account can have. We will charge you for any additional static apps. */
  existing_static_apps?: string;
  spec?: AppSpec;
  /** The monthly cost of the proposed app in USD. */
  app_cost?: number;
  /** The monthly cost of the proposed app in USD using the previous pricing plan tier. For example, if you propose an app that uses the Professional tier, the `app_tier_downgrade_cost` field displays the monthly cost of the app if it were to use the Basic tier. If the proposed app already uses the lest expensive tier, the field is empty. */
  app_tier_downgrade_cost?: number;
};

export type AppAlertEmail = string;

export type AppAlertSlackWebhook = {
  url?: string;
  channel?: string;
};

export type AppAlertPhase = "UNKNOWN" | "PENDING" | "CONFIGURING" | "ACTIVE" | "ERROR";

export type AppAlertProgressStepStatus = "UNKNOWN" | "PENDING" | "RUNNING" | "ERROR" | "SUCCESS";

export type AppAlertProgressStepReason = {
  code?: string;
  message?: string;
};

export type AppAlertProgressStep = {
  name?: string;
  status?: AppAlertProgressStepStatus;
  started_at?: string;
  ended_at?: string;
  reason?: AppAlertProgressStepReason;
};

export type AppAlertProgress = {
  steps?: (AppAlertProgressStep)[];
};

export type AppAlert = {
  id?: string;
  component_name?: string;
  spec?: AppAlertSpec;
  emails?: (AppAlertEmail)[];
  slack_webhooks?: (AppAlertSlackWebhook)[];
  phase?: AppAlertPhase;
  progress?: AppAlertProgress;
};

export type AppsListAlertsResponse = {
  alerts?: (AppAlert)[];
};

export type AppsAssignAppAlertDestinationsRequest = {
  emails?: (AppAlertEmail)[];
  slack_webhooks?: (AppAlertSlackWebhook)[];
};

export type AppsAlertResponse = {
  alert?: AppAlert;
};

export type AppsRollbackAppRequest = {
  /** The ID of the deployment to rollback to. */
  deployment_id?: string;
  /** Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned. */
  skip_pin?: boolean;
};

export type AppRollbackValidationCondition = {
  /** A code identifier that represents the failing condition.  Failing conditions:   - `incompatible_phase` - indicates that the deployment's phase is not suitable for rollback.   - `incompatible_result` - indicates that the deployment's result is not suitable for rollback.   - `exceeded_revision_limit` - indicates that the app has exceeded the rollback revision limits for its tier.   - `app_pinned` - indicates that there is already a rollback in progress and the app is pinned.   - `database_config_conflict` - indicates that the deployment's database config is different than the current config.   - `region_conflict` - indicates that the deployment's region differs from the current app region.    Warning conditions:   - `static_site_requires_rebuild` - indicates that the deployment contains at least one static site that will require a rebuild.   - `image_source_missing_digest` - indicates that the deployment contains at least one component with an image source that is missing a digest.  */
  code?: "incompatible_phase" | "incompatible_result" | "exceeded_revision_limit" | "app_pinned" | "database_config_conflict" | "region_conflict" | "static_site_requires_rebuild" | "image_source_missing_digest";
  /** A human-readable message describing the failing condition. */
  message?: string;
  components?: (string)[];
};

/** Bandwidth usage for an app. */
export type AppMetricsBandwidthUsageDetails = {
  /** The ID of the app. */
  app_id?: string;
  /** The used bandwidth amount in bytes. */
  bandwidth_bytes?: string;
};

export type AppMetricsBandwidthUsage = {
  /** A list of bandwidth usage details by app. */
  app_bandwidth_usage?: (AppMetricsBandwidthUsageDetails)[];
  /** The date for the metrics data. */
  date?: string;
};

export type AppMetricsBandwidthUsageRequest = {
  /** A list of app IDs to query bandwidth metrics for. */
  app_ids: (string)[];
  /** Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday. */
  date?: string;
};

export type AppComponentHealth = {
  name?: string;
  cpu_usage_percent?: number;
  memory_usage_percent?: number;
  replicas_desired?: number;
  replicas_ready?: number;
  state?: "UNKNOWN" | "HEALTHY" | "UNHEALTHY";
};

export type AppFunctionsComponentHealth = {
  name?: string;
  functions_component_health_metrics?: ({ metric_label?: string; metric_value?: number; time_window?: string })[];
};

export type AppHealth = {
  components?: (AppComponentHealth)[];
  functions_components?: (AppFunctionsComponentHealth)[];
};

export type AppHealthResponse = {
  app_health?: AppHealth;
};

export type CdnEndpoint = {
  /** A unique ID that can be used to identify and reference a CDN endpoint. */
  id?: string;
  /** The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space. */
  origin: string;
  /** The fully qualified domain name (FQDN) from which the CDN-backed content is served. */
  endpoint?: string;
  /** The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded. */
  ttl?: 60 | 600 | 3600 | 86400 | 604800;
  /** The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. */
  certificate_id?: string;
  /** The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. */
  custom_domain?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created. */
  created_at?: string;
};

export type UpdateEndpoint = {
  /** The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded. */
  ttl?: 60 | 600 | 3600 | 86400 | 604800;
  /** The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. */
  certificate_id?: string;
  /** The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. */
  custom_domain?: string;
};

export type PurgeCache = {
  /** An array of strings containing the path to the content to be purged from the CDN cache. */
  files: (string)[];
};

export type Certificate = {
  /** A unique ID that can be used to identify and reference a certificate. */
  id?: string;
  /** A unique human-readable name referring to a certificate. */
  name?: string;
  /** A time value given in ISO8601 combined date and time format that represents the certificate's expiration date. */
  not_after?: string;
  /** A unique identifier generated from the SHA-1 fingerprint of the certificate. */
  sha1_fingerprint?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the certificate was created. */
  created_at?: string;
  /** An array of fully qualified domain names (FQDNs) for which the certificate was issued. */
  dns_names?: (string)[];
  /** A string representing the current state of the certificate. It may be `pending`, `verified`, or `error`. */
  state?: "pending" | "verified" | "error";
  /** A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt. */
  type?: "custom" | "lets_encrypt";
};

export type CertificateCreateBase = {
  /** A unique human-readable name referring to a certificate. */
  name: string;
  /** A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt. */
  type?: "custom" | "lets_encrypt";
};

export type CertificateRequestLetsEncrypt = CertificateCreateBase & { dns_names: (string)[] };

export type CertificateRequestCustom = CertificateCreateBase & { private_key: string; leaf_certificate: string; certificate_chain?: string };

export type Balance = {
  /** Balance as of the `generated_at` time.  This value includes the `account_balance` and `month_to_date_usage`. */
  month_to_date_balance?: string;
  /** Current balance of the customer's most recent billing activity.  Does not reflect `month_to_date_usage`. */
  account_balance?: string;
  /** Amount used in the current billing period as of the `generated_at` time. */
  month_to_date_usage?: string;
  /** The time at which balances were most recently generated. */
  generated_at?: string;
};

export type BillingHistory = {
  /** Description of the billing history entry. */
  description?: string;
  /** Amount of the billing history entry. */
  amount?: string;
  /** ID of the invoice associated with the billing history entry, if  applicable. */
  invoice_id?: string;
  /** UUID of the invoice associated with the billing history entry, if  applicable. */
  invoice_uuid?: string;
  /** Time the billing history entry occurred. */
  date?: string;
  /** Type of billing history entry. */
  type?: "ACHFailure" | "Adjustment" | "AttemptFailed" | "Chargeback" | "Credit" | "CreditExpiration" | "Invoice" | "Payment" | "Refund" | "Reversal";
};

export type MetaOptionalTotal = {
  meta: MetaProperties;
};

/** The invoice preview. */
export type InvoicePreview = {
  /** The UUID of the invoice. The canonical reference for the invoice. */
  invoice_uuid?: string;
  /** ID of the invoice. Listed on the face of the invoice PDF as the "Invoice number". */
  invoice_id?: string;
  /** Total amount of the invoice, in USD.  This will reflect month-to-date usage in the invoice preview. */
  amount?: string;
  /** Billing period of usage for which the invoice is issued, in `YYYY-MM`  format. */
  invoice_period?: string;
  /** Time the invoice was last updated.  This is only included with the invoice preview. */
  updated_at?: string;
};

export type InvoiceItem = {
  /** Name of the product being billed in the invoice item. */
  product?: string;
  /** UUID of the resource billing in the invoice item if available. */
  resource_uuid?: string;
  /** ID of the resource billing in the invoice item if available. */
  resource_id?: string;
  /** Description of the invoice item when it is a grouped set of usage, such  as DOKS or databases. */
  group_description?: string;
  /** Description of the invoice item. */
  description?: string;
  /** Billed amount of this invoice item. Billed in USD. */
  amount?: string;
  /** Duration of time this invoice item was used and subsequently billed. */
  duration?: string;
  /** Unit of time for duration. */
  duration_unit?: string;
  /** Time the invoice item began to be billed for usage. */
  start_time?: string;
  /** Time the invoice item stopped being billed for usage. */
  end_time?: string;
  /** Name of the DigitalOcean Project this resource belongs to. */
  project_name?: string;
};

export type BillingAddress = {
  /** Street address line 1 */
  address_line1?: string;
  /** Street address line 2 */
  address_line2?: string;
  /** City */
  city?: string;
  /** Region */
  region?: string;
  /** Postal code */
  postal_code?: string;
  /** Country (ISO2) code */
  country_iso2_code?: string;
  /** Timestamp billing address was created */
  created_at?: string;
  /** Timestamp billing address was updated */
  updated_at?: string;
};

export type ProductChargeItem = {
  /** Amount of the charge */
  amount?: string;
  /** Description of the charge */
  name?: string;
  /** Number of times the charge was applied */
  count?: string;
};

export type ProductUsageCharges = {
  /** Description of usage charges */
  name?: string;
  /** Total amount charged */
  amount?: string;
  /** List of amount, and grouped aggregates by resource type. */
  items?: (ProductChargeItem)[];
};

export type SimpleCharge = {
  /** Name of the charge */
  name?: string;
  /** Total amount charged in USD */
  amount?: string;
};

export type InvoiceSummary = {
  /** UUID of the invoice */
  invoice_uuid?: string;
  /** ID of the invoice */
  invoice_id?: string;
  /** Billing period of usage for which the invoice is issued, in `YYYY-MM`  format. */
  billing_period?: string;
  /** Total amount of the invoice, in USD.  This will reflect month-to-date usage in the invoice preview. */
  amount?: string;
  /** Name of the DigitalOcean customer being invoiced. */
  user_name?: string;
  user_billing_address?: unknown & BillingAddress;
  /** Company of the DigitalOcean customer being invoiced, if set. */
  user_company?: string;
  /** Email of the DigitalOcean customer being invoiced. */
  user_email?: string;
  product_charges?: unknown & ProductUsageCharges;
  overages?: unknown & SimpleCharge;
  taxes?: unknown & SimpleCharge;
  credits_and_adjustments?: unknown & SimpleCharge;
};

export type BillingDataPoint = {
  /** URN of the team that incurred the usage */
  usage_team_urn?: string;
  /** Start date of the billing data point in YYYY-MM-DD format */
  start_date?: string;
  /** Total amount for this data point in USD */
  total_amount?: string;
  /** Region where the usage occurred */
  region?: string;
  /** Unique SKU identifier for the billed resource */
  sku?: string;
  /** Description of the billed resource or service as shown on an invoice item */
  description?: string;
  /** Optional invoice item group name of the billed resource or service, blank when not part an invoice item group */
  group_description?: string;
};

export type DatabaseRegionOptions = {
  /** An array of strings containing the names of available regions */
  regions?: (string)[];
};

export type DatabaseVersionOptions = {
  /** An array of strings containing the names of available regions */
  versions?: (string)[];
};

export type DatabaseLayoutOption = {
  num_nodes?: number;
  /** An array of objects containing the slugs available with various node counts */
  sizes?: (string)[];
};

export type DatabaseLayoutOptions = {
  /** An array of objects, each indicating the node sizes (otherwise referred to as slugs) that are available with various numbers of nodes in the database cluster. Each slugs denotes the node's identifier, CPU, and RAM (in that order). */
  layouts?: (DatabaseLayoutOption)[];
};

export type DatabaseVersionAvailability = {
  /** A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline. */
  end_of_life?: string | null;
  /** A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline. */
  end_of_availability?: string | null;
  /** The engine version. */
  version?: string;
};

/** An array of objects, each indicating the version end-of-life, end-of-availability for various database engines */
export type DatabaseVersionAvailabilities = (DatabaseVersionAvailability)[];

export type Options = {
  options?: { kafka?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; mongodb?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; pg?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; mysql?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; redis?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; valkey?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; opensearch?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; advanced_pg?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions; advanced_mysql?: DatabaseRegionOptions & DatabaseVersionOptions & DatabaseLayoutOptions };
  version_availability?: { kafka?: DatabaseVersionAvailabilities; pg?: DatabaseVersionAvailabilities; mysql?: DatabaseVersionAvailabilities; redis?: DatabaseVersionAvailabilities; valkey?: DatabaseVersionAvailabilities; mongodb?: DatabaseVersionAvailabilities; opensearch?: DatabaseVersionAvailabilities; advanced_pg?: DatabaseVersionAvailabilities; advanced_mysql?: DatabaseVersionAvailabilities };
};

export type OpensearchConnection = {
  /** This is provided as a convenience and should be able to be constructed by the other attributes. */
  uri?: string;
  /** The FQDN pointing to the opensearch cluster's current primary node. */
  host?: string;
  /** The port on which the opensearch dashboard is listening. */
  port?: number;
  /** The default user for the opensearch dashboard.<br><br>Requires `database:view_credentials` scope. */
  user?: string;
  /** The randomly generated password for the default user.<br><br>Requires `database:view_credentials` scope. */
  password?: string;
  /** A boolean value indicating if the connection should be made over SSL. */
  ssl?: boolean;
};

export type SchemaRegistryConnection = {
  /** This is provided as a convenience and should be able to be constructed by the other attributes. */
  uri?: string;
  /** The FQDN pointing to the schema registry connection uri. */
  host?: string;
  /** The port on which the schema registry is listening. */
  port?: number;
  /** The default user for the schema registry.<br><br>Requires `database:view_credentials` scope. */
  user?: string;
  /** The randomly generated password for the schema registry.<br><br>Requires `database:view_credentials` scope. */
  password?: string;
  /** A boolean value indicating if the connection should be made over SSL. */
  ssl?: boolean;
};

export type DatabaseConnection = {
  /** A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes. */
  uri?: string;
  /** The name of the default database. */
  database?: string;
  /** The FQDN pointing to the database cluster's current primary node. */
  host?: string;
  /** The port on which the database cluster is listening. */
  port?: number;
  /** The default user for the database.<br><br>Requires `database:view_credentials` scope. */
  user?: string;
  /** The randomly generated password for the default user.<br><br>Requires `database:view_credentials` scope. */
  password?: string;
  /** A boolean value indicating if the connection should be made over SSL. */
  ssl?: boolean;
};

export type MysqlSettings = {
  /** A string specifying the authentication method to be used for connections to the MySQL user account. The valid values are `mysql_native_password` or `caching_sha2_password`. If excluded when creating a new user, the default for the version of MySQL in use will be used. As of MySQL 8.0, the default is `caching_sha2_password`.  */
  auth_plugin: "mysql_native_password" | "caching_sha2_password";
};

export type UserSettings = {
  /** For PostgreSQL clusters, set to `true` to grant the user replication privileges. When omitted on create or update, the value defaults to `false` and replication privileges are not granted. This option is not currently supported for other database engines.  */
  pg_allow_replication?: boolean;
  /** ACLs (Access Control Lists) specifying permissions on index within a OpenSearch cluster. */
  opensearch_acl?: ({ index?: string; permission?: "deny" | "admin" | "read" | "readwrite" | "write" })[];
  /** ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster. */
  acl?: ({ id?: string; topic: string; permission: "admin" | "consume" | "produce" | "produceconsume" })[];
  /** MongoDB-specific settings for the user. This option is not currently supported for other database engines. */
  mongo_user_settings?: { databases?: (string)[]; role?: "readOnly" | "readWrite" | "dbAdmin" };
};

export type DatabaseUser = {
  /** The name of a database user. */
  name: string;
  /** A string representing the database user's role. The value will be either "primary" or "normal".  */
  role?: "primary" | "normal";
  /** A randomly generated password for the database user.<br>Requires `database:view_credentials` scope. */
  password?: string;
  /** Access certificate for TLS client authentication. (Kafka only) */
  access_cert?: string;
  /** Access key for TLS client authentication. (Kafka only) */
  access_key?: string;
  mysql_settings?: MysqlSettings;
  settings?: UserSettings;
};

export type DatabaseMaintenanceWindow = {
  /** The day of the week on which to apply maintenance updates. */
  day: string;
  /** The hour in UTC at which maintenance updates will be applied in 24 hour format. */
  hour: string;
  /** A boolean value indicating whether any maintenance is scheduled to be performed in the next window. */
  pending?: boolean;
  /** A list of strings, each containing information about a pending maintenance update. */
  description?: (string)[];
};

export type FirewallRule = {
  /** A unique ID for the firewall rule itself. */
  uuid?: string;
  /** A unique ID for the database cluster to which the rule is applied. */
  cluster_uuid?: string;
  /** The type of resource that the firewall rule allows to access the database cluster. */
  type: "droplet" | "k8s" | "ip_addr" | "tag" | "app";
  /** The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster. */
  value: string;
  /** A time value given in ISO8601 combined date and time format that represents when the firewall rule was created. */
  created_at?: string;
  /** A human-readable description of the rule. */
  description?: string;
};

export type DatabaseServiceEndpoint = {
  /** A FQDN pointing to the database cluster's node(s). */
  host?: string;
  /** The port on which a service is listening. */
  port?: number;
};

/** DigitalOcean-specific settings for the database cluster. */
export type DoSettings = {
  /** An array of custom CNAMEs for the database cluster. Each CNAME must be a valid RFC 1123 hostname (e.g., "db.example.com"). Maximum of 16 CNAMEs allowed, each up to 253 characters. */
  service_cnames?: (string)[];
};

export type DatabaseClusterRead = {
  /** A unique ID that can be used to identify and reference a database cluster. */
  id?: string;
  /** A unique, human-readable name referring to a database cluster. */
  name: string;
  /** A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Caching, "mongodb" for MongoDB, "kafka" for Kafka, "opensearch" for OpenSearch, "valkey" for Valkey, "advanced_pg" for PostgreSQL Advanced Edition, and "advanced_mysql" for MySQL Advanced Edition. Advanced Edition engines are currently in public preview. */
  engine: "pg" | "mysql" | "redis" | "valkey" | "mongodb" | "kafka" | "opensearch" | "advanced_pg" | "advanced_mysql";
  /** A string representing the version of the database engine in use for the cluster. */
  version?: string;
  /** A string representing the semantic version of the database engine in use for the cluster. */
  semantic_version?: string;
  /** The number of nodes in the database cluster. */
  num_nodes: number;
  /** The slug identifier representing the size of the nodes in the database cluster. */
  size: string;
  /** The slug identifier for the region where the database cluster is located. */
  region: string;
  /** A string representing the current status of the database cluster. */
  status?: "creating" | "online" | "resizing" | "migrating" | "forking";
  /** A time value given in ISO8601 combined date and time format that represents when the database cluster was created. */
  created_at?: string;
  /** A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope. */
  private_network_uuid?: string;
  /** An array of tags that have been applied to the database cluster. <br><br>Requires `tag:read` scope. */
  tags?: (string)[] | null;
  /** An array of strings containing the names of databases created in the database cluster. */
  db_names?: (string)[] | null;
  /** The connection details for OpenSearch dashboard.  */
  ui_connection?: OpensearchConnection & unknown;
  /** The connection details for Schema Registry. */
  schema_registry_connection?: SchemaRegistryConnection & unknown;
  connection?: DatabaseConnection & unknown;
  private_connection?: DatabaseConnection & unknown;
  standby_connection?: DatabaseConnection & unknown;
  standby_private_connection?: DatabaseConnection & unknown;
  users?: (DatabaseUser)[] | null;
  maintenance_window?: DatabaseMaintenanceWindow & unknown;
  /** The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.<br><br>Requires `project:read` scope. */
  project_id?: string;
  rules?: (FirewallRule)[];
  /** A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline. */
  version_end_of_life?: string;
  /** A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline. */
  version_end_of_availability?: string;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  /** Public hostname and port of the cluster's metrics endpoint(s). Includes one record for the cluster's primary node and a second entry for the cluster's standby node(s). */
  metrics_endpoints?: (DatabaseServiceEndpoint)[];
  do_settings?: DoSettings & unknown;
};

/** Configuration for database cluster storage autoscaling */
export type DatabaseStorageAutoscaleParams = {
  /** Whether storage autoscaling is enabled for the cluster */
  enabled: boolean;
  /** The storage usage threshold percentage that triggers autoscaling. When storage usage exceeds this percentage, additional storage will be added automatically. */
  threshold_percent?: number;
  /** The amount of additional storage to add (in GiB) when autoscaling is triggered */
  increment_gib?: number;
};

/** Contains all autoscaling configuration for a database cluster */
export type DatabaseAutoscaleParams = {
  storage?: DatabaseStorageAutoscaleParams & unknown;
};

export type DatabaseCluster = {
  /** A unique ID that can be used to identify and reference a database cluster. */
  id?: string;
  /** A unique, human-readable name referring to a database cluster. */
  name: string;
  /** A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Caching, "mongodb" for MongoDB, "kafka" for Kafka, "opensearch" for OpenSearch, "valkey" for Valkey, "advanced_pg" for PostgreSQL Advanced Edition, and "advanced_mysql" for MySQL Advanced Edition. Advanced Edition engines are currently in public preview. */
  engine: "pg" | "mysql" | "redis" | "valkey" | "mongodb" | "kafka" | "opensearch" | "advanced_pg" | "advanced_mysql";
  /** A string representing the version of the database engine in use for the cluster. */
  version?: string;
  /** A string representing the semantic version of the database engine in use for the cluster. */
  semantic_version?: string;
  /** The number of nodes in the database cluster. */
  num_nodes: number;
  /** The slug identifier representing the size of the nodes in the database cluster. */
  size: string;
  /** The slug identifier for the region where the database cluster is located. */
  region: string;
  /** A string representing the current status of the database cluster. */
  status?: "creating" | "online" | "resizing" | "migrating" | "forking";
  /** A time value given in ISO8601 combined date and time format that represents when the database cluster was created. */
  created_at?: string;
  /** A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope. */
  private_network_uuid?: string;
  /** An array of tags (as strings) to apply to the database cluster. <br><br>Requires `tag:create` scope. */
  tags?: (string)[] | null;
  /** An array of strings containing the names of databases created in the database cluster. */
  db_names?: (string)[] | null;
  /** The connection details for OpenSearch dashboard.  */
  ui_connection?: OpensearchConnection & unknown;
  /** The connection details for Schema Registry. */
  schema_registry_connection?: SchemaRegistryConnection & unknown;
  connection?: DatabaseConnection & unknown;
  private_connection?: DatabaseConnection & unknown;
  standby_connection?: DatabaseConnection & unknown;
  standby_private_connection?: DatabaseConnection & unknown;
  users?: (DatabaseUser)[] | null;
  maintenance_window?: DatabaseMaintenanceWindow & unknown;
  /** The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.<br><br>Requires `project:assign_resource` scope. */
  project_id?: string;
  rules?: (FirewallRule)[];
  /** A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline. */
  version_end_of_life?: string;
  /** A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline. */
  version_end_of_availability?: string;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  /** Public hostname and port of the cluster's metrics endpoint(s). Includes one record for the cluster's primary node and a second entry for the cluster's standby node(s). */
  metrics_endpoints?: (DatabaseServiceEndpoint)[];
  /** Autoscaling configuration for the database cluster. Currently only supports storage autoscaling. If null, autoscaling is not configured for the cluster. */
  autoscale?: DatabaseAutoscaleParams;
  do_settings?: DoSettings & unknown;
};

export type DatabaseBackup = {
  /** The name of an existing database cluster from which the backup will be restored. */
  database_name: string;
  /** The timestamp of an existing database cluster backup in ISO8601 combined date and time format. The most recent backup will be used if excluded. */
  backup_created_at?: string;
};

/** MySQL Incremental Backup configuration settings */
export type MysqlIncrementalBackup = {
  /** Enable periodic incremental backups. When enabled, full_backup_week_schedule must be set. Incremental backups only store changes since the last backup, making them faster and more storage-efficient than full backups. This is particularly useful for large databases where daily full backups would be too time-consuming or expensive. */
  enabled?: boolean;
  /** Comma-separated list of days of the week when full backups should be created. Valid values: mon, tue, wed, thu, fri, sat, sun. Default is null. Example : "mon,fri,sun".  */
  full_backup_week_schedule?: string;
};

export type MysqlAdvancedConfig = {
  /** The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed. */
  backup_hour?: number;
  /** The minute of the backup hour when backup for the service starts. New backup  only starts if previous backup has already completed. */
  backup_minute?: number;
  /** When enabled, grants `EXECUTE` and `ALTER ROUTINE` privileges to the creator of a stored routine. When disabled, these privileges are not granted automatically. */
  automatic_sp_privileges?: boolean;
  /** Global SQL mode. If empty, uses MySQL server defaults. Must only include uppercase alphabetic characters, underscores, and commas. */
  sql_mode?: string;
  /** The number of seconds that the mysqld server waits for a connect packet before responding with bad handshake. */
  connect_timeout?: number;
  /** Default server time zone, in the form of an offset from UTC (from -12:00 to +12:00), a time zone name (EST), or 'SYSTEM' to use the MySQL server default. */
  default_time_zone?: string;
  /** The number of digits by which to increase the scale of the result of division operations performed with the `/` operator. */
  div_precision_increment?: number;
  /** When enabled, the JSON output of `EXPLAIN FORMAT=JSON` includes end markers for nested structures. */
  end_markers_in_json?: boolean;
  /** The number of equality ranges in an equality comparison condition when the optimizer should switch from using index dives to index statistics. */
  eq_range_index_dive_limit?: number;
  /** The maximum permitted result length, in bytes, for the GROUP_CONCAT() function. */
  group_concat_max_len?: number;
  /** The time, in seconds, before cached statistics expire. */
  information_schema_stats_expiry?: number;
  /** When enabled, the InnoDB FULLTEXT index stopword list is used. Disabled by default when a custom stopword table is configured. */
  innodb_ft_enable_stopword?: boolean;
  /** The maximum length of words that an InnoDB FULLTEXT index stores. Changing this parameter will lead to a restart of the MySQL service. */
  innodb_ft_max_token_size?: number;
  /** The minimum length of words that an InnoDB FULLTEXT index stores. */
  innodb_ft_min_token_size?: number;
  /** The number of words to process during each OPTIMIZE TABLE operation on an InnoDB FULLTEXT index. */
  innodb_ft_num_word_optimize?: number;
  /** The InnoDB FULLTEXT index query result cache size limit, in bytes. */
  innodb_ft_result_cache_limit?: number;
  /** The InnoDB FULLTEXT index stopword list for all InnoDB tables. */
  innodb_ft_server_stopword_table?: string;
  /** The InnoDB FULLTEXT index stopword list for user-created FULLTEXT indexes. Must be in the form `db_name/table_name`. Set to `null` to clear a previously configured value. */
  innodb_ft_user_stopword_table?: string | null;
  /** The time, in seconds, that an InnoDB transaction waits for a row lock. before giving up. */
  innodb_lock_wait_timeout?: number;
  /** The size of the buffer, in bytes, that InnoDB uses to write to the log files. on disk. */
  innodb_log_buffer_size?: number;
  /** The upper limit, in bytes, of the size of the temporary log files used during online DDL operations for InnoDB tables. */
  innodb_online_alter_log_max_size?: number;
  /** When enabled, OPTIMIZE TABLE rebuilds only the InnoDB FULLTEXT index, not the table itself. */
  innodb_optimize_fulltext_only?: boolean;
  /** When enabled, records information about all deadlocks in InnoDB user transactions  in the error log. Disabled by default. */
  innodb_print_all_deadlocks?: boolean;
  /** When enabled, transaction timeouts cause InnoDB to abort and roll back the entire transaction. */
  innodb_rollback_on_timeout?: boolean;
  /** The time, in seconds, the server waits for activity on an interactive. connection before closing it. */
  interactive_timeout?: number;
  /** The storage engine for in-memory internal temporary tables. */
  internal_tmp_mem_storage_engine?: "TempTable" | "MEMORY";
  /** The time, in seconds, to wait for more data from an existing connection. aborting the read. */
  net_read_timeout?: number;
  /** The number of seconds to wait for a block to be written to a connection before aborting the write. */
  net_write_timeout?: number;
  /** Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them. */
  sql_require_primary_key?: boolean;
  /** The number of seconds the server waits for activity on a noninteractive connection before closing it. */
  wait_timeout?: number;
  /** When enabled, window functions use a higher precision for internal calculations, which can be more accurate but slower. */
  windowing_use_high_precision?: boolean;
  /** The size of the largest message, in bytes, that can be received by the server. Default is 67108864 (64M). */
  max_allowed_packet?: number;
  /** The execution timeout for `SELECT` statements, in milliseconds. A value of `0` disables the timeout (no limit). */
  max_execution_time?: number;
  /** The maximum size, in bytes, of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M) */
  max_heap_table_size?: number;
  /** Limits the assumed maximum number of seeks when looking up rows based on a key. Lower values cause the query optimizer to prefer indexes over table scans for non-covering indexes. */
  max_seeks_for_key?: number;
  /** Controls the heuristics applied during query optimization to prune less promising partial plans from the optimizer search space. `0` disables pruning and `1` enables it. */
  optimizer_prune_level?: number;
  /** The maximum depth of search performed by the query optimizer. Smaller values can reduce compilation time for large joins; a value of `0` lets the server automatically pick a reasonable value. */
  optimizer_search_depth?: number;
  /** Controls query optimizer behavior as a comma-separated list of `option=value` pairs, or `default` to restore server defaults. Each value must be `on`, `off`, or `default`. */
  optimizer_switch?: string;
  /** The sort buffer size, in bytes, for ORDER BY optimization. Default is 262144. (256K). */
  sort_buffer_size?: number;
  /** The maximum size, in bytes, of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M). */
  tmp_table_size?: number;
  /** When enabled, captures slow queries. When disabled, also truncates the mysql.slow_log table. Default is false. */
  slow_query_log?: boolean;
  /** The time, in seconds, for a query to take to execute before  being captured by slow_query_logs. Default is 10 seconds. */
  long_query_time?: number;
  /** The minimum amount of time, in seconds, to keep binlog entries before deletion.  This may be extended for services that require binlog entries for longer than the default, for example if using the MySQL Debezium Kafka connector. */
  binlog_retention_period?: number;
  /** Specifies the maximum size of the InnoDB change buffer as a percentage of the buffer pool. */
  innodb_change_buffer_max_size?: number;
  /** Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent.   - 0 &mdash; disables this functionality, dirty pages in the same extent are not flushed.   - 1 &mdash; flushes contiguous dirty pages in the same extent.   - 2 &mdash; flushes dirty pages in the same extent. */
  innodb_flush_neighbors?: 0 | 1 | 2;
  /** The number of I/O threads for read operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service. */
  innodb_read_io_threads?: number;
  /** The number of I/O threads for write operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service. */
  innodb_write_io_threads?: number;
  /** Defines the maximum number of threads permitted inside of InnoDB. A value of 0 (the default) is interpreted as infinite concurrency (no limit). This variable is intended for performance  tuning on high concurrency systems. */
  innodb_thread_concurrency?: number;
  /** Start sizes of connection buffer and result buffer, must be multiple of 1024. Changing this parameter will lead to a restart of the MySQL service. */
  net_buffer_length?: number;
  /** Defines the destination for logs. Can be `INSIGHTS`, `TABLE`, or both (`INSIGHTS,TABLE`), or `NONE` to disable logs. To specify both destinations, use `INSIGHTS,TABLE` (order matters). Default is NONE. */
  log_output?: "INSIGHTS" | "TABLE" | "INSIGHTS,TABLE" | "NONE";
  mysql_incremental_backup?: MysqlIncrementalBackup;
};

/** PGBouncer connection pooling settings */
export type PgbouncerAdvancedConfig = {
  /** Run server_reset_query (DISCARD ALL) in all pooling modes. */
  server_reset_query_always?: boolean;
  /** List of parameters to ignore when given in startup packet. */
  ignore_startup_parameters?: ("extra_float_digits" | "search_path")[];
  /** If current server connections are below this number, adds more. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size. */
  min_pool_size?: number;
  /** The pooler closes any unused server connection that has been connected longer than this amount of seconds. */
  server_lifetime?: number;
  /** Drops server connections if they have been idle more than this many seconds.  If 0, timeout is disabled.  */
  server_idle_timeout?: number;
  /** If non-zero, automatically creates a pool of that size per user when a pool doesn't exist. */
  autodb_pool_size?: number;
  /** PGBouncer pool mode */
  autodb_pool_mode?: "session" | "transaction" | "statement";
  /** Only allows a maximum this many server connections per database (regardless of user). If 0, allows unlimited connections. */
  autodb_max_db_connections?: number;
  /** If the automatically-created database pools have been unused this many seconds, they are freed. If 0, timeout is disabled. */
  autodb_idle_timeout?: number;
};

/** TimescaleDB extension configuration values */
export type TimescaledbAdvancedConfig = {
  /** The number of background workers for timescaledb operations.  Set to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. */
  max_background_workers?: number;
};

export type PostgresAdvancedConfig = {
  /** Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted. */
  autovacuum_freeze_max_age?: number;
  /** Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start. */
  autovacuum_max_workers?: number;
  /** Specifies the minimum delay, in seconds, between autovacuum runs on any given database. The default is one minute. */
  autovacuum_naptime?: number;
  /** Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples. */
  autovacuum_vacuum_threshold?: number;
  /** Specifies the minimum number of inserted, updated, or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples. */
  autovacuum_analyze_threshold?: number;
  /** Specifies a fraction, in a decimal value, of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size). */
  autovacuum_vacuum_scale_factor?: number;
  /** Specifies a fraction, in a decimal value, of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size). */
  autovacuum_analyze_scale_factor?: number;
  /** Specifies the cost delay value, in milliseconds, that will be used in automatic VACUUM operations. If -1, uses the regular vacuum_cost_delay value, which is 20 milliseconds. */
  autovacuum_vacuum_cost_delay?: number;
  /** Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used. */
  autovacuum_vacuum_cost_limit?: number;
  /** The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed. */
  backup_hour?: number;
  /** The minute of the backup hour when backup for the service starts. New backup is only started if previous backup has already completed. */
  backup_minute?: number;
  /** Specifies the delay, in milliseconds, between activity rounds for the background writer. Default is 200 ms. */
  bgwriter_delay?: number;
  /** The amount of kilobytes that need to be written by the background writer before attempting to force the OS to issue these writes to underlying storage. Specified in kilobytes, default is 512.  Setting of 0 disables forced writeback. */
  bgwriter_flush_after?: number;
  /** The maximum number of buffers that the background writer can write. Setting this to zero disables background writing. Default is 100. */
  bgwriter_lru_maxpages?: number;
  /** The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0. */
  bgwriter_lru_multiplier?: number;
  /** The amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. */
  deadlock_timeout?: number;
  /** Specifies the default TOAST compression method for values of compressible columns (the default is lz4). */
  default_toast_compression?: "lz4" | "pglz";
  /** Time out sessions with open transactions after this number of milliseconds */
  idle_in_transaction_session_timeout?: number;
  /** Activates, in a boolean, the system-wide use of Just-in-Time Compilation (JIT). */
  jit?: boolean;
  /** Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions. */
  log_autovacuum_min_duration?: number;
  /** Controls the amount of detail written in the server log for each message that is logged. */
  log_error_verbosity?: "TERSE" | "DEFAULT" | "VERBOSE";
  /** Selects one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze, etc. */
  log_line_prefix?: "pid=%p,user=%u,db=%d,app=%a,client=%h" | "%m [%p] %q[user=%u,db=%d,app=%a]" | "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h";
  /** Log statements that take more than this number of milliseconds to run. If -1, disables. */
  log_min_duration_statement?: number;
  /** PostgreSQL maximum number of files that can be open per process. */
  max_files_per_process?: number;
  /** PostgreSQL maximum prepared transactions. Once increased, this parameter cannot be lowered from its set value. */
  max_prepared_transactions?: number;
  /** PostgreSQL maximum predicate locks per transaction. */
  max_pred_locks_per_transaction?: number;
  /** PostgreSQL maximum locks per transaction. Once increased, this parameter cannot be lowered from its set value. */
  max_locks_per_transaction?: number;
  /** Maximum depth of the stack in bytes. */
  max_stack_depth?: number;
  /** Max standby archive delay in milliseconds. */
  max_standby_archive_delay?: number;
  /** Max standby streaming delay in milliseconds. */
  max_standby_streaming_delay?: number;
  /** PostgreSQL maximum replication slots. */
  max_replication_slots?: number;
  /** PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). */
  max_logical_replication_workers?: number;
  /** Sets the maximum number of workers that the system can support for parallel queries. */
  max_parallel_workers?: number;
  /** Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. */
  max_parallel_workers_per_gather?: number;
  /** Sets the maximum number of background processes that the system can support. Once increased, this parameter cannot be lowered from its set value. */
  max_worker_processes?: number;
  /** Controls which role to use for pg_partman's scheduled background tasks. Must consist of alpha-numeric characters, dots, underscores, or dashes. May not start with dash or dot. Maximum of 64 characters. */
  "pg_partman_bgw.role"?: string;
  /** Sets the time interval to run pg_partman's scheduled tasks. */
  "pg_partman_bgw.interval"?: number;
  /** Controls which statements are counted. Specify 'top' to track top-level statements (those issued directly by clients), 'all' to also track nested statements (such as statements invoked within functions), or 'none' to disable statement statistics collection. The default value is top. */
  "pg_stat_statements.track"?: "all" | "top" | "none";
  /** PostgreSQL temporary file limit in KiB. If -1, sets to unlimited. */
  temp_file_limit?: number;
  /** PostgreSQL service timezone */
  timezone?: string;
  /** Specifies the number of bytes reserved to track the currently executing command for each active session. */
  track_activity_query_size?: number;
  /** Record commit time of transactions. */
  track_commit_timestamp?: "off" | "on";
  /** Enables tracking of function call counts and time used. */
  track_functions?: "all" | "pl" | "none";
  /** Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms. */
  track_io_timing?: "off" | "on";
  /** PostgreSQL maximum WAL senders. Once increased, this parameter cannot be lowered from its set value. */
  max_wal_senders?: number;
  /** Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Must be either 0 or between 5000 and 10800000. */
  wal_sender_timeout?: number;
  /** WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance */
  wal_writer_delay?: number;
  /** Percentage of total RAM that the database server uses for shared memory buffers.  Valid range is 20-60 (float), which corresponds to 20% - 60%.  This setting adjusts the shared_buffers configuration value. */
  shared_buffers_percentage?: number;
  pgbouncer?: PgbouncerAdvancedConfig;
  /** The maximum amount of memory, in MB, used by a query operation (such as a sort or hash table) before writing to temporary disk files. Default is 1MB + 0.075% of total RAM (up to 32MB). */
  work_mem?: number;
  timescaledb?: TimescaledbAdvancedConfig;
  /** Synchronous replication type. Note that the service plan also needs to support synchronous replication. */
  synchronous_replication?: "off" | "quorum";
  /** Enable the pg_stat_monitor extension. <b>Enabling this extension will cause the cluster to be restarted.</b> When this extension is enabled, pg_stat_statements results for utility commands are unreliable. */
  stat_monitor_enable?: boolean;
  /** Number of seconds of master unavailability before triggering database failover to standby. The default value is 60. */
  max_failover_replication_time_lag?: number;
  /** Sets the PostgreSQL maximum number of concurrent connections to the database server. This is a limited-release parameter. Contact your account team to confirm your eligibility. You cannot decrease this parameter value when set. For services with a read replica, first increase the read replica's value. After the change is applied to the replica, you can increase the primary service's value. Changing this parameter causes a service restart. */
  max_connections?: number;
  /** PostgreSQL maximum WAL size (MB) reserved for replication slots. If -1 is specified, replication slots may retain an unlimited amount of WAL files. The default is -1 (upstream default). wal_keep_size minimum WAL size setting takes precedence over this. */
  max_slot_wal_keep_size?: number;
};

export type RedisAdvancedConfig = {
  /** A string specifying the desired eviction policy for the Caching cluster.  - `noeviction`: Don't evict any data, returns error when memory limit is reached. - `allkeys-lru:` Evict any key, least recently used (LRU) first. - `allkeys-random`: Evict keys in a random order. - `volatile-lru`: Evict keys with expiration only, least recently used (LRU) first. - `volatile-random`: Evict keys with expiration only in a random order. - `volatile-ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first. */
  redis_maxmemory_policy?: "noeviction" | "allkeys-lru" | "allkeys-random" | "volatile-lru" | "volatile-random" | "volatile-ttl";
  /** Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan. */
  redis_pubsub_client_output_buffer_limit?: number;
  /** Set number of redis databases. Changing this will cause a restart of redis service. */
  redis_number_of_databases?: number;
  /** Caching IO thread count */
  redis_io_threads?: number;
  /** Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies */
  redis_lfu_log_factor?: number;
  /** LFU maxmemory-policy counter decay time in minutes */
  redis_lfu_decay_time?: number;
  /** Require SSL to access Caching. - When enabled, Caching accepts only SSL connections on port `25061`. - When disabled, port `25060` is opened for non-SSL connections, while port `25061` remains available for SSL connections.  */
  redis_ssl?: boolean;
  /** Caching idle connection timeout in seconds */
  redis_timeout?: number;
  /** Set notify-keyspace-events option. Requires at least `K` or `E` and accepts any combination of the following options. Setting the parameter to `""` disables notifications. - `K` &mdash; Keyspace events - `E` &mdash; Keyevent events - `g` &mdash; Generic commands (e.g. `DEL`, `EXPIRE`, `RENAME`, ...) - `$` &mdash; String commands - `l` &mdash; List commands - `s` &mdash; Set commands - `h` &mdash; Hash commands - `z` &mdash; Sorted set commands - `t` &mdash; Stream commands - `d` &mdash; Module key type events - `x` &mdash; Expired events - `e` &mdash; Evicted events - `m` &mdash; Key miss events - `n` &mdash; New key events - `A` &mdash; Alias for `"g$lshztxed"` */
  redis_notify_keyspace_events?: string;
  /** Creates an RDB dump of the database every 10 minutes that can be used  to recover data after a node crash. The database does not create the  dump if no keys have changed since the last dump. When set to `off`,  the database cannot fork services, and data can be lost if a service  is restarted or powered off. DigitalOcean Managed Caching databases  do not support the Append Only File (AOF) persistence method. */
  redis_persistence?: "off" | "rdb";
  /** Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Caching configuration acl-pubsub-default. */
  redis_acl_channels_default?: "allchannels" | "resetchannels";
};

/** A string specifying the desired eviction policy for a Caching or Valkey cluster.  - `noeviction`: Don't evict any data, returns error when memory limit is reached. - `allkeys_lru:` Evict any key, least recently used (LRU) first. - `allkeys_random`: Evict keys in a random order. - `volatile_lru`: Evict keys with expiration only, least recently used (LRU) first. - `volatile_random`: Evict keys with expiration only in a random order. - `volatile_ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first. */
export type EvictionPolicyModel = "noeviction" | "allkeys_lru" | "allkeys_random" | "volatile_lru" | "volatile_random" | "volatile_ttl";

export type ValkeyAdvancedConfig = {
  valkey_maxmemory_policy?: EvictionPolicyModel;
  /** Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan. */
  valkey_pubsub_client_output_buffer_limit?: number;
  /** Set number of valkey databases. Changing this will cause a restart of valkey service. */
  valkey_number_of_databases?: number;
  /** Valkey IO thread count */
  valkey_io_threads?: number;
  /** Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies */
  valkey_lfu_log_factor?: number;
  /** LFU maxmemory-policy counter decay time in minutes */
  valkey_lfu_decay_time?: number;
  /** Require SSL to access Valkey */
  valkey_ssl?: boolean;
  /** Valkey idle connection timeout in seconds */
  valkey_timeout?: number;
  /** Set notify-keyspace-events option. Requires at least `K` or `E` and accepts any combination of the following options. Setting the parameter to `""` disables notifications. - `K` &mdash; Keyspace events - `E` &mdash; Keyevent events - `g` &mdash; Generic commands (e.g. `DEL`, `EXPIRE`, `RENAME`, ...) - `$` &mdash; String commands - `l` &mdash; List commands - `s` &mdash; Set commands - `h` &mdash; Hash commands - `z` &mdash; Sorted set commands - `t` &mdash; Stream commands - `d` &mdash; Module key type events - `x` &mdash; Expired events - `e` &mdash; Evicted events - `m` &mdash; Key miss events - `n` &mdash; New key events - `A` &mdash; Alias for `"g$lshztxed"` */
  valkey_notify_keyspace_events?: string;
  /** When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked. */
  valkey_persistence?: "off" | "rdb";
  /** Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default. */
  valkey_acl_channels_default?: "allchannels" | "resetchannels";
  /** Frequent RDB snapshots When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.  */
  frequent_snapshots?: boolean;
  /** Active expire effort Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.  */
  valkey_active_expire_effort?: number;
};

export type KafkaAdvancedConfig = {
  /** Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression; and 'producer' which means retain the original compression codec set by the producer. */
  compression_type?: "gzip" | "snappy" | "lz4" | "zstd" | "uncompressed" | "producer";
  /** The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time. */
  group_initial_rebalance_delay_ms?: number;
  /** The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. */
  group_min_session_timeout_ms?: number;
  /** The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. */
  group_max_session_timeout_ms?: number;
  /** Idle connections timeout: the server socket processor threads close the connections that idle for longer than this. */
  connections_max_idle_ms?: number;
  /** The maximum number of incremental fetch sessions that the broker will maintain. */
  max_incremental_fetch_session_cache_slots?: number;
  /** The maximum size of message that the server can receive. */
  message_max_bytes?: number;
  /** Log retention window in minutes for offsets topic */
  offsets_retention_minutes?: number;
  /** How long are delete records retained? */
  log_cleaner_delete_retention_ms?: number;
  /** Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log_cleaner_max_compaction_lag_ms to enforce compactions sooner, instead of setting a very high value for this option. */
  log_cleaner_min_cleanable_ratio?: number;
  /** The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted */
  log_cleaner_max_compaction_lag_ms?: number;
  /** The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted. */
  log_cleaner_min_compaction_lag_ms?: number;
  /** The default cleanup policy for segments beyond the retention window */
  log_cleanup_policy?: "delete" | "compact" | "compact,delete";
  /** The number of messages accumulated on a log partition before messages are flushed to disk */
  log_flush_interval_messages?: number;
  /** The maximum time in ms that a message in any topic is kept in memory before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used */
  log_flush_interval_ms?: number;
  /** The interval with which Kafka adds an entry to the offset index */
  log_index_interval_bytes?: number;
  /** The maximum size in bytes of the offset index */
  log_index_size_max_bytes?: number;
  /** This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests. */
  log_message_downconversion_enable?: boolean;
  /** Define whether the timestamp in the message is message create time or log append time. */
  log_message_timestamp_type?: "CreateTime" | "LogAppendTime";
  /** The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message */
  log_message_timestamp_difference_max_ms?: number;
  /** Controls whether to preallocate a file when creating a new segment */
  log_preallocate?: boolean;
  /** The maximum size of the log before deleting messages */
  log_retention_bytes?: number;
  /** The number of hours to keep a log file before deleting it */
  log_retention_hours?: number;
  /** The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied. */
  log_retention_ms?: number;
  /** The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used */
  log_roll_jitter_ms?: number;
  /** The maximum time before a new log segment is rolled out (in milliseconds). */
  log_roll_ms?: number;
  /** The maximum size of a single log file */
  log_segment_bytes?: number;
  /** The amount of time to wait before deleting a file from the filesystem */
  log_segment_delete_delay_ms?: number;
  /** Enable auto creation of topics */
  auto_create_topics_enable?: boolean;
  /** When a producer sets acks to 'all' (or '-1'), min_insync_replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. */
  min_insync_replicas?: number;
  /** Number of partitions for autocreated topics */
  num_partitions?: number;
  /** Replication factor for autocreated topics */
  default_replication_factor?: number;
  /** The number of bytes of messages to attempt to fetch for each partition (defaults to 1048576). This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. */
  replica_fetch_max_bytes?: number;
  /** Maximum bytes expected for the entire fetch response (defaults to 10485760). Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum. */
  replica_fetch_response_max_bytes?: number;
  /** The maximum number of connections allowed from each ip address (defaults to 2147483647). */
  max_connections_per_ip?: number;
  /** The purge interval (in number of requests) of the producer request purgatory (defaults to 1000). */
  producer_purgatory_purge_interval_requests?: number;
  /** The maximum number of bytes in a socket request (defaults to 104857600). */
  socket_request_max_bytes?: number;
  /** The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (defaults to 104857600 (100 mebibytes)). */
  transaction_state_log_segment_bytes?: number;
  /** The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (defaults to 3600000 (1 hour)). */
  transaction_remove_expired_transaction_cleanup_interval_ms?: number;
  /** Enable creation of schema registry for the Kafka cluster. Schema_registry only works with General Purpose - Dedicated CPU plans. */
  schema_registry?: boolean;
};

export type OpensearchAdvancedConfig = {
  /** Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. */
  http_max_content_length_bytes?: number;
  /** Maximum size of allowed headers, in bytes. */
  http_max_header_size_bytes?: number;
  /** Maximum length of an HTTP URL, in bytes. */
  http_max_initial_line_length_bytes?: number;
  /** Maximum number of clauses Lucene BooleanQuery can have.  Only increase it if necessary, as it may cause performance issues. */
  indices_query_bool_max_clause_count?: number;
  /** Maximum amount of heap memory used for field data cache, expressed as a percentage. Decreasing the value too much will increase overhead of loading field data. Increasing the value too much will decrease amount of heap available for other operations. */
  indices_fielddata_cache_size_percentage?: number;
  /** Total amount of heap used for indexing buffer before writing segments to disk, expressed as a percentage. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance. */
  indices_memory_index_buffer_size_percentage?: number;
  /** Minimum amount of heap used for indexing buffer before writing segments to disk, in mb. Works in conjunction with indices_memory_index_buffer_size_percentage, each being enforced. */
  indices_memory_min_index_buffer_size_mb?: number;
  /** Maximum amount of heap used for indexing buffer before writing segments to disk, in mb. Works in conjunction with indices_memory_index_buffer_size_percentage, each being enforced. The default is unbounded. */
  indices_memory_max_index_buffer_size_mb?: number;
  /** Maximum amount of heap used for query cache.  Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other functionality. */
  indices_queries_cache_size_percentage?: number;
  /** Limits total inbound and outbound recovery traffic for each node, expressed in mb per second. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). */
  indices_recovery_max_mb_per_sec?: number;
  /** Maximum number of file chunks sent in parallel for each recovery. */
  indices_recovery_max_concurrent_file_chunks?: number;
  /** Number of workers in the search operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. */
  thread_pool_search_size?: number;
  /** Number of workers in the search throttled operation thread pool. This pool is used for searching frozen indices. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. */
  thread_pool_search_throttled_size?: number;
  /** Number of workers in the get operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. */
  thread_pool_get_size?: number;
  /** Number of workers in the analyze operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. */
  thread_pool_analyze_size?: number;
  /** Number of workers in the write operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. */
  thread_pool_write_size?: number;
  /** Number of workers in the force merge operation thread pool. This pool is used for forcing a merge between shards of one or more indices. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. */
  thread_pool_force_merge_size?: number;
  /** Size of queue for operations in the search thread pool. */
  thread_pool_search_queue_size?: number;
  /** Size of queue for operations in the search throttled thread pool. */
  thread_pool_search_throttled_queue_size?: number;
  /** Size of queue for operations in the get thread pool. */
  thread_pool_get_queue_size?: number;
  /** Size of queue for operations in the analyze thread pool. */
  thread_pool_analyze_queue_size?: number;
  /** Size of queue for operations in the write thread pool. */
  thread_pool_write_queue_size?: number;
  /** Specifies whether ISM is enabled or not. */
  ism_enabled?: boolean;
  /** Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document. */
  ism_history_enabled?: boolean;
  /** Maximum age before rolling over the audit history index, in hours. */
  ism_history_max_age_hours?: number;
  /** Maximum number of documents before rolling over the audit history index. */
  ism_history_max_docs?: number;
  /** The time between rollover checks for the audit history index, in hours. */
  ism_history_rollover_check_period_hours?: number;
  /** Length of time long audit history indices are kept, in days. */
  ism_history_rollover_retention_period_days?: number;
  /** Maximum number of aggregation buckets allowed in a single response. */
  search_max_buckets?: number;
  /** Specifices whether to allow automatic creation of indices. */
  action_auto_create_index_enabled?: boolean;
  /** Specifies whether to allow security audit logging. */
  enable_security_audit?: boolean;
  /** Specifies whether to require explicit index names when deleting indices. */
  action_destructive_requires_name?: boolean;
  /** Maximum number of shards allowed per data node. */
  cluster_max_shards_per_node?: number;
  /** Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. */
  override_main_response_version?: boolean;
  /** Limits the number of inline script compilations within a period of time. Default is use-context */
  script_max_compilations_rate?: string;
  /** Maximum concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen per node . */
  cluster_routing_allocation_node_concurrent_recoveries?: number;
  /** Allowlist of remote IP addresses for reindexing. Changing this value will cause all OpenSearch instances to restart. */
  reindex_remote_whitelist?: (string)[];
  /** Enable or disable filtering of alerting by backend roles. */
  plugins_alerting_filter_by_backend_roles_enabled?: boolean;
  /** Enable or disable KNN memory circuit breaker. */
  knn_memory_circuit_breaker_enabled?: boolean;
  /** Maximum amount of memory in percentage that can be used for the KNN index. Defaults to 50% of the JVM heap size.  0 is used to set it to null which can be used to invalidate caches. */
  knn_memory_circuit_breaker_limit?: number;
  /** DigitalOcean automatically resets the `index.refresh_interval` to the default value (once per second) to  ensure that new documents are quickly available for search queries. If you are setting your own refresh intervals,  you can disable this by setting this field to true. */
  keep_index_refresh_interval?: boolean;
};

export type MongoAdvancedConfig = {
  /** Specifies the default consistency behavior of reads from the database. Data that is returned from the query with may or may not have been acknowledged by all nodes in the replicaset depending on this value.  Learn more [here](https://www.mongodb.com/docs/manual/reference/read-concern/). */
  default_read_concern?: "local" | "available" | "majority";
  /** Describes the level of acknowledgment requested from MongoDB for write operations clusters. This field can set to either `majority` or a number `0...n` which will describe the number of nodes that must acknowledge the write operation before it is fully accepted. Setting to `0` will request no acknowledgement of the write operation.  Learn more [here](https://www.mongodb.com/docs/manual/reference/write-concern/). */
  default_write_concern?: string;
  /** Specifies the lifetime of multi-document transactions. Transactions that exceed this limit are considered expired and will be  aborted by a periodic cleanup process. The cleanup process runs every `transactionLifetimeLimitSeconds/2 seconds` or at least  once every 60 seconds. *Changing this parameter will lead to a restart of the MongoDB service.* Learn more [here](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.transactionLifetimeLimitSeconds). */
  transaction_lifetime_limit_seconds?: number;
  /** Operations that run for longer than this threshold are considered slow which are then recorded to the diagnostic logs.  Higher log levels (verbosity) will record all operations regardless of this threshold on the primary node.  *Changing this parameter will lead to a restart of the MongoDB service.* Learn more [here](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.slowOpThresholdMs). */
  slow_op_threshold_ms?: number;
  /** The log message verbosity level. The verbosity level determines the amount of Informational and Debug messages MongoDB outputs. 0 includes informational messages while 1...5 increases the level to include debug messages. *Changing this parameter will lead to a restart of the MongoDB service.* Learn more [here](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-systemLog.verbosity). */
  verbosity?: number;
};

export type DatabaseConfig = {
  config?: MysqlAdvancedConfig | PostgresAdvancedConfig | RedisAdvancedConfig | ValkeyAdvancedConfig | MongoAdvancedConfig | KafkaAdvancedConfig | OpensearchAdvancedConfig;
};

export type Ca = {
  /** base64 encoding of the certificate used to secure database connections */
  certificate: string;
};

export type OnlineMigration = {
  /** The ID of the most recent migration. */
  id?: string;
  /** The current status of the migration. */
  status?: "running" | "syncing" | "canceled" | "error" | "done";
  /** The time the migration was initiated, in ISO 8601 format. */
  created_at?: string;
};

export type SourceDatabase = {
  source: { host?: string; port?: number; dbname?: string; username?: string; password?: string };
  /** Enables SSL encryption when connecting to the source database. */
  disable_ssl?: boolean;
  /** List of databases that should be ignored during migration. */
  ignore_dbs?: (string)[];
};

export type DatabaseClusterResize = {
  /** A slug identifier representing desired the size of the nodes in the database cluster. */
  size: string;
  /** The number of nodes in the database cluster. Valid values are are 1-3. In addition to the primary node, up to two standby nodes may be added for highly available configurations. */
  num_nodes: number;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
};

export type Backup = {
  /** A time value given in ISO8601 combined date and time format at which the backup was created. */
  created_at: string;
  /** The size of the database backup in GBs. */
  size_gigabytes: number;
  /** Indicates if this backup is a full or an incremental one (available only for MySQL). */
  incremental?: boolean;
};

export type DatabaseReplicaRead = {
  /** A unique ID that can be used to identify and reference a database replica. */
  id?: string;
  /** The name to give the read-only replicating */
  name: string;
  /** A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster. */
  region?: string;
  /** A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating. */
  size?: string;
  /** A string representing the current status of the database cluster. */
  status?: "creating" | "online" | "resizing" | "migrating" | "forking";
  /** A flat array of tag names as strings applied to the read-only replica.<br><br>Requires `tag:read` scope. */
  tags?: (string)[];
  /** A time value given in ISO8601 combined date and time format that represents when the database cluster was created. */
  created_at?: string;
  /** A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope. */
  private_network_uuid?: string;
  connection?: unknown & DatabaseConnection;
  private_connection?: unknown & DatabaseConnection;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  do_settings?: DoSettings & unknown;
};

export type DatabaseReplica = {
  /** A unique ID that can be used to identify and reference a database replica. */
  id?: string;
  /** The name to give the read-only replicating */
  name: string;
  /** A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster. */
  region?: string;
  /** A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating. */
  size?: string;
  /** A string representing the current status of the database cluster. */
  status?: "creating" | "online" | "resizing" | "migrating" | "forking";
  /** A flat array of tag names as strings to apply to the read-only replica after it is created. Tag names can either be existing or new tags. <br><br>Requires `tag:create` scope. */
  tags?: (string)[];
  /** A time value given in ISO8601 combined date and time format that represents when the database cluster was created. */
  created_at?: string;
  /** A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope. */
  private_network_uuid?: string;
  connection?: unknown & DatabaseConnection;
  private_connection?: unknown & DatabaseConnection;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  do_settings?: DoSettings & unknown;
};

export type EventsLogs = {
  /** ID of the particular event. */
  id?: string;
  /** The name of cluster. */
  cluster_name?: string;
  /** Type of the event. */
  event_type?: "cluster_maintenance_perform" | "cluster_master_promotion" | "cluster_create" | "cluster_update" | "cluster_delete" | "cluster_poweron" | "cluster_poweroff";
  /** The time of the generation of a event. */
  create_time?: string;
};

export type Database = {
  /** The name of the database. */
  name: string;
};

export type ConnectionPool = {
  /** A unique name for the connection pool. Must be between 3 and 60 characters. */
  name: string;
  /** The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement. */
  mode: string;
  /** The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster. */
  size: number;
  /** The database for use with the connection pool. */
  db: string;
  /** The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user. */
  user?: string;
  connection?: DatabaseConnection & unknown;
  private_connection?: DatabaseConnection & unknown;
  standby_connection?: DatabaseConnection & unknown;
  standby_private_connection?: DatabaseConnection & unknown;
};

export type ConnectionPools = {
  /** An array of connection pool objects. */
  pools?: (ConnectionPool)[];
};

export type ConnectionPoolUpdate = {
  /** The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement. */
  mode: string;
  /** The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster. */
  size: number;
  /** The database for use with the connection pool. */
  db: string;
  /** The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user. */
  user?: string;
};

export type SqlMode = {
  /** A string specifying the configured SQL modes for the MySQL cluster. */
  sql_mode: string;
};

/** A string representing the version of the database engine in use for the cluster. */
export type Version = string;

export type Version2 = {
  version?: Version;
};

export type KafkaTopicBase = {
  /** The name of the Kafka topic. */
  name?: string;
  /** The number of nodes to replicate data across the cluster. */
  replication_factor?: number;
  /** The number of partitions available for the topic. On update, this value can only be increased. */
  partition_count?: number;
};

export type KafkaTopic = KafkaTopicBase & { state?: "active" | "configuring" | "deleting" | "unknown" };

export type KafkaTopicConfig = {
  /** The cleanup_policy sets the retention policy to use on log segments. 'delete' will discard old segments when retention time/size limits are reached. 'compact' will enable log compaction, resulting in retention of the latest value for each key. */
  cleanup_policy?: "delete" | "compact" | "compact_delete";
  /** The compression_type specifies the compression type of the topic. */
  compression_type?: "producer" | "gzip" | "snappy" | "Iz4" | "zstd" | "uncompressed";
  /** The delete_retention_ms specifies how long (in ms) to retain delete tombstone markers for topics. */
  delete_retention_ms?: number;
  /** The file_delete_delay_ms specifies the time (in ms) to wait before deleting a file from the filesystem. */
  file_delete_delay_ms?: number;
  /** The flush_messages specifies the number of messages to accumulate on a log partition before messages are flushed to disk. */
  flush_messages?: number;
  /** The flush_ms specifies the maximum time (in ms) that a message is kept in memory before being flushed to disk. */
  flush_ms?: number;
  /** The index_interval_bytes specifies the number of bytes between entries being added into te offset index. */
  index_interval_bytes?: number;
  /** The max_compaction_lag_ms specifies the maximum amount of time (in ms) that a message will remain uncompacted. This is only applicable if the logs are have compaction enabled. */
  max_compaction_lag_ms?: number;
  /** The max_messages_bytes specifies the largest record batch size (in bytes) that can be sent to the server.  This is calculated after compression if compression is enabled. */
  max_message_bytes?: number;
  /** The message_down_conversion_enable specifies whether down-conversion of message formats is enabled to satisfy consumer requests. When 'false', the broker will not perform conversion for consumers expecting older message formats. The broker will respond with an `UNSUPPORTED_VERSION` error for consume requests from these older clients. */
  message_down_conversion_enable?: boolean;
  /** The message_format_version specifies the message format version used by the broker to append messages to the logs. The value of this setting is assumed to be 3.0-IV1 if the broker protocol version is 3.0 or higher. By setting a  particular message format version, all existing messages on disk must be smaller or equal to the specified version. */
  message_format_version?: "0.8.0" | "0.8.1" | "0.8.2" | "0.9.0" | "0.10.0-IV0" | "0.10.0-IV1" | "0.10.1-IV0" | "0.10.1-IV1" | "0.10.1-IV2" | "0.10.2-IV0" | "0.11.0-IV0" | "0.11.0-IV1" | "0.11.0-IV2" | "1.0-IV0" | "1.1-IV0" | "2.0-IV0" | "2.0-IV1" | "2.1-IV0" | "2.1-IV1" | "2.1-IV2" | "2.2-IV0" | "2.2-IV1" | "2.3-IV0" | "2.3-IV1" | "2.4-IV0" | "2.4-IV1" | "2.5-IV0" | "2.6-IV0" | "2.7-IV0" | "2.7-IV1" | "2.7-IV2" | "2.8-IV0" | "2.8-IV1" | "3.0-IV0" | "3.0-IV1" | "3.1-IV0" | "3.2-IV0" | "3.3-IV0" | "3.3-IV1" | "3.3-IV2" | "3.3-IV3";
  /** The message_timestamp_type specifies whether to use the message create time or log append time as the timestamp on a message. */
  message_timestamp_type?: "create_time" | "log_append_time";
  /** The min_cleanable_dirty_ratio specifies the frequency of log compaction (if enabled) in relation to duplicates present in the logs. For example, at 0.5, at most 50% of the log could be duplicates before compaction would begin. */
  min_cleanable_dirty_ratio?: number;
  /** The min_compaction_lag_ms specifies the minimum time (in ms) that a message will remain uncompacted in the log. Only relevant if log compaction is enabled. */
  min_compaction_lag_ms?: number;
  /** The min_insync_replicas specifies the number of replicas that must ACK a write for the write to be considered successful. */
  min_insync_replicas?: number;
  /** The preallocate specifies whether a file should be preallocated on disk when creating a new log segment. */
  preallocate?: boolean;
  /** The retention_bytes specifies the maximum size of the log (in bytes) before deleting messages. -1 indicates that there is no limit. */
  retention_bytes?: number;
  /** The retention_ms specifies the maximum amount of time (in ms) to keep a message before deleting it. */
  retention_ms?: number;
  /** The segment_bytes specifies the maximum size of a single log file (in bytes). */
  segment_bytes?: number;
  /** The segment_jitter_ms specifies the maximum random jitter subtracted from the scheduled segment roll time to avoid thundering herds of segment rolling. */
  segment_jitter_ms?: number;
  /** The segment_ms specifies the period of time after which the log will be forced to roll if the segment file isn't full. This ensures that retention can delete or compact old data. */
  segment_ms?: number;
};

export type KafkaTopicCreate = KafkaTopicBase & { config?: KafkaTopicConfig };

export type KafkaTopicPartition = {
  /** Size of the topic partition in bytes. */
  size?: number;
  /** An identifier for the partition. */
  id?: number;
  /** The number of nodes that are in-sync (have the latest data) for the given partition */
  in_sync_replicas?: number;
  /** The earliest consumer offset amongst consumer groups. */
  earliest_offset?: number;
  consumer_groups?: ({ group_name?: string; offset?: number })[] | null;
};

export type KafkaTopicVerbose = {
  /** The name of the Kafka topic. */
  name?: string;
  /** The state of the Kafka topic. */
  state?: "active" | "configuring" | "deleting" | "unknown";
  /** The number of nodes to replicate data across the cluster. */
  replication_factor?: number;
  partitions?: (KafkaTopicPartition)[];
  config?: KafkaTopicConfig;
};

export type KafkaTopicUpdate = {
  /** The number of nodes to replicate data across the cluster. */
  replication_factor?: number;
  /** The number of partitions available for the topic. On update, this value can only be increased. */
  partition_count?: number;
  config?: KafkaTopicConfig;
};

export type LogsinkBaseVerbose = {
  /** A unique identifier for Logsink */
  sink_id?: string;
  /** The name of the Logsink */
  sink_name?: string;
  sink_type?: "rsyslog" | "elasticsearch" | "opensearch";
};

export type RsyslogLogsink = {
  /** DNS name or IPv4 address of the rsyslog server */
  server: string;
  /** The internal port on which the rsyslog server is listening */
  port: number;
  /** Use TLS (as the messages are not filtered and may contain sensitive information, it is highly recommended to set this to true if the remote server supports it) */
  tls: boolean;
  /** Message format used by the server, this can be either rfc3164 (the old BSD style message format), `rfc5424` (current syslog message format) or custom */
  format: "rfc5424" | "rfc3164" | "custom";
  /** Conditional (required if `format` == `custom`).  Syslog log line template for a custom format, supporting limited rsyslog style templating (using `%tag%`). Supported tags are: `HOSTNAME`, `app-name`, `msg`, `msgid`, `pri`, `procid`, `structured-data`, `timestamp` and `timestamp:::date-rfc3339`.  --- **Datadog Integration Example for Non-Mongo clusters**: ``` DD_KEY <%pri%>1 %timestamp:::date-rfc3339% %HOSTNAME%.DB_NAME %app-name% - - - %msg% ``` - Replace `DD_KEY` with your actual Datadog API key. - Replace `DB_NAME` with the actual name of your database cluster. - Configure the Server:   - US Region: Use `intake.logs.datadoghq.com`   - EU Region: Use `tcp-intake.logs.datadoghq.eu` - Configure the Port:   - US Region: Use port `10516`   - EU Region: Use port `443` - Enable TLS:   - Ensure the TLS checkbox is enabled. - Note: This configuration applies to **non-Mongo clusters only**. For **Mongo clusters**, use the `datadog_logsink` integration instead.  */
  logline?: string;
  /** content of the structured data block of rfc5424 message */
  sd?: string;
  /** PEM encoded CA certificate */
  ca?: string;
  /** (PEM format) client key if the server requires client authentication */
  key?: string;
  /** (PEM format) client cert to use */
  cert?: string;
};

export type ElasticsearchLogsink = {
  /** Elasticsearch connection URL */
  url: string;
  /** Elasticsearch index prefix */
  index_prefix: string;
  /** Maximum number of days of logs to keep */
  index_days_max?: number;
  /** Elasticsearch request timeout limit */
  timeout?: number;
  /** PEM encoded CA certificate */
  ca?: string;
};

export type OpensearchLogsink = {
  /** Opensearch connection URL */
  url: string;
  /** Opensearch index prefix */
  index_prefix: string;
  /** Maximum number of days of logs to keep */
  index_days_max?: number;
  /** Opensearch request timeout limit */
  timeout?: number;
  /** PEM encoded CA certificate */
  ca?: string;
};

/** Configuration for Datadog integration **applicable only to MongoDB clusters**. */
export type DatadogLogsink = {
  /** Datadog connection URL */
  site: string;
  /** Datadog API key */
  datadog_api_key: string;
};

export type LogsinkVerbose = LogsinkBaseVerbose & { config?: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink };

export type LogsinkSchema = LogsinkVerbose;

export type LogsinkBase = {
  /** The name of the Logsink */
  sink_name?: string;
  /** Type of logsink integration.  - Use `datadog` for Datadog integration **only with MongoDB clusters**. - For non-MongoDB clusters, use `rsyslog` for general syslog forwarding. - Other supported types include `elasticsearch` and `opensearch`.  More details about the configuration can be found in the `config` property.  */
  sink_type?: "rsyslog" | "elasticsearch" | "opensearch" | "datadog";
};

export type LogsinkCreate = LogsinkBase & { config?: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink };

export type LogsinkUpdate = {
  config: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink;
};

export type KafkaSchemaVerbose = {
  /** The id for schema. */
  schema_id?: number;
  /** The name of the schema subject. */
  subject_name?: string;
  /** The type of the schema. */
  schema_type?: "AVRO" | "JSON" | "PROTOBUF";
  /** The schema definition in the specified format. */
  schema?: string;
};

export type DatabaseKafkaSchemaCreate = {
  /** The name of the schema subject. */
  subject_name?: string;
  /** The type of the schema. */
  schema_type?: "AVRO" | "JSON" | "PROTOBUF";
  /** The schema definition in the specified format. */
  schema?: string;
};

export type KafkaSchemaVersionVerbose = {
  /** The id for schema. */
  schema_id?: number;
  /** The version of the schema. */
  version?: string;
  /** The name of the schema subject. */
  subject_name?: string;
  /** The type of the schema. */
  schema_type?: "AVRO" | "JSON" | "PROTOBUF";
  /** The schema definition in the specified format. */
  schema?: string;
};

export type DatabasesBasicAuthCredentials = {
  /** basic authentication username for metrics HTTP endpoint */
  basic_auth_username?: string;
  /** basic authentication password for metrics HTTP endpoint */
  basic_auth_password?: string;
};

export type DatabaseMetricsCredentials = {
  credentials?: DatabasesBasicAuthCredentials;
};

export type OpensearchIndexBase = {
  /** The name of the opensearch index. */
  index_name?: string;
  /** The number of shards for the index. */
  number_of_shards?: number;
  /** The number of replicas for the index. */
  number_of_replicas?: number;
  /** The size of the index. */
  size?: number;
  /** The date and time the index was created. */
  created_time?: string;
};

export type OpensearchIndex = OpensearchIndexBase & { status?: "unknown" | "open" | "close" | "none"; health?: "unknown" | "green" | "yellow" | "red" | "red*" };

export type AcceleratorConfigSpec = {
  /** Number of accelerator instances. */
  scale: number;
  /** Accelerator type (e.g. prefill_decode). */
  type: string;
  /** DigitalOcean GPU slug. */
  accelerator_slug: string;
  /** Current state of the Accelerator. */
  status?: "new" | "provisioning" | "active";
};

/** Configuration for a single model deployment. */
export type ModelDeploymentSpec = {
  /** Used to identify an existing deployment when updating; empty means create new. */
  model_id?: string;
  /** Model identifier (e.g. Hugging Face slug). */
  model_slug?: string;
  /** Model provider. */
  model_provider?: "hugging_face";
  /** Workload-specific configuration (e.g. ISL/OSL in future). */
  workload_config?: { [key: string]: unknown };
  /** Accelerator configuration for this deployment. */
  accelerators?: (AcceleratorConfigSpec)[];
};

/** Structured configuration for a Dedicated Inference deployment. */
export type DedicatedInferenceSpec = {
  /** Spec version. */
  version: number;
  /** Name of the Dedicated Inference. Must be unique within the team. */
  name: string;
  /** DigitalOcean region where the Dedicated Inference is hosted. */
  region: "atl1" | "nyc2" | "tor1";
  vpc: { uuid: string };
  /** Whether to expose a public LLM endpoint. */
  enable_public_endpoint: boolean;
  /** At least one model deployment is required. */
  model_deployments: (ModelDeploymentSpec)[];
};

/** Pending deployment when status is provisioning or updating. */
export type PendingDeploymentSpec = {
  /** Deployment UUID. */
  id?: string;
  /** Spec version. */
  version?: number;
  /** Name of the Dedicated Inference. Must be unique within the team. */
  name?: string;
  status?: "provisioning" | "updating";
  vpc?: { uuid: string };
  /** Whether to expose a public LLM endpoint. */
  enable_public_endpoint?: boolean;
  /** At least one model deployment is required. */
  model_deployments?: (ModelDeploymentSpec)[];
  created_at?: string;
  updated_at?: string;
};

/** A Dedicated Inference instance. */
export type DedicatedInference = {
  /** Unique ID of the Dedicated Inference. */
  id?: string;
  /** Current state of the Dedicated Inference. */
  status?: "active" | "new" | "provisioning" | "updating" | "deleting" | "error";
  /** DigitalOcean region where the Dedicated Inference is hosted. */
  region?: string;
  /** VPC UUID of the Dedicated Inference. */
  vpc_uuid?: string;
  spec?: DedicatedInferenceSpec;
  pending_deployment_spec?: PendingDeploymentSpec;
  endpoints?: { public_endpoint_fqdn?: string; private_endpoint_fqdn?: string };
  /** When the Dedicated Inference was created. */
  created_at?: string;
  /** When the Dedicated Inference was last updated. */
  updated_at?: string;
};

export type DedicatedInferenceUpdateRequest = {
  spec?: DedicatedInferenceSpec;
  /** Provider tokens for model access (e.g. gated Hugging Face models). */
  access_tokens?: { hugging_face_token?: string };
};

export type DedicatedInferenceCreateRequest = {
  spec: DedicatedInferenceSpec;
  /** Key-value pairs for provider tokens (e.g. Hugging Face). */
  access_tokens?: { [key: string]: string | undefined };
};

/** Access token for authenticating to Dedicated Inference endpoints. */
export type DedicatedInferenceAccessToken = {
  /** Unique ID of the token. */
  id?: string;
  /** Name of the token. */
  name?: string;
  /** Token value; only returned once on create. Store securely. */
  value?: string;
  created_at?: string;
  /** When true, the token is managed by DigitalOcean (for example, system-provisioned). When false, the token was created by the user. */
  is_managed?: boolean;
};

/** A Dedicated Inference accelerator (GPU) in use by an instance. */
export type DedicatedInferenceAccelerator = {
  /** Unique ID of the accelerator. */
  id?: string;
  /** Name of the accelerator. */
  name?: string;
  /** DigitalOcean GPU slug. */
  slug?: string;
  /** Role of the accelerator (e.g. prefill_decode). */
  role?: string;
  /** Status of the accelerator. */
  status?: string;
  created_at?: string;
};

export type DedicatedInferenceTokenCreateRequest = {
  /** Name for the new token. */
  name: string;
};

export type DedicatedInferenceSize = {
  gpu_slug?: string;
  price_per_hour?: string;
  region?: string;
  currency?: string;
};

/** Available Dedicated Inference sizes and pricing. */
export type DedicatedInferenceSizesResponse = {
  /** Regions where Dedicated Inference is available. */
  enabled_regions?: (string)[];
  sizes?: (DedicatedInferenceSize)[];
};

export type DedicatedInferenceGpuModelConfig = {
  gpu_slugs?: (string)[];
  model_slug?: string;
  model_name?: string;
  /** Whether the model requires gated access (e.g. Hugging Face token). */
  is_gated_model?: boolean;
};

/** Supported GPU and model configurations for Dedicated Inference. */
export type DedicatedInferenceGpuModelConfigsResponse = {
  gpu_model_configs?: (DedicatedInferenceGpuModelConfig)[];
};

export type Domain = {
  /** The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name. */
  name?: string;
  /** This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain. */
  ip_address?: string;
  /** This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
  ttl?: number | null;
  /** This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource. */
  zone_file?: string | null;
};

export type DomainRecord = {
  /** A unique identifier for each domain record. */
  id?: number;
  /** The type of the DNS record. For example: A, CNAME, TXT, ... */
  type: string;
  /** The host name, alias, or service being defined by the record. */
  name?: string;
  /** Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. */
  data?: string;
  /** The priority for SRV and MX records. */
  priority?: number | null;
  /** The port for SRV records. */
  port?: number | null;
  /** This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
  ttl?: number;
  /** The weight for SRV records. */
  weight?: number | null;
  /** An unsigned integer between 0-255 used for CAA records. */
  flags?: number | null;
  /** The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef" */
  tag?: string | null;
};

export type DomainRecordA = DomainRecord & unknown;

export type DomainRecordAaaa = DomainRecord & unknown;

export type DomainRecordCaa = DomainRecord & unknown;

export type DomainRecordCname = DomainRecord & unknown;

export type DomainRecordMx = DomainRecord & unknown;

export type DomainRecordNs = DomainRecord & unknown;

export type DomainRecordSoa = DomainRecord & unknown;

export type DomainRecordSrv = DomainRecord & unknown;

export type DomainRecordTxt = DomainRecord & unknown;

export type DiskInfo = {
  /** The type of disk. All Droplets contain a `local` or `remote` disk. Additionally, GPU Droplets can also have a `scratch` disk for non-persistent data. */
  type?: "local" | "remote" | "scratch";
  size?: { amount?: number; unit?: string };
};

/** **Note**: All Droplets created after March 2017 use internal kernels by default. These Droplets will have this attribute set to `null`.  The current [kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/) for Droplets with externally managed kernels. This will initially be set to the kernel of the base image when the Droplet is created. */
export type Kernel = {
  /** A unique number used to identify and reference a specific kernel. */
  id?: number;
  /** The display name of the kernel. This is shown in the web UI and is generally a descriptive title for the kernel in question. */
  name?: string;
  /** A standard kernel version string representing the version, patch, and release information. */
  version?: string;
};

export type DropletNextBackupWindow = {
  /** A time value given in ISO8601 combined date and time format specifying the start of the Droplet's backup window. */
  start?: string;
  /** A time value given in ISO8601 combined date and time format specifying the end of the Droplet's backup window. */
  end?: string;
};

/** The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question. */
export type ImageName = string;

/** The name of a custom image's distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place. */
export type Distribution = "Arch Linux" | "CentOS" | "CoreOS" | "Debian" | "Fedora" | "Fedora Atomic" | "FreeBSD" | "Gentoo" | "openSUSE" | "RancherOS" | "Rocky Linux" | "Ubuntu" | "Unknown";

/** The slug identifier for the region where the resource will initially be  available. */
export type RegionSlug = "ams1" | "ams2" | "ams3" | "blr1" | "fra1" | "lon1" | "nyc1" | "nyc2" | "nyc3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "tor1" | "syd1";

/** This attribute is an array of the regions that the image is available in. The regions are represented by their identifying slug values. */
export type RegionsArray = (RegionSlug)[];

/** An optional free-form text field to describe an image. */
export type ImageDescription = string;

/** A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags. <br><br>Requires `tag:create` scope. */
export type TagsArray = (string)[] | null;

export type Image = {
  /** A unique number that can be used to identify and reference a specific image. */
  id?: number;
  name?: ImageName;
  /** Describes the kind of image. It may be one of `base`, `snapshot`, `backup`, `custom`, or `admin`. Respectively, this specifies whether an image is a DigitalOcean base OS image, user-generated Droplet snapshot, automatically created Droplet backup, user-provided virtual machine image, or an image used for DigitalOcean managed resources (e.g. DOKS worker nodes). */
  type?: "base" | "snapshot" | "backup" | "custom" | "admin";
  distribution?: Distribution;
  /** A uniquely identifying string that is associated with each of the DigitalOcean-provided public images. These can be used to reference a public image as an alternative to the numeric id. */
  slug?: string | null;
  /** This is a boolean value that indicates whether the image in question is public or not. An image that is public is available to all accounts. A non-public image is only accessible from your account. */
  public?: boolean;
  regions?: RegionsArray;
  /** A time value given in ISO8601 combined date and time format that represents when the image was created. */
  created_at?: string;
  /** The minimum disk size in GB required for a Droplet to use this image. */
  min_disk_size?: number | null;
  /** The size of the image in gigabytes. */
  size_gigabytes?: number | null;
  description?: ImageDescription;
  tags?: TagsArray;
  /** A status string indicating the state of a custom image. This may be `NEW`,  `available`, `pending`, `deleted`, or `retired`. */
  status?: "NEW" | "available" | "pending" | "deleted" | "retired";
  /** A string containing information about errors that may occur when importing  a custom image. */
  error_message?: string;
};

/** An object containing information about the GPU capabilities of Droplets created with this size. */
export type GpuInfo = {
  /** The number of GPUs allocated to the Droplet. */
  count?: number;
  /** The model of the GPU. */
  model?: string;
  vram?: { amount?: number; unit?: string };
};

export type Size = {
  /** A human-readable string that is used to uniquely identify each size. */
  slug: string;
  /** The amount of RAM allocated to Droplets created of this size. The value is represented in megabytes. */
  memory: number;
  /** The number of CPUs allocated to Droplets of this size. */
  vcpus: number;
  /** The amount of disk space set aside for Droplets of this size. The value is represented in gigabytes. */
  disk: number;
  /** The amount of transfer bandwidth that is available for Droplets created in this size. This only counts traffic on the public interface. The value is given in terabytes. */
  transfer: number;
  /** This attribute describes the monthly cost of this Droplet size if the Droplet is kept for an entire month. The value is measured in US dollars. */
  price_monthly: number;
  /** This describes the price of the Droplet size as measured hourly. The value is measured in US dollars. */
  price_hourly: number;
  /** An array containing the region slugs where this size is available for Droplet creates. */
  regions: (string)[];
  /** This is a boolean value that represents whether new Droplets can be created with this size. */
  available: boolean;
  /** A string describing the class of Droplets created from this size. For example: Basic, General Purpose, CPU-Optimized, Memory-Optimized, or Storage-Optimized. */
  description: string;
  /** An array of objects containing information about the disks available to Droplets created with this size. */
  disk_info?: (DiskInfo)[];
  gpu_info?: GpuInfo;
};

export type NetworkV4 = {
  /** The IP address of the IPv4 network interface. */
  ip_address?: string;
  /** The netmask of the IPv4 network interface. */
  netmask?: string;
  /** The gateway of the specified IPv4 network interface.  For private interfaces, a gateway is not provided. This is denoted by returning `nil` as its value.  */
  gateway?: string;
  /** The type of the IPv4 network interface. */
  type?: "public" | "private";
};

export type NetworkV6 = {
  /** The IP address of the IPv6 network interface. */
  ip_address?: string;
  /** The netmask of the IPv6 network interface. */
  netmask?: number;
  /** The gateway of the specified IPv6 network interface. */
  gateway?: string;
  /** The type of the IPv6 network interface.  **Note**: IPv6 private  networking is not currently supported.  */
  type?: "public";
};

export type Droplet = {
  /** A unique identifier for each Droplet instance. This is automatically generated upon Droplet creation. */
  id: number;
  /** The human-readable name set for the Droplet instance. */
  name: string;
  /** Memory of the Droplet in megabytes. */
  memory: number;
  /** The number of virtual CPUs. */
  vcpus: number;
  /** The size of the Droplet's disk in gigabytes. */
  disk: number;
  /** An array of objects containing information about the disks available to the Droplet. */
  disk_info?: (DiskInfo)[];
  /** A boolean value indicating whether the Droplet has been locked, preventing actions by users. */
  locked: boolean;
  /** A status string indicating the state of the Droplet instance. This may be "new", "active", "off", or "archive". */
  status: "new" | "active" | "off" | "archive";
  kernel?: Kernel;
  /** A time value given in ISO8601 combined date and time format that represents when the Droplet was created. */
  created_at: string;
  /** An array of features enabled on this Droplet. */
  features: (string)[];
  /** An array of backup IDs of any backups that have been taken of the Droplet instance.  Droplet backups are enabled at the time of the instance creation.<br>Requires `image:read` scope. */
  backup_ids: (number)[];
  next_backup_window: DropletNextBackupWindow & unknown;
  /** An array of snapshot IDs of any snapshots created from the Droplet instance.<br>Requires `image:read` scope. */
  snapshot_ids: (number)[];
  image: Image & unknown;
  /** A flat array including the unique identifier for each Block Storage volume attached to the Droplet.<br>Requires `block_storage:read` scope. */
  volume_ids: (string)[];
  size: Size;
  /** The unique slug identifier for the size of this Droplet. */
  size_slug: string;
  /** The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is. */
  networks: { v4?: (NetworkV4)[]; v6?: (NetworkV6)[] };
  region: Region;
  /** An array of Tags the Droplet has been tagged with.<br>Requires `tag:read` scope. */
  tags: (string)[];
  /** A string specifying the UUID of the VPC to which the Droplet is assigned.<br>Requires `vpc:read` scope. */
  vpc_uuid?: string;
  gpu_info?: GpuInfo;
};

export type DropletBackupPolicy = {
  /** The backup plan used for the Droplet. The plan can be either `daily` or `weekly`. */
  plan?: "daily" | "weekly";
  /** The day of the week on which the backup will occur. */
  weekday?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
  /** The hour of the day that the backup window will start. */
  hour?: 0 | 4 | 8 | 12 | 16 | 20;
  /** The length of the backup window starting from `hour`. */
  window_length_hours?: number;
  /** The number of days the backup will be retained. */
  retention_period_days?: number;
};

export type DropletCreate = {
  /** The slug identifier for the region that you wish to deploy the Droplet in. If the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be used to deploy the Droplet in any of the that region's locations (`nyc1`, `nyc2`, or `nyc3`). If the region is omitted from the create request completely, the Droplet may deploy in any region. */
  region?: string;
  /** The slug identifier for the size that you wish to select for this Droplet. */
  size: string;
  /** The image ID of a public or private image or the slug identifier for a public image. This image will be the base image for your Droplet.<br>Requires `image:read` scope. */
  image: string | number;
  /** An array containing the IDs or fingerprints of the SSH keys that you wish to embed in the Droplet's root account upon creation. You must add the keys to your team before they can be embedded on a Droplet.<br>Requires `ssh_key:read` scope. */
  ssh_keys?: (string | number)[];
  /** A boolean indicating whether automated backups should be enabled for the Droplet. */
  backups?: boolean;
  backup_policy?: DropletBackupPolicy & unknown;
  /** A boolean indicating whether to enable IPv6 on the Droplet. */
  ipv6?: boolean;
  /** A boolean indicating whether to install the DigitalOcean agent for monitoring. */
  monitoring?: boolean;
  /** A flat array of tag names as strings to apply to the Droplet after it is created. Tag names can either be existing or new tags.<br>Requires `tag:create` scope. */
  tags?: (string)[] | null;
  /** A string containing 'user data' which may be used to configure the Droplet on first boot, often a 'cloud-config' file or Bash script. It must be plain text and may not exceed 64 KiB in size. */
  user_data?: string;
  /** This parameter has been deprecated. Use `vpc_uuid` instead to specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet will be placed in your account's default VPC for the region. */
  private_networking?: boolean;
  /** An array of IDs for block storage volumes that will be attached to the Droplet once created. The volumes must not already be attached to an existing Droplet.<br>Requires `block_storage:read` scpoe. */
  volumes?: (string)[];
  /** A string specifying the UUID of the VPC to which the Droplet will be assigned. If excluded, the Droplet will be assigned to your account's default VPC for the region.<br>Requires `vpc:read` scope. */
  vpc_uuid?: string;
  /** A boolean indicating whether to install the DigitalOcean agent used for providing access to the Droplet web console in the control panel. By default, the agent is installed on new Droplets but installation errors (i.e. OS not supported) are ignored. To prevent it from being installed, set to `false`. To make installation errors fatal, explicitly set it to `true`. */
  with_droplet_agent?: boolean;
  /** An optional boolean indicating whether this Droplet should be created with public networking or not. By default, all Droplets are created with public networking available. If explicitly set to `false`, only private networking will be enabled, and public networking will be disabled; currently this means that it will not have any public static or Reserved IPv4 or IPv6 address, nor can one be assigned later. If explicitly set to `false`, `ipv6` must also be `false`. */
  public_networking?: boolean;
};

export type DropletSingleCreate = { name: string } & DropletCreate;

export type DropletMultiCreate = { names: (string)[] } & DropletCreate;

/** The linked actions can be used to check the status of a Droplet's create event. */
export type ActionLink = {
  /** A unique numeric ID that can be used to identify and reference an action. */
  id?: number;
  /** A string specifying the type of the related action. */
  rel?: string;
  /** A URL that can be used to access the action. */
  href?: string;
};

export type SnapshotsBase = {
  /** A human-readable name for the snapshot. */
  name: string;
  /** A time value given in ISO8601 combined date and time format that represents when the snapshot was created. */
  created_at: string;
  /** An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values. */
  regions: (string)[];
  /** The minimum size in GB required for a volume or Droplet to use this snapshot. */
  min_disk_size: number;
  /** The billable size of the snapshot in gigabytes. */
  size_gigabytes: number;
};

export type DropletSnapshot = { id: number } & SnapshotsBase & { type: "snapshot" | "backup" };

export type DropletBackupPolicyRecord = {
  /** The unique identifier for the Droplet. */
  droplet_id?: number;
  /** A boolean value indicating whether backups are enabled for the Droplet. */
  backup_enabled?: boolean;
  backup_policy?: DropletBackupPolicy & unknown;
  next_backup_window?: DropletNextBackupWindow & unknown;
};

export type SupportedDropletBackupPolicy = {
  /** The name of the Droplet backup plan. */
  name?: string;
  /** An array of integers representing the hours of the day that a backup can start.  */
  possible_window_starts?: (number)[];
  /** The number of hours that a backup window is open. */
  window_length_hours?: number;
  /** The number of days that a backup will be kept. */
  retention_period_days?: number;
  /** The day of the week the backup will occur. */
  possible_days?: (string)[];
};

/** Specifies the action that will be taken on the Droplet. */
export type DropletAction = {
  /** The type of action to initiate for the Droplet. */
  type: "enable_backups" | "disable_backups" | "reboot" | "power_cycle" | "shutdown" | "power_off" | "power_on" | "restore" | "password_reset" | "resize" | "rebuild" | "rename" | "change_kernel" | "enable_ipv6" | "snapshot";
};

export type DropletActionEnableBackups = DropletAction & { backup_policy?: DropletBackupPolicy & unknown };

export type DropletActionChangeBackupPolicy = DropletAction & { backup_policy?: DropletBackupPolicy & unknown };

export type DropletActionRestore = DropletAction & { image?: number };

export type DropletActionResize = DropletAction & { disk?: boolean; size?: string };

export type DropletActionRebuild = DropletAction & { image?: string | number };

export type DropletActionRename = DropletAction & { name?: string };

export type DropletActionChangeKernel = DropletAction & { kernel?: number };

export type DropletActionSnapshot = DropletAction & { name?: string };

/** A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes. */
export type ExistingTagsArray = (string)[] | null;

export type FirewallRuleBase = {
  /** The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`. */
  protocol: "tcp" | "udp" | "icmp";
  /** The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0". */
  ports: string;
};

export type FirewallRuleTarget = {
  /** An array of strings containing the IPv4 addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the firewall will allow traffic. */
  addresses?: (string)[];
  /** An array containing the IDs of the Droplets to which the firewall will allow traffic. */
  droplet_ids?: (number)[];
  /** An array containing the IDs of the load balancers to which the firewall will allow traffic. */
  load_balancer_uids?: (string)[];
  /** An array containing the IDs of the Kubernetes clusters to which the firewall will allow traffic. */
  kubernetes_ids?: (string)[];
  tags?: ExistingTagsArray & unknown;
};

export type FirewallRules = {
  inbound_rules?: (FirewallRuleBase & { sources: FirewallRuleTarget & unknown })[] | null;
  outbound_rules?: (FirewallRuleBase & { destinations: FirewallRuleTarget & unknown })[] | null;
};

export type Firewall = { id?: string; status?: "waiting" | "succeeded" | "failed"; created_at?: string; pending_changes?: ({ droplet_id?: number; removing?: boolean; status?: string })[]; name?: string; droplet_ids?: (number)[] | null; tags?: ExistingTagsArray & unknown } & FirewallRules;

/** An objects containing information about a resource associated with a Droplet. */
export type AssociatedResource = {
  /** The unique identifier for the resource associated with the Droplet. */
  id?: string;
  /** The name of the resource associated with the Droplet. */
  name?: string;
  /** The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed. */
  cost?: string;
};

/** An object containing information about a resource to be scheduled for deletion. */
export type SelectiveDestroyAssociatedResource = {
  /** An array of unique identifiers for the floating IPs to be scheduled for deletion. */
  floating_ips?: (string)[];
  /** An array of unique identifiers for the reserved IPs to be scheduled for deletion. */
  reserved_ips?: (string)[];
  /** An array of unique identifiers for the snapshots to be scheduled for deletion. */
  snapshots?: (string)[];
  /** An array of unique identifiers for the volumes to be scheduled for deletion. */
  volumes?: (string)[];
  /** An array of unique identifiers for the volume snapshots to be scheduled for deletion. */
  volume_snapshots?: (string)[];
};

/** An object containing information about a resource scheduled for deletion. */
export type DestroyedAssociatedResource = {
  /** The unique identifier for the resource scheduled for deletion. */
  id?: string;
  /** The name of the resource scheduled for deletion. */
  name?: string;
  /** A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful. */
  destroyed_at?: string;
  /** A string indicating that the resource was not successfully destroyed and providing additional information. */
  error_message?: string;
};

/** An objects containing information about a resources scheduled for deletion. */
export type AssociatedResourceStatus = {
  droplet?: DestroyedAssociatedResource;
  /** An object containing additional information about resource related to a Droplet requested to be destroyed. */
  resources?: { reserved_ips?: (DestroyedAssociatedResource)[]; floating_ips?: (DestroyedAssociatedResource)[]; snapshots?: (DestroyedAssociatedResource)[]; volumes?: (DestroyedAssociatedResource)[]; volume_snapshots?: (DestroyedAssociatedResource)[] };
  /** A time value given in ISO8601 combined date and time format indicating when the requested action was completed. */
  completed_at?: string;
  /** A count of the associated resources that failed to be destroyed, if any. */
  failures?: number;
};

export type AutoscalePoolStaticConfig = {
  /** Fixed number of instances in an autoscale pool. */
  target_number_instances: number;
};

export type AutoscalePoolDynamicConfig = {
  /** The minimum number of Droplets in an autoscale pool. */
  min_instances: number;
  /** The maximum number of Droplets in an autoscale pool. */
  max_instances: number;
  /** Target CPU utilization as a decimal. */
  target_cpu_utilization?: number;
  /** Target memory utilization as a decimal. */
  target_memory_utilization?: number;
  /** The number of minutes to wait between scaling events in an autoscale pool. Defaults to 10 minutes. */
  cooldown_minutes?: number;
};

export type AutoscalePoolDropletTemplate = {
  /** The name(s) to be applied to all Droplets in the autoscale pool. */
  name?: string;
  /** The datacenter in which all of the Droplets will be created. */
  region: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1";
  /** The Droplet size to be used for all Droplets in the autoscale pool. */
  size: string;
  /** The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID. */
  image: string;
  /** The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint. Requires `ssh_key:read` scope.  */
  ssh_keys: (string)[];
  /** The tags to apply to each of the Droplets in the autoscale pool. Requires `tag:read` scope.  */
  tags?: (string)[];
  /** The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets. Requires `vpc:read` scope.  */
  vpc_uuid?: string;
  /** Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling. */
  with_droplet_agent?: boolean;
  /** The project that the Droplets in the autoscale pool will belong to. Requires `project:read` scope.  */
  project_id?: string;
  /** Assigns a unique IPv6 address to each of the Droplets in the autoscale pool. */
  ipv6?: boolean;
  /** A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size. */
  user_data?: string;
  /** An optional boolean indicating whether the Droplets should be created with public networking or not. By default, all Droplets are created with public networking available. If explicitly set to `false`, only private networking will be enabled, and public networking will be disabled; currently this means that it will not have any public static or Reserved IPv4 or IPv6 address, nor can one be assigned later. If explicitly set to `false`, `ipv6` must also be `false`. */
  public_networking?: boolean;
};

export type CurrentUtilization = {
  /** The average memory utilization of the autoscale pool. */
  memory?: number;
  /** The average CPU utilization of the autoscale pool. */
  cpu?: number;
};

export type AutoscalePool = {
  /** A unique identifier for each autoscale pool instance. This is automatically generated upon autoscale pool creation. */
  id: string;
  /** The human-readable name set for the autoscale pool. */
  name: string;
  /** The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration). */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;
  droplet_template: AutoscalePoolDropletTemplate;
  current_utilization?: CurrentUtilization;
  /** A time value given in ISO8601 combined date and time format that represents when the autoscale pool was created. */
  created_at: string;
  /** A time value given in ISO8601 combined date and time format that represents when the autoscale pool was last updated. */
  updated_at: string;
  /** The current status of the autoscale pool. */
  status: "active" | "deleting" | "error";
  /** The number of active Droplets in the autoscale pool. */
  active_resources_count: number;
};

export type AutoscalePoolCreate = {
  /** The human-readable name of the autoscale pool. This field cannot be updated */
  name: string;
  /** The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration). */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;
  droplet_template: AutoscalePoolDropletTemplate;
};

export type MemberCurrentUtilization = {
  /** The memory utilization average of the individual Droplet. */
  memory?: number;
  /** The CPU utilization average of the individual Droplet. */
  cpu?: number;
};

export type Member = {
  /** The unique identifier of the Droplet. */
  droplet_id: number;
  /** The creation time of the Droplet in ISO8601 combined date and time format. */
  created_at: string;
  /** The last updated time of the Droplet in ISO8601 combined date and time format. */
  updated_at: string;
  /** The health status of the Droplet. */
  health_status: "healthy" | "unhealthy";
  /** A human-readable description of why the Droplet is unhealthy. Only present when `health_status` is `unhealthy`.  */
  unhealthy_reason?: string;
  /** The power status of the Droplet. */
  status: "provisioning" | "active" | "deleting" | "off";
  current_utilization: MemberCurrentUtilization;
};

export type History = {
  /** The unique identifier of the history event. */
  history_event_id: string;
  /** The current number of Droplets in the autoscale pool. */
  current_instance_count: number;
  /** The target number of Droplets for the autoscale pool after the scaling event. */
  desired_instance_count: number;
  /** The reason for the scaling event. */
  reason: "CONFIGURATION_CHANGE" | "SCALE_UP" | "SCALE_DOWN";
  /** The status of the scaling event. */
  status: "in_progress" | "success" | "error";
  /** The creation time of the history event in ISO8601 combined date and time format. */
  created_at: string;
  /** The last updated time of the history event in ISO8601 combined date and time format. */
  updated_at: string;
};

export type FloatingIp = {
  /** The public IP address of the floating IP. It also serves as its identifier. */
  ip?: string;
  region?: Region & { [key: string]: unknown };
  /** The Droplet that the floating IP has been assigned to. When you query a floating IP, if it is assigned to a Droplet, the entire Droplet object will be returned. If it is not assigned, the value will be null. <br><br>Requires `droplet:read` scope. */
  droplet?: { [key: string]: unknown } | null | Droplet;
  /** A boolean value indicating whether or not the floating IP has pending actions preventing new ones from being submitted. */
  locked?: boolean;
  /** The UUID of the project to which the reserved IP currently belongs.<br><br>Requires `project:read` scope. */
  project_id?: string;
};

export type FloatingIpCreate = { droplet_id: number } | { region: string; project_id?: string };

export type FloatingIPsAction = {
  /** The type of action to initiate for the floating IP. */
  type: "assign" | "unassign";
};

export type FloatingIpActionAssign = FloatingIPsAction & { droplet_id: number };

export type FloatingIpActionUnassign = FloatingIPsAction & { [key: string]: unknown };

export type NamespaceInfo = {
  /** The namespace's API hostname. Each function in a namespace is provided an endpoint at the namespace's hostname. */
  api_host?: string;
  /** A unique string format of UUID with a prefix fn-. */
  namespace?: string;
  /** UTC time string. */
  created_at?: string;
  /** UTC time string. */
  updated_at?: string;
  /** The namespace's unique name. */
  label?: string;
  /** The namespace's datacenter region. */
  region?: string;
  /** The namespace's Universally Unique Identifier. */
  uuid?: string;
  /** A random alpha numeric string. This key is used in conjunction with the namespace's UUID to authenticate  a user to use the namespace via `doctl`, DigitalOcean's official CLI. */
  key?: string;
};

export type CreateNamespace = {
  /** The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace. */
  region: string;
  /** The namespace's unique name. */
  label: string;
};

/** Trigger details for SCHEDULED type, where body is optional. */
export type ScheduledDetails = {
  /** valid cron expression string which is required for SCHEDULED type triggers. */
  cron: string;
  /** Optional data to be sent to function while triggering the function. */
  body?: { name?: string } | null;
};

export type TriggerInfo = {
  /** A unique string format of UUID with a prefix fn-. */
  namespace?: string;
  /** The trigger's unique name within the namespace. */
  name?: string;
  /** Name of function(action) that exists in the given namespace. */
  function?: string;
  /** String which indicates the type of trigger source like SCHEDULED. */
  type?: string;
  /** Indicates weather the trigger is paused or unpaused. */
  is_enabled?: boolean;
  /** UTC time string. */
  created_at?: string;
  /** UTC time string. */
  updated_at?: string;
  scheduled_details?: ScheduledDetails;
  scheduled_runs?: { last_run_at?: string | null; next_run_at?: string | null };
};

export type CreateTrigger = {
  /** The trigger's unique name within the namespace. */
  name: string;
  /** Name of function(action) that exists in the given namespace. */
  function: string;
  /** One of different type of triggers. Currently only SCHEDULED is supported. */
  type: string;
  /** Indicates weather the trigger is paused or unpaused. */
  is_enabled: boolean;
  scheduled_details: ScheduledDetails;
};

export type UpdateTrigger = {
  /** Indicates weather the trigger is paused or unpaused. */
  is_enabled?: boolean;
  scheduled_details?: ScheduledDetails;
};

export type AccessKey = {
  /** The access key's unique identifier with prefix 'dof_v1_'. */
  id?: string;
  /** The access key's name. */
  name?: string;
  /** When the key expires (null for non-expiring keys). */
  expires_at?: string | null;
  /** The date and time the key was created. */
  created_at?: string;
  /** The date and time the key was last updated. */
  updated_at?: string;
};

export type AccessKeyCreateRequest = {
  /** The access key's name. */
  name: string;
  /** The duration after which the access key expires, specified as a human-readable duration string in the format `<int>h` (hours) or `<int>d` (days). Minimum value is `1h`. If omitted, the key will never expire. */
  expires_in?: string;
};

export type AccessKeyCreateResponse = { secret?: string } & AccessKey;

export type ImageUpdate = {
  name?: ImageName;
  distribution?: Distribution;
  description?: ImageDescription;
};

export type ImageNewCustom = ImageUpdate & { url?: string; region?: RegionSlug; tags?: TagsArray };

export type ImagesPostAccountTransferCreate = { recipient_email: string } | { recipient_uuid: string };

/** A unique number that used to identify and reference an image account transfer. */
export type TransferId = number;

export type ImagesPostAccountTransferAccept = { transfer_id: number } & { recipient_uuid: string };

export type ImagesPostAccountTransferCancel = {
  /** A unique number that used to identify and reference an image account transfer. */
  transfer_id: number;
};

export type ImagesPostAccountTransferDecline = {
  /** A unique number that used to identify and reference an image account transfer. */
  transfer_id: number;
};

export type ImageActionBase = {
  /** The action to be taken on the image. Can be either `convert` or `transfer`. */
  type: "convert" | "transfer";
};

export type ImageActionTransfer = ImageActionBase & { region: RegionSlug };

export type KubernetesNodePoolSize = {
  /** The slug identifier for the type of Droplet used as workers in the node pool. */
  size?: string;
};

export type KubernetesNodePoolTaint = {
  /** An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`. */
  key?: string;
  /** An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`. */
  value?: string;
  /** How the node reacts to pods that it won't tolerate. Available effect values are `NoSchedule`, `PreferNoSchedule`, and `NoExecute`. */
  effect?: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
};

export type Node = {
  /** A unique ID that can be used to identify and reference the node. */
  id?: string;
  /** An automatically generated, human-readable name for the node. */
  name?: string;
  /** An object containing a `state` attribute whose value is set to a string indicating the current status of the node. */
  status?: { state?: "provisioning" | "running" | "draining" | "deleting" };
  /** The ID of the Droplet used for the worker node. */
  droplet_id?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the node was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the node was last updated. */
  updated_at?: string;
};

export type KubernetesNodePoolBase = {
  /** A unique ID that can be used to identify and reference a specific node pool. */
  id?: string;
  /** A human-readable name for the node pool. */
  name?: string;
  /** The number of Droplet instances in the node pool. */
  count?: number;
  /** An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` scope. */
  tags?: (string)[];
  /** An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool. */
  labels?: { [key: string]: unknown } | null;
  /** An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool. */
  taints?: (KubernetesNodePoolTaint)[];
  /** A boolean value indicating whether auto-scaling is enabled for this node pool. */
  auto_scale?: boolean;
  /** The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`. */
  min_nodes?: number;
  /** The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`. */
  max_nodes?: number;
  /** An object specifying the details of a specific worker node in a node pool. */
  nodes?: (Node)[];
};

export type KubernetesNodePool = KubernetesNodePoolSize & KubernetesNodePoolBase;

/** An object specifying the maintenance window policy for the Kubernetes cluster. */
export type MaintenancePolicy = {
  /** The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`). */
  start_time?: string;
  /** The duration of the maintenance window policy in human-readable format. */
  duration?: string;
  /** The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day. */
  day?: "any" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
};

/** An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only). */
export type ControlPlaneFirewall = {
  /** Indicates whether the control plane firewall is enabled. */
  enabled?: boolean;
  /** An array of public addresses (IPv4 or CIDR) allowed to access the control plane. */
  allowed_addresses?: (string)[];
};

/** An object specifying custom cluster autoscaler configuration. */
export type ClusterAutoscalerConfiguration = {
  /** Used to customize when cluster autoscaler scales down non-empty nodes by setting the node utilization threshold. */
  scale_down_utilization_threshold?: number;
  /** Used to customize how long a node is unneeded before being scaled down. */
  scale_down_unneeded_time?: string;
  /** Customizes expanders used by cluster-autoscaler. The autoscaler will apply each expander from the provided list to narrow down the selection of node types created to scale up, until either a single node type is left, or the list of expanders is exhausted. If this flag is unset, autoscaler will use its default expander `random`. Passing an empty list (_not_ `null`) will unset any previous expander customizations.  Available expanders: - `random`: Randomly selects a node group to scale. - `priority`: Selects the node group with the highest priority as per [user-provided configuration](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#configuring-priority-expander) - `least_waste`: Selects the node group that will result in the least amount of idle resources.  */
  expanders?: ("random" | "priority" | "least_waste")[];
};

/** An object specifying Single Sign-On (SSO) configuration for the Kubernetes cluster. */
export type Sso = {
  /** Indicates whether SSO authentication is enabled for the cluster. */
  enabled?: boolean;
  /** Indicates whether any non-SSO forms of authentication are disallowed. Can only be set to `true` when `enabled` is `true`.  */
  required?: boolean;
  /** The OIDC issuer URL for the identity provider. Required when `enabled` is `true`.  */
  issuer_url?: string;
  /** The OIDC client ID registered with the identity provider. Required when `enabled` is `true`.  */
  client_id?: string;
};

/** An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster. */
export type RoutingAgent = {
  /** Indicates whether the routing-agent component is enabled. */
  enabled?: boolean;
};

/** An object specifying whether the AMD GPU Device Plugin should be enabled in the Kubernetes cluster. It's enabled by default for clusters with an AMD GPU node pool. */
export type AmdGpuDevicePlugin = {
  /** Indicates whether the AMD GPU Device Plugin is enabled. */
  enabled?: boolean;
};

/** An object specifying whether the AMD Device Metrics Exporter should be enabled in the Kubernetes cluster. */
export type AmdGpuDeviceMetricsExporterPlugin = {
  /** Indicates whether the AMD Device Metrics Exporter is enabled. */
  enabled?: boolean;
};

/** An object specifying whether the Nvidia GPU Device Plugin should be enabled in the Kubernetes cluster. It's enabled by default for clusters with an Nvidia GPU node pool. */
export type NvidiaGpuDevicePlugin = {
  /** Indicates whether the Nvidia GPU Device Plugin is enabled. */
  enabled?: boolean;
};

/** An object specifying whether the RDMA shared device plugin should be enabled in the Kubernetes cluster. */
export type RdmaSharedDevPlugin = {
  /** Indicates whether the RDMA shared device plugin is enabled. */
  enabled?: boolean;
};

/** An object specifying whether the Cluster Proportional Autoscaler (CPA) add-on for CoreDNS should be enabled for the Kubernetes cluster. */
export type CorednsAutoscaler = {
  /** Indicates whether the CoreDNS Cluster Proportional Autoscaler add-on is enabled. */
  enabled?: boolean;
};

/** An object specifying whether the Peer-to-peer OCI registry component should be enabled for the Kubernetes cluster. */
export type P2POciRegistryPlugin = {
  /** Indicates whether the Peer-to-peer OCI registry component is enabled. */
  enabled?: boolean;
};

export type ClusterRead = {
  /** A unique ID that can be used to identify and reference a Kubernetes cluster. */
  id?: string;
  /** A human-readable name for a Kubernetes cluster. */
  name: string;
  /** The slug identifier for the region where the Kubernetes cluster is located. */
  region: string;
  /** The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions. */
  version: string;
  /** The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation. */
  cluster_subnet?: string;
  /** The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation. */
  service_subnet?: string;
  /** A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.<br><br>Requires `vpc:read` scope. */
  vpc_uuid?: string;
  /** The UUID of the VPC subnet worker nodes are attached to. When unset, the default subnet for the VPC is used.<br><br>Requires `vpc:read` scope.  */
  worker_subnet_uuid?: string;
  /** The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+) */
  ipv4?: string;
  /** The base URL of the API server on the Kubernetes master node. */
  endpoint?: string;
  /** An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` scope. */
  tags?: (string)[];
  /** An object specifying the details of the worker nodes available to the Kubernetes cluster. */
  node_pools: (KubernetesNodePool)[];
  maintenance_policy?: MaintenancePolicy;
  /** A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window. */
  auto_upgrade?: boolean;
  /** A boolean value indicating whether worker nodes in the cluster are not assigned public IP addresses. When omitted on create, the default value is false. When enabled, a NAT gateway must exist in the VPC where the cluster is created. */
  isolated_workers?: boolean;
  /** An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster. */
  status?: { state?: "running" | "provisioning" | "degraded" | "error" | "deleted" | "upgrading" | "deleting"; message?: string };
  /** A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated. */
  updated_at?: string;
  /** A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes. */
  surge_upgrade?: boolean;
  /** A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled. When omitted on create, the default is version-dependent; for DOKS 1.36.0 and later, the default is true; for earlier versions, the default is false. */
  ha?: boolean;
  /** A read-only boolean value indicating if a container registry is integrated with the cluster. */
  registry_enabled?: boolean;
  /** An array of integrated DOCR registries. */
  registries?: (string)[] | null;
  control_plane_firewall?: ControlPlaneFirewall;
  cluster_autoscaler_configuration?: ClusterAutoscalerConfiguration;
  sso?: Sso;
  routing_agent?: RoutingAgent;
  amd_gpu_device_plugin?: AmdGpuDevicePlugin;
  amd_gpu_device_metrics_exporter_plugin?: AmdGpuDeviceMetricsExporterPlugin;
  nvidia_gpu_device_plugin?: NvidiaGpuDevicePlugin;
  rdma_shared_dev_plugin?: RdmaSharedDevPlugin;
  coredns_autoscaler?: CorednsAutoscaler;
  p2p_oci_registry_plugin?: P2POciRegistryPlugin;
};

export type Cluster = {
  /** A unique ID that can be used to identify and reference a Kubernetes cluster. */
  id?: string;
  /** A human-readable name for a Kubernetes cluster. */
  name: string;
  /** The slug identifier for the region where the Kubernetes cluster is located. */
  region: string;
  /** The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions. */
  version: string;
  /** The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation. */
  cluster_subnet?: string;
  /** The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation. */
  service_subnet?: string;
  /** A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.<br><br>Requires `vpc:read` scope. */
  vpc_uuid?: string;
  /** The UUID of the VPC subnet to attach worker nodes to. When omitted on create, the default subnet for the VPC is used. This value cannot be changed after the cluster is created.  `vpc_uuid` must also be set. <br><br>Requires `vpc:read` scope.  */
  worker_subnet_uuid?: string;
  /** The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+) */
  ipv4?: string;
  /** The base URL of the API server on the Kubernetes master node. */
  endpoint?: string;
  /** An array of tags to apply to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` and `tag:create` scope, as well as `tag:delete` if existing tags are getting removed. */
  tags?: (string)[];
  /** An object specifying the details of the worker nodes available to the Kubernetes cluster. */
  node_pools: (KubernetesNodePool)[];
  maintenance_policy?: MaintenancePolicy;
  /** A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window. */
  auto_upgrade?: boolean;
  /** A boolean value indicating whether worker nodes in the cluster are not assigned public IP addresses. When omitted on create, the default value is false. When enabled, a NAT gateway must exist in the VPC where the cluster is created. */
  isolated_workers?: boolean;
  /** An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster. */
  status?: { state?: "running" | "provisioning" | "degraded" | "error" | "deleted" | "upgrading" | "deleting"; message?: string };
  /** A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated. */
  updated_at?: string;
  /** A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes. */
  surge_upgrade?: boolean;
  /** A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled. When omitted on create, the default is version-dependent; for DOKS 1.36.0 and later, the default is true; for earlier versions, the default is false. */
  ha?: boolean;
  /** A read-only boolean value indicating if a container registry is integrated with the cluster. */
  registry_enabled?: boolean;
  control_plane_firewall?: ControlPlaneFirewall;
  cluster_autoscaler_configuration?: ClusterAutoscalerConfiguration;
  sso?: Sso;
  routing_agent?: RoutingAgent;
  p2p_oci_registry_plugin?: P2POciRegistryPlugin;
  amd_gpu_device_plugin?: AmdGpuDevicePlugin;
  amd_gpu_device_metrics_exporter_plugin?: AmdGpuDeviceMetricsExporterPlugin;
  nvidia_gpu_device_plugin?: NvidiaGpuDevicePlugin;
  rdma_shared_dev_plugin?: RdmaSharedDevPlugin;
  coredns_autoscaler?: CorednsAutoscaler;
};

export type ClusterUpdate = {
  /** A human-readable name for a Kubernetes cluster. */
  name: string;
  /** An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. */
  tags?: (string)[];
  maintenance_policy?: MaintenancePolicy;
  /** A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window. */
  auto_upgrade?: boolean;
  /** A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes. */
  surge_upgrade?: boolean;
  /** A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled. When omitted on create, the default is version-dependent; for DOKS 1.36.0 and later, the default is true; for earlier versions, the default is false. */
  ha?: boolean;
  control_plane_firewall?: ControlPlaneFirewall;
  cluster_autoscaler_configuration?: ClusterAutoscalerConfiguration;
  sso?: Sso;
  routing_agent?: RoutingAgent;
  p2p_oci_registry_plugin?: P2POciRegistryPlugin;
  amd_gpu_device_plugin?: AmdGpuDevicePlugin;
  amd_gpu_device_metrics_exporter_plugin?: AmdGpuDeviceMetricsExporterPlugin;
  nvidia_gpu_device_plugin?: NvidiaGpuDevicePlugin;
  rdma_shared_dev_plugin?: RdmaSharedDevPlugin;
  coredns_autoscaler?: CorednsAutoscaler;
};

export type AssociatedKubernetesResource = {
  /** The ID of a resource associated with a Kubernetes cluster. */
  id?: string;
  /** The name of a resource associated with a Kubernetes cluster. */
  name?: string;
};

/** An object containing the IDs of resources associated with a Kubernetes cluster. */
export type AssociatedKubernetesResources = {
  /** A list of names and IDs for associated load balancers that can be destroyed along with the cluster. */
  load_balancers?: (AssociatedKubernetesResource)[];
  /** A list of names and IDs for associated volumes that can be destroyed along with the cluster. */
  volumes?: (AssociatedKubernetesResource)[];
  /** A list of names and IDs for associated volume snapshots that can be destroyed along with the cluster. */
  volume_snapshots?: (AssociatedKubernetesResource)[];
};

/** An object containing the IDs of resources to be destroyed along with their associated with a Kubernetes cluster. */
export type DestroyAssociatedKubernetesResources = {
  /** A list of IDs for associated load balancers to destroy along with the cluster. */
  load_balancers?: (string)[];
  /** A list of IDs for associated volumes to destroy along with the cluster. */
  volumes?: (string)[];
  /** A list of IDs for associated volume snapshots to destroy along with the cluster. */
  volume_snapshots?: (string)[];
};

export type Credentials = {
  /** The URL used to access the cluster API server. */
  server?: string;
  /** A base64 encoding of bytes representing the certificate authority data for accessing the cluster. */
  certificate_authority_data?: string;
  /** A base64 encoding of bytes representing the x509 client certificate data for access the cluster. This is only returned for clusters without support for token-based authentication.  Newly created Kubernetes clusters do not return credentials using certificate-based authentication. For additional information, [see here](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/#authenticate).  */
  client_certificate_data?: string | null;
  /** A base64 encoding of bytes representing the x509 client key data for access the cluster. This is only returned for clusters without support for token-based authentication.  Newly created Kubernetes clusters do not return credentials using certificate-based authentication. For additional information, [see here](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/#authenticate).  */
  client_key_data?: string | null;
  /** An access token used to authenticate with the cluster. This is only returned for clusters with support for token-based authentication. */
  token?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the access token expires. */
  expires_at?: string;
};

export type KubernetesVersion = {
  /** The slug identifier for an available version of Kubernetes for use when creating or updating a cluster. The string contains both the upstream version of Kubernetes as well as the DigitalOcean revision. */
  slug?: string;
  /** The upstream version string for the version of Kubernetes provided by a given slug. */
  kubernetes_version?: string;
  /** The features available with the version of Kubernetes provided by a given slug. */
  supported_features?: (string)[];
};

export type KubernetesNodePoolUpdate = KubernetesNodePoolBase;

export type User = {
  kubernetes_cluster_user?: { username?: string; groups?: (string)[] };
};

export type KubernetesRegion = {
  /** A DigitalOcean region where Kubernetes is available. */
  name?: string;
  /** The identifier for a region for use when creating a new cluster. */
  slug?: string;
};

export type KubernetesSize = {
  /** A Droplet size available for use in a Kubernetes node pool. */
  name?: string;
  /** The identifier for a size for use when creating a new cluster. */
  slug?: string;
};

export type KubernetesOptions = {
  options?: { regions?: (KubernetesRegion)[]; versions?: (KubernetesVersion)[]; sizes?: (KubernetesSize)[] };
};

export type ClusterlintResults = {
  /** Id of the clusterlint run that can be used later to fetch the diagnostics. */
  run_id?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the schedule clusterlint run request was made. */
  requested_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the schedule clusterlint run request was completed. */
  completed_at?: string;
  /** An array of diagnostics reporting potential problems for the given cluster. */
  diagnostics?: ({ check_name?: string; severity?: string; message?: string; object?: { name?: string; kind?: string; namespace?: string } })[];
};

export type ClusterlintRequest = {
  /** An array of check groups that will be run when clusterlint executes checks. */
  include_groups?: (string)[];
  /** An array of checks that will be run when clusterlint executes checks. */
  include_checks?: (string)[];
  /** An array of check groups that will be omitted when clusterlint executes checks. */
  exclude_groups?: (string)[];
  /** An array of checks that will be run when clusterlint executes checks. */
  exclude_checks?: (string)[];
};

export type ClusterRegistry = {
  /** An array containing the UUIDs of Kubernetes clusters. */
  cluster_uuids?: (string)[];
};

export type ClusterRegistries = {
  /** An array containing the UUIDs of Kubernetes clusters. */
  cluster_uuids?: (string)[];
  /** An array containing the registry names. */
  registries?: (string)[];
};

export type StatusMessages = {
  /** Status information about the cluster which impacts it's lifecycle. */
  message?: string;
  /** A timestamp in ISO8601 format that represents when the status message was emitted. */
  timestamp?: string;
};

/** An object specifying a forwarding rule for a load balancer. */
export type ForwardingRule = {
  /** The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.  */
  entry_protocol: "http" | "https" | "http2" | "http3" | "tcp" | "udp";
  /** An integer representing the port on which the load balancer instance will listen. */
  entry_port: number;
  /** The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.  */
  target_protocol: "http" | "https" | "http2" | "tcp" | "udp";
  /** An integer representing the port on the backend Droplets to which the load balancer will send traffic. */
  target_port: number;
  /** The ID of the TLS certificate used for SSL termination if enabled. */
  certificate_id?: string;
  /** A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets. */
  tls_passthrough?: boolean;
};

/** An object specifying health check settings for the load balancer. */
export type HealthCheck = {
  /** The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`. */
  protocol?: "http" | "https" | "tcp";
  /** An integer representing the port on the backend Droplets on which the health check will attempt a connection. */
  port?: number;
  /** The path on the backend Droplets to which the load balancer instance will send a request. */
  path?: string;
  /** The number of seconds between between two consecutive health checks. */
  check_interval_seconds?: number;
  /** The number of seconds the load balancer instance will wait for a response until marking a health check as failed. */
  response_timeout_seconds?: number;
  /** The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool. */
  unhealthy_threshold?: number;
  /** The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool. */
  healthy_threshold?: number;
};

/** An object specifying sticky sessions settings for the load balancer. */
export type StickySessions = {
  /** An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`. */
  type?: "cookies" | "none";
  /** The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type. */
  cookie_name?: string;
  /** The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type. */
  cookie_ttl_seconds?: number;
};

/** An object specifying allow and deny rules to control traffic to the load balancer. */
export type LbFirewall = {
  /** the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16') */
  deny?: (string)[];
  /** the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16') */
  allow?: (string)[];
};

/** An object specifying domain configurations for a Global load balancer. */
export type Domains = {
  /** FQDN to associate with a Global load balancer. */
  name?: string;
  /** A boolean value indicating if the domain is already managed by DigitalOcean. If true, all A and AAAA records required to enable Global load balancers will be automatically added. */
  is_managed?: boolean;
  /** The ID of the TLS certificate used for SSL termination. */
  certificate_id?: string;
};

/** An object specifying forwarding configurations for a Global load balancer. */
export type GlbSettings = {
  /** The protocol used for forwarding traffic from the load balancer to the target backends. The possible values are `http`, `https` and `http2`. */
  target_protocol?: "http" | "https" | "http2";
  /** An integer representing the port on the target backends which the load balancer will forward traffic to. */
  target_port?: number;
  /** An object specifying CDN configurations for a Global load balancer. */
  cdn?: { is_enabled?: boolean };
  /** A map of region string to an integer priority value indicating preference for which regional target a Global load balancer will forward traffic to. A lower value indicates a higher priority. */
  region_priorities?: { [key: string]: number | undefined };
  /** An integer value as a percentage to indicate failure threshold to decide how the regional priorities will take effect. A value of `50` would indicate that the Global load balancer will choose a lower priority region to forward traffic to once this failure threshold has been reached for the higher priority region. */
  failover_threshold?: number;
};

export type LoadBalancerBase = {
  /** A unique ID that can be used to identify and reference a load balancer. */
  id?: string;
  /** A human-readable name for a load balancer instance. */
  name?: string;
  /** The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created. */
  project_id?: string;
  /** An attribute containing the public-facing IP address of the load balancer. */
  ip?: string;
  /** An attribute containing the public-facing IPv6 address of the load balancer. */
  ipv6?: string;
  /** How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions. */
  size_unit?: number;
  /** This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes. * `lb-small` = 1 node * `lb-medium` = 3 nodes * `lb-large` = 6 nodes  You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation. */
  size?: "lb-small" | "lb-medium" | "lb-large";
  /** This field has been deprecated. You can no longer specify an algorithm for load balancers. */
  algorithm?: "round_robin" | "least_connections";
  /** A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`. */
  status?: "new" | "active" | "errored";
  /** A time value given in ISO8601 combined date and time format that represents when the load balancer was created. */
  created_at?: string;
  /** An array of objects specifying the forwarding rules for a load balancer. */
  forwarding_rules: (ForwardingRule)[];
  health_check?: HealthCheck;
  sticky_sessions?: StickySessions;
  /** A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443. */
  redirect_http_to_https?: boolean;
  /** A boolean value indicating whether PROXY Protocol is in use. */
  enable_proxy_protocol?: boolean;
  /** A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets. */
  enable_backend_keepalive?: boolean;
  /** An integer value which configures the idle timeout for HTTP requests to the target droplets. */
  http_idle_timeout_seconds?: number;
  /** A string specifying the UUID of the VPC to which the load balancer is assigned. */
  vpc_uuid?: string;
  /** A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer. */
  disable_lets_encrypt_dns_records?: boolean;
  firewall?: LbFirewall;
  /** A string indicating whether the load balancer should be external or internal. Internal load balancers have no public IPs and are only accessible to resources on the same VPC network. This property cannot be updated after creating the load balancer. */
  network?: "EXTERNAL" | "INTERNAL";
  /** A string indicating whether the load balancer will support IPv4 or both IPv4 and IPv6 networking. This property cannot be updated after creating the load balancer. */
  network_stack?: "IPV4" | "DUALSTACK";
  /** A string indicating whether the load balancer should be a standard regional HTTP load balancer, a regional network load balancer that routes traffic at the TCP/UDP transport layer, or a global load balancer. */
  type?: "REGIONAL" | "REGIONAL_NETWORK" | "GLOBAL";
  /** An array of objects specifying the domain configurations for a Global load balancer. */
  domains?: (Domains)[];
  glb_settings?: GlbSettings;
  /** An array containing the UUIDs of the Regional load balancers to be used as target backends for a Global load balancer. */
  target_load_balancer_ids?: (string)[];
  /** A string indicating the policy for the TLS cipher suites used by the load balancer. The possible values are `DEFAULT` or `STRONG`. The default value is `DEFAULT`. */
  tls_cipher_policy?: "DEFAULT" | "STRONG";
};

export type LoadBalancer = LoadBalancerBase & { region?: unknown & Region } & { droplet_ids?: (number)[] } & { tag?: string };

export type LoadBalancerCreate = { droplet_ids?: (number)[] } & { region?: RegionSlug } & LoadBalancerBase | { tag?: string } & { region?: RegionSlug } & LoadBalancerBase;

export type SlackDetails = {
  /** Slack channel to notify of an alert trigger. */
  channel: string;
  /** Slack Webhook URL. */
  url: string;
};

export type Alerts = {
  /** An email to notify on an alert trigger. */
  email: (string)[];
  /** Slack integration details. */
  slack: (SlackDetails)[];
};

export type AlertPolicy = {
  alerts: Alerts;
  compare: "GreaterThan" | "LessThan";
  description: string;
  enabled: boolean;
  entities: (string)[];
  tags: (string)[];
  type: "v1/insights/droplet/load_1" | "v1/insights/droplet/load_5" | "v1/insights/droplet/load_15" | "v1/insights/droplet/memory_utilization_percent" | "v1/insights/droplet/disk_utilization_percent" | "v1/insights/droplet/cpu" | "v1/insights/droplet/disk_read" | "v1/insights/droplet/disk_write" | "v1/insights/droplet/public_outbound_bandwidth" | "v1/insights/droplet/public_inbound_bandwidth" | "v1/insights/droplet/private_outbound_bandwidth" | "v1/insights/droplet/private_inbound_bandwidth" | "v1/insights/lbaas/avg_cpu_utilization_percent" | "v1/insights/lbaas/connection_utilization_percent" | "v1/insights/lbaas/droplet_health" | "v1/insights/lbaas/tls_connections_per_second_utilization_percent" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx" | "v1/insights/lbaas/high_http_request_response_time" | "v1/insights/lbaas/high_http_request_response_time_50p" | "v1/insights/lbaas/high_http_request_response_time_95p" | "v1/insights/lbaas/high_http_request_response_time_99p" | "v1/dbaas/alerts/load_15_alerts" | "v1/dbaas/alerts/memory_utilization_alerts" | "v1/dbaas/alerts/disk_utilization_alerts" | "v1/dbaas/alerts/cpu_alerts" | "v1/droplet/autoscale_alerts/current_instances" | "v1/droplet/autoscale_alerts/target_instances" | "v1/droplet/autoscale_alerts/current_cpu_utilization" | "v1/droplet/autoscale_alerts/target_cpu_utilization" | "v1/droplet/autoscale_alerts/current_memory_utilization" | "v1/droplet/autoscale_alerts/target_memory_utilization" | "v1/droplet/autoscale_alerts/scale_up" | "v1/droplet/autoscale_alerts/scale_down";
  uuid: string;
  value: number;
  window: "5m" | "10m" | "30m" | "1h";
};

export type ListAlertPolicy = {
  policies: (AlertPolicy)[];
};

export type AlertPolicyRequest = {
  alerts: Alerts;
  compare: "GreaterThan" | "LessThan";
  description: string;
  enabled: boolean;
  entities: (string)[];
  tags: (string)[];
  type: "v1/insights/droplet/load_1" | "v1/insights/droplet/load_5" | "v1/insights/droplet/load_15" | "v1/insights/droplet/memory_utilization_percent" | "v1/insights/droplet/disk_utilization_percent" | "v1/insights/droplet/cpu" | "v1/insights/droplet/disk_read" | "v1/insights/droplet/disk_write" | "v1/insights/droplet/public_outbound_bandwidth" | "v1/insights/droplet/public_inbound_bandwidth" | "v1/insights/droplet/private_outbound_bandwidth" | "v1/insights/droplet/private_inbound_bandwidth" | "v1/insights/lbaas/avg_cpu_utilization_percent" | "v1/insights/lbaas/connection_utilization_percent" | "v1/insights/lbaas/droplet_health" | "v1/insights/lbaas/tls_connections_per_second_utilization_percent" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx" | "v1/insights/lbaas/high_http_request_response_time" | "v1/insights/lbaas/high_http_request_response_time_50p" | "v1/insights/lbaas/high_http_request_response_time_95p" | "v1/insights/lbaas/high_http_request_response_time_99p" | "v1/dbaas/alerts/load_15_alerts" | "v1/dbaas/alerts/memory_utilization_alerts" | "v1/dbaas/alerts/disk_utilization_alerts" | "v1/dbaas/alerts/cpu_alerts" | "v1/droplet/autoscale_alerts/current_instances" | "v1/droplet/autoscale_alerts/target_instances" | "v1/droplet/autoscale_alerts/current_cpu_utilization" | "v1/droplet/autoscale_alerts/target_cpu_utilization" | "v1/droplet/autoscale_alerts/current_memory_utilization" | "v1/droplet/autoscale_alerts/target_memory_utilization" | "v1/droplet/autoscale_alerts/scale_up" | "v1/droplet/autoscale_alerts/scale_down";
  value: number;
  window: "5m" | "10m" | "30m" | "1h";
};

export type MetricsResult = {
  /** An object containing the metric's labels. These labels are key/value pairs that vary depending on the metric being queried. For example, load balancer metrics contain a `lb_id` label, while Droplet metrics contain a `host_id` label, and App Platform metrics contain a `app_component` label. */
  metric: { [key: string]: string | undefined };
  /** An array of values for the metric. */
  values: ((number | string)[])[];
};

export type MetricsData = {
  /** Result of query. */
  result: (MetricsResult)[];
  resultType: "matrix";
};

export type Metrics = {
  data: MetricsData;
  status: "success" | "error";
};

/** OpenSearch destination configuration with `credentials` omitted. */
export type OpensearchConfigOmitCredentials = {
  /** A unique identifier for a configuration. */
  id?: string;
  /** host of the OpenSearch cluster */
  endpoint?: string;
  /** A unique identifier for a managed OpenSearch cluster. */
  cluster_uuid?: string;
  /** Name of a managed OpenSearch cluster. */
  cluster_name?: string;
  /** OpenSearch index to send logs to. */
  index_name?: string;
  /** Number of days to retain logs in OpenSearch. */
  retention_days?: number;
};

export type DestinationOmitCredentials = {
  /** A unique identifier for a destination. */
  id?: string;
  /** destination name */
  name?: string;
  /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
  type?: "opensearch_dbaas" | "opensearch_ext";
  config?: OpensearchConfigOmitCredentials;
};

export type OpensearchConfigRequest = {
  /** Credentials for an OpenSearch cluster user. Optional if `cluster_uuid` is passed. */
  credentials?: { username?: string; password?: string };
  /** host of the OpenSearch cluster */
  endpoint: string;
  /** A unique identifier for a managed OpenSearch cluster. */
  cluster_uuid?: string;
  /** Name of a managed OpenSearch cluster. */
  cluster_name?: string;
  /** OpenSearch index to send logs to. */
  index_name?: string;
  /** Number of days to retain logs in an OpenSearch cluster. */
  retention_days?: number;
};

export type DestinationRequest = {
  /** destination name */
  name?: string;
  /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
  type: "opensearch_dbaas" | "opensearch_ext";
  config: OpensearchConfigRequest;
};

/** The uniform resource name (URN) for the resource in the format do:resource_type:resource_id. */
export type Urn = string;

export type OpensearchConfig = {
  /** A unique identifier for a configuration. */
  id?: string;
  /** Credentials for an OpenSearch cluster user. Optional if `cluster_uuid` is passed. */
  credentials?: { username?: string; password?: string };
  /** host of the OpenSearch cluster */
  endpoint: string;
  /** A unique identifier for a managed OpenSearch cluster. */
  cluster_uuid?: string;
  /** Name of a managed OpenSearch cluster. */
  cluster_name?: string;
  /** OpenSearch index to send logs to. */
  index_name?: string;
  /** Number of days to retain logs in OpenSearch (default: 14) */
  retention_days?: number;
};

export type Destination = {
  /** A unique identifier for a destination. */
  id?: string;
  /** destination name */
  name?: string;
  /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
  type?: "opensearch_dbaas" | "opensearch_ext";
  config: OpensearchConfig;
};

export type SinkResource = {
  /** The uniform resource name (URN) for the resource in the format do:resource_type:resource_id. */
  urn: string;
  /** resource name */
  name?: string;
};

export type SinksResponse = {
  destination?: Destination;
  /** List of resources identified by their URNs. */
  resources?: (SinkResource)[];
};

/** Provider-agnostic NFS access policy for an access point. Network CIDRs are managed by attach, detach, and managed-access workflows and are not part of this policy. */
export type AccessPolicy = {
  /** UID used for squashed users. Currently only 65534 is supported. */
  anonuid: number;
  /** GID used for squashed users. Currently only 65534 is supported. */
  anongid: number;
  /** Allowed NFS protocols for this export. */
  protocols: ("NFS4" | "NFS")[];
  /** The squash mode applied to the access point export. */
  squash_config: "NO_SQUASH" | "ROOT_SQUASH" | "ALL_SQUASH";
  /** Whether identity enforcement is enabled for this export. */
  identity_enforcement_enabled: boolean;
};

/** Represents an NFS access point resource. */
export type AccessPointResponse = {
  /** The unique identifier of the access point. */
  id: string;
  /** The human-readable name of the access point. Must be unique per share. */
  name: string;
  /** The unique identifier of the share this access point belongs to. */
  share_id: string;
  /** The export sub-path for this access point (always starts with `/`). */
  path: string;
  /** The current lifecycle status of an access point. There is no ACCESS_POINT_DELETING state: DELETE soft-deletes the access point synchronously (mirroring share deletion); the response of a delete request returns the access point already in ACCESS_POINT_DELETED.  */
  status: "ACCESS_POINT_CREATING" | "ACCESS_POINT_ACTIVE" | "ACCESS_POINT_FAILED" | "ACCESS_POINT_DELETED";
  access_policy: AccessPolicy;
  /** The timestamp when the access point was created. */
  created_at: string;
  /** The timestamp when the access point was last updated. May be empty while the access point is still being created.  */
  updated_at: string;
  /** Whether this is the share's default access point. */
  is_default: boolean;
  /** The VPC this access point is pinned to. Omitted on the default access point. Every non-default access point owns its own storage gateway in this VPC and is independent of the parent share's VPC lifecycle.  */
  vpc_id?: string;
};

export type NfsResponse = {
  /** The unique identifier of the NFS share. */
  id: string;
  /** The human-readable name of the share. */
  name: string;
  /** The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50. */
  size_gib: number;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region: string;
  /** The current status of the share. `INACTIVE` means the share exists but is not attached to any VPC.  */
  status: "CREATING" | "ACTIVE" | "INACTIVE" | "FAILED" | "DELETED";
  /** Timestamp for when the NFS share was created. */
  created_at: string;
  /** List of VPC IDs that should be able to access the share. */
  vpc_ids?: (string)[];
  /** The performance tier of the share. */
  performance_tier?: string;
  /** Path at which the share will be available, to be mounted at a target of the user's choice within the client */
  mount_path?: string;
  /** The host IP of the NFS server that will be accessible from the associated VPC */
  host?: string;
  /** Access points configured on this share. The default access point is returned first. */
  access_points?: (AccessPointResponse)[];
};

export type NfsListResponse = {
  shares?: (NfsResponse)[];
};

export type NfsRequest = {
  /** The human-readable name of the share. */
  name: string;
  /** The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50. */
  size_gib: number;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region: string;
  /** List of VPC IDs that should be able to access the share. */
  vpc_ids: (string)[];
  /** The performance tier of the share. */
  performance_tier?: string;
};

export type NfsCreateResponse = {
  share?: NfsResponse;
};

export type NfsGetResponse = {
  share?: NfsResponse;
};

/** Specifies the action that will be taken on the NFS share. */
export type NfsAction = {
  /** The type of action to initiate for the NFS share (such as resize or snapshot). */
  type: "resize" | "snapshot" | "attach" | "detach" | "reassign" | "switch_performance_tier";
  /** The DigitalOcean region slug (e.g. atl1, nyc2) where the NFS snapshot resides. */
  region?: string;
};

export type NfsActionResize = NfsAction & { params?: { size_gib: number } };

export type NfsActionSnapshot = NfsAction & { params?: { name: string } };

export type NfsActionAttach = NfsAction & { params?: { vpc_id: string } };

export type NfsActionDetach = NfsAction & { params?: { vpc_id: string } };

export type NfsActionReassign = NfsAction & { params?: { old_vpc_id: string; new_vpc_id: string } };

export type NfsActionSwitchPerformanceTier = NfsAction & { params?: { performance_tier: string } };

/** The action that was submitted. */
export type NfsAction2 = {
  /** The unique identifier of the action. */
  id?: string;
  /** The DigitalOcean region slug where the resource is located. */
  region_slug: string;
  /** The unique identifier of the resource on which the action is being performed. */
  resource_id: string;
  /** The type of resource on which the action is being performed. Access point mutations return `SHARE` with `resource_id` set to the access point UUID.  */
  resource_type: "SHARE" | "SNAPSHOT";
  /** The timestamp when the action was started. */
  started_at: string;
  /** The current status of the action. */
  status: "IN_PROGRESS" | "COMPLETED" | "ACTION_FAILED";
  /** The type of action being performed. Share actions use values such as `RESIZE_SHARE` and `CREATE_SHARE`. Access point mutations use `CREATE_ACCESS_POINT` and `DELETE_ACCESS_POINT`.  */
  type: string;
};

/** Action response of an NFS share. */
export type NfsActionsResponse = {
  action: NfsAction2;
};

/** Represents an NFS snapshot. */
export type NfsSnapshotResponse = {
  /** The unique identifier of the snapshot. */
  id: string;
  /** The human-readable name of the snapshot. */
  name: string;
  /** The size of the snapshot in GiB. */
  size_gib: number;
  /** The DigitalOcean region slug where the snapshot is located. */
  region: string;
  /** The current status of the snapshot. */
  status: "UNKNOWN" | "CREATING" | "ACTIVE" | "FAILED" | "DELETED";
  /** The timestamp when the snapshot was created. */
  created_at: string;
  /** The unique identifier of the share from which this snapshot was created. */
  share_id: string;
};

export type NfsSnapshotListResponse = {
  snapshots?: (NfsSnapshotResponse)[];
};

export type NfsSnapshotGetResponse = {
  snapshot?: NfsSnapshotResponse;
};

/** Response containing a list of access points. */
export type AccessPointListResponse = {
  /** Array of access point objects. */
  access_points: (AccessPointResponse)[];
};

/** A standard NFS API error response object. */
export type NfsApiError = {
  /** A service-defined error code. */
  code: string;
  /** A human-readable description of the error. */
  message: string;
};

/** Payload for creating a new access point on a share. */
export type AccessPointRequest = {
  /** The name for the access point. Must be unique per share. Must be 2–63 characters and match `^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$`. The name `default` is reserved (case-insensitive) for the implicit default access point created with each share.  */
  name: string;
  /** The export sub-path. Must start with `/`, must not be exactly `/` (reserved for the default access point), must be at most 1024 characters, may contain only alphanumerics, `-`, `_`, `.`, and `/`, and must not contain `..` path segments.  */
  path: string;
  access_policy: AccessPolicy;
  /** Required. The VPC this access point will be pinned to. A storage gateway is provisioned (or reused) in this VPC, and the access point becomes mountable from this VPC regardless of whether the parent share is currently attached to it.  */
  vpc_id: string;
};

/** Response returned after starting an access point mutation. */
export type AccessPointActionResponse = {
  access_point: AccessPointResponse;
  action: NfsAction2;
};

/** Response containing a single access point. */
export type AccessPointGetResponse = {
  access_point: AccessPointResponse;
};

/** An invitation to join a newly created team. */
export type TeamInvitation = {
  /** The email address of the user to invite. */
  email: string;
  /** The role to assign to the invited user. The `owner` role cannot be assigned via invitation.  */
  role: "member" | "biller" | "billing viewer" | "resource viewer" | "modifier";
};

export type CreateTeamRequest = {
  /** The human-readable name for the team to create. */
  name: string;
  /** Optional invitations to send when creating the team. Each invitation includes an email address and a role. The `owner` role cannot be assigned via invitation.  */
  invitations?: (TeamInvitation)[];
};

/** The team resource returned when a team is created in an organization. */
export type CreateTeam = {
  /** A unique universal identifier for the newly created team. */
  uuid: string;
  /** The human-readable name for the newly created team. */
  name: string;
};

/** The result of attempting to send a team invitation. */
export type TeamInvitationStatus = {
  /** The invitation delivery status for the email address. */
  status?: "ok" | "daily_invite_limit_reached";
};

/** A team that belongs to an organization. */
export type OrganizationTeam = {
  /** A unique identifier for the team. */
  id?: number;
  /** A unique universal identifier for the team. */
  uuid?: string;
  /** The human-readable name for the team. */
  name?: string;
  /** The email address associated with the team. */
  email?: string;
  /** The number of members on the team. */
  member_count?: number;
  /** The team's membership status within the organization. */
  status?: "joined" | "pending";
  /** A time value given in ISO8601 combined date and time format that represents when the team joined the organization.  */
  joined_organization_at?: string;
  /** The company name associated with the team, if set. */
  company?: string;
};

export type PartnerAttachment = {
  /** A unique ID that can be used to identify and reference the partner attachment. */
  id?: string;
  /** The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name?: string;
  /** The current operational state of the attachment. */
  state?: string;
  /** The bandwidth (in Mbps) of the connection. */
  connection_bandwidth_in_mbps?: number;
  /** The region where the partner attachment is located. */
  region?: string;
  /** The Network as a Service (NaaS) provider for the partner attachment. */
  naas_provider?: string;
  /** An array of VPC network IDs. */
  vpc_ids?: (string)[];
  /** The BGP configuration for the partner attachment. */
  bgp?: { local_asn?: number; peer_asn?: number; local_router_ip?: string; peer_router_ip?: string };
  /** A time value given in ISO8601 combined date and time format. */
  created_at?: string;
  /** Associated partner attachment UUID */
  parent_uuid?: string;
  /** An array of associated partner attachment UUIDs. */
  children?: (string)[];
};

export type PartnerAttachmentWritable = {
  /** The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name: string;
  /** Bandwidth (in Mbps) of the connection. */
  connection_bandwidth_in_mbps: 1000 | 2000 | 5000 | 10000;
  /** The region to create the partner attachment. */
  region: "nyc" | "sfo" | "fra" | "ams" | "sgp";
  naas_provider: string;
  /** An array of VPCs IDs. */
  vpc_ids: (string)[];
  /** Optional associated partner attachment UUID */
  parent_uuid?: string;
  /** Optional BGP configurations */
  bgp?: { local_router_ip: string; peer_router_ip: string; peer_router_asn: number; auth_key: string };
  /** Optional redundancy zone for the partner attachment. */
  redundancy_zone?: "MEGAPORT_BLUE" | "MEGAPORT_RED";
};

export type PartnerAttachmentUpdatable = { name: string } | { vpc_ids: (string)[] } | { bgp?: { local_router_ip: string; peer_router_ip: string; peer_router_asn: number; auth_key: string } };

export type PartnerAttachmentServiceKey = {
  value?: string;
  /** A time value given in the ISO 8601 combined date and time format. */
  created_at?: string;
  state?: string;
};

export type PartnerAttachmentRemoteRoute = {
  /** A CIDR block representing a remote route. */
  cidr?: string;
};

export type ProjectBase = {
  /** The unique universal identifier of this project. */
  id?: string;
  /** The unique universal identifier of the project owner. */
  owner_uuid?: string;
  /** The integer id of the project owner. */
  owner_id?: number;
  /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
  name?: string;
  /** The description of the project. The maximum length is 255 characters. */
  description?: string;
  /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
  purpose?: string;
  /** The environment of the project's resources. */
  environment?: "Development" | "Staging" | "Production";
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
  updated_at?: string;
};

export type Project = ProjectBase & { is_default?: boolean };

export type Resource = {
  urn?: Urn;
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  assigned_at?: string;
  /** The links object contains the `self` object, which contains the resource relationship. */
  links?: { self?: string };
  /** The status of assigning and fetching the resources. */
  status?: "ok" | "not_found" | "assigned" | "already_assigned" | "service_down";
};

export type ProjectAssignment = {
  /** A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned. */
  resources?: (Urn)[];
};

export type RegistryBase = {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the registry was created. */
  created_at?: string;
  /** Slug of the region where registry data is stored */
  region?: string;
  /** The amount of storage used in the registry in bytes. */
  storage_usage_bytes?: number;
  /** The time at which the storage usage was updated. Storage usage is calculated asynchronously, and may not immediately reflect pushes to the registry. */
  storage_usage_bytes_updated_at?: string;
};

export type SubscriptionTierBase = {
  /** The name of the subscription tier. */
  name?: string;
  /** The slug identifier of the subscription tier. */
  slug?: string;
  /** The number of repositories included in the subscription tier. `0` indicates that the subscription tier includes unlimited repositories. */
  included_repositories?: number;
  /** The amount of storage included in the subscription tier in bytes. */
  included_storage_bytes?: number;
  /** A boolean indicating whether the subscription tier supports additional storage above what is included in the base plan at an additional cost per GiB used. */
  allow_storage_overage?: boolean;
  /** The amount of outbound data transfer included in the subscription tier in bytes. */
  included_bandwidth_bytes?: number;
  /** The monthly cost of the subscription tier in cents. */
  monthly_price_in_cents?: number;
  /** The price paid in cents per GiB for additional storage beyond what is included in the subscription plan. */
  storage_overage_price_in_cents?: number;
};

export type Subscription = {
  tier?: SubscriptionTierBase;
  /** The time at which the subscription was created. */
  created_at?: string;
  /** The time at which the subscription was last updated. */
  updated_at?: string;
};

export type Registry = RegistryBase & { subscription?: unknown & Subscription };

export type MultiregistryCreate = {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
  /** The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint. */
  subscription_tier_slug?: "starter" | "basic" | "professional";
  /** Slug of the region where registry data is stored. When not provided, a region will be selected. */
  region?: "nyc3" | "sfo3" | "sfo2" | "ams3" | "sgp1" | "fra1" | "blr1" | "syd1";
};

export type Multiregistry = RegistryBase;

export type DockerCredentials = {
  auths?: { "registry.digitalocean.com"?: { auth?: string } };
};

export type SubscriptionTierExtended = {
  /** A boolean indicating whether your account it eligible to use a certain subscription tier. */
  eligible?: boolean;
  /** If your account is not eligible to use a certain subscription tier, this will include a list of reasons that prevent you from using the tier. */
  eligibility_reasons?: ("OverRepositoryLimit" | "OverStorageLimit")[];
};

export type GarbageCollection = {
  /** A string specifying the UUID of the garbage collection. */
  uuid?: string;
  /** The name of the container registry. */
  registry_name?: string;
  /** The current status of this garbage collection. */
  status?: "requested" | "waiting for write JWTs to expire" | "scanning manifests" | "deleting unreferenced blobs" | "cancelling" | "failed" | "succeeded" | "cancelled";
  /** The time the garbage collection was created. */
  created_at?: string;
  /** The time the garbage collection was last updated. */
  updated_at?: string;
  /** The number of blobs deleted as a result of this garbage collection. */
  blobs_deleted?: number;
  /** The number of bytes freed as a result of this garbage collection. */
  freed_bytes?: number;
};

export type UpdateRegistry = {
  /** A boolean value indicating that the garbage collection should be cancelled. */
  cancel?: boolean;
};

export type RepositoryBlob = {
  /** The digest of the blob */
  digest?: string;
  /** The compressed size of the blob in bytes. */
  compressed_size_bytes?: number;
};

export type RepositoryManifest = {
  /** The name of the container registry. */
  registry_name?: string;
  /** The name of the repository. */
  repository?: string;
  /** The manifest digest */
  digest?: string;
  /** The compressed size of the manifest in bytes. */
  compressed_size_bytes?: number;
  /** The uncompressed size of the manifest in bytes (this size is calculated asynchronously so it may not be immediately available). */
  size_bytes?: number;
  /** The time the manifest was last updated. */
  updated_at?: string;
  /** All tags associated with this manifest */
  tags?: (string)[];
  /** All blobs associated with this manifest */
  blobs?: (RepositoryBlob)[];
};

export type RepositoryV2 = {
  /** The name of the container registry. */
  registry_name?: string;
  /** The name of the repository. */
  name?: string;
  latest_manifest?: RepositoryManifest;
  /** The number of tags in the repository. */
  tag_count?: number;
  /** The number of manifests in the repository. */
  manifest_count?: number;
};

export type RepositoryTag = {
  /** The name of the container registry. */
  registry_name?: string;
  /** The name of the repository. */
  repository?: string;
  /** The name of the tag. */
  tag?: string;
  /** The digest of the manifest associated with the tag. */
  manifest_digest?: string;
  /** The compressed size of the tag in bytes. */
  compressed_size_bytes?: number;
  /** The uncompressed size of the tag in bytes (this size is calculated asynchronously so it may not be immediately available). */
  size_bytes?: number;
  /** The time the tag was last updated. */
  updated_at?: string;
};

export type ValidateRegistry = {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
};

export type RegistryCreate = {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
  /** The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint. */
  subscription_tier_slug: "starter" | "basic" | "professional";
  /** Slug of the region where registry data is stored. When not provided, a region will be selected. */
  region?: "nyc3" | "sfo3" | "ams3" | "sgp1" | "fra1";
};

export type Repository = {
  /** The name of the container registry. */
  registry_name?: string;
  /** The name of the repository. */
  name?: string;
  latest_tag?: RepositoryTag;
  /** The number of tags in the repository. */
  tag_count?: number;
};

export type RegistryRunGc = {
  /** Type of the garbage collection to run against this registry */
  type?: "untagged manifests only" | "unreferenced blobs only" | "untagged manifests and unreferenced blobs";
};

export type NeighborIds = {
  /** An array of arrays. Each array will contain a set of Droplet IDs for Droplets that share a physical server. */
  neighbor_ids?: ((number)[])[];
};

export type ReservedIp = {
  /** The public IP address of the reserved IP. It also serves as its identifier. */
  ip?: string;
  region?: Region & { [key: string]: unknown };
  /** The Droplet that the reserved IP has been assigned to. When you query a reserved IP, if it is assigned to a Droplet, the entire Droplet object will be returned. If it is not assigned, the value will be null.<br><br>Requires `droplet:read` scope. */
  droplet?: { [key: string]: unknown } | null | Droplet;
  /** A boolean value indicating whether or not the reserved IP has pending actions preventing new ones from being submitted. */
  locked?: boolean;
  /** The UUID of the project to which the reserved IP currently belongs.<br><br>Requires `project:read` scope. */
  project_id?: string;
};

export type ReservedIpCreate = { droplet_id: number } | { region: string; project_id?: string };

export type ReservedIpActionType = {
  /** The type of action to initiate for the reserved IP. */
  type: "assign" | "unassign";
};

export type ReservedIpActionAssign = ReservedIpActionType & { droplet_id: number };

export type ReservedIpActionUnassign = ReservedIpActionType & { [key: string]: unknown };

export type ReservedIpv6List = {
  reserved_ipv6s?: ({ ip?: string; region_slug?: string; reserved_at?: string; droplet?: { [key: string]: unknown } | null | Droplet })[];
};

export type ReservedIpv6Create = {
  /** The slug identifier for the region the reserved IPv6 will be reserved to. */
  region_slug: string;
};

export type ReservedIpv6 = {
  /** The public IP address of the reserved IPv6. It also serves as its identifier. */
  ip?: string;
  /** The date and time when the reserved IPv6 was reserved. */
  reserved_at?: string;
  /** The region that the reserved IPv6 is reserved to. When you query a reserved IPv6,the region_slug will be returned. */
  region_slug?: string;
  droplet?: { [key: string]: unknown } | null | Droplet;
};

export type ReservedIpv6ActionType = {
  /** The type of action to initiate for the reserved IPv6. */
  type: "assign" | "unassign";
};

export type ReservedIpv6ActionAssign = ReservedIpv6ActionType & { droplet_id: number };

export type ReservedIpv6ActionUnassign = ReservedIpv6ActionType & { [key: string]: unknown };

export type ByoipPrefix = {
  /** Unique identifier for the BYOIP prefix */
  uuid?: string;
  /** Name of the BYOIP prefix */
  name?: string;
  /** The IP prefix in CIDR notation */
  prefix?: string;
  /** Status of the BYOIP prefix */
  status?: string;
  /** Region where the BYOIP prefix is located */
  region?: string;
  /** List of validation statuses for the BYOIP prefix */
  validations?: ({ name?: string; status?: string; note?: string })[];
  /** Reason for failure, if applicable */
  failure_reason?: string;
  /** Whether the BYOIP prefix is locked */
  locked?: boolean;
  /** Whether the BYOIP prefix is being advertised */
  advertised?: boolean;
  /** The ID of the project associated with the BYOIP prefix */
  project_id?: string;
};

export type ByoipPrefixCreate = {
  /** The IP prefix in CIDR notation to bring */
  prefix: string;
  /** The region where the prefix will be created */
  region: string;
  /** The signature hash for the prefix creation request */
  signature: string;
};

export type ByoipPrefixUpdate = {
  /** Whether the BYOIP prefix should be advertised */
  advertise?: boolean;
};

export type ByoipPrefixResource = {
  /** Unique identifier for the allocation */
  id?: number;
  /** The BYOIP prefix UUID */
  byoip?: string;
  /** Region where the allocation is made */
  region?: string;
  /** The resource associated with the allocation */
  resource?: string;
  /** Time when the allocation was assigned */
  assigned_at?: string;
};

export type Scan = {
  /** The unique identifier for the scan. */
  id?: string;
  /** The status of the scan. */
  status?: "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CSPM_NOT_ENABLED" | "SCAN_NOT_RUN";
  /** When scan was created. */
  created_at?: string;
  findings?: ({ rule_uuid?: string; name?: string; details?: string; found_at?: string; severity?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"; business_impact?: string; technical_details?: string; mitigation_steps?: ({ step?: number; title?: string; description?: string })[]; affected_resources_count?: number })[];
};

export type AffectedResource = {
  /** The URN for the affected resource. */
  urn?: string;
  /** The name of the affected resource. */
  name?: string;
  /** The type of the affected resource. */
  type?: string;
};

export type SuppressedResource = {
  /** Unique identifier for the suppressed resource. */
  id?: string;
  /** Unique identifier for the suppressed rule. */
  rule_uuid?: string;
  /** Human-readable rule name for the suppressed rule. */
  rule_name?: string;
  /** Unique identifier for the resource suppressed. */
  resource_id?: string;
  /** Resource type for the resource suppressed. */
  resource_type?: string;
};

export type SuppressedResourceRoot = {
  resources?: (SuppressedResource)[];
  meta?: { page?: number; pages?: number; total?: number };
  links?: { pages?: { first?: string; prev?: string; next?: string; last?: string } };
};

/** Resources moving to a tier at a given effective time. */
export type PlanDowngrades = {
  /** URNs of resources that will be downgraded. */
  resources?: (string)[];
  /** When the coverage downgrade takes effect. */
  effective_at?: string;
};

export type Settings = {
  settings?: { suppressions?: SuppressedResourceRoot };
  tier_coverage?: { [key: string]: { resources?: (string)[]; tags?: (string)[] } | undefined };
  plan_downgrades?: { [key: string]: PlanDowngrades | undefined };
};

export type Snapshots = { id: string } & SnapshotsBase & { resource_id: string; resource_type: "droplet" | "volume"; tags: (string)[] | null };

export type Grant = {
  /** The name of the bucket. */
  bucket: string;
  /** The permission to grant to the user. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string. */
  permission: string;
};

export type Key = {
  /** The access key's name. */
  name?: string;
  /** The list of permissions for the access key. */
  grants?: (Grant)[];
  /** The Access Key ID used to access a bucket. */
  access_key?: string;
  /** The date and time the key was created. */
  created_at?: string;
};

export type KeyCreateResponse = { secret_key?: string } & Key;

/** Tagged Resource Statistics include metadata regarding the resource type that has been tagged. */
export type TagsMetadata = {
  /** The number of tagged objects for this type of resource. */
  count?: number;
  /** The URI for the last tagged object for this type of resource. */
  last_tagged_uri?: string;
};

/** A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it. Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged. */
export type Tags = {
  /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.  **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.  When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).  Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".  */
  name?: string;
  /** An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.  This will only include resources that you are authorized to see. For example, to see tagged Droplets, include the `droplet:read` scope.  */
  resources?: TagsMetadata & { droplets?: unknown & TagsMetadata; imgages?: unknown & TagsMetadata; volumes?: unknown & TagsMetadata; volume_snapshots?: unknown & TagsMetadata; databases?: unknown & TagsMetadata };
};

export type ErrorWithRootCauses = {
  /** A message providing information about the error. */
  error: string;
  /** A list of error messages. */
  messages?: (string)[] | null;
  /** A list of underlying causes for the error, including details to help  resolve it when possible. */
  root_causes: (string)[];
};

export type TagsResource = {
  /** An array of objects containing resource_id and resource_type  attributes.  This response will only include resources that you are authorized to see. For example, to see Droplets, include the `droplet:read` scope.  */
  resources: ({ resource_id?: string; resource_type?: "droplet" | "image" | "volume" | "volume_snapshot" })[];
};

/** VectorDBConfig holds optional, advanced cluster settings. */
export type VectordbVectorDbConfig = {
  /** Default vector compression for new collections: rq, pq, bq, or sq. Empty means platform default (rq). */
  default_quantization?: string;
  enable_auto_schema?: boolean;
  /** The Vector Database version running on the cluster. */
  weaviate_version?: string;
};

/** VectorDBEndpoints contains the connection endpoints for a vector database instance. */
export type VectordbVectorDbEndpoints = {
  /** Endpoint for gRPC connections (e.g. "my-db-tor1-a1b2c3d4-grpc.weaviate.ondigitalocean.com:443"). */
  grpc?: string;
  /** Endpoint for HTTPS connections (e.g. "https://my-db-tor1-a1b2c3d4.weaviate.ondigitalocean.com"). */
  http?: string;
};

/** VectorDB represents a provisioned vector database instance. */
export type VectordbVectorDb = {
  config?: VectordbVectorDbConfig;
  created_at?: string;
  endpoints?: VectordbVectorDbEndpoints;
  /** ID of the vector database this instance was forked from. Empty when the instance was created directly via CreateVectorDB. Read-only and set by the platform at fork time; never modifiable through UpdateVectorDB. */
  forked_from_id?: string;
  id?: string;
  /** Backup_id of the most recent restore initiated against this instance. Empty if no restore has ever been triggered. Lets callers recover the identifier of an in-flight or last-completed restore without having to retain the RestoreBackupResponse themselves. Use it with GetRestoreStatus to fetch the live status. */
  last_restore_id?: string;
  name?: string;
  owner_uuid?: string;
  /** Project this database belongs to. */
  project_id?: string;
  region?: string;
  /** Resource tier: small, medium, or large. */
  size?: string;
  /** Lifecycle state: pending, creating, active, errored, or deleting. */
  status?: string;
  tags?: (string)[];
  updated_at?: string;
};

export type VectordbListVectorDBsResponse = {
  total?: number;
  vector_dbs?: (VectordbVectorDb)[];
};

export type VectordbCreateVectorDbRequest = {
  /** Required. Human-readable name for the database. */
  name?: string;
  /** Required. ID of the project to create the vector database in. */
  project_id?: string;
  /** Required. Region slug where the database will be provisioned. */
  region?: string;
  /** Required. Resource tier: small, medium, or large. */
  size?: string;
  /** A set of arbitrary tags to organize your vector database */
  tags?: (string)[];
};

export type VectordbCreateVectorDbResponse = {
  vector_db?: VectordbVectorDb;
};

export type VectordbGetVectorDbResponse = {
  vector_db?: VectordbVectorDb;
};

export type VectordbUpdateVectorDbRequest = {
  config?: VectordbVectorDbConfig;
  /** ID of the vector database. */
  id?: string;
  /** Optional. New project UUID to assign the database to. */
  project_id?: string;
};

export type VectordbUpdateVectorDbResponse = {
  vector_db?: VectordbVectorDb;
};

/** Backup represents a single backup of a vector database. */
export type VectordbBackup = {
  /** Unique identifier for the backup (e.g., "vectordb-{uuid}-20240101-120000"). */
  backup_id?: string;
  /** Timestamp when the backup process completed. */
  completed_at?: string;
  /** Timestamp when the backup process started. */
  started_at?: string;
  /** Status of the backup: SUCCESS. */
  status?: string;
};

export type VectordbListBackupsResponse = {
  /** List of available backups. */
  backups?: (VectordbBackup)[];
};

export type VectordbGetRestoreStatusResponse = {
  /** The backup ID being restored. */
  backup_id?: string;
  /** Error message if the restore failed. */
  error?: string;
  /** Current status: STARTED, TRANSFERRING, TRANSFERRED, FINALIZING, SUCCESS, FAILED, CANCELLING, CANCELED. */
  status?: string;
};

export type VectordbRestoreBackupRequest = {
  /** Required. ID of the backup to restore from. */
  backup_id?: string;
  /** Required. ID of the vector database. */
  id?: string;
};

export type VectordbRestoreBackupResponse = {
  /** The backup ID being restored. */
  backup_id?: string;
  /** Initial status of the restore operation (e.g., "STARTED"). */
  status?: string;
};

export type VectordbGetVectorDbAdminCredentialsResponse = {
  /** API token for that user. */
  api_token?: string;
  /** Database user id from the cluster secret (opaque; matches what was provisioned). */
  user_id?: string;
};

export type VectordbResizeVectorDbRequest = {
  /** Required. ID of the vector database to resize. */
  id?: string;
  /** Required. Target resource tier: small, medium, or large. */
  size?: string;
};

export type VectordbResizeVectorDbResponse = {
  vector_db?: VectordbVectorDb;
};

export type VectordbUpdateVectorDbTagsRequest = {
  /** Required. ID of the vector database to update tags for. */
  id?: string;
  /** Tags to set on the vector database. Replaces all existing tags. */
  tags?: (string)[];
};

export type VectordbUpdateVectorDbTagsResponse = {
  vector_db?: VectordbVectorDb;
};

/** A flat array of tag names as strings applied to the resource. <br><br>Requires `tag:read` scope. */
export type TagsArrayRead = (string)[] | null;

export type VolumeBaseRead = {
  /** The unique identifier for the block storage volume. */
  id?: string;
  /** An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet. */
  droplet_ids?: (number)[] | null;
  /** A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters. The name must begin with a letter. */
  name?: string;
  /** An optional free-form text field to describe a block storage volume. */
  description?: string;
  /** The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot. */
  size_gigabytes?: number;
  /** A time value given in ISO8601 combined date and time format that represents when the block storage volume was created. */
  created_at?: string;
  tags?: TagsArrayRead;
};

export type VolumeFull = VolumeBaseRead & { region?: unknown & Region; filesystem_type?: string; filesystem_label?: string };

export type VolumeBase = {
  /** The unique identifier for the block storage volume. */
  id?: string;
  /** An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet. */
  droplet_ids?: (number)[] | null;
  /** A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters. The name must begin with a letter. */
  name?: string;
  /** An optional free-form text field to describe a block storage volume. */
  description?: string;
  /** The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot. */
  size_gigabytes?: number;
  /** A time value given in ISO8601 combined date and time format that represents when the block storage volume was created. */
  created_at?: string;
  tags?: TagsArray;
};

export type VolumeSnapshotId = {
  /** The unique identifier for the volume snapshot from which to create the volume. */
  snapshot_id?: string;
};

export type VolumeWriteFileSystemType = {
  /** The name of the filesystem type to be used on the volume. When provided, the volume will automatically be formatted to the specified filesystem type. Currently, the available options are `ext4` and `xfs`. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to other Droplets is not recommended. */
  filesystem_type?: string;
};

/** The label applied to the filesystem. Labels for ext4 type filesystems may contain 16 characters while labels for xfs type filesystems are limited to 12 characters. May only be used in conjunction with filesystem_type. */
export type VolumeWriteFileSystemLabel = string;

export type VolumesExt4 = VolumeBase & VolumeSnapshotId & VolumeWriteFileSystemType & { region: RegionSlug; filesystem_label?: VolumeWriteFileSystemLabel & unknown };

export type VolumesXfs = VolumeBase & VolumeSnapshotId & VolumeWriteFileSystemType & { region: RegionSlug; filesystem_label?: VolumeWriteFileSystemLabel & unknown };

export type VolumeActionPostBase = {
  /** The volume action to initiate. */
  type: "attach" | "detach" | "resize";
  region?: RegionSlug;
};

/** The unique identifier for the Droplet the volume will be attached or detached from. */
export type VolumeActionDropletId = number;

export type VolumeActionPostAttach = VolumeActionPostBase & { droplet_id: VolumeActionDropletId; tags?: TagsArray };

export type VolumeActionPostDetach = VolumeActionPostBase & { droplet_id: VolumeActionDropletId };

export type VolumeAction = { type?: string; resource_id?: number | null } & Action;

export type VolumeActionPostResize = VolumeActionPostBase & { size_gigabytes: number };

export type VpcUpdatable = {
  /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name?: string;
  /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
  description?: string;
};

export type VpcCreate = {
  /** The slug identifier for the region where the VPC will be created. */
  region?: string;
  /** The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account. */
  ip_range?: string;
};

export type VpcDefault = {
  /** A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined. */
  default?: boolean;
};

/** The uniform resource name (URN) for the resource in the format do:resource_type:resource_id. */
export type Urn2 = string;

export type VpcBase = {
  /** A unique ID that can be used to identify and reference the VPC. */
  id?: string;
  urn?: Urn2;
  /** A time value given in ISO8601 combined date and time format. */
  created_at?: string;
};

export type Vpc = VpcUpdatable & VpcCreate & VpcDefault & VpcBase;

export type VpcMember = {
  /** The name of the resource. */
  name?: string;
  urn?: Urn;
  /** A time value given in ISO8601 combined date and time format that represents when the resource was created. */
  created_at?: string;
};

export type VpcPeeringBase = {
  /** A unique ID that can be used to identify and reference the VPC peering. */
  id?: string;
  /** A time value given in ISO8601 combined date and time format. */
  created_at?: string;
  /** The current status of the VPC peering. */
  status?: "PROVISIONING" | "ACTIVE" | "DELETING";
};

export type VpcPeeringCreate = {
  /** An array of the two peered VPCs IDs. */
  vpc_ids?: (string)[];
};

export type VpcPeeringUpdatable = {
  /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
  name?: string;
};

export type VpcPeering = VpcPeeringBase & VpcPeeringCreate & VpcPeeringUpdatable;

export type VpcNatGatewayGet = {
  /** The unique identifier for the VPC NAT gateway. This is automatically generated upon creation. */
  id?: string;
  /** The human-readable name of the VPC NAT gateway. */
  name?: string;
  /** The type of the VPC NAT gateway. */
  type?: "PUBLIC";
  /** The current state of the VPC NAT gateway. */
  state?: "NEW" | "PROVISIONING" | "ACTIVE" | "DELETING" | "ERROR" | "INVALID";
  /** The region in which the VPC NAT gateway is created. */
  region?: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1" | "atl1";
  /** The size of the VPC NAT gateway. */
  size?: number;
  /** An array of VPCs associated with the VPC NAT gateway. */
  vpcs?: ({ vpc_uuid?: string; gateway_ip?: string })[];
  /** An object containing egress information for the VPC NAT gateway. */
  egresses?: { public_gateways?: ({ ipv4?: string })[] };
  /** The UDP timeout in seconds for the VPC NAT gateway. */
  udp_timeout_seconds?: number;
  /** The ICMP timeout in seconds for the VPC NAT gateway. */
  icmp_timeout_seconds?: number;
  /** The TCP timeout in seconds for the VPC NAT gateway. */
  tcp_timeout_seconds?: number;
  /** A time value given in ISO8601 combined date and time format that represents when the VPC NAT gateway was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the VPC NAT gateway was last updated. */
  updated_at?: string;
};

export type VpcNatGatewayCreate = {
  /** The human-readable name of the VPC NAT gateway. */
  name: string;
  /** The type of the VPC NAT gateway. */
  type: "PUBLIC";
  /** The region in which the VPC NAT gateway is created. */
  region: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1" | "atl1";
  /** The size of the VPC NAT gateway. */
  size: number;
  /** An array of VPCs associated with the VPC NAT gateway. */
  vpcs: ({ vpc_uuid: string; default_gateway?: boolean })[];
  /** The UDP timeout in seconds for the VPC NAT gateway. */
  udp_timeout_seconds?: number;
  /** The ICMP timeout in seconds for the VPC NAT gateway. */
  icmp_timeout_seconds?: number;
  /** The TCP timeout in seconds for the VPC NAT gateway. */
  tcp_timeout_seconds?: number;
};

export type VpcNatGatewayUpdate = {
  /** The human-readable name of the VPC NAT gateway. */
  name: string;
  /** The size of the VPC NAT gateway. */
  size: number;
  /** An array of VPCs associated with the VPC NAT gateway. */
  vpcs?: ({ vpc_uuid?: string; default_gateway?: boolean })[];
  /** The UDP timeout in seconds for the VPC NAT gateway. */
  udp_timeout_seconds?: number;
  /** The ICMP timeout in seconds for the VPC NAT gateway. */
  icmp_timeout_seconds?: number;
  /** The TCP timeout in seconds for the VPC NAT gateway. */
  tcp_timeout_seconds?: number;
};

export type CheckBase = {
  /** A unique ID that can be used to identify and reference the check. */
  id?: string;
};

export type CheckUpdatable = {
  /** A human-friendly display name. */
  name?: string;
  /** The type of health check to perform. */
  type?: "ping" | "http" | "https";
  /** The endpoint to perform healthchecks on. */
  target?: string;
  /** An array containing the selected regions to perform healthchecks from. */
  regions?: ("us_east" | "us_west" | "eu_west" | "se_asia")[];
  /** A boolean value indicating whether the check is enabled/disabled. */
  enabled?: boolean;
};

export type Check = CheckBase & CheckUpdatable;

export type RegionState = {
  status?: "DOWN" | "UP" | "CHECKING";
  status_changed_at?: string;
  thirty_day_uptime_percentage?: number;
};

/** A map of region to regional state */
export type RegionalState = {
  us_east?: RegionState;
  eu_west?: RegionState;
};

export type PreviousOutage = {
  region?: string;
  started_at?: string;
  ended_at?: string;
  duration_seconds?: number;
};

export type State = {
  regions?: RegionalState;
  previous_outage?: PreviousOutage;
};

export type AlertBase = {
  /** A unique ID that can be used to identify and reference the alert. */
  id?: string;
};

/** The notification settings for a trigger alert. */
export type Notification = {
  /** An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account. */
  email: (string)[];
  /** Slack integration details. */
  slack: ({ channel: string; url: string })[];
};

export type AlertUpdatable = {
  /** A human-friendly display name. */
  name?: string;
  /** The type of alert. */
  type?: "latency" | "down" | "down_global" | "ssl_expiry";
  /** The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type. */
  threshold?: number;
  /** The comparison operator used against the alert's threshold. */
  comparison?: "greater_than" | "less_than";
  notifications?: Notification;
  /** Period of time the threshold must be exceeded to trigger the alert. */
  period?: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
};

export type Alert = AlertBase & AlertUpdatable;

/** A Chatbot */
export type ApiChatbot = {
  allowed_domains?: (string)[];
  button_background_color?: string;
  logo?: string;
  /** Name of chatbot */
  name?: string;
  primary_color?: string;
  secondary_color?: string;
  starting_message?: string;
};

/** Agent Chatbot Identifier */
export type ApiAgentChatbotIdentifier = {
  /** Agent chatbot identifier */
  agent_chatbot_identifier?: string;
};

export type ApiDeploymentStatus = "STATUS_UNKNOWN" | "STATUS_WAITING_FOR_DEPLOYMENT" | "STATUS_DEPLOYING" | "STATUS_RUNNING" | "STATUS_FAILED" | "STATUS_WAITING_FOR_UNDEPLOYMENT" | "STATUS_UNDEPLOYING" | "STATUS_UNDEPLOYMENT_FAILED" | "STATUS_DELETED" | "STATUS_BUILDING";

/** - VISIBILITY_UNKNOWN: The status of the deployment is unknown  - VISIBILITY_DISABLED: The deployment is disabled and will no longer service requests  - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state  - VISIBILITY_PUBLIC: The deployment is public and will service requests from the public internet  - VISIBILITY_PRIVATE: The deployment is private and will only service requests from other agents, or through API keys */
export type ApiDeploymentVisibility = "VISIBILITY_UNKNOWN" | "VISIBILITY_DISABLED" | "VISIBILITY_PLAYGROUND" | "VISIBILITY_PUBLIC" | "VISIBILITY_PRIVATE";

/** Description of deployment */
export type ApiDeployment = {
  /** Creation date / time */
  created_at?: string;
  /** Name */
  name?: string;
  status?: ApiDeploymentStatus;
  /** Last modified */
  updated_at?: string;
  /** Access your deployed agent here */
  url?: string;
  /** Unique id */
  uuid?: string;
  visibility?: ApiDeploymentVisibility;
};

/** McpServer defines a remote MCP server configuration for an agent. */
export type ApiMcpServer = {
  /** Optional list of allowed tool names to expose from this server */
  allowed_tools?: (string)[];
  /** Optional authorization header value for the MCP server */
  authorization?: string;
  /** Optional additional headers to send to the MCP server */
  headers?: { [key: string]: string | undefined };
  /** A label identifying this MCP server */
  server_label?: string;
  /** The URL of the MCP server */
  server_url?: string;
};

/** Agreement Description */
export type ApiAgreement = {
  description?: string;
  name?: string;
  url?: string;
  uuid?: string;
};

/** An available endpoint for a model and its capabilities */
export type ApiModelEndpoint = {
  /** Capabilities supported by this endpoint (e.g. input_text, output_text, input_image) */
  capabilities?: (string)[];
  /** The endpoint path (e.g. /chat/responses) */
  endpoint?: string;
};

/** Input/output modalities */
export type ApiModelModalities = {
  input?: (string)[];
  output?: (string)[];
};

export type ApiModelProvider = "MODEL_PROVIDER_DIGITALOCEAN" | "MODEL_PROVIDER_ANTHROPIC" | "MODEL_PROVIDER_OPENAI";

/** A configurable setting for a model in the playground */
export type ApiModelSetting = {
  /** String default value (for type="dropdown", e.g. "medium") */
  default_string?: string;
  /** Numeric default value (for type="number") */
  default_value?: number;
  /** Maximum allowed value (for type="number") */
  max?: number;
  /** Minimum allowed value (for type="number") */
  min?: number;
  /** Setting key name (e.g. "max_tokens", "temperature", "resolution") */
  name?: string;
  /** Allowed values for dropdown selections (for type="dropdown") */
  options?: (string)[];
  /** Step increment for numeric settings (for type="number") */
  step?: number;
  /** Setting value type: "number" or "dropdown" */
  type?: string;
};

/** - MODEL_USECASE_UNKNOWN: The use case of the model is unknown  - MODEL_USECASE_AGENT: The model maybe used in an agent  - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning  - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)  - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails  - MODEL_USECASE_REASONING: The model usecase for reasoning  - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference  - MODEL_USECASE_EVALUATION_JUDGE: The model usecase for evaluation judge  - MODEL_USECASE_CODING: The model usecase for coding-optimized models  - MODEL_USECASE_AUDIO: The model usecase for audio models  - MODEL_USECASE_RERANKING: The model usecase for knowledge base reranking (cross-encoder) models  - MODEL_USECASE_TEXT: The model usecase for text modality (non image, non audio, non embedding, non reranking) serverless chat models */
export type ApiModelUsecase = "MODEL_USECASE_UNKNOWN" | "MODEL_USECASE_AGENT" | "MODEL_USECASE_FINETUNED" | "MODEL_USECASE_KNOWLEDGEBASE" | "MODEL_USECASE_GUARDRAIL" | "MODEL_USECASE_REASONING" | "MODEL_USECASE_SERVERLESS" | "MODEL_USECASE_EVALUATION_JUDGE" | "MODEL_USECASE_CODING" | "MODEL_USECASE_AUDIO" | "MODEL_USECASE_RERANKING" | "MODEL_USECASE_TEXT";

/** Version Information about a Model */
export type ApiModelVersion = {
  /** Major version number */
  major?: number;
  /** Minor version number */
  minor?: number;
  /** Patch version number */
  patch?: number;
};

/** Description of a Model */
export type ApiModel = {
  agreement?: ApiAgreement;
  /** Benchmark scores for this model, stored as arbitrary JSON */
  benchmark_score?: { [key: string]: unknown };
  /** High-level capabilities (e.g. tool_calling, vision, streaming) */
  capabilities?: (string)[];
  /** Context window size in tokens */
  context_window?: string;
  /** Creation date / time */
  created_at?: string;
  /** Available endpoints and their capabilities */
  endpoints?: (ApiModelEndpoint)[];
  /** Internally used name */
  inference_name?: string;
  /** Internally used version */
  inference_version?: string;
  /** True if it is a foundational model provided by do */
  is_foundational?: boolean;
  /** Default chunking size limit to show in UI */
  kb_default_chunk_size?: number;
  /** Maximum chunk size limit of model */
  kb_max_chunk_size?: number;
  /** Minimum chunking size token limits if model supports KNOWLEDGEBASE usecase */
  kb_min_chunk_size?: number;
  /** Lifecycle status of the model (internal, public-preview, active, deprecated, end_of_life) */
  lifecycle_status?: string;
  /** Additional meta data */
  metadata?: { [key: string]: unknown };
  modalities?: ApiModelModalities;
  /** Name of the model */
  name?: string;
  /** Parameter count in billions */
  parameter_count?: number;
  /** Unique id of the model, this model is based on */
  parent_uuid?: string;
  provider?: ApiModelProvider;
  /** Available reasoning efforts for this model */
  reasoning_efforts?: (string)[];
  /** Playground settings derived from model metadata */
  settings?: (ApiModelSetting)[];
  /** Whether this model supports extended thinking (Anthropic models) */
  thinking?: boolean;
  /** Model type (chat, embedding, image, reasoning, coding) */
  type?: string;
  /** Last modified */
  updated_at?: string;
  /** Model has been fully uploaded */
  upload_complete?: boolean;
  /** Download url */
  url?: string;
  /** Usecases of the model */
  usecases?: (ApiModelUsecase)[];
  /** Unique id */
  uuid?: string;
  version?: ApiModelVersion;
};

/** Task definition embedded in a model router config. */
export type ApiModelRouterTaskDetails = {
  /** Short task description */
  description?: string;
  /** Task name */
  name?: string;
};

/** Selection policy preference for choosing among assigned models. */
export type ApiModelRouterSelectionPolicy = {
  /** One of: none, cheapest, fastest */
  prefer?: string;
};

/** Model router policy */
export type ApiModelRouterTaskPolicy = {
  custom_task?: ApiModelRouterTaskDetails;
  /** Models assigned to the task */
  models?: (string)[];
  selection_policy?: ApiModelRouterSelectionPolicy;
  /** Task slug */
  task_slug?: string;
};

export type ApiModelRouterConfig = {
  /** Router-level fallback models */
  fallback_models?: (string)[];
  /** Task routing policies */
  policies?: (ApiModelRouterTaskPolicy)[];
};

/** Model router */
export type ApiModelRouter = {
  config?: ApiModelRouterConfig;
  /** Creation date / time */
  created_at?: string;
  /** Description */
  description?: string;
  /** Name of the model router */
  name?: string;
  /** Target regions for the router */
  regions?: (string)[];
  /** Last modified */
  updated_at?: string;
  /** Unique id */
  uuid?: string;
};

/** - RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown  - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite  - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back  - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries  - RETRIEVAL_METHOD_NONE: The retrieval method is none */
export type ApiRetrievalMethod = "RETRIEVAL_METHOD_UNKNOWN" | "RETRIEVAL_METHOD_REWRITE" | "RETRIEVAL_METHOD_STEP_BACK" | "RETRIEVAL_METHOD_SUB_QUERIES" | "RETRIEVAL_METHOD_NONE";

export type ApiAgentTemplateGuardrail = {
  /** Priority of the guardrail */
  priority?: number;
  /** Uuid of the guardrail */
  uuid?: string;
};

export type ApiIndexedDataSourceStatus = "DATA_SOURCE_STATUS_UNKNOWN" | "DATA_SOURCE_STATUS_IN_PROGRESS" | "DATA_SOURCE_STATUS_UPDATED" | "DATA_SOURCE_STATUS_PARTIALLY_UPDATED" | "DATA_SOURCE_STATUS_NOT_UPDATED" | "DATA_SOURCE_STATUS_FAILED" | "DATA_SOURCE_STATUS_CANCELLED";

export type ApiIndexedDataSource = {
  /** Timestamp when data source completed indexing */
  completed_at?: string;
  /** Uuid of the indexed data source */
  data_source_uuid?: string;
  /** A detailed error description */
  error_details?: string;
  /** A string code provinding a hint which part of the system experienced an error */
  error_msg?: string;
  /** Total count of files that have failed */
  failed_item_count?: string;
  /** Total count of files that have been indexed */
  indexed_file_count?: string;
  /** Total count of files that have been indexed */
  indexed_item_count?: string;
  /** Total count of files that have been removed */
  removed_item_count?: string;
  /** Total count of files that have been skipped */
  skipped_item_count?: string;
  /** Timestamp when data source started indexing */
  started_at?: string;
  status?: ApiIndexedDataSourceStatus;
  /** Total size of files in data source in bytes */
  total_bytes?: string;
  /** Total size of files in data source in bytes that have been indexed */
  total_bytes_indexed?: string;
  /** Total file count in the data source */
  total_file_count?: string;
};

export type ApiBatchJobPhase = "BATCH_JOB_PHASE_UNKNOWN" | "BATCH_JOB_PHASE_PENDING" | "BATCH_JOB_PHASE_RUNNING" | "BATCH_JOB_PHASE_SUCCEEDED" | "BATCH_JOB_PHASE_FAILED" | "BATCH_JOB_PHASE_ERROR" | "BATCH_JOB_PHASE_CANCELLED";

export type ApiIndexJobStatus = "INDEX_JOB_STATUS_UNKNOWN" | "INDEX_JOB_STATUS_PARTIAL" | "INDEX_JOB_STATUS_IN_PROGRESS" | "INDEX_JOB_STATUS_COMPLETED" | "INDEX_JOB_STATUS_FAILED" | "INDEX_JOB_STATUS_NO_CHANGES" | "INDEX_JOB_STATUS_PENDING" | "INDEX_JOB_STATUS_CANCELLED";

/** IndexingJob description */
export type ApiIndexingJob = {
  /** Number of datasources indexed completed */
  completed_datasources?: number;
  /** Creation date / time */
  created_at?: string;
  /** Details on Data Sources included in the Indexing Job */
  data_source_jobs?: (ApiIndexedDataSource)[];
  data_source_uuids?: (string)[];
  finished_at?: string;
  /** Boolean value to determine if the indexing job details are available */
  is_report_available?: boolean;
  /** Knowledge base id */
  knowledge_base_uuid?: string;
  phase?: ApiBatchJobPhase;
  started_at?: string;
  status?: ApiIndexJobStatus;
  /** Number of tokens [This field is deprecated] */
  tokens?: number;
  /** Number of datasources being indexed */
  total_datasources?: number;
  /** Total Tokens Consumed By the Indexing Job */
  total_tokens?: string;
  /** Last modified */
  updated_at?: string;
  /** Unique id */
  uuid?: string;
};

/** Configuration for cross-encoder reranking during retrieval. */
export type ApiRerankingConfiguration = {
  /** Whether reranking is enabled for retrieval */
  enabled?: boolean;
  /** Reranker model internal name */
  model?: string;
};

/** Knowledgebase Description */
export type ApiKnowledgeBase = {
  /** Time when the knowledge base was added to the agent */
  added_to_agent_at?: string;
  /** Creation date / time */
  created_at?: string;
  database_id?: string;
  embedding_model_uuid?: string;
  /** Whether the knowledge base is public or not */
  is_public?: boolean;
  last_indexing_job?: ApiIndexingJob;
  /** Name of knowledge base */
  name?: string;
  project_id?: string;
  /** Region code */
  region?: string;
  reranking_config?: ApiRerankingConfiguration;
  /** Tags to organize related resources */
  tags?: (string)[];
  /** Last modified */
  updated_at?: string;
  /** Id of user that created the knowledge base */
  user_id?: string;
  /** Unique id for knowledge base */
  uuid?: string;
};

/** - AGENT_TEMPLATE_TYPE_STANDARD: The standard agent template  - AGENT_TEMPLATE_TYPE_ONE_CLICK: The one click agent template */
export type ApiAgentTemplateType = "AGENT_TEMPLATE_TYPE_STANDARD" | "AGENT_TEMPLATE_TYPE_ONE_CLICK";

/** Represents an AgentTemplate entity */
export type ApiAgentTemplate = {
  /** The agent template's creation date */
  created_at?: string;
  /** Deprecated - Use summary instead */
  description?: string;
  /** List of guardrails associated with the agent template */
  guardrails?: (ApiAgentTemplateGuardrail)[];
  /** Instructions for the agent template */
  instruction?: string;
  /** The 'k' value for the agent template */
  k?: number;
  /** List of knowledge bases associated with the agent template */
  knowledge_bases?: (ApiKnowledgeBase)[];
  /** The long description of the agent template */
  long_description?: string;
  /** The max_tokens setting for the agent template */
  max_tokens?: number;
  model?: ApiModel;
  /** Name of the agent template */
  name?: string;
  /** The short description of the agent template */
  short_description?: string;
  /** The summary of the agent template */
  summary?: string;
  /** List of tags associated with the agent template */
  tags?: (string)[];
  /** The temperature setting for the agent template */
  temperature?: number;
  template_type?: ApiAgentTemplateType;
  /** The top_p setting for the agent template */
  top_p?: number;
  /** The agent template's last updated date */
  updated_at?: string;
  /** Unique id */
  uuid?: string;
};

/** A GenAI Agent's configuration */
export type ApiAgentPublic = {
  chatbot?: ApiChatbot;
  /** Chatbot identifiers */
  chatbot_identifiers?: (ApiAgentChatbotIdentifier)[];
  /** Creation date / time */
  created_at?: string;
  deployment?: ApiDeployment;
  /** Description of agent */
  description?: string;
  /** Instructions to the agent on how to use the route */
  if_case?: string;
  /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
  instruction?: string;
  /** How many results should be considered from an attached knowledge base */
  k?: number;
  /** Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response. */
  max_tokens?: number;
  /** MCP (Model Context Protocol) servers attached to this agent */
  mcp_servers?: (ApiMcpServer)[];
  model?: ApiModel;
  model_router?: ApiModelRouter;
  /** Agent name */
  name?: string;
  /** The DigitalOcean project ID associated with the agent */
  project_id?: string;
  /** Whether the agent should provide in-response citations */
  provide_citations?: boolean;
  /** The reasoning effort for the agent */
  reasoning_effort?: string;
  /** Region code */
  region?: string;
  retrieval_method?: ApiRetrievalMethod;
  /** Creation of route date / time */
  route_created_at?: string;
  /** Id of user that created the route */
  route_created_by?: string;
  /** Route name */
  route_name?: string;
  /** Route uuid */
  route_uuid?: string;
  /** A set of abitrary tags to organize your agent */
  tags?: (string)[];
  /** Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation. */
  temperature?: number;
  template?: ApiAgentTemplate;
  /** The thinking token budget for Anthropic extended thinking (0 = disabled) */
  thinking_token_budget?: number;
  /** Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses. */
  top_p?: number;
  /** Last modified */
  updated_at?: string;
  /** Access your agent under this url */
  url?: string;
  /** Id of user that created the agent */
  user_id?: string;
  /** Unique agent id */
  uuid?: string;
  /** The latest version of the agent */
  version_hash?: string;
  /** Whether this agent can use the built-in web_fetch tool to retrieve content from public web pages. */
  web_fetch_enabled?: boolean;
  /** Whether this agent can use the built-in web_search tool to search the public web for current information. */
  web_search_enabled?: boolean;
};

/** Information about how to reach other pages */
export type ApiPages = {
  /** First page */
  first?: string;
  /** Last page */
  last?: string;
  /** Next page */
  next?: string;
  /** Previous page */
  previous?: string;
};

/** Links to other pages */
export type ApiLinks = {
  pages?: ApiPages;
};

/** Meta information about the data set */
export type ApiMeta = {
  /** The current page */
  page?: number;
  /** Total number of pages */
  pages?: number;
  /** Total amount of items over all pages */
  total?: number;
};

/** List of Agents */
export type ApiListAgentsOutputPublic = {
  /** Agents */
  agents?: (ApiAgentPublic)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** Parameters for Agent Creation */
export type ApiCreateAgentInputPublic = {
  /** Optional Anthropic API key ID to use with Anthropic models */
  anthropic_key_uuid?: string;
  /** A text description of the agent, not used in inference */
  description?: string;
  /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
  instruction?: string;
  /** Ids of the knowledge base(s) to attach to the agent */
  knowledge_base_uuid?: (string)[];
  /** MCP (Model Context Protocol) servers to attach to the agent */
  mcp_servers?: (ApiMcpServer)[];
  model_provider_key_uuid?: string;
  model_router_uuid?: string;
  /** Identifier for the foundation model. */
  model_uuid?: string;
  /** Agent name */
  name?: string;
  /** Optional OpenAI API key ID to use with OpenAI models */
  open_ai_key_uuid?: string;
  /** The id of the DigitalOcean project this agent will belong to */
  project_id?: string;
  reasoning_effort?: string;
  /** The DigitalOcean region to deploy your agent in */
  region?: string;
  router_preset_slug?: string;
  /** Agent tag to organize related resources */
  tags?: (string)[];
  thinking_token_budget?: number;
  /** Whether the agent can use the built-in web_fetch tool to retrieve content from public web pages. */
  web_fetch_enabled?: boolean;
  /** Whether the agent can use the built-in web_search tool to search the public web for current information. */
  web_search_enabled?: boolean;
  /** Identifier for the workspace */
  workspace_uuid?: string;
};

/** Anthropic API Key Info */
export type ApiAnthropicApiKeyInfo = {
  /** Key creation date */
  created_at?: string;
  /** Created by user id from DO */
  created_by?: string;
  /** Key deleted date */
  deleted_at?: string;
  /** Name */
  name?: string;
  /** Key last updated date */
  updated_at?: string;
  /** Uuid */
  uuid?: string;
};

/** Agent API Key Info */
export type ApiAgentApiKeyInfo = {
  /** Creation date */
  created_at?: string;
  /** Created by */
  created_by?: string;
  /** Deleted date */
  deleted_at?: string;
  /** Name */
  name?: string;
  secret_key?: string;
  /** Uuid */
  uuid?: string;
};

/** Agent API Key */
export type ApiAgentApiKey = {
  /** Api key */
  api_key?: string;
};

/** An Agent */
export type ApiAgent = {
  anthropic_api_key?: ApiAnthropicApiKeyInfo;
  /** Api key infos */
  api_key_infos?: (ApiAgentApiKeyInfo)[];
  /** Api keys */
  api_keys?: (ApiAgentApiKey)[];
  chatbot?: ApiChatbot;
  /** Chatbot identifiers */
  chatbot_identifiers?: (ApiAgentChatbotIdentifier)[];
  /** Child agents */
  child_agents?: (ApiAgent)[];
  /** Whether conversation logs are enabled for the agent */
  conversation_logs_enabled?: boolean;
  /** Creation date / time */
  created_at?: string;
  deployment?: ApiDeployment;
  /** Description of agent */
  description?: string;
  functions?: (ApiAgentFunction)[];
  /** The guardrails the agent is attached to */
  guardrails?: (ApiAgentGuardrail)[];
  if_case?: string;
  /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
  instruction?: string;
  k?: number;
  /** Knowledge bases */
  knowledge_bases?: (ApiKnowledgeBase)[];
  logging_config?: ApiAgentLoggingConfig;
  max_tokens?: number;
  /** MCP (Model Context Protocol) servers attached to this agent */
  mcp_servers?: (ApiMcpServer)[];
  model?: ApiModel;
  model_provider_key?: ApiModelProviderKeyInfo;
  model_router?: ApiModelRouter;
  /** Agent name */
  name?: string;
  openai_api_key?: ApiOpenAiapiKeyInfo;
  /** Parent agents */
  parent_agents?: (ApiAgent)[];
  project_id?: string;
  /** Whether the agent should provide in-response citations */
  provide_citations?: boolean;
  /** The reasoning effort for the agent */
  reasoning_effort?: string;
  /** Region code */
  region?: string;
  retrieval_method?: ApiRetrievalMethod;
  /** Creation of route date / time */
  route_created_at?: string;
  route_created_by?: string;
  /** Route name */
  route_name?: string;
  route_uuid?: string;
  /** Agent tag to organize related resources */
  tags?: (string)[];
  temperature?: number;
  template?: ApiAgentTemplate;
  /** The thinking token budget for Anthropic extended thinking (0 = disabled) */
  thinking_token_budget?: number;
  top_p?: number;
  /** Last modified */
  updated_at?: string;
  /** Access your agent under this url */
  url?: string;
  /** Id of user that created the agent */
  user_id?: string;
  /** Unique agent id */
  uuid?: string;
  /** The latest version of the agent */
  version_hash?: string;
  /** VPC Egress IPs */
  vpc_egress_ips?: (string)[];
  vpc_uuid?: string;
  /** Whether this agent can use the built-in web_fetch tool. */
  web_fetch_enabled?: boolean;
  /** Whether this agent can use the built-in web_search tool. */
  web_search_enabled?: boolean;
  workspace?: ApiWorkspace;
};

/** Description missing */
export type ApiAgentFunction = {
  /** Api key */
  api_key?: string;
  /** Creation date / time */
  created_at?: string;
  /** Created by user id from DO */
  created_by?: string;
  /** Agent description */
  description?: string;
  faas_name?: string;
  faas_namespace?: string;
  input_schema?: { [key: string]: unknown };
  /** Name */
  name?: string;
  output_schema?: { [key: string]: unknown };
  /** Last modified */
  updated_at?: string;
  /** Download your agent here */
  url?: string;
  /** Unique id */
  uuid?: string;
};

export type ApiGuardrailType = "GUARDRAIL_TYPE_UNKNOWN" | "GUARDRAIL_TYPE_JAILBREAK" | "GUARDRAIL_TYPE_SENSITIVE_DATA" | "GUARDRAIL_TYPE_CONTENT_MODERATION";

/** A Agent Guardrail */
export type ApiAgentGuardrail = {
  agent_uuid?: string;
  created_at?: string;
  default_response?: string;
  description?: string;
  guardrail_uuid?: string;
  is_attached?: boolean;
  is_default?: boolean;
  metadata?: { [key: string]: unknown };
  name?: string;
  priority?: number;
  type?: ApiGuardrailType;
  updated_at?: string;
  uuid?: string;
};

export type ApiAgentLoggingConfig = {
  /** Galileo project identifier */
  galileo_project_id?: string;
  /** Name of the Galileo project */
  galileo_project_name?: string;
  /** Whether insights are enabled */
  insights_enabled?: boolean;
  /** Timestamp when insights were enabled */
  insights_enabled_at?: string;
  /** Identifier for the log stream */
  log_stream_id?: string;
  /** Name of the log stream */
  log_stream_name?: string;
};

export type ApiModelProviderKeyInfo = {
  /** API key ID */
  api_key_uuid?: string;
  /** Key creation date */
  created_at?: string;
  /** Created by user id from DO */
  created_by?: string;
  /** Key deleted date */
  deleted_at?: string;
  /** Models supported by the openAI api key */
  models?: (ApiModel)[];
  /** Name of the key */
  name?: string;
  provider?: ApiModelProvider;
  /** Key last updated date */
  updated_at?: string;
};

/** OpenAI API Key Info */
export type ApiOpenAiapiKeyInfo = {
  /** Key creation date */
  created_at?: string;
  /** Created by user id from DO */
  created_by?: string;
  /** Key deleted date */
  deleted_at?: string;
  /** Models supported by the openAI api key */
  models?: (ApiModel)[];
  /** Name */
  name?: string;
  /** Key last updated date */
  updated_at?: string;
  /** Uuid */
  uuid?: string;
};

export type ApiEvaluationDatasetType = "EVALUATION_DATASET_TYPE_UNKNOWN" | "EVALUATION_DATASET_TYPE_ADK" | "EVALUATION_DATASET_TYPE_NON_ADK" | "EVALUATION_DATASET_TYPE_MODEL";

export type ApiEvaluationDataset = {
  /** Time created at. */
  created_at?: string;
  /** Name of the dataset. */
  dataset_name?: string;
  dataset_type?: ApiEvaluationDatasetType;
  /** UUID of the dataset. */
  dataset_uuid?: string;
  /** The size of the dataset uploaded file in bytes. */
  file_size?: string;
  /** Does the dataset have a ground truth column? */
  has_ground_truth?: boolean;
  /** Number of rows in the dataset. */
  row_count?: number;
};

/** AssociatedModelEvaluationPreset identifies a saved model evaluation preset that references a metric. Returned alongside custom metrics so the dashboard can warn that deleting the metric will also delete these presets. */
export type ApiAssociatedModelEvaluationPreset = {
  /** Unique identifier of the saved model evaluation preset that references the metric. */
  eval_preset_uuid?: string;
  /** Display name of the saved model evaluation preset. */
  name?: string;
};

export type ApiEvaluationMetricCategory = "METRIC_CATEGORY_UNSPECIFIED" | "METRIC_CATEGORY_CORRECTNESS" | "METRIC_CATEGORY_USER_OUTCOMES" | "METRIC_CATEGORY_SAFETY_AND_SECURITY" | "METRIC_CATEGORY_CONTEXT_QUALITY" | "METRIC_CATEGORY_MODEL_FIT";

/** Configuration for a custom model-evaluation metric scored by an LLM judge. Prompt and model response are always included in the judge context. */
export type ApiCustomEvaluationMetricConfig = {
  created_at?: string;
  /** When set, the custom metric is soft-deleted and must not appear in pickers. */
  deleted_at?: string;
  /** When true, each row must provide ground truth and it is included in the judge context. When false, ground truth is not required and is not sent to the judge. */
  requires_ground_truth?: boolean;
  /** Instructions for the judge model (multi-line). */
  scoring_prompt?: string;
  updated_at?: string;
};

/** Scope that determines whether a metric belongs to agent evaluation or model evaluation. For backwards compatibility, UNSPECIFIED defaults to agent metrics only in list operations. */
export type ApiEvaluationScope = "EVALUATION_SCOPE_UNSPECIFIED" | "EVALUATION_SCOPE_AGENT" | "EVALUATION_SCOPE_MODEL";

export type ApiEvaluationMetricType = "METRIC_TYPE_UNSPECIFIED" | "METRIC_TYPE_GENERAL_QUALITY" | "METRIC_TYPE_RAG_AND_TOOL" | "METRIC_TYPE_MODEL_QUALITY" | "METRIC_TYPE_MODEL_SAFETY";

export type ApiEvaluationMetricValueType = "METRIC_VALUE_TYPE_UNSPECIFIED" | "METRIC_VALUE_TYPE_NUMBER" | "METRIC_VALUE_TYPE_STRING" | "METRIC_VALUE_TYPE_PERCENTAGE";

/** Distinguishes platform catalog metrics from user-defined LLM-as-judge metrics. */
export type ApiEvaluationMetricSource = "EVALUATION_METRIC_SOURCE_UNSPECIFIED" | "EVALUATION_METRIC_SOURCE_BUILTIN" | "EVALUATION_METRIC_SOURCE_CUSTOM";

export type ApiEvaluationMetric = {
  /** Saved model evaluation presets that reference this metric. Populated for custom metrics when listing metrics so the dashboard can warn that deleting the metric will also delete these presets. Empty for built-in metrics. */
  associated_presets?: (ApiAssociatedModelEvaluationPreset)[];
  category?: ApiEvaluationMetricCategory;
  custom_eval_config?: ApiCustomEvaluationMetricConfig;
  description?: string;
  evaluation_scope?: ApiEvaluationScope;
  /** If true, the metric is inverted, meaning that a lower value is better. */
  inverted?: boolean;
  is_metric_goal?: boolean;
  metric_name?: string;
  metric_rank?: number;
  metric_type?: ApiEvaluationMetricType;
  metric_uuid?: string;
  metric_value_type?: ApiEvaluationMetricValueType;
  /** The maximum value for the metric. */
  range_max?: number;
  /** The minimum value for the metric. */
  range_min?: number;
  source?: ApiEvaluationMetricSource;
};

export type ApiStarMetric = {
  metric_uuid?: string;
  name?: string;
  /** The success threshold for the star metric. This is a value that the metric must reach to be considered successful. */
  success_threshold?: number;
  /** The success threshold for the star metric. This is a percentage value between 0 and 100. */
  success_threshold_pct?: number;
};

export type ApiEvaluationTestCase = {
  archived_at?: string;
  created_at?: string;
  created_by_user_email?: string;
  created_by_user_id?: string;
  dataset?: ApiEvaluationDataset;
  dataset_name?: string;
  dataset_uuid?: string;
  description?: string;
  latest_version_number_of_runs?: number;
  metrics?: (ApiEvaluationMetric)[];
  name?: string;
  star_metric?: ApiStarMetric;
  test_case_uuid?: string;
  total_runs?: number;
  updated_at?: string;
  updated_by_user_email?: string;
  updated_by_user_id?: string;
  version?: number;
};

export type ApiWorkspace = {
  /** Agents */
  agents?: (ApiAgent)[];
  /** Creation date */
  created_at?: string;
  /** The id of user who created this workspace */
  created_by?: string;
  /** The email of the user who created this workspace */
  created_by_email?: string;
  /** Deleted date */
  deleted_at?: string;
  /** Description of the workspace */
  description?: string;
  /** Evaluations */
  evaluation_test_cases?: (ApiEvaluationTestCase)[];
  /** Name of the workspace */
  name?: string;
  /** Update date */
  updated_at?: string;
  /** Unique id */
  uuid?: string;
};

/** Information about a newly created Agent */
export type ApiCreateAgentOutput = {
  agent?: ApiAgent;
};

export type ApiListAgentApiKeysOutput = {
  /** Api key infos */
  api_key_infos?: (ApiAgentApiKeyInfo)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

export type ApiCreateAgentApiKeyInputPublic = {
  /** Agent id */
  agent_uuid?: string;
  /** A human friendly name to identify the key */
  name?: string;
};

export type ApiCreateAgentApiKeyOutput = {
  api_key_info?: ApiAgentApiKeyInfo;
};

export type ApiUpdateAgentApiKeyInputPublic = {
  /** Agent id */
  agent_uuid?: string;
  /** API key ID */
  api_key_uuid?: string;
  /** Name */
  name?: string;
};

export type ApiUpdateAgentApiKeyOutput = {
  api_key_info?: ApiAgentApiKeyInfo;
};

export type ApiDeleteAgentApiKeyOutput = {
  api_key_info?: ApiAgentApiKeyInfo;
};

export type ApiRegenerateAgentApiKeyOutput = {
  api_key_info?: ApiAgentApiKeyInfo;
};

/** Information for a agent function link */
export type ApiLinkAgentFunctionInputPublic = {
  /** Agent id */
  agent_uuid?: string;
  /** Function description */
  description?: string;
  /** The name of the function in the DigitalOcean functions platform */
  faas_name?: string;
  /** The namespace of the function in the DigitalOcean functions platform */
  faas_namespace?: string;
  /** Function name */
  function_name?: string;
  /** Describe the input schema for the function so the agent may call it */
  input_schema?: { [key: string]: unknown };
  /** Describe the output schema for the function so the agent handle its response */
  output_schema?: { [key: string]: unknown };
};

/** Information about a newly function linked agent */
export type ApiLinkAgentFunctionOutput = {
  agent?: ApiAgent;
};

/** Information about updating an agent function */
export type ApiUpdateAgentFunctionInputPublic = {
  /** Agent id */
  agent_uuid?: string;
  /** Funciton description */
  description?: string;
  /** The name of the function in the DigitalOcean functions platform */
  faas_name?: string;
  /** The namespace of the function in the DigitalOcean functions platform */
  faas_namespace?: string;
  /** Function name */
  function_name?: string;
  /** Function id */
  function_uuid?: string;
  /** Describe the input schema for the function so the agent may call it */
  input_schema?: { [key: string]: unknown };
  /** Describe the output schema for the function so the agent handle its response */
  output_schema?: { [key: string]: unknown };
};

/** The updated agent */
export type ApiUpdateAgentFunctionOutput = {
  agent?: ApiAgent;
};

/** Information about a newly unlinked agent */
export type ApiUnlinkAgentFunctionOutput = {
  agent?: ApiAgent;
};

export type ApiAgentGuardrailInput = {
  /** Guardrail uuid */
  guardrail_uuid?: string;
  /** Priority of the guardrail */
  priority?: number;
};

/** Information about linking an agent to a guardrail */
export type ApiLinkAgentGuardrailsInputPublic = {
  /** The UUID of the agent. */
  agent_uuid?: string;
  /** The list of guardrails to attach. */
  guardrails?: (ApiAgentGuardrailInput)[];
};

/** Information about an updated agent */
export type ApiLinkAgentGuardrailOutput = {
  agent?: ApiAgent;
};

/** UnlinkAgentGuardrailOutput description */
export type ApiUnlinkAgentGuardrailOutput = {
  agent?: ApiAgent;
};

/** Information about a linked knowledge base */
export type ApiLinkKnowledgeBaseOutput = {
  agent?: ApiAgent;
};

/** Informatinon about a unlinked knowledge base */
export type ApiUnlinkKnowledgeBaseOutput = {
  agent?: ApiAgent;
};

/** Information about updating the linkage of an agent */
export type ApiUpdateLinkedAgentInputPublic = {
  /** Routed agent id */
  child_agent_uuid?: string;
  /** Describes the case in which the child agent should be used */
  if_case?: string;
  /** A unique identifier for the parent agent. */
  parent_agent_uuid?: string;
  /** Route name */
  route_name?: string;
  /** Unique id of linkage */
  uuid?: string;
};

/** Information about an updated linkage */
export type ApiUpdateLinkedAgentOutput = {
  /** Routed agent id */
  child_agent_uuid?: string;
  /** A unique identifier for the parent agent. */
  parent_agent_uuid?: string;
  rollback?: boolean;
  /** Unique id of linkage */
  uuid?: string;
};

/** Information for linking an agent */
export type ApiLinkAgentInputPublic = {
  /** Routed agent id */
  child_agent_uuid?: string;
  if_case?: string;
  /** A unique identifier for the parent agent. */
  parent_agent_uuid?: string;
  /** Name of route */
  route_name?: string;
};

/** Information about a newly linked agent */
export type ApiLinkAgentOutput = {
  /** Routed agent id */
  child_agent_uuid?: string;
  /** A unique identifier for the parent agent. */
  parent_agent_uuid?: string;
};

/** Information about a removed linkage */
export type ApiUnlinkAgentOutput = {
  /** Routed agent id */
  child_agent_uuid?: string;
  /** Pagent agent id */
  parent_agent_uuid?: string;
};

/** One Agent */
export type ApiGetAgentOutput = {
  agent?: ApiAgent;
};

/** Data to modify an existing Agent */
export type ApiUpdateAgentInputPublic = {
  agent_log_insights_enabled?: boolean;
  /** Optional list of allowed domains for the chatbot - Must use fully qualified domain name (FQDN) such as https://example.com */
  allowed_domains?: (string)[];
  /** Optional anthropic key uuid for use with anthropic models */
  anthropic_key_uuid?: string;
  /** When true, removes all MCP servers from the agent. Use this instead of sending an empty mcp_servers array. */
  clear_mcp_servers?: boolean;
  /** Optional update of conversation logs enabled */
  conversation_logs_enabled?: boolean;
  /** Agent description */
  description?: string;
  /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
  instruction?: string;
  /** How many results should be considered from an attached knowledge base */
  k?: number;
  /** Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response. */
  max_tokens?: number;
  /** MCP (Model Context Protocol) servers to attach to the agent */
  mcp_servers?: (ApiMcpServer)[];
  /** Optional Model Provider uuid for use with provider models */
  model_provider_key_uuid?: string;
  model_router_uuid?: string;
  /** Identifier for the foundation model. */
  model_uuid?: string;
  /** Agent name */
  name?: string;
  /** Optional OpenAI key uuid for use with OpenAI models */
  open_ai_key_uuid?: string;
  /** The id of the DigitalOcean project this agent will belong to */
  project_id?: string;
  provide_citations?: boolean;
  reasoning_effort?: string;
  retrieval_method?: ApiRetrievalMethod;
  router_preset_slug?: string;
  /** A set of abitrary tags to organize your agent */
  tags?: (string)[];
  /** Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation. */
  temperature?: number;
  thinking_token_budget?: number;
  /** Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses. */
  top_p?: number;
  /** Unique agent id */
  uuid?: string;
  /** Optional. Set to true to let the agent use the built-in web_fetch tool to retrieve content from public web pages, or false to disable it. */
  web_fetch_enabled?: boolean;
  /** Optional. Set to true to let the agent use the built-in web_search tool to search the public web for current information, or false to disable it. */
  web_search_enabled?: boolean;
};

/** Information about an updated agent */
export type ApiUpdateAgentOutput = {
  agent?: ApiAgent;
};

/** Info about a deleted agent */
export type ApiDeleteAgentOutput = {
  agent?: ApiAgent;
};

/** Child list for an agent */
export type ApiGetChildrenOutput = {
  /** Child agents */
  children?: (ApiAgent)[];
};

/** UpdateAgentDeploymentVisibilityInputPublic description */
export type ApiUpdateAgentDeploymentVisibilityInputPublic = {
  /** Unique id */
  uuid?: string;
  visibility?: ApiDeploymentVisibility;
};

/** UpdateAgentDeploymentVisbilityOutput description */
export type ApiUpdateAgentDeploymentVisbilityOutput = {
  agent?: ApiAgent;
};

/** Usage Measurement Description */
export type ApiUsageMeasurement = {
  tokens?: number;
  usage_type?: string;
};

/** Resource Usage Description */
export type ApiResourceUsage = {
  measurements?: (ApiUsageMeasurement)[];
  resource_uuid?: string;
  start?: string;
  stop?: string;
};

/** Agent usage */
export type ApiGetAgentUsageOutput = {
  log_insights_usage?: ApiResourceUsage;
  usage?: ApiResourceUsage;
};

export type ApiAgentChildRelationshipVerion = {
  /** Name of the child agent */
  agent_name?: string;
  /** Child agent unique identifier */
  child_agent_uuid?: string;
  /** If case */
  if_case?: string;
  /** Child agent is deleted */
  is_deleted?: boolean;
  /** Route name */
  route_name?: string;
};

/** Function represents a function configuration for an agent */
export type ApiAgentFunctionVersion = {
  /** Description of the function */
  description?: string;
  /** FaaS name of the function */
  faas_name?: string;
  /** FaaS namespace of the function */
  faas_namespace?: string;
  /** Whether the function is deleted */
  is_deleted?: boolean;
  /** Name of the function */
  name?: string;
};

/** Agent Guardrail version */
export type ApiAgentGuardrailVersion = {
  /** Whether the guardrail is deleted */
  is_deleted?: boolean;
  /** Guardrail Name */
  name?: string;
  /** Guardrail Priority */
  priority?: number;
  /** Guardrail UUID */
  uuid?: string;
};

export type ApiAgentKnowledgeBaseVersion = {
  /** Deletet at date / time */
  is_deleted?: boolean;
  /** Name of the knowledge base */
  name?: string;
  /** Unique id of the knowledge base */
  uuid?: string;
};

/** Represents an AgentVersion entity */
export type ApiAgentVersion = {
  /** Uuid of the agent this version belongs to */
  agent_uuid?: string;
  /** List of child agent relationships */
  attached_child_agents?: (ApiAgentChildRelationshipVerion)[];
  /** List of function versions */
  attached_functions?: (ApiAgentFunctionVersion)[];
  /** List of guardrail version */
  attached_guardrails?: (ApiAgentGuardrailVersion)[];
  /** List of knowledge base agent versions */
  attached_knowledgebases?: (ApiAgentKnowledgeBaseVersion)[];
  /** Whether the version is able to be rolled back to */
  can_rollback?: boolean;
  /** Creation date */
  created_at?: string;
  /** User who created this version */
  created_by_email?: string;
  /** Whether this is the currently applied configuration */
  currently_applied?: boolean;
  /** Description of the agent */
  description?: string;
  /** Unique identifier */
  id?: string;
  /** Instruction for the agent */
  instruction?: string;
  /** K value for the agent's configuration */
  k?: number;
  /** Max tokens setting for the agent */
  max_tokens?: number;
  /** Name of model associated to the agent version */
  model_name?: string;
  /** Name of the agent */
  name?: string;
  /** Whether the agent should provide in-response citations */
  provide_citations?: boolean;
  retrieval_method?: ApiRetrievalMethod;
  /** Tags associated with the agent */
  tags?: (string)[];
  /** Temperature setting for the agent */
  temperature?: number;
  /** Top_p setting for the agent */
  top_p?: number;
  /** Action triggering the configuration update */
  trigger_action?: string;
  /** Version hash */
  version_hash?: string;
};

/** List of agent versions */
export type ApiListAgentVersionsOutput = {
  /** Agents */
  agent_versions?: (ApiAgentVersion)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

export type ApiRollbackToAgentVersionInputPublic = {
  /** Agent unique identifier */
  uuid?: string;
  /** Unique identifier */
  version_hash?: string;
};

/** An alternative way to provide auth information. for internal use only. */
export type ApiAuditHeader = {
  actor_id?: string;
  actor_ip?: string;
  actor_uuid?: string;
  context_urn?: string;
  origin_application?: string;
  user_id?: string;
  user_uuid?: string;
};

export type ApiRollbackToAgentVersionOutput = {
  audit_header?: ApiAuditHeader;
  /** Unique identifier */
  version_hash?: string;
};

/** ListAnthropicAPIKeysOutput is used to return the list of Anthropic API keys for a specific agent. */
export type ApiListAnthropicApiKeysOutput = {
  /** Api key infos */
  api_key_infos?: (ApiAnthropicApiKeyInfo)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** CreateAnthropicAPIKeyInputPublic is used to create a new Anthropic API key for a specific agent. */
export type ApiCreateAnthropicApiKeyInputPublic = {
  /** Anthropic API key */
  api_key?: string;
  /** Name of the key */
  name?: string;
};

/** CreateAnthropicAPIKeyOutput is used to return the newly created Anthropic API key. */
export type ApiCreateAnthropicApiKeyOutput = {
  api_key_info?: ApiAnthropicApiKeyInfo;
};

export type ApiGetAnthropicApiKeyOutput = {
  api_key_info?: ApiAnthropicApiKeyInfo;
};

/** UpdateAnthropicAPIKeyInputPublic is used to update an existing Anthropic API key for a specific agent. */
export type ApiUpdateAnthropicApiKeyInputPublic = {
  /** Anthropic API key */
  api_key?: string;
  /** API key ID */
  api_key_uuid?: string;
  /** Name of the key */
  name?: string;
};

/** UpdateAnthropicAPIKeyOutput is used to return the updated Anthropic API key. */
export type ApiUpdateAnthropicApiKeyOutput = {
  api_key_info?: ApiAnthropicApiKeyInfo;
};

/** DeleteAnthropicAPIKeyOutput is used to return the deleted Anthropic API key. */
export type ApiDeleteAnthropicApiKeyOutput = {
  api_key_info?: ApiAnthropicApiKeyInfo;
};

/** List of Agents that linked to a specific Anthropic Key */
export type ApiListAgentsByAnthropicKeyOutput = {
  agents?: (ApiAgent)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** Endpoint URLs for a dedicated inference deployment associated with a custom model. */
export type CustomModelActiveDeploymentEndpoints = {
  /** Private FQDN for the deployment */
  private_endpoint_fqdn?: string;
  /** Public FQDN for the deployment */
  public_endpoint_fqdn?: string;
};

/** An active dedicated inference deployment using this custom model. */
export type CustomModelActiveDeployment = {
  /** RFC 3339 timestamp indicating when the dedicated inference deployment was created */
  created_at?: string;
  endpoints?: CustomModelActiveDeploymentEndpoints;
  /** Unique identifier (UUID) of the dedicated inference deployment */
  id?: string;
  /** Human-readable name of the dedicated inference deployment */
  name?: string;
  /** Slug of the region where the dedicated inference deployment is running (e.g. "atl1") */
  region_slug?: string;
  /** Current lifecycle state of the dedicated inference deployment (e.g. "ACTIVE", "PROVISIONING") */
  state?: string;
  /** RFC 3339 timestamp indicating when the dedicated inference deployment was last updated */
  updated_at?: string;
};

/** Access level required for the model repository */
export type SourceRefAccessType = "ACCESS_TYPE_UNSPECIFIED" | "ACCESS_TYPE_PUBLIC" | "ACCESS_TYPE_PRIVATE" | "ACCESS_TYPE_GATED";

/** Reference to the original source of the model */
export type CustomModelSourceRef = {
  access_type?: SourceRefAccessType;
  /** Spaces bucket name */
  bucket?: string;
  /** Git commit SHA of the model version */
  commit_sha?: string;
  /** User-provided HuggingFace token for gated/private models (not persisted in source_ref) */
  hf_token?: string;
  /** Object prefix path in the bucket */
  prefix?: string;
  /** Spaces bucket region */
  region?: string;
  /** Huggingface repository identifier */
  repo_id?: string;
};

/** Source from which the model was imported */
export type CustomModelSourceType = "SOURCE_TYPE_UNSPECIFIED" | "SOURCE_TYPE_HUGGINGFACE" | "SOURCE_TYPE_SPACES_BUCKET" | "SOURCE_TYPE_SDK_UPLOAD" | "SOURCE_TYPE_FINE_TUNING";

/** Import and deployment status of the custom model */
export type ApiCustomModelStatus = "STATUS_UNSPECIFIED" | "STATUS_IMPORTING" | "STATUS_READY" | "STATUS_FAILED" | "STATUS_DELETED";

/** User-defined tags for organizing models */
export type CustomModelTags = {
  /** List of tag strings */
  tags?: (string)[];
};

/** Custom model - user-imported model from HuggingFace, Spaces, etc. */
export type ApiCustomModel = {
  /** List of active deployments using this model */
  active_deployments?: (CustomModelActiveDeployment)[];
  /** Model architecture type (free-form string from config.json) */
  architecture?: string;
  /** Raw config.json contents from the model repository */
  config_json?: { [key: string]: unknown };
  /** Maximum context length supported by the model */
  context_length?: number;
  /** Estimated monthly cost in dollars for hosting */
  cost_estimate_per_month?: number;
  /** Timestamp when the model was created */
  created_at?: string;
  /** Description of the custom model */
  description?: string;
  /** User-facing reason the most recent import failed; empty otherwise. */
  error_message?: string;
  /** Number of files in the model */
  file_count?: number;
  /** Input modalities supported (e.g., text, image) */
  input_modalities?: (string)[];
  /** License under which the model is distributed */
  license?: string;
  /** Name of the custom model */
  name?: string;
  /** Output modalities supported (e.g., text, image) */
  output_modalities?: (string)[];
  /** Number of parameters in the model */
  parameters?: string;
  source_ref?: CustomModelSourceRef;
  source_type?: CustomModelSourceType;
  status?: ApiCustomModelStatus;
  /** Region of the Spaces bucket where model files are stored */
  storage_region?: string;
  tags?: CustomModelTags;
  /** Team that owns the model */
  team_id?: string;
  /** Total size of model files in bytes */
  total_size_bytes?: string;
  /** Timestamp when the model was last updated */
  updated_at?: string;
  /** Unique identifier for the custom model */
  uuid?: string;
};

/** Response containing a list of custom models (public) */
export type ApiListCustomModelsOutputPublic = {
  links?: ApiLinks;
  /** Maximum number of custom models allowed for this team's tier */
  max_threshold?: number;
  meta?: ApiMeta;
  /** List of custom models */
  models?: (ApiCustomModel)[];
};

/** Request to import a custom model (public) */
export type ApiImportCustomModelInputPublic = {
  /** Whether the caller accepts storage of their HuggingFace token for gated model access */
  accept_hf_token_storage?: boolean;
  /** Whether the caller accepts the terms and conditions for importing this model */
  accept_terms_and_conditions?: boolean;
  /** Description of the model */
  description?: string;
  /** Name for the imported model */
  name?: string;
  /** Preferred GPU region for deployment */
  preferred_gpu_region?: string;
  source_ref?: CustomModelSourceRef;
  source_type?: CustomModelSourceType;
  tags?: CustomModelTags;
};

/** Import job tracking for a custom model */
export type ApiCustomModelImportJob = {
  /** Bytes imported so far */
  bytes_done?: string;
  /** Total bytes to import */
  bytes_total?: string;
  /** Timestamp when the import completed */
  completed_at?: string;
  /** Timestamp when the job was created */
  created_at?: string;
  /** Error message if import failed */
  error_message?: string;
  /** Step at which the error occurred */
  error_step?: string;
  /** Number of files imported so far */
  files_done?: number;
  /** Total number of files to import */
  files_total?: number;
  /** Timestamp when the import started */
  started_at?: string;
  /** Current status of the import job */
  status?: string;
  /** Unique identifier for the import job */
  uuid?: string;
};

/** Validation step result during model import */
export type ApiImportValidationStep = {
  /** Error message if validation failed */
  error?: string;
  /** Name of the validation step */
  name?: string;
  /** Whether the validation step passed */
  passed?: boolean;
};

/** Response containing imported model details (public) */
export type ApiImportCustomModelOutputPublic = {
  error?: string;
  import_job?: ApiCustomModelImportJob;
  model?: ApiCustomModel;
  /** Validation steps performed during import */
  validation_steps?: (ApiImportValidationStep)[];
};

/** Response containing a single custom model (public) */
export type ApiGetCustomModelOutputPublic = {
  model?: ApiCustomModel;
};

/** Status of delete operation */
export type ApiDeleteCustomModelStatus = "DELETE_CUSTOM_MODEL_STATUS_UNSPECIFIED" | "DELETE_CUSTOM_MODEL_STATUS_SUCCESS" | "DELETE_CUSTOM_MODEL_STATUS_FAIL";

/** Response containing delete operation status (public) */
export type ApiDeleteCustomModelOutputPublic = {
  /** Error message if deletion failed */
  error?: string;
  status?: ApiDeleteCustomModelStatus;
};

/** Request to update custom model metadata (public) */
export type ApiUpdateCustomModelMetadataInputPublic = {
  description?: string;
  /** Optional new input modalities for the model (replaces existing list when non-empty). Spaces-imported models only. */
  input_modalities?: (string)[];
  license?: string;
  name?: string;
  /** Optional new output modalities for the model (replaces existing list when non-empty). Spaces-imported models only. */
  output_modalities?: (string)[];
  parameters?: string;
  tags?: CustomModelTags;
  /** UUID of the custom model to update */
  uuid?: string;
};

/** Response containing the updated custom model (public) */
export type ApiUpdateCustomModelMetadataOutputPublic = {
  model?: ApiCustomModel;
};

/** Output for listing evaluation datasets. */
export type ApiListEvaluationDatasetsOutput = {
  /** The list of evaluation datasets. */
  evaluation_datasets?: (ApiEvaluationDataset)[];
};

/** File to upload as data source for knowledge base. */
export type ApiFileUploadDataSource = {
  /** The original file name */
  original_file_name?: string;
  /** The size of the file in bytes */
  size_in_bytes?: string;
  /** The object key the file was stored as */
  stored_object_key?: string;
};

/** Creates an evaluation dataset for an agent */
export type ApiCreateEvaluationDatasetInputPublic = {
  dataset_type?: ApiEvaluationDatasetType;
  file_upload_dataset?: ApiFileUploadDataSource;
  /** The name of the agent evaluation dataset. */
  name?: string;
};

/** Output for creating an agent evaluation dataset */
export type ApiCreateEvaluationDatasetOutput = {
  /** Evaluation dataset uuid. */
  evaluation_dataset_uuid?: string;
};

/** A single file’s metadata in the request. */
export type ApiPresignedUrlFile = {
  /** Local filename */
  file_name?: string;
  /** The size of the file in bytes. */
  file_size?: string;
};

/** Request for pre-signed URL's to upload files for KB Data Sources */
export type ApiCreateDataSourceFileUploadPresignedUrlsInputPublic = {
  /** A list of files to generate presigned URLs for. */
  files?: (ApiPresignedUrlFile)[];
};

/** Detailed info about each presigned URL returned to the client. */
export type ApiFilePresignedUrlResponse = {
  /** The time the url expires at. */
  expires_at?: string;
  /** The unique object key to store the file as. */
  object_key?: string;
  /** The original file name. */
  original_file_name?: string;
  /** The actual presigned URL the client can use to upload the file directly. */
  presigned_url?: string;
};

/** Response with pre-signed urls to upload files. */
export type ApiCreateDataSourceFileUploadPresignedUrlsOutput = {
  /** The ID generated for the request for Presigned URLs. */
  request_id?: string;
  /** A list of generated presigned URLs and object keys, one per file. */
  uploads?: (ApiFilePresignedUrlResponse)[];
};

/** Response for a delete evaluation dataset request. */
export type ApiDeleteEvaluationDatasetOutput = { [key: string]: unknown };

/** Response containing a presigned download URL for an evaluation dataset. */
export type ApiGetEvaluationDatasetDownloadUrlOutput = {
  /** The presigned URL to download the dataset file. */
  download_url?: string;
  /** The time the URL expires at. */
  expires_at?: string;
};

export type ApiListEvaluationMetricsOutput = {
  metrics?: (ApiEvaluationMetric)[];
};

export type ApiCreateCustomEvaluationMetricInputPublic = {
  config?: ApiCustomEvaluationMetricConfig;
  description?: string;
  metric_name?: string;
};

export type ApiCreateCustomEvaluationMetricOutput = {
  metric?: ApiEvaluationMetric;
};

export type ApiUpdateCustomEvaluationMetricInputPublic = {
  config?: ApiCustomEvaluationMetricConfig;
  description?: string;
  metric_name?: string;
  metric_uuid?: string;
};

export type ApiUpdateCustomEvaluationMetricOutput = {
  metric?: ApiEvaluationMetric;
};

export type ApiDeleteCustomEvaluationMetricOutput = { [key: string]: unknown };

/** Run an evaluation test case. */
export type ApiRunEvaluationTestCaseInputPublic = {
  /** Agent deployment names to run the test case against (ADK agent workspaces). */
  agent_deployment_names?: (string)[];
  /** Agent UUIDs to run the test case against (legacy agents). */
  agent_uuids?: (string)[];
  /** The name of the run. */
  run_name?: string;
  /** Test-case UUID to run */
  test_case_uuid?: string;
};

export type ApiRunEvaluationTestCaseOutput = {
  evaluation_run_uuids?: (string)[];
};

/** Outcome of scoring a single metric for one prompt or span. */
export type ApiEvaluationMetricResultStatus = "EVALUATION_METRIC_RESULT_STATUS_UNSPECIFIED" | "EVALUATION_METRIC_RESULT_STATUS_COMPLETED" | "EVALUATION_METRIC_RESULT_STATUS_FAILED" | "EVALUATION_METRIC_RESULT_STATUS_SKIPPED";

export type ApiEvaluationMetricResult = {
  /** Error description if the metric could not be calculated. */
  error_description?: string;
  /** Metric name */
  metric_name?: string;
  /** Metric UUID (built-in or custom); stable key for results UI and aggregation. */
  metric_uuid?: string;
  metric_value_type?: ApiEvaluationMetricValueType;
  /** The value of the metric as a number. */
  number_value?: number;
  /** Reasoning of the metric result. */
  reasoning?: string;
  status?: ApiEvaluationMetricResultStatus;
  /** The value of the metric as a string. */
  string_value?: string;
};

/** Evaluation Run Statuses */
export type ApiEvaluationRunStatus = "EVALUATION_RUN_STATUS_UNSPECIFIED" | "EVALUATION_RUN_QUEUED" | "EVALUATION_RUN_RUNNING_DATASET" | "EVALUATION_RUN_EVALUATING_RESULTS" | "EVALUATION_RUN_CANCELLING" | "EVALUATION_RUN_CANCELLED" | "EVALUATION_RUN_SUCCESSFUL" | "EVALUATION_RUN_PARTIALLY_SUCCESSFUL" | "EVALUATION_RUN_FAILED";

export type ApiEvaluationRun = {
  /** Whether agent is deleted */
  agent_deleted?: boolean;
  /** The agent deployment name */
  agent_deployment_name?: string;
  /** Agent name */
  agent_name?: string;
  /** Agent UUID. */
  agent_uuid?: string;
  /** Version hash */
  agent_version_hash?: string;
  /** Agent workspace uuid */
  agent_workspace_uuid?: string;
  created_by_user_email?: string;
  created_by_user_id?: string;
  /** The error description */
  error_description?: string;
  /** Evaluation run UUID. */
  evaluation_run_uuid?: string;
  /** Evaluation test case workspace uuid */
  evaluation_test_case_workspace_uuid?: string;
  /** Run end time. */
  finished_at?: string;
  /** The pass status of the evaluation run based on the star metric. */
  pass_status?: boolean;
  /** Run queued time. */
  queued_at?: string;
  run_level_metric_results?: (ApiEvaluationMetricResult)[];
  /** Run name. */
  run_name?: string;
  star_metric_result?: ApiEvaluationMetricResult;
  /** Run start time. */
  started_at?: string;
  status?: ApiEvaluationRunStatus;
  /** Test case description. */
  test_case_description?: string;
  /** Test case name. */
  test_case_name?: string;
  /** Test-case UUID. */
  test_case_uuid?: string;
  /** Test-case-version. */
  test_case_version?: number;
};

export type ApiGetEvaluationRunOutput = {
  evaluation_run?: ApiEvaluationRun;
};

export type ApiPromptChunk = {
  /** The usage percentage of the chunk. */
  chunk_usage_pct?: number;
  /** Indicates if the chunk was used in the prompt. */
  chunk_used?: boolean;
  /** The index uuid (Knowledge Base) of the chunk. */
  index_uuid?: string;
  /** The source name for the chunk, e.g., the file name or document title. */
  source_name?: string;
  /** Text content of the chunk. */
  text?: string;
};

/** Agent span */
export type ApiAgentType = "AGENT_TYPE_UNSPECIFIED" | "AGENT_TYPE_DEFAULT" | "AGENT_TYPE_PLANNER" | "AGENT_TYPE_REACT" | "AGENT_TYPE_REFLECTION" | "AGENT_TYPE_ROUTER" | "AGENT_TYPE_CLASSIFIER" | "AGENT_TYPE_SUPERVISOR" | "AGENT_TYPE_JUDGE";

/** Common optional fields shared by all span types */
export type ApiSpanCommon = {
  created_at?: string;
  duration_ns?: string;
  /** Arbitrary structured metadata */
  metadata?: { [key: string]: string | undefined };
  status_code?: number;
  /** Free-form tags for filtering/grouping */
  tags?: (string)[];
};

/** Represents a span within a trace (e.g., LLM call, tool call, etc.) */
export type ApiTraceSpan = {
  agent?: ApiAgentSpan;
  /** When the span was created */
  created_at?: string;
  /** Input data for the span (flexible structure - can be messages array, string, etc.) */
  input?: { [key: string]: unknown };
  llm?: ApiLlmSpan;
  /** Name/identifier for the span */
  name?: string;
  /** Output data from the span (flexible structure - can be message, string, etc.) */
  output?: { [key: string]: unknown };
  retriever?: ApiRetrieverSpan;
  tool?: ApiToolSpan;
  type?: ApiTraceSpanType;
  workflow?: ApiWorkflowSpan;
};

export type ApiAgentSpan = {
  agent_type?: ApiAgentType;
  common?: ApiSpanCommon;
  redacted_input?: string;
  redacted_output?: string;
  /** Child spans - must contain between 1 and 999 spans Allowed types: llm, tool, retriever */
  spans?: (ApiTraceSpan)[];
};

/** LLM span */
export type ApiLlmSpan = {
  common?: ApiSpanCommon;
  model?: string;
  num_input_tokens?: number;
  num_output_tokens?: number;
  temperature?: number;
  time_to_first_token_ns?: string;
  /** Tool definitions passed to the model */
  tools?: ({ [key: string]: unknown })[];
  total_tokens?: number;
};

/** Retriever span */
export type ApiRetrieverSpan = {
  common?: ApiSpanCommon;
};

/** Tool span */
export type ApiToolSpan = {
  common?: ApiSpanCommon;
  tool_call_id?: string;
};

/** Types of spans in a trace */
export type ApiTraceSpanType = "TRACE_SPAN_TYPE_UNKNOWN" | "TRACE_SPAN_TYPE_LLM" | "TRACE_SPAN_TYPE_RETRIEVER" | "TRACE_SPAN_TYPE_TOOL" | "TRACE_SPAN_TYPE_AGENT" | "TRACE_SPAN_TYPE_WORKFLOW";

/** Workflow span - can contain child spans (agent, llm, tool, retriever) */
export type ApiWorkflowSpan = {
  common?: ApiSpanCommon;
  /** Child spans - must contain between 1 and 999 spans Allowed types: agent, llm, tool, retriever (not workflow) */
  spans?: (ApiTraceSpan)[];
};

/** Represents a span within an evaluatioin trace (e.g., LLM call, tool call, etc.) */
export type ApiEvaluationTraceSpan = {
  /** When the span was created */
  created_at?: string;
  /** Input data for the span (flexible structure - can be messages array, string, etc.) */
  input?: { [key: string]: unknown };
  /** Name/identifier for the span */
  name?: string;
  /** Output data from the span (flexible structure - can be message, string, etc.) */
  output?: { [key: string]: unknown };
  /** Any retriever span chunks that were included as part of the span. */
  retriever_chunks?: (ApiPromptChunk)[];
  /** The span-level metric results. */
  span_level_metric_results?: (ApiEvaluationMetricResult)[];
  /** Child spans - must contain between 1 and 999 spans Allowed types: agent, llm, tool, retriever (not workflow) */
  spans?: (ApiTraceSpan)[];
  type?: ApiTraceSpanType;
};

export type ApiPrompt = {
  /** The evaluated trace spans. */
  evaluation_trace_spans?: (ApiEvaluationTraceSpan)[];
  /** The ground truth for the prompt. */
  ground_truth?: string;
  input?: string;
  /** The number of input tokens used in the prompt. */
  input_tokens?: string;
  output?: string;
  /** The number of output tokens used in the prompt. */
  output_tokens?: string;
  /** The list of prompt chunks. */
  prompt_chunks?: (ApiPromptChunk)[];
  /** Prompt ID */
  prompt_id?: number;
  /** The metric results for the prompt. */
  prompt_level_metric_results?: (ApiEvaluationMetricResult)[];
  /** The trace id for the prompt. */
  trace_id?: string;
};

/** Gets the full results of an evaluation run with all prompts. */
export type ApiGetEvaluationRunResultsOutput = {
  evaluation_run?: ApiEvaluationRun;
  links?: ApiLinks;
  meta?: ApiMeta;
  /** The prompt level results. */
  prompts?: (ApiPrompt)[];
};

export type ApiGetEvaluationRunPromptResultsOutput = {
  prompt?: ApiPrompt;
};

export type ApiListEvaluationTestCasesOutput = {
  /** Alternative way of authentication for internal usage only - should not be exposed to public api */
  evaluation_test_cases?: (ApiEvaluationTestCase)[];
};

export type ApiCreateEvaluationTestCaseInputPublic = {
  agent_workspace_name?: string;
  /** Dataset against which the test‑case is executed. */
  dataset_uuid?: string;
  /** Description of the test case. */
  description?: string;
  /** Full metric list to use for evaluation test case. */
  metrics?: (string)[];
  /** Name of the test case. */
  name?: string;
  star_metric?: ApiStarMetric;
  /** The workspace uuid. */
  workspace_uuid?: string;
};

export type ApiCreateEvaluationTestCaseOutput = {
  /** Test‑case UUID. */
  test_case_uuid?: string;
};

export type ApiListEvaluationRunsByTestCaseOutput = {
  /** List of evaluation runs. */
  evaluation_runs?: (ApiEvaluationRun)[];
};

export type ApiGetEvaluationTestCaseOutput = {
  evaluation_test_case?: ApiEvaluationTestCase;
};

export type ApiEvaluationTestCaseMetricList = {
  metric_uuids?: (string)[];
};

export type ApiUpdateEvaluationTestCaseInputPublic = {
  /** Dataset against which the test‑case is executed. */
  dataset_uuid?: string;
  /** Description of the test case. */
  description?: string;
  metrics?: ApiEvaluationTestCaseMetricList;
  /** Name of the test case. */
  name?: string;
  star_metric?: ApiStarMetric;
  /** Test-case UUID to update */
  test_case_uuid?: string;
};

export type ApiUpdateEvaluationTestCaseOutput = {
  test_case_uuid?: string;
  /** The new verson of the test case. */
  version?: number;
};

/** Indexing jobs */
export type ApiListKnowledgeBaseIndexingJobsOutput = {
  /** The indexing jobs */
  jobs?: (ApiIndexingJob)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** StartKnowledgeBaseIndexingJobInputPublic description */
export type ApiStartKnowledgeBaseIndexingJobInputPublic = {
  /** List of data source ids to index, if none are provided, all data sources will be indexed */
  data_source_uuids?: (string)[];
  /** Knowledge base id */
  knowledge_base_uuid?: string;
};

/** StartKnowledgeBaseIndexingJobOutput description */
export type ApiStartKnowledgeBaseIndexingJobOutput = {
  job?: ApiIndexingJob;
};

export type ApiListIndexingJobDataSourcesOutput = {
  indexed_data_sources?: (ApiIndexedDataSource)[];
};

export type ApiGetIndexingJobDetailsSignedUrlOutput = {
  /** The signed url for downloading the indexing job details */
  signed_url?: string;
};

/** GetKnowledgeBaseIndexingJobOutput description */
export type ApiGetKnowledgeBaseIndexingJobOutput = {
  job?: ApiIndexingJob;
};

/** CancelKnowledgeBaseIndexingJobInputPublic description */
export type ApiCancelKnowledgeBaseIndexingJobInputPublic = {
  /** A unique identifier for an indexing job. */
  uuid?: string;
};

/** CancelKnowledgeBaseIndexingJobOutput description */
export type ApiCancelKnowledgeBaseIndexingJobOutput = {
  job?: ApiIndexingJob;
};

/** List of knowledge bases */
export type ApiListKnowledgeBasesOutput = {
  /** The knowledge bases */
  knowledge_bases?: (ApiKnowledgeBase)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** AWS S3 Data Source */
export type ApiAwsDataSource = {
  /** Spaces bucket name */
  bucket_name?: string;
  item_path?: string;
  /** The AWS Key ID */
  key_id?: string;
  /** Region of bucket */
  region?: string;
  /** The AWS Secret Key */
  secret_key?: string;
};

export type ApiChunkingAlgorithm = "CHUNKING_ALGORITHM_UNKNOWN" | "CHUNKING_ALGORITHM_SECTION_BASED" | "CHUNKING_ALGORITHM_HIERARCHICAL" | "CHUNKING_ALGORITHM_SEMANTIC" | "CHUNKING_ALGORITHM_FIXED_LENGTH";

export type ApiChunkingOptions = {
  child_chunk_size?: number;
  /** Common options */
  max_chunk_size?: number;
  /** Hierarchical options */
  parent_chunk_size?: number;
  /** Semantic options */
  semantic_threshold?: number;
};

/** Dropbox Data Source */
export type ApiDropboxDataSource = {
  folder?: string;
  /** Refresh token. you can obrain a refresh token by following the oauth2 flow. see /v2/gen-ai/oauth2/dropbox/tokens for reference. */
  refresh_token?: string;
};

/** Google Drive Data Source */
export type ApiGoogleDriveDataSource = {
  folder_id?: string;
  /** Refresh token. you can obrain a refresh token by following the oauth2 flow. see /v2/gen-ai/oauth2/google/tokens for reference. */
  refresh_token?: string;
};

/** Spaces Bucket Data Source */
export type ApiSpacesDataSource = {
  /** Spaces bucket name */
  bucket_name?: string;
  item_path?: string;
  /** Region of bucket */
  region?: string;
};

/** Options for specifying how URLs found on pages should be handled.   - UNKNOWN: Default unknown value  - SCOPED: Only include the base URL.  - PATH: Crawl the base URL and linked pages within the URL path.  - DOMAIN: Crawl the base URL and linked pages within the same domain.  - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.  - SITEMAP: Crawl URLs discovered in the sitemap. */
export type ApiCrawlingOption = "UNKNOWN" | "SCOPED" | "PATH" | "DOMAIN" | "SUBDOMAINS" | "SITEMAP";

/** WebCrawlerDataSource */
export type ApiWebCrawlerDataSource = {
  /** The base url to crawl. */
  base_url?: string;
  crawling_option?: ApiCrawlingOption;
  /** Whether to ingest and index media (images, etc.) on web pages. */
  embed_media?: boolean;
  /** Declaring which tags to exclude in web pages while webcrawling */
  exclude_tags?: (string)[];
};

export type ApiKbDataSource = {
  aws_data_source?: ApiAwsDataSource;
  /** Deprecated, moved to data_source_details */
  bucket_name?: string;
  /** Deprecated, moved to data_source_details */
  bucket_region?: string;
  chunking_algorithm?: ApiChunkingAlgorithm;
  chunking_options?: ApiChunkingOptions;
  dropbox_data_source?: ApiDropboxDataSource;
  file_upload_data_source?: ApiFileUploadDataSource;
  google_drive_data_source?: ApiGoogleDriveDataSource;
  item_path?: string;
  spaces_data_source?: ApiSpacesDataSource;
  web_crawler_data_source?: ApiWebCrawlerDataSource;
};

export type ApiOpenSearchPlanSize = "OPEN_SEARCH_PLAN_SIZE_UNSPECIFIED" | "OPEN_SEARCH_PLAN_SIZE_SMALL" | "OPEN_SEARCH_PLAN_SIZE_MEDIUM" | "OPEN_SEARCH_PLAN_SIZE_LARGE" | "OPEN_SEARCH_PLAN_SIZE_EXTRA_LARGE";

/** Data to create a new knowledge base. */
export type ApiCreateKnowledgeBaseInputPublic = {
  /** Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional. If not provided, we create a new database for the knowledge base in the same region as the knowledge base. */
  database_id?: string;
  /** Optional data sources to attach at creation. Omit or use an empty list to create the knowledge base without sources, then add sources (with chunking strategy and sizes) using [Add a Data Source to a Knowledge Base](#operation/create_knowledge_base_data_source). When provided, see [Organize Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-data-sources) for best practices. */
  datasources?: (ApiKbDataSource)[];
  /** Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models). */
  embedding_model_uuid?: string;
  /** Name of the knowledge base. */
  name?: string;
  /** Identifier of the DigitalOcean project this knowledge base will belong to. */
  project_id?: string;
  /** The datacenter region to deploy the knowledge base in. */
  region?: string;
  reranking_config?: ApiRerankingConfiguration;
  size?: ApiOpenSearchPlanSize;
  /** Tags to organize your knowledge base. */
  tags?: (string)[];
  /** The VPC to deploy the knowledge base database in */
  vpc_uuid?: string;
};

/** Information about a newly created knowledge base */
export type ApiCreateKnowledgeBaseOutput = {
  knowledge_base?: ApiKnowledgeBase;
};

/** AWS S3 Data Source for Display */
export type ApiAwsDataSourceDisplay = {
  /** Spaces bucket name */
  bucket_name?: string;
  item_path?: string;
  /** Region of bucket */
  region?: string;
};

/** Dropbox Data Source for Display */
export type ApiDropboxDataSourceDisplay = {
  folder?: string;
};

/** Google Drive Data Source for Display */
export type ApiGoogleDriveDataSourceDisplay = {
  folder_id?: string;
  /** Name of the selected folder if available */
  folder_name?: string;
};

/** Data Source configuration for Knowledge Bases */
export type ApiKnowledgeBaseDataSource = {
  aws_data_source?: ApiAwsDataSourceDisplay;
  /** Name of storage bucket - Deprecated, moved to data_source_details */
  bucket_name?: string;
  chunking_algorithm?: ApiChunkingAlgorithm;
  chunking_options?: ApiChunkingOptions;
  /** Creation date / time */
  created_at?: string;
  dropbox_data_source?: ApiDropboxDataSourceDisplay;
  file_upload_data_source?: ApiFileUploadDataSource;
  google_drive_data_source?: ApiGoogleDriveDataSourceDisplay;
  /** Path of folder or object in bucket - Deprecated, moved to data_source_details */
  item_path?: string;
  last_datasource_indexing_job?: ApiIndexedDataSource;
  /** Region code - Deprecated, moved to data_source_details */
  region?: string;
  spaces_data_source?: ApiSpacesDataSource;
  /** Last modified */
  updated_at?: string;
  /** Unique id of knowledge base */
  uuid?: string;
  web_crawler_data_source?: ApiWebCrawlerDataSource;
};

/** A list of knowledge base data sources */
export type ApiListKnowledgeBaseDataSourcesOutput = {
  /** The data sources */
  knowledge_base_data_sources?: (ApiKnowledgeBaseDataSource)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** Data to create a knowledge base data source */
export type ApiCreateKnowledgeBaseDataSourceInputPublic = {
  aws_data_source?: ApiAwsDataSource;
  chunking_algorithm?: ApiChunkingAlgorithm;
  chunking_options?: ApiChunkingOptions;
  /** Knowledge base id */
  knowledge_base_uuid?: string;
  spaces_data_source?: ApiSpacesDataSource;
  web_crawler_data_source?: ApiWebCrawlerDataSource;
};

/** Information about a newly created knowldege base data source */
export type ApiCreateKnowledgeBaseDataSourceOutput = {
  knowledge_base_data_source?: ApiKnowledgeBaseDataSource;
};

/** Update a data source of a knowledge base with change in chunking algorithm/options */
export type ApiUpdateKnowledgeBaseDataSourceInputPublic = {
  chunking_algorithm?: ApiChunkingAlgorithm;
  chunking_options?: ApiChunkingOptions;
  /** Data Source ID (Path Parameter) */
  data_source_uuid?: string;
  /** Knowledge Base ID (Path Parameter) */
  knowledge_base_uuid?: string;
};

/** Update a data source of a knowledge base with change in chunking algorithm/options */
export type ApiUpdateKnowledgeBaseDataSourceOutput = {
  knowledge_base_data_source?: ApiKnowledgeBaseDataSource;
};

/** Information about a newly deleted knowledge base data source */
export type ApiDeleteKnowledgeBaseDataSourceOutput = {
  /** Data source id */
  data_source_uuid?: string;
  /** Knowledge base id */
  knowledge_base_uuid?: string;
};

export type DbaasClusterStatus = "CREATING" | "ONLINE" | "POWEROFF" | "REBUILDING" | "REBALANCING" | "DECOMMISSIONED" | "FORKING" | "MIGRATING" | "RESIZING" | "RESTORING" | "POWERING_ON" | "UNHEALTHY" | "UPGRADING";

/** The knowledge base */
export type ApiGetKnowledgeBaseOutput = {
  database_status?: DbaasClusterStatus;
  knowledge_base?: ApiKnowledgeBase;
};

/** Information about updating a knowledge base */
export type ApiUpdateKnowledgeBaseInputPublic = {
  /** The id of the DigitalOcean database this knowledge base will use, optional. */
  database_id?: string;
  /** Knowledge base name */
  name?: string;
  /** The id of the DigitalOcean project this knowledge base will belong to */
  project_id?: string;
  reranking_config?: ApiRerankingConfiguration;
  /** Tags to organize your knowledge base. */
  tags?: (string)[];
  /** Knowledge base id */
  uuid?: string;
};

/** Information about an updated knowledge base */
export type ApiUpdateKnowledgeBaseOutput = {
  knowledge_base?: ApiKnowledgeBase;
};

/** Information about a deleted knowledge base */
export type ApiDeleteKnowledgeBaseOutput = {
  /** The id of the deleted knowledge base */
  uuid?: string;
};

/** Public request for presigned upload URLs for model evaluation dataset files. */
export type ApiCreateModelEvalDatasetUploadPresignedUrlsInputPublic = {
  /** A list of files to generate presigned URLs for. */
  files?: (ApiPresignedUrlFile)[];
};

export type ApiListModelEvaluationMetricsOutput = {
  /** List of model evaluation metrics */
  metrics?: (ApiEvaluationMetric)[];
};

/** Inference configuration for the candidate model during evaluation. */
export type ApiCandidateInferenceConfig = {
  max_tokens?: number;
  stop_token?: string;
  system_prompt?: string;
  temperature?: number;
};

/** Whether inference runs against the serverless platform, a dedicated deployment, or a model router. */
export type ApiCandidateModelSource = "CANDIDATE_MODEL_SOURCE_SERVERLESS" | "CANDIDATE_MODEL_SOURCE_DEDICATED" | "CANDIDATE_MODEL_SOURCE_ROUTER";

/** Sections of an inline evaluation config that can be persisted as a reusable preset. Each value names a self-contained group of fields; selecting a section saves exactly the fields it owns and leaves the rest of the preset empty so it can be merged with inline values on a future run.   - PRESET_SAVE_SECTION_CANDIDATE: Candidate model identity (`candidate_model_uuid`, `candidate_model_source`, `candidate_model_name`) and the non-prompt inference params (`max_tokens`, `temperature`, `stop_token`).  - PRESET_SAVE_SECTION_METRICS: The selected `metric_uuids` and the optional `star_metric`.  - PRESET_SAVE_SECTION_JUDGE: The `judge_model_uuid`.  - PRESET_SAVE_SECTION_DATASET: The `dataset_uuid`.  - PRESET_SAVE_SECTION_SYSTEM_PROMPT: The candidate's `system_prompt` only. Independent of CANDIDATE so the model + params and the prompt can be saved/replayed separately. */
export type ApiPresetSaveSection = "PRESET_SAVE_SECTION_UNSPECIFIED" | "PRESET_SAVE_SECTION_CANDIDATE" | "PRESET_SAVE_SECTION_METRICS" | "PRESET_SAVE_SECTION_JUDGE" | "PRESET_SAVE_SECTION_DATASET" | "PRESET_SAVE_SECTION_SYSTEM_PROMPT";

/** Model Evaluation Preset - a saved, reusable configuration for model evaluation runs. Each section (dataset, judge, metrics, candidate, system prompt) is independent and may be empty; sections the preset omits must be supplied inline on the run that references it. Use `saved_sections` to tell "section saved with empty value" apart from "section not saved at all" — each section's scalar fields are left empty when the section was not saved. */
export type ApiModelEvaluationPreset = {
  candidate_inference_config?: ApiCandidateInferenceConfig;
  /** Model slug used to call the candidate model API. Empty when the CANDIDATE section was not saved. */
  candidate_model_name?: string;
  candidate_model_source?: ApiCandidateModelSource;
  /** UUID of the candidate model stored on this preset. Empty when the CANDIDATE section was not saved. For DEDICATED candidates this is the dedicated inference deployment UUID. */
  candidate_model_uuid?: string;
  /** System prompt / instructions to send to the candidate model. Empty when the SYSTEM_PROMPT section was not saved (check `saved_sections`). */
  candidate_system_prompt?: string;
  /** Timestamp when the preset was created. */
  created_at?: string;
  /** Display name of the dataset stored on this preset. Empty when the DATASET section was not saved or the dataset no longer exists. */
  dataset_name?: string;
  /** UUID of the dataset stored on this preset. Empty when the DATASET section was not saved (check `saved_sections`). */
  dataset_uuid?: string;
  /** UUID of the evaluation preset. */
  eval_preset_uuid?: string;
  /** Display name of the judge model stored on this preset. Empty when the JUDGE section was not saved or the model no longer exists. */
  judge_model_name?: string;
  /** UUID of the judge model stored on this preset. Empty when the JUDGE section was not saved (check `saved_sections`). */
  judge_model_uuid?: string;
  /** Metrics selected for this preset. Empty when the METRICS section was not saved. */
  metrics?: (ApiEvaluationMetric)[];
  /** Name of the evaluation preset. */
  name?: string;
  /** Sections of the inline evaluation config that were persisted when this preset was created. Use this to tell "section was saved with an empty value" apart from "section was not saved" — scalar fields like `dataset_uuid` or `candidate_system_prompt` are always emitted as the empty string when the section was not saved. */
  saved_sections?: (ApiPresetSaveSection)[];
  star_metric?: ApiStarMetric;
};

export type ApiListModelEvaluationPresetsOutput = {
  /** List of explicitly saved evaluation presets (reusable configs). */
  presets?: (ApiModelEvaluationPreset)[];
};

export type ApiGetModelEvaluationPresetOutput = {
  preset?: ApiModelEvaluationPreset;
};

export type ApiDeleteModelEvaluationPresetOutput = { [key: string]: unknown };

/** Model Evaluation Run Statuses */
export type ApiModelEvaluationRunStatus = "MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED" | "MODEL_EVALUATION_RUN_QUEUED" | "MODEL_EVALUATION_RUN_RUNNING_DATASET" | "MODEL_EVALUATION_RUN_EVALUATING_RESULTS" | "MODEL_EVALUATION_RUN_CANCELLING" | "MODEL_EVALUATION_RUN_CANCELLED" | "MODEL_EVALUATION_RUN_SUCCESSFUL" | "MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL" | "MODEL_EVALUATION_RUN_FAILED";

/** Per-phase progress for a model evaluation run. The candidate phase invokes the candidate model once per dataset row; the judge phase scores each candidate-success row with the configured metrics. Counts grow as the run advances; compare against total_rows to render a progress bar. */
export type ApiModelEvaluationRunProgress = {
  /** Dataset rows whose candidate model call has completed (success or failure). */
  candidate_rows_evaluated?: number;
  /** Candidate-success rows the judge has finished (scored or skipped). Caps at the number of candidate successes, which may be below total_rows. */
  judge_rows_evaluated?: number;
  /** Total dataset rows for the run, sourced from the evaluation dataset. */
  total_rows?: number;
};

/** Model Evaluation Run Summary - lightweight view used in run history list. */
export type ApiModelEvaluationRunSummary = {
  /** Name of the candidate model being evaluated. */
  candidate_model_name?: string;
  candidate_model_source?: ApiCandidateModelSource;
  /** UUID of the candidate model being evaluated. */
  candidate_model_uuid?: string;
  /** Timestamp when the run was created. */
  created_at?: string;
  /** Name of the dataset used for evaluation. */
  dataset_name?: string;
  /** UUID of the dataset used for evaluation. */
  dataset_uuid?: string;
  /** UUID of the evaluation run. */
  eval_run_uuid?: string;
  judge_model_name?: string;
  /** Judge model used to score responses. */
  judge_model_uuid?: string;
  /** Name of the evaluation run. */
  name?: string;
  progress?: ApiModelEvaluationRunProgress;
  status?: ApiModelEvaluationRunStatus;
};

export type ApiListModelEvaluationRunsOutput = {
  /** Full set of candidate model source types the FE can offer in the candidate-type filter UI. */
  available_candidate_types?: (ApiCandidateModelSource)[];
  /** Full set of statuses the FE can offer in the status filter UI. Returned on every list call so clients never need to hardcode the enum values. */
  available_statuses?: (ApiModelEvaluationRunStatus)[];
  links?: ApiLinks;
  meta?: ApiMeta;
  /** Summary view of evaluation runs for the run history list. */
  runs?: (ApiModelEvaluationRunSummary)[];
};

export type ApiCreateModelEvaluationRunInputPublic = {
  candidate_inference_config?: ApiCandidateInferenceConfig;
  /** Model slug used to call the candidate model API. For dedicated inference, this is the model slug from the deployment. For serverless, this should match the model's internal name. */
  candidate_model_name?: string;
  candidate_model_source?: ApiCandidateModelSource;
  /** UUID of the candidate model to evaluate. */
  candidate_model_uuid?: string;
  /** UUID of the dataset to use for evaluation. */
  dataset_uuid?: string;
  eval_preset_uuid?: string;
  /** UUID of the judge model used to score responses. */
  judge_model_uuid?: string;
  /** UUIDs of metrics to evaluate (selected from ListModelEvaluationMetrics). */
  metric_uuids?: (string)[];
  name?: string;
  preset_name?: string;
  /** Which sections of this run's resolved configuration to persist as a reusable preset. Each selected section saves only its own fields; the remaining sections stay empty on the preset and must be supplied inline on future runs that reference it. Empty means do not save a preset (unless the deprecated `save_as_preset` boolean is true, in which case all sections are saved). Ignored when `eval_preset_uuid` is set. Use `preset_name` to label the saved preset. */
  preset_save_sections?: (ApiPresetSaveSection)[];
  /** Deprecated: use `preset_save_sections`. When `true` and `preset_save_sections` is empty, all five sections of the resolved configuration are saved as a reusable preset (legacy behavior). Ignored when `eval_preset_uuid` is set. */
  save_as_preset?: boolean;
  /** Source of the run creation (api, sdk, cli). */
  source?: string;
  star_metric?: ApiStarMetric;
};

export type ApiCreateModelEvaluationRunOutput = {
  /** UUID of the created evaluation run. */
  eval_run_uuid?: string;
};

/** Result for a single prompt in a model evaluation run. */
export type ApiModelEvaluationResult = {
  candidate_model_name?: string;
  candidate_model_uuid?: string;
  candidate_routed_task?: string;
  ground_truth?: string;
  /** The input query sent to the candidate model. */
  input?: string;
  /** Per-metric scores and judge reasoning for this prompt. */
  metric_results?: (ApiEvaluationMetricResult)[];
  /** The response from the candidate model. */
  output?: string;
};

/** Per-metric aggregated pass/fail statistics across all prompts. */
export type ApiMetricResultSummary = {
  description?: string;
  /** Rows where the metric failed to score or completed below the threshold. */
  fail_count?: number;
  fail_percent?: number;
  metric_name?: string;
  metric_uuid?: string;
  /** Rows where the metric completed and passed the configured threshold. */
  pass_count?: number;
  pass_percent?: number;
  /** Percentage of rows that were skipped for this metric, computed as skipped_count divided by the total rows the metric saw (pass_count + fail_count + skipped_count). */
  skip_percent?: number;
  /** Rows where the metric was not evaluated for this prompt. */
  skipped_count?: number;
};

/** Latency metrics for candidate model invocations (in milliseconds). */
export type ApiLatencyMetrics = {
  /** Average end-to-end latency across all invocations. */
  avg_e2e_latency_ms?: number;
  /** Maximum end-to-end latency observed. */
  max_e2e_latency_ms?: number;
  /** Minimum end-to-end latency observed. */
  min_e2e_latency_ms?: number;
  /** P50 (median) latency. */
  p50_latency_ms?: number;
  /** P90 latency. */
  p90_latency_ms?: number;
  /** P95 latency. */
  p95_latency_ms?: number;
};

export type ApiTokenUsage = {
  total_candidate_input_tokens?: string;
  total_candidate_output_tokens?: string;
  total_candidate_tokens?: string;
  total_judge_input_tokens?: string;
  total_judge_output_tokens?: string;
  total_judge_tokens?: string;
};

/** All performance metrics are for the candidate model unless noted otherwise. */
export type ApiPerformanceMetrics = {
  candidate_latency?: ApiLatencyMetrics;
  token_usage?: ApiTokenUsage;
};

/** Aggregated evaluation results for a single underlying model in a router evaluation run. */
export type ApiPerModelResultSummary = {
  /** Pass/fail rate for each metric, computed over only the prompts routed to this model. */
  metric_summaries?: (ApiMetricResultSummary)[];
  /** The underlying model these results are for, such as `Llama 3.3 Instruct (70B)`. */
  model_name?: string;
  performance_metrics?: ApiPerformanceMetrics;
  /** Number of prompts in the run that were routed to this model. */
  prompt_count?: number;
};

/** Per-model breakdown of an evaluation run. Set on router evaluations to show how each underlying model performed across the prompts that were routed to it. */
export type ApiPerModelResultSummaries = {
  /** One entry per underlying model that received at least one prompt during the evaluation run. */
  summaries?: (ApiPerModelResultSummary)[];
};

/** Aggregated evaluation results for a single routing task category in a router evaluation run. */
export type ApiPerTaskResultSummary = {
  /** Pass/fail rate for each metric, computed over only the prompts in this task category. */
  metric_summaries?: (ApiMetricResultSummary)[];
  performance_metrics?: ApiPerformanceMetrics;
  /** Number of prompts in the run that were classified into this task category. */
  prompt_count?: number;
  /** The routing task category these results are for, such as `Coding & brainstorming` or `Summarization`. */
  task_name?: string;
};

/** Per-task breakdown of an evaluation run. Set on router evaluations to show how each routing task category performed across the prompts that were classified into it. */
export type ApiPerTaskResultSummaries = {
  /** One entry per routing task category that received at least one prompt during the evaluation run. */
  summaries?: (ApiPerTaskResultSummary)[];
};

/** Token pricing breakdown for a single model. */
export type ApiTokenPricing = {
  /** Cost of input tokens. */
  input_cost?: number;
  /** Cost of output tokens. */
  output_cost?: number;
  /** Total cost (input + output). */
  total_cost?: number;
};

/** Pricing entry for a specific model. */
export type ApiModelPricingEntry = {
  /** Model name (for display purposes). */
  model_name?: string;
  /** Model UUID. */
  model_uuid?: string;
  pricing?: ApiTokenPricing;
  /** Number of prompts/rows routed to this model. */
  prompt_count?: number;
};

/** Pricing breakdown for an evaluation run. */
export type ApiEvaluationPricing = {
  /** Currency code (e.g., "USD"). */
  currency?: string;
  judge_model_pricing?: ApiTokenPricing;
  /** Pricing per candidate model. */
  per_candidate_model_pricing?: (ApiModelPricingEntry)[];
  /** Total cost of the evaluation run (all candidates + judge). */
  total_cost?: number;
};

/** Star metric summary with identifying details and threshold. */
export type ApiStarMetricSummary = {
  metric_name?: string;
  metric_uuid?: string;
  threshold?: number;
};

/** Aggregated result summary for a completed model evaluation run. */
export type ApiModelEvaluationRunResultSummary = {
  end_time?: string;
  /** Per-metric aggregated pass/fail statistics. */
  metric_summaries?: (ApiMetricResultSummary)[];
  overall_score_percent?: number;
  per_model_summaries?: ApiPerModelResultSummaries;
  per_task_summaries?: ApiPerTaskResultSummaries;
  performance_metrics?: ApiPerformanceMetrics;
  pricing?: ApiEvaluationPricing;
  star_metric_summary?: ApiStarMetricSummary;
  /** Run timing. */
  start_time?: string;
  /** Total wall-clock duration in seconds. */
  total_duration_seconds?: number;
};

/** Model Evaluation Run Detail - full view returned when fetching a specific run. */
export type ApiModelEvaluationRunDetail = {
  candidate_inference_config?: ApiCandidateInferenceConfig;
  candidate_model_name?: string;
  candidate_model_source?: ApiCandidateModelSource;
  /** Candidate model being evaluated. */
  candidate_model_uuid?: string;
  completed_at?: string;
  created_at?: string;
  dataset_name?: string;
  /** Dataset used for the evaluation. */
  dataset_uuid?: string;
  /** Error description if the run failed or partially succeeded. */
  error_description?: string;
  eval_preset_name?: string;
  eval_preset_uuid?: string;
  /** UUID of the evaluation run. */
  eval_run_uuid?: string;
  judge_model_name?: string;
  /** Judge model used to score responses. */
  judge_model_uuid?: string;
  /** Metrics selected for this evaluation. */
  metrics?: (ApiEvaluationMetric)[];
  /** Name of the evaluation run. */
  name?: string;
  progress?: ApiModelEvaluationRunProgress;
  result_summary?: ApiModelEvaluationRunResultSummary;
  star_metric?: ApiStarMetric;
  started_at?: string;
  status?: ApiModelEvaluationRunStatus;
};

export type ApiGetModelEvaluationRunOutput = {
  links?: ApiLinks;
  meta?: ApiMeta;
  /** Paginated per-prompt evaluation results. */
  results?: (ApiModelEvaluationResult)[];
  run?: ApiModelEvaluationRunDetail;
};

/** Status of delete operation */
export type ApiDeleteModelEvaluationRunStatus = "DELETE_MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED" | "DELETE_MODEL_EVALUATION_RUN_STATUS_SUCCESS" | "DELETE_MODEL_EVALUATION_RUN_STATUS_FAIL";

export type ApiDeleteModelEvaluationRunOutputPublic = {
  /** Error message if deletion failed */
  error?: string;
  status?: ApiDeleteModelEvaluationRunStatus;
};

export type ApiUpdateModelEvaluationRunInputPublic = {
  /** UUID of the model evaluation run to update. Returned by `CreateModelEvaluationRun` and listed via `ListModelEvaluationRuns`. */
  eval_run_uuid?: string;
  /** Optional new display name for the evaluation run (max 255 characters). */
  name?: string;
};

export type ApiUpdateModelEvaluationRunOutput = {
  run?: ApiModelEvaluationRunSummary;
};

export type ApiCancelModelEvaluationRunInputPublic = {
  /** UUID of the model evaluation run to cancel. Returned by `CreateModelEvaluationRun` and listed via `ListModelEvaluationRuns`. The run must be in a non-terminal status (queued, running_dataset, or evaluating_results); already-terminal runs return an error. */
  eval_run_uuid?: string;
};

export type ApiCancelModelEvaluationRunOutput = {
  run?: ApiModelEvaluationRunSummary;
};

/** Response containing a presigned download URL for model evaluation run results. */
export type ApiGetModelEvaluationRunResultsDownloadUrlOutput = {
  /** The presigned URL to download the gzip-compressed JSON results file (.json.gz). */
  download_url?: string;
  /** The time the URL expires at. */
  expires_at?: string;
};

/** Pricing per million tokens (aligns with existing ModelPrice pattern) */
export type ApiModelPricing = {
  /** Per-million cache read rate for standard chat models (token_type "cache read input"). Multimodal models use text_cache_read_input_price_per_million / image_cache_read_input_price_per_million instead. */
  cache_read_input_price_per_million?: number;
  /** Price per million tokens written to the prompt cache with a 1-hour lifetime. */
  cache_write_1h_input_price_per_million?: number;
  /** Price per million tokens written to the prompt cache with a 5-minute lifetime. */
  cache_write_5m_input_price_per_million?: number;
  image_cache_read_input_price_per_million?: number;
  image_input_price_per_million?: number;
  image_output_price_per_million?: number;
  /** Cache read input price per single token. Equivalent to cache_read_input_price_per_million. */
  input_cache_read?: number;
  input_price_per_million?: number;
  output_price_per_million?: number;
  price_per_audio?: number;
  /** Unit-based pricing for non-token models (e.g., Fal AI image/video/audio generation, speech models). At most one of these is typically populated per model. Token-based models (chat, embeddings) leave all of these at 0 and populate input_price_per_million / output_price_per_million instead. */
  price_per_image?: number;
  price_per_megapixel?: number;
  price_per_second?: number;
  price_per_thousand_characters?: number;
  price_per_video?: number;
  /** Price per million reasoning tokens. 0 if the model does not charge separately for reasoning tokens. */
  reasoning_price_per_million?: number;
  text_cache_read_input_price_per_million?: number;
  /** Per-million token rates for models that bill text vs image tokens separately (e.g. OpenAI gpt-image-2). Standard chat models leave these at 0 and use input_price_per_million / output_price_per_million instead. Values align with usage token_type / internal/usage.Type string values for each meter. */
  text_input_price_per_million?: number;
  text_output_price_per_million?: number;
};

/** A machine learning model stored on the GenAI platform */
export type ApiModelPublic = {
  agreement?: ApiAgreement;
  /** Benchmark scores for this model, stored as arbitrary JSON */
  benchmark_score?: { [key: string]: unknown };
  /** Model capabilities (inference, reasoning, vectorization, etc.) */
  capabilities?: (string)[];
  /** Context window (maximum tokens) */
  context_window?: string;
  /** Creation date / time */
  created_at?: string;
  /** Model description */
  description?: string;
  /** Available endpoints and their capabilities */
  endpoints?: (ApiModelEndpoint)[];
  /** Human-readable model identifier */
  id?: string;
  /** True if it is a foundational model provided by do */
  is_foundational?: boolean;
  /** Default chunking size limit to show in UI */
  kb_default_chunk_size?: number;
  /** Maximum chunk size limit of model */
  kb_max_chunk_size?: number;
  /** Minimum chunking size token limits if model supports KNOWLEDGEBASE usecase */
  kb_min_chunk_size?: number;
  /** Lifecycle status of the model (internal, public-preview, active, deprecated, end_of_life) */
  lifecycle_status?: string;
  modalities?: ApiModelModalities;
  /** Model availability (serverless, dedicated, etc.) */
  model_availability?: string;
  /** Display name of the model */
  name?: string;
  /** Parameter count in billions */
  parameter_count?: number;
  /** Unique id of the model, this model is based on */
  parent_uuid?: string;
  pricing?: ApiModelPricing;
  provider?: ApiModelProvider;
  /** Available reasoning efforts for this model */
  reasoning_efforts?: (string)[];
  /** Playground settings derived from model metadata */
  settings?: (ApiModelSetting)[];
  /** Whether this model supports extended thinking (Anthropic models) */
  thinking?: boolean;
  /** Model type (chat, embedding, image, reasoning, coding) */
  type?: string;
  /** Last modified */
  updated_at?: string;
  /** Model has been fully uploaded */
  upload_complete?: boolean;
  /** Download url */
  url?: string;
  /** Unique id */
  uuid?: string;
  version?: ApiModelVersion;
};

/** A list of models */
export type ApiListModelsOutputPublic = {
  links?: ApiLinks;
  meta?: ApiMeta;
  /** The models */
  models?: (ApiModelPublic)[];
};

/** Model API Key Info */
export type ApiModelApiKeyInfo = {
  /** Creation date */
  created_at?: string;
  /** Created by */
  created_by?: string;
  /** Deleted date */
  deleted_at?: string;
  /** Name */
  name?: string;
  secret_key?: string;
  /** Uuid */
  uuid?: string;
};

export type ApiListModelApiKeysOutput = {
  /** Api key infos */
  api_key_infos?: (ApiModelApiKeyInfo)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

export type ApiCreateModelApiKeyInputPublic = {
  /** A human friendly name to identify the key */
  name?: string;
};

export type ApiUpdateModelApiKeyInputPublic = {
  /** API key ID */
  api_key_uuid?: string;
  /** Name */
  name?: string;
};

export type ApiUpdateModelApiKeyOutput = {
  api_key_info?: ApiModelApiKeyInfo;
};

export type ApiDeleteModelApiKeyOutput = {
  api_key_info?: ApiModelApiKeyInfo;
};

export type ApiRegenerateModelApiKeyOutput = {
  api_key_info?: ApiModelApiKeyInfo;
};

/** List item for ListModelCatalog */
export type ApiModelCatalogEntry = {
  availability?: (string)[];
  /** Badges for models */
  badges?: (string)[];
  /** Benchmark scores for this model, stored as arbitrary JSON */
  benchmark_score?: { [key: string]: unknown };
  capabilities?: (string)[];
  /** Specs (flat) */
  context_window?: string;
  /** RFC 3339 timestamp indicating when the model was added to the catalog. */
  created_at?: string;
  /** Model creator/developer (e.g., "Meta", "Anthropic", "OpenAI") */
  creator?: string;
  /** The Hugging Face repository ID (e.g. "meta-llama/Llama-3.3-70B-Instruct") the model is based on, when applicable. Omitted for models not sourced from Hugging Face. */
  hugging_face_id?: string;
  /** Identity */
  id?: string;
  /** The maximum number of output tokens the model can generate in a single response. */
  max_output_tokens?: string;
  /** Model identifier used for API calls (e.g., "llama3.1-70b-instruct") */
  model_id?: string;
  name?: string;
  parameter_count?: number;
  pricing?: ApiModelPricing;
  provider?: ApiModelProvider;
  /** True when this model's pricing varies over time. Retrieve the model's details for the full pricing schedule. False for models with fixed pricing. */
  scaled_pricing_enabled?: boolean;
  short_description?: string;
  type?: string;
};

export type ApiListModelCatalogOutput = {
  data?: (ApiModelCatalogEntry)[];
  meta?: ApiMeta;
};

/** Code examples for using the model */
export type ApiCodeSnippets = {
  curl?: string;
  javascript?: string;
  python?: string;
  sdk?: string;
};

/** Whether rates apply to real-time or batch requests.   - MODEL_BILLING_MODE_INTERACTIVE: Real-time request pricing.  - MODEL_BILLING_MODE_BATCH: Discounted pricing for asynchronous batch requests. */
export type ApiModelBillingMode = "MODEL_BILLING_MODE_UNSPECIFIED" | "MODEL_BILLING_MODE_INTERACTIVE" | "MODEL_BILLING_MODE_BATCH";

/** A time window during which the model's rates stay the same. Together these intervals show how pricing changes over the course of a day. */
export type ApiModelPricingInterval = {
  /** End of the interval, exclusive. Always on the hour. */
  end_time?: string;
  prices?: ApiModelPricing;
  /** Start of the interval, inclusive. Always on the hour. */
  start_time?: string;
};

/** Pricing that varies over time. When present, the rates move between the low and high bounds below across the intervals in the schedule. */
export type ApiModelScaledPricing = {
  /** The pricing schedule as a series of consecutive time intervals, ordered by start time. Neighboring hours with the same rates are combined, so each interval represents a distinct price. */
  intervals?: (ApiModelPricingInterval)[];
  max_prices?: ApiModelPricing;
  min_prices?: ApiModelPricing;
};

/** A pricing variant of a model, such as a faster serving option or a larger context window.   - MODEL_PRICING_TIER_STANDARD: Default pricing.  - MODEL_PRICING_TIER_FAST_MODE: Faster, higher-priority serving at a premium price.  - MODEL_PRICING_TIER_EXTENDED_1M: Pricing for the 1M-token context window.  - MODEL_PRICING_TIER_EXTENDED_272K: Pricing for the 272K-token context window.  - MODEL_PRICING_TIER_BYOK: Pricing when using your own model API key. */
export type ApiModelPricingTier = "MODEL_PRICING_TIER_UNSPECIFIED" | "MODEL_PRICING_TIER_STANDARD" | "MODEL_PRICING_TIER_FAST_MODE" | "MODEL_PRICING_TIER_EXTENDED_1M" | "MODEL_PRICING_TIER_EXTENDED_272K" | "MODEL_PRICING_TIER_BYOK";

/** Pricing for one variant of a model: a specific tier and billing mode. */
export type ApiModelPricingVariant = {
  /** Currency code for this variant's rates (e.g. `USD`). */
  currency?: string;
  /** Display name for the variant (e.g. `Standard`, `Fast Mode`, `1M Context`). */
  label?: string;
  mode?: ApiModelBillingMode;
  prices?: ApiModelPricing;
  scaled_pricing?: ApiModelScaledPricing;
  tier?: ApiModelPricingTier;
};

/** The complete set of prices for a model, covering every available variant. */
export type ApiModelPricingDetail = {
  /** Each available pricing variant for the model. */
  variants?: (ApiModelPricingVariant)[];
};

/** Detail view for GetModelCatalogCard */
export type ApiModelCatalogCard = {
  availability?: (string)[];
  /** Badges for models */
  badges?: (string)[];
  /** Benchmark scores for this model, stored as arbitrary JSON */
  benchmark_score?: { [key: string]: unknown };
  capabilities?: (string)[];
  code_snippets?: ApiCodeSnippets;
  /** Specs (same as Entry) */
  context_window?: string;
  /** Model creator/developer (e.g., "Meta", "Anthropic", "OpenAI") */
  creator?: string;
  /** Card-specific */
  description?: string;
  /** The Hugging Face repository ID (e.g. "meta-llama/Llama-3.3-70B-Instruct") the model is based on, when applicable. Omitted for models not sourced from Hugging Face. */
  hugging_face_id?: string;
  /** Identity (same as Entry) */
  id?: string;
  /** The maximum number of output tokens the model can generate in a single response. */
  max_output_tokens?: string;
  modalities?: ApiModelModalities;
  /** Model identifier used for API calls (e.g., "llama3.1-70b-instruct") */
  model_id?: string;
  name?: string;
  parameter_count?: number;
  pricing?: ApiModelPricing;
  pricing_detail?: ApiModelPricingDetail;
  provider?: ApiModelProvider;
  short_description?: string;
  type?: string;
};

export type ApiGetModelCatalogCardOutput = {
  data?: ApiModelCatalogCard;
};

/** List of model routers */
export type ApiListModelRoutersOutput = {
  links?: ApiLinks;
  meta?: ApiMeta;
  /** The model routers */
  model_routers?: (ApiModelRouter)[];
};

/** Create a model router */
export type ApiCreateModelRouterInputPublic = {
  /** Model router description */
  description?: string;
  /** At least one fallback model is required; order defines failover priority */
  fallback_models?: (string)[];
  /** Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens */
  name?: string;
  /** Router policies */
  policies?: (ApiModelRouterTaskPolicy)[];
  /** DEPRECATED: this field does not affect deployment and model routers are always deployed to all regions. Must be omitted or set to ["all"]. */
  regions?: (string)[];
};

/** Information about a newly created model router */
export type ApiCreateModelRouterOutput = {
  model_router?: ApiModelRouter;
};

/** Model router preset used to prefill new router configurations. */
export type ApiModelRouterPreset = {
  config?: ApiModelRouterConfig;
  /** Display name for UI surfaces */
  display_name?: string;
  /** Long description for details views */
  long_description?: string;
  /** Short description for list views */
  short_description?: string;
  /** Stable slug for routing usage */
  slug?: string;
};

/** List of model router presets */
export type ApiListModelRouterPresetsOutput = {
  links?: ApiLinks;
  meta?: ApiMeta;
  /** The model router presets */
  presets?: (ApiModelRouterPreset)[];
};

/** Task preset that can be referenced by slug in model router policies. */
export type ApiModelRouterTaskPreset = {
  /** Higher-level grouping used by the UI */
  category?: string;
  /** Task description */
  description?: string;
  /** Default models assigned to this task */
  models?: (string)[];
  /** Display name */
  name?: string;
  selection_policy?: ApiModelRouterSelectionPolicy;
  /** Lightweight labels for filtering */
  tags?: (string)[];
  /** Task slug */
  task_slug?: string;
};

/** List of model router task presets */
export type ApiListModelRouterTaskPresetsOutput = {
  links?: ApiLinks;
  meta?: ApiMeta;
  /** The task presets */
  tasks?: (ApiModelRouterTaskPreset)[];
};

/** The model router */
export type ApiGetModelRouterOutput = {
  model_router?: ApiModelRouter;
};

/** Information about updating a model router */
export type ApiUpdateModelRouterInputPublic = {
  /** Model router description */
  description?: string;
  fallback_models?: ({ [key: string]: unknown })[];
  /** Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens */
  name?: string;
  /** Router policies */
  policies?: (ApiModelRouterTaskPolicy)[];
  /** DEPRECATED: this field does not affect deployment and model routers are always deployed to all regions. Must be omitted or set to ["all"]. */
  regions?: (string)[];
  /** Model router id */
  uuid?: string;
};

/** Information about an updated model router */
export type ApiUpdateModelRouterOutput = {
  model_router?: ApiModelRouter;
};

/** Information about a deleted model router */
export type ApiDeleteModelRouterOutput = {
  /** The id of the deleted model router */
  uuid?: string;
};

/** The oauth2 code from google */
export type ApiDropboxOauth2GetTokensInput = {
  /** The oauth2 code from google */
  code?: string;
  /** Redirect url */
  redirect_url?: string;
};

/** The dropbox oauth2 token and refresh token */
export type ApiDropboxOauth2GetTokensOutput = {
  /** The refresh token */
  refresh_token?: string;
  /** The access token */
  token?: string;
};

/** The url for the oauth2 flow */
export type ApiGenerateOauth2UrlOutput = {
  /** The oauth2 url */
  url?: string;
};

/** ListOpenAIAPIKeysOutput is used to return the list of OpenAI API keys for a specific agent. */
export type ApiListOpenAiapiKeysOutput = {
  /** Api key infos */
  api_key_infos?: (ApiOpenAiapiKeyInfo)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** CreateOpenAIAPIKeyInputPublic is used to create a new OpenAI API key for a specific agent. */
export type ApiCreateOpenAiapiKeyInputPublic = {
  /** OpenAI API key */
  api_key?: string;
  /** Name of the key */
  name?: string;
};

/** CreateOpenAIAPIKeyOutput is used to return the newly created OpenAI API key. */
export type ApiCreateOpenAiapiKeyOutput = {
  api_key_info?: ApiOpenAiapiKeyInfo;
};

export type ApiGetOpenAiapiKeyOutput = {
  api_key_info?: ApiOpenAiapiKeyInfo;
};

/** UpdateOpenAIAPIKeyInputPublic is used to update an existing OpenAI API key for a specific agent. */
export type ApiUpdateOpenAiapiKeyInputPublic = {
  /** OpenAI API key */
  api_key?: string;
  /** API key ID */
  api_key_uuid?: string;
  /** Name of the key */
  name?: string;
};

/** UpdateOpenAIAPIKeyOutput is used to return the updated OpenAI API key. */
export type ApiUpdateOpenAiapiKeyOutput = {
  api_key_info?: ApiOpenAiapiKeyInfo;
};

/** DeleteOpenAIAPIKeyOutput is used to return the deleted OpenAI API key. */
export type ApiDeleteOpenAiapiKeyOutput = {
  api_key_info?: ApiOpenAiapiKeyInfo;
};

/** List of Agents that are linked to a specific OpenAI Key */
export type ApiListAgentsByOpenAiKeyOutput = {
  agents?: (ApiAgent)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** Description for a specific Region */
export type GenaiapiRegion = {
  /** Url for inference server */
  inference_url?: string;
  /** Region code */
  region?: string;
  /** This datacenter is capable of running batch jobs */
  serves_batch?: boolean;
  /** This datacenter is capable of serving inference */
  serves_inference?: boolean;
  /** The url for the inference streaming server */
  stream_inference_url?: string;
};

/** Region Codes */
export type ApiListRegionsOutput = {
  /** Region code */
  regions?: (GenaiapiRegion)[];
};

export type ApiCreateScheduledIndexingInputPublic = {
  /** Days for execution (day is represented same as in a cron expression, e.g. Monday begins with 1 ) */
  days?: (number)[];
  /** Knowledge base uuid for which the schedule is created */
  knowledge_base_uuid?: string;
  /** Time of execution (HH:MM) UTC */
  time?: string;
};

/** Metadata for scheduled indexing entries */
export type ApiScheduledIndexingInfo = {
  /** Created at timestamp */
  created_at?: string;
  /** Days for execution (day is represented same as in a cron expression, e.g. Monday begins with 1 ) */
  days?: (number)[];
  /** Deleted at timestamp (if soft deleted) */
  deleted_at?: string;
  /** Whether the schedule is currently active */
  is_active?: boolean;
  /** Knowledge base uuid associated with this schedule */
  knowledge_base_uuid?: string;
  /** Last time the schedule was executed */
  last_ran_at?: string;
  /** Next scheduled run */
  next_run_at?: string;
  /** Scheduled time of execution (HH:MM:SS format) */
  time?: string;
  /** Updated at timestamp */
  updated_at?: string;
  /** Unique identifier for the scheduled indexing entry */
  uuid?: string;
};

export type ApiCreateScheduledIndexingOutput = {
  indexing_info?: ApiScheduledIndexingInfo;
};

export type ApiGetScheduledIndexingOutput = {
  indexing_info?: ApiScheduledIndexingInfo;
};

export type ApiDeleteScheduledIndexingOutput = {
  indexing_info?: ApiScheduledIndexingInfo;
};

export type ApiListWorkspacesOutput = {
  /** Workspaces */
  workspaces?: (ApiWorkspace)[];
};

/** Parameters for Workspace Creation */
export type ApiCreateWorkspaceInputPublic = {
  /** Ids of the agents(s) to attach to the workspace */
  agent_uuids?: (string)[];
  /** Description of the workspace */
  description?: string;
  /** Name of the workspace */
  name?: string;
};

export type ApiCreateWorkspaceOutput = {
  workspace?: ApiWorkspace;
};

export type ApiGetWorkspaceOutput = {
  workspace?: ApiWorkspace;
};

/** Parameters for Update Workspace */
export type ApiUpdateWorkspaceInputPublic = {
  /** The new description of the workspace */
  description?: string;
  /** The new name of the workspace */
  name?: string;
  /** Workspace UUID. */
  workspace_uuid?: string;
};

export type ApiUpdateWorkspaceOutput = {
  workspace?: ApiWorkspace;
};

export type ApiDeleteWorkspaceOutput = {
  /** Workspace */
  workspace_uuid?: string;
};

export type ApiListAgentsByWorkspaceOutput = {
  agents?: (ApiAgent)[];
  links?: ApiLinks;
  meta?: ApiMeta;
};

/** Parameters for Moving agents to a Workspace */
export type ApiMoveAgentsToWorkspaceInputPublic = {
  /** Agent uuids */
  agent_uuids?: (string)[];
  /** Workspace uuid to move agents to */
  workspace_uuid?: string;
};

export type ApiMoveAgentsToWorkspaceOutput = {
  workspace?: ApiWorkspace;
};

export type ApiListEvaluationTestCasesByWorkspaceOutput = {
  evaluation_test_cases?: (ApiEvaluationTestCase)[];
};

export type ChatCompletionToolCall = {
  /** The ID of the tool call. */
  id: string;
  /** The type of the tool. Currently, only function is supported. */
  type: "function";
  function: { name: string; arguments: string };
};

/** A message in the chat conversation. */
export type ChatMessage = {
  /** The role of the message author. */
  role: "system" | "developer" | "user" | "assistant" | "tool";
  /** The contents of the message. */
  content?: string | null;
  /** The refusal message generated by the model (assistant messages only). */
  refusal?: string | null;
  /** The tool calls generated by the model (assistant messages only). */
  tool_calls?: (ChatCompletionToolCall)[];
  /** Tool call that this message is responding to (tool messages only). */
  tool_call_id?: string;
  /** The reasoning content generated by the model (assistant messages only). */
  reasoning_content?: string | null;
};

export type FunctionObject = {
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The parameters the function accepts, described as a JSON Schema object. */
  parameters?: { [key: string]: unknown };
};

export type ChatCompletionTool = {
  /** The type of the tool. Currently, only function is supported. */
  type: "function";
  function: FunctionObject;
};

export type ChatCompletionRequest = {
  /** A list of messages comprising the conversation so far. */
  messages: (ChatMessage)[];
  /** Model ID used to generate the response. */
  model: string;
  /** The maximum number of tokens that can be generated in the completion. The token count of your prompt plus max_tokens cannot exceed the model's context length.  */
  max_tokens?: number | null;
  /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run.  */
  max_completion_tokens?: number | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.  */
  frequency_penalty?: number | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.  */
  presence_penalty?: number | null;
  /** An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used.  */
  top_logprobs?: number | null;
  /** A list of tools the model may call. Currently, only functions are supported as a tool. */
  tools?: (ChatCompletionTool)[];
  /** Controls which (if any) tool is called by the model. none means the model will not call any tool and instead generates a message. auto means the model can pick between generating a message or calling one or more tools. required means the model must call one or more tools. Specifying a particular tool via {"type": "function", "function": {"name": "my_function"}} forces the model to call that tool. none is the default when no tools are present. auto is the default if tools are present.  */
  tool_choice?: "none" | "auto" | "required" | { type: "function"; function: { name: string } };
  /** If set to true, the model response data will be streamed to the client as it is generated using server-sent events.  */
  stream?: boolean | null;
  /** Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.  */
  stop?: string | (string)[];
  /** Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  */
  logit_bias?: { [key: string]: number | undefined } | null;
  /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message.  */
  logprobs?: boolean | null;
  /** How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs. */
  n?: number | null;
  /** Options for streaming response. Only set this when you set stream to true. */
  stream_options?: { include_usage?: boolean } | null;
  /** Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.  */
  reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh" | null;
  /** If specified, the system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed.  */
  seed?: number | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters. */
  metadata?: { [key: string]: string | undefined } | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or top_p but not both.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.  */
  top_p?: number | null;
  /** A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse. */
  user?: string;
};

export type ChatCompletionTopLogprobItem = {
  /** The token. */
  token: string;
  /** The log probability of this token. */
  logprob: number;
  bytes: (number)[] | null;
};

export type ChatCompletionTokenLogprob = {
  /** The token. */
  token: string;
  /** The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Can be null if there is no bytes representation for the token. */
  bytes: (number)[] | null;
  /** List of the most likely tokens and their log probability, at this token position. */
  top_logprobs: (ChatCompletionTopLogprobItem)[];
};

/** Usage statistics for the completion request. */
export type CompletionUsage = {
  /** Number of tokens in the generated completion. */
  completion_tokens: number;
  /** Number of tokens in the prompt. */
  prompt_tokens: number;
  /** Number of prompt tokens written to cache. */
  cache_created_input_tokens: number;
  /** Breakdown of prompt tokens written to cache. */
  cache_creation: { ephemeral_5m_input_tokens: number; ephemeral_1h_input_tokens: number };
  /** Number of prompt tokens read from cache. */
  cache_read_input_tokens: number;
  /** Total number of tokens used in the request (prompt + completion). */
  total_tokens: number;
};

/** Represents a chat completion response returned by model, based on the provided input. */
export type ChatCompletionResponse = {
  /** A unique identifier for the chat completion. */
  id: string;
  /** A list of chat completion choices. Can be more than one if n is greater than 1. */
  choices: ({ finish_reason: "stop" | "length" | "tool_calls" | "content_filter"; index: number; message: { content: string | null; refusal: string | null; tool_calls?: ({ id: string; type: "function"; function: { name: string; arguments: string } })[]; reasoning_content: string | null; role: "assistant" }; logprobs: { content: (ChatCompletionTokenLogprob)[] | null; refusal: (ChatCompletionTokenLogprob)[] | null } | null })[];
  /** The Unix timestamp (in seconds) of when the chat completion was created. */
  created: number;
  /** The model used for the chat completion. */
  model: string;
  /** The object type, which is always chat.completion. */
  object: "chat.completion";
  usage?: CompletionUsage;
};

export type ChatCompletionToolCallChunk = {
  index?: number;
  /** The ID of the tool call. */
  id?: string;
  type?: "function";
  function?: { name?: string; arguments?: string };
};

/** A chat completion delta generated by streamed model responses. */
export type ChatCompletionStreamResponseDelta = {
  /** The contents of the chunk message. */
  content?: string | null;
  tool_calls?: (ChatCompletionToolCallChunk)[];
  /** The reasoning content generated by the model. */
  reasoning_content?: string | null;
  /** The role of the author of this message. */
  role?: "developer" | "user" | "assistant";
  /** The refusal message generated by the model. */
  refusal?: string | null;
};

/** Represents a streamed chunk of a chat completion response returned by the model, based on the provided input. */
export type ChatCompletionChunk = {
  /** A unique identifier for the chat completion. Each chunk has the same ID. */
  id: string;
  /** A list of chat completion choices. Can contain more than one element if n is greater than 1. Can also be empty for the last chunk if you set stream_options include_usage to true.  */
  choices: ({ delta: ChatCompletionStreamResponseDelta; logprobs?: { content: (ChatCompletionTokenLogprob)[] | null; refusal: (ChatCompletionTokenLogprob)[] | null } | null; finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | null; index: number })[];
  /** The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp. */
  created: number;
  /** The model to generate the completion. */
  model: string;
  /** The object type, which is always chat.completion.chunk. */
  object: "chat.completion.chunk";
  /** An optional field that will only be present when you set stream_options include_usage to true in your request. When present, it contains a null value except for the last chunk which contains the token usage statistics for the entire request.  */
  usage?: CompletionUsage | null;
};

/** A text content block in a request message. */
export type MessagesRequestTextBlockParam = {
  /** Block type identifier. */
  type: "text";
  /** Plain text for this block. */
  text: string;
};

/** Image payload (for example base64-encoded bytes). */
export type MessagesImageSourceParam = {
  /** Source kind (for example `base64`). */
  type: string;
  /** MIME type of the image (for example `image/jpeg`). */
  media_type: string;
  /** Encoded image data. */
  data: string;
};

/** Image content block in a request message. */
export type MessagesImageBlockParam = {
  type: "image";
  source: MessagesImageSourceParam;
};

/** Tool invocation block in a request message (from the model or a prior turn). */
export type MessagesToolUseBlockParam = {
  type: "tool_use";
  id: string;
  name: string;
  /** JSON object matching the tool's `input_schema`. */
  input: { [key: string]: unknown };
};

/** Result for a prior `tool_use` block, returned to the model. */
export type MessagesToolResultBlockParam = {
  type: "tool_result";
  tool_use_id: string;
  /** Tool output as plain text or structured objects. */
  content: string | ({ [key: string]: unknown })[];
};

/** Structured message content. Block `type` is one of `text`, `image`, `tool_use`, or `tool_result`. Some tool definitions may be rejected by server policy even when valid here. */
export type MessagesRequestContentBlockParam = MessagesRequestTextBlockParam | MessagesImageBlockParam | MessagesToolUseBlockParam | MessagesToolResultBlockParam;

/** One turn in the conversation. Roles are `user` or `assistant` (no `system` role; use the top-level `system` field). Content may be a string (equivalent to a single text block) or an array of content blocks. */
export type MessagesApiMessageParam = {
  /** Speaker role for this message. */
  role: "user" | "assistant";
  /** Message body as plain text or structured blocks. */
  content: string | (MessagesRequestContentBlockParam)[];
};

/** Tool definition the model may call (`name`, JSON Schema for `input`). */
export type MessagesToolDefinitionParam = {
  /** Tool name referenced in `tool_use` blocks. */
  name: string;
  /** Human-readable description of what the tool does. */
  description?: string;
  /** JSON Schema (draft 2020-12 style) describing the tool input object. */
  input_schema: { [key: string]: unknown };
};

/** Controls how the model uses tools: automatic selection, require any tool, force a specific tool, or a string form accepted by the service. */
export type MessagesToolChoiceParam = string | { type: "auto" | "any" | "tool"; name?: string };

/** Extended thinking configuration. Executors that do not support thinking may ignore this field. */
export type MessagesThinkingConfigParam = {
  /** Thinking mode discriminator (for example enabled or disabled). */
  type: string;
};

/** Request body for `POST /v1/messages`. Required fields are `model`, `messages`, and `max_tokens`. */
export type MessagesCreateRequest = {
  /** Model ID (for example `claude-opus-4-6` or a serverless model id). */
  model: string;
  /** Maximum tokens to generate before stopping. */
  max_tokens: number;
  /** Conversation turns. Each item has `role` `user` or `assistant` and `content` as a string or an array of content blocks.  */
  messages: (MessagesApiMessageParam)[];
  /** System prompt as plain text or as an array of text blocks. */
  system?: string | (MessagesRequestTextBlockParam)[];
  /** Custom strings that stop generation when produced. */
  stop_sequences?: (string)[];
  /** When true, the response is streamed using server-sent events (SSE). */
  stream?: boolean;
  /** Sampling temperature between 0.0 and 1.0. */
  temperature?: number | null;
  /** Nucleus sampling; use either `temperature` or `top_p`, not both. */
  top_p?: number | null;
  /** Top-K sampling cutoff. */
  top_k?: number | null;
  /** Tool definitions the model may invoke. */
  tools?: (MessagesToolDefinitionParam)[];
  tool_choice?: MessagesToolChoiceParam;
  /** Optional request metadata. */
  metadata?: { user_id?: string };
  /** DigitalOcean extension for reasoning-capable models. Ignored by executors that do not support it.  */
  reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh" | null;
  /** DigitalOcean extension for preferred inference speed. Ignored when not supported.  */
  speed?: "standard" | "fast" | null;
  thinking?: MessagesThinkingConfigParam;
};

/** A text block in an assistant message in the response. */
export type MessagesResponseTextBlock = {
  type: "text";
  /** Generated text for this block. */
  text: string;
};

/** Tool call emitted by the assistant in the response. */
export type MessagesResponseToolUseBlock = {
  type: "tool_use";
  id: string;
  name: string;
  /** Arguments for the tool invocation. */
  input: { [key: string]: unknown };
};

/** Assistant output block (text and tool calls). */
export type MessagesResponseContentBlock = MessagesResponseTextBlock | MessagesResponseToolUseBlock;

/** Token usage for a non-streaming `POST /v1/messages` response. */
export type MessagesUsage = {
  /** Number of input tokens billed for this request. */
  input_tokens: number;
  /** Number of output tokens generated. */
  output_tokens: number;
  /** Input tokens used to create a prompt cache entry, if applicable. */
  cache_creation_input_tokens?: number;
  /** Input tokens read from a prompt cache, if applicable. */
  cache_read_input_tokens?: number;
  /** Inference speed tier reflected in billing or routing. */
  speed?: "standard" | "fast" | null;
};

/** Non-streaming assistant message from `POST /v1/messages`. `type` is always `message` and `role` is always `assistant`. */
export type MessagesCreateResponse = {
  /** Unique identifier for this message object. */
  id: string;
  /** Object type discriminator. */
  type: "message";
  /** Always `assistant` for this response. */
  role: "assistant";
  /** Assistant output blocks (`text` and/or `tool_use`). */
  content: (MessagesResponseContentBlock)[];
  /** Model that produced the message. */
  model: string;
  /** Why generation stopped. */
  stop_reason: "end_turn" | "max_tokens" | "stop_sequence" | "tool_use" | null;
  /** When `stop_reason` is `stop_sequence`, the sequence that matched. */
  stop_sequence?: string | null;
  usage: MessagesUsage;
};

/** One server-sent event (SSE) JSON payload when `stream` is true. Each event line contains a JSON object after the `data:` prefix. */
export type MessagesStreamEvent = {
  /** SSE event type. */
  type: "message_start" | "content_block_start" | "content_block_delta" | "content_block_stop" | "message_delta" | "message_stop" | "ping";
  /** Present on `message_start`; initial message metadata. */
  message?: { [key: string]: unknown };
  /** Index of the content block this event refers to. */
  index?: number;
  /** Present on `content_block_start`. */
  content_block?: { [key: string]: unknown };
  /** Present on `content_block_delta` and `message_delta`. */
  delta?: { [key: string]: unknown };
  /** Streamed usage (for example on `message_delta`). */
  usage?: { output_tokens?: number; speed?: "standard" | "fast" | null };
};

/** Error envelope for some failures from this endpoint. */
export type MessagesCreateErrorResponse = {
  type: "error";
  error: { type: string; message: string };
};

/** Request body for `POST /v1/embeddings` (OpenAI-compatible). Extra fields are rejected. */
export type EmbeddingsRequest = {
  /** Model id to use for embeddings. Must match a model your account can access. */
  model: string;
  /** A single string or 1–2048 strings; each string produces one row in `data`, in order. */
  input: string | (string)[];
  /** Optional end-user identifier to help with abuse monitoring. */
  user?: string;
  /** How embedding values are returned in each `data[].embedding` field. */
  encoding_format?: "float" | "base64";
};

/** One row in the embeddings `data` array, aligned with a single `input` item. */
export type EmbeddingDataItem = {
  /** Zero-based index of the corresponding `input` item (0 when `input` is a string). */
  index: number;
  /** The object type, which is always `embedding`. */
  object: "embedding";
  /** The embedding vector, or a base64-encoded string when the request set encoding_format to base64. */
  embedding: (number)[] | string;
};

/** Token usage for the embeddings request. */
export type EmbeddingsUsage = {
  /** Number of input tokens used for the embedding. */
  prompt_tokens: number;
  /** Total billable tokens for the request. */
  total_tokens: number;
};

/** OpenAI-style embeddings response. */
export type EmbeddingsResponse = {
  /** The object type, which is always the string `list`. */
  object: "list";
  /** The embedding model that produced the vectors. */
  model: string;
  /** One entry for each `input` string, in the same order. */
  data: (EmbeddingDataItem)[];
  usage: EmbeddingsUsage;
};

/** Request body for image generation. */
export type CreateImageRequest = {
  /** A text description of the desired image(s). Supports up to 32,000 characters and provides automatic prompt optimization for best results.  */
  prompt: string;
  /** The model to use for image generation.  */
  model: string;
  /** The moderation setting for the image generation. Supported values: low, auto.  */
  moderation?: string | null;
  /** The background setting for the image generation. Supported values: transparent, opaque, auto.  */
  background?: string | null;
  /** The output format for the image generation. Supported values: png, webp, jpeg.  */
  output_format?: string | null;
  /** The output compression level for the image generation (0-100).  */
  output_compression?: number | null;
  /** The number of images to generate. Must be between 1 and 10.  */
  n: number;
  /** The quality of the image that will be generated. Supported values: auto, high, medium, low.  */
  quality?: string | null;
  /** The size of the generated images. GPT-IMAGE-1 supports: auto (automatically select best size), 1536x1024 (landscape), 1024x1536 (portrait).  */
  size?: "auto" | "1536x1024" | "1024x1536";
  /** If set to true, partial image data will be streamed as the image is being generated. The response will be sent as server-sent events with partial image chunks. When stream is true, partial_images must be greater than 0.  */
  stream?: boolean | null;
  /** The number of partial image chunks to return during streaming generation. Defaults to 0. When stream=true, this must be greater than 0 to receive progressive updates of the image as it is being generated.  */
  partial_images?: number | null;
  /** A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse.  */
  user?: string | null;
};

/** Represents the content of a generated image. */
export type GeneratedImage = {
  /** The base64-encoded JSON of the generated image.  */
  b64_json: string;
  /** The optimized prompt that was used to generate the image.  */
  revised_prompt?: string;
};

/** Token usage information for the image generation. */
export type ImagesUsage = {
  /** The total number of tokens (images and text) used for the image generation. */
  total_tokens: number;
  /** The number of tokens (images and text) in the input prompt. */
  input_tokens: number;
  /** The number of image tokens in the output image. */
  output_tokens: number;
  /** Detailed breakdown of input tokens. */
  input_tokens_details: { text_tokens: number; image_tokens: number };
};

/** The response from the image generation endpoint. */
export type ImagesResponse = {
  /** The Unix timestamp (in seconds) of when the images were created. */
  created: number;
  /** The list of generated images. */
  data: (GeneratedImage)[];
  /** The background setting used for the image generation. */
  background?: string | null;
  /** The output format of the generated image. */
  output_format?: string | null;
  /** The quality setting used for the image generation. */
  quality?: string | null;
  /** The size of the generated image. */
  size?: string | null;
  /** Usage statistics for the image generation request. */
  usage?: ImagesUsage | null;
};

/** Emitted when a partial image is available during image generation streaming. */
export type ImageGenPartialImageEvent = {
  /** The type of the event. Always `image_generation.partial_image`. */
  type: "image_generation.partial_image";
  /** Base64-encoded partial image data, suitable for rendering as an image. */
  b64_json: string;
  /** The Unix timestamp when the event was created. */
  created_at: number;
  /** The size of the requested image. */
  size: "1024x1024" | "1024x1536" | "1536x1024" | "auto";
  /** The quality setting for the requested image. */
  quality: "low" | "medium" | "high" | "auto";
  /** The background setting for the requested image. */
  background: "transparent" | "opaque" | "auto";
  /** The output format for the requested image. */
  output_format: "png" | "webp" | "jpeg";
  /** 0-based index for the partial image (streaming). */
  partial_image_index: number;
};

/** Describes a model offering that can be used with the API. */
export type Model = {
  /** The model identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) when the model was created. */
  created: number;
  /** The object type, which is always "model". */
  object: "model";
  /** The organization that owns the model. */
  owned_by: string;
};

/** Response listing available models. */
export type ListModelsResponse = {
  /** The object type, which is always "list". */
  object: "list";
  /** The list of available models. */
  data: (Model)[];
};

/** Request body for sending a prompt to a model using the Responses API. */
export type CreateResponseRequest = {
  /** The model ID of the model you want to use. Get the model ID using `/v1/models` or on the available models page.  */
  model: string;
  /** The prompt or input content you want the model to respond to. Can be a simple text string or an array of message objects for conversation context.  */
  input: string | ({ role?: "user" | "assistant" | "system" | "tool" | "developer"; content: string })[];
  /** The maximum number of tokens to generate in the response.  */
  max_output_tokens?: number | null;
  /** A value between 0.0 and 2.0 to control randomness and creativity. Lower values like 0.2 make the output more focused and deterministic, while higher values like 0.8 make it more random.  */
  temperature?: number | null;
  /** Set to true to stream partial responses as Server-Sent Events.  */
  stream?: boolean | null;
  /** System-level instructions for the model. This sets the behavior and context for the response generation.  */
  instructions?: string | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.  */
  top_p?: number | null;
  /** Options for streaming response. Only set this when you set stream to true. */
  stream_options?: { include_usage?: boolean } | null;
  /** A list of tools the model may call.  */
  tools?: ({ type: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[] | null;
  /** Controls which (if any) tool is called by the model.  */
  tool_choice?: "none" | "auto" | "required" | { type: "function"; function: { name: string } };
  /** Up to 4 sequences where the API will stop generating further tokens.  */
  stop?: string | (string)[] | null;
  /** Set of key-value pairs that can be attached to the request.  */
  metadata?: { [key: string]: string | undefined } | null;
  /** A unique identifier representing your end-user.  */
  user?: string | null;
};

/** Detailed usage statistics for the Responses API request, including input/output token counts and detailed breakdowns. */
export type ResponseUsage = {
  /** The number of input tokens. */
  input_tokens: number;
  /** A detailed breakdown of the input tokens. */
  input_tokens_details: { cached_tokens: number };
  /** The number of output tokens. */
  output_tokens: number;
  /** A detailed breakdown of the output tokens. */
  output_tokens_details: { reasoning_tokens: number; tool_output_tokens: number };
  /** The total number of tokens used. */
  total_tokens: number;
};

/** The response includes structured output and token usage details. */
export type CreateResponseResponse = {
  /** A unique identifier for the response. */
  id: string;
  /** The object type, which is always `response`. */
  object: "response";
  /** The Unix timestamp (in seconds) of when the response was created. */
  created: number;
  /** The model used to generate the response. */
  model: string;
  /** An array of content items generated by the model. Each item has a type and a content array. Types include reasoning and output text.  */
  output: ({ type: "reasoning" | "message" | "function_call"; id?: string; status?: string | null; role?: string | null; content: ({ type: "reasoning_text" | "output_text"; text: string })[]; call_id?: string | null; name?: string | null; arguments?: string | null })[];
  usage: ResponseUsage;
  /** Whether parallel tool calls are enabled. */
  parallel_tool_calls?: boolean | null;
  /** Temperature setting used for the response. */
  temperature?: number | null;
  /** Tool choice setting used for the response. */
  tool_choice?: string | null;
  /** Tools available for the response. */
  tools?: ({ type: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[] | null;
  /** Top-p setting used for the response. */
  top_p?: number | null;
  /** Maximum output tokens setting. */
  max_output_tokens?: number | null;
  /** Status of the response. */
  status?: string | null;
  /** User identifier. */
  user?: string | null;
};

/** Represents a streamed chunk of a text-to-text response returned by the model, based on the provided input. */
export type CreateResponseStreamResponse = {
  /** A unique identifier for the response. Each chunk has the same ID. */
  id: string;
  /** The object type, which is always `response.chunk`. */
  object: "response.chunk";
  /** The Unix timestamp (in seconds) of when the response was created. Each chunk has the same timestamp.  */
  created: number;
  /** The model used to generate the response. */
  model: string;
  /** A list of response choice chunks. Can contain more than one element if `n` is greater than 1. Can also be empty for the last chunk if you set `stream_options: {"include_usage": true}`.  */
  choices: ({ index: number; delta: { role?: "assistant" | null; content?: string | null; reasoning_content?: string | null; tool_calls?: ({ id: string; type: "function"; function: { name: string; arguments: string } })[] | null }; finish_reason?: "stop" | "length" | "tool_calls" | "content_filter" | null; logprobs?: { content: (ChatCompletionTokenLogprob)[] | null } | null })[];
  /** An optional field that will only be present when you set `stream_options: {"include_usage": true}` in your request. When present, it contains a null value except for the last chunk which contains the token usage statistics for the entire request.  */
  usage?: ResponseUsage | null;
};

/** Request body for asynchronously invoking a model. Supports image generation, audio generation, and text-to-speech models. The `input` object fields vary depending on the model type. */
export type AsyncInvokeRequest = {
  /** The ID of the model to invoke asynchronously.  */
  model_id: string;
  /** The input parameters for the model invocation. Fields vary by model type.  For **image generation** models (e.g., `fal-ai/flux/schnell`, `fal-ai/fast-sdxl`), use `prompt` along with optional image parameters like `output_format`, `num_inference_steps`, `guidance_scale`, `num_images`, and `enable_safety_checker`.  For **audio generation** models (e.g., `fal-ai/stable-audio-25/text-to-audio`), use `prompt` along with `seconds_total` to control the duration.  For **text-to-speech** models (e.g., `fal-ai/elevenlabs/tts/multilingual-v2`), use `text` with the content you want converted to speech.  */
  input: { prompt?: string; text?: string; output_format?: string | null; num_inference_steps?: number | null; guidance_scale?: number | null; num_images?: number | null; enable_safety_checker?: boolean | null; seconds_total?: number | null; [key: string]: unknown };
  /** An optional list of key-value tags to attach to the invocation request for tracking or categorization.  */
  tags?: ({ key: string; value: string })[] | null;
};

/** Response returned when an asynchronous invocation request is accepted. The job status is QUEUED initially. Use the request_id to poll for the result. */
export type AsyncInvokeResponse = {
  /** A unique identifier for the async invocation request. Use this ID to check the status and retrieve the result.  */
  request_id: string;
  /** The current status of the async invocation. */
  status: "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
  /** The model ID that was invoked. */
  model_id: string;
  /** The timestamp when the request was created. */
  created_at: string;
  /** The timestamp when the job started processing. Null while queued. */
  started_at?: string | null;
  /** The timestamp when the job completed. Null until finished. */
  completed_at?: string | null;
  /** The output of the invocation. Null while the job is queued or in progress. Contains the result once completed.  */
  output?: { [key: string]: unknown } | null;
  /** Error message if the job failed. Null on success. */
  error?: string | null;
};

/** Request body for creating a batch input file intent. */
export type BatchFileCreateRequest = {
  /** The file you plan to upload. Must end with `.jsonl` (case-insensitive) and contain one request per line in the schema expected by the target `provider`.  */
  file_name: string;
};

/** Presigned upload URL and `file_id` for a new batch input file. */
export type BatchFileCreateResponse = {
  /** Pass this value as `file_id` when creating a batch job. */
  file_id: string;
  /** Short-lived presigned `PUT` URL (typically valid for ~15 minutes). If it expires before upload, create a new file intent.  */
  upload_url: string;
  /** When `upload_url` expires. */
  expires_at?: string | null;
};

/** A Batch Inference job. */
export type Batch = {
  /** Unique identifier for the batch job. */
  batch_id: string;
  /** Lifecycle status. Terminal states: `completed`, `failed`, `expired`, `cancelled`.  */
  status: "validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled";
  provider: "openai" | "anthropic";
  /** Inference endpoint each request is dispatched to. */
  endpoint?: string;
  completion_window: "24h";
  /** The uploaded JSONL input file. */
  input_file_id: string;
  /** Output JSONL file. Populated once the job completes. */
  output_file_id?: string | null;
  /** Error sidecar file. Null when no errors were produced. */
  error_file_id?: string | null;
  /** Aggregate request counts. */
  request_counts?: { total?: number; completed?: number; failed?: number };
  /** The idempotency key supplied at creation. */
  request_id?: string;
  /** Metadata attached at creation. */
  metadata?: { [key: string]: string | undefined } | null;
  /** Top-level errors that prevented the batch from completing. */
  errors?: ({ code?: string; message?: string; line?: number | null })[] | null;
  created_at: string;
  in_progress_at?: string | null;
  finalizing_at?: string | null;
  completed_at?: string | null;
  /** Derived from `created_at` plus `completion_window`. */
  expires_at?: string | null;
  cancelled_at?: string | null;
  failed_at?: string | null;
};

/** Cursor-paginated list of batch inference jobs. */
export type BatchListResponse = {
  /** The object type, always `list`. */
  object: "list";
  /** Batch jobs on this page, ordered newest first. */
  data: (Batch)[];
  /** ID of the first batch on this page. Null when the page is empty. */
  first_id?: string | null;
  /** ID of the last batch on this page. Pass as `after` to fetch the next page.  */
  last_id?: string | null;
  /** Whether additional batches exist beyond this page. */
  has_more: boolean;
};

/** Request body for creating a batch inference job.  When `provider` is `openai`, `endpoint` is required and must be one of `/v1/responses` or `/v1/chat/completions`. When `provider` is `anthropic`, `endpoint` must be omitted — the Anthropic Message Batches API does not need a per-job endpoint. */
export type BatchCreateRequest = {
  /** The `file_id` returned by `POST /v1/batches/files`. */
  file_id: string;
  /** The inference provider whose JSONL schema the input file conforms to. `openai` follows the OpenAI Batch API input schema (`custom_id`, `method`, `url`, `body`); `anthropic` follows the Anthropic Message Batches JSONL conventions.  */
  provider: "openai" | "anthropic";
  /** Inference endpoint each request is dispatched to. **Required when `provider` is `openai` and must match the `url` on every JSONL line. Must be omitted when `provider` is `anthropic`.**  */
  endpoint?: "/v1/responses" | "/v1/chat/completions";
  /** Time window in which the job must complete. Jobs that do not finish in time transition to `expired`.  */
  completion_window: "24h";
  /** Client-supplied idempotency key. Retries with the same value return the existing job instead of creating a duplicate.  */
  request_id: string;
  /** Optional string-valued metadata to attach to the job. */
  metadata?: { [key: string]: string | undefined } | null;
};

/** Presigned download URLs for a batch job. URLs are short-lived — download the artifacts soon after fetching them. */
export type BatchResultsResponse = {
  batch_id: string;
  /** When `false`, keep polling batch status and retry later.  */
  result_available: boolean;
  /** Presigned URL for the main results JSONL. */
  output_file_url?: string | null;
  /** Presigned URL for the error sidecar JSONL, if any. */
  error_file_url?: string | null;
  /** When the presigned URLs expire. */
  expires_at?: string | null;
};
