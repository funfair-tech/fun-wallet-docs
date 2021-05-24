# SDK Methods Init

Please note none of the SDK calls will work if the SDK has not called this. The SDK will throw errors telling you this if you try to do so.

## init

This initializes the SDK and sets up communication between the leader instance and the Wallet. If you're using one of our React, Vue or Angular Wallet packages you don't need to worry doing this - it is handled for you.

```ts
public init(options?: InitOptions): void
```

`Parameters`:

- `options` - The options for the SDK

```js
{
  // the `NgZone` class angular allows you to inject
  ngZone?: NgZone | undefined;
  // The sdk will inject the mobile nav bar at the bottom of the body automatically for you.
  // Now this should be fine for most dapps we give the flexibility to specify which class you
  // want it to inject to. It will pick the first class it finds. This can be if you want it to inject in a different place in the DOM
  // so you can manipulate z-index layouts. For example if you had your own sticky bottom nav, you
  // may want to handle some css yourself for it and this gives you full flexibility.
  // Do not need to worry about this if you are happy with how it injects by default.
  mobileNavInjectToClass?: string | undefined;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.sdk.init({ ngZone: this._zone });
```

:::

::: tab JavaScript

```js
window.funwallet.sdk.init();
```

:::

::::
