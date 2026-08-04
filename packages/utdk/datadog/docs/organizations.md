# Organizations

11 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listGlobalOrgs`

List global orgs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGlobalOrgs(input: {
  /** The handle of the authenticated user. */
  user_handle: string;
  /** Maximum number of results returned. */
  "page[limit]"?: number;
  /** String to query the next page of results. This key is provided with each valid response from the API in `meta.page.next_cursor`. */
  "page[cursor]"?: string;
}): Promise<GlobalOrgsResponse>
```

<sub>`GET /api/v2/global_orgs` · `ListGlobalOrgs`</sub>

## `datadog.updateLoginOrgConfigsMaxSessionDuration`

Update the maximum session duration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLoginOrgConfigsMaxSessionDuration(input: {
  data: MaxSessionDurationUpdateData;
}): Promise<undefined>
```

<sub>`PUT /api/v2/login/org_configs/max_session_duration` · `UpdateLoginOrgConfigsMaxSessionDuration`</sub>

## `datadog.listOrgs`

List your managed organizations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgs(input: {
  /** Filter managed organizations by name. */
  "filter[name]"?: string;
}): Promise<ManagedOrgsResponse>
```

<sub>`GET /api/v2/org` · `ListOrgs`</sub>

## `datadog.listOrgConfigs`

List Org Configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgConfigs(): Promise<OrgConfigListResponse>
```

<sub>`GET /api/v2/org_configs` · `ListOrgConfigs`</sub>

## `datadog.getOrgConfig`

Get a specific Org Config value — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgConfig(input: {
  /** The name of an Org Config. */
  org_config_name: string;
}): Promise<OrgConfigGetResponse>
```

<sub>`GET /api/v2/org_configs/{org_config_name}` · `GetOrgConfig`</sub>

## `datadog.updateOrgConfig`

Update a specific Org Config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgConfig(input: {
  data: OrgConfigWrite;
  /** The name of an Org Config. */
  org_config_name: string;
}): Promise<OrgConfigGetResponse>
```

<sub>`PATCH /api/v2/org_configs/{org_config_name}` · `UpdateOrgConfig`</sub>

## `datadog.updateOrgSamlConfigurations`

Update organization SAML preferences — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgSamlConfigurations(input: {
  data: OrgSamlPreferencesData;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/org/saml_configurations` · `UpdateOrgSamlConfigurations`</sub>

## `datadog.listSamlConfigurations`

List SAML configurations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSamlConfigurations(): Promise<SamlConfigurationsResponse>
```

<sub>`GET /api/v2/saml_configurations` · `ListSAMLConfigurations`</sub>

## `datadog.getSamlConfiguration`

Get a SAML configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSamlConfiguration(input: {
  /** The UUID of the SAML configuration. */
  saml_config_uuid: string;
}): Promise<SamlConfigurationResponse>
```

<sub>`GET /api/v2/saml_configurations/{saml_config_uuid}` · `GetSAMLConfiguration`</sub>

## `datadog.updateSamlConfiguration`

Update a SAML configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSamlConfiguration(input: {
  data: SamlConfigurationUpdateData;
  /** The UUID of the SAML configuration. */
  saml_config_uuid: string;
}): Promise<SamlConfigurationResponse>
```

<sub>`PATCH /api/v2/saml_configurations/{saml_config_uuid}` · `UpdateSAMLConfiguration`</sub>

## `datadog.uploadIdPMetadata`

Upload IdP metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.uploadIdPMetadata(input: {
  /** The IdP metadata XML file */
  idp_file?: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/saml_configurations/idp_metadata` · `UploadIdPMetadata`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
