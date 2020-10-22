# SDK Event Listeners

The Wallet emits events when properties change, for example, when the authenticated user changes their network. Events allow your dApp to keep in sync. You can hook onto event listeners via methods exposed in the SDK, writing your own handling logic that you want to fire when the event is received.

You can only register one event listener per message listener - if you do try to listen to a listener which has already been registered, it will throw a error. You can cancel listeners as necessary, and you'll then be able to register them again without an error being thrown.

The SDK exposes two different ways to register an event listener:

1. Event listeners: listen to all events of a specified type until the listener is cancelled explicitly.
2. One-off listeners: subscribe only to the first event of a specified type. Once the event has fired, your dApp will be unsubscribed and will receive no further events of the type. An example use case of a one-off listener might be when your dApp wants to update its state based on the next block mined, but isn't interested in subsequent changes to the blockchain.

Once the SDK is initialized, you should hook onto all the event listeners, as each one is important to the integration. We recommend that the callback you write for each message listener is just a simple state change to your Redux store, allowing that state change to be reflected in your UI components. Reactive programming (e.g. RxJS) will simplify the integration, and while it's not required (the SDK itself doesn't impose any constraints on this), it is our recommended integration approach for a clean solution.

## Registering an event listener

`JavaScript`:

```js
window.funwallet.sdk.on('MESSAGE LISTENER NAME', (result) => {
  // your event-handling logic here
});
```

`TypeScript`:

Note: `TStronglyTypedResponse` is a reference to a strongly-typed model - obviously don't use this in your application.

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  TStronglyTypedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      // your event-handling logic here
    }
  }
);
```

## Registering a one-off listener

`JavaScript`:

```js
window.funwallet.sdk.once('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    // your event-handling logic here
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  TStronglyTypedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.once<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      // your event-handling logic here
    }
  }
);
```

Results are returned to the listener as follows:

```ts
{
  data: TStronglyTypedResponse,
  origin: string,
  source: Window
}
```

This is the result of the `postMessage` operation performed by the SDK.

As well as indicating the origin and the source of the received data, the returned result will always have a _data_ property which specifies the data for the event being received.

`data`
The object passed from the other window.

`origin`
The origin of the window that sent the message at the time `postMessage` was called. This string is the concatenation of the protocol and `"://"`, the host name if one exists, and `":"` followed by a port number if a port is present and differs from the default port for the given protocol. Examples of typical origins are https://example.org (implying port 443), http://example.net (implying port 80), and http://example.com:8080.

Note that this origin is not guaranteed to be the current or future origin of that window, which might have been navigated to a different location since postMessage was called.

In our examples we use a placeholder of `https://wallet.funfair.io` but yours should have the correct, valid origin for the Wallet environment you're pointing to within your iframes.

`source`
A reference to the window object that sent the message. You can use this to establish two-way communication between two windows with different origins.

## Security Concerns

💡 Always verify the sender's identity using the origin and possibly source properties. Any window (including, for example, http://evil.example.com) can send a message to any other window, and you have no guarantee that an unknown sender will not send malicious messages. Having verified identity, however, you still should always verify the syntax of the received message. Otherwise, a security hole in the site you trusted to send only trusted messages could then open a cross-site scripting hole in your site.

💡 To protect your dApp's users from cross-site scripting attacks, make sure you **NEVER** assign the _data_ result from the `postMessage` to any HTML elements:

```js
window.funwallet.sdk.once('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    // OUCH!! YOU HAVE OPENED YOURSELF UP FOR THE TRUSTED DOMAINS TO
    // INJECT BAD SCRIPTS INTO YOUR PAGE. AS RULE OF THUMB, NEVER, *EVER*
    // DO THIS (DON'T WORRY WE WOULD NEVER DO SOMETHING SO MEAN :D)
    document.getElementById('message').innerHTML = result.data;
  }
});
```

Always specify an exact target origin, not "\*", when you use `postMessage` to send data to other windows. A malicious site can change the location of the window without your knowledge, and therefore it can intercept the data sent using `postMessage`.

Please note the SDK does check this as well and only connects messages from the Wallet but as the SDK is hosted on your side and exported globally on the window we suggest you check the origin as well. The messages the Wallet sends you are just information based anyway, we never register a event which says "go and execute this script on the parent site" so this makes it a lot less to worry about but we still suggest you abide by the security concerns addressed. If you fail to check this you can not be sure that the message has came from the Wallet.

## List of All Available Listeners

