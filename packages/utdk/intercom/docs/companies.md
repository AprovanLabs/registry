# Companies

11 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.retrieveCompany`

Retrieve companies — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveCompany(input: {
  /** The `name` of the company to filter by. */
  name?: string;
  /** The `company_id` of the company to filter by. */
  company_id?: string;
  /** The `tag_id` of the company to filter by. */
  tag_id?: string;
  /** The `segment_id` of the company to filter by. */
  segment_id?: string;
  /** The page of results to fetch. Defaults to first page */
  page?: number;
  /** How many results to display per page. Defaults to 15 */
  per_page?: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CompanyList>
```

<sub>`GET /companies` · `retrieveCompany`</sub>

## `intercom.createOrUpdateCompany`

Create or Update a company — [Provider docs](https://developers.intercom.com)

```ts
intercom.createOrUpdateCompany(input: {
  /** The name of the Company */
  name?: string;
  /** The company id you have defined for the company. Can't be updated */
  company_id?: string;
  /** The name of the plan you have associated with the company. */
  plan?: string;
  /** The number of employees in this company. */
  size?: number;
  /** The URL for this company's website. Please note that the value specified here is not validated. Accepts any string. */
  website?: string;
  /** The industry that this company operates in. */
  industry?: string;
  /** A hash of key/value pairs containing any other data about the company you want Intercom to store. */
  custom_attributes?: { [key: string]: string | undefined };
  /** The time the company was created by you. */
  remote_created_at?: number;
  /** How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647.. */
  monthly_spend?: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Company>
```

<sub>`POST /companies` · `createOrUpdateCompany`</sub>

## `intercom.deleteCompany`

Delete a company — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteCompany(input: {
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DeletedCompanyObject>
```

<sub>`DELETE /companies/{company_id}` · `deleteCompany`</sub>

## `intercom.retrieveACompanyById`

Retrieve a company by ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveACompanyById(input: {
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Company>
```

<sub>`GET /companies/{company_id}` · `RetrieveACompanyById`</sub>

## `intercom.updateCompany`

Update a company — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateCompany(input: {
  /** The name of the Company */
  name?: string;
  /** The name of the plan you have associated with the company. */
  plan?: string;
  /** The number of employees in this company. */
  size?: number;
  /** The URL for this company's website. Please note that the value specified here is not validated. Accepts any string. */
  website?: string;
  /** The industry that this company operates in. */
  industry?: string;
  /** A hash of key/value pairs containing any other data about the company you want Intercom to store. */
  custom_attributes?: { [key: string]: string | undefined };
  /** How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647.. */
  monthly_spend?: number;
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Company>
```

<sub>`PUT /companies/{company_id}` · `UpdateCompany`</sub>

## `intercom.listAttachedContacts`

List attached contacts — [Provider docs](https://developers.intercom.com)

```ts
intercom.listAttachedContacts(input: {
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CompanyAttachedContacts>
```

<sub>`GET /companies/{company_id}/contacts` · `ListAttachedContacts`</sub>

## `intercom.listAttachedSegmentsForCompanies`

List attached segments for companies — [Provider docs](https://developers.intercom.com)

```ts
intercom.listAttachedSegmentsForCompanies(input: {
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CompanyAttachedSegments>
```

<sub>`GET /companies/{company_id}/segments` · `ListAttachedSegmentsForCompanies`</sub>

## `intercom.listAllCompanies`

List all companies — [Provider docs](https://developers.intercom.com)

```ts
intercom.listAllCompanies(input: {
  /** The page of results to fetch. Defaults to first page */
  page?: number;
  /** How many results to return per page. Defaults to 15 */
  per_page?: number;
  /** `asc` or `desc`. Return the companies in ascending or descending order. Defaults to desc */
  order?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CompanyList>
```

<sub>`POST /companies/list` · `listAllCompanies`</sub>

## `intercom.scrollOverAllCompanies`

Scroll over all companies — [Provider docs](https://developers.intercom.com)

```ts
intercom.scrollOverAllCompanies(input: {
  scroll_param?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CompanyScroll>
```

<sub>`GET /companies/scroll` · `scrollOverAllCompanies`</sub>

## `intercom.attachContactToACompany`

Attach a Contact to a Company — [Provider docs](https://developers.intercom.com)

```ts
intercom.attachContactToACompany(input: {
  /** The unique identifier for the company which is given by Intercom */
  id: string;
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Company>
```

<sub>`POST /contacts/{contact_id}/companies` · `attachContactToACompany`</sub>

## `intercom.detachContactFromACompany`

Detach a contact from a company — [Provider docs](https://developers.intercom.com)

```ts
intercom.detachContactFromACompany(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Company>
```

<sub>`DELETE /contacts/{contact_id}/companies/{company_id}` · `detachContactFromACompany`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
