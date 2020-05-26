# SDK Event Listeners

The wallet emits events when properties change. For example, when the authenticated user changes their network - events help your app to keep in sync. You can hook onto the event listeners in the SDK, writing your own logic you want to fire when the event is emitted.

You can only register 1 event listener per message listener, if you do try to listen to a listener which has already been registered it will throw a error. You can cancel listeners and you will be able to register them again without an error throwing.

Once the SDK is initialised you should hook onto all the event listeners as each one is important within the integration. We recommend the callback you write for each message listener is just a simple state change to your redux store, which then allows your UI components to react to that state change. Reactive programming (rxjs) in this case will make the integration a lot nicer. The SDK itself doesn't have any hard limits on this though, so if you did want to integrate it another way then that's ok, the above is just our recommended integration approach for a clean solution.

## Register an event listener

`JavaScript`:

```js
window.funwallet.sdk.on('MESSAGE LISTENER NAME', (result) => {
  // logic here
});
```

`TypeScript`:

Note: `TStronglyTypedResponse` is a reference to a strongly typed model - obviously don't use this in your application.

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, TStronglyTypedResponse } from '@funfair/wallet-sdk';

window.funwallet.sdk.on<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      // logic here
    }
  }
);
```

## Listen for a one-off listener

`JavaScript`:

```js
window.funwallet.sdk.once('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    // logic here
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, TStronglyTypedResponse } from '@funfair/wallet-sdk';