```ts
{
  restoreAuthenticationCompleted = 'restoreAuthenticationCompleted',
  changeNetwork = 'changeNetwork',
  authenticationCompleted = 'authenticationCompleted',
  followerAuthenticationCompleted = 'followerAuthenticationCompleted',
  walletInactivityLoggedOut = 'walletInactivityLoggedOut',
  walletDeviceDeletedLoggedOut = 'walletDeviceDeletedLoggedOut',
  pendingTransaction = 'pendingTransaction',
  completedTransaction = 'completedTransaction',
  erc20TokenBalanceChanged = 'erc20TokenBalanceChanged',
  erc20TokenFiatPriceChanged = 'erc20TokenFiatPriceChanged',
  ethBalanceChanged = 'ethBalanceChanged',
  ethFiatPriceChanged = 'ethFiatPriceChanged',
  changeCurrency = 'changeCurrency',
  isKycVerified = 'isKycVerified',
  kycProcessCancelled = 'kycProcessCancelled',
  websocketConnected = 'websocketConnected',
  websocketDisconnected = 'websocketDisconnected',
  newBlock = 'newBlock',
  playerProtectionUpdated = 'playerProtectionUpdated',
  walletTracking = 'walletTracking',
  authenticationPopUpClosed = 'authenticationPopUpClosed',
  transactionReplaced = 'transactionReplaced',
}
```

All the examples of code here will use the `on` but in all of these cases, you can also use `once` if you require one-off listening functionality.

## restoreAuthenticationCompleted

To allow restoring someone to be logged in after they refresh on initial load the Wallet tries to restore a session. Upon success, it will emit `restoreAuthenticationCompleted` telling you if it's restored a user's session or not. You should disable any sign-in/up click button until you get this event (it should happen very fast).

`JavaScript`:

```js
window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
  MessageListeners.restoreAuthenticationCompleted,
  (result: RestoreAuthenticationCompletedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  isAuthenticated: boolean,
}
```

---

## changeNetwork

This will fire when the Wallet network has been changed. _Note: this will always fire upon initial authentication of the leader as networks will update as a result of authentication._

`JavaScript`:

```js
window.funwallet.sdk.on('changeNetwork', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  ChangeNetworkResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<ChangeNetworkResponse>(
  MessageListeners.changeNetwork,
  (result: ChangeNetworkResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  network: NetworkDetails,
}
```

`NetworkDetails`:

```ts
{
  name: string;
  id: Networks;
  providerUrl: string;
  enabled: boolean;
}
```

`Networks`:

```ts
export enum Networks {
  mainnet = 1,
  ropsten = 3,
  rinkeby = 4,
  kovan = 42,
  novichok = 1984,
  bracknell = 1999,
  unknown = -1,
}
```

---

## authenticationCompleted

This will fire when the leader instance has been authenticated by a user. Once (and not until) this event has been received, you can go ahead and inject follower instances to show the UI to the authenticated user.

`JavaScript`:

```js
window.funwallet.sdk.on('authenticationCompleted', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  AuthenticationCompletedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<AuthenticationCompletedResponse>(
  MessageListeners.authenticationCompleted,
  (result: AuthenticationCompletedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  // can just be ignored if your dapp does not care about player protection
  playerProtection: ExclusionStatusResponse;
  ethereumAddress: string;
  currentCurrency: string;
  currentNetwork: NetworkDetails;
}
```

`ExclusionStatusResponse`:

```ts
{
    status: ExclusionStatusType;
    startTimestamp?: number | undefined;
    durationDays?: number | undefined;
    activeTimestamp?: number | undefined;
}
```

`ExclusionStatusType`:

```ts
export enum ExclusionStatusType {
  ACTIVE = 'ACTIVE',
  ON_BREAK = 'ON_BREAK',
  EXCLUDED = 'EXCLUDED',
}
```

`NetworkDetails`:

```ts
{
  name: string;
  id: Networks;
  providerUrl: string;
  enabled: boolean;
}
```

`Networks`:

```ts
export enum Networks {
  mainnet = 1,
  ropsten = 3,
  rinkeby = 4,
  kovan = 42,
  novichok = 1984,
  bracknell = 1999,
  unknown = -1,
}
```

---

## followerAuthenticationCompleted

This will fire when the follower instance has authenticated itself successfully and indicates that you should re-enable any disabled Wallet buttons.

`JavaScript`:

