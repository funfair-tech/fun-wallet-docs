# SDK Methods Networks

## Enabled networks

Returns the enabled networks set by the wallet dApp config.

```ts
enabled(): Promise<NetworkDetails[]>
```

`NetworkDetails`:

```ts
{
  name: string;
  id: Networks;
  providerUrl: string;
  enabled: boolean;
}
```

`Networks`:

```ts
{
  mainnet = 1,
  ropsten = 3,
  rinkeby = 4,
  kovan = 42,
  xdai = 100,
  novichok = 1984,
  bracknell = 1999,
  unknown = -1,
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const enabledNetworks = await window.funwallet.sdk.networks.enabled();
```

:::

::: tab JavaScript

```js
const enabledNetworks = await window.funwallet.sdk.networks.enabled();
```

:::

::::

## Current network

Returns the authenticated user's current network details.

```ts
current(): Promise<NetworkDetails>
```

`NetworkDetails`:

```ts
{
  name: string;
  id: Networks;
  providerUrl: string;
  enabled: boolean;
}
```

`Networks`:

```ts
{
  mainnet = 1,
  ropsten = 3,
  rinkeby = 4,
  kovan = 42,
  xdai = 100,
  novichok = 1984,
  bracknell = 1999,
  unknown = -1,
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const networkState = await window.funwallet.sdk.networks.current();
```

:::

::: tab JavaScript

```js
const networkState = await window.funwallet.sdk.networks.current();
```

:::

::::

## Gas recommendations

Get the gas recommendations

```ts
gasRecommendations(): Promise<NetworkGasRecommendationsResponse>
```

`NetworkGasRecommendationsResponse`:

```ts
export interface NetworkGasRecommendationsResponse {
  recommendations: {
    speed: number;
    gasPrice: string;
    estimatedExecutionTime: number;
  }[];
  recommendedSpeed: number;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';
import { NetworkGasRecommendationsResponse } from '@funfair-tech/wallet-sdk';

const gasRecommendations = await window.funwallet.sdk.networks.gasRecommendations();
```

:::

::: tab JavaScript

```js
const gasRecommendations = await window.funwallet.sdk.networks.gasRecommendations();
```

:::

::::
