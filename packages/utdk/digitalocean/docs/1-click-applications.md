# 1 Click Applications

2 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.oneClicksList`

List 1-Click Applications

```ts
digitalocean.oneClicksList(input: {
  /** Restrict results to a certain type of 1-Click. */
  type?: "droplet" | "kubernetes";
}): Promise<{ "1_clicks"?: (OneClicks)[] }>
```

<sub>`GET /v2/1-clicks` · `oneClicks_list`</sub>

## `digitalocean.oneClicksInstallKubernetes`

Install Kubernetes 1-Click Applications

```ts
digitalocean.oneClicksInstallKubernetes(input: {
  /** An array of 1-Click Application slugs to be installed to the Kubernetes cluster. */
  addon_slugs: (string)[];
  /** A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed. */
  cluster_uuid: string;
}): Promise<{ message?: string }>
```

<sub>`POST /v2/1-clicks/kubernetes` · `oneClicks_install_kubernetes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
