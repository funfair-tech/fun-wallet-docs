# SDK Methods Follower

## registerFollowerInstance

This initializes an authenticated follower instance for you to display the Wallet UI with. If the leader is not authenticated this will throw an error.

```ts
public async registerFollowerInstance(): Promise<void>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.registerFollowerInstance();
```

:::

::: tab JavaScript

```js
await window.funwallet.sdk.registerFollowerInstance();
```

:::

::::

## getWalletFollowerURL

Builds up the follower URL for you and adds all the context to the query string so you don't have to worry about it.

```ts
public getWalletFollowerURL(): string
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const walletFollowerUrl = window.funwallet.getWalletFollowerURL();
```

:::

::: tab JavaScript

```js
const walletFollowerUrl = window.funwallet.getWalletFollowerURL();
```

:::

::::