```js
window.funwallet.sdk.on('followerAuthenticationCompleted', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  FollowerAuthenticationCompletedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<FollowerAuthenticationCompletedResponse>(
  MessageListeners.followerAuthenticationCompleted,
  (result: FollowerAuthenticationCompletedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  followerAuthenticationCompleted: boolean,
}
```

---

## walletInactivityLoggedOut

This will fire when the inactivity timeout has expired, meaning all authenticated instances have now been logged out.

`JavaScript`:

```js
window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
  MessageListeners.walletInactivityLoggedOut,
  (result: WalletInactivityLoggedOutResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  loggedOut: boolean,
}
```

## walletDeviceDeletedLoggedOut

This will fire when the current device the user is using has been deleted, meaning all authenticated instances have now been logged out.

`JavaScript`:

```js
window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
  MessageListeners.walletDeviceDeletedLoggedOut,
  (result: WalletDeviceDeletedLoggedOutResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  loggedOut: boolean,
}
```

---

## pendingTransaction

This will fire when a pending transaction has occurred on the Wallet. We suggest if your dApp has sent this transaction and wants to hook onto certain notifications, e.g. the transaction hash, receipt etc just use the framework your using to get that data (ethers/web3).

`JavaScript`:

```js
window.funwallet.sdk.on('pendingTransaction', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  PendingTransactionResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<PendingTransactionResponse>(
  MessageListeners.pendingTransaction,
  (result: PendingTransactionResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  transactionHash: string,
  transaction: {
    to: string;
    from: string;
    nonce: string;
    gasLimit: string;
    gasPrice: string;
    data: string;
    value: string;
    chainId: number;
  }
}
```

---

## completedTransaction

This will fire when a completed transaction has occurred on the Wallet (i.e. upon the first confirmation). We suggest if your dApp has sent this transaction and wants to hook onto certain notifications, e.g. the transaction hash, receipt etc just use the framework your using to get that data (ethers/web3).

`JavaScript`:

```js
window.funwallet.sdk.on('completedTransaction', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  CompletedTransactionResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<CompletedTransactionResponse>(
  MessageListeners.completedTransaction,
  (result: CompletedTransactionResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  transactionReceipt: {
    to: string;
    from: string;
    contractAddress: string;
    transactionIndex: number;
    root?: string;
    gasUsed: string;
    logsBloom: string;
    blockHash: string;
    transactionHash: string;
    logs: Array<{
      blockNumber: number;
      blockHash: string;
      transactionIndex: number;
      removed: boolean;
      address: string;
      data: string;
      topics: Array<string>;
      transactionHash: string;
      logIndex: number;
    }>;
    blockNumber: number;
    confirmations: number;
    cumulativeGasUsed: string;
    byzantium: boolean;
    status?: number;
  },
  blockTimestamp: number,
}
```

---

## transactionReplaced

This will fire when the user cancels the transaction or speeds it up within the wallet itself. Most wallets do not handle this meaning your dapp polls forever but if it happens when using the funwallet we will throw an error if your waiting for the receipt, also we will emit this event which tells you the `oldHash` the `newHash` and the reason it got replaced allowing you to link the old transaction to the new one without having to monitor events.

`JavaScript`:

```js
window.funwallet.sdk.on('transactionReplaced', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  TransactionReplacedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<TransactionReplacedResponse>(
  MessageListeners.transactionReplaced,
  (result: TransactionReplacedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  oldHash: string,
  newHash: string,
  replacedReason: 'gasIncreased' | 'cancelled',
}
```

---

## erc20TokenBalanceChanged

This will fire when an ERC20 token balance changes for the authenticated user.

`JavaScript`:

```js
window.funwallet.sdk.on('erc20TokenBalanceChanged', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  ERC20TokenBalanceChangedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<ERC20TokenBalanceChangedResponse>(
  MessageListeners.erc20TokenBalanceChanged,
  (result: ERC20TokenBalanceChangedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  symbol: string,
  // the balance is pre-formatted
  // to the correct maximum decimal
  tokenBalance: string,
  // if its the main primary symbol set
  // on the account
  primary: boolean,
}
```

---

## erc20TokenFiatPriceChanged

This will fire when an ERC20 token's fiat price changes. Fiat prices are monitored by the wallet server and updated regularly. Any change will trigger this event.

`JavaScript`:

```js
window.funwallet.sdk.on('erc20TokenFiatPriceChanged', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  ERC20FiatPriceChangedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<ERC20FiatPriceChangedResponse>(
  MessageListeners.erc20TokenFiatPriceChanged,
  (result: ERC20FiatPriceChangedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  symbol: string,
  fiatPrice: number,
  // if its the main primary symbol set
  // on the account
  primary: boolean,
}
```

