# SDK Methods ETH

## Ethereum Address

Returns the authenticated user's Ethereum address. If they're not authenticated it will return `null`.

```ts
address(): Promise<string | null>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const ethereumAddress = await window.funwallet.sdk.eth.address();
```

:::

::: tab JavaScript

```js
const ethereumAddress = await window.funwallet.sdk.eth.address();
```

:::

::::

## Ethereum Balance

Returns the authenticated user's Ethereum balance. This will be formatted in ETH for you. You can obviously use the JSON-RPC call to get the balance; this is just an exposed explicit call.

```ts
balance(): Promise<string>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const ethereumBalance = await window.funwallet.sdk.eth.balance();
```

:::

::: tab JavaScript

```js
const ethereumBalance = await window.funwallet.sdk.eth.balance();
```

:::

::::

## Ethereum fiat price

Returns the fiat price that ETH is currently valued at, in the user's selected currency.

```ts
fiatPrice(): Promise<number>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const fiatPrice = await window.funwallet.sdk.eth.fiatPrice();
```

:::

::: tab JavaScript

```js
const fiatPrice = await window.funwallet.sdk.eth.fiatPrice();
```

:::

::::
