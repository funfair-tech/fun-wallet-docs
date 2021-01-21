# SDK Methods Language

## setLanguage

Build the language for the Wallet (default is 'en'). This needs to be called on initial page load.

```ts
public setLanguage(lang: string): string
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.setLanguage('en');
```

:::

::: tab JavaScript

```js
window.funwallet.setLanguage('en');
```

:::

::::
