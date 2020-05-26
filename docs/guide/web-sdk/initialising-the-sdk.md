# Initialising the sdk

We call the wallet authentication iframe a `leader` If you want to read more information about what a `leader` is please go here.

Please paste this html snippet as close as possible to the top of the `<body>`. This should live in a place which does not get removed from the DOM. You need to allow the camera in the feature policies for our KYC provider to work. This example is using an angular `load` event but you can register a iframe `onload` event using JavaScript or how any other framework handle it. So just change that event accordingly to the framework you're using.

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

The wallet has certain event listeners it needs to register on load of the wallet. To avoid any race conditions you only want to `init` the sdk once the leader iframe has loaded.

```ts
public async yourLeaderInstanceLoadFunction(): Promise<void> {
   await window.funwallet.sdk.init({ options });

   // REGISTER ALL YOUR EVENT LISTENERS HERE PROBABLY BEST TO BE IN A NEW METHOD SOMEWHERE.

   window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      async (result: AuthenticationCompletedResponse) => {
        if (result.origin  + '/' === window.funwallet.url) {
          // ....
        } else {
          throw this.someoneEvilTryingToSendMessage();
        }
      },
    );

  // REGISTER THE REST OF THE EVENT LISTENERS
}
```

You can find all the event listeners [here](/guide/web-sdk/sdk-event-listeners.html)

You can supply options to the `init` SDK method if required. If you're using an angular app please supply the `ngZone` option which is passing angulars `NgZone` class to the SDK, to make sure we run the event listeners inside _your_ angular zone, allowing your application state to be updated and changes to be triggered automatically.

Options:

```js
{
  // the `NgZone` class angular allows you to inject
  ngZone?: this._zone
}
```
