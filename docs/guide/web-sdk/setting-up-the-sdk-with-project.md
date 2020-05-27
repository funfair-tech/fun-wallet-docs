# Setting Up The SDK in your Project

## TypeScript Typings

If you're using `TypeScript` please make sure you use all the typings the SDK supplies. As the SDK exposes the SDK on the window you should use the window object supplied by the SDK. This extends the `Window` object as well so you can use it for standard window calls.

```ts
import window from '@funfair/wallet-sdk/window';
```

## Setting it up with angular CLI

To get it to build with the angular CLI compiler you need to add the `window.ts` file in your `files` object in your `tsconfig.app.json`. It also seems if you add the `window.ts` file angular CLI starts complaining about the `main.ts` and the `polyfill.ts`, so you have to add them in the array as well if you still have them in your angular project. Example below (example `node_modules` path shown, make sure you update this if necessary):

```json
 "files": [
    "./main.ts",
    "./polyfills.ts",
    "../node_modules/@funfair/wallet-sdk/window.ts"
  ]
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
```

All the other typings can be imported directly from the module itself.

Example:

`TypeScript`:

```ts
import {
  NetworkDetails,
  MessageListeners,
  EventResponse,
  FunWalletSdkWindow,
  ChangeNetworkResponse,
  PendingTransactionResponse,
  ... // loads more
} from '@funfair/wallet-sdk';
```

**HINT** it seems `VSCODE` has a mind of its own sometimes so if it autocompletes with a long path i.e. `sdk/src/type...` just revert it to SDK and it seems to sort itself out.

If you find anything without a type or any issues with it please raise a github issue for us to triage.

## Setting it up with react

Coming soon.. the SDK does support it but no dev docs are supplied for the config.

## Setting it up with vue

Coming soon.. the SDK does support it but no dev docs are supplied for the config.

## Setting it up with another framework

FunWallet SDK supports any frontend framework so it will work with any library you are using, we have just done some examples above of the main ones. Let us know if you like us to add anymore.