---

## ethBalanceChanged

This will fire when the ETH balance changes for the authenticated user.

`JavaScript`:

```js
window.funwallet.sdk.on('ethBalanceChanged', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  ETHBalanceChangedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<ETHBalanceChangedResponse>(
  MessageListeners.ethBalanceChanged,
  (result: ETHBalanceChangedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  // the ethBalance is pre-formatted
  // to the correct maximum decimal
  ethBalance: string,
}
```

---

## ethFiatPriceChanged

This will fire when the ETH fiat price changes. Fiat prices are monitored by the Wallet server and updated regularly. Any change will trigger this event.

`JavaScript`:

```js
window.funwallet.sdk.on('ethFiatPriceChanged', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  ETHFiatPriceChangedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<ETHFiatPriceChangedResponse>(
  MessageListeners.ethFiatPriceChanged,
  (result: ETHFiatPriceChangedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  fiatPrice: number,
}
```

---

## changeCurrency

This will fire when the authenticated user's selected currency has changed.

`JavaScript`:

```js
window.funwallet.sdk.on('changeCurrency', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  ChangeCurrencyResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<ChangeCurrencyResponse>(
  MessageListeners.changeCurrency,
  (result: ChangeCurrencyResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  currency: string,
}
```

---

## isKycVerified

This will fire upon initial login, whether the account is KYC-verified or not. This allows you to pop up the KYC modal automatically when a user logs in, if necessary.

`JavaScript`:

```js
window.funwallet.sdk.on('isKycVerified', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    if (!result.data.isVerified) {
      window.funwallet.sdk.showFunWalletModal();
    } else {
      // maybe show some kind of error message as in theory
      // your client should not be showing ability to popup KYC
      // when they are already verified
      console.error(
        'Your client should not show the kyc logic if already kyced'
      );
    }
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  IsRegisteredThirdPartySignerResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<IsKycVerifiedResponse>(
  MessageListeners.isKycVerified,
  (result: IsKycVerifiedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (!result.data.isVerified) {
        window.funwallet.sdk.showFunWalletModal();
      } else {
        // maybe show some kind of error message as in theory
        // your client should not be showing ability to popup KYC
        // when they are already verified
        console.error(
          'Your client should not show the kyc logic if already kyced'
        );
      }
    }
  }
);
```

`result.data` returns:

```ts
{
  isVerified: boolean;
}
```

---

## kycProcessCancelled

This will fire when the authenticated account going through the KYC process cancels the modal and goes back to the dApp website.

`JavaScript`:

```js
window.funwallet.sdk.on('kycProcessCancelled', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    if (result.data.cancelled) {
      window.funwallet.sdk.hideFunWalletModal();
      // you may want to move routes etc here hence why you hook onto this action
      // and the sdk does not
    }
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  IsRegisteredThirdPartySignerResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<KycProcessCancelledResponse>(
  MessageListeners.kycProcessCancelled,
  (result: KycProcessCancelledResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (result.data.cancelled) {
        window.funwallet.sdk.hideFunWalletModal();
        // you may want to move routes etc here hence why you hook onto this action
        // and the sdk does not
      }
    }
  }
);
```

`result.data` returns:

```ts
{
  cancelled: boolean;
}
```

---

## websocketConnected

This will fire when a successful WebSocket connection is made, including any time a dApp reconnects after being disconnected. Please keep the WebSocket connected status in memory, and when `websocketDisconnected` is received, update the value of the WebSocket connection status.

`JavaScript`:

```js
window.funwallet.sdk.on('websocketConnected', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  WebsocketConnectedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<WebsocketConnectedResponse>(
  MessageListeners.websocketConnected,
  (result: WebsocketConnectedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  connected: boolean;
}
```

---

## websocketDisconnected

This will fire when the WebSocket disconnects or gets closed.

`JavaScript`:

```js
window.funwallet.sdk.on('websocketDisconnected', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  WebsocketDisconnectedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<WebsocketDisconnectedResponse>(
  MessageListeners.websocketDisconnected,
  (result: WebsocketDisconnectedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  disconnected: boolean;
}
```

---

## newBlock

This will fire when the wallet receives a new block alert through the WebSocket connection. This removes the need for any polling - the dApp can just listen for these events. You can hook onto this even if the user is not authenticated.

`JavaScript`:

