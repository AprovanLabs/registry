# Reverse Proxy

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.proxyRecordsList`

List all reverse proxies configured for the organization. Returns proxy records along with the maximum number allowed by the current plan.

```ts
posthog.proxyRecordsList(): Promise<({ results: ({ id: string; domain: string; target_cname: string; status: "waiting" | "issuing" | "valid" | "warning" | "erroring" | "deleting" | "timed_out"; message: string | null; created_at: string; updated_at: string; created_by: number })[]; max_proxy_records: number })[]>
```

<sub>`GET /api/organizations/{organization_id}/proxy_records/` · `proxy_records_list`</sub>

## `posthog.proxyRecordsCreate`

Create a new managed reverse proxy. Provide the domain you want to proxy through. The response includes the CNAME target you need to add as a DNS record. Once the CNAME is configured, the proxy will be automatically verified and provisioned.

```ts
posthog.proxyRecordsCreate(): Promise<{ id: string; domain: string; target_cname: string; status: "waiting" | "issuing" | "valid" | "warning" | "erroring" | "deleting" | "timed_out"; message: string | null; created_at: string; updated_at: string; created_by: number }>
```

<sub>`POST /api/organizations/{organization_id}/proxy_records/` · `proxy_records_create`</sub>

## `posthog.proxyRecordsDestroy`

Delete a reverse proxy. For proxies in 'waiting', 'erroring', or 'timed_out' status, the record is deleted immediately. For active proxies, a deletion workflow is started to clean up the provisioned infrastructure.

```ts
posthog.proxyRecordsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/proxy_records/{id}/` · `proxy_records_destroy`</sub>

## `posthog.proxyRecordsRetrieve`

Get details of a specific reverse proxy by ID. Returns the full configuration including domain, CNAME target, and current provisioning status.

```ts
posthog.proxyRecordsRetrieve(): Promise<{ id: string; domain: string; target_cname: string; status: "waiting" | "issuing" | "valid" | "warning" | "erroring" | "deleting" | "timed_out"; message: string | null; created_at: string; updated_at: string; created_by: number }>
```

<sub>`GET /api/organizations/{organization_id}/proxy_records/{id}/` · `proxy_records_retrieve`</sub>

## `posthog.proxyRecordsDiagnoseCreate`

Run a deep diagnostic on a reverse proxy. Inspects DNS CNAME alignment, the certificate provider's hostname state, CAA records walked up the customer's DNS tree, HTTP-01 challenge reachability, a live event probe, and certificate expiry. Returns a structured report with each check's status and concrete remediation steps (e.g. exact DNS records to add). Use this to debug why a proxy is stuck or erroring.

```ts
posthog.proxyRecordsDiagnoseCreate(): Promise<{ ran_at: string; summary: { status: "healthy" | "warn" | "fail"; primary_issue: string | null; next_action: string | null }; checks: ({ id: string; name: string; status: "passed" | "warned" | "failed" | "skipped"; detail: string; remediation?: { type: "dns" | "config" | "wait" | "retry"; summary: string; records: ({ name: string; type: string; value: string })[] } | null })[] }>
```

<sub>`POST /api/organizations/{organization_id}/proxy_records/{id}/diagnose/` · `proxy_records_diagnose_create`</sub>

## `posthog.proxyRecordsRetryCreate`

Retry provisioning a failed reverse proxy. Only available for proxies in 'erroring' or 'timed_out' status. Resets the proxy to 'waiting' status and restarts the provisioning workflow.

```ts
posthog.proxyRecordsRetryCreate(): Promise<{ id: string; domain: string; target_cname: string; status: "waiting" | "issuing" | "valid" | "warning" | "erroring" | "deleting" | "timed_out"; message: string | null; created_at: string; updated_at: string; created_by: number }>
```

<sub>`POST /api/organizations/{organization_id}/proxy_records/{id}/retry/` · `proxy_records_retry_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
