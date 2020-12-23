# SDK Methods Eth

## Ethereum address

Returns the authenticated users Ethereum address. If they're not authenticated it will return `null`.

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

## Ethereum balance

Returns the authenticated users Ethereum balance. This will be formatted in eth for you. You can obviously use the JSONRPC call to get the balance this is just an exposed explict call.

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

Returns the fiat price that eth is currently at in the users selected currency.

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