```js
window.funwallet.sdk.on('newBlock', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import { MessageListeners, NewBlockResponse } from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<NewBlockResponse>(
  MessageListeners.newBlock,
  (result: NewBlockResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  networkId: Networks;
  blockNumber: number;
  blockHash: string;
  bloomFilter: string;
  timestamp: number;
}
```

---

## playerProtectionUpdated

This will fire when the player protection data has been updated, for example if they have self-excluded or changed their exclusion reactivation date.

`JavaScript`:

```js
window.funwallet.sdk.on('playerProtectionUpdated', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  PlayerProtectionUpdatedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<PlayerProtectionUpdatedResponse>(
  MessageListeners.playerProtectionUpdated,
  (result: PlayerProtectionUpdatedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  status: ExclusionStatusType;
  startTimestamp?: number | undefined;
  durationDays?: number | undefined;
  activeTimestamp?: number | undefined;
}
```

`ExclusionStatusType`

```ts
export enum ExclusionStatusType {
  ACTIVE = 'ACTIVE',
  ON_BREAK = 'ON_BREAK',
  EXCLUDED = 'EXCLUDED',
}
```

---

## walletTracking

Due to the Wallet holding private keys in memory, we don't allow Google analytics scripts in the Wallet itself. However, this event emits tracking data back to the client so the you can pass them to any tracking software you want to use.

`JavaScript`:

```js
window.funwallet.sdk.on('walletTracking', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  WalletTrackingResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<WalletTrackingResponse>(
  MessageListeners.walletTracking,
  (result: WalletTrackingResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
    eventCategory: TrackingEventCategory;
    eventAction: TrackingEventAction;
    eventLabel?: TrackingEventLabel | undefined;
    eventValue?: number | undefined;
}
```

```ts
export declare enum TrackingEventCategory {
  walletRegistration = 'walletRegistration',
  walletRecovery = 'walletRecovery',
  wallet = 'wallet',
  accountDeposit = 'accountDeposit',
  accountWithdrawal = 'accountWithdrawal',
  accountTokenTransfers = 'accountTokenTransfers',
  accountTransactions = 'accountTransactions',
  accountSettings = 'accountSettings',
  accountSecurity = 'accountSecurity',
  accountResponsibleGaming = 'accountResponsibleGaming',
  approveTransaction = 'approveTransaction',
  approveSigningText = 'approveSigningText',
}
```

```ts
export declare enum TrackingEventAction {
  step = 'step',
  click = 'click',
}
```

