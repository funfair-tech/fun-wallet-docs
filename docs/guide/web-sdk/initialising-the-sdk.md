# Initialising the SDK

We call the Wallet authentication iframe the `leader`. If you want to read more information about what a `leader` is, please go [here](http://localhost:8080/fun-wallet-docs/guide/how-does-it-work/leader-and-follower-communication.html#what-is-a-leader-instance).

Please paste this HTML snippet as close as possible to the top of the `<body>`. This should live in a place which does not get removed from the DOM. You need to allow the camera in the feature policies in order for our KYC provider to work. This example is using an Angular `load` event, but you can register an iframe `onload` event using JavaScript or how any other framework handle it - just change that event accordingly for the framework you're using.

```html
<div id="fun-wallet-leader">
  <div class="fun-wallet-container">
    <iframe
      allow="camera"
      id="funwallet-iframe"
      (load)="yourLeaderInstanceLoadFunction()"
      is-fun-wallet
      is-leader
    ></iframe>
  </div>
</div>
<div id="fun-wallet-darken"></div>
```

The Wallet has certain event listeners it needs to register on load of the Wallet. To avoid any race conditions, ensure you only `init` the SDK after the leader iframe has loaded.

```ts
public yourLeaderInstanceLoadFunction(): void {
   window.funwallet.sdk.init({ options });

   // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

   window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      async (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          // ....
        } else {
          throw this.someoneEvilTryingToSendMessage();
        }
      },
    );

  ...
}
```

You can find all of the available event listeners [here](/guide/web-sdk/sdk-event-listeners.html).

You can supply options to the [init](http://localhost:8080/fun-wallet-docs/guide/web-sdk/sdk-methods.html#init) SDK method if required. If you're using an Angular app please supply the `ngZone` option, which is passing Angular's `NgZone` class to the SDK, to make sure we run the event listeners inside _your_ angular zone, thereby allowing your application state to be updated and changes to be triggered automatically.

Options:

```js
{
  // the `NgZone` class angular allows you to inject
  ngZone?: this._zone
}
```
