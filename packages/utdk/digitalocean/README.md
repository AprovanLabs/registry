# DigitalOcean API

`@utdk/digitalocean` — a typed SDK generated from the provider's OpenAPI spec. This client wraps the provider API in typed methods focused on GradientAI Platform, Monitoring, Databases, Apps.

## Quick start

```ts
import digitalocean from "@utdk/digitalocean";

const result = await digitalocean.accountGet();
```

In the UTDK isolate runtime, `digitalocean` is also available directly as a namespace value — no import needed.

## Authentication

- **Bearer token** — sent as `Authorization: Bearer <token>`.
- **Bearer token** — sent as `Authorization: Bearer <token>`.

Configure credentials once in the registry credentials area — the gateway injects them on every call, so code stays credential-free.

## Operations

- [1 Click Applications](./docs/1-click-applications.md) — 2 operations
- [Account](./docs/account.md) — 1 operation
- [Actions](./docs/actions.md) — 2 operations
- [Add Ons](./docs/add-ons.md) — 8 operations
- [Agent Inference](./docs/agent-inference.md) — 1 operation
- [Apps](./docs/apps.md) — 38 operations
- [Batch Inference](./docs/batch-inference.md) — 7 operations
- [Billing](./docs/billing.md) — 8 operations
- [Block Storage](./docs/block-storage.md) — 9 operations
- [Block Storage Actions](./docs/block-storage-actions.md) — 4 operations
- [BYOIP Prefixes](./docs/byoip-prefixes.md) — 6 operations
- [CDN Endpoints](./docs/cdn-endpoints.md) — 6 operations
- [Certificates](./docs/certificates.md) — 4 operations
- [Container Registries](./docs/container-registries.md) — 19 operations
- [Container Registry](./docs/container-registry.md) — 18 operations
- [Databases](./docs/databases.md) — 71 operations
- [Dedicated Inference](./docs/dedicated-inference.md) — 13 operations
- [Domain Records](./docs/domain-records.md) — 6 operations
- [Domains](./docs/domains.md) — 4 operations
- [Droplet Actions](./docs/droplet-actions.md) — 4 operations
- [Droplet Autoscale Pools](./docs/droplet-autoscale-pools.md) — 8 operations
- [Droplets](./docs/droplets.md) — 19 operations
- [Firewalls](./docs/firewalls.md) — 11 operations
- [Floating IP Actions](./docs/floating-ip-actions.md) — 3 operations
- [Floating IPs](./docs/floating-ips.md) — 4 operations
- [Functions](./docs/functions.md) — 13 operations
- [GradientAI Platform](./docs/gradientai-platform.md) — 119 operations
- [Image Actions](./docs/image-actions.md) — 3 operations
- [Images](./docs/images.md) — 9 operations
- [Kubernetes](./docs/kubernetes.md) — 28 operations
- [Load Balancers](./docs/load-balancers.md) — 10 operations
- [Monitoring](./docs/monitoring.md) — 72 operations
- [NFS](./docs/nfs.md) — 11 operations
- [NFS Actions](./docs/nfs-actions.md) — 1 operation
- [Organizations](./docs/organizations.md) — 2 operations
- [Partner Network Connect](./docs/partner-network-connect.md) — 9 operations
- [Project Resources](./docs/project-resources.md) — 4 operations
- [Projects](./docs/projects.md) — 9 operations
- [Regions](./docs/regions.md) — 1 operation
- [Reserved IP Actions](./docs/reserved-ip-actions.md) — 3 operations
- [Reserved IPs](./docs/reserved-ips.md) — 4 operations
- [Reserved IPv6](./docs/reserved-ipv6.md) — 4 operations
- [Reserved IPv6 Actions](./docs/reserved-ipv6-actions.md) — 1 operation
- [Security](./docs/security.md) — 10 operations
- [Serverless Inference](./docs/serverless-inference.md) — 7 operations
- [Sizes](./docs/sizes.md) — 1 operation
- [Snapshots](./docs/snapshots.md) — 3 operations
- [Spaces Keys](./docs/spaces-keys.md) — 6 operations
- [SSH Keys](./docs/ssh-keys.md) — 5 operations
- [Tags](./docs/tags.md) — 6 operations
- [Uptime](./docs/uptime.md) — 11 operations
- [Vector Databases](./docs/vector-databases.md) — 11 operations
- [VPC NAT Gateways](./docs/vpc-nat-gateways.md) — 5 operations
- [VPC Peerings](./docs/vpc-peerings.md) — 5 operations
- [VPCs](./docs/vpcs.md) — 10 operations

Every operation is a typed method (`digitalocean.group.action(input)`); result shapes are named exported types you can hover in your editor.

## Source Index


