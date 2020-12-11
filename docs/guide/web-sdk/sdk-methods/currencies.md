# SDK Methods Currencies

## Currenct currency

Returns the authenticated user's current currency.

```ts
current(): Promise<string>
```

`JavaScript`:

```js
const currentCurrency = await window.funwallet.sdk.currencies.current();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const currentCurrency = await window.funwallet.sdk.currencies.current();
```

---

## Set currency

Allows the dApp to set the currency for the wallet. This can be useful if you have your own currency UI and on change of that you want to make sure the wallet shows in the same currency the user has selected.

```ts
set(fiatCurrency: FiatCurrencyType): Promise<void>
```

`FiatCurrencyType`:

```ts
export enum FiatCurrencyType {
  CAD = 'CAD',
  JPY = 'JPY',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  KRW = 'KRW',
  CNY = 'CNY',
  SGD = 'SGD',
}
```

`JavaScript`:

```js
import { FiatCurrencyType } from '@funfair-tech/wallet-sdk';

await window.funwallet.sdk.currencies.set(FiatCurrencyType.USD);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import { FiatCurrencyType } from '@funfair-tech/wallet-sdk';

await window.funwallet.sdk.currencies.set(FiatCurrencyType.USD);
```

---

## Enabled currencies

Returns all the enabled currencies for this dApp setup.

```ts
enabled(): Promise<FiatCurrencyType[]>
```

`JavaScript`:

```js
const enabledCurrencies = await window.funwallet.sdk.currencies.enabled();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const enabledCurrencies = await window.funwallet.sdk.currencies.enabled();
```