```ts
export declare enum TrackingEventLabel {
  emailValidatingRequest = 'emailValidatingRequest',
  resendEmail = 'resendEmail',
  emailValidationComplete = 'emailValidationComplete',
  backToSignIn = 'backToSignIn',
  emailValidationFailed = 'emailValidationFailed',
  closeAndReturnToApp = 'closeAndReturnToApp',
  passwordSetup = 'passwordSetup',
  registrationComplete = 'registrationComplete',
  startKyc = 'startKyc',
  closeKyc = 'closeKyc',
  verifyMyId = 'verifyMyId',
  selectCountry = 'selectCountry',
  kycLoaded = 'kycLoaded',
  kycCompleted = 'kycCompleted',
  kycFailed = 'kycFailed',
  kycFallbackLoaded = 'kycFallbackLoaded',
  recoveryRequest = 'recoveryRequest',
  noRecoveryPossible = 'noRecoveryPossible',
  recoveryEmailSent = 'recoveryEmailSent',
  recoveryEmailValidated = 'recoveryEmailValidated',
  recoveryComplete = 'recoveryComplete',
  createAccount = 'createAccount',
  signIn = 'signIn',
  signInFailed = 'signInFailed',
  signInCompleted = 'signInCompleted',
  forgotPassword = 'forgotPassword',
  deposit = 'deposit',
  ethOrFun = 'ethOrFun',
  copyAddress = 'copyAddress',
  coinSwap = 'coinSwap',
  createdCoinSwap = 'createdCoinSwap',
  withdrawal = 'withdrawal',
  withdrawalMax = 'withdrawalMax',
  withdrawalAdvanced = 'widhtrawalAdvanced',
  withdrawalChangeGasPrice = 'withdrawalChangeGasPrice',
  withdrawalClick = 'withdrawalClick',
  withdrawalCompleted = 'withdrawalCompleted',
  withdrawalFailed = 'withdrawalFailed',
  withdrawalCancelled = 'withdrawalCancelled',
  tokenTransfers = 'tokenTransfers',
  tokenTransfersNext = 'tokenTransfersNext',
  tokenTransfersPrevious = 'tokenTransfersPrevious',
  transactions = 'transactions',
  transactoinViewMoreInfo = 'transactoinViewMoreInfo',
  transactionGoToEtherscan = 'transactionGoToEtherscan',
  transactionSpeedUp = 'transactionSpeedUp',
  transactionCancel = 'transactionCancel',
  transactionsNext = 'transactionsNext',
  transactionsPrevious = 'transactionsPrevious',
  accountSettings = 'accountSettings',
  networkChange = 'networkChange',
  currencyChange = 'currencyChange',
  signerChange = 'signerChange',
  exportWallet = 'exportWallet',
  accountSecurity = 'accountSecurity',
  changeEmail = 'changeEmail',
  changeEmailcompleted = 'changeEmailcompleted',
  changePassword = 'changePassword',
  changePasswordCompleted = 'changePasswordCompleted',
  secondaryEmail = 'secondaryEmail',
  secondaryEmailCompleted = 'secondaryEmailCompleted',
  secondaryEmailDeleted = 'secondaryEmailDeleted',
  twoFactorAuthentication = 'twoFactorAuthentication',
  twoFactorAuthenticationEnabled = 'twoFactorAuthenticationEnabled',
  twoFactorAuthenticationDisabled = 'twoFactorAuthenticationDisabled',
  deviceActivity = 'deviceActivity',
  deviceDeleted = 'deviceDeleted',
  thirdPartySigners = 'thirdPartySigners',
  thirdPartyAddSigner = 'thirdPartyAddSigner',
  thirdPartyAddSignerCompleted = 'thirdPartyAddSignerCompleted',
  thirdPartyAddSignerFailed = 'thirdPartyAddSignerFailed',
  responsibleGaming = 'responsibleGaming',
  takeABreak = 'takeABreak',
  takeABreakClick = 'takeABreakClick',
  takeABreakCompleted = 'takeABreakCompleted',
  takeABreakCancelled = 'takeABreakCancelled',
  extendBreak = 'extendBreak',
  extendBreakClick = 'extendBreakClick',
  extendBreakCompleted = 'extendBreakCompleted',
  extendBreakFailed = 'extendBreakFailed',
  extendBreakCancelled = 'extendBreakCancelled',
  selfExcluse = 'selfExcluse',
  selfExcluseCompleted = 'selfExcluseCompleted',
  selfExcluseCancelled = 'selfExcluseCancelled',
  reactivateAccountModal = 'reactivateAccountModal',
  reactivateAccount = 'reactivateAccount',
  approveTransaction = 'approveTransaction',
  approveTransactionAdvanced = 'approveTransactionAdvanced',
  approveTransactionApproved = 'approveTransactionApproved',
  approveTransactionRejected = 'approveTransactionRejected',
  approveSigningText = 'approveSigningText',
  approveSigningTextApproved = 'approveSigningTextApproved',
  approveSigningTextRejected = 'approveSigningTextRejected',
}
```

---

## authenticationPopUpClosed

This emits an event when the authentication popup is closed. If `isAuthenticated` in the response is true, it means the close happened after a successful login; if it's false it means the user didn't go through the whole login process (for example, if they closed the popup).

`JavaScript`:

```js
window.funwallet.sdk.on('authenticationPopUpClosed', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  AuthenticationPopUpClosedResponse,
} from '@funfair-tech/wallet-sdk';

window.funwallet.sdk.on<AuthenticationPopUpClosedResponse>(
  MessageListeners.authenticationPopUpClosed,
  (result: AuthenticationPopUpClosedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  isAuthenticated: boolean;
}
```

---

## Cancelling event listeners

`JavaScript`:

```js
const listener = window.funwallet.sdk.on('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});

// cancel
listener.cancel();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  TStronglyTypedResponse,
} from '@funfair-tech/wallet-sdk';

const listener = window.funwallet.sdk.on<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);

// cancel
listener.cancel();
```

This works the same as `once`:

`JavaScript`:

```js
const listener = funwalletsdk.once('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'https://wallet.funfair.io') {
    console.log(result.data);
  }
});

// cancel
listener.cancel();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  TStronglyTypedResponse,
} from '@funfair-tech/wallet-sdk';

const listener = window.funwallet.sdk.once<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  }
);

// cancel
listener.cancel();
```

Now if you try to listen to that message listener again it will work, as you have cancelled the other listener. On the `once` calls, once the `once` has been fired you will be able to register a new listener without an error being thrown.
