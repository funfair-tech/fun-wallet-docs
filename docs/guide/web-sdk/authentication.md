# Authentication

It's up to the integration to show the user the login and logout buttons which gives flexibility on designs.

## Login

Register a click event on the element you want to trigger the wallet login modal.

Example:

### TypeScript

```ts
 import window from '@funfair/wallet-sdk/window';

 public openAuthenticationPopUpWindow(): void {
    window.funwallet.sdk.openWalletAuthenticationPopUp();
  }
```

### JavaScript

```ts
function openAuthenticationPopUpWindow() {
  window.funwallet.sdk.openWalletAuthenticationPopUp();
}
```

This will load a window popup for the user to enter their login details, once logged in it will fire [authenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted) which you would of hand event listeners registered to it to listen out for success. If they close the wallet authentication popup it will fire [authenticationPopUpClosed](/guide/web-sdk/sdk-event-listeners.html#authenticationpopupclosed) which you can listen out for if you want to know if that happens.

## Logout

Register a click event on the element you want to trigger the logout of the wallet.

### TypeScript

```ts
 import window from '@funfair/wallet-sdk/window';

  public async logout(): Promise<void> {
    await window.funwallet.sdk.logout();
  }
```

### JavaScript

```ts
function async openAuthenticationPopUpWindow() {
  await window.funwallet.sdk.logout();
}
```

This will log all the instances out of the wallet. Also if the wallet inactivity time is reached all instances of the wallet will be logged out, which fires a [walletInactivityLoggedOut](/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout) event that you can hook onto. This can also fire if a user deletes a device from their approved device screen [walletDeviceDeletedLoggedOut](/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout).

## Tolerate refresh

As the server never sees the private key and all the decryption of it happens on the client side once you refresh your tab your private key is now not in memory anymore, as we got back to it using data the user entered which again is not on the server like password. We have handled a way to restore authentication on a refresh. You will need to make sure you handle the event listener [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) which is documented in the sdk listeners documentation.
