# Ethereum Provider

We have our own Ethereum provider which can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance.

Once you initialize the Wallet, the SDK will expose the Ethereum provider on the window, which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

The ethereum provider conform to the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).

```ts
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

## Provider Methods

### request

The request method is intended as a transport- and protocol-agnostic wrapper function for Remote Procedure Calls (RPCs).

```ts
interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

public request(args: RequestArguments): Promise<unknown>;
```

`JavaScript`:

```js
const accounts = await window.funwallet.sdk.ethereum.request({
  method: 'eth_accounts',
});
const block = await window.funwallet.sdk.ethereum.request({
  method: 'eth_getBlockByNumber',
  params: ['latest', 'true'],
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const accounts = await window.funwallet.sdk.ethereum.request({
  method: 'eth_accounts',
});
const block = await window.funwallet.sdk.ethereum.request({
  method: 'eth_getBlockByNumber',
  params: ['latest', 'true'],
});
```

### send (DEPRECATED)

This method is superseded by request.

The send method is intended as a transport- and protocol-agnostic wrapper function for Remote Procedure Calls (RPCs).

```ts
public send(method: string, params?: unknown[] | object): Promise<unknown> {}
```

`JavaScript`:

```js
const accounts = await window.funwallet.sdk.ethereum.send('eth_accounts');
const block = await window.funwallet.sdk.ethereum.send('eth_getBlockByNumber', [
  'latest',
  'true',
]);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const accounts = await window.funwallet.sdk.ethereum.send('eth_accounts');
const block = await window.funwallet.sdk.ethereum.send('eth_getBlockByNumber', [
  'latest',
  'true',
]);
```

### sendAsync (DEPRECATED)

This method is superseded by request.

The sendAsync method is intended as a transport- and protocol-agnostic wrapper function for Remote Procedure Calls (RPCs).

```ts
interface JsonRpcPayload {
  id: number;
  jsonrpc: string;
  method: string;
  // tslint:disable-next-line: no-any
  result?: any | undefined;
  // tslint:disable-next-line: no-any
  params: Array<any>;
}


public sendAsync(request: JsonRpcPayload, callback: (error: ProviderRpcError | null, response: JsonRpcPayload | null) => void): void;
```

`JavaScript`:

```js
const jsonRpcPayload = {
  id: '1',
  jsonrpc: '2.0',
  method: MessageExecutors.eth_gasPrice,
  result: undefined,
  params: [],
};

window.funwallet.sdk.ethereum.sendAsync(
  jsonRpcPayload,
  (error: ProviderRpcError | null, response: JsonRpcPayload | null) => {
    console.log(response);
  }
);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const jsonRpcPayload = {
  id: '1',
  jsonrpc: '2.0',
  method: MessageExecutors.eth_gasPrice,
  result: undefined,
  params: [],
};

window.funwallet.sdk.ethereum.sendAsync(
  jsonRpcPayload,
  (error: ProviderRpcError | null, response: JsonRpcPayload | null) => {
    console.log(response);
  }
);
```

### on and removeListener

Event emitters fire on certain state changes.

#### accountsChanged

This will fire when the user logs in and then if the ethereum account ever changes going forward. As the wallet only supports 1 ethereum account per login this will only fire once at the moment.

```ts
public on('accountsChanged', listener: (accounts: string[]) => void): this;
```

```ts
import window from '@funfair-tech/wallet-sdk/window';

const logAccounts = (accounts: string[]) => {
  console.log(`Accounts:\n${accounts.join('\n')}`);
};
window.funwallet.sdk.ethereum.on('accountsChanged', logAccounts);
// to unsubscribe
window.funwallet.sdk.ethereum.removeListener('accountsChanged', logAccounts);
```

#### chainChanged

This will fire when the user logs in and then if the network changes going forward.

```ts
public on('chainChanged', listener: (chainId: string) => void): this;
```

```ts
import window from '@funfair-tech/wallet-sdk/window';

const logChainId = (chainId: string) => {
  console.log(`Chain id changed: ${chainId}`);
};
window.funwallet.sdk.ethereum.on('chainChanged', logChainId);
// to unsubscribe
window.funwallet.sdk.ethereum.removeListener('chainChanged', logChainId);
```

#### networkChanged (DEPRECATED)

The event `networkChanged` is superseded by `chainChanged`.

This will fire when the user logs in and then if the network changes going forward.

```ts
public on('networkChanged', listener: (netId: string) => void): this;
```

```ts
import window from '@funfair-tech/wallet-sdk/window';

const logNetworkId = (netId: string) => {
  console.log(`Network id changed: ${netId}`);
};
window.funwallet.sdk.ethereum.on('networkChanged', logNetworkId);
// to unsubscribe
window.funwallet.sdk.ethereum.removeListener('networkChanged', logNetworkId);
```

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
