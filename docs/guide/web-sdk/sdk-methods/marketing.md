# SDK Methods Marketing

## Get Marketing Opt-In Status

Get marketing opt-in status.

```ts
get(): Promise<boolean | null>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const marketingOptInStatus = await window.funwallet.sdk.marketing.get();
```

:::

::: tab JavaScript

```js
const marketingOptInStatus = await window.funwallet.sdk.marketing.get();
```

:::

::::

## Update Marketing Opt-In Status

Update marketing opt-in status. Will throw if it did not update the status successfully.

```ts
set(status: boolean): Promise<void>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.marketing.set(true);
```

:::

::: tab JavaScript

```js
await window.funwallet.sdk.marketing.set(true);
```

:::

::::
