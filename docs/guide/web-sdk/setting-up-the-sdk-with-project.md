# Setting Up the SDK in Your Project

## TypeScript Typings

If you're using `TypeScript`, please make sure you use all the typings supplied in the SDK. As the SDK is exposed on the window object, you should use the window object supplied by the SDK. This extends the `Window` object as well, so you can use it for standard window calls.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## Setting it up with Angular CLI

To get it to build with the Angular CLI compiler, you need to add the `window.ts` file in your `files` object in your `tsconfig.app.json`. It also seems if you add the `window.ts` file, Angular CLI starts complaining about the `main.ts` and the `polyfill.ts`, so you'll need to add those in the array as well if you still have them in your Angular project. Example below (example `node_modules` path shown, make sure you update this if necessary):

```json
 "files": [
    "./main.ts",
    "./polyfills.ts",
    "../node_modules/@funfair-tech/wallet-sdk/window.ts"
  ]
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
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
} from '@funfair-tech/wallet-sdk';
```

**HINT** it seems `VSCODE` has a mind of its own sometimes, so if it autocompletes with a long path i.e. `sdk/src/type...`, just revert it to SDK and it should sort itself out.

If you find anything without a type or any issues with it please raise a GitHub issue for us to triage.

## Setting it up with React

Coming soon.. the SDK does support it but no dev docs are supplied for the config.

## Setting it up with Vue

Coming soon.. the SDK does support it but no dev docs are supplied for the config.

## Setting it up with another framework

The FunFair Wallet SDK supports any front-end framework, so it will work with any library you are using - we've just shown some examples above of the main ones. Let us know if you like us to add any more.
