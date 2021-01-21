# SDK Methods Tokens

## Get All ERC20 Tokens

Get all the ERC20 tokens information. This will only return for tokens which are on the currently selected network.

```ts
getAll(): Promise<EnabledERC20TokenResponse[]>
```

`EnabledERC20TokenResponse`:

```ts
{
  symbol: string;
  decimalPlaces: number;
  networkId: number;
  contractAddress: string;
  iconUrl: string;
  hasFiatPrice: boolean;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const allErc20Tokens = await window.funwallet.sdk.tokens.getAll();
```

:::

::: tab JavaScript

```js
const allErc20Tokens = await window.funwallet.sdk.tokens.getAll();
```

:::

::::

## Get Enabled ERC20 Tokens

Get the ERC20 token information. Will return `null` if it can not match the contract address. This will only find tokens which are on the currently-selected network.

```ts
get(contractAddress: string): Promise<EnabledERC20TokenResponse | null>
```

`EnabledERC20TokenResponse`:

```ts
{
  symbol: string;
  decimalPlaces: number;
  networkId: number;
  contractAddress: string;
  iconUrl: string;
  hasFiatPrice: boolean;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const erc20Token = await window.funwallet.sdk.tokens.get(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::: tab JavaScript

```js
const erc20Token = await window.funwallet.sdk.tokens.get(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::::

## Get All ERC20 Token Balances

Get all the ERC20 token balances information. The `tokenBalance` is already formatted for you so that value is the value you can directly show the user without having to convert to a readable value. This will only return tokens which are on the currently-selected network.

```ts
getAllBalances(): Promise<BalanceResponse[]>
```

`BalanceResponse`:

```ts
{
  symbol: string;
  // already formatted for you by the decimal places
  tokenBalance: string;
  decimalPlaces: number;
  networkId: number;
  contractAddress: string;
  iconUrl: string;
  hasFiatPrice: boolean;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const allErc20TokenBalances = await window.funwallet.sdk.tokens.getAllBalances();
```

:::

::: tab JavaScript

```js
const allErc20TokenBalances = await window.funwallet.sdk.tokens.getAllBalances();
```

:::

::::

## Get ERC20 Token Balance

Get the ERC20 token balance information. Will return `null` if it can not match the contract address. The `tokenBalance` is already formatted for you so that value is the value you can directly show the user without having to convert to a readable value. This will only find tokens which are on the currently-selected network.

```ts
balance(): Promise<BalanceResponse | null>
```

`BalanceResponse`:

```ts
{
  symbol: string;
  // already formatted for you by the decimal places
  tokenBalance: string;
  decimalPlaces: number;
  networkId: number;
  contractAddress: string;
  iconUrl: string;
  hasFiatPrice: boolean;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const erc20TokenBalance = await window.funwallet.sdk.tokens.balance(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::: tab JavaScript

```js
const erc20TokenBalance = await window.funwallet.sdk.tokens.balance(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::::

## Get ERC20 Token Icon

Get the ERC20 token icon. Will return `null` if it can not match the contract address. This will only find tokens which are on the currently-selected network. If you plan to use these in your dApp please do not hard code icon URLs, as the build up of that image includes a hash of the content. If that image was ever updated that link would not work anymore. So calling this to grab the `src` for the image each time would be the best solution.

```ts
icon(): string | null
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const erc20TokenIcon = await window.funwallet.sdk.tokens.icon(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::: tab JavaScript

```js
const erc20TokenIcon = await window.funwallet.sdk.tokens.icon(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::::

## Get ERC20 Token Fiat Price

Get the ERC20 token fiat price. Will return `null` if it can not match the contract address OR if the Wallet does not have a fiat price for that token. This will only find tokens which are on the currently-selected network.

```ts
fiatPrice(): number | null
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const erc20TokenFiatPrice = await window.funwallet.sdk.tokens.fiatPrice(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::: tab JavaScript

```js
const erc20TokenFiatPrice = await window.funwallet.sdk.tokens.fiatPrice(
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'
);
```

:::

::::
