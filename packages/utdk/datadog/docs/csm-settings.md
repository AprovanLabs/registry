# CSM Settings

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listCsmAgentlessHosts`

List agentless hosts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCsmAgentlessHosts(input: {
  /** The page index for pagination (zero-based). */
  page?: number;
  /** The number of agentless hosts to return per page. */
  size?: number;
  /** A search query string to filter agentless hosts. */
  query?: string;
}): Promise<CsmAgentlessHostsResponse>
```

<sub>`GET /api/v2/csm/settings/agentless_hosts` · `ListCSMAgentlessHosts`</sub>

## `datadog.getCsmAgentlessHostFacetInfo`

Get agentless host facet info — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmAgentlessHostFacetInfo(input: {
  /** The facet identifier to retrieve value distribution for. Valid values are `resource_name`, `account_id`, `resource_type`, `cloud_provider`, `has_vulnerability_scanning`, and `has_posture_management`. */
  facet: string;
  /** A search string to filter the facet values. */
  search?: string;
  /** A filter query to scope the facet value counts. */
  query?: string;
}): Promise<CsmHostFacetInfoResponse>
```

<sub>`GET /api/v2/csm/settings/agentless_hosts/facet_info` · `GetCSMAgentlessHostFacetInfo`</sub>

## `datadog.listCsmAgentlessHostFacets`

List agentless host facets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCsmAgentlessHostFacets(): Promise<CsmAgentlessHostFacetsResponse>
```

<sub>`GET /api/v2/csm/settings/agentless_hosts/facets` · `ListCSMAgentlessHostFacets`</sub>

## `datadog.listCsmUnifiedHosts`

List unified hosts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCsmUnifiedHosts(input: {
  /** The page index for pagination (zero-based). */
  page?: number;
  /** The number of hosts to return per page. */
  size?: number;
  /** A search query string to filter unified hosts. */
  query?: string;
}): Promise<CsmUnifiedHostsResponse>
```

<sub>`GET /api/v2/csm/settings/hosts` · `ListCSMUnifiedHosts`</sub>

## `datadog.getCsmUnifiedHostFacetInfo`

Get unified host facet info — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmUnifiedHostFacetInfo(input: {
  /** The facet identifier to retrieve value distribution for. Valid values include `resource_name`, `account_id`, `resource_type`, `cloud_provider`, `agentless_vulnerability_scanning`, `agentless_posture_management`, `hostname`, `agent_version`, `os`, `cluster_name`, `agent_posture_management`, `agent_cws_enabled`, `agent_csm_vm_hosts_enabled`, and `agent_csm_vm_containers_enabled`. */
  facet: string;
  /** A search string to filter the facet values. */
  search?: string;
  /** A filter query to scope the facet value counts. */
  query?: string;
}): Promise<CsmHostFacetInfoResponse>
```

<sub>`GET /api/v2/csm/settings/hosts/facet_info` · `GetCSMUnifiedHostFacetInfo`</sub>

## `datadog.listCsmUnifiedHostFacets`

List unified host facets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCsmUnifiedHostFacets(): Promise<CsmUnifiedHostFacetsResponse>
```

<sub>`GET /api/v2/csm/settings/hosts/facets` · `ListCSMUnifiedHostFacets`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
