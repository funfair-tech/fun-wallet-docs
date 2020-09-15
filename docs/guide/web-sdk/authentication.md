# Authentication

It's up to the integration to show the user the login and logout buttons, which allows flexibility on designs.

## Login

Register a click event on the element you want to trigger the Wallet login modal.

Example:

### TypeScript

```ts
 import window from '@funfair-tech/wallet-sdk/window';

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

This will load a window popup for the user to enter their login details. Once logged in it will fire [authenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted), which you will need to have registered to so you can listen out for success. If the user closes the authentication popup it will fire [authenticationPopUpClosed](/guide/web-sdk/sdk-event-listeners.html#authenticationpopupclosed), which you can listen out for if you want to know when that happens.

## Logout

Register a click event on the element you want to trigger the logout of the Wallet.

### TypeScript

```ts
 import window from '@funfair-tech/wallet-sdk/window';

  public async logout(): Promise<void> {
    await window.funwallet.sdk.logout();
  }
```

### JavaScript

```ts
function async logout() {
  await window.funwallet.sdk.logout();
}
```

This will log all the instances out of the Wallet. Also, if the inactivity time is reached, all instances of the Wallet will be logged out, which fires a [walletInactivityLoggedOut](/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout) event that you should hook onto. This can also fire if a user deletes a device from their approved device screen [walletDeviceDeletedLoggedOut](/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout). If any of these events fire, the dApp needs to update its state back to a logged-out state.

## Tolerate Refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory, as we got back to it using data the user entered which again is not on the server like password. We have handled a way to restore authentication on a refresh. See this as a loading state on refresh. You will need to make sure you handle the event listener [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted), which is documented in the [SDK listeners](./sdk-event-listeners.md) documentation. This is all shown in the test app and code samples within react, angular and vue.

Read more about how it works [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).
