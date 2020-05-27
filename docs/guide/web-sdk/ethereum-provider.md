# Ethereum Provider

We have our own ethereum provider which can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our ethereum provider makes sure all those calls go through the authenticated leader wallet instance.

Once you initialise the wallet, the SDK will expose the ethereum provider on the window which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

```ts
// provider lives here in the funwalletsdk object
window.funwallet.sdk.ethereum;
```

## Provider Methods

### isFunWallet

This will return true if the provider is a fun wallet.

```ts
public get isFunWallet(): boolean
```

`JavaScript`:

```js
const isFunWallet = window.funwallet.sdk.ethereum.isFunWallet;
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';

const isFunWallet = window.funwallet.sdk.ethereum.isFunWallet;
```

### isConnected

This will return true if the provider is connected

```ts
public get isConnected(): boolean
```

`JavaScript`:

```js
const isConnected = window.funwallet.sdk.ethereum.isConnected;
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';

const isConnected = window.funwallet.sdk.ethereum.isConnected;
```

### initOptions

Returns the initialised options supplied

```ts
public get initOptions(): InitOptions | undefined
```

`JavaScript`:

```js
const initOptions = window.funwallet.sdk.ethereum.initOptions;
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';

const initOptions = window.funwallet.sdk.ethereum.initOptions;
```

- `InitOptions` - The options supplied for the SDK

```js
{
  // the `NgZone` class angular allows you to inject
  ngZone?: this._zone
}
```

## web3

`JavaScript`:

```js
const web3 = new Web3(window.funwallet.sdk.ethereum);
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';

// at the moment the current web3 typings does accept custom providers
// something which will be fixed later on in web3 but for now you have
// to cast it as `any`
const web3 = new Web3(window.funwallet.sdk.ethereum as any);
```

## ethers

`JavaScript`:

```js
const provider = new ethers.providers.Web3Provider(
  window.funwallet.sdk.ethereum
);
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';

const provider = new ethers.providers.Web3Provider(
  window.funwallet.sdk.ethereum as any
);
```

<strong>All your web3 or ethers calls now will work as normal but proxy through to the wallet. Use the library to now send transaction and do all things blockchain.</strong>

**NOTE**

We do not support `eth_sign`, `eth_signTransaction` and `eth_sendRawTransaction` due to the security concerns with signing and not sending. You can only sign and send with our wallet. Also `eth_newFilter`, `eth_newBlockFilter`, `eth_getFilterChanges`, `eth_getFilterLogs`, `eth_uninstallFilter` and `eth_newPendingTransactionFilter` our not supported by our nodes so will not work.
