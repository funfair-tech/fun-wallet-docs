# SDK Methods KYC

## Start KYC

This manually starts the KYC process which pops up the KYC modal. This can be used if the initial KYC popup got closed and the account now wants to KYC. If you call this when the account has already been KYC-verified, it will throw an error.

```ts
start(): Promise<void>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.kyc.start();
```

:::

::: tab JavaScript

```js
await window.funwallet.sdk.kyc.start();
```

:::

::::

## KYC-Verified Status for the Logged-In User

Returns the KYC verification status of the user on the Wallet. Event listeners will fire as well to keep this value updated.

```ts
isVerified(): Promise<boolean>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const isKycVerified = await window.funwallet.sdk.kyc.isVerified();
```

:::

::: tab JavaScript

```js
const isKycVerified = await window.funwallet.sdk.kyc.isVerified();
```

:::

::::
