# Ethereum Provider

We have our own Ethereum provider which can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance.

Once you initialize the Wallet, the SDK will expose the Ethereum provider on the window, which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

```ts
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

## Provider Methods

### isFunWallet

This will return true if the provider is a FunFair Wallet.

```ts
public get isFunWallet(): boolean
```

`JavaScript`:

```js
const isFunWallet = window.funwallet.sdk.ethereum.isFunWallet;
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const isFunWallet = window.funwallet.sdk.ethereum.isFunWallet;
```

### isConnected

This will return true if the provider is connected.

```ts
public get isConnected(): boolean
```

`JavaScript`:

```js
const isConnected = window.funwallet.sdk.ethereum.isConnected;
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const isConnected = window.funwallet.sdk.ethereum.isConnected;
```

### initOptions

Returns the initialized options supplied.

```ts
public get initOptions(): InitOptions | undefined
```

`JavaScript`:

```js
const initOptions = window.funwallet.sdk.ethereum.initOptions;
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

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
import window from '@funfair-tech/wallet-sdk/window';

// the web3 typings do not handle certain custom providers in their TS typings
// so please cast it as any for it to compile with TS
const web3 = new Web3(window.funwallet.sdk.ethereum as any);
```

## etherjs

`JavaScript`:

```js
const provider = new ethers.providers.Web3Provider(
  window.funwallet.sdk.ethereum
);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const provider = new ethers.providers.Web3Provider(
  window.funwallet.sdk.ethereum as any
);
```

<strong>All your web3 or ethers calls now will work as normal but proxy through to the Wallet. Use the library to now send transaction and do all things blockchain.</strong>

**NOTE**

We don't support `eth_sign`, `eth_signTransaction` and `eth_sendRawTransaction` due to the security concerns with signing and not sending. You can only sign and send with our Wallet. Also `eth_newFilter`, `eth_newBlockFilter`, `eth_getFilterChanges`, `eth_getFilterLogs`, `eth_uninstallFilter` and `eth_newPendingTransactionFilter` are not supported by our nodes so will not work.
