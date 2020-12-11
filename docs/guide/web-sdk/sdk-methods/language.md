# SDK Methods Lanaguge

## setLanguage

Build the language for the wallet (default is en). This needs to be called on initial page load.

```ts
public setLanguage(lang: string): string
```

`JavaScript`:

```js
window.funwallet.setLanguage('en');
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.setLanguage('en');
```
