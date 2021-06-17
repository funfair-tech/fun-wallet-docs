# SDK Methods Networks

## Enabled Networks

Returns the enabled networks set by the Wallet dApp config.

```ts
enabled(): Promise<NetworkDetails[]>
```

`NetworkDetails`:

```ts
{
  selectedNode: string;
  backupNodes: string[];
  enabled: boolean;
  name: string;
  id: number;
  chainId: number;
  nativeCurrency: string;
  networkBlockExplorer?: NetworkBlockExplorer | undefined;
  feeWarningThreshold: BigNumber;
  supportsFiatPrices: boolean;
  supportsWalletConnect: boolean;
  isProductionNetwork: boolean;
  fixedGasPrice?: string | undefined;
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

## Current Network

Returns the authenticated user's current network details.

```ts
current(): Promise<NetworkDetails>
```

`NetworkDetails`:

```ts
{
  selectedNode: string;
  backupNodes: string[];
  enabled: boolean;
  name: string;
  id: number;
  chainId: number;
  nativeCurrency: string;
  networkBlockExplorer?: NetworkBlockExplorer | undefined;
  feeWarningThreshold: BigNumber;
  supportsFiatPrices: boolean;
  supportsWalletConnect: boolean;
  isProductionNetwork: boolean;
  fixedGasPrice?: string | undefined;
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

## Gas Recommendations

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

## Switch ethereum chain

Switch the users ethereum chain. This will show an approval network change modal to the user and the promise will be resolved once they have accepted or rejected. The JSONRPC call `wallet_switchEthereumChain` is supported and can be called from our ethereum provider as well.

```ts
switchEthereumChain(chainId: string): Promise<null>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

// chainId has to be the hex of the chainId any number or invalid chainId
// will be rejected
await window.funwallet.sdk.networks.switchEthereumChain('0x01');
```

:::

::: tab JavaScript

```js
// chainId has to be the hex of the chainId any number or invalid chainId
// will be rejected
await window.funwallet.sdk.networks.switchEthereumChain('0x01');
```

:::

::::
