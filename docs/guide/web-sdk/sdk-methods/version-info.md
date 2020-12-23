# SDK Methods Version Info

## versionInfo

Returns the Wallet's version information.

```ts
public async versionInfo(options?: InitOptions): Promise<VersionInfo>
```

`VersionInfo`:

```js
{
  clientVersion: string,
  serverVersion: string,
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const versionInfo = await window.funwallet.sdk.versionInfo();
```

:::

::: tab JavaScript

```js
const versionInfo = await window.funwallet.sdk.versionInfo();
```

:::

::::
