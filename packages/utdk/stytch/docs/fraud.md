# Fraud

6 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiFraudV1FraudEmailRisk`

Risk — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiFraudV1FraudEmailRisk(input: {
  /** The email address to check. */
  email_address: string;
}): Promise<ApiFraudV1FraudEmailRiskResponse>
```

<sub>`POST /v1/email/risk` · `api_fraud_v1_fraud_email_Risk`</sub>

## `stytch.apiFraudV1FraudFingerprintLookup`

Lookup — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiFraudV1FraudFingerprintLookup(input: {
  /** The telemetry ID associated with the fingerprint getting looked up. */
  telemetry_id: string;
  /** External identifiers that you wish to associate with the given telemetry ID. You will be able to search for fingerprint results by these identifiers in the DFP analytics dashboard. External metadata fields may not exceed 65 characters. They may only contain alphanumerics and the characters `_` `-` `+` `.` or `@`. */
  external_metadata?: ApiFraudV1Metadata;
}): Promise<ApiFraudV1FraudFingerprintLookupResponse>
```

<sub>`POST /v1/fingerprint/lookup` · `api_fraud_v1_fraud_fingerprint_Lookup`</sub>

## `stytch.apiFraudV1FraudRulesList`

List — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiFraudV1FraudRulesList(input: {
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 100 results. If your query returns more than 100 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor`, repeat the request with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make requests until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of results to return per page. The default limit is 10. A maximum of 100 results can be returned by a single get request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
}): Promise<ApiFraudV1FraudRulesListResponse>
```

<sub>`POST /v1/rules/list` · `api_fraud_v1_fraud_rules_List`</sub>

## `stytch.apiFraudV1FraudRulesSet`

Set — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiFraudV1FraudRulesSet(input: {
  /** The action that should be returned by a fingerprint lookup for that identifier with a `RULE_MATCH` reason. The following values are valid: `ALLOW`, `BLOCK`, `CHALLENGE`, or `NONE`. For country codes, `ALLOW` actions are not allowed. If a `NONE` action is specified, it will clear the stored rule. */
  action: ApiFraudV1RuleAction;
  /** The visitor ID we want to set a rule for. Only one identifier can be specified in the request. */
  visitor_id?: string;
  /** The browser ID we want to set a rule for. Only one identifier can be specified in the request. */
  browser_id?: string;
  /** The visitor fingerprint we want to set a rule for. Only one identifier can be specified in the request. */
  visitor_fingerprint?: string;
  /** The browser fingerprint we want to set a rule for. Only one identifier can be specified in the request. */
  browser_fingerprint?: string;
  /** The hardware fingerprint we want to set a rule for. Only one identifier can be specified in the request. */
  hardware_fingerprint?: string;
  /** The network fingerprint we want to set a rule for. Only one identifier can be specified in the request. */
  network_fingerprint?: string;
  /** The number of minutes until this rule expires. If no `expires_in_minutes` is specified, then the rule is kept permanently. */
  expires_in_minutes?: number;
  /** An optional description for the rule. */
  description?: string;
  /** The CIDR block we want to set a rule for. You may pass either an IP address or a CIDR block. The CIDR block prefix must be between 16 and 32, inclusive. If an end user's IP address is within this CIDR block, this rule will be applied. Only one identifier can be specified in the request. */
  cidr_block?: string;
  /** The country code we want to set a rule for. The country code must be a valid ISO 3166-1 alpha-2 code. You may not set `ALLOW` rules for country codes. Only one identifier can be specified in the request. */
  country_code?: string;
  /** The ASN we want to set a rule for. The ASN must be the string representation of an integer between 0 and 4294967295, inclusive. Only one identifier can be specified in the request. */
  asn?: string;
}): Promise<ApiFraudV1FraudRulesSetResponse>
```

<sub>`POST /v1/rules/set` · `api_fraud_v1_fraud_rules_Set`</sub>

## `stytch.apiFraudV1FraudVerdictReasonsList`

List — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiFraudV1FraudVerdictReasonsList(input: {
  /** Whether to return only verdict reasons that have overrides set. Defaults to false. */
  overrides_only?: boolean;
}): Promise<ApiFraudV1FraudVerdictReasonsListResponse>
```

<sub>`POST /v1/verdict_reasons/list` · `api_fraud_v1_fraud_verdict_reasons_List`</sub>

## `stytch.apiFraudV1FraudVerdictReasonsOverride`

Override — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiFraudV1FraudVerdictReasonsOverride(input: {
  /** The verdict reason that you wish to override. For a list of possible reasons to override, see [Warning Flags (Verdict Reasons)](https://stytch.com/docs/docs/fraud/guides/device-fingerprinting/reference/warning-flags-verdict-reasons). You may not override the `RULE_MATCH` reason. */
  verdict_reason: string;
  /** The action that you want to be returned for the specified verdict reason. The override action must be one of `ALLOW`, `BLOCK`, or `CHALLENGE`. */
  override_action: ApiFraudV1FraudVerdictReasonsOverrideRequestAction;
  /** An optional description for the verdict reason override. */
  override_description?: string;
}): Promise<ApiFraudV1FraudVerdictReasonsOverrideResponse>
```

<sub>`POST /v1/verdict_reasons/override` · `api_fraud_v1_fraud_verdict_reasons_Override`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
