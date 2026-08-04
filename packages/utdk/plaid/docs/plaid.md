# Plaid

335 operations · `@utdk/plaid`

```ts
import plaid from "@utdk/plaid";
```

## `plaid.accountsBalanceGet`

Retrieve real-time balance data — [API reference](/api/products/signal/#accountsbalanceget)

```ts
plaid.accountsBalanceGet(input: {
  access_token: AccessToken;
  secret?: ApiSecret;
  client_id?: ApiClientId;
  options?: AccountsBalanceGetRequestOptions;
}): Promise<AccountsGetResponse>
```

<sub>`POST /accounts/balance/get` · `accountsBalanceGet`</sub>

## `plaid.accountsGet`

Retrieve accounts — [API reference](/api/accounts/#accountsget)

```ts
plaid.accountsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: AccountsGetRequestOptions;
}): Promise<AccountsGetResponse>
```

<sub>`POST /accounts/get` · `accountsGet`</sub>

## `plaid.applicationGet`

Retrieve information about a Plaid application — [Provider docs](https://plaid.com)

```ts
plaid.applicationGet(input: {
  client_id: ApiClientId;
  secret: ApiSecret;
  application_id: ApplicationId;
}): Promise<ApplicationGetResponse>
```

<sub>`POST /application/get` · `applicationGet`</sub>

## `plaid.assetReportAuditCopyCreate`

Create Asset Report Audit Copy — [API reference](/api/products/assets/#asset_reportaudit_copycreate)

```ts
plaid.assetReportAuditCopyCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  asset_report_token: AssetReportToken;
  /** The `auditor_id` of the third party with whom you would like to share the Asset Report. */
  auditor_id?: string;
}): Promise<AssetReportAuditCopyCreateResponse>
```

<sub>`POST /asset_report/audit_copy/create` · `assetReportAuditCopyCreate`</sub>

## `plaid.assetReportAuditCopyGet`

Retrieve an Asset Report Audit Copy — [API reference](/none/)

```ts
plaid.assetReportAuditCopyGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `audit_copy_token` granting access to the Audit Copy you would like to get. */
  audit_copy_token: string;
}): Promise<AssetReportGetResponse>
```

<sub>`POST /asset_report/audit_copy/get` · `assetReportAuditCopyGet`</sub>

## `plaid.assetReportAuditCopyPdfGet`

Retrieve a PDF Asset Report Audit Copy — [API reference](/none/)

```ts
plaid.assetReportAuditCopyPdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `audit_copy_token` granting access to the Audit Copy you would like to get as a PDF. */
  audit_copy_token: string;
  options?: AssetReportPdfGetRequestOptions;
}): Promise<AssetReportAuditCopyPdfGetResponse>
```

<sub>`POST /asset_report/audit_copy/pdf/get` · `assetReportAuditCopyPdfGet`</sub>

## `plaid.assetReportAuditCopyRemove`

Remove Asset Report Audit Copy — [API reference](/api/products/assets/#asset_reportaudit_copyremove)

```ts
plaid.assetReportAuditCopyRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `audit_copy_token` granting access to the Audit Copy you would like to revoke. */
  audit_copy_token: string;
}): Promise<AssetReportAuditCopyRemoveResponse>
```

<sub>`POST /asset_report/audit_copy/remove` · `assetReportAuditCopyRemove`</sub>

## `plaid.assetReportCreate`

Create an Asset Report — [API reference](/api/products/assets/#asset_reportcreate)

```ts
plaid.assetReportCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** An array of access tokens corresponding to the Items that will be included in the report. The `assets` product must have been initialized for the Items during Link; the Assets product cannot be added after initialization. */
  access_tokens?: (AccessToken)[];
  /** The maximum integer number of days of history to include in the Asset Report. If using Fannie Mae Day 1 Certainty, `days_requested` must be at least 61 for new originations or at least 31 for refinancings.  An Asset Report requested with "Additional History" (that is, with more than 61 days of transaction history) will incur an Additional History fee. */
  days_requested: number;
  options?: AssetReportCreateRequestOptions;
}): Promise<AssetReportCreateResponse>
```

<sub>`POST /asset_report/create` · `assetReportCreate`</sub>

## `plaid.assetReportFilter`

Filter Asset Report — [API reference](/api/products/assets/#asset_reportfilter)

```ts
plaid.assetReportFilter(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  asset_report_token: AssetReportToken;
  /** The accounts to exclude from the Asset Report, identified by `account_id`. */
  account_ids_to_exclude: (string)[];
}): Promise<AssetReportFilterResponse>
```

<sub>`POST /asset_report/filter` · `assetReportFilter`</sub>

## `plaid.assetReportGet`

Retrieve an Asset Report — [API reference](/api/products/assets/#asset_reportget)

```ts
plaid.assetReportGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  asset_report_token?: AssetReportTokenNullable;
  /** The user token associated with the User for which to create an asset report for. The latest asset report associated with the User will be returned */
  user_token?: string;
  /** `true` if you would like to retrieve the Asset Report with Insights, `false` otherwise. This field defaults to `false` if omitted. */
  include_insights?: boolean;
  /** `true` to fetch "fast" version of asset report. Defaults to false if omitted. Can only be used if `/asset_report/create` was called with `options.add_ons` set to `["fast_assets"]`. */
  fast_report?: boolean;
  options?: AssetReportGetRequestOptions;
}): Promise<AssetReportGetResponse>
```

<sub>`POST /asset_report/get` · `assetReportGet`</sub>

## `plaid.assetReportPdfGet`

Retrieve a PDF Asset Report — [API reference](/api/products/assets/#asset_reportpdfget)

```ts
plaid.assetReportPdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  asset_report_token: AssetReportToken;
  options?: AssetReportPdfGetRequestOptions;
}): Promise<AssetReportPdfGetResponse>
```

<sub>`POST /asset_report/pdf/get` · `assetReportPdfGet`</sub>

## `plaid.assetReportRefresh`

Refresh an Asset Report — [API reference](/api/products/assets/#asset_reportrefresh)

```ts
plaid.assetReportRefresh(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  asset_report_token: AssetReportRefreshAssetReportToken;
  /** The maximum number of days of history to include in the Asset Report. Must be an integer. If not specified, the value from the original call to `/asset_report/create` will be used. */
  days_requested?: number | null;
  options?: AssetReportRefreshRequestOptions;
}): Promise<AssetReportRefreshResponse>
```

<sub>`POST /asset_report/refresh` · `assetReportRefresh`</sub>

## `plaid.assetReportRemove`

Delete an Asset Report — [API reference](/api/products/assets/#asset_reportremove)

```ts
plaid.assetReportRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  asset_report_token: AssetReportToken;
}): Promise<AssetReportRemoveResponse>
```

<sub>`POST /asset_report/remove` · `assetReportRemove`</sub>

## `plaid.authGet`

Retrieve auth data — [API reference](/api/products/auth/#authget)

```ts
plaid.authGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: AuthGetRequestOptions;
}): Promise<AuthGetResponse>
```

<sub>`POST /auth/get` · `authGet`</sub>

## `plaid.authVerify`

Verify auth data — [API reference](/api/products/auth/#authverify)

```ts
plaid.authVerify(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Account owner's legal name */
  legal_name?: string | null;
  numbers: AuthVerifyRequestNumbers;
}): Promise<AuthVerifyResponse>
```

<sub>`POST /auth/verify` · `authVerify`</sub>

## `plaid.bankTransferBalanceGet`

(Deprecated) Get balance of your Bank Transfer account — [API reference](/bank-transfers/reference#bank_transferbalanceget)

```ts
plaid.bankTransferBalanceGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** If multiple origination accounts are available, `origination_account_id` must be used to specify the account for which balance will be returned. */
  origination_account_id?: string | null;
}): Promise<BankTransferBalanceGetResponse>
```

<sub>`POST /bank_transfer/balance/get` · `bankTransferBalanceGet`</sub>

## `plaid.bankTransferCancel`

(Deprecated) Cancel a bank transfer — [API reference](/bank-transfers/reference#bank_transfercancel)

```ts
plaid.bankTransferCancel(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  bank_transfer_id: BankTransferId;
}): Promise<BankTransferCancelResponse>
```

<sub>`POST /bank_transfer/cancel` · `bankTransferCancel`</sub>

## `plaid.bankTransferCreate`

(Deprecated) Create a bank transfer — [API reference](/bank-transfers/reference#bank_transfercreate)

```ts
plaid.bankTransferCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  idempotency_key: BankTransferIdempotencyKey;
  access_token: BankTransferAccessToken;
  /** The Plaid `account_id` for the account that will be debited or credited. */
  account_id: string;
  type: BankTransferType;
  network: BankTransferNetwork;
  amount: BankTransferAmount;
  /** The currency of the transfer amount - should be set to "USD". */
  iso_currency_code: string;
  /** The transfer description. Maximum of 10 characters. */
  description: string;
  ach_class?: AchClass;
  user: BankTransferUser;
  /** An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters. */
  custom_tag?: string | null;
  metadata?: BankTransferMetadata;
  /** Plaid's unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. Otherwise, this field should be left blank. */
  origination_account_id?: string | null;
}): Promise<BankTransferCreateResponse>
```

<sub>`POST /bank_transfer/create` · `bankTransferCreate`</sub>

## `plaid.bankTransferEventList`

List bank transfer events — [API reference](/api/products/auth#bank_transfereventlist)

```ts
plaid.bankTransferEventList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  start_date?: string | null;
  /** The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  end_date?: string | null;
  /** Plaid's unique identifier for a bank transfer. */
  bank_transfer_id?: string | null;
  /** The account ID to get events for all transactions to/from an account. */
  account_id?: string | null;
  bank_transfer_type?: BankTransferEventListBankTransferType;
  /** Filter events by event type. */
  event_types?: (BankTransferEventType)[];
  /** The maximum number of bank transfer events to return. If the number of events matching the above parameters is greater than `count`, the most recent events will be returned. */
  count?: number | null;
  /** The offset into the list of bank transfer events. When `count`=25 and `offset`=0, the first 25 events will be returned. When `count`=25 and `offset`=25, the next 25 bank transfer events will be returned. */
  offset?: number | null;
  /** The origination account ID to get events for transfers from a specific origination account. */
  origination_account_id?: string | null;
  direction?: BankTransferEventListDirection;
}): Promise<BankTransferEventListResponse>
```

<sub>`POST /bank_transfer/event/list` · `bankTransferEventList`</sub>

## `plaid.bankTransferEventSync`

Sync bank transfer events — [API reference](/api/products/auth/#bank_transfereventsync)

```ts
plaid.bankTransferEventSync(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The latest (largest) `event_id` fetched via the sync endpoint, or 0 initially. */
  after_id: number;
  /** The maximum number of bank transfer events to return. */
  count?: number | null;
}): Promise<BankTransferEventSyncResponse>
```

<sub>`POST /bank_transfer/event/sync` · `bankTransferEventSync`</sub>

## `plaid.bankTransferGet`

(Deprecated) Retrieve a bank transfer — [API reference](/bank-transfers/reference#bank_transferget)

```ts
plaid.bankTransferGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  bank_transfer_id: BankTransferId;
}): Promise<BankTransferGetResponse>
```

<sub>`POST /bank_transfer/get` · `bankTransferGet`</sub>

## `plaid.bankTransferList`

(Deprecated) List bank transfers — [API reference](/bank-transfers/reference#bank_transferlist)

```ts
plaid.bankTransferList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  start_date?: string | null;
  /** The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  end_date?: string | null;
  /** The maximum number of bank transfers to return. */
  count?: number;
  /** The number of bank transfers to skip before returning results. */
  offset?: number;
  /** Filter bank transfers to only those originated through the specified origination account. */
  origination_account_id?: string | null;
  direction?: BankTransferDirection;
}): Promise<BankTransferListResponse>
```

<sub>`POST /bank_transfer/list` · `bankTransferList`</sub>

## `plaid.bankTransferMigrateAccount`

(Deprecated) Migrate account into Bank Transfers — [API reference](/bank-transfers/reference#bank_transfermigrate_account)

```ts
plaid.bankTransferMigrateAccount(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The user's account number. */
  account_number: string;
  /** The user's routing number. */
  routing_number: string;
  /** The user's wire transfer routing number. This is the ABA number; for some institutions, this may differ from the ACH number used in `routing_number`. */
  wire_routing_number?: string;
  /** The type of the bank account (`checking` or `savings`). */
  account_type: string;
}): Promise<BankTransferMigrateAccountResponse>
```

<sub>`POST /bank_transfer/migrate_account` · `bankTransferMigrateAccount`</sub>

## `plaid.bankTransferSweepGet`

(Deprecated) Retrieve a sweep — [API reference](/api/products/transfer/#bank_transfersweepget)

```ts
plaid.bankTransferSweepGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Identifier of the sweep. */
  sweep_id: string;
}): Promise<BankTransferSweepGetResponse>
```

<sub>`POST /bank_transfer/sweep/get` · `bankTransferSweepGet`</sub>

## `plaid.bankTransferSweepList`

(Deprecated) List sweeps — [API reference](/api/products/transfer/#bank_transfersweeplist)

```ts
plaid.bankTransferSweepList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** If multiple origination accounts are available, `origination_account_id` must be used to specify the account that the sweeps belong to. */
  origination_account_id?: string | null;
  /** The start `created` datetime of sweeps to return (RFC 3339 format). */
  start_time?: string | null;
  /** The end `created` datetime of sweeps to return (RFC 3339 format). */
  end_time?: string | null;
  /** The maximum number of sweeps to return. */
  count?: number | null;
}): Promise<BankTransferSweepListResponse>
```

<sub>`POST /bank_transfer/sweep/list` · `bankTransferSweepList`</sub>

## `plaid.beaconAccountRiskEvaluate`

(Deprecated) Evaluate risk of a bank account — [API reference](none)

```ts
plaid.beaconAccountRiskEvaluate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token?: AccessToken;
  options?: BeaconAccountRiskEvaluateRequestOptions;
  /** A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple evaluations and/or multiple linked accounts. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. */
  client_user_id?: string;
  /** Unique identifier of what you are looking to evaluate (account add, information change, etc.) to allow us to tie the activity to the decisions and possible fraud outcome sent via our feedback endpoints. You can use your internal request ID or similar. */
  client_evaluation_id?: string;
  evaluation_reason?: BeaconAccountRiskEvaluateEvaluationReason;
  device?: SignalDevice;
  /** The time the event for evaluation has occurred. Populate this field for backfilling data. If you don't populate this field, we'll use the timestamp at the time of receipt. Use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ). */
  evaluate_time?: string;
}): Promise<BeaconAccountRiskEvaluateResponse>
```

<sub>`POST /beacon/account_risk/v1/evaluate` · `beaconAccountRiskEvaluate`</sub>

## `plaid.beaconDuplicateGet`

(Deprecated) Get a Beacon Duplicate — [API reference](/api/products/beacon/#beaconduplicateget)

```ts
plaid.beaconDuplicateGet(input: {
  beacon_duplicate_id: BeaconDuplicateId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconDuplicateGetResponse>
```

<sub>`POST /beacon/duplicate/get` · `beaconDuplicateGet`</sub>

## `plaid.beaconReportSyndicationGet`

(Deprecated) Get a Beacon Report Syndication — [API reference](/api/products/beacon/#beaconreport_syndicationget)

```ts
plaid.beaconReportSyndicationGet(input: {
  beacon_report_syndication_id: BeaconReportSyndicationId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconReportSyndicationGetResponse>
```

<sub>`POST /beacon/report_syndication/get` · `beaconReportSyndicationGet`</sub>

## `plaid.beaconReportSyndicationList`

(Deprecated) List Beacon Report Syndications for a Beacon User — [API reference](/api/products/beacon/#beaconreport_syndicationlist)

```ts
plaid.beaconReportSyndicationList(input: {
  beacon_user_id: BeaconUserId;
  cursor?: Cursor;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconReportSyndicationListResponse>
```

<sub>`POST /beacon/report_syndication/list` · `beaconReportSyndicationList`</sub>

## `plaid.beaconReportCreate`

(Deprecated) Create a Beacon Report — [API reference](/api/products/beacon/#beaconreportcreate)

```ts
plaid.beaconReportCreate(input: {
  beacon_user_id: BeaconUserId;
  type: BeaconReportCreateType;
  fraud_date: Iso8601Date;
  fraud_amount?: FraudAmount;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconReportCreateResponse>
```

<sub>`POST /beacon/report/create` · `beaconReportCreate`</sub>

## `plaid.beaconReportGet`

(Deprecated) Get a Beacon Report — [API reference](/api/products/beacon/#beaconreportget)

```ts
plaid.beaconReportGet(input: {
  beacon_report_id: BeaconReportId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconReportGetResponse>
```

<sub>`POST /beacon/report/get` · `beaconReportGet`</sub>

## `plaid.beaconReportList`

(Deprecated) List Beacon Reports for a Beacon User — [API reference](/api/products/beacon/#beaconreportlist)

```ts
plaid.beaconReportList(input: {
  beacon_user_id: BeaconUserId;
  cursor?: Cursor;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconReportListResponse>
```

<sub>`POST /beacon/report/list` · `beaconReportList`</sub>

## `plaid.beaconUserAccountInsightsGet`

(Deprecated) Get Account Insights for a Beacon User — [API reference](/api/products/beacon/#beaconuseraccount_insightsget)

```ts
plaid.beaconUserAccountInsightsGet(input: {
  beacon_user_id: BeaconUserId;
  access_token: AccessToken;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconUserAccountInsightsGetResponse>
```

<sub>`POST /beacon/user/account_insights/get` · `beaconUserAccountInsightsGet`</sub>

## `plaid.beaconUserCreate`

(Deprecated) Create a Beacon User — [API reference](/api/products/beacon/#beaconusercreate)

```ts
plaid.beaconUserCreate(input: {
  program_id: BeaconProgramId;
  client_user_id: ClientUserId;
  user: BeaconUserRequestData;
  /** Send this array of access tokens to link accounts to the Beacon User and have them evaluated for Account Insights. A maximum of 50 accounts total can be added to a single Beacon User. */
  access_tokens?: (AccessToken)[] | null;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconUserCreateResponse>
```

<sub>`POST /beacon/user/create` · `beaconUserCreate`</sub>

## `plaid.beaconUserGet`

(Deprecated) Get a Beacon User — [API reference](/api/products/beacon/#beaconuserget)

```ts
plaid.beaconUserGet(input: {
  beacon_user_id: BeaconUserId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconUserGetResponse>
```

<sub>`POST /beacon/user/get` · `beaconUserGet`</sub>

## `plaid.beaconUserHistoryList`

(Deprecated) List a Beacon User's history — [API reference](/api/products/beacon/#beaconuserhistorylist)

```ts
plaid.beaconUserHistoryList(input: {
  beacon_user_id: BeaconUserId;
  cursor?: Cursor;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconUserHistoryListResponse>
```

<sub>`POST /beacon/user/history/list` · `beaconUserHistoryList`</sub>

## `plaid.beaconUserReview`

(Deprecated) Review a Beacon User — [API reference](/api/products/beacon/#beaconuserreview)

```ts
plaid.beaconUserReview(input: {
  beacon_user_id: BeaconUserId;
  status: BeaconUserStatus;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconUserGetResponse>
```

<sub>`POST /beacon/user/review` · `beaconUserReview`</sub>

## `plaid.beaconUserUpdate`

(Deprecated) Update the identity data of a Beacon User — [API reference](/api/products/beacon/#beaconuserupdate)

```ts
plaid.beaconUserUpdate(input: {
  beacon_user_id: BeaconUserId;
  user?: BeaconUserUpdateRequestData;
  /** Send this array of access tokens to add accounts to this user for evaluation. This will add accounts to this Beacon User. If left null only existing accounts will be returned in response. A maximum of 50 accounts total can be added to a Beacon User. */
  access_tokens?: (AccessToken)[] | null;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BeaconUserUpdateResponse>
```

<sub>`POST /beacon/user/update` · `beaconUserUpdate`</sub>

## `plaid.creditBankEmploymentGet`

Retrieve information from the bank accounts used for employment verification — [API reference](/api/products/income/#creditbank_employmentget)

```ts
plaid.creditBankEmploymentGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
}): Promise<CreditBankEmploymentGetResponse>
```

<sub>`POST /beta/credit/v1/bank_employment/get` · `creditBankEmploymentGet`</sub>

## `plaid.betaEwaReportV1Get`

Get EWA Score Report — [API reference](/api/products/beta/#betaewareportv1get)

```ts
plaid.betaEwaReportV1Get(input: {
  access_token: AccessToken;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BetaEwaReportV1GetResponse>
```

<sub>`POST /beta/ewa_report/v1/get` · `betaEwaReportV1Get`</sub>

## `plaid.betaPartnerCustomerV1Create`

Creates a new end customer for a Plaid reseller. — [API reference](/api/partner/#partnercustomercreate)

```ts
plaid.betaPartnerCustomerV1Create(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The company name of the end customer being created. This will be used to display the end customer in the Plaid Dashboard. It will not be shown to end users. */
  company_name: string;
  /** Denotes whether or not the partner has completed attestation of diligence for the end customer to be created. */
  is_diligence_attested?: boolean;
  /** The products to be enabled for the end customer. If empty or `null`, this field will default to the products enabled for the reseller at the time this endpoint is called. */
  products?: (Products)[];
  /** If `true`, the end customer's default Link customization will be set to match the partner's. You can always change the end customer's Link customization in the Plaid Dashboard. See the [Link Customization docs](https://plaid.com/docs/link/customization/) for more information. If you require the ability to programmatically create end customers using multiple different Link customization profiles, contact your Plaid account manager for assistance.  Important: Data Transparency Messaging (DTM) use cases will not be copied to the end customer's Link customization unless the **Publish changes** button is clicked after the use cases are applied. Link will not work in Production unless the end customer's DTM use cases are configured. For more details, see [Data Transparency Messaging](https://plaid.com/docs/link/data-transparency-messaging-migration-guide/). */
  create_link_customization?: boolean;
  /** Base64-encoded representation of the end customer's logo. Must be a PNG of size 1024x1024 under 4MB. The logo will be shared with financial institutions and shown to the end user during Link flows. A logo is required if `create_link_customization` is `true`. If `create_link_customization` is `false` and the logo is omitted, the partner's logo will be used if one exists, otherwise a stock logo will be used. */
  logo?: string;
  /** The end customer's legal name. This will be shared with financial institutions as part of the OAuth registration process. It will not be shown to end users. */
  legal_entity_name?: string;
  /** The end customer's website. */
  website: string;
  /** The name of the end customer's application. This will be shown to end users when they go through the Plaid Link flow. The application name must be unique and cannot match the name of another application already registered with Plaid. */
  application_name: string;
  technical_contact?: PartnerEndCustomerTechnicalContact;
  billing_contact?: PartnerEndCustomerBillingContact;
  customer_support_info: PartnerEndCustomerCustomerSupportInfo;
  address: PartnerEndCustomerAddress;
  /** A list of URIs indicating the destination(s) where a user can be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or another app. URIs should not contain any query parameters. When used in Production, URIs must use https. To modify redirect URIs for an end customer after creating them, go to the end customer's [API page](https://dashboard.plaid.com/team/api) in the Dashboard. */
  redirect_uris?: (string)[];
  bank_addendum_acceptance?: PartnerEndCustomerBankAddendumAcceptance;
  questionnaires?: PartnerEndCustomerQuestionnaires;
}): Promise<BetaPartnerCustomerV1CreateResponse>
```

<sub>`POST /beta/partner/customer/v1/create` · `betaPartnerCustomerV1Create`</sub>

## `plaid.betaPartnerCustomerV1Enable`

Enables a Plaid reseller's end customer in the Production environment. — [API reference](/api/partner/#partnercustomerenable)

```ts
plaid.betaPartnerCustomerV1Enable(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  end_customer_client_id: string;
  products?: (Products)[];
  [key: string]: unknown;
}): Promise<BetaPartnerCustomerV1EnableResponse>
```

<sub>`POST /beta/partner/customer/v1/enable` · `betaPartnerCustomerV1Enable`</sub>

## `plaid.betaPartnerCustomerV1Get`

Retrieves the details of a Plaid reseller's end customer. — [API reference](/api/partner/#partnercustomerget)

```ts
plaid.betaPartnerCustomerV1Get(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  end_customer_client_id: string;
}): Promise<BetaPartnerCustomerV1GetResponse>
```

<sub>`POST /beta/partner/customer/v1/get` · `betaPartnerCustomerV1Get`</sub>

## `plaid.betaPartnerCustomerV1Update`

Updates an existing end customer. — [API reference](/api/partner/#partnercustomercreate)

```ts
plaid.betaPartnerCustomerV1Update(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  end_customer_client_id: string;
  legal_entity_name?: string;
  redirect_uris?: (string)[];
  bank_addendum_acceptance?: PartnerEndCustomerBankAddendumAcceptance;
  questionnaires?: PartnerEndCustomerQuestionnaires;
  [key: string]: unknown;
}): Promise<BetaPartnerCustomerV1UpdateResponse>
```

<sub>`POST /beta/partner/customer/v1/update` · `betaPartnerCustomerV1Update`</sub>

## `plaid.transactionsRulesCreate`

Create transaction category rule — [Provider docs](https://plaid.com)

```ts
plaid.transactionsRulesCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A unique ID representing the end user. This ID is used to associate rules with a specific user. */
  client_user_id: string;
  pfc_primary_category: PfcPrimaryCategory;
  pfc_detailed_category: PfcDetailedCategory;
  rule_details: TransactionsRuleDetails;
}): Promise<TransactionsRulesCreateResponse>
```

<sub>`POST /beta/transactions/rules/v1/create` · `transactionsRulesCreate`</sub>

## `plaid.transactionsRulesList`

Return a list of rules created for the Item associated with the access token. — [Provider docs](https://plaid.com)

```ts
plaid.transactionsRulesList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A unique ID representing the end user whose rules should be listed. */
  client_user_id: string;
}): Promise<TransactionsRulesListResponse>
```

<sub>`POST /beta/transactions/rules/v1/list` · `transactionsRulesList`</sub>

## `plaid.transactionsRulesRemove`

Remove transaction rule — [Provider docs](https://plaid.com)

```ts
plaid.transactionsRulesRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A unique ID representing the end user the rule belongs to. */
  client_user_id: string;
  /** A rule's unique identifier */
  rule_id: string;
}): Promise<TransactionsRulesRemoveResponse>
```

<sub>`POST /beta/transactions/rules/v1/remove` · `transactionsRulesRemove`</sub>

## `plaid.transactionsUserInsightsGet`

Obtain user insights based on transactions sent through /transactions/enrich — [API reference](/api/products/enrich/#userinsightsget)

```ts
plaid.transactionsUserInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A unique client-provided `client_user_id` to retrieve insights for. */
  client_user_id: string;
}): Promise<TransactionsUserInsightsGetResponse>
```

<sub>`POST /beta/transactions/user_insights/v1/get` · `transactionsUserInsightsGet`</sub>

## `plaid.transactionsEnhance`

Enhance locally-held transaction data — [Provider docs](https://plaid.com)

```ts
plaid.transactionsEnhance(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The type of account for the requested transactions (`depository` or `credit`). */
  account_type: string;
  /** An array of raw transactions to be enhanced. */
  transactions: (ClientProvidedRawTransaction)[];
}): Promise<TransactionsEnhanceGetResponse>
```

<sub>`POST /beta/transactions/v1/enhance` · `transactionsEnhance`</sub>

## `plaid.businessVerificationCreate`

Create a Business Verification — [API reference](/api/products/business-verification/#businessverificationcreate)

```ts
plaid.businessVerificationCreate(input: {
  client_user_id: ClientUserId;
  business?: BusinessVerificationCreateRequestBusiness;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<BusinessVerificationCreateResponse>
```

<sub>`POST /business_verification/create` · `businessVerificationCreate`</sub>

## `plaid.businessVerificationGet`

Get a Business Verification — [API reference](/api/products/business-verification/#businessverificationget)

```ts
plaid.businessVerificationGet(input: {
  business_verification_id: BusinessVerificationId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<BusinessVerificationGetResponse>
```

<sub>`POST /business_verification/get` · `businessVerificationGet`</sub>

## `plaid.cashflowReportGet`

Gets transaction data in `cashflow_report` — [API reference](/api/products/transactions/#cashflowReportGet)

```ts
plaid.cashflowReportGet(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
  /** Number of days to retrieve transactions data for (1 to 730) */
  days_requested: number;
  /** Number of transactions to fetch per call */
  count?: number;
  /** The cursor value represents the last update requested. Pass in the empty string "" in the first call. */
  cursor?: string;
  options?: CashflowReportGetRequestOptions;
}): Promise<CashflowReportGetResponse>
```

<sub>`POST /cashflow_report/get` · `cashflowReportGet`</sub>

## `plaid.cashflowReportInsightsGet`

Gets insights data in Cashflow Report — [API reference](/api/products/transactions/#cashflowReportInsightsGet)

```ts
plaid.cashflowReportInsightsGet(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
}): Promise<CashflowReportInsightsGetResponse>
```

<sub>`POST /cashflow_report/insights/get` · `cashflowReportInsightsGet`</sub>

## `plaid.cashflowReportRefresh`

Refresh transaction data in `cashflow_report` — [API reference](/api/products/transactions/#cashflowReportRefresh)

```ts
plaid.cashflowReportRefresh(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
  /** Number of days to retrieve transactions data for (1 to 730) */
  days_requested: number;
}): Promise<CashflowReportRefreshResponse>
```

<sub>`POST /cashflow_report/refresh` · `cashflowReportRefresh`</sub>

## `plaid.cashflowReportTransactionsGet`

Gets transaction data in `cashflow_report` — [API reference](/api/products/transactions/#cashflowReportTransactionsGet)

```ts
plaid.cashflowReportTransactionsGet(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
  /** Number of transactions to fetch per call */
  count?: number;
  /** The cursor value represents the last update requested. Pass in the empty string "" in the first call. */
  cursor?: string;
  options?: CashflowReportTransactionsGetRequestOptions;
}): Promise<CashflowReportTransactionsGetResponse>
```

<sub>`POST /cashflow_report/transactions/get` · `cashflowReportTransactionsGet`</sub>

## `plaid.categoriesGet`

(Deprecated) Get legacy categories — [API reference](/api/products/transactions/#categoriesget)

```ts
plaid.categoriesGet(input: {
  body: CategoriesGetRequest;
}): Promise<CategoriesGetResponse>
```

<sub>`POST /categories/get` · `categoriesGet`</sub>

## `plaid.consentEventsGet`

List a historical log of item consent events — [API reference](/api/consent/#consenteventsget)

```ts
plaid.consentEventsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<ConsentEventsGetResponse>
```

<sub>`POST /consent/events/get` · `consentEventsGet`</sub>

## `plaid.consumerReportPdfGet`

Retrieve PDF Reports — [API reference](/none/)

```ts
plaid.consumerReportPdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
}): Promise<ConsumerReportPdfGetResponse>
```

<sub>`POST /consumer_report/pdf/get` · `consumerReportPdfGet`</sub>

## `plaid.craCheckReportBaseReportGet`

Retrieve a Base Report — [API reference](/api/products/check/#cracheck_reportbase_reportget)

```ts
plaid.craCheckReportBaseReportGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  third_party_user_token?: ThirdPartyUserToken;
  /** The Item IDs to include in the Base Report. If not provided, all Items associated with the user will be included. */
  item_ids?: (ItemId)[] | null;
  user_token?: UserToken;
  user_tier?: CraUserTier;
  /** The CRA report token (formatted `cra-report-<env>-<uuid>`) identifying a specific consumer report. When provided alongside `consumer_report_permissible_purpose`, pins retrieval to that report and stamps its permissible purpose. If omitted, the most recently generated report for the user is returned. */
  report_id?: string;
  consumer_report_permissible_purpose?: CraCheckReportPermissiblePurpose;
}): Promise<CraCheckReportBaseReportGetResponse>
```

<sub>`POST /cra/check_report/base_report/get` · `craCheckReportBaseReportGet`</sub>

## `plaid.craCheckReportCashflowInsightsGet`

Retrieve cash flow insights from your user's banking data — [API reference](/api/products/check/#cracheck_reportcashflow_insightsget)

```ts
plaid.craCheckReportCashflowInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  third_party_user_token?: ThirdPartyUserToken;
  user_token?: UserToken;
  options?: CraCheckReportCashflowInsightsGetOptions;
}): Promise<CraCheckReportCashflowInsightsGetResponse>
```

<sub>`POST /cra/check_report/cashflow_insights/get` · `craCheckReportCashflowInsightsGet`</sub>

## `plaid.craCheckReportCreate`

Refresh or create a Consumer Report — [API reference](/api/products/check/#cracheck_reportcreate)

```ts
plaid.craCheckReportCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  user_token?: UserToken;
  /** The destination URL to which webhooks will be sent  */
  webhook: string;
  /** The number of days of data to request for the report. Default value is 365; maximum is 731; minimum is 180. If a value lower than 180 is provided, a minimum of 180 days of history will be requested. */
  days_requested: number;
  /** The minimum number of days of data required for the report to be successfully generated. */
  days_required?: number;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  client_report_id?: string | null;
  /** Specifies a list of products to generate when creating the report (in addition to the Base Report, which is always generated). These products will be made available before a success webhook is sent. Note that specifying `cra_partner_insights` in this field will trigger a billable event. Other products are not billed until the respective reports are retrieved via their product-specific `/get` endpoints. */
  products?: (Products)[] | null;
  base_report?: CraCheckReportCreateBaseReportOptions;
  cashflow_insights?: CraCheckReportCreateCashflowInsightsOptions;
  partner_insights?: CraCheckReportCreatePartnerInsightsOptions;
  lend_score?: CraCheckReportCreateLendScoreOptions;
  network_insights?: CraCheckReportCreateNetworkInsightsOptions;
  /** Indicates that investment data should be extracted from the linked account(s). */
  include_investments?: boolean | null;
  income_insights?: CraCheckReportCreateIncomeInsightsOptions;
  consumer_report_permissible_purpose: ConsumerReportPermissiblePurpose;
}): Promise<CraCheckReportCreateResponse>
```

<sub>`POST /cra/check_report/create` · `craCheckReportCreate`</sub>

## `plaid.craCheckReportIncomeInsightsGet`

Retrieve income insights from your user's banks — [API reference](/api/products/check/#cracheck_reportincome_insightsget)

```ts
plaid.craCheckReportIncomeInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  third_party_user_token?: ThirdPartyUserToken;
  user_id?: NewUserId;
  options?: CraCheckReportIncomeInsightsGetOptions;
  /** The CRA report token (formatted `cra-report-<env>-<uuid>`) identifying a specific consumer report. When provided alongside `consumer_report_permissible_purpose`, pins retrieval to that report and stamps its permissible purpose. If omitted, the most recently generated report for the user is returned. */
  report_id?: string;
  consumer_report_permissible_purpose?: CraCheckReportPermissiblePurpose;
}): Promise<CraCheckReportIncomeInsightsGetResponse>
```

<sub>`POST /cra/check_report/income_insights/get` · `craCheckReportIncomeInsightsGet`</sub>

## `plaid.craCheckReportLendScoreGet`

Retrieve the LendScore from your user's banking data — [API reference](/api/products/check/#cracheck_reportlend_scoreget)

```ts
plaid.craCheckReportLendScoreGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  third_party_user_token?: ThirdPartyUserToken;
  user_token?: UserToken;
  options?: CraCheckReportLendScoreGetOptions;
}): Promise<CraCheckReportLendScoreGetResponse>
```

<sub>`POST /cra/check_report/lend_score/get` · `craCheckReportLendScoreGet`</sub>

## `plaid.craCheckReportNetworkInsightsGet`

Retrieve network attributes for the user — [API reference](/api/products/check/#cracheck_reportnetwork_insightsget)

```ts
plaid.craCheckReportNetworkInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  options?: CraCheckReportNetworkInsightsGetOptions;
  third_party_user_token?: ThirdPartyUserToken;
  user_token?: UserToken;
}): Promise<CraCheckReportNetworkInsightsGetResponse>
```

<sub>`POST /cra/check_report/network_insights/get` · `craCheckReportNetworkInsightsGet`</sub>

## `plaid.craCheckReportPartnerInsightsGet`

Retrieve cash flow insights from partners — [API reference](/api/products/check/#cracheck_reportpartner_insightsget)

```ts
plaid.craCheckReportPartnerInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  third_party_user_token?: ThirdPartyUserToken;
  user_token?: UserToken;
  user_tier?: CraUserTier;
  partner_insights?: CraCheckReportPartnerInsightsGetPartnerInsights;
  options?: CraCheckReportPartnerInsightsGetOptions;
}): Promise<CraCheckReportPartnerInsightsGetResponse>
```

<sub>`POST /cra/check_report/partner_insights/get` · `craCheckReportPartnerInsightsGet`</sub>

## `plaid.craCheckReportPdfGet`

Retrieve a Consumer Report as a PDF — [API reference](/api/products/check/#cracheck_reportpdfget)

```ts
plaid.craCheckReportPdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  third_party_user_token?: ThirdPartyUserToken;
  /** Use this field to include other reports in the PDF. */
  add_ons?: (CraPdfAddOns)[];
  user_token?: UserToken;
}): Promise<CraCheckReportPdfGetResponse>
```

<sub>`POST /cra/check_report/pdf/get` · `craCheckReportPdfGet`</sub>

## `plaid.craCheckReportVerificationGet`

Retrieve various home lending reports for a user — [API reference](/api/products/check/#cracheck_reportverificationget)

```ts
plaid.craCheckReportVerificationGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  /** Specifies which types of home lending reports are expected in the response */
  reports_requested: (CraCheckReportVerificationGetReportType)[];
  employment_refresh_options?: CraCheckReportVerificationGetEmploymentRefreshOptions;
  user_token?: UserToken;
}): Promise<CraCheckReportVerificationGetResponse>
```

<sub>`POST /cra/check_report/verification/get` · `craCheckReportVerificationGet`</sub>

## `plaid.craCheckReportVerificationPdfGet`

Retrieve a Consumer Report as a Verification PDF — [API reference](/api/products/check/#cracheck_reportverificationpdfget)

```ts
plaid.craCheckReportVerificationPdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  third_party_user_token?: ThirdPartyUserToken;
  report_requested?: CraCheckReportVerificationPdfReportType & unknown;
  /** Specifies which types of verification reports to include in the returned PDF. Supported combinations are: `[voa]`, `[employment_refresh]`, `[income]`, or `[voa, income]`. Other combinations are not supported.  */
  reports_requested?: (CraCheckReportVerificationPdfReportType)[];
  /** If `true`, the GSE identifiers (the Report ID and `gse_reference_id`) are omitted from the returned Home Lending Report PDF. Defaults to `false`. These identifiers are always present in the `/cra/check_report/verification/get` JSON response regardless of this field.  */
  hide_gse_details?: boolean;
  user_token?: UserToken;
}): Promise<CraCheckReportVerificationPdfGetResponse>
```

<sub>`POST /cra/check_report/verification/pdf/get` · `craCheckReportVerificationPdfGet`</sub>

## `plaid.craCreditProfileReportGet`

Retrieve the credit profile report for a user — [API reference](/none/)

```ts
plaid.craCreditProfileReportGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id: NewUserId;
  consumer_report_permissible_purpose: ConsumerReportPermissiblePurpose;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  client_report_id: string;
  report_type: CraCreditProfileReportType;
  inquiry_type: CraCreditProfileInquiryType;
  version: CraCreditProfileReportVersion;
}): Promise<CraCreditProfileReportGetResponse>
```

<sub>`POST /cra/credit_profile/report/get` · `craCreditProfileReportGet`</sub>

## `plaid.craLoansApplicationsRegister`

Register loan applications and decisions — [API reference](/none/)

```ts
plaid.craLoansApplicationsRegister(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A list of loan applications to register. */
  applications: (CraLoanApplication)[];
}): Promise<CraLoansApplicationsRegisterResponse>
```

<sub>`POST /cra/loans/applications/register` · `craLoansApplicationsRegister`</sub>

## `plaid.craLoansRegister`

Register a list of loans to their applicants — [API reference](/none/)

```ts
plaid.craLoansRegister(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A list of loans to register. */
  loans: (CraLoanRegister)[];
}): Promise<CraLoansRegisterResponse>
```

<sub>`POST /cra/loans/register` · `craLoansRegister`</sub>

## `plaid.craLoansUnregister`

Unregister a list of loans — [API reference](/none/)

```ts
plaid.craLoansUnregister(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A list of loans to unregister. */
  loans: (CraLoanUnregister)[];
}): Promise<CraLoanUnregisterResponse>
```

<sub>`POST /cra/loans/unregister` · `craLoansUnregister`</sub>

## `plaid.craLoansUpdate`

Update loan data — [API reference](/none/)

```ts
plaid.craLoansUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A list of loans to update. */
  loans: (CraLoanUpdate)[];
}): Promise<CraLoansUpdateResponse>
```

<sub>`POST /cra/loans/update` · `craLoansUpdate`</sub>

## `plaid.craMonitoringInsightsGet`

Retrieve a Monitoring Insights Report — [API reference](/api/products/check/#cramonitoring_insightsget)

```ts
plaid.craMonitoringInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  consumer_report_permissible_purpose: MonitoringConsumerReportPermissiblePurpose;
  user_token?: UserToken;
}): Promise<CraMonitoringInsightsGetResponse>
```

<sub>`POST /cra/monitoring_insights/get` · `craMonitoringInsightsGet`</sub>

## `plaid.craMonitoringInsightsSubscribe`

Subscribe to Monitoring Insights — [API reference](/api/products/check/#cramonitoring_insightssubscribe)

```ts
plaid.craMonitoringInsightsSubscribe(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  /** The Item ID to subscribe for Cash Flow Updates. */
  item_id?: string;
  /** URL to which Plaid will send Cash Flow Updates webhooks, for example when the requested Cash Flow Updates report is ready. */
  webhook: string;
  /** Income categories to include in Cash Flow Updates. If empty or `null`, this field will default to including all possible categories. */
  income_categories?: (CreditBankIncomeCategory)[] | null;
  user_token?: UserToken;
}): Promise<CraMonitoringInsightsSubscribeResponse>
```

<sub>`POST /cra/monitoring_insights/subscribe` · `craMonitoringInsightsSubscribe`</sub>

## `plaid.craMonitoringInsightsUnsubscribe`

Unsubscribe from Monitoring Insights — [API reference](/api/products/check/#cramonitoring_insightsunsubscribe)

```ts
plaid.craMonitoringInsightsUnsubscribe(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  subscription_id: CraMonitoringInsightsSubscriptionId;
}): Promise<CraMonitoringInsightsUnsubscribeResponse>
```

<sub>`POST /cra/monitoring_insights/unsubscribe` · `craMonitoringInsightsUnsubscribe`</sub>

## `plaid.craPartnerInsightsGet`

Retrieve cash flow insights from the bank accounts used for income verification — [API reference](/api/products/income/#crapartner_insightsget)

```ts
plaid.craPartnerInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_tier?: CraUserTier;
}): Promise<CraPartnerInsightsGetResponse>
```

<sub>`POST /cra/partner_insights/get` · `craPartnerInsightsGet`</sub>

## `plaid.craReportGet`

Retrieve a CRA Report for provided user — [API reference](/none/)

```ts
plaid.craReportGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id: NewUserId;
  /** The requested products and their versions, e.g. `[{"product":"cra_qualify","version":"V1"}]`. */
  products: (CraReportGetRequestProduct)[];
  scope?: CraReportScope;
  decision_stage: CraReportDecisionStage;
  consumer_report_permissible_purpose: ConsumerReportPermissiblePurpose;
}): Promise<CraReportGetResponse>
```

<sub>`POST /cra/report/get` · `craReportGet`</sub>

## `plaid.creditAssetReportFreddieMacGet`

Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint. — [API reference](/none/)

```ts
plaid.creditAssetReportFreddieMacGet(input: {
  /** A token that can be shared with a third party auditor to allow them to obtain access to the Asset Report. This token should be stored securely. */
  audit_copy_token: string;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  [key: string]: unknown;
}): Promise<AssetReportFreddieGetResponse>
```

<sub>`POST /credit/asset_report/freddie_mac/get` · `creditAssetReportFreddieMacGet`</sub>

## `plaid.creditAuditCopyTokenCreate`

Create Asset or Income Report Audit Copy Token — [API reference](/api/products/income/#creditaudit_copy_tokencreate)

```ts
plaid.creditAuditCopyTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** List of report tokens; can include at most one VOA/standard Asset Report tokens and one VOE Asset Report Token. */
  report_tokens: (string)[];
}): Promise<CreditAuditCopyTokenCreateResponse>
```

<sub>`POST /credit/audit_copy_token/create` · `creditAuditCopyTokenCreate`</sub>

## `plaid.creditReportAuditCopyRemove`

Remove an Audit Copy token — [API reference](/api/products/income/#creditaudit_copy_tokenremove)

```ts
plaid.creditReportAuditCopyRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `audit_copy_token` granting access to the Audit Copy you would like to revoke. */
  audit_copy_token: string;
}): Promise<CreditAuditCopyTokenRemoveResponse>
```

<sub>`POST /credit/audit_copy_token/remove` · `creditReportAuditCopyRemove`</sub>

## `plaid.creditAuditCopyTokenUpdate`

Update an Audit Copy Token — [API reference](/none/)

```ts
plaid.creditAuditCopyTokenUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `audit_copy_token` you would like to update. */
  audit_copy_token: string;
  /** Array of tokens which the specified Audit Copy Token will be updated with. The types of token supported are asset report token and employment report token. There can be at most 1 of each token type in the array. */
  report_tokens: (AssetReportToken)[];
}): Promise<CreditAuditCopyTokenUpdateResponse>
```

<sub>`POST /credit/audit_copy_token/update` · `creditAuditCopyTokenUpdate`</sub>

## `plaid.creditBankIncomeGet`

Retrieve information from the bank accounts used for income verification — [API reference](/api/products/income/#creditbank_incomeget)

```ts
plaid.creditBankIncomeGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  user_id?: NewUserId;
  options?: CreditBankIncomeGetRequestOptions;
}): Promise<CreditBankIncomeGetResponse>
```

<sub>`POST /credit/bank_income/get` · `creditBankIncomeGet`</sub>

## `plaid.creditBankIncomePdfGet`

Retrieve information from the bank accounts used for income verification in PDF format — [API reference](/api/products/income/#creditbank_incomepdfget)

```ts
plaid.creditBankIncomePdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
}): Promise<CreditBankIncomePdfGetResponse>
```

<sub>`POST /credit/bank_income/pdf/get` · `creditBankIncomePdfGet`</sub>

## `plaid.creditBankIncomeRefresh`

Refresh a user's bank income information — [API reference](/api/products/income/#creditbank_incomerefresh)

```ts
plaid.creditBankIncomeRefresh(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
  options?: CreditBankIncomeRefreshRequestOptions;
}): Promise<CreditBankIncomeRefreshResponse>
```

<sub>`POST /credit/bank_income/refresh` · `creditBankIncomeRefresh`</sub>

## `plaid.creditBankIncomeWebhookUpdate`

Subscribe and unsubscribe to proactive notifications for a user's income profile — [API reference](/api/products/income/#creditbank_incomewebhookupdate)

```ts
plaid.creditBankIncomeWebhookUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
  /** Whether the user should be enabled for proactive webhook notifications when their income changes */
  enable_webhooks: boolean;
}): Promise<CreditBankIncomeWebhookUpdateResponse>
```

<sub>`POST /credit/bank_income/webhook/update` · `creditBankIncomeWebhookUpdate`</sub>

## `plaid.creditBankStatementsUploadsGet`

Retrieve data for a user's uploaded bank statements — [API reference](/api/products/income/#creditbank_statementsuploadsget)

```ts
plaid.creditBankStatementsUploadsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
  options?: CreditBankStatementsUploadsGetRequestOptions;
}): Promise<CreditBankStatementsUploadsGetResponse>
```

<sub>`POST /credit/bank_statements/uploads/get` · `creditBankStatementsUploadsGet`</sub>

## `plaid.creditEmploymentGet`

Retrieve a summary of an individual's employment information — [API reference](/api/products/income/#creditemploymentget)

```ts
plaid.creditEmploymentGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
}): Promise<CreditEmploymentGetResponse>
```

<sub>`POST /credit/employment/get` · `creditEmploymentGet`</sub>

## `plaid.creditFreddieMacReportsGet`

Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint. — [API reference](/none/)

```ts
plaid.creditFreddieMacReportsGet(input: {
  /** A token that can be shared with a third party auditor to allow them to obtain access to the Asset Report. This token should be stored securely. */
  audit_copy_token: string;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<CreditFreddieMacReportsGetResponse>
```

<sub>`POST /credit/freddie_mac/reports/get` · `creditFreddieMacReportsGet`</sub>

## `plaid.creditPayrollIncomeGet`

Retrieve a user's payroll information — [API reference](/api/products/income/#creditpayroll_incomeget)

```ts
plaid.creditPayrollIncomeGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  user_id?: NewUserId;
  options?: CreditPayrollIncomeGetRequestOptions;
}): Promise<CreditPayrollIncomeGetResponse>
```

<sub>`POST /credit/payroll_income/get` · `creditPayrollIncomeGet`</sub>

## `plaid.creditPayrollIncomeParsingConfigUpdate`

Update the parsing configuration for a document income verification — [API reference](/api/products/income/#creditpayroll_incomeparsing_configupdate)

```ts
plaid.creditPayrollIncomeParsingConfigUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
  item_id?: ItemId;
  /** The types of analysis to enable for the document income verification session */
  parsing_config: (IncomeVerificationDocParsingConfig)[];
  [key: string]: unknown;
}): Promise<CreditPayrollIncomeParsingConfigUpdateResponse>
```

<sub>`POST /credit/payroll_income/parsing_config/update` · `creditPayrollIncomeParsingConfigUpdate`</sub>

## `plaid.creditPayrollIncomePrecheck`

Check income verification eligibility and optimize conversion — [API reference](/api/products/income/#creditpayroll_incomeprecheck)

```ts
plaid.creditPayrollIncomePrecheck(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  user_id?: NewUserId;
  /** An array of access tokens corresponding to Items belonging to the user whose eligibility is being checked. Note that if the Items specified here are not already initialized with `transactions`, providing them in this field will cause these Items to be initialized with (and billed for) the Transactions product. */
  access_tokens?: (AccessToken)[];
  employer?: IncomeVerificationPrecheckEmployer;
  us_military_info?: IncomeVerificationPrecheckMilitaryInfo;
  payroll_institution?: IncomeVerificationPrecheckPayrollInstitution;
}): Promise<CreditPayrollIncomePrecheckResponse>
```

<sub>`POST /credit/payroll_income/precheck` · `creditPayrollIncomePrecheck`</sub>

## `plaid.creditPayrollIncomeRefresh`

Refresh a digital payroll income verification — [API reference](/api/products/income/#creditpayroll_incomerefresh)

```ts
plaid.creditPayrollIncomeRefresh(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
  options?: CreditPayrollIncomeRefreshRequestOptions;
}): Promise<CreditPayrollIncomeRefreshResponse>
```

<sub>`POST /credit/payroll_income/refresh` · `creditPayrollIncomeRefresh`</sub>

## `plaid.creditPayrollIncomeRiskSignalsGet`

Retrieve fraud insights for a user's manually uploaded document(s). — [API reference](/api/products/income/#creditpayroll_incomerisk_signalsget)

```ts
plaid.creditPayrollIncomeRiskSignalsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  user_id?: NewUserId;
}): Promise<CreditPayrollIncomeRiskSignalsGetResponse>
```

<sub>`POST /credit/payroll_income/risk_signals/get` · `creditPayrollIncomeRiskSignalsGet`</sub>

## `plaid.creditRelayCreate`

Create a relay token to share an Asset Report with a partner client — [API reference](/api/products/assets/#creditrelaycreate)

```ts
plaid.creditRelayCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** List of report token strings, with at most one token of each report type. Currently only Asset Report token is supported. */
  report_tokens: (string)[];
  /** The `secondary_client_id` is the client id of the third party with whom you would like to share the relay token. */
  secondary_client_id: string;
  /** URL to which Plaid will send webhooks when the Secondary Client successfully retrieves an Asset Report by calling `/credit/relay/get`. */
  webhook?: string | null;
}): Promise<CreditRelayCreateResponse>
```

<sub>`POST /credit/relay/create` · `creditRelayCreate`</sub>

## `plaid.creditRelayGet`

Retrieve the reports associated with a relay token that was shared with you — [API reference](/api/products/assets/#creditrelayget)

```ts
plaid.creditRelayGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `relay_token` granting access to the report you would like to get. */
  relay_token: string;
  report_type: ReportType;
  /** `true` if you would like to retrieve the Asset Report with Insights, `false` otherwise. This field defaults to `false` if omitted. */
  include_insights?: boolean;
}): Promise<AssetReportGetResponse>
```

<sub>`POST /credit/relay/get` · `creditRelayGet`</sub>

## `plaid.creditRelayPdfGet`

Retrieve the PDF reports associated with a relay token that was shared with you (beta) — [API reference](/api/products/assets/#creditrelaypdfget)

```ts
plaid.creditRelayPdfGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `relay_token` granting access to the report you would like to get. */
  relay_token: string;
  report_type: ReportType;
}): Promise<CreditRelayPdfGetResponse>
```

<sub>`POST /credit/relay/pdf/get` · `creditRelayPdfGet`</sub>

## `plaid.creditRelayRefresh`

Refresh a report of a relay token — [API reference](/api/products/assets/#creditrelayrefresh)

```ts
plaid.creditRelayRefresh(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `relay_token` granting access to the report you would like to refresh. */
  relay_token: string;
  report_type: ReportType;
  /** The URL registered to receive webhooks when the report of a relay token has been refreshed. */
  webhook?: string | null;
}): Promise<CreditRelayRefreshResponse>
```

<sub>`POST /credit/relay/refresh` · `creditRelayRefresh`</sub>

## `plaid.creditRelayRemove`

Remove relay token — [API reference](/api/products/assets/#creditrelayremove)

```ts
plaid.creditRelayRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `relay_token` you would like to revoke. */
  relay_token: string;
}): Promise<CreditRelayRemoveResponse>
```

<sub>`POST /credit/relay/remove` · `creditRelayRemove`</sub>

## `plaid.creditSessionsGet`

Retrieve Link sessions for your user — [API reference](/api/products/income/#creditsessionsget)

```ts
plaid.creditSessionsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token: UserToken;
  user_id?: NewUserId;
}): Promise<CreditSessionsGetResponse>
```

<sub>`POST /credit/sessions/get` · `creditSessionsGet`</sub>

## `plaid.dashboardUserGet`

Retrieve a Dashboard user — [API reference](/api/kyc-aml-users/#dashboard_userget)

```ts
plaid.dashboardUserGet(input: {
  dashboard_user_id: DashboardUserId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<DashboardUserGetResponse>
```

<sub>`POST /dashboard_user/get` · `dashboardUserGet`</sub>

## `plaid.dashboardUserList`

List Dashboard users — [API reference](/api/kyc-aml-users/#dashboard_userlist)

```ts
plaid.dashboardUserList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  cursor?: Cursor;
}): Promise<DashboardUserListResponse>
```

<sub>`POST /dashboard_user/list` · `dashboardUserList`</sub>

## `plaid.employersSearch`

(Deprecated) Search employer database — [API reference](/api/employers/#employerssearch)

```ts
plaid.employersSearch(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The employer name to be searched for. */
  query: string;
  /** The Plaid products the returned employers should support. Currently, this field must be set to `"deposit_switch"`. */
  products: (string)[];
}): Promise<EmployersSearchResponse>
```

<sub>`POST /employers/search` · `employersSearch`</sub>

## `plaid.employmentVerificationGet`

(Deprecated) Retrieve a summary of an individual's employment information — [API reference](/api/products/income/#employmentverificationget)

```ts
plaid.employmentVerificationGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<EmploymentVerificationGetResponse>
```

<sub>`POST /employment/verification/get` · `employmentVerificationGet`</sub>

## `plaid.fdxConsentsList`

List FDX Consent Grants for a customer — [Provider docs](https://plaid.com)

```ts
plaid.fdxConsentsList(input: {
  /** Data provider customer identifier whose consent grants to return. */
  customerId: string;
  status?: FdxConsentGrantStatus;
}): Promise<GetConsentsResponse>
```

<sub>`GET /fdx/consents` · `fdxConsentsList`</sub>

## `plaid.fdxConsentsGet`

Get FDX Consent Grant — [Provider docs](https://plaid.com)

```ts
plaid.fdxConsentsGet(input: {
  /** Consent Grant Identifier. Uniquely identifies the consent grant */
  consentId: string;
}): Promise<FdxConsentGrant>
```

<sub>`GET /fdx/consents/{consentId}` · `fdxConsentsGet`</sub>

## `plaid.fdxConsentsRevocationGet`

Retrieve FDX Consent Grant revocation records — [Provider docs](https://plaid.com)

```ts
plaid.fdxConsentsRevocationGet(input: {
  /** Consent Grant Identifier. Uniquely identifies the consent grant */
  consentId: string;
}): Promise<FdxConsentRevocations>
```

<sub>`GET /fdx/consents/{consentId}/revocation` · `fdxConsentsRevocationGet`</sub>

## `plaid.fdxConsentsRevoke`

Revoke FDX Consent Grant — [Provider docs](https://plaid.com)

```ts
plaid.fdxConsentsRevoke(input: {
  initiator: FdxPartyType;
  reason: FdxUpdateReason;
  /** Additional information or description of an `OTHER` reason */
  otherReason?: string;
  /** When the revocation was effected on the initiator's side */
  updatedTime?: string;
  /** Consent Grant Identifier. Uniquely identifies the consent grant */
  consentId: string;
  [key: string]: unknown;
}): Promise<undefined>
```

<sub>`PUT /fdx/consents/{consentId}/revocation` · `fdxConsentsRevoke`</sub>

## `plaid.fdxNotifications`

Webhook receiver for fdx notifications — [API reference](/api/fdx/notifications/#post)

```ts
plaid.fdxNotifications(input: {
  /** Id of notification */
  notificationId: string;
  type: FdxNotificationType;
  /** An optional initiator-defined event subtype code or description if the event type needs to be further categorized or described. */
  subtype?: string;
  sentOn: FdxTimestamp;
  category: FdxNotificationCategory;
  severity?: FdxNotificationSeverity;
  priority?: FdxNotificationPriority;
  publisher?: FdxParty;
  subscriber?: FdxParty;
  notificationPayload: FdxNotificationPayload;
  url?: FdxHateoasLink;
}): Promise<undefined>
```

<sub>`POST /fdx/notifications` · `fdxNotifications`</sub>

## `plaid.getRecipient`

Get Recipient — [Provider docs](https://plaid.com)

```ts
plaid.getRecipient(input: {
  /** Recipient Identifier. Uniquely identifies the recipient */
  recipientId: string;
}, options?: { headers?: { "OAUTH-STATE-ID"?: string } }): Promise<GetRecipientResponse>
```

<sub>`GET /fdx/recipient/{recipientId}` · `getRecipient`</sub>

## `plaid.getRecipients`

Get Recipients — [Provider docs](https://plaid.com)

```ts
plaid.getRecipients(): Promise<GetRecipientsResponse>
```

<sub>`GET /fdx/recipients` · `getRecipients`</sub>

## `plaid.identityVerificationAutofillCreate`

Create autofill for an Identity Verification — [API reference](/api/products/identity-verification/#identity_verificationautofillcreate)

```ts
plaid.identityVerificationAutofillCreate(input: {
  identity_verification_id: IdentityVerificationId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<IdentityVerificationAutofillCreateResponse>
```

<sub>`POST /identity_verification/autofill/create` · `identityVerificationAutofillCreate`</sub>

## `plaid.identityVerificationCreate`

Create a new Identity Verification — [API reference](/api/products/identity-verification/#identity_verificationcreate)

```ts
plaid.identityVerificationCreate(input: {
  client_user_id?: ClientUserId;
  user_id?: PlaidUserId;
  /** A flag specifying whether you would like Plaid to expose a shareable URL for the verification being created. */
  is_shareable: boolean;
  template_id: IdentityVerificationTemplateId;
  gave_consent: IdentityVerificationConsent;
  user?: IdentityVerificationCreateRequestUser;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  is_idempotent?: IdempotencyFlag;
}): Promise<IdentityVerificationCreateResponse>
```

<sub>`POST /identity_verification/create` · `identityVerificationCreate`</sub>

## `plaid.identityVerificationGet`

Retrieve Identity Verification — [API reference](/api/products/identity-verification/#identity_verificationget)

```ts
plaid.identityVerificationGet(input: {
  identity_verification_id: IdentityVerificationId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<IdentityVerificationGetResponse>
```

<sub>`POST /identity_verification/get` · `identityVerificationGet`</sub>

## `plaid.identityVerificationList`

List Identity Verifications — [API reference](/api/products/identity-verification/#identity_verificationlist)

```ts
plaid.identityVerificationList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  template_id: IdentityVerificationTemplateId;
  client_user_id?: ClientUserId;
  /** A unique user identifier, created by calling `/user/create`. Either a `user_id` or the `client_user_id` must be provided. The `user_id` may only be used instead of the `client_user_id` if you were not a pre-existing user of `/user/create` as of December 10, 2025, or if you have since [migrated to the new User APIs](https://plaid.com/docs/api/users/migrate-to-new-user-apis); for more details, see [New User APIs](https://plaid.com/docs/api/users/user-apis). If both this field and the `client_user_id` are present in the request, the `user_id` must have been created from the provided `client_user_id`. */
  user_id?: PlaidUserId | null;
  cursor?: Cursor;
}): Promise<IdentityVerificationListResponse>
```

<sub>`POST /identity_verification/list` · `identityVerificationList`</sub>

## `plaid.identityVerificationRetry`

Retry an Identity Verification — [API reference](/api/products/identity-verification/#identity_verificationretry)

```ts
plaid.identityVerificationRetry(input: {
  client_user_id: ClientUserId;
  template_id: IdentityVerificationTemplateId;
  strategy: Strategy;
  user?: IdentityVerificationRequestUser;
  steps?: IdentityVerificationRetryRequestStepsObject;
  /** A flag specifying whether you would like Plaid to expose a shareable URL for the verification being retried. If a value for this flag is not specified, the `is_shareable` setting from the original verification attempt will be used. */
  is_shareable?: boolean | null;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<IdentityVerificationRetryResponse>
```

<sub>`POST /identity_verification/retry` · `identityVerificationRetry`</sub>

## `plaid.identityDocumentsUploadsGet`

Returns uploaded document identity — [API reference](/api/products/identity/#identitydocumentsuploadsget)

```ts
plaid.identityDocumentsUploadsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: IdentityDocumentsUploadsGetRequestOptions;
}): Promise<IdentityDocumentsUploadsGetResponse>
```

<sub>`POST /identity/documents/uploads/get` · `identityDocumentsUploadsGet`</sub>

## `plaid.identityGet`

Retrieve identity data — [API reference](/api/products/identity/#identityget)

```ts
plaid.identityGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: IdentityGetRequestOptions;
}): Promise<IdentityGetResponse>
```

<sub>`POST /identity/get` · `identityGet`</sub>

## `plaid.identityMatch`

Retrieve identity match score — [API reference](/api/products/identity/#identitymatch)

```ts
plaid.identityMatch(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  user?: IdentityMatchUser;
  options?: IdentityMatchRequestOptions;
}): Promise<IdentityMatchResponse>
```

<sub>`POST /identity/match` · `identityMatch`</sub>

## `plaid.identityRefresh`

Refresh identity data — [API reference](/api/products/identity/#identityrefresh)

```ts
plaid.identityRefresh(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
}): Promise<IdentityRefreshResponse>
```

<sub>`POST /identity/refresh` · `identityRefresh`</sub>

## `plaid.incomeVerificationCreate`

(Deprecated) Create an income verification instance — [API reference](/api/products/income/#incomeverificationcreate)

```ts
plaid.incomeVerificationCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The URL endpoint to which Plaid should send webhooks related to the progress of the income verification process. */
  webhook: string;
  /** The ID of a precheck created with `/income/verification/precheck`. Will be used to improve conversion of the income verification flow. */
  precheck_id?: string;
  options?: IncomeVerificationCreateRequestOptions;
}): Promise<IncomeVerificationCreateResponse>
```

<sub>`POST /income/verification/create` · `incomeVerificationCreate`</sub>

## `plaid.incomeVerificationDocumentsDownload`

(Deprecated) Download the original documents used for income verification — [API reference](/api/products/income/#incomeverificationdocumentsdownload)

```ts
plaid.incomeVerificationDocumentsDownload(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the verification. */
  income_verification_id?: string | null;
  access_token?: AccessTokenNullable;
  /** The document ID to download. If passed, a single document will be returned in the resulting zip file, rather than all document */
  document_id?: string | null;
}): Promise<string>
```

<sub>`POST /income/verification/documents/download` · `incomeVerificationDocumentsDownload`</sub>

## `plaid.incomeVerificationPaystubsGet`

(Deprecated) Retrieve information from the paystubs used for income verification — [API reference](/api/products/income/#incomeverificationpaystubsget)

```ts
plaid.incomeVerificationPaystubsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the verification for which to get paystub information. */
  income_verification_id?: string | null;
  access_token?: AccessTokenNullable;
}): Promise<IncomeVerificationPaystubsGetResponse>
```

<sub>`POST /income/verification/paystubs/get` · `incomeVerificationPaystubsGet`</sub>

## `plaid.incomeVerificationPrecheck`

(Deprecated) Check digital income verification eligibility and optimize conversion — [API reference](/api/products/income/#incomeverificationprecheck)

```ts
plaid.incomeVerificationPrecheck(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user?: IncomeVerificationPrecheckUser;
  employer?: IncomeVerificationPrecheckEmployer;
  payroll_institution?: IncomeVerificationPrecheckPayrollInstitution;
  transactions_access_token?: AccessTokenNullable;
  /** An array of access tokens corresponding to Items belonging to the user whose eligibility is being checked. Note that if the Items specified here are not already initialized with `transactions`, providing them in this field will cause these Items to be initialized with (and billed for) the Transactions product. */
  transactions_access_tokens?: (AccessToken)[];
  us_military_info?: IncomeVerificationPrecheckMilitaryInfo;
}): Promise<IncomeVerificationPrecheckResponse>
```

<sub>`POST /income/verification/precheck` · `incomeVerificationPrecheck`</sub>

## `plaid.incomeVerificationTaxformsGet`

(Deprecated) Retrieve information from the tax documents used for income verification — [API reference](/api/products/income/#incomeverificationtaxformsget)

```ts
plaid.incomeVerificationTaxformsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the verification. */
  income_verification_id?: string | null;
  access_token?: AccessTokenNullable;
}): Promise<IncomeVerificationTaxformsGetResponse>
```

<sub>`POST /income/verification/taxforms/get` · `incomeVerificationTaxformsGet`</sub>

## `plaid.institutionsGet`

Get details of all supported institutions — [API reference](/api/institutions/#institutionsget)

```ts
plaid.institutionsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The total number of Institutions to return. */
  count: number;
  /** The number of Institutions to skip. */
  offset: number;
  /** Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard.  In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied.  */
  country_codes: (CountryCode)[];
  options?: InstitutionsGetRequestOptions;
}): Promise<InstitutionsGetResponse>
```

<sub>`POST /institutions/get` · `institutionsGet`</sub>

## `plaid.institutionsGetById`

Get details of an institution — [API reference](/api/institutions/#institutionsget_by_id)

```ts
plaid.institutionsGetById(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the institution to get details about */
  institution_id: string;
  /** Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard. In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied.  */
  country_codes: (CountryCode)[];
  options?: InstitutionsGetByIdRequestOptions;
}): Promise<InstitutionsGetByIdResponse>
```

<sub>`POST /institutions/get_by_id` · `institutionsGetById`</sub>

## `plaid.institutionsSearch`

Search institutions — [API reference](/api/institutions/#institutionssearch)

```ts
plaid.institutionsSearch(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The search query. Institutions with names matching the query are returned */
  query: string;
  /** Filter the Institutions based on whether they support all products listed in `products`. Provide `null` to get institutions regardless of supported products. Note that when `auth` is specified as a product, if you are enabled for Instant Match or Automated Micro-deposits, institutions that support those products will be returned even if `auth` is not present in their product array. To search for Transfer support, use `auth`; to search for Signal Transaction Scores support, use `balance`. */
  products?: (Products)[] | null;
  /** Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard. In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied.  */
  country_codes: (CountryCode)[];
  options?: InstitutionsSearchRequestOptions;
}): Promise<InstitutionsSearchResponse>
```

<sub>`POST /institutions/search` · `institutionsSearch`</sub>

## `plaid.investmentsAuthGet`

Get data needed to authorize an investments transfer — [API reference](/api/products/investments-move/#investmentsauthget)

```ts
plaid.investmentsAuthGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: InvestmentsAuthGetRequestOptions;
}): Promise<InvestmentsAuthGetResponse>
```

<sub>`POST /investments/auth/get` · `investmentsAuthGet`</sub>

## `plaid.investmentsHoldingsGet`

Get Investment holdings — [API reference](/api/products/investments/#investmentsholdingsget)

```ts
plaid.investmentsHoldingsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: InvestmentHoldingsGetRequestOptions;
}): Promise<InvestmentsHoldingsGetResponse>
```

<sub>`POST /investments/holdings/get` · `investmentsHoldingsGet`</sub>

## `plaid.investmentsRefresh`

Refresh investment data — [API reference](/api/products/investments/#investmentsrefresh)

```ts
plaid.investmentsRefresh(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
}): Promise<InvestmentsRefreshResponse>
```

<sub>`POST /investments/refresh` · `investmentsRefresh`</sub>

## `plaid.investmentsTransactionsGet`

Get investment transactions — [API reference](/api/products/investments/#investmentstransactionsget)

```ts
plaid.investmentsTransactionsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The earliest date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD. */
  start_date: string;
  /** The most recent date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD. */
  end_date: string;
  options?: InvestmentsTransactionsGetRequestOptions;
}): Promise<InvestmentsTransactionsGetResponse>
```

<sub>`POST /investments/transactions/get` · `investmentsTransactionsGet`</sub>

## `plaid.issuesGet`

Get an Issue — [API reference](/api/products/issues/#issuesget)

```ts
plaid.issuesGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The unique identifier of the issue to retrieve. */
  issue_id: string;
}): Promise<IssuesGetResponse>
```

<sub>`POST /issues/get` · `issuesGet`</sub>

## `plaid.issuesSearch`

Search for an Issue — [API reference](/api/products/issues#issuessearch)

```ts
plaid.issuesSearch(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A unique identifier for the Plaid Item. */
  item_id?: string;
  /** A unique identifier for the Link session. */
  link_session_id?: string;
  /** The `request_id` for the Link session that might have had an institution connection issue. */
  link_session_request_id?: string;
}): Promise<IssuesSearchResponse>
```

<sub>`POST /issues/search` · `issuesSearch`</sub>

## `plaid.issuesSubscribe`

Subscribe to an Issue — [API reference](/api/products/issues/#issuessubscribe)

```ts
plaid.issuesSubscribe(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The unique identifier of the issue to subscribe to. */
  issue_id: string;
  /** The webhook URL where notifications should be sent when the issue status changes. */
  webhook: string;
}): Promise<IssuesSubscribeResponse>
```

<sub>`POST /issues/subscribe` · `issuesSubscribe`</sub>

## `plaid.itemAccessTokenInvalidate`

Invalidate access_token — [API reference](/api/items/#itemaccess_tokeninvalidate)

```ts
plaid.itemAccessTokenInvalidate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<ItemAccessTokenInvalidateResponse>
```

<sub>`POST /item/access_token/invalidate` · `itemAccessTokenInvalidate`</sub>

## `plaid.itemActivityList`

List a historical log of user consent events — [Provider docs](https://plaid.com)

```ts
plaid.itemActivityList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token?: AccessToken;
  /** Cursor used for pagination. */
  cursor?: string;
  count?: number;
}): Promise<ItemActivityListResponse>
```

<sub>`POST /item/activity/list` · `itemActivityList`</sub>

## `plaid.itemApplicationList`

List a user's connected applications — [Provider docs](https://plaid.com)

```ts
plaid.itemApplicationList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token?: AccessTokenNullable;
}): Promise<ItemApplicationListResponse>
```

<sub>`POST /item/application/list` · `itemApplicationList`</sub>

## `plaid.itemApplicationScopesUpdate`

Update the scopes of access for a particular application — [Provider docs](https://plaid.com)

```ts
plaid.itemApplicationScopesUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  application_id: ApplicationId;
  scopes: Scopes;
  state?: ScopesState;
  context: ScopesContext;
}): Promise<ItemApplicationScopesUpdateResponse>
```

<sub>`POST /item/application/scopes/update` · `itemApplicationScopesUpdate`</sub>

## `plaid.itemApplicationUnlink`

Unlink a user's connected application — [API reference](none)

```ts
plaid.itemApplicationUnlink(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  application_id: ApplicationId;
}): Promise<ItemApplicationUnlinkResponse>
```

<sub>`POST /item/application/unlink` · `itemApplicationUnlink`</sub>

## `plaid.itemGet`

Retrieve an Item — [API reference](/api/items/#itemget)

```ts
plaid.itemGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<ItemGetResponse>
```

<sub>`POST /item/get` · `itemGet`</sub>

## `plaid.itemImport`

Import Item — [Provider docs](https://plaid.com)

```ts
plaid.itemImport(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  institution_id?: ItemImportRequestInstitutionId;
  /** Array of product strings */
  products: (Products)[];
  user_auth: ItemImportRequestUserAuth;
  options?: ItemImportRequestOptions;
}): Promise<ItemImportResponse>
```

<sub>`POST /item/import` · `itemImport`</sub>

## `plaid.itemProductsTerminate`

Terminate products for an Item — [API reference](/api/items/#itemproductsterminate)

```ts
plaid.itemProductsTerminate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  reason_code: ProductsTerminateReasonCode;
  /** Additional context or details about the reason for terminating products on the Item. Personally identifiable information, such as an email address or phone number, should not be included in the `reason_note`. */
  reason_note?: string | null;
}): Promise<ItemProductsTerminateResponse>
```

<sub>`POST /item/products/terminate` · `itemProductsTerminate`</sub>

## `plaid.itemCreatePublicToken`

(Deprecated) Create public token — [API reference](/api/link/#itempublic_tokencreate)

```ts
plaid.itemCreatePublicToken(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<ItemPublicTokenCreateResponse>
```

<sub>`POST /item/public_token/create` · `itemCreatePublicToken`</sub>

## `plaid.itemPublicTokenExchange`

Exchange public token for an access token — [API reference](/api/items/#itempublic_tokenexchange)

```ts
plaid.itemPublicTokenExchange(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Your `public_token`, obtained from the Link `onSuccess` callback or `/sandbox/public_token/create`. */
  public_token: string;
}): Promise<ItemPublicTokenExchangeResponse>
```

<sub>`POST /item/public_token/exchange` · `itemPublicTokenExchange`</sub>

## `plaid.itemRemove`

Remove an Item — [API reference](/api/items/#itemremove)

```ts
plaid.itemRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  reason_code?: ItemRemoveReasonCode;
  /** Additional context or details about the reason for removing the Item. Personally identifiable information, such as an email address or phone number, should not be included in the `reason_note`. */
  reason_note?: string | null;
}): Promise<ItemRemoveResponse>
```

<sub>`POST /item/remove` · `itemRemove`</sub>

## `plaid.itemWebhookUpdate`

Update Webhook URL — [API reference](/api/items/#itemwebhookupdate)

```ts
plaid.itemWebhookUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The new webhook URL to associate with the Item. To remove a webhook from an Item, set to `null`. */
  webhook?: string | null;
}): Promise<ItemWebhookUpdateResponse>
```

<sub>`POST /item/webhook/update` · `itemWebhookUpdate`</sub>

## `plaid.liabilitiesGet`

Retrieve Liabilities data — [API reference](/api/products/liabilities/#liabilitiesget)

```ts
plaid.liabilitiesGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  options?: LiabilitiesGetRequestOptions;
}): Promise<LiabilitiesGetResponse>
```

<sub>`POST /liabilities/get` · `liabilitiesGet`</sub>

## `plaid.linkDeliveryCreate`

Create Hosted Link session — [API reference](/none/)

```ts
plaid.linkDeliveryCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A `link_token` from a previous invocation of `/link/token/create`. */
  link_token: string;
  options?: LinkDeliveryOptions;
}): Promise<LinkDeliveryCreateResponse>
```

<sub>`POST /link_delivery/create` · `linkDeliveryCreate`</sub>

## `plaid.linkDeliveryGet`

Get Hosted Link session — [API reference](/none/)

```ts
plaid.linkDeliveryGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID for the Hosted Link session from a previous invocation of `/link_delivery/create`. */
  link_delivery_session_id: string;
}): Promise<LinkDeliveryGetResponse>
```

<sub>`POST /link_delivery/get` · `linkDeliveryGet`</sub>

## `plaid.linkOauthCorrelationIdExchange`

Exchange the Link Correlation ID for a Link Token — [API reference](/api/oauth/#linkcorrelationid)

```ts
plaid.linkOauthCorrelationIdExchange(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A `link_correlation_id` from a received OAuth redirect URI callback */
  link_correlation_id: string;
}): Promise<LinkOAuthCorrelationIdExchangeResponse>
```

<sub>`POST /link/oauth/correlation_id/exchange` · `linkOauthCorrelationIdExchange`</sub>

## `plaid.linkTokenCreate`

Create Link Token — [API reference](/api/link/#linktokencreate)

```ts
plaid.linkTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The name of your application, as it should be displayed in Link. Maximum length of 30 characters. If a value longer than 30 characters is provided, Link will display "This Application" instead. */
  client_name: string;
  /** The language that Link should be displayed in. When initializing with Identity Verification, this field is not used; for more details, see [Identity Verification supported languages](https://plaid.com/docs/identity-verification/#supported-languages).  Supported languages are: - Danish (`'da'`) - Dutch (`'nl'`) - English (`'en'`) - Estonian (`'et'`) - French (`'fr'`) - German (`'de'`) - Hindi (`'hi'`) - Italian (`'it'`) - Latvian (`'lv'`) - Lithuanian (`'lt'`) - Norwegian (`'no'`) - Polish (`'pl'`) - Portuguese (`'pt'`) - Romanian (`'ro'`) - Spanish (`'es'`) - Swedish (`'sv'`) - Vietnamese (`'vi'`)  When using a Link customization, the language configured here must match the setting in the customization, or the customization will not be applied. */
  language: string;
  /** Specify an array of Plaid-supported country codes using the ISO-3166-1 alpha-2 country code standard. Institutions from all listed countries will be shown. For a complete mapping of supported products by country, see https://support.plaid.com/hc/en-us/articles/27895826947735-What-Plaid-products-are-supported-in-each-country-and-region. For access to additional countries beyond what you have been approved for, [contact sales](https://plaid.com/contact/), your account manager, or support.  If using Identity Verification, `country_codes` should be set to the country where your company is based, not the country where your user is located. For all other products, `country_codes` represents the location of your user's financial institution.  If Link is launched with multiple country codes, only products that you are enabled for in all countries will be used by Link. While all countries are enabled by default in Sandbox, in Production only the countries you have requested access for are shown. To request access to additional countries, [file a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access) via the Plaid dashboard.  If using a Link customization, make sure the country codes in the customization match those specified in `country_codes`, or the customization may not be applied.  If using the Auth features Instant Match, Instant Micro-deposits, Same-Day Micro-deposits, Automated Micro-deposits, or Database Auth, `country_codes` must be set to `['US']`. */
  country_codes: (CountryCode)[];
  user?: LinkTokenCreateRequestUser;
  /** A `user_id` generated using `/user/create`. Required for integrations that began using Plaid Protect, Multi-Item Link, or Plaid Check Consumer Report after December 10, 2025. For more details, see [New User APIs](https://plaid.com/docs/api/users/user-apis). One of either the `user_id` or the `user` field is required. */
  user_id?: string;
  /** List of Plaid product(s) that the linked Item must support. If launching Link in update mode, should be omitted (unless you are using update mode to add a credit product, such as Assets, Statements, Income, or Plaid Check Consumer Report, to an existing Item); at least one `product` is required otherwise.  To maximize the number of institutions and accounts available, initialize Link with the minimal product set required for your use case, as the products specified will limit which institutions and account types will be available to your users in Link. Only institutions that support *all* requested products can be selected; if a user attempts to select an institution that does not support a listed product, a "Connectivity not supported" error message will appear in Link. For each specified product, the Item connected by the user must contain at least one compatible account. For details on compatible product / account type combinations, see [the account type/product support matrix](https://plaid.com/docs/api/accounts/#account-type--product-support-matrix).  To add products without limiting the institution list or account types, use the [`optional_products`](https://plaid.com/docs/api/link/#link-token-create-request-optional-products) or  [`required_if_supported_products`](https://plaid.com/docs/api/link/#link-token-create-request-required-if-supported-products) fields. Products can also be added to an Item by calling the product endpoint after obtaining an access token; this may require the product to be listed in the [`additional_consented_products`](https://plaid.com/docs/api/link/#link-token-create-request-additional-consented-products) array. For details, see [Choosing when to initialize products](https://plaid.com/docs/link/initializing-products/).  `balance` is *not* a valid value, the Balance product does not require explicit initialization and will automatically be initialized when any other product is initialized.  If launching Link with CRA products, `cra_base_report` is required and must be included in the `products` array.  Note that, unless you have opted to disable Instant Match support, institutions that support Instant Match will also be shown in Link if `auth` is specified as a product, even though these institutions do not contain `auth` in their product array.  In Production, you will be billed for each product that you specify when initializing Link. Note that a product cannot be removed from an Item once the Item has been initialized with that product. To stop billing on an Item for subscription-based products, such as Liabilities, Investments, and Transactions, remove the Item via `/item/remove`. */
  products?: (Products)[] | null;
  /** List of Plaid product(s) you wish to use only if the institution and account(s) selected by the user support the product. Institutions that do not support these products will still be shown in Link. The products will only be extracted and billed if the user selects an institution and account type that supports them.  There should be no overlap between this array and the `products`, `optional_products`, or `additional_consented_products` arrays. The `products` array must have at least one product.  For more details on using this feature, see [Required if Supported Products](https://plaid.com/docs/link/initializing-products/#required-if-supported-products). */
  required_if_supported_products?: (Products)[] | null;
  /** List of Plaid product(s) that will enhance the consumer's use case, but that your app can function without. Plaid will attempt to fetch data for these products on a best-effort basis, and failure to support these products will not affect Item creation.  There should be no overlap between this array and the `products`, `required_if_supported_products`, or `additional_consented_products` arrays. The `products` array must have at least one product.  For more details on using this feature, see [Optional Products](https://plaid.com/docs/link/initializing-products/#optional-products). */
  optional_products?: (Products)[] | null;
  /** List of additional Plaid product(s) you wish to collect consent for to support your use case. These products will not be billed until you start using them by calling the relevant endpoints.  `balance` is *not* a valid value, the Balance product does not require explicit initialization and will automatically have consent collected.  Institutions that do not support these products will still be shown in Link.  There should be no overlap between this array and the `products` or `required_if_supported_products` arrays.  If you include `signal` in `additional_consented_products`, you will need to call [`/signal/prepare`](https://plaid.com/docs/api/products/signal/#signalprepare) before calling `/signal/evaluate` for the first time on an Item in order to get the most accurate results. For more details, see [`/signal/prepare`](https://plaid.com/docs/api/products/signal/#signalprepare). */
  additional_consented_products?: (Products)[] | null;
  /** The destination URL to which any webhooks should be sent. Note that webhooks for Payment Initiation (e-wallet transactions only), Transfer, Bank Transfer (including Auth micro-deposit notification webhooks), Monitor, and Identity Verification are configured via the Dashboard instead. In update mode, this field will not have an effect; to update the webhook receiver endpoint for an existing Item, use `/item/webhook/update` instead. */
  webhook?: string;
  /** The `access_token` associated with the Item to update or reference, used when updating, modifying, or accessing an existing `access_token`. Used when launching Link in update mode, when completing the Same-Day Micro-deposit (manual) flow, or (optionally) when initializing Link for a returning user as part of the Transfer UI flow. */
  access_token?: string | null;
  /** A list of access tokens associated with the items to update in Link update mode for the Assets product. Using this instead of the `access_token` field allows the updating of multiple items at once. This feature is in closed beta, please contact your account manager for more info. */
  access_tokens?: (string)[];
  /** The name of the Link customization from the Plaid Dashboard to be applied to Link. If not specified, the `default` customization will be used. When using a Link customization, the language in the customization must match the language selected via the `language` parameter, and the countries in the customization should match the country codes selected via `country_codes`. */
  link_customization_name?: string;
  appearance_mode?: LinkTokenCreateRequestAppearanceMode;
  redirect_uri?: LinkTokenCreateRequestRedirectUri;
  /** The name of your app's Android package. Required if using the `link_token` to initialize Link on Android. Any package name specified here must also be added to the Allowed Android package names setting on the [developer dashboard](https://dashboard.plaid.com/team/api). When creating a `link_token` for initializing Link on other platforms, `android_package_name` must be left blank and `redirect_uri` should be used instead. */
  android_package_name?: string;
  institution_data?: LinkTokenCreateInstitutionData;
  card_switch?: LinkTokenCreateCardSwitch;
  account_filters?: LinkTokenAccountFilters;
  eu_config?: LinkTokenEuConfig;
  /** Used for certain legacy use cases */
  institution_id?: string;
  payment_configuration?: LinkTokenCreateRequestPaymentConfiguration;
  payment_initiation?: LinkTokenCreateRequestPaymentInitiation;
  employment?: LinkTokenCreateRequestEmployment;
  income_verification?: LinkTokenCreateRequestIncomeVerification;
  base_report?: LinkTokenCreateRequestBaseReport;
  credit_partner_insights?: LinkTokenCreateRequestCreditPartnerInsights;
  cra_options?: LinkTokenCreateRequestCraOptions;
  consumer_report_permissible_purpose?: ConsumerReportPermissiblePurpose;
  auth?: LinkTokenCreateRequestAuth;
  transfer?: LinkTokenCreateRequestTransfer;
  update?: LinkTokenCreateRequestUpdate;
  identity_verification?: LinkTokenCreateRequestIdentityVerification;
  statements?: LinkTokenCreateRequestStatements;
  /** A third party user token associated with the current user. */
  third_party_user_token?: string;
  investments?: LinkTokenInvestments;
  investments_auth?: LinkTokenInvestmentsAuth;
  hosted_link?: LinkTokenCreateHostedLink;
  transactions?: LinkTokenTransactions;
  cashflow_report?: LinkTokenCashflowReport;
  /** If `true`, request a CRA connection. Defaults to `false`. */
  cra_enabled?: boolean;
  identity?: LinkTokenCreateIdentity;
  /** If `true`, indicates that client supports linking FinanceKit / AppleCard items. Defaults to `false`. */
  financekit_supported?: boolean;
  /** If `true`, enable linking multiple items in the same Link session. Defaults to `false`. */
  enable_multi_item_link?: boolean;
  /** A user token generated using `/user/create`. Any Item created during the Link session will be associated with the user. Integrations that began using Plaid Protect, Multi-Item Link, or Plaid Check Consumer Report before December 10, 2025 use this field instead of the `user_id`. */
  user_token?: string;
}): Promise<LinkTokenCreateResponse>
```

<sub>`POST /link/token/create` · `linkTokenCreate`</sub>

## `plaid.linkTokenGet`

Get Link Token — [API reference](/api/link/#linktokenget)

```ts
plaid.linkTokenGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A `link_token` from a previous invocation of `/link/token/create` */
  link_token: string;
}): Promise<LinkTokenGetResponse>
```

<sub>`POST /link/token/get` · `linkTokenGet`</sub>

## `plaid.networkStatusGet`

Check a user's Plaid Network status — [API reference](/api/network/#networkstatusget)

```ts
plaid.networkStatusGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user: NetworkStatusGetUser;
  /** The id of a template defined in Plaid Dashboard. This field is used if you have additional criteria that you want to check against (e.g. Layer eligibility). */
  template_id?: string;
}): Promise<NetworkStatusGetResponse>
```

<sub>`POST /network/status/get` · `networkStatusGet`</sub>

## `plaid.oauthIntrospect`

Get metadata about an OAuth token — [API reference](/api/oauth/#oauthintrospect)

```ts
plaid.oauthIntrospect(input: {
  token: OAuthAnyToken;
  client_id?: ApiClientId;
  client_secret?: OauthApiSecret;
  secret?: OauthApiSecret;
}): Promise<OAuthIntrospectResponse>
```

<sub>`POST /oauth/introspect` · `oauthIntrospect`</sub>

## `plaid.oauthRevoke`

Revoke an OAuth token — [API reference](/api/oauth/#oauthrevoke)

```ts
plaid.oauthRevoke(input: {
  token: OAuthAnyToken;
  client_id?: ApiClientId;
  client_secret?: OauthApiSecret;
  secret?: OauthApiSecret;
}): Promise<OAuthRevokeResponse>
```

<sub>`POST /oauth/revoke` · `oauthRevoke`</sub>

## `plaid.oauthToken`

Create or refresh an OAuth access token — [API reference](/api/oauth/#oauthtoken)

```ts
plaid.oauthToken(input: {
  grant_type: OAuthGrantType;
  client_id?: ApiClientId;
  client_secret?: OauthApiSecret;
  secret?: OauthApiSecret;
  scope?: OAuthScope;
  refresh_token?: OAuthRefreshToken;
  /** URI of the target resource server */
  resource?: string;
  /** Used when exchanging a token. The meaning depends on the `subject_token_type`:  - For `urn:plaid:params:tokens:user`: Must be the same as the `client_id`. - For `urn:plaid:params:oauth:user-token`: The other `client_id` to exchange tokens to. - For `urn:plaid:params:credit:multi-user`:  a `client_id` or one of the supported CRA partner URNs: `urn:plaid:params:cra-partner:experian`, `urn:plaid:params:cra-partner:fannie-mae`, or `urn:plaid:params:cra-partner:freddie-mac`. */
  audience?: string;
  /** Token representing the subject. The meaning depends on the `subject_token_type`. For `urn:plaid:params:tokens:user`, the `subject_token` must be a Plaid-issued user token from the `/user/create` endpoint. For `urn:plaid:params:oauth:user-token`, the `subject_token` must be an OAuth refresh token issued from the `/oauth/token` endpoint. */
  subject_token?: string;
  subject_token_type?: OAuthSubjectTokenType;
}): Promise<OAuthTokenResponse>
```

<sub>`POST /oauth/token` · `oauthToken`</sub>

## `plaid.partnerCustomerCreate`

Creates a new end customer for a Plaid reseller. — [API reference](/api/partner/#partnercustomercreate)

```ts
plaid.partnerCustomerCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The company name of the end customer being created. This will be used to display the end customer in the Plaid Dashboard. It will not be shown to end users. */
  company_name: string;
  /** Denotes whether or not the partner has completed attestation of diligence for the end customer to be created. */
  is_diligence_attested: boolean;
  /** The products to be enabled for the end customer. If empty or `null`, this field will default to the products enabled for the reseller at the time this endpoint is called. */
  products?: (Products)[];
  /** If `true`, the end customer's default Link customization will be set to match the partner's. You can always change the end customer's Link customization in the Plaid Dashboard. See the [Link Customization docs](https://plaid.com/docs/link/customization/) for more information. If you require the ability to programmatically create end customers using multiple different Link customization profiles, contact your Plaid account manager for assistance.  Important: Data Transparency Messaging (DTM) use cases will not be copied to the end customer's Link customization unless the **Publish changes** button is clicked after the use cases are applied. Link will not work in Production unless the end customer's DTM use cases are configured. For more details, see [Data Transparency Messaging](https://plaid.com/docs/link/data-transparency-messaging-migration-guide/). */
  create_link_customization?: boolean;
  /** Base64-encoded representation of the end customer's logo. Must be a PNG of size 1024x1024 under 4MB. The logo will be shared with financial institutions and shown to the end user during Link flows. A logo is required if `create_link_customization` is `true`. If `create_link_customization` is `false` and the logo is omitted, the partner's logo will be used if one exists, otherwise a stock logo will be used. */
  logo?: string;
  /** The end customer's legal name. This will be shared with financial institutions as part of the OAuth registration process. It will not be shown to end users. */
  legal_entity_name: string;
  /** The end customer's website. */
  website: string;
  /** The name of the end customer's application. This will be shown to end users when they go through the Plaid Link flow. The application name must be unique and cannot match the name of another application already registered with Plaid. */
  application_name: string;
  technical_contact?: PartnerEndCustomerTechnicalContact;
  billing_contact?: PartnerEndCustomerBillingContact;
  customer_support_info?: PartnerEndCustomerCustomerSupportInfo;
  address: PartnerEndCustomerAddress;
  /** Denotes whether the partner has forwarded the Plaid bank addendum to the end customer. */
  is_bank_addendum_completed: boolean;
  assets_under_management?: PartnerEndCustomerAssetsUnderManagement;
  /** A list of URIs indicating the destination(s) where a user can be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or another app. URIs should not contain any query parameters. When used in Production, URIs must use https. To modify redirect URIs for an end customer after creating them, go to the end customer's [API page](https://dashboard.plaid.com/team/api) in the Dashboard. */
  redirect_uris?: (string)[];
  /** The unique identifier assigned to a financial institution by regulatory authorities, if applicable. For banks, this is the FDIC Certificate Number. For credit unions, this is the Credit Union Charter Number. */
  registration_number?: string;
}): Promise<PartnerCustomerCreateResponse>
```

<sub>`POST /partner/customer/create` · `partnerCustomerCreate`</sub>

## `plaid.partnerCustomerEnable`

Enables a Plaid reseller's end customer in the Production environment. — [API reference](/api/partner/#partnercustomerenable)

```ts
plaid.partnerCustomerEnable(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  end_customer_client_id: string;
}): Promise<PartnerCustomerEnableResponse>
```

<sub>`POST /partner/customer/enable` · `partnerCustomerEnable`</sub>

## `plaid.partnerCustomerGet`

Returns a Plaid reseller's end customer. — [API reference](/api/partner/#partnercustomerget)

```ts
plaid.partnerCustomerGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  end_customer_client_id: string;
}): Promise<PartnerCustomerGetResponse>
```

<sub>`POST /partner/customer/get` · `partnerCustomerGet`</sub>

## `plaid.partnerCustomerOauthInstitutionsGet`

Returns OAuth-institution registration information for a given end customer. — [API reference](/api/partner/#partnercustomeroauth_institutionsget)

```ts
plaid.partnerCustomerOauthInstitutionsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  end_customer_client_id: string;
}): Promise<PartnerCustomerOAuthInstitutionsGetResponse>
```

<sub>`POST /partner/customer/oauth_institutions/get` · `partnerCustomerOauthInstitutionsGet`</sub>

## `plaid.partnerCustomerRemove`

Removes a Plaid reseller's end customer. — [API reference](/api/partner/#partnercustomerremove)

```ts
plaid.partnerCustomerRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `client_id` of the end customer to be removed. */
  end_customer_client_id: string;
}): Promise<PartnerCustomerRemoveResponse>
```

<sub>`POST /partner/customer/remove` · `partnerCustomerRemove`</sub>

## `plaid.paymentInitiationConsentCreate`

Create payment consent — [API reference](/api/products/payment-initiation/#payment_initiationconsentcreate)

```ts
plaid.paymentInitiationConsentCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the recipient the payment consent is for. The created consent can be used to transfer funds to this recipient only. */
  recipient_id: string;
  /** A reference for the payment consent. This must be an alphanumeric string with at most 18 characters and must not contain any special characters. */
  reference: string;
  /** An array of payment consent scopes. */
  scopes?: (PaymentInitiationConsentScope)[];
  type?: PaymentInitiationConsentType;
  constraints: PaymentInitiationConsentConstraints;
  options?: ExternalPaymentInitiationConsentOptions;
  payer_details?: PaymentInitiationConsentPayerDetails;
}): Promise<PaymentInitiationConsentCreateResponse>
```

<sub>`POST /payment_initiation/consent/create` · `paymentInitiationConsentCreate`</sub>

## `plaid.paymentInitiationConsentGet`

Get payment consent — [API reference](/api/products/payment-initiation/#payment_initiationconsentget)

```ts
plaid.paymentInitiationConsentGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `consent_id` returned from `/payment_initiation/consent/create`. */
  consent_id: string;
}): Promise<PaymentInitiationConsentGetResponse>
```

<sub>`POST /payment_initiation/consent/get` · `paymentInitiationConsentGet`</sub>

## `plaid.paymentInitiationConsentPaymentExecute`

Execute a single payment using consent — [API reference](/api/products/payment-initiation/#payment_initiationconsentpaymentexecute)

```ts
plaid.paymentInitiationConsentPaymentExecute(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The consent ID. */
  consent_id: string;
  amount: PaymentAmount;
  idempotency_key: ConsentPaymentIdempotencyKey;
  /** A reference for the payment. This must be an alphanumeric string with at most 18 characters and must not contain any special characters (since not all institutions support them). If not provided, Plaid will automatically fall back to the reference from consent. In order to track settlement via Payment Confirmation, each payment must have a unique reference. If the reference provided through the API is not unique, Plaid will adjust it. Some institutions may limit the reference to less than 18 characters. If necessary, Plaid will adjust the reference by truncating it to fit the institution's requirements. Both the originally provided and automatically adjusted references (if any) can be found in the `reference` and `adjusted_reference` fields, respectively. */
  reference?: string | null;
  scope?: PaymentInitiationConsentScope & string | null;
  processing_mode?: PaymentInitiationConsentProcessingMode;
}): Promise<PaymentInitiationConsentPaymentExecuteResponse>
```

<sub>`POST /payment_initiation/consent/payment/execute` · `paymentInitiationConsentPaymentExecute`</sub>

## `plaid.paymentInitiationConsentRevoke`

Revoke payment consent — [API reference](/api/products/payment-initiation/#payment_initiationconsentrevoke)

```ts
plaid.paymentInitiationConsentRevoke(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The consent ID. */
  consent_id: string;
}): Promise<PaymentInitiationConsentRevokeResponse>
```

<sub>`POST /payment_initiation/consent/revoke` · `paymentInitiationConsentRevoke`</sub>

## `plaid.paymentInitiationPaymentCreate`

Create a payment — [API reference](/api/products/payment-initiation/#payment_initiationpaymentcreate)

```ts
plaid.paymentInitiationPaymentCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the recipient the payment is for. */
  recipient_id: string;
  /** A reference for the payment. This must be an alphanumeric string with at most 18 characters and must not contain any special characters (since not all institutions support them). In order to track settlement via Payment Confirmation, each payment must have a unique reference. If the reference provided through the API is not unique, Plaid will adjust it. Some institutions may limit the reference to less than 18 characters. If necessary, Plaid will adjust the reference by truncating it to fit the institution's requirements. Both the originally provided and automatically adjusted references (if any) can be found in the `reference` and `adjusted_reference` fields, respectively. */
  reference: string;
  amount: PaymentAmount;
  schedule?: ExternalPaymentScheduleRequest;
  options?: ExternalPaymentOptions;
}): Promise<PaymentInitiationPaymentCreateResponse>
```

<sub>`POST /payment_initiation/payment/create` · `paymentInitiationPaymentCreate`</sub>

## `plaid.paymentInitiationPaymentGet`

Get payment details — [API reference](/api/products/payment-initiation/#payment_initiationpaymentget)

```ts
plaid.paymentInitiationPaymentGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `payment_id` returned from `/payment_initiation/payment/create`. */
  payment_id: string;
}): Promise<PaymentInitiationPaymentGetResponse>
```

<sub>`POST /payment_initiation/payment/get` · `paymentInitiationPaymentGet`</sub>

## `plaid.paymentInitiationPaymentList`

List payments — [API reference](/api/products/payment-initiation/#payment_initiationpaymentlist)

```ts
plaid.paymentInitiationPaymentList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The maximum number of payments to return. If `count` is not specified, a maximum of 10 payments will be returned, beginning with the most recent payment before the cursor (if specified). */
  count?: number | null;
  /** A string in RFC 3339 format (i.e. "2019-12-06T22:35:49Z"). Only payments created before the cursor will be returned. */
  cursor?: string | null;
  /** The consent ID. If specified, only payments, executed using this consent, will be returned. */
  consent_id?: string | null;
}): Promise<PaymentInitiationPaymentListResponse>
```

<sub>`POST /payment_initiation/payment/list` · `paymentInitiationPaymentList`</sub>

## `plaid.paymentInitiationPaymentReverse`

Reverse an existing payment — [API reference](/api/products/payment-initiation/#payment_initiationpaymentreverse)

```ts
plaid.paymentInitiationPaymentReverse(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the payment to reverse */
  payment_id: string;
  idempotency_key: WalletTransactionIdempotencyKey;
  /** A reference for the refund. This must be an alphanumeric string with 6 to 18 characters and must not contain any special characters or spaces. */
  reference: string;
  amount?: PaymentAmountToRefund;
  /** The counterparty's birthdate, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format. */
  counterparty_date_of_birth?: string | null;
  counterparty_address?: PaymentInitiationAddress;
}): Promise<PaymentInitiationPaymentReverseResponse>
```

<sub>`POST /payment_initiation/payment/reverse` · `paymentInitiationPaymentReverse`</sub>

## `plaid.createPaymentToken`

Create payment token — [API reference](/link/maintain-legacy-integration/#creating-a-payment-token)

```ts
plaid.createPaymentToken(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The `payment_id` returned from `/payment_initiation/payment/create`. */
  payment_id: string;
}): Promise<PaymentInitiationPaymentTokenCreateResponse>
```

<sub>`POST /payment_initiation/payment/token/create` · `createPaymentToken`</sub>

## `plaid.paymentInitiationRecipientCreate`

Create payment recipient — [API reference](/api/products/payment-initiation/#payment_initiationrecipientcreate)

```ts
plaid.paymentInitiationRecipientCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The name of the recipient. We recommend using strings of length 18 or less and avoid special characters to ensure compatibility with all institutions. */
  name: string;
  /** The International Bank Account Number (IBAN) for the recipient. If Bacs data is not provided, an IBAN is required. */
  iban?: string | null;
  bacs?: RecipientBacsNullable;
  address?: PaymentInitiationAddress;
}): Promise<PaymentInitiationRecipientCreateResponse>
```

<sub>`POST /payment_initiation/recipient/create` · `paymentInitiationRecipientCreate`</sub>

## `plaid.paymentInitiationRecipientGet`

Get payment recipient — [API reference](/api/products/payment-initiation/#payment_initiationrecipientget)

```ts
plaid.paymentInitiationRecipientGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the recipient */
  recipient_id: string;
}): Promise<PaymentInitiationRecipientGetResponse>
```

<sub>`POST /payment_initiation/recipient/get` · `paymentInitiationRecipientGet`</sub>

## `plaid.paymentInitiationRecipientList`

List payment recipients — [API reference](/api/products/payment-initiation/#payment_initiationrecipientlist)

```ts
plaid.paymentInitiationRecipientList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The maximum number of recipients to return. If `count` is not specified, a maximum of 100 recipients will be returned, beginning with the recipient at the cursor (if specified). */
  count?: number | null;
  /** A value representing the latest recipient to be included in the response. Set this from `next_cursor` received from the previous `/payment_initiation/recipient/list` request. If provided, the response will only contain that recipient and recipients created before it. If omitted, the response will contain recipients starting from the most recent, and in descending order by the `created_at` time. */
  cursor?: string;
}): Promise<PaymentInitiationRecipientListResponse>
```

<sub>`POST /payment_initiation/recipient/list` · `paymentInitiationRecipientList`</sub>

## `plaid.paymentProfileCreate`

Create payment profile — [API reference](/api/products/transfer/#payment_profilecreate)

```ts
plaid.paymentProfileCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<PaymentProfileCreateResponse>
```

<sub>`POST /payment_profile/create` · `paymentProfileCreate`</sub>

## `plaid.paymentProfileGet`

Get payment profile — [API reference](/api/products/transfer/#payment_profileget)

```ts
plaid.paymentProfileGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  payment_profile_token: PaymentProfileToken;
}): Promise<PaymentProfileGetResponse>
```

<sub>`POST /payment_profile/get` · `paymentProfileGet`</sub>

## `plaid.paymentProfileRemove`

Remove payment profile — [API reference](/api/products/transfer/#payment_profileremove)

```ts
plaid.paymentProfileRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  payment_profile_token: PaymentProfileToken;
}): Promise<PaymentProfileRemoveResponse>
```

<sub>`POST /payment_profile/remove` · `paymentProfileRemove`</sub>

## `plaid.processorAccountGet`

Retrieve the account associated with a processor token — [API reference](/api/processor-partners/#processoraccountget)

```ts
plaid.processorAccountGet(input: {
  client_id?: ApiClientId;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
}): Promise<ProcessorAccountGetResponse>
```

<sub>`POST /processor/account/get` · `processorAccountGet`</sub>

## `plaid.processorApexProcessorTokenCreate`

Create Apex processor token — [API reference](/none/)

```ts
plaid.processorApexProcessorTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The `account_id` value obtained from the `onSuccess` callback in Link */
  account_id: string;
}): Promise<ProcessorTokenCreateResponse>
```

<sub>`POST /processor/apex/processor_token/create` · `processorApexProcessorTokenCreate`</sub>

## `plaid.processorAuthGet`

Retrieve Auth data — [API reference](/api/processor-partners/#processorauthget)

```ts
plaid.processorAuthGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
}): Promise<ProcessorAuthGetResponse>
```

<sub>`POST /processor/auth/get` · `processorAuthGet`</sub>

## `plaid.processorBalanceGet`

Retrieve Balance data — [API reference](/api/processor-partners/#processorbalanceget)

```ts
plaid.processorBalanceGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  options?: ProcessorBalanceGetRequestOptions;
}): Promise<ProcessorBalanceGetResponse>
```

<sub>`POST /processor/balance/get` · `processorBalanceGet`</sub>

## `plaid.processorBankTransferCreate`

(Deprecated) Create a bank transfer as a processor — [API reference](/api/processor-partners/#bank_transfercreate)

```ts
plaid.processorBankTransferCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  idempotency_key: BankTransferIdempotencyKey;
  processor_token: ProcessorToken;
  type: BankTransferType;
  network: BankTransferNetwork;
  amount: BankTransferAmount;
  /** The currency of the transfer amount - should be set to "USD". */
  iso_currency_code: string;
  /** The transfer description. Maximum of 10 characters. */
  description: string;
  ach_class?: AchClass;
  user: BankTransferUser;
  /** An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters. */
  custom_tag?: string | null;
  metadata?: BankTransferMetadata;
  /** Plaid's unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. */
  origination_account_id?: string | null;
}): Promise<ProcessorBankTransferCreateResponse>
```

<sub>`POST /processor/bank_transfer/create` · `processorBankTransferCreate`</sub>

## `plaid.processorIdentityGet`

Retrieve Identity data — [API reference](/api/processor-partners/#processoridentityget)

```ts
plaid.processorIdentityGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
}): Promise<ProcessorIdentityGetResponse>
```

<sub>`POST /processor/identity/get` · `processorIdentityGet`</sub>

## `plaid.processorIdentityMatch`

Retrieve identity match score — [API reference](/api/processor-partners/#processoridentitymatch)

```ts
plaid.processorIdentityMatch(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  user?: IdentityMatchUser;
}): Promise<ProcessorIdentityMatchResponse>
```

<sub>`POST /processor/identity/match` · `processorIdentityMatch`</sub>

## `plaid.processorInvestmentsAuthGet`

Get investment account authentication data — [API reference](/api/processor-partners/#processorinvestmentsauthget)

```ts
plaid.processorInvestmentsAuthGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
}): Promise<ProcessorInvestmentsAuthGetResponse>
```

<sub>`POST /processor/investments/auth/get` · `processorInvestmentsAuthGet`</sub>

## `plaid.processorInvestmentsHoldingsGet`

Retrieve Investment Holdings — [API reference](/api/processor-partners/#processorinvestmentsholdingsget)

```ts
plaid.processorInvestmentsHoldingsGet(input: {
  client_id?: ApiClientId;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
}): Promise<ProcessorInvestmentsHoldingsGetResponse>
```

<sub>`POST /processor/investments/holdings/get` · `processorInvestmentsHoldingsGet`</sub>

## `plaid.processorInvestmentsTransactionsGet`

Get investment transactions data — [API reference](/api/processor-partners/#processorinvestmentstransactionsget)

```ts
plaid.processorInvestmentsTransactionsGet(input: {
  client_id?: ApiClientId;
  options?: InvestmentsTransactionsGetRequestOptions;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
  /** The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  start_date: string;
  /** The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  end_date: string;
}): Promise<ProcessorInvestmentsTransactionsGetResponse>
```

<sub>`POST /processor/investments/transactions/get` · `processorInvestmentsTransactionsGet`</sub>

## `plaid.processorLiabilitiesGet`

Retrieve Liabilities data — [API reference](/api/processor-partners/#processorliabilitiesget)

```ts
plaid.processorLiabilitiesGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
}): Promise<ProcessorLiabilitiesGetResponse>
```

<sub>`POST /processor/liabilities/get` · `processorLiabilitiesGet`</sub>

## `plaid.processorSignalDecisionReport`

Report whether you initiated an ACH transaction — [API reference](/api/processor-partners/#processorsignaldecisionreport)

```ts
plaid.processorSignalDecisionReport(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  /** Must be the same as the `client_transaction_id` supplied when calling `/processor/signal/evaluate` */
  client_transaction_id: string;
  /** `true` if the ACH transaction was initiated, `false` otherwise.  This field must be returned as a boolean. If formatted incorrectly, this will result in an [`INVALID_FIELD`](https://plaid.com/docs/errors/invalid-request/#invalid_field) error. */
  initiated: boolean;
  /** The actual number of days (hold time) since the ACH debit transaction that you wait before making funds available to your customers. The holding time could affect the ACH return rate.  For example, use 0 if you make funds available to your customers instantly or the same day following the debit transaction, or 1 if you make funds available the next day following the debit initialization. */
  days_funds_on_hold?: number | null;
  decision_outcome?: SignalDecisionOutcome;
  payment_method?: SignalPaymentMethod;
  /** The amount (in USD) made available to your customers instantly following the debit transaction. It could be a partial amount of the requested transaction (example: 102.05). */
  amount_instantly_available?: number | null;
}): Promise<ProcessorSignalDecisionReportResponse>
```

<sub>`POST /processor/signal/decision/report` · `processorSignalDecisionReport`</sub>

## `plaid.processorSignalEvaluate`

Evaluate a planned ACH transaction — [API reference](/api/processor-partners/#processorsignalevaluate)

```ts
plaid.processorSignalEvaluate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  /** The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal ID/identifier for this transaction. The max length for this field is 36 characters. */
  client_transaction_id: string;
  /** The transaction amount, in USD (e.g. `102.05`) */
  amount: number;
  /** `true` if the end user is present while initiating the ACH transfer and the endpoint is being called; `false` otherwise (for example, when the ACH transfer is scheduled and the end user is not present, or you call this endpoint after the ACH transfer but before submitting the Nacha file for ACH processing). */
  user_present?: boolean | null;
  /** A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple Items. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. */
  client_user_id?: string;
  /** **true** if the ACH transaction is a recurring transaction; **false** otherwise. */
  is_recurring?: boolean | null;
  /** The default ACH payment method to complete the transaction. `SAME_DAY_ACH`: Same Day ACH by Nacha. The debit transaction is processed and settled on the same day. `STANDARD_ACH`: Standard ACH by Nacha. `MULTIPLE_PAYMENT_METHODS`: If there is no default debit rail or there are multiple payment methods. Possible values:  `SAME_DAY_ACH`, `STANDARD_ACH`, `MULTIPLE_PAYMENT_METHODS` */
  default_payment_method?: string | null;
  user?: SignalUser;
  device?: SignalDevice;
  /** The key of the ruleset to use for this transaction. You can configure a ruleset using the Plaid Dashboard, under [Signal->Rules](https://dashboard.plaid.com/signal/risk-profiles). If not provided, for customers who began using Signal Transaction Scores before October 15, 2025, by default, no ruleset will be used; for customers who began using Signal Transaction Scores after that date, or for Balance customers, the `default` ruleset will be used. For more details, or to opt out of using a ruleset, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/). */
  ruleset_key?: string | null;
}): Promise<ProcessorSignalEvaluateResponse>
```

<sub>`POST /processor/signal/evaluate` · `processorSignalEvaluate`</sub>

## `plaid.processorSignalPrepare`

Opt-in a processor token to Signal — [API reference](/api/processor-partners/#processorsignalprepare)

```ts
plaid.processorSignalPrepare(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
}): Promise<ProcessorSignalPrepareResponse>
```

<sub>`POST /processor/signal/prepare` · `processorSignalPrepare`</sub>

## `plaid.processorSignalReturnReport`

Report a return for an ACH transaction — [API reference](/api/processor-partners/#processorsignalreturnreport)

```ts
plaid.processorSignalReturnReport(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  /** Must be the same as the `client_transaction_id` supplied when calling `/processor/signal/evaluate` */
  client_transaction_id: string;
  /** Must be a valid ACH return code (e.g. "R01")  If formatted incorrectly, this will result in an [`INVALID_FIELD`](https://plaid.com/docs/errors/invalid-request/#invalid_field) error. */
  return_code: string;
  /** Date and time when you receive the returns from your payment processors, in ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`). */
  returned_at?: string | null;
}): Promise<ProcessorSignalReturnReportResponse>
```

<sub>`POST /processor/signal/return/report` · `processorSignalReturnReport`</sub>

## `plaid.processorStripeBankAccountTokenCreate`

Create Stripe bank account token — [API reference](/api/processors/#processorstripebank_account_tokencreate)

```ts
plaid.processorStripeBankAccountTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The `account_id` value obtained from the `onSuccess` callback in Link */
  account_id: string;
}): Promise<ProcessorStripeBankAccountTokenCreateResponse>
```

<sub>`POST /processor/stripe/bank_account_token/create` · `processorStripeBankAccountTokenCreate`</sub>

## `plaid.processorTokenCreate`

Create processor token — [API reference](/api/processors/#processortokencreate)

```ts
plaid.processorTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The `account_id` value obtained from the `onSuccess` callback in Link */
  account_id: string;
  /** The processor you are integrating with. */
  processor: "dwolla" | "galileo" | "modern_treasury" | "ocrolus" | "vesta" | "drivewealth" | "vopay" | "achq" | "check" | "checkbook" | "circle" | "sila_money" | "rize" | "svb_api" | "unit" | "wyre" | "lithic" | "alpaca" | "astra" | "moov" | "treasury_prime" | "marqeta" | "checkout" | "solid" | "highnote" | "gemini" | "apex_clearing" | "gusto" | "adyen" | "atomic" | "i2c" | "wepay" | "riskified" | "utb" | "adp_roll" | "fortress_trust" | "bond" | "bakkt" | "teal" | "zero_hash" | "taba_pay" | "knot" | "sardine" | "alloy" | "finix" | "nuvei" | "layer" | "boom" | "paynote" | "stake" | "wedbush" | "esusu" | "ansa" | "scribeup" | "straddle" | "loanpro" | "bloom_credit" | "sfox" | "brale" | "parafin" | "cardless" | "open_ledger" | "valon" | "gainbridge" | "cardlytics" | "pinwheel" | "thread_bank" | "array" | "fiant" | "oatfi" | "curinos" | "frame" | "interchecks" | "interchange" | "atomicfi" | "pay" | "natural" | "kanmon" | "kick" | "increase";
}): Promise<ProcessorTokenCreateResponse>
```

<sub>`POST /processor/token/create` · `processorTokenCreate`</sub>

## `plaid.processorTokenPermissionsGet`

Get a processor token's product permissions — [API reference](/api/processors/#processortokenpermissionsget)

```ts
plaid.processorTokenPermissionsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
}): Promise<ProcessorTokenPermissionsGetResponse>
```

<sub>`POST /processor/token/permissions/get` · `processorTokenPermissionsGet`</sub>

## `plaid.processorTokenPermissionsSet`

Control a processor's access to products — [API reference](/api/processors/#processortokenpermissionsset)

```ts
plaid.processorTokenPermissionsSet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  /** A list of products the processor token should have access to. An empty list will grant access to all products. */
  products: (Products)[];
}): Promise<ProcessorTokenPermissionsSetResponse>
```

<sub>`POST /processor/token/permissions/set` · `processorTokenPermissionsSet`</sub>

## `plaid.processorTokenWebhookUpdate`

Update a processor token's webhook URL — [API reference](/api/processor-partners/#processortokenwebhookupdate)

```ts
plaid.processorTokenWebhookUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  processor_token: ProcessorToken;
  /** The new webhook URL to associate with the processor token. To remove a webhook from a processor token, set to `null`. */
  webhook: string | null;
}): Promise<ProcessorTokenWebhookUpdateResponse>
```

<sub>`POST /processor/token/webhook/update` · `processorTokenWebhookUpdate`</sub>

## `plaid.processorTransactionsGet`

Get transaction data — [API reference](/api/processor-partners/#processortransactionsget)

```ts
plaid.processorTransactionsGet(input: {
  client_id?: ApiClientId;
  options?: ProcessorTransactionsGetRequestOptions;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
  /** The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  start_date: string;
  /** The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  end_date: string;
}): Promise<ProcessorTransactionsGetResponse>
```

<sub>`POST /processor/transactions/get` · `processorTransactionsGet`</sub>

## `plaid.processorTransactionsRecurringGet`

Fetch recurring transaction streams — [API reference](/api/processor-partners/#processortransactionsrecurringget)

```ts
plaid.processorTransactionsRecurringGet(input: {
  client_id?: ApiClientId;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
  options?: TransactionsRecurringGetRequestOptions;
}): Promise<ProcessorTransactionsRecurringGetResponse>
```

<sub>`POST /processor/transactions/recurring/get` · `processorTransactionsRecurringGet`</sub>

## `plaid.processorTransactionsRefresh`

Refresh transaction data — [API reference](/api/processor-partners/#processortransactionsrefresh)

```ts
plaid.processorTransactionsRefresh(input: {
  client_id?: ApiClientId;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
}): Promise<ProcessorTransactionsRefreshResponse>
```

<sub>`POST /processor/transactions/refresh` · `processorTransactionsRefresh`</sub>

## `plaid.processorTransactionsSync`

Get incremental transaction updates on a processor token — [API reference](/api/processor-partners/#processortransactionssync)

```ts
plaid.processorTransactionsSync(input: {
  client_id?: ApiClientId;
  processor_token: ProcessorToken;
  secret?: ApiSecret;
  /** The cursor value represents the last update requested. Providing it will cause the response to only return changes after this update. If omitted, the entire history of updates will be returned, starting with the first-added transactions on the Item. Note: The upper-bound length of this cursor is 256 characters of base64. */
  cursor?: string;
  /** The number of transaction updates to fetch. */
  count?: number;
  options?: TransactionsSyncRequestOptions;
}): Promise<ProcessorTransactionsSyncResponse>
```

<sub>`POST /processor/transactions/sync` · `processorTransactionsSync`</sub>

## `plaid.profileNetworkStatusGet`

Check a user's Plaid Network status — [API reference](/api/profile/#networkstatusget)

```ts
plaid.profileNetworkStatusGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user: NetworkStatusGetUser;
}): Promise<ProfileNetworkStatusGetResponse>
```

<sub>`POST /profile/network_status/get` · `profileNetworkStatusGet`</sub>

## `plaid.protectCompute`

Compute Protect Trust Index scores and subscores — [API reference](/api/products/protect/#protectcompute)

```ts
plaid.protectCompute(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The name of the Trust Index model to use for scoring, with a major.minor version suffix. Examples: `ti-link-session-2.0` (link-session fraud), `ti-identity-2.0` (identity fraud), `cash-advance-onboarding-1.0` (first cash advance), and `cash-advance-ongoing-1.0` (subsequent cash advances). The model specified may require certain fields within `model_inputs`; for example, `ti-link-session-2.0` requires the `link` field. Cash-advance models do not use `model_inputs`. */
  model: string;
  user: ProtectUser;
  model_inputs?: ProtectModelInputs;
}): Promise<ProtectComputeResponse>
```

<sub>`POST /protect/compute` · `protectCompute`</sub>

## `plaid.protectEventGet`

Get information about a user event — [API reference](none)

```ts
plaid.protectEventGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The event ID to retrieve information for. */
  event_id: string;
}): Promise<ProtectEventGetResponse>
```

<sub>`POST /protect/event/get` · `protectEventGet`</sub>

## `plaid.protectEventSend`

Send a new event to enrich user data — [API reference](none)

```ts
plaid.protectEventSend(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Timestamp of the event. Might be the current moment or a time in the past. In [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `"2017-09-14T14:42:19.350Z"` */
  timestamp?: string;
  event: ProtectEvent;
  /** Protect Session ID should be provided for any event correlated with a frontend user session started via the Protect SDK. */
  protect_session_id?: string;
  /** Whether this event should be scored with Trust Index. The default is false. */
  request_trust_index?: boolean;
}): Promise<ProtectEventSendResponse>
```

<sub>`POST /protect/event/send` · `protectEventSend`</sub>

## `plaid.protectReportCreate`

Create a Protect report — [API reference](/api/products/protect/#protectreportcreate)

```ts
plaid.protectReportCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid User ID associated with the report. */
  user_id?: string;
  incident_event?: ProtectIncidentEvent;
  report_confidence: ProtectReportConfidence;
  report_type: ProtectReportType;
  report_source: ProtectReportSource;
  bank_account?: ProtectBankAccount;
  /** Must be a valid ACH return code (e.g. `R01`), required if `report_type` is `ACH_RETURN`. */
  ach_return_code?: string | null;
  /** Additional context or details about the report, required if `report_type` is `OTHER`. */
  notes?: string | null;
}): Promise<ProtectReportCreateResponse>
```

<sub>`POST /protect/report/create` · `protectReportCreate`</sub>

## `plaid.protectUserInsightsGet`

Get Protect user insights — [API reference](/api/products/protect/#protectuserinsightsget)

```ts
plaid.protectUserInsightsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid User ID. Either `user_id` or `client_user_id` must be provided. */
  user_id?: string;
  /** A unique ID representing the end user. Either `user_id` or `client_user_id` must be provided. */
  client_user_id?: string;
}): Promise<ProtectUserInsightsGetResponse>
```

<sub>`POST /protect/user/insights/get` · `protectUserInsightsGet`</sub>

## `plaid.sandboxBankIncomeFireWebhook`

(Deprecated) Manually fire a Bank Income webhook in Sandbox — [API reference](/api/sandbox/#sandboxbankincomefire_webhook)

```ts
plaid.sandboxBankIncomeFireWebhook(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The URL to which the webhook should be sent. If provided, this will override the URL set in the dashboard. */
  webhook_override?: string;
  webhook_code: SandboxBankIncomeWebhookFireRequestWebhookCode;
  webhook_fields: SandboxBankIncomeWebhookFireRequestWebhookFields;
}): Promise<SandboxBankIncomeFireWebhookResponse>
```

<sub>`POST /sandbox/bank_income/fire_webhook` · `sandboxBankIncomeFireWebhook`</sub>

## `plaid.sandboxBankTransferFireWebhook`

(Deprecated) Manually fire a Bank Transfer webhook — [API reference](/bank-transfers/reference/#sandboxbank_transferfire_webhook)

```ts
plaid.sandboxBankTransferFireWebhook(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The URL to which the webhook should be sent. */
  webhook: string;
}): Promise<SandboxBankTransferFireWebhookResponse>
```

<sub>`POST /sandbox/bank_transfer/fire_webhook` · `sandboxBankTransferFireWebhook`</sub>

## `plaid.sandboxBankTransferSimulate`

(Deprecated) Simulate a bank transfer event in Sandbox — [API reference](/bank-transfers/reference/#sandboxbank_transfersimulate)

```ts
plaid.sandboxBankTransferSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  bank_transfer_id: BankTransferId;
  /** The asynchronous event to be simulated. May be: `posted`, `failed`, or `reversed`.  An error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:  `pending` --> `failed`  `pending` --> `posted`  `posted` --> `reversed`  */
  event_type: string;
  failure_reason?: BankTransferFailure;
}): Promise<SandboxBankTransferSimulateResponse>
```

<sub>`POST /sandbox/bank_transfer/simulate` · `sandboxBankTransferSimulate`</sub>

## `plaid.sandboxCraCashflowUpdatesUpdate`

Trigger an update for Cash Flow Updates — [API reference](/api/sandbox/#sandboxcracashflow_updatesupdate)

```ts
plaid.sandboxCraCashflowUpdatesUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  /** Webhook codes corresponding to the Cash Flow Updates events to be simulated. */
  webhook_codes?: (CashFlowUpdatesEventWebhookCodes)[] | null;
  user_id?: NewUserId;
}): Promise<SandboxCraCashflowUpdatesUpdateResponse>
```

<sub>`POST /sandbox/cra/cashflow_updates/update` · `sandboxCraCashflowUpdatesUpdate`</sub>

## `plaid.sandboxFdxConsentSeed`

Seed an FDX consent grant for a sandbox data partner — [Provider docs](https://plaid.com)

```ts
plaid.sandboxFdxConsentSeed(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The data provider's identifier for the end user to associate the seeded consent grant with. */
  customer_id: string;
  application_id: ApplicationId;
  /** Optional UUIDv4 identifier for the seeded consent grant. If omitted, one is generated. Seeding fails if a grant with this identifier already exists. */
  consent_id?: string;
}): Promise<SandboxFdxConsentSeedResponse>
```

<sub>`POST /sandbox/fdx/consent/seed` · `sandboxFdxConsentSeed`</sub>

## `plaid.sandboxIncomeFireWebhook`

Manually fire an Income webhook — [API reference](/api/sandbox/#sandboxincomefire_webhook)

```ts
plaid.sandboxIncomeFireWebhook(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Item ID associated with the verification. */
  item_id: string;
  user_id?: UserId;
  /** The URL to which the webhook should be sent. */
  webhook: string;
  /** `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the document metadata to see which documents were successfully parsed.  `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the verification documentation.  `VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to the user for review. */
  verification_status?: "VERIFICATION_STATUS_PROCESSING_COMPLETE" | "VERIFICATION_STATUS_PROCESSING_FAILED" | "VERIFICATION_STATUS_PENDING_APPROVAL";
  webhook_code: SandboxIncomeWebhookFireRequestWebhookCode;
}): Promise<SandboxIncomeFireWebhookResponse>
```

<sub>`POST /sandbox/income/fire_webhook` · `sandboxIncomeFireWebhook`</sub>

## `plaid.sandboxItemApplicationSeed`

Seed a connected application for a Permissions Manager sandbox item — [Provider docs](https://plaid.com)

```ts
plaid.sandboxItemApplicationSeed(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  application_id: ApplicationId;
}): Promise<SandboxItemApplicationSeedResponse>
```

<sub>`POST /sandbox/item/application/seed` · `sandboxItemApplicationSeed`</sub>

## `plaid.sandboxItemFireWebhook`

Fire a test webhook — [API reference](/api/sandbox/#sandboxitemfire_webhook)

```ts
plaid.sandboxItemFireWebhook(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  webhook_type?: WebhookType;
  /** The webhook codes that can be fired by this test endpoint. */
  webhook_code: "DEFAULT_UPDATE" | "NEW_ACCOUNTS_AVAILABLE" | "SMS_MICRODEPOSITS_VERIFICATION" | "AUTHORIZATION_GRANTED" | "USER_PERMISSION_REVOKED" | "USER_ACCOUNT_REVOKED" | "PENDING_DISCONNECT" | "RECURRING_TRANSACTIONS_UPDATE" | "LOGIN_REPAIRED" | "SYNC_UPDATES_AVAILABLE" | "PRODUCT_READY" | "ERROR";
}): Promise<SandboxItemFireWebhookResponse>
```

<sub>`POST /sandbox/item/fire_webhook` · `sandboxItemFireWebhook`</sub>

## `plaid.sandboxItemResetLogin`

Force a Sandbox Item into an error state — [API reference](/api/sandbox/#sandboxitemreset_login)

```ts
plaid.sandboxItemResetLogin(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<SandboxItemResetLoginResponse>
```

<sub>`POST /sandbox/item/reset_login` · `sandboxItemResetLogin`</sub>

## `plaid.sandboxItemSetVerificationStatus`

Set verification status for Sandbox account — [API reference](/api/sandbox/#sandboxitemset_verification_status)

```ts
plaid.sandboxItemSetVerificationStatus(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The `account_id` of the account whose verification status is to be modified */
  account_id: string;
  /** The verification status to set the account to. */
  verification_status: "automatically_verified" | "verification_expired";
}): Promise<SandboxItemSetVerificationStatusResponse>
```

<sub>`POST /sandbox/item/set_verification_status` · `sandboxItemSetVerificationStatus`</sub>

## `plaid.sandboxOauthSelectAccounts`

Save the selected accounts when connecting to the Platypus OAuth institution — [Provider docs](https://plaid.com)

```ts
plaid.sandboxOauthSelectAccounts(input: {
  oauth_state_id: string;
  accounts: (string)[];
}): Promise<SandboxOauthSelectAccountsResponse>
```

<sub>`POST /sandbox/oauth/select_accounts` · `sandboxOauthSelectAccounts`</sub>

## `plaid.sandboxPaymentProfileResetLogin`

Reset the login of a Payment Profile — [API reference](/api/sandbox/#sandboxpayment_profilereset_login)

```ts
plaid.sandboxPaymentProfileResetLogin(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  payment_profile_token: PaymentProfileToken;
}): Promise<SandboxPaymentProfileResetLoginResponse>
```

<sub>`POST /sandbox/payment_profile/reset_login` · `sandboxPaymentProfileResetLogin`</sub>

## `plaid.sandboxPaymentSimulate`

Simulate a payment event in Sandbox — [API reference](/api/sandbox/#sandboxpaymentsimulate)

```ts
plaid.sandboxPaymentSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the payment to simulate */
  payment_id: string;
  /** The webhook url to use for any payment events triggered by the simulated status change. */
  webhook: string;
  /** The status to set the payment to.  Valid statuses include: - `PAYMENT_STATUS_INITIATED` - `PAYMENT_STATUS_INSUFFICIENT_FUNDS` - `PAYMENT_STATUS_FAILED` - `PAYMENT_STATUS_EXECUTED` - `PAYMENT_STATUS_SETTLED` - `PAYMENT_STATUS_CANCELLED` - `PAYMENT_STATUS_REJECTED` */
  status: string;
}): Promise<SandboxPaymentSimulateResponse>
```

<sub>`POST /sandbox/payment/simulate` · `sandboxPaymentSimulate`</sub>

## `plaid.sandboxProcessorTokenCreate`

Create a test Item and processor token — [API reference](/api/sandbox/#sandboxprocessor_tokencreate)

```ts
plaid.sandboxProcessorTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the institution the Item will be associated with */
  institution_id: string;
  options?: SandboxProcessorTokenCreateRequestOptions;
}): Promise<SandboxProcessorTokenCreateResponse>
```

<sub>`POST /sandbox/processor_token/create` · `sandboxProcessorTokenCreate`</sub>

## `plaid.sandboxPublicTokenCreate`

Create a test Item — [API reference](/api/sandbox/#sandboxpublic_tokencreate)

```ts
plaid.sandboxPublicTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the institution the Item will be associated with */
  institution_id: string;
  /** The products to initially pull for the Item. May be any products that the specified `institution_id` supports. This array may not be empty. */
  initial_products: (Products)[];
  options?: SandboxPublicTokenCreateRequestOptions;
  user_token?: UserToken;
  user_id?: NewUserId;
}): Promise<SandboxPublicTokenCreateResponse>
```

<sub>`POST /sandbox/public_token/create` · `sandboxPublicTokenCreate`</sub>

## `plaid.sandboxTransactionsCreate`

Create sandbox transactions — [API reference](/api/sandbox/#sandboxtransactionscreate)

```ts
plaid.sandboxTransactionsCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** List of transactions to be added */
  transactions: (CustomSandboxTransaction)[];
}): Promise<SandboxTransactionsCreateResponse>
```

<sub>`POST /sandbox/transactions/create` · `sandboxTransactionsCreate`</sub>

## `plaid.sandboxTransferFireWebhook`

Manually fire a Transfer webhook — [API reference](/api/sandbox/#sandboxtransferfire_webhook)

```ts
plaid.sandboxTransferFireWebhook(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The URL to which the webhook should be sent. */
  webhook: string;
}): Promise<SandboxTransferFireWebhookResponse>
```

<sub>`POST /sandbox/transfer/fire_webhook` · `sandboxTransferFireWebhook`</sub>

## `plaid.sandboxTransferLedgerDepositSimulate`

Simulate a ledger deposit event in Sandbox — [API reference](/api/sandbox/#sandboxtransferledgerdepositsimulate)

```ts
plaid.sandboxTransferLedgerDepositSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  sweep_id: TransferSweepId;
  event_type: TransferLedgerSweepSimulateEventType;
  failure_reason?: TransferFailure;
}): Promise<SandboxTransferLedgerDepositSimulateResponse>
```

<sub>`POST /sandbox/transfer/ledger/deposit/simulate` · `sandboxTransferLedgerDepositSimulate`</sub>

## `plaid.sandboxTransferLedgerSimulateAvailable`

Simulate converting pending balance to available balance — [API reference](/api/sandbox/#sandboxtransferledgersimulate_available)

```ts
plaid.sandboxTransferLedgerSimulateAvailable(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Specify which ledger balance to simulate converting pending balance to available balance. If this field is left blank, this will default to the id of the default ledger balance. */
  ledger_id?: string | null;
  /** Client ID of the end customer (i.e. the originator). Only applicable to Transfer for Platforms customers. */
  originator_client_id?: string | null;
  /** Plaid's unique identifier for a test clock. If provided, only the pending balance that is due before the `virtual_time` on the test clock will be converted. */
  test_clock_id?: string | null;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
}): Promise<SandboxTransferLedgerSimulateAvailableResponse>
```

<sub>`POST /sandbox/transfer/ledger/simulate_available` · `sandboxTransferLedgerSimulateAvailable`</sub>

## `plaid.sandboxTransferLedgerWithdrawSimulate`

Simulate a ledger withdraw event in Sandbox — [API reference](/api/sandbox/#sandboxtransferledgerwithdrawsimulate)

```ts
plaid.sandboxTransferLedgerWithdrawSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  sweep_id: TransferSweepId;
  event_type: TransferLedgerSweepSimulateEventType;
  failure_reason?: TransferFailure;
}): Promise<SandboxTransferLedgerWithdrawSimulateResponse>
```

<sub>`POST /sandbox/transfer/ledger/withdraw/simulate` · `sandboxTransferLedgerWithdrawSimulate`</sub>

## `plaid.sandboxTransferRefundSimulate`

Simulate a refund event in Sandbox — [API reference](/api/sandbox/#sandboxtransferrefundsimulate)

```ts
plaid.sandboxTransferRefundSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  refund_id: TransferRefundId;
  /** Plaid's unique identifier for a test clock. If provided, the event to be simulated is created at the `virtual_time` on the provided `test_clock`. */
  test_clock_id?: string | null;
  /** The asynchronous event to be simulated. May be: `refund.posted`, `refund.settled`, `refund.failed`, or `refund.returned`.  An error will be returned if the event type is incompatible with the current refund status. Compatible status --> event type transitions include:  `refund.pending` --> `refund.failed`  `refund.pending` --> `refund.posted`  `refund.posted` --> `refund.returned`  `refund.posted` --> `refund.settled`  `refund.posted` events can only be simulated if the refunded transfer has been transitioned to settled. This mimics the ordering of events in Production.  */
  event_type: string;
  failure_reason?: TransferFailure;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
}): Promise<SandboxTransferRefundSimulateResponse>
```

<sub>`POST /sandbox/transfer/refund/simulate` · `sandboxTransferRefundSimulate`</sub>

## `plaid.sandboxTransferRepaymentSimulate`

Trigger the creation of a repayment — [API reference](/api/sandbox/#sandboxtransferrepaymentsimulate)

```ts
plaid.sandboxTransferRepaymentSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<SandboxTransferRepaymentSimulateResponse>
```

<sub>`POST /sandbox/transfer/repayment/simulate` · `sandboxTransferRepaymentSimulate`</sub>

## `plaid.sandboxTransferSimulate`

Simulate a transfer event in Sandbox — [API reference](/api/sandbox/#sandboxtransfersimulate)

```ts
plaid.sandboxTransferSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  transfer_id: TransferId;
  /** Plaid's unique identifier for a test clock. If provided, the event to be simulated is created at the `virtual_time` on the provided `test_clock`. */
  test_clock_id?: string | null;
  /** The asynchronous event to be simulated. May be: `posted`, `settled`, `failed`, `funds_available`, or `returned`.  An error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:  `pending` --> `failed`  `pending` --> `posted`  `posted` --> `returned`  `posted` --> `settled`  `settled` --> `funds_available` (only applicable to ACH debits.)  */
  event_type: string;
  failure_reason?: TransferFailure;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
}): Promise<SandboxTransferSimulateResponse>
```

<sub>`POST /sandbox/transfer/simulate` · `sandboxTransferSimulate`</sub>

## `plaid.sandboxTransferSweepSimulate`

Simulate creating a sweep — [API reference](/api/sandbox/#sandboxtransfersweepsimulate)

```ts
plaid.sandboxTransferSweepSimulate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Plaid's unique identifier for a test clock. If provided, the sweep to be simulated is created on the day of the `virtual_time` on the `test_clock`. If the date of `virtual_time` is on weekend or a federal holiday, the next available banking day is used. */
  test_clock_id?: string | null;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
}): Promise<SandboxTransferSweepSimulateResponse>
```

<sub>`POST /sandbox/transfer/sweep/simulate` · `sandboxTransferSweepSimulate`</sub>

## `plaid.sandboxTransferTestClockAdvance`

Advance a test clock — [API reference](/api/sandbox/#sandboxtransfertest_clockadvance)

```ts
plaid.sandboxTransferTestClockAdvance(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  test_clock_id: TransferTestClockId;
  new_virtual_time: VirtualTime;
}): Promise<SandboxTransferTestClockAdvanceResponse>
```

<sub>`POST /sandbox/transfer/test_clock/advance` · `sandboxTransferTestClockAdvance`</sub>

## `plaid.sandboxTransferTestClockCreate`

Create a test clock — [API reference](/api/sandbox/#sandboxtransfertest_clockcreate)

```ts
plaid.sandboxTransferTestClockCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The virtual timestamp on the test clock. If not provided, the current timestamp will be used. This will be of the form `2006-01-02T15:04:05Z`. */
  virtual_time?: string | null;
}): Promise<SandboxTransferTestClockCreateResponse>
```

<sub>`POST /sandbox/transfer/test_clock/create` · `sandboxTransferTestClockCreate`</sub>

## `plaid.sandboxTransferTestClockGet`

Get a test clock — [API reference](/api/sandbox/#sandboxtransfertest_clockget)

```ts
plaid.sandboxTransferTestClockGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  test_clock_id: TransferTestClockId;
}): Promise<SandboxTransferTestClockGetResponse>
```

<sub>`POST /sandbox/transfer/test_clock/get` · `sandboxTransferTestClockGet`</sub>

## `plaid.sandboxTransferTestClockList`

List test clocks — [API reference](/api/sandbox/#sandboxtransfertest_clocklist)

```ts
plaid.sandboxTransferTestClockList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  start_virtual_time?: string | null;
  /** The end virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  end_virtual_time?: string | null;
  /** The maximum number of test clocks to return. */
  count?: number | null;
  /** The number of test clocks to skip before returning results. */
  offset?: number;
}): Promise<SandboxTransferTestClockListResponse>
```

<sub>`POST /sandbox/transfer/test_clock/list` · `sandboxTransferTestClockList`</sub>

## `plaid.sandboxUserResetLogin`

Force item(s) for a Sandbox User into an error state — [API reference](/api/sandbox/#sandboxuserreset_login)

```ts
plaid.sandboxUserResetLogin(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  /** An array of `item_id`s associated with the User to be reset.  If empty or `null`, this field will default to resetting all Items associated with the User. */
  item_ids?: (ItemId)[] | null;
  user_id?: NewUserId;
}): Promise<SandboxUserResetLoginResponse>
```

<sub>`POST /sandbox/user/reset_login` · `sandboxUserResetLogin`</sub>

## `plaid.sessionTokenCreate`

Create a Link token for Layer — [API reference](/api/products/layer/#sessiontokencreate)

```ts
plaid.sessionTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The id of a template defined in Plaid Dashboard */
  template_id: string;
  user?: SessionTokenCreateRequestUser;
  redirect_uri?: LinkTokenCreateRequestRedirectUri;
  /** The name of your app's Android package. Required if using the session token to initialize Layer on Android. Any package name specified here must also be added to the Allowed Android package names setting on the [developer dashboard](https://dashboard.plaid.com/team/api). When creating a session token for initializing Layer on other platforms, `android_package_name` must be left blank and `redirect_uri` should be used instead. */
  android_package_name?: string;
  /** The destination URL to which any webhooks should be sent. If you use the same webhook listener for all Sandbox or all Production activity, set this value in the Layer template editor in the Dashboard instead. Only provide a value in this field if you need to use multiple webhook URLs per environment (an uncommon use case). If provided, a value in this field will take priority over webhook values set in the Layer template editor. */
  webhook?: string;
  user_id?: NewUserId;
}): Promise<SessionTokenCreateResponse>
```

<sub>`POST /session/token/create` · `sessionTokenCreate`</sub>

## `plaid.signalDecisionReport`

Report whether you initiated an ACH transaction — [API reference](/api/products/signal#signaldecisionreport)

```ts
plaid.signalDecisionReport(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Must be the same as the `client_transaction_id` supplied when calling `/signal/evaluate` */
  client_transaction_id: string;
  /** `true` if the ACH transaction was initiated, `false` otherwise.  This field must be returned as a boolean. If formatted incorrectly, this will result in an [`INVALID_FIELD`](https://plaid.com/docs/errors/invalid-request/#invalid_field) error. */
  initiated: boolean;
  /** The actual number of days (hold time) since the ACH debit transaction that you wait before making funds available to your customers. The holding time could affect the ACH return rate.  For example, use 0 if you make funds available to your customers instantly or the same day following the debit transaction, or 1 if you make funds available the next day following the debit initialization. */
  days_funds_on_hold?: number | null;
  decision_outcome?: SignalDecisionOutcome;
  payment_method?: SignalPaymentMethod;
  /** The amount (in USD) made available to your customers instantly following the debit transaction. It could be a partial amount of the requested transaction (example: 102.05). */
  amount_instantly_available?: number | null;
  /** The date the ACH debit was submitted to the bank for processing (in ISO 8601 format: `YYYY-MM-DDTHH:mm:ssZ`). This field should correspond to the attempt initiated after the `/signal/schedule` call. */
  submitted_at?: string;
}): Promise<SignalDecisionReportResponse>
```

<sub>`POST /signal/decision/report` · `signalDecisionReport`</sub>

## `plaid.signalEvaluate`

Evaluate a planned ACH transaction — [API reference](/api/products/signal#signalevaluate)

```ts
plaid.signalEvaluate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The Plaid `account_id` of the account that is the funding source for the proposed transaction. The `account_id` is returned in the `/accounts/get` endpoint as well as the [`onSuccess`](https://plaid.com/docs/link/ios/#link-ios-onsuccess-linkSuccess-metadata-accounts-id) callback metadata.  This will return an [`INVALID_ACCOUNT_ID`](https://plaid.com/docs/errors/invalid-input/#invalid_account_id) error if the account has been removed at the bank or if the `account_id` is no longer valid. */
  account_id: string;
  /** The unique ID that you would like to use to refer to this evaluation attempt - for example, a payment attempt ID. You will use this later to debug this evaluation, and/or report an ACH return, etc. The max length for this field is 36 characters. The `client_transaction_id` also functions as an idempotency key; calling `/signal/evaluate` with a previously used `client_transaction_id` will return the results of the previous evaluation rather than triggering a fresh evaluation. */
  client_transaction_id: string;
  /** The transaction amount, in USD (e.g. `102.05`) */
  amount: number;
  /** `true` if the end user is present while initiating the ACH transfer and the endpoint is being called; `false` otherwise (for example, when the ACH transfer is scheduled and the end user is not present, or you call this endpoint after the ACH transfer but before submitting the Nacha file for ACH processing). When using a Balance-only ruleset, this field is ignored. This field is not currently used as part of Signal Transaction Score evaluations, but may be used in the future. */
  user_present?: boolean | null;
  /** A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple Items. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. */
  client_user_id?: string;
  /** Use `true` if the ACH transaction is a part of recurring schedule (for example, a monthly repayment); `false` otherwise. When using a Balance-only ruleset, this field is ignored. */
  is_recurring?: boolean | null;
  /** The default ACH payment method to complete the transaction. When using a Balance-only ruleset, this field is ignored. `SAME_DAY_ACH`: Same Day ACH by Nacha. The debit transaction is processed and settled on the same day. `STANDARD_ACH`: Standard ACH by Nacha. `MULTIPLE_PAYMENT_METHODS`: If there is no default debit rail or there are multiple payment methods. Possible values:  `SAME_DAY_ACH`, `STANDARD_ACH`, `MULTIPLE_PAYMENT_METHODS` */
  default_payment_method?: string | null;
  user?: SignalUser;
  device?: SignalDevice;
  /** Specifying `risk_profile_key` is deprecated. Please provide `ruleset` instead. */
  risk_profile_key?: string | null;
  /** The key of the ruleset to use for evaluating this transaction. You can create a ruleset using the Plaid Dashboard, under [Signal->Rules](https://dashboard.plaid.com/signal/risk-profiles). If not provided, for all new customers as of October 15, 2025, the `default` ruleset will be used. For existing Signal Transaction Scores customers as of October 15, 2025, by default, no ruleset will be used if the `ruleset_key` is not provided. For more information, or to opt out of using rulesets, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/). */
  ruleset_key?: string | null;
}): Promise<SignalEvaluateResponse>
```

<sub>`POST /signal/evaluate` · `signalEvaluate`</sub>

## `plaid.signalPrepare`

Opt-in an Item to Signal Transaction Scores — [API reference](/api/products/signal#signalprepare)

```ts
plaid.signalPrepare(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
}): Promise<SignalPrepareResponse>
```

<sub>`POST /signal/prepare` · `signalPrepare`</sub>

## `plaid.signalReturnReport`

Report a return for an ACH transaction — [API reference](/api/products/signal#signalreturnreport)

```ts
plaid.signalReturnReport(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Must be the same as the `client_transaction_id` supplied when calling `/signal/evaluate`. */
  client_transaction_id: string;
  /** Must be a valid ACH return code (e.g. "R01")  If formatted incorrectly, this will result in an [`INVALID_FIELD`](https://plaid.com/docs/errors/invalid-request/#invalid_field) error. */
  return_code: string;
  /** Date and time when you receive the returns from your payment processors, in ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`). */
  returned_at?: string | null;
}): Promise<SignalReturnReportResponse>
```

<sub>`POST /signal/return/report` · `signalReturnReport`</sub>

## `plaid.signalSchedule`

Schedule a planned ACH transaction — [API reference](none)

```ts
plaid.signalSchedule(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: AccessToken;
  /** The Plaid `account_id` of the account that is the funding source for the proposed transaction. The `account_id` is returned in the `/accounts/get` endpoint as well as the [`onSuccess`](https://plaid.com/docs/link/ios/#link-ios-onsuccess-linkSuccess-metadata-accounts-id) callback metadata.  This will return an [`INVALID_ACCOUNT_ID`](https://plaid.com/docs/errors/invalid-input/#invalid_account_id) error if the account has been removed at the bank or if the `account_id` is no longer valid. */
  account_id: string;
  /** The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal ID/identifier for this transaction. The max length for this field is 36 characters. */
  client_transaction_id: string;
  /** The transaction amount, in USD (e.g. `102.05`) */
  amount: number;
  default_payment_method?: SignalScheduleDefaultPaymentMethod;
}): Promise<SignalScheduleResponse>
```

<sub>`POST /signal/schedule` · `signalSchedule`</sub>

## `plaid.statementsDownload`

Retrieve a single statement. — [API reference](/api/products/statements#statementsdownload)

```ts
plaid.statementsDownload(input: {
  access_token: AccessToken;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Plaid's unique identifier for the statement. */
  statement_id: string;
}): Promise<StatementsDownloadResponse>
```

<sub>`POST /statements/download` · `statementsDownload`</sub>

## `plaid.statementsList`

Retrieve a list of all statements associated with an Item. — [API reference](/api/products/statements#statementslist)

```ts
plaid.statementsList(input: {
  access_token: AccessToken;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<StatementsListResponse>
```

<sub>`POST /statements/list` · `statementsList`</sub>

## `plaid.statementsRefresh`

Refresh statements data. — [API reference](/api/products/statements#statementsrefresh)

```ts
plaid.statementsRefresh(input: {
  access_token: AccessToken;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start date for statements, in "YYYY-MM-DD" format, e.g. "2023-08-30". To determine whether a statement falls within the specified date range, Plaid will use the statement posted date. The statement posted date is typically either the last day of the statement period, or the following day. */
  start_date: string;
  /** The end date for statements, in "YYYY-MM-DD" format, e.g. "2023-10-30". You can request up to two years of data. To determine whether a statement falls within the specified date range, Plaid will use the statement posted date. The statement posted date is typically either the last day of the statement period, or the following day. */
  end_date: string;
}): Promise<StatementsRefreshResponse>
```

<sub>`POST /statements/refresh` · `statementsRefresh`</sub>

## `plaid.transactionsEnrich`

Enrich locally-held transaction data — [API reference](/api/products/enrich/#transactionsenrich)

```ts
plaid.transactionsEnrich(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The account type for the requested transactions (either `depository` or `credit`). */
  account_type: string;
  /** An array of transaction objects to be enriched by Plaid. Maximum of 100 transactions per request. */
  transactions: (ClientProvidedTransaction)[];
  options?: TransactionsEnrichRequestOptions;
}): Promise<TransactionsEnrichResponse>
```

<sub>`POST /transactions/enrich` · `transactionsEnrich`</sub>

## `plaid.transactionsGet`

Get transaction data — [API reference](/api/products/transactions/#transactionsget)

```ts
plaid.transactionsGet(input: {
  client_id?: ApiClientId;
  options?: TransactionsGetRequestOptions;
  access_token: AccessToken;
  secret?: ApiSecret;
  /** The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  start_date: string;
  /** The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  end_date: string;
}): Promise<TransactionsGetResponse>
```

<sub>`POST /transactions/get` · `transactionsGet`</sub>

## `plaid.transactionsRecurringGet`

Fetch recurring transaction streams — [API reference](/api/products/transactions/#transactionsrecurringget)

```ts
plaid.transactionsRecurringGet(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
  options?: TransactionsRecurringGetRequestOptions;
  /** An optional list of `account_ids` to retrieve for the Item. Retrieves all active accounts on item if no `account_id`s are provided.  Note: An error will be returned if a provided `account_id` is not associated with the Item. */
  account_ids?: (string)[];
}): Promise<TransactionsRecurringGetResponse>
```

<sub>`POST /transactions/recurring/get` · `transactionsRecurringGet`</sub>

## `plaid.transactionsRefresh`

Refresh transaction data — [API reference](/api/products/transactions/#transactionsrefresh)

```ts
plaid.transactionsRefresh(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
}): Promise<TransactionsRefreshResponse>
```

<sub>`POST /transactions/refresh` · `transactionsRefresh`</sub>

## `plaid.transactionsSync`

Get incremental transaction updates on an Item — [API reference](/api/products/transactions/#transactionssync)

```ts
plaid.transactionsSync(input: {
  client_id?: ApiClientId;
  access_token: AccessToken;
  secret?: ApiSecret;
  /** The cursor value represents the last update requested. Providing it will cause the response to only return changes after this update. If omitted, the entire history of updates will be returned, starting with the first-added transactions on the Item. The cursor also accepts the special value of `"now"`, which can be used to fast-forward the cursor as part of migrating an existing Item from `/transactions/get` to `/transactions/sync`. For more information, see the [Transactions sync migration guide](https://plaid.com/docs/transactions/sync-migration/). Note that using the `"now"` value is not supported for any use case other than migrating existing Items from `/transactions/get`.  The upper-bound length of this cursor is 256 characters of base64. */
  cursor?: string;
  /** The number of transaction updates to fetch. */
  count?: number;
  options?: TransactionsSyncRequestOptions;
}): Promise<TransactionsSyncResponse>
```

<sub>`POST /transactions/sync` · `transactionsSync`</sub>

## `plaid.transferAuthorizationCancel`

Cancel a transfer authorization — [API reference](/api/products/transfer/initiating-transfers/#transferauthorizationcancel)

```ts
plaid.transferAuthorizationCancel(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  authorization_id: TransferAuthorizationId;
}): Promise<TransferAuthorizationCancelResponse>
```

<sub>`POST /transfer/authorization/cancel` · `transferAuthorizationCancel`</sub>

## `plaid.transferAuthorizationCreate`

Create a transfer authorization — [API reference](/api/products/transfer/initiating-transfers/#transferauthorizationcreate)

```ts
plaid.transferAuthorizationCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: TransferAccessToken;
  account_id: TransferAccountId;
  funding_account_id?: TransferMigratedFundingAccountIdRequest;
  /** Specify which ledger balance should be used to fund the transfer. You can find a list of `ledger_id`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to the id of the default ledger balance. */
  ledger_id?: string | null;
  payment_profile_token?: TransferPaymentProfileToken;
  type: TransferType;
  network: TransferNetwork;
  amount: TransferAmount;
  ach_class?: AchClass;
  wire_details?: TransferWireDetails;
  user: TransferAuthorizationUserInRequest;
  device?: TransferAuthorizationDevice;
  /** Plaid's unique identifier for the origination account for this authorization. If not specified, the default account will be used. */
  origination_account_id?: string;
  /** The currency of the transfer amount. The default value is "USD". */
  iso_currency_code?: string;
  idempotency_key?: TransferAuthorizationIdempotencyKey;
  /** If the end user is initiating the specific transfer themselves via an interactive UI, this should be `true`; for automatic recurring payments where the end user is not actually initiating each individual transfer, it should be `false`. This field is not currently used and is present to support planned future functionality. */
  user_present?: boolean | null;
  /** If set to `false`, Plaid will not offer a `guarantee_decision` for this request (Guarantee customers only). This field is deprecated in favor of `guarantee`. */
  with_guarantee?: boolean | null;
  /** Indicates whether the transfer should be evaluated for guarantee coverage. When set to `true`, Plaid assesses the transfer for guarantee coverage and returns a decision in the authorization response. When omitted or set to `false`, the authorization is evaluated without guarantee coverage. */
  request_guarantee?: boolean | null;
  /** The unique identifier returned by Plaid's [beacon](https://plaid.com/docs/transfer/guarantee/#using-a-beacon) when it is run on your webpage. */
  beacon_session_id?: string | null;
  /** The Plaid client ID that is the originator of this transfer. Only needed if creating transfers on behalf of another client as a [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms). */
  originator_client_id?: string | null;
  credit_funds_source?: TransferCreditFundsSource;
  /** Plaid's unique identifier for a test clock. This field may only be used when using `sandbox` environment. If provided, the `authorization` is created at the `virtual_time` on the provided test clock. */
  test_clock_id?: string | null;
  /** The key of the Ruleset for the transaction. If not provided, Signal will use the `default` ruleset. */
  ruleset_key?: string | null;
  custom_attributes?: TransferAuthorizationCustomAttributes;
}): Promise<TransferAuthorizationCreateResponse>
```

<sub>`POST /transfer/authorization/create` · `transferAuthorizationCreate`</sub>

## `plaid.transferBalanceGet`

(Deprecated) Retrieve a balance held with Plaid — [API reference](/none/)

```ts
plaid.transferBalanceGet(input: {
  client_id?: ApiClientId;
  /** Client ID of the end customer. */
  originator_client_id?: string | null;
  secret?: ApiSecret;
  type?: TransferBalanceType;
}): Promise<TransferBalanceGetResponse>
```

<sub>`POST /transfer/balance/get` · `transferBalanceGet`</sub>

## `plaid.transferCancel`

Cancel a transfer — [API reference](/api/products/transfer/initiating-transfers/#transfercancel)

```ts
plaid.transferCancel(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  transfer_id: TransferId;
  /** The Plaid client ID of the transfer originator. Should only be present if `client_id` is a third-party sender (TPS). */
  originator_client_id?: string | null;
  reason_code?: ReasonCode;
}): Promise<TransferCancelResponse>
```

<sub>`POST /transfer/cancel` · `transferCancel`</sub>

## `plaid.transferCapabilitiesGet`

Get RTP eligibility information of a transfer — [API reference](/api/products/transfer/account-linking/#transfercapabilitiesget)

```ts
plaid.transferCapabilitiesGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: TransferAccessToken;
  account_id: TransferAccountId;
  payment_profile_token?: PaymentProfileToken;
}): Promise<TransferCapabilitiesGetResponse>
```

<sub>`POST /transfer/capabilities/get` · `transferCapabilitiesGet`</sub>

## `plaid.transferConfigurationGet`

Get transfer product configuration — [API reference](/api/products/transfer/metrics/#transferconfigurationget)

```ts
plaid.transferConfigurationGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid client ID of the transfer originator. Should only be present if `client_id` is a [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms). */
  originator_client_id?: string | null;
}): Promise<TransferConfigurationGetResponse>
```

<sub>`POST /transfer/configuration/get` · `transferConfigurationGet`</sub>

## `plaid.transferCreate`

Create a transfer — [API reference](/api/products/transfer/initiating-transfers/#transfercreate)

```ts
plaid.transferCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  idempotency_key?: TransferCreateIdempotencyKey;
  access_token: TransferAccessToken;
  account_id: TransferAccountId;
  /** Plaid's unique identifier for a transfer authorization. This parameter also serves the purpose of acting as an idempotency identifier. */
  authorization_id: string;
  type?: TransferType;
  network?: TransferNetwork;
  amount?: TransferAmount;
  /** The transfer description, maximum of 15 characters (RTP transactions) or 10 characters (ACH transactions). Should represent why the money is moving, not your company name. For recommendations on setting the `description` field to avoid ACH returns, see [Description field recommendations](https://www.plaid.com/docs/transfer/creating-transfers/#description-field-recommendations).  If reprocessing a returned transfer, the `description` field must be `"Retry 1"` or `"Retry 2"`. You may retry a transfer up to 2 times, within 180 days of creating the original transfer. Only transfers that were returned with code `R01` or `R09` may be retried. */
  description: string;
  ach_class?: AchClass;
  user?: TransferUserInRequestDeprecated;
  metadata?: TransferMetadata;
  /** Plaid's unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. Otherwise, this field should be left blank. */
  origination_account_id?: string | null;
  /** The currency of the transfer amount. The default value is "USD". */
  iso_currency_code?: string;
  /** Plaid's unique identifier for a test clock. This field may only be used when using `sandbox` environment. If provided, the `transfer` is created at the `virtual_time` on the provided `test_clock`. */
  test_clock_id?: string | null;
  facilitator_fee?: TransferFacilitatorFee;
}): Promise<TransferCreateResponse>
```

<sub>`POST /transfer/create` · `transferCreate`</sub>

## `plaid.transferDiligenceDocumentUpload`

Upload transfer diligence document on behalf of the originator — [API reference](/api/products/transfer/platform-payments/#transferdiligencedocumentupload)

```ts
plaid.transferDiligenceDocumentUpload(input: {
  /** The Client ID of the originator whose document that you want to upload. */
  originator_client_id: string;
  /** A file to upload. The file size must be less than 20MB. Supported file extensions: .pdf. */
  file: string;
  purpose: TransferDocumentPurpose;
}): Promise<TransferDiligenceDocumentUploadResponse>
```

<sub>`POST /transfer/diligence/document/upload` · `transferDiligenceDocumentUpload`</sub>

## `plaid.transferDiligenceSubmit`

Submit transfer diligence on behalf of the originator — [API reference](/api/products/transfer/platform-payments/#transferdiligencesubmit)

```ts
plaid.transferDiligenceSubmit(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Client ID of the originator whose diligence that you want to submit. */
  originator_client_id: string;
  originator_diligence: TransferOriginatorDiligence;
}): Promise<TransferDiligenceSubmitResponse>
```

<sub>`POST /transfer/diligence/submit` · `transferDiligenceSubmit`</sub>

## `plaid.transferEventList`

List transfer events — [API reference](/api/products/transfer/reading-transfers/#transfereventlist)

```ts
plaid.transferEventList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start `created` datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  start_date?: string | null;
  /** The end `created` datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  end_date?: string | null;
  /** Plaid's unique identifier for a transfer. */
  transfer_id?: string | null;
  /** The account ID to get events for all transactions to/from an account. */
  account_id?: string | null;
  transfer_type?: TransferEventListTransferType;
  /** Filter events by event type. */
  event_types?: (TransferEventType)[];
  /** Plaid's unique identifier for a sweep. */
  sweep_id?: string;
  /** The maximum number of transfer events to return. If the number of events matching the above parameters is greater than `count`, the most recent events will be returned. */
  count?: number | null;
  /** The offset into the list of transfer events. When `count`=25 and `offset`=0, the first 25 events will be returned. When `count`=25 and `offset`=25, the next 25 events will be returned. */
  offset?: number | null;
  /** The origination account ID to get events for transfers from a specific origination account. */
  origination_account_id?: string | null;
  /** Filter transfer events to only those with the specified originator client. */
  originator_client_id?: string | null;
  /** Filter transfer events to only those with the specified `funding_account_id`. */
  funding_account_id?: string | null;
}): Promise<TransferEventListResponse>
```

<sub>`POST /transfer/event/list` · `transferEventList`</sub>

## `plaid.transferEventSync`

Sync transfer events — [API reference](/api/products/transfer/reading-transfers/#transfereventsync)

```ts
plaid.transferEventSync(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The latest (largest) `event_id` fetched via the sync endpoint, or 0 initially. */
  after_id: number;
  /** The maximum number of transfer events to return. */
  count?: number | null;
}): Promise<TransferEventSyncResponse>
```

<sub>`POST /transfer/event/sync` · `transferEventSync`</sub>

## `plaid.transferGet`

Retrieve a transfer — [API reference](/api/products/transfer/reading-transfers/#transferget)

```ts
plaid.transferGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  transfer_id?: TransferId;
  authorization_id?: TransferAuthorizationId;
  /** The Plaid client ID of the transfer originator. Should only be present if `client_id` is a third-party sender (TPS). */
  originator_client_id?: string | null;
}): Promise<TransferGetResponse>
```

<sub>`POST /transfer/get` · `transferGet`</sub>

## `plaid.transferIntentCreate`

Create a transfer intent object to invoke the Transfer UI — [API reference](/api/products/transfer/account-linking/#transferintentcreate)

```ts
plaid.transferIntentCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid `account_id` corresponding to the end-user account that will be debited or credited. */
  account_id?: string | null;
  funding_account_id?: TransferMigratedFundingAccountIdRequest;
  mode: TransferIntentCreateMode;
  network?: TransferIntentCreateNetwork;
  amount: TransferAmount;
  /** A description for the underlying transfer. Maximum of 15 characters. */
  description: string;
  ach_class?: AchClass;
  /** Plaid's unique identifier for the origination account for the intent. If not provided, the default account will be used. */
  origination_account_id?: string | null;
  user: TransferUserInRequest;
  metadata?: TransferMetadata;
  /** The currency of the transfer amount, e.g. "USD" */
  iso_currency_code?: string;
  /** When `true`, the transfer requires a `GUARANTEED` decision by Plaid to proceed (Guarantee customers only). */
  require_guarantee?: boolean | null;
}): Promise<TransferIntentCreateResponse>
```

<sub>`POST /transfer/intent/create` · `transferIntentCreate`</sub>

## `plaid.transferIntentGet`

Retrieve more information about a transfer intent — [API reference](/api/products/transfer/account-linking/#transferintentget)

```ts
plaid.transferIntentGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Plaid's unique identifier for a transfer intent object. */
  transfer_intent_id: string;
}): Promise<TransferIntentGetResponse>
```

<sub>`POST /transfer/intent/get` · `transferIntentGet`</sub>

## `plaid.transferLedgerDeposit`

Deposit funds into a Plaid Ledger balance — [API reference](/api/products/transfer/ledger/#transferledgerdeposit)

```ts
plaid.transferLedgerDeposit(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  originator_client_id?: TransferOriginatorClientId;
  funding_account_id?: TransferLedgerFundingAccountIdRequest;
  /** Specify which ledger balance to deposit to. Customers can find a list of `ledger_id`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to the id of the default ledger balance. */
  ledger_id?: string | null;
  /** A positive amount of how much will be deposited into ledger (decimal string with two digits of precision e.g. "5.50"). */
  amount: string;
  description?: SweepDescription;
  idempotency_key: LedgerDepositIdempotencyKey;
  network: TransferAchNetwork;
}): Promise<TransferLedgerDepositResponse>
```

<sub>`POST /transfer/ledger/deposit` · `transferLedgerDeposit`</sub>

## `plaid.transferLedgerDistribute`

Move available balance between ledgers — [API reference](/api/products/transfer/ledger/#transferledgerdistribute)

```ts
plaid.transferLedgerDistribute(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Ledger to pull money from. */
  from_ledger_id: string;
  /** The Ledger to credit money to. */
  to_ledger_id: string;
  /** The amount to move (decimal string with two digits of precision e.g. "10.00"). Amount must be positive. */
  amount: string;
  idempotency_key: LedgerDistributeIdempotencyKey;
  /** An optional description for the ledger distribute operation. */
  description?: string;
}): Promise<TransferLedgerDistributeResponse>
```

<sub>`POST /transfer/ledger/distribute` · `transferLedgerDistribute`</sub>

## `plaid.transferLedgerEventList`

List transfer ledger events — [API reference](/api/products/transfer/ledger/#transferledgereventlist)

```ts
plaid.transferLedgerEventList(input: {
  client_id?: ApiClientId;
  /** Filter transfer events to only those with the specified originator client. (This field is specifically for resellers. Caller's client ID will be used if this field is not specified.) */
  originator_client_id?: string | null;
  secret?: ApiSecret;
  /** The start created datetime of transfers to list. This should be in RFC 3339 format (i.e. 2019-12-06T22:35:49Z) */
  start_date?: string | null;
  /** The end created datetime of transfers to list. This should be in RFC 3339 format (i.e. 2019-12-06T22:35:49Z) */
  end_date?: string | null;
  /** Plaid's unique identifier for a Plaid Ledger Balance. */
  ledger_id?: string | null;
  /** Plaid's unique identifier for the ledger event. */
  ledger_event_id?: string | null;
  source_type?: LedgerEventSourceType;
  /** Plaid's unique identifier for a transfer, sweep, or refund. */
  source_id?: string | null;
  /** The maximum number of transfer events to return. If the number of events matching the above parameters is greater than `count`, the most recent events will be returned. */
  count?: number | null;
  /** The offset into the list of transfer events. When `count`=25 and `offset`=0, the first 25 events will be returned. When `count`=25 and `offset`=25, the next 25 events will be returned. */
  offset?: number | null;
}): Promise<TransferLedgerEventListResponse>
```

<sub>`POST /transfer/ledger/event/list` · `transferLedgerEventList`</sub>

## `plaid.transferLedgerGet`

Retrieve Plaid Ledger balance — [API reference](/api/products/transfer/ledger/#transferledgerget)

```ts
plaid.transferLedgerGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Specify which ledger balance to get. Customers can find a list of `ledger_id`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to the id of the default ledger balance. */
  ledger_id?: string | null;
  /** Client ID of the end customer. */
  originator_client_id?: string | null;
}): Promise<TransferLedgerGetResponse>
```

<sub>`POST /transfer/ledger/get` · `transferLedgerGet`</sub>

## `plaid.transferLedgerWithdraw`

Withdraw funds from a Plaid Ledger balance — [API reference](/api/products/transfer/ledger/#transferledgerwithdraw)

```ts
plaid.transferLedgerWithdraw(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  originator_client_id?: TransferOriginatorClientId;
  funding_account_id?: TransferLedgerFundingAccountIdRequest;
  /** Specify which ledger balance to withdraw from. Customers can find a list of `ledger_id`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to the id of the default ledger balance. */
  ledger_id?: string | null;
  /** A positive amount of how much will be withdrawn from the ledger balance (decimal string with two digits of precision e.g. "5.50"). */
  amount: string;
  description?: SweepDescription;
  idempotency_key: LedgerWithdrawIdempotencyKey;
  network: TransferNetwork;
}): Promise<TransferLedgerWithdrawResponse>
```

<sub>`POST /transfer/ledger/withdraw` · `transferLedgerWithdraw`</sub>

## `plaid.transferList`

List transfers — [API reference](/api/products/transfer/reading-transfers/#transferlist)

```ts
plaid.transferList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start `created` datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  start_date?: string | null;
  /** The end `created` datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  end_date?: string | null;
  /** The maximum number of transfers to return. */
  count?: number;
  /** The number of transfers to skip before returning results. */
  offset?: number;
  /** Filter transfers to only those originated through the specified origination account. */
  origination_account_id?: string | null;
  /** Filter transfers to only those with the specified originator client. */
  originator_client_id?: string | null;
  /** Filter transfers to only those with the specified `funding_account_id`. */
  funding_account_id?: string | null;
}): Promise<TransferListResponse>
```

<sub>`POST /transfer/list` · `transferList`</sub>

## `plaid.transferMetricsGet`

Get transfer product usage metrics — [API reference](/api/products/transfer/metrics/#transfermetricsget)

```ts
plaid.transferMetricsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid client ID of the transfer originator. Should only be present if `client_id` is a [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms). */
  originator_client_id?: string | null;
}): Promise<TransferMetricsGetResponse>
```

<sub>`POST /transfer/metrics/get` · `transferMetricsGet`</sub>

## `plaid.transferMigrateAccount`

Migrate account into Transfers — [API reference](/api/products/transfer/account-linking/#transfermigrate_account)

```ts
plaid.transferMigrateAccount(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The user's account number. */
  account_number: string;
  /** The user's routing number. */
  routing_number: string;
  /** The user's wire transfer routing number. This is the ABA number; for some institutions, this may differ from the ACH number used in `routing_number`. This field must be set for the created item to be eligible for wire transfers. */
  wire_routing_number?: string;
  /** The type of the bank account (`checking` or `savings`). */
  account_type: string;
}): Promise<TransferMigrateAccountResponse>
```

<sub>`POST /transfer/migrate_account` · `transferMigrateAccount`</sub>

## `plaid.transferOriginatorCreate`

Create a new originator — [API reference](/api/products/transfer/platform-payments/#transferoriginatorcreate)

```ts
plaid.transferOriginatorCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The company name of the end customer being created. This will be displayed in public-facing surfaces, e.g. Plaid Dashboard. */
  company_name: string;
}): Promise<TransferOriginatorCreateResponse>
```

<sub>`POST /transfer/originator/create` · `transferOriginatorCreate`</sub>

## `plaid.transferOriginatorFundingAccountCreate`

Create a new funding account for an originator — [API reference](/api/products/transfer/platform-payments/#transferoriginatorfunding_accountcreate)

```ts
plaid.transferOriginatorFundingAccountCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid client ID of the transfer originator. */
  originator_client_id: string;
  funding_account: TransferFundingAccountWithDisplayName;
}): Promise<TransferOriginatorFundingAccountCreateResponse>
```

<sub>`POST /transfer/originator/funding_account/create` · `transferOriginatorFundingAccountCreate`</sub>

## `plaid.transferOriginatorFundingAccountUpdate`

Update the funding account associated with the originator — [API reference](/api/products/transfer/platform-payments/#transferoriginatorfunding_accountupdate)

```ts
plaid.transferOriginatorFundingAccountUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The Plaid client ID of the transfer originator. */
  originator_client_id: string;
  funding_account: TransferFundingAccount;
}): Promise<TransferOriginatorFundingAccountUpdateResponse>
```

<sub>`POST /transfer/originator/funding_account/update` · `transferOriginatorFundingAccountUpdate`</sub>

## `plaid.transferOriginatorGet`

Get status of an originator's onboarding — [API reference](/api/products/transfer/platform-payments/#transferoriginatorget)

```ts
plaid.transferOriginatorGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Client ID of the end customer (i.e. the originator). */
  originator_client_id: string;
}): Promise<TransferOriginatorGetResponse>
```

<sub>`POST /transfer/originator/get` · `transferOriginatorGet`</sub>

## `plaid.transferOriginatorList`

Get status of all originators' onboarding — [API reference](/api/products/transfer/platform-payments/#transferoriginatorlist)

```ts
plaid.transferOriginatorList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The maximum number of originators to return. */
  count?: number | null;
  /** The number of originators to skip before returning results. */
  offset?: number | null;
}): Promise<TransferOriginatorListResponse>
```

<sub>`POST /transfer/originator/list` · `transferOriginatorList`</sub>

## `plaid.transferPlatformOriginatorCreate`

Create an originator for Transfer for Platforms customers — [API reference](/api/products/transfer/platform-payments/#transferplatformoriginatorcreate)

```ts
plaid.transferPlatformOriginatorCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  originator_client_id: TransferPlatformOriginatorClientId;
  tos_acceptance_metadata: TransferPlatformTosAcceptanceMetadata;
  /** ISO8601 timestamp indicating the most recent time the platform collected onboarding data from the originator */
  originator_reviewed_at: string;
  /** The webhook URL to which a `PLATFORM_ONBOARDING_UPDATE` webhook should be sent. */
  webhook?: string;
}): Promise<TransferPlatformOriginatorCreateResponse>
```

<sub>`POST /transfer/platform/originator/create` · `transferPlatformOriginatorCreate`</sub>

## `plaid.transferPlatformPersonCreate`

Create a person associated with an originator — [API reference](/api/products/transfer/platform-payments/#transferplatformpersoncreate)

```ts
plaid.transferPlatformPersonCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  originator_client_id: TransferPlatformOriginatorClientId;
  name?: TransferPlatformPersonName;
  /** A valid email address. Must not have leading or trailing spaces. */
  email_address?: string;
  /** A valid phone number in E.164 format. Phone number input may be validated against valid number ranges; number strings that do not match a real-world phone numbering scheme may cause the request to fail, even in the Sandbox test environment. */
  phone_number?: string;
  address?: TransferPlatformPersonAddress;
  id_number?: TransferPlatformPersonIdNumber;
  /** The date of birth of the person. Formatted as YYYY-MM-DD. */
  date_of_birth?: string;
  /** The relationship between this person and the originator they are related to. */
  relationship_to_originator?: string;
  /** The percentage of ownership this person has in the onboarding business. Only applicable to beneficial owners with 25% or more ownership. */
  ownership_percentage?: number;
  /** The title of the person at the business. Only applicable to control persons - for example, "CEO", "President", "Owner", etc. */
  title?: string;
}): Promise<TransferPlatformPersonCreateResponse>
```

<sub>`POST /transfer/platform/person/create` · `transferPlatformPersonCreate`</sub>

## `plaid.transferPlatformRequirementSubmit`

Submit additional onboarding information on behalf of an originator — [API reference](/api/products/transfer/platform-payments/#transferplatformrequirementsubmit)

```ts
plaid.transferPlatformRequirementSubmit(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The client ID of the originator */
  originator_client_id: string;
  /** Use the `/transfer/platform/requirement/submit` endpoint to submit a list of requirement submissions that all relate to the originator. Must contain between 1 and 50 requirement submissions. See [Requirement type schema documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/) for a list of requirements and possible values. */
  requirement_submissions: (TransferPlatformRequirementSubmission)[];
}): Promise<TransferPlatformRequirementSubmitResponse>
```

<sub>`POST /transfer/platform/requirement/submit` · `transferPlatformRequirementSubmit`</sub>

## `plaid.transferQuestionnaireCreate`

Generate a Plaid-hosted onboarding UI URL. — [API reference](/api/products/transfer/platform-payments/#transferquestionnairecreate)

```ts
plaid.transferQuestionnaireCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Client ID of the end customer. */
  originator_client_id: string;
  /** URL the end customer will be redirected to after completing questions in Plaid-hosted onboarding flow. */
  redirect_uri: string;
}): Promise<TransferQuestionnaireCreateResponse>
```

<sub>`POST /transfer/questionnaire/create` · `transferQuestionnaireCreate`</sub>

## `plaid.transferRecurringCancel`

Cancel a recurring transfer. — [API reference](/api/products/transfer/recurring-transfers/#transferrecurringcancel)

```ts
plaid.transferRecurringCancel(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  recurring_transfer_id: RecurringTransferId;
}): Promise<TransferRecurringCancelResponse>
```

<sub>`POST /transfer/recurring/cancel` · `transferRecurringCancel`</sub>

## `plaid.transferRecurringCreate`

Create a recurring transfer — [API reference](/api/products/transfer/recurring-transfers/#transferrecurringcreate)

```ts
plaid.transferRecurringCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  access_token: TransferAccessToken;
  idempotency_key: TransferRecurringIdempotencyKey;
  account_id: TransferAccountId;
  /** Specify the account used to fund the transfer. Customers can find a list of `funding_account_id`s in the Accounts page of your Plaid Dashboard, under the "Account ID" column. If this field is left blank, it will default to the default `funding_account_id` specified during onboarding. */
  funding_account_id?: string | null;
  type: TransferType;
  network: TransferRecurringNetwork;
  ach_class?: AchClass;
  amount: TransferAmount;
  /** If the end user is initiating the specific transfer themselves via an interactive UI, this should be `true`; for automatic recurring payments where the end user is not actually initiating each individual transfer, it should be `false`. */
  user_present?: boolean | null;
  /** The currency of the transfer amount. The default value is "USD". */
  iso_currency_code?: string;
  /** The description of the recurring transfer. */
  description: string;
  /** Plaid's unique identifier for a test clock. This field may only be used when using the `sandbox` environment. If provided, the created `recurring_transfer` is associated with the `test_clock`. New originations are automatically generated when the associated `test_clock` advances. For more details, see [Simulating recurring transfers](https://plaid.com/docs/transfer/sandbox/#simulating-recurring-transfers). */
  test_clock_id?: string | null;
  schedule: TransferRecurringSchedule;
  user: TransferUserInRequest;
  device?: TransferDevice;
}): Promise<TransferRecurringCreateResponse>
```

<sub>`POST /transfer/recurring/create` · `transferRecurringCreate`</sub>

## `plaid.transferRecurringGet`

Retrieve a recurring transfer — [API reference](/api/products/transfer/recurring-transfers/#transferrecurringget)

```ts
plaid.transferRecurringGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  recurring_transfer_id: RecurringTransferId;
}): Promise<TransferRecurringGetResponse>
```

<sub>`POST /transfer/recurring/get` · `transferRecurringGet`</sub>

## `plaid.transferRecurringList`

List recurring transfers — [API reference](/api/products/transfer/recurring-transfers/#transferrecurringlist)

```ts
plaid.transferRecurringList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start `created` datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  start_time?: string | null;
  /** The end `created` datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`) */
  end_time?: string | null;
  /** The maximum number of recurring transfers to return. */
  count?: number;
  /** The number of recurring transfers to skip before returning results. */
  offset?: number;
  /** Filter recurring transfers to only those with the specified `funding_account_id`. */
  funding_account_id?: string | null;
}): Promise<TransferRecurringListResponse>
```

<sub>`POST /transfer/recurring/list` · `transferRecurringList`</sub>

## `plaid.transferRefundCancel`

Cancel a refund — [API reference](/api/products/transfer/refunds/#transferrefundcancel)

```ts
plaid.transferRefundCancel(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  refund_id: TransferRefundId;
}): Promise<TransferRefundCancelResponse>
```

<sub>`POST /transfer/refund/cancel` · `transferRefundCancel`</sub>

## `plaid.transferRefundCreate`

Create a refund — [API reference](/api/products/transfer/refunds/#transferrefundcreate)

```ts
plaid.transferRefundCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  transfer_id: TransferIdForRefund;
  amount: TransferRefundAmount;
  idempotency_key: TransferRefundIdempotencyKey;
}): Promise<TransferRefundCreateResponse>
```

<sub>`POST /transfer/refund/create` · `transferRefundCreate`</sub>

## `plaid.transferRefundGet`

Retrieve a refund — [API reference](/api/products/transfer/refunds/#transferrefundget)

```ts
plaid.transferRefundGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  refund_id: TransferRefundId;
}): Promise<TransferRefundGetResponse>
```

<sub>`POST /transfer/refund/get` · `transferRefundGet`</sub>

## `plaid.transferRepaymentList`

Lists historical repayments — [API reference](/api/products/transfer/#transferrepaymentlist)

```ts
plaid.transferRepaymentList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start `created` datetime of repayments to return (RFC 3339 format). */
  start_date?: string | null;
  /** The end `created` datetime of repayments to return (RFC 3339 format). */
  end_date?: string | null;
  /** The maximum number of repayments to return. */
  count?: number | null;
  /** The number of repayments to skip before returning results. */
  offset?: number;
}): Promise<TransferRepaymentListResponse>
```

<sub>`POST /transfer/repayment/list` · `transferRepaymentList`</sub>

## `plaid.transferRepaymentReturnList`

List the returns included in a repayment — [API reference](/api/products/transfer/#transferrepaymentreturnlist)

```ts
plaid.transferRepaymentReturnList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Identifier of the repayment to query. */
  repayment_id: string;
  /** The maximum number of repayments to return. */
  count?: number | null;
  /** The number of repayments to skip before returning results. */
  offset?: number;
}): Promise<TransferRepaymentReturnListResponse>
```

<sub>`POST /transfer/repayment/return/list` · `transferRepaymentReturnList`</sub>

## `plaid.transferReturnRecover`

Report a return recovery — [API reference](/api/products/transfer/#transferreturnrecover)

```ts
plaid.transferReturnRecover(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  transfer_id: TransferReturnRecoverTransferId;
  amount: TransferReturnRecoverAmount;
  idempotency_key: TransferReturnRecoverIdempotencyKey;
}): Promise<TransferReturnRecoverResponse>
```

<sub>`POST /transfer/return/recover` · `transferReturnRecover`</sub>

## `plaid.transferSweepGet`

Retrieve a sweep — [API reference](/api/products/transfer/reading-transfers/#transfersweepget)

```ts
plaid.transferSweepGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Plaid's unique identifier for the sweep (UUID) or a shortened form consisting of the first 8 characters of the identifier (8-digit hexadecimal string). */
  sweep_id: string;
}): Promise<TransferSweepGetResponse>
```

<sub>`POST /transfer/sweep/get` · `transferSweepGet`</sub>

## `plaid.transferSweepList`

List sweeps — [API reference](/api/products/transfer/reading-transfers/#transfersweeplist)

```ts
plaid.transferSweepList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The start `created` datetime of sweeps to return (RFC 3339 format). */
  start_date?: string | null;
  /** The end `created` datetime of sweeps to return (RFC 3339 format). */
  end_date?: string | null;
  /** The maximum number of sweeps to return. */
  count?: number | null;
  /** The number of sweeps to skip before returning results. */
  offset?: number;
  /** Filter sweeps to only those with the specified amount. */
  amount?: string | null;
  status?: SweepStatus;
  /** Filter sweeps to only those with the specified originator client. */
  originator_client_id?: string | null;
  /** Filter sweeps to only those with the specified `funding_account_id`. */
  funding_account_id?: string | null;
  /** Filter sweeps to only those with the included `transfer_id`. */
  transfer_id?: string | null;
  trigger?: SweepTrigger;
}): Promise<TransferSweepListResponse>
```

<sub>`POST /transfer/sweep/list` · `transferSweepList`</sub>

## `plaid.userAccountSessionEventSend`

Send User Account Session Event — [API reference](/api/products/layer/#user_accountsessioneventsend)

```ts
plaid.userAccountSessionEventSend(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** Optional cohort identifier for the user session. */
  cohort_id?: string;
  /** The Link session identifier. */
  link_session_id: string;
  event: UserAccountSessionEvent;
}): Promise<UserAccountSessionEventSendResponse>
```

<sub>`POST /user_account/session/event/send` · `userAccountSessionEventSend`</sub>

## `plaid.userAccountSessionGet`

Retrieve User Account — [API reference](/api/products/layer/#user_accountsessionget)

```ts
plaid.userAccountSessionGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The public token generated by the end user Layer session. */
  public_token: string;
}): Promise<UserAccountSessionGetResponse>
```

<sub>`POST /user_account/session/get` · `userAccountSessionGet`</sub>

## `plaid.userCreate`

Create user — [API reference](/api/users/#usercreate)

```ts
plaid.userCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** A unique ID representing the end user. Maximum of 128 characters. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. */
  client_user_id: string;
  identity?: ClientUserIdentity;
  /** A unique ID representing a CRA reseller's end customer. Maximum of 128 characters. */
  end_customer?: string;
  consumer_report_user_identity?: ConsumerReportUserIdentity;
  /** If your integration with the User API predates December 10, 2025, set this field to `true` to opt into the [New User APIs](https://plaid.com/docs/api/users/user-apis/). When enabled, you can use the `identity` field instead of `consumer_report_user_identity`. */
  with_upgraded_user?: boolean;
}, options?: { headers?: { "Plaid-New-User-API-Enabled"?: boolean } }): Promise<UserCreateResponse>
```

<sub>`POST /user/create` · `userCreate`</sub>

## `plaid.userFinancialDataRefresh`

Refresh user items for Financial-Insights bundle — [API reference](/api/products/transactions/#userfinancialdatarefresh)

```ts
plaid.userFinancialDataRefresh(input: {
  /** A Plaid-generated ID that identifies the end user. */
  user_id: string;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<UserFinancialDataRefreshResponse>
```

<sub>`POST /user/financial_data/refresh` · `userFinancialDataRefresh`</sub>

## `plaid.userGet`

Retrieve user identity and information — [API reference](/api/users/#userget)

```ts
plaid.userGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id: NewUserId;
}, options?: { headers?: { "Plaid-New-User-API-Enabled"?: boolean } }): Promise<UserGetResponse>
```

<sub>`POST /user/get` · `userGet`</sub>

## `plaid.userIdentityRemove`

Remove user identity data — [API reference](/api/users/#useridentityremove)

```ts
plaid.userIdentityRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id: NewUserId;
}, options?: { headers?: { "Plaid-New-User-API-Enabled"?: boolean } }): Promise<UserIdentityRemoveResponse>
```

<sub>`POST /user/identity/remove` · `userIdentityRemove`</sub>

## `plaid.userItemsAssociate`

Associate Items to a User — [API reference](/api/users/#useritemsassociate)

```ts
plaid.userItemsAssociate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id: NewUserId;
  /** An array of `item_id`s to be associated with the `user_id`. */
  item_ids: (ItemId)[];
}): Promise<UserItemsAssociateResponse>
```

<sub>`POST /user/items/associate` · `userItemsAssociate`</sub>

## `plaid.userItemsGet`

Get Items associated with a User — [API reference](/api/users/#useritemsget)

```ts
plaid.userItemsGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  user_id?: NewUserId;
}): Promise<UserItemsGetResponse>
```

<sub>`POST /user/items/get` · `userItemsGet`</sub>

## `plaid.userItemsRemove`

Remove Items from a User — [API reference](/api/users/#useritemsremove)

```ts
plaid.userItemsRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  user_id?: NewUserId;
  /** An array of `item_id`s to be deleted. All Items for removal must be currently associated with the provided `user_id` or `user_token`. Otherwise, the entire operation will error and no Items will be deleted. */
  item_ids: (ItemId)[];
}): Promise<UserItemsRemoveResponse>
```

<sub>`POST /user/items/remove` · `userItemsRemove`</sub>

## `plaid.userProductsTerminate`

Terminate user-based products — [API reference](/api/users/#userproductsterminate)

```ts
plaid.userProductsTerminate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id: NewUserId;
  reason_code: ProductsTerminateReasonCode;
  /** Additional context or details about the reason for terminating user-based products. Personally identifiable information, such as an email address or phone number, should not be included in the `reason_note`. */
  reason_note?: string | null;
}): Promise<UserProductsTerminateResponse>
```

<sub>`POST /user/products/terminate` · `userProductsTerminate`</sub>

## `plaid.userRemove`

Remove user — [API reference](/api/users/#userremove)

```ts
plaid.userRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  user_token?: UserToken;
}, options?: { headers?: { "Plaid-New-User-API-Enabled"?: boolean } }): Promise<UserRemoveResponse>
```

<sub>`POST /user/remove` · `userRemove`</sub>

## `plaid.userThirdPartyTokenCreate`

Create a third-party user token — [API reference](/api/users/#userthirdpartytokencreate)

```ts
plaid.userThirdPartyTokenCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_token?: UserToken;
  /** The Plaid API `client_id` of the third-party client the token will be shared with. The token will only be valid for the specified client. */
  third_party_client_id: string;
  /** The expiration date and time for the third-party user token in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). The expiration is restricted to a maximum of 24 hours from the token's creation time. If not provided, the token will automatically expire after 24 hours. */
  expiration_time?: string | null;
  user_id?: NewUserId;
}): Promise<UserThirdPartyTokenCreateResponse>
```

<sub>`POST /user/third_party_token/create` · `userThirdPartyTokenCreate`</sub>

## `plaid.userThirdPartyTokenRemove`

Remove a third-party user token — [API reference](/api/users/#userthirdpartytokenremove)

```ts
plaid.userThirdPartyTokenRemove(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  third_party_user_token: ThirdPartyUserToken;
}): Promise<UserThirdPartyTokenRemoveResponse>
```

<sub>`POST /user/third_party_token/remove` · `userThirdPartyTokenRemove`</sub>

## `plaid.userTransactionsRefresh`

Refresh user items for Transactions bundle — [API reference](/api/products/transactions/#usertransactionsrefresh)

```ts
plaid.userTransactionsRefresh(input: {
  /** A Plaid-generated ID that identifies the end user. */
  user_id: string;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<UserTransactionsRefreshResponse>
```

<sub>`POST /user/transactions/refresh` · `userTransactionsRefresh`</sub>

## `plaid.userUpdate`

Update user information — [API reference](/api/users/#userupdate)

```ts
plaid.userUpdate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  user_id?: NewUserId;
  identity?: ClientUserIdentity;
  user_token?: UserToken;
  consumer_report_user_identity?: ConsumerReportUserIdentity;
}, options?: { headers?: { "Plaid-New-User-API-Enabled"?: boolean } }): Promise<UserUpdateResponse>
```

<sub>`POST /user/update` · `userUpdate`</sub>

## `plaid.walletCreate`

Create an e-wallet — [API reference](/api/products/virtual-accounts/#walletcreate)

```ts
plaid.walletCreate(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  iso_currency_code: WalletIsoCurrencyCode;
}): Promise<WalletCreateResponse>
```

<sub>`POST /wallet/create` · `walletCreate`</sub>

## `plaid.walletGet`

Fetch an e-wallet — [API reference](/api/products/virtual-accounts/#walletget)

```ts
plaid.walletGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the e-wallet */
  wallet_id: string;
}): Promise<WalletGetResponse>
```

<sub>`POST /wallet/get` · `walletGet`</sub>

## `plaid.walletList`

Fetch a list of e-wallets — [API reference](/api/products/virtual-accounts/#walletlist)

```ts
plaid.walletList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  iso_currency_code?: WalletIsoCurrencyCode;
  /** A base64 value representing the latest e-wallet that has already been requested. Set this to `next_cursor` received from the previous `/wallet/list` request. If provided, the response will only contain e-wallets created before that e-wallet. If omitted, the response will contain e-wallets starting from the most recent, and in descending order. */
  cursor?: string;
  /** The number of e-wallets to fetch */
  count?: number;
}): Promise<WalletListResponse>
```

<sub>`POST /wallet/list` · `walletList`</sub>

## `plaid.walletTransactionExecute`

Execute a transaction using an e-wallet — [API reference](/api/products/virtual-accounts/#wallettransactionexecute)

```ts
plaid.walletTransactionExecute(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  idempotency_key: WalletTransactionIdempotencyKey;
  /** The ID of the e-wallet to debit from */
  wallet_id: string;
  counterparty: WalletTransactionCounterparty;
  amount: WalletTransactionAmount;
  /** A reference for the transaction. This must be an alphanumeric string with 6 to 18 characters and must not contain any special characters or spaces. Ensure that the `reference` field is unique for each transaction. */
  reference: string;
  originating_fund_source?: OriginatingFundSource;
}): Promise<WalletTransactionExecuteResponse>
```

<sub>`POST /wallet/transaction/execute` · `walletTransactionExecute`</sub>

## `plaid.walletTransactionGet`

Fetch an e-wallet transaction — [API reference](/api/products/virtual-accounts/#wallettransactionget)

```ts
plaid.walletTransactionGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the transaction to fetch */
  transaction_id: string;
}): Promise<WalletTransactionGetResponse>
```

<sub>`POST /wallet/transaction/get` · `walletTransactionGet`</sub>

## `plaid.walletTransactionList`

List e-wallet transactions — [API reference](/api/products/virtual-accounts/#wallettransactionlist)

```ts
plaid.walletTransactionList(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The ID of the e-wallet to fetch transactions from */
  wallet_id: string;
  /** A value representing the latest transaction to be included in the response. Set this from `next_cursor` received in the previous `/wallet/transaction/list` request. If provided, the response will only contain that transaction and transactions created before it. If omitted, the response will contain transactions starting from the most recent, and in descending order by the `created_at` time. */
  cursor?: string;
  /** The number of transactions to fetch */
  count?: number;
  options?: WalletTransactionListRequestOptions;
}): Promise<WalletTransactionListResponse>
```

<sub>`POST /wallet/transaction/list` · `walletTransactionList`</sub>

## `plaid.watchlistScreeningEntityCreate`

Create a watchlist screening for an entity — [API reference](/api/products/monitor/#watchlist_screeningentitycreate)

```ts
plaid.watchlistScreeningEntityCreate(input: {
  search_terms: EntityWatchlistSearchTerms;
  client_user_id?: ClientUserId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<WatchlistScreeningEntityCreateResponse>
```

<sub>`POST /watchlist_screening/entity/create` · `watchlistScreeningEntityCreate`</sub>

## `plaid.watchlistScreeningEntityGet`

Get an entity screening — [API reference](/api/products/monitor/#watchlist_screeningentityget)

```ts
plaid.watchlistScreeningEntityGet(input: {
  entity_watchlist_screening_id: EntityWatchlistScreeningId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<WatchlistScreeningEntityGetResponse>
```

<sub>`POST /watchlist_screening/entity/get` · `watchlistScreeningEntityGet`</sub>

## `plaid.watchlistScreeningEntityHistoryList`

List history for entity watchlist screenings — [API reference](/api/products/monitor/#watchlist_screeningentityhistorylist)

```ts
plaid.watchlistScreeningEntityHistoryList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  entity_watchlist_screening_id: EntityWatchlistScreeningId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningEntityHistoryListResponse>
```

<sub>`POST /watchlist_screening/entity/history/list` · `watchlistScreeningEntityHistoryList`</sub>

## `plaid.watchlistScreeningEntityHitList`

List hits for entity watchlist screenings — [API reference](/api/products/monitor/#watchlist_screeningentityhitlist)

```ts
plaid.watchlistScreeningEntityHitList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  entity_watchlist_screening_id: EntityWatchlistScreeningId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningEntityHitListResponse>
```

<sub>`POST /watchlist_screening/entity/hit/list` · `watchlistScreeningEntityHitList`</sub>

## `plaid.watchlistScreeningEntityList`

List entity watchlist screenings — [API reference](/api/products/monitor/#watchlist_screeningentitylist)

```ts
plaid.watchlistScreeningEntityList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  entity_watchlist_program_id: EntityWatchlistProgramId;
  client_user_id?: ClientUserId;
  status?: WatchlistScreeningStatus;
  assignee?: DashboardUserId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningEntityListResponse>
```

<sub>`POST /watchlist_screening/entity/list` · `watchlistScreeningEntityList`</sub>

## `plaid.watchlistScreeningEntityProgramGet`

Get entity watchlist screening program — [API reference](/api/products/monitor/#watchlist_screeningentityprogramget)

```ts
plaid.watchlistScreeningEntityProgramGet(input: {
  entity_watchlist_program_id: EntityWatchlistProgramId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<WatchlistScreeningEntityProgramGetResponse>
```

<sub>`POST /watchlist_screening/entity/program/get` · `watchlistScreeningEntityProgramGet`</sub>

## `plaid.watchlistScreeningEntityProgramList`

List entity watchlist screening programs — [API reference](/api/products/monitor/#watchlist_screeningentityprogramlist)

```ts
plaid.watchlistScreeningEntityProgramList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningEntityProgramListResponse>
```

<sub>`POST /watchlist_screening/entity/program/list` · `watchlistScreeningEntityProgramList`</sub>

## `plaid.watchlistScreeningEntityReviewCreate`

Create a review for an entity watchlist screening — [API reference](/api/products/monitor/#watchlist_screeningentityreviewcreate)

```ts
plaid.watchlistScreeningEntityReviewCreate(input: {
  /** Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once confirmed. In most cases, confirmed hits indicate that the customer should be rejected. */
  confirmed_hits: (EntityWatchlistScreeningHitId)[];
  /** Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed. */
  dismissed_hits: (EntityWatchlistScreeningHitId)[];
  comment?: ReviewComment;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  entity_watchlist_screening_id: EntityWatchlistScreeningId;
}): Promise<WatchlistScreeningEntityReviewCreateResponse>
```

<sub>`POST /watchlist_screening/entity/review/create` · `watchlistScreeningEntityReviewCreate`</sub>

## `plaid.watchlistScreeningEntityReviewList`

List reviews for entity watchlist screenings — [API reference](/api/products/monitor/#watchlist_screeningentityreviewlist)

```ts
plaid.watchlistScreeningEntityReviewList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  entity_watchlist_screening_id: EntityWatchlistScreeningId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningEntityReviewListResponse>
```

<sub>`POST /watchlist_screening/entity/review/list` · `watchlistScreeningEntityReviewList`</sub>

## `plaid.watchlistScreeningEntityUpdate`

Update an entity screening — [API reference](/api/products/monitor/#watchlist_screeningentityupdate)

```ts
plaid.watchlistScreeningEntityUpdate(input: {
  entity_watchlist_screening_id: EntityWatchlistScreeningId;
  search_terms?: UpdateEntityScreeningRequestSearchTerms;
  assignee?: DashboardUserId;
  status?: WatchlistScreeningStatus;
  client_user_id?: ClientUserId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  reset_fields?: WatchlistScreeningEntityUpdateRequestResettableFieldList;
}): Promise<WatchlistScreeningEntityUpdateResponse>
```

<sub>`POST /watchlist_screening/entity/update` · `watchlistScreeningEntityUpdate`</sub>

## `plaid.watchlistScreeningIndividualCreate`

Create a watchlist screening for a person — [API reference](/api/products/monitor/#watchlist_screeningindividualcreate)

```ts
plaid.watchlistScreeningIndividualCreate(input: {
  search_terms: WatchlistScreeningRequestSearchTerms;
  client_user_id?: ClientUserId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
}): Promise<WatchlistScreeningIndividualCreateResponse>
```

<sub>`POST /watchlist_screening/individual/create` · `watchlistScreeningIndividualCreate`</sub>

## `plaid.watchlistScreeningIndividualGet`

Retrieve an individual watchlist screening — [API reference](/api/products/monitor/#watchlist_screeningindividualget)

```ts
plaid.watchlistScreeningIndividualGet(input: {
  watchlist_screening_id: WatchlistScreeningIndividualId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<WatchlistScreeningIndividualGetResponse>
```

<sub>`POST /watchlist_screening/individual/get` · `watchlistScreeningIndividualGet`</sub>

## `plaid.watchlistScreeningIndividualHistoryList`

List history for individual watchlist screenings — [API reference](/api/products/monitor/#watchlist_screeningindividualhistorylist)

```ts
plaid.watchlistScreeningIndividualHistoryList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  watchlist_screening_id: WatchlistScreeningIndividualId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningIndividualHistoryListResponse>
```

<sub>`POST /watchlist_screening/individual/history/list` · `watchlistScreeningIndividualHistoryList`</sub>

## `plaid.watchlistScreeningIndividualHitList`

List hits for individual watchlist screening — [API reference](/api/products/monitor/#watchlist_screeningindividualhitlist)

```ts
plaid.watchlistScreeningIndividualHitList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  watchlist_screening_id: WatchlistScreeningIndividualId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningIndividualHitListResponse>
```

<sub>`POST /watchlist_screening/individual/hit/list` · `watchlistScreeningIndividualHitList`</sub>

## `plaid.watchlistScreeningIndividualList`

List Individual Watchlist Screenings — [API reference](/api/products/monitor/#watchlist_screeningindividuallist)

```ts
plaid.watchlistScreeningIndividualList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  watchlist_program_id: WatchlistProgramId;
  client_user_id?: ClientUserId;
  status?: WatchlistScreeningStatus;
  assignee?: DashboardUserId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningIndividualListResponse>
```

<sub>`POST /watchlist_screening/individual/list` · `watchlistScreeningIndividualList`</sub>

## `plaid.watchlistScreeningIndividualProgramGet`

Get individual watchlist screening program — [API reference](/api/products/monitor/#watchlist_screeningindividualprogramget)

```ts
plaid.watchlistScreeningIndividualProgramGet(input: {
  watchlist_program_id: WatchlistProgramId;
  secret?: ApiSecret;
  client_id?: ApiClientId;
}): Promise<WatchlistScreeningIndividualProgramGetResponse>
```

<sub>`POST /watchlist_screening/individual/program/get` · `watchlistScreeningIndividualProgramGet`</sub>

## `plaid.watchlistScreeningIndividualProgramList`

List individual watchlist screening programs — [API reference](/api/products/monitor/#watchlist_screeningindividualprogramlist)

```ts
plaid.watchlistScreeningIndividualProgramList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningIndividualProgramListResponse>
```

<sub>`POST /watchlist_screening/individual/program/list` · `watchlistScreeningIndividualProgramList`</sub>

## `plaid.watchlistScreeningIndividualReviewCreate`

Create a review for an individual watchlist screening — [API reference](/api/products/monitor/#watchlist_screeningindividualreviewcreate)

```ts
plaid.watchlistScreeningIndividualReviewCreate(input: {
  /** Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once confirmed. In most cases, confirmed hits indicate that the customer should be rejected. */
  confirmed_hits: (WatchlistScreeningHitId)[];
  /** Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed. */
  dismissed_hits: (WatchlistScreeningHitId)[];
  comment?: ReviewComment;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  watchlist_screening_id: WatchlistScreeningIndividualId;
}): Promise<WatchlistScreeningIndividualReviewCreateResponse>
```

<sub>`POST /watchlist_screening/individual/review/create` · `watchlistScreeningIndividualReviewCreate`</sub>

## `plaid.watchlistScreeningIndividualReviewList`

List reviews for individual watchlist screenings — [API reference](/api/products/monitor/#watchlist_screeningindividualreviewlist)

```ts
plaid.watchlistScreeningIndividualReviewList(input: {
  secret?: ApiSecret;
  client_id?: ApiClientId;
  watchlist_screening_id: WatchlistScreeningIndividualId;
  cursor?: Cursor;
}): Promise<WatchlistScreeningIndividualReviewListResponse>
```

<sub>`POST /watchlist_screening/individual/review/list` · `watchlistScreeningIndividualReviewList`</sub>

## `plaid.watchlistScreeningIndividualUpdate`

Update individual watchlist screening — [API reference](/api/products/monitor/#watchlist_screeningindividualupdate)

```ts
plaid.watchlistScreeningIndividualUpdate(input: {
  watchlist_screening_id: WatchlistScreeningIndividualId;
  search_terms?: UpdateIndividualScreeningRequestSearchTerms;
  assignee?: DashboardUserId;
  status?: WatchlistScreeningStatus;
  client_user_id?: ClientUserId;
  client_id?: ApiClientId;
  secret?: ApiSecret;
  reset_fields?: WatchlistScreeningIndividualUpdateRequestResettableFieldList;
}): Promise<WatchlistScreeningIndividualUpdateResponse>
```

<sub>`POST /watchlist_screening/individual/update` · `watchlistScreeningIndividualUpdate`</sub>

## `plaid.webhookVerificationKeyGet`

Get webhook verification key — [API reference](/api/webhooks/webhook-verification/#get-webhook-verification-key)

```ts
plaid.webhookVerificationKeyGet(input: {
  client_id?: ApiClientId;
  secret?: ApiSecret;
  /** The key ID ( `kid` ) from the JWT header. */
  key_id: string;
}): Promise<WebhookVerificationKeyGetResponse>
```

<sub>`POST /webhook_verification_key/get` · `webhookVerificationKeyGet`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