window.funwallet.sdk.once<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      // logic here
    }
  }
);
```

It will always have 1 parameter which is the result of the `postMessage` outcome:

```ts
{
  data: TStronglyTypedResponse,
  origin: string,
  source: Window
}
```

`data`
The object passed from the other window.

`origin`
The origin of the window that sent the message at the time postMessage was called. This string is the concatenation of the protocol and "://", the host name if one exists, and ":" followed by a port number if a port is present and differs from the default port for the given protocol. Examples of typical origins are https://example.org (implying port 443), http://example.net (implying port 80), and http://example.com:8080. Note that this origin is not guaranteed to be the current or future origin of that window, which might have been navigated to a different location since postMessage was called.

In our examples we use a placeholder of `FUN_WALLET_ORIGIN` but yours should have the correct, valid origin for the wallet environment you're pointing to within your iframes.

`source`
A reference to the window object that sent the message; you can use this to establish two-way communication between two windows with different origins.

## Security concerns

Always verify the sender's identity using the origin and possibly source properties. Any window (including, for example, http://evil.example.com) can send a message to any other window, and you have no guarantees that an unknown sender will not send malicious messages. Having verified identity, however, you still should always verify the syntax of the received message. Otherwise, a security hole in the site you trusted to send only trusted messages could then open a cross-site scripting hole in your site.

To protect yourself from opening yourself up to cross-site scripting, make sure you **NEVER** set the data result from the postMessage to any HTML elements:

```js
window.funwallet.sdk.once('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    // OUCH!! YOU HAVE OPENED YOURSELF UP FOR THE TRUSTED DOMAINS TO
    // INJECT BAD SCRIPTS INTO YOUR PAGE, RULE OF THUMB NEVER EVER
    // DO THIS (DON'T WORRY WE WOULD NEVER DO SOMETHING SO MEAN :D)
    document.getElementById('message').innerHTML = message.data;
  }
});
```

Always specify an exact target origin, not "\*", when you use postMessage to send data to other windows. A malicious site can change the location of the window without your knowledge, and therefore it can intercept the data sent using postMessage.

Please note the SDK does check this as well and only connects messages from the wallet but as the SDK is hosted on your side and exported globally on the window we suggest you check the origin as well. The messages the wallet sends you are just information based anyway, we never register a event which says "go and execute this script on the parent site" so this makes it a lot less to worry about but we still suggest you abide by the security concerns addressed. If you fail to check this you can not be sure that the message has came from the wallet.

## All listeners

```ts
{
  restoreAuthenticationCompleted = 'restoreAuthenticationCompleted',
  changeNetwork = 'changeNetwork',
  authenticationCompleted = 'authenticationCompleted',
  followerAuthenticationCompleted = 'followerAuthenticationCompleted',
  walletInactivityLoggedOut = 'walletInactivityLoggedOut',
  walletDeviceDeletedLoggedOut = 'walletDeviceDeletedLoggedOut',
  walletNonceUpdated = 'walletNonceUpdated',
  pendingTransaction = 'pendingTransaction',
  completedTransaction = 'completedTransaction',
  cancelledTransaction = 'cancelledTransaction',
  failedTransaction = 'failedTransaction',
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
  newBlockBloomMatchUser = 'newBlockBloomMatchUser',
  playerProtectionUpdated = 'playerProtectionUpdated',
  walletTracking = 'walletTracking',
  authenticationPopUpClosed = 'authenticationPopUpClosed',
}
```

All the examples of code here will use the `on` but remember on all of these cases you can use `once`.

## restoreAuthenticationCompleted

To allow restoring someone to be logged in after they refresh on initial load the wallet tries to restore a session, once done it will emit `restoreAuthenticationCompleted` telling you if its restored a users session or not. You should disable any sign in/up click button until you get this event, it should happen very fast.

`JavaScript`:

```js
window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
  MessageListeners.restoreAuthenticationCompleted,
  (result: RestoreAuthenticationCompletedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire when the wallet network has been changed (This will fire on initial authentication of the leader as they do change state once authenticated).

`JavaScript`:

```js
window.funwallet.sdk.on('changeNetwork', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, ChangeNetworkResponse } from '@funfair/wallet-sdk';

window.funwallet.sdk.on<ChangeNetworkResponse>(
  MessageListeners.changeNetwork,
  (result: ChangeNetworkResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  // defined above
  network: NetworkDetails,
}
```

---

## authenticationCompleted

This will fire when the leader instance has been authenticated by a user, meaning you can now inject follower instances to show the UI to the authenticated user.

`JavaScript`:

```js
window.funwallet.sdk.on('authenticationCompleted', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  AuthenticationCompletedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<AuthenticationCompletedResponse>(
  MessageListeners.authenticationCompleted,
  (result: AuthenticationCompletedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  authenticationCompleted: boolean,
}
```

---

## followerAuthenticationCompleted

This will fire when the follower instance has authenticated itself successfully and is your notification to re-enable any disabled wallet buttons.

`JavaScript`:

```js
window.funwallet.sdk.on('followerAuthenticationCompleted', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  FollowerAuthenticationCompletedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<FollowerAuthenticationCompletedResponse>(
  MessageListeners.followerAuthenticationCompleted,
  (result: FollowerAuthenticationCompletedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire when the inactivity timeout has expired meaning all authenticated instances have now been logged out.

`JavaScript`:

```js
window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  WalletInactivityLoggedOutResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
  MessageListeners.walletInactivityLoggedOut,
  (result: WalletInactivityLoggedOutResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire when the current device the user is using has been deleted meaning all authenticated instances have now been logged out.

`JavaScript`:

```js
window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  WalletInactivityLoggedOutResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
  MessageListeners.walletDeviceDeletedLoggedOut,
  (result: WalletDeviceDeletedLoggedOutResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

## walletNonceUpdated

This will fire when the wallet nonce is updated.

`JavaScript`:

```js
window.funwallet.sdk.on('walletNonceUpdated', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  WalletNonceUpdatedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<WalletNonceUpdatedResponse>(
  MessageListeners.walletNonceUpdated,
  (result: WalletNonceUpdatedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```
{
  nonce: number,
}
```

---

## pendingTransaction

This will fire when a pending transaction has occurred on the funwallet. We suggest if your app sends the transaction and wants to hook onto certain notifications, e.g. the transaction hash, then use the web3 promise events - https://web3js.readthedocs.io/en/1.0/callbacks-promises-events.html.

`JavaScript`:

```js
window.funwallet.sdk.on('pendingTransaction', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  PendingTransactionResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<PendingTransactionResponse>(
  MessageListeners.pendingTransaction,
  (result: PendingTransactionResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  transactionHash: string,
  transaction: Transaction,
}
```

---

## completedTransaction

This will fire when a completed transaction has occurred on the funwallet (1 confirmation). We do suggest if your app sends the transaction and wants to hook onto certain notifications, e.g the transaction hash, then use the web3 promise events.

`JavaScript`:

```js
window.funwallet.sdk.on('completedTransaction', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  CompletedTransactionResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<CompletedTransactionResponse>(
  MessageListeners.completedTransaction,
  (result: CompletedTransactionResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  transactionReceipt: TransactionReceipt,
  blockTimestamp: number,
}
```

---

## cancelledTransaction

This will fire when a cancelled transaction has occurred on the funwallet.

`JavaScript`:

```js
window.funwallet.sdk.on('cancelledTransaction', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  CancelledTransactionResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<CancelledTransactionResponse>(
  MessageListeners.cancelledTransaction,
  (result: CancelledTransactionResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  transactionHash: string,
  transaction: Transaction,
  blockTimestamp: number,
}
```

---

## failedTransaction

This will fire when a failed transaction has occurred on the funwallet (1 confirmation). We do suggest if your app sends the transaction and wants to hook onto certain notifications, e.g. the transaction hash, then use the web3 promise events.

`JavaScript`:

```js
window.funwallet.sdk.on('failedTransaction', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  FailedTransactionResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<FailedTransactionResponse>(
  MessageListeners.failedTransaction,
  (result: FailedTransactionResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  transactionHash: string,
}
```

---

## erc20TokenBalanceChanged

This will fire when a ERC20 token balance changes for the authenticated user.

`JavaScript`:

```js
window.funwallet.sdk.on('erc20TokenBalanceChanged', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  ERC20TokenBalanceChangedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<ERC20TokenBalanceChangedResponse>(
  MessageListeners.erc20TokenBalanceChanged,
  (result: ERC20TokenBalanceChangedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  symbol: string,
  // the balance is already formatted for you
  // to the correct maximum decimal
  tokenBalance: string,
}
```

---

## erc20TokenFiatPriceChanged

This will fire when a ERC20 token fiat price changes.

`JavaScript`:

```js
window.funwallet.sdk.on('erc20TokenFiatPriceChanged', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  ERC20FiatPriceChangedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<ERC20FiatPriceChangedResponse>(
  MessageListeners.erc20TokenFiatPriceChanged,
  (result: ERC20FiatPriceChangedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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
}
```

---

## ethBalanceChanged

This will fire when the ETH balance changes for the authenticated user.

`JavaScript`:

```js
window.funwallet.sdk.on('ethBalanceChanged', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  ETHBalanceChangedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<ETHBalanceChangedResponse>(
  MessageListeners.ethBalanceChanged,
  (result: ETHBalanceChangedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);
```

`result.data` returns:

```ts
{
  // the balance is already formatted for you
  // to the correct maximum decimal
  ethBalance: string,
}
```

---

## ethFiatPriceChanged

This will fire when an ETH fiat price changes.

`JavaScript`:

```js
window.funwallet.sdk.on('ethFiatPriceChanged', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  ETHFiatPriceChangedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<ETHFiatPriceChangedResponse>(
  MessageListeners.ethFiatPriceChanged,
  (result: ETHFiatPriceChangedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, ChangeCurrencyResponse } from '@funfair/wallet-sdk';

window.funwallet.sdk.on<ChangeCurrencyResponse>(
  MessageListeners.changeCurrency,
  (result: ChangeCurrencyResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire if the account is kyc verified or not. It will fire on the inital login allowing you to pop up the kyc modal automatically when a user logs in.

`JavaScript`:

```js
window.funwallet.sdk.on('isKycVerified', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  IsRegisteredThirdPartySignerResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<IsKycVerifiedResponse>(
  MessageListeners.isKycVerified,
  (result: IsKycVerifiedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
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

This will fire when the authenticated account going through the kyc process cancels the modal and goes back to the casino website.

`JavaScript`:

```js
window.funwallet.sdk.on('kycProcessCancelled', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  IsRegisteredThirdPartySignerResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<KycProcessCancelledResponse>(
  MessageListeners.kycProcessCancelled,
  (result: KycProcessCancelledResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
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

This will fire when the websocket connect successfully, please keep this in memory and when `websocketDisconnected` update the value of the websocket connection status, if it reconnects another one of these will fire.

`JavaScript`:

```js
window.funwallet.sdk.on('websocketConnected', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  WebsocketConnectedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<WebsocketConnectedResponse>(
  MessageListeners.websocketConnected,
  (result: WebsocketConnectedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire when the websocket disconnects or gets closed.

`JavaScript`:

```js
window.funwallet.sdk.on('websocketDisconnected', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  WebsocketDisconnectedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<WebsocketDisconnectedResponse>(
  MessageListeners.websocketDisconnected,
  (result: WebsocketDisconnectedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire when the wallet receives a new block alert through the websockets connection. This will remove any polling needed for the integration app and it can listen out for these to fire.

`JavaScript`:

```js
window.funwallet.sdk.on('newBlock', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, NewBlockResponse } from '@funfair/wallet-sdk';

window.funwallet.sdk.on<NewBlockResponse>(
  MessageListeners.newBlock,
  (result: NewBlockResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

## newBlockBloomMatchUser

This will fire when the wallet receives a new block alert through the websockets its connect to and the bloom filter matches the authentication users ethereum address.

`JavaScript`:

```js
window.funwallet.sdk.on('newBlockBloomMatchUser', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  NewBlockBloomMatchUserResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<NewBlockBloomMatchUserResponse>(
  MessageListeners.newBlockBloomMatchUser,
  (result: NewBlockBloomMatchUserResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

This will fire when the player protection data has been updated aka they just ban themselves or something.

`JavaScript`:

```js
window.funwallet.sdk.on('playerProtectionUpdated', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  PlayerProtectionUpdatedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<PlayerProtectionUpdatedResponse>(
  MessageListeners.playerProtectionUpdated,
  (result: PlayerProtectionUpdatedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

Due to the wallet holding your PK in memory we do not allow google analytics scripts in the wallet itself. This event emits tracking events back to the client so the integrator can pass them to any tracking software they want.

`JavaScript`:

```js
window.funwallet.sdk.on('walletTracking', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, WalletTrackingResponse } from '@funfair/wallet-sdk';

window.funwallet.sdk.on<WalletTrackingResponse>(
  MessageListeners.walletTracking,
  (result: WalletTrackingResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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
  closeAndReturnToCasino = 'closeAndReturnToCasino',
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

This emits an event when the authentication popup is closed. If `isAuthenticated` is the response is true it means the close happened on a successful login, if it's false it means they did not go through the whole login and closed the popup.

`JavaScript`:

```js
window.funwallet.sdk.on('authenticationPopUpClosed', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import {
  MessageListeners,
  AuthenticationPopUpClosedResponse,
} from '@funfair/wallet-sdk';

window.funwallet.sdk.on<AuthenticationPopUpClosedResponse>(
  MessageListeners.authenticationPopUpClosed,
  (result: AuthenticationPopUpClosedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
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

## Definitions:

[Transaction](https://github.com/ethereum/web3.js/blob/1.0/packages/web3-core/types/index.d.ts#L133) - now called `TransactionConfig` (I will change the data responses to reflect this when I get a chance).
<br>
[TransactionReceipt](https://github.com/ethereum/web3.js/blob/1.0/packages/web3-core/types/index.d.ts#L137)

---

## Cancelling event listeners

`JavaScript`:

```js
const listener = window.funwallet.sdk.on('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});

// cancel
listener.cancel();
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, TStronglyTypedResponse } from '@funfair/wallet-sdk';

const listener = window.funwallet.sdk.on<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);

// cancel
listener.cancel();
```

this works the same as `once`:

`JavaScript`:

```js
const listener = funwalletsdk.once('MESSAGE LISTENER NAME', (result) => {
  if (result.origin === 'FUN_WALLET_ORIGIN') {
    console.log(result.data);
  }
});

// cancel
listener.cancel();
```

`TypeScript`:

```ts
import window from '@funfair/wallet-sdk/window';
import { MessageListeners, TStronglyTypedResponse } from '@funfair/wallet-sdk';

const listener = window.funwallet.sdk.once<TStronglyTypedResponse>(
  MessageListeners.TypeYouWantToUse,
  (result: TStronglyTypedResponse) => {
    if (result.origin === 'FUN_WALLET_ORIGIN') {
      console.log(result.data);
    }
  }
);

// cancel
listener.cancel();
```

Now if you try to listen to that message listener again it will work as you have cancelled the other listener. On the `once` calls once the `once` has been fired you will be able to register a new one without an error throwing.
