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
  // do pass anything in here if you are not using angular
  ngZone?: NgZone | undefined;
  // The sdk will inject the mobile nav bar at the bottom of the body automatically for you.
  // Now this should be fine for most dapps we give the flexibility to specify which class you
  // want it to inject to. It will pick the first class it finds. This can be if you want it to inject in a different place in the DOM
  // so you can manipulate z-index layouts. For example if you had your own sticky bottom nav, you
  // may want to handle some css yourself for it and this gives you full flexibility.
  // Do not need to worry about this if you are happy with how it injects by default.
  mobileNavInjectToClass?: string | undefined;
  // The sdk can override the toaster notification settings. 
  // If not supplied default settings will be applied as outlined below.
  toasterNotificationSettings?: ToasterNotificationSettings | undefined;
}

export enum ToasterNotificationState {
  on = 'on',
  off = 'off',
}

export enum ToasterNoticationPositions {
  toaster_top_left = 'toaster_top_left',
  toaster_top_center = 'toaster_top_center',
  toaster_top_right = 'toaster_top_right',
  toaster_bottom_right = 'toaster_bottom_right',
  toaster_bottom_center = 'toaster_bottom_center',
  toaster_bottom_left = 'toaster_bottom_left',
}

export interface ToasterNotificationSettings {
  // The toaster notifications state can be switched on or off. 
  // If not supplied the state will default to on.
  state?: ToasterNotificationState | undefined;

  // The position of the toaster notifications can be changed by setting the position.
  // If not supplied the position will default to toaster_bottom_right.
  position?: ToasterNoticationPositions | undefined;

  // The toaster notification timeout can be changed by passing in a value in ms.
  // If not supplied the timeout will default to 5000ms.
  timeout?: number | undefined;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.sdk.init();
```

:::

::: tab JavaScript

```js
window.funwallet.sdk.init();
```

:::

::::
