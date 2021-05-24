# Integrating with Native JS or Another Framework

You may be using another JS framework or you may want to build your own package which is fine. We highly recommend using our packages for React, Vue and Angular, but this guide shows you the raw code which those packages abstract away for you. If you have a request for any popular Javascript frameworks for which you would like integrated code with reusable components packages to install built for it, please do let us know and we'll try our best to get it up here for you.

If you're using plain JS, a full code example is [here](https://github.com/funfair-tech/wallet-vanilla-integration-sample-js), but this guide should help you as well.

## Creating a dApp

Before you start integrating you need to go and create and config your dApp on our self service portal, which you can access through [here](https://developers.funfairwallet.io/home). Once you have created your dApp you will be given an appId which you will use in your integration.

## HTTPS

### Set Up HTTPS on localhost

Firstly, please grab the `ssl` folder with all the files from [here](https://github.com/funfair-tech/wallet-vanilla-integration-sample-js/tree/master/ssl) and drop it into the root of your project.

Using `webpack-dev-server` you can start the project using HTTPS like:

```js
webpack-dev-server --https --key ssl/server.key --cert ssl/server.crt
```

You will need to install the HTTPS cert as shown below:

:::: tabs :options="{ useUrlFragment: false }"

::: tab Windows

<img :src="$withBase('/windows-https-install.PNG')" >

:::

::: tab Mac

<img :src="$withBase('/mac-https-install.gif')" >

:::

::::

## Installing the FunFair Wallet SDK

:::: tabs :options="{ useUrlFragment: false }"

::: tab NPM

```bash
$ npm install @funfair-tech/wallet-sdk
```

:::

::: tab YARN

```bash
$ yarn add @funfair-tech/wallet-sdk
```

:::

::::

## TypeScript Typings

This guide will be shown in `js` but all the same rules apply for `ts` projects. Make sure you use all the typings supplied in the `SDK`. As the `SDK` is exposed on the window object, you should use the window object supplied by the `SDK`. This extends the `Window` object as well, so you can use it for standard window calls. This will give you full compile time errors on your Wallet integration.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## Hooking up the SDK

First, you need to drop the below script into your `<head>` HTML tag in the main index.html. Please replace the `YOUR_APP_ID` with the appId we have supplied you:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>
  </head>
  <body>
    <!-- YOUR CONTENT -->
  </body>
</html>
```

We call the Wallet authentication iframe the `leader`. If you want to read more information about what a `leader` is, please go [here](/guide/how-does-it-work/leader-and-follower-communication.html#what-is-a-leader-instance).

Paste this HTML snippet as closely as possible to the top of the `<body>`. This should live in a place which does not get removed from the DOM. You need to allow the camera in the feature policies in order for our KYC provider to work. This example is using an `onload` event using JavaScript - just change that event accordingly for the framework you're using.

```html
<div id="fun-wallet-leader">
  <div class="fun-wallet-container" style="display: none">
    <iframe
      allow="camera"
      id="funwallet-iframe"
      onload="leaderLoaded()"
      is-fun-wallet="true"
      is-leader="true"
      frameborder="0"
    ></iframe>
  </div>
</div>
<div id="fun-wallet-darken"></div>
```

The Wallet has certain event listeners it needs to register upon loading. To avoid any race conditions, ensure you only `init` the SDK after the leader iframe has loaded.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>

    <!-- YOUR CONTENT -->
  </body>
</html>
```

You can find all of the available event listeners [here](/guide/web-sdk/sdk-event-listeners.html). You can supply options to the [init](/guide/web-sdk/sdk-methods.html#init) SDK method if required.

## Authentication

It's up to the integration to show the user the login and logout buttons, which allows flexibility on designs. Below, we'll show you how you would hook login and logout buttons into your app.

### Login

Method to login with the fun wallet.

```js
await window.funwallet.sdk.auth.login();
```

This will load a login screen for the user to enter their details. The promise will not resolve until successful or unsuccessful actions has happened on the authentication login window. If the user closes the login screen then the `login` promise will reject, if the user successfully authenticates the `login` promise will resolve successfully returning back `AuthenticationCompletedResponeData` which is exposed in our sdk typings:

```ts
export interface AuthenticationCompletedResponeData {
  authenticationCompleted: {
    playerProtection: ExclusionStatusResponse;
    ethereumAddress: string;
    currentCurrency: string;
    currentNetwork: NetworkDetails;
    userAccountId: string;
  };
}
```

**NOTE**
Chrome and other browsers can block popups if triggered without a genuine user click. Make sure whenever you call the authentication method that it's from a click event from the user to avoid any cross browser issues.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <style>
      #logged-out-content,
      #logged-in-content {
        display: none;
      }
    </style>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      isAuthenticated$.pipe(rxjs.operators.skip(1)).subscribe((value) => {
        if (value) {
          document.getElementById('logged-in-content').style.display = 'block';
          document.getElementById('logged-out-content').style.display = 'none';

          document.getElementById(
            'fun-wallet-follower'
          ).src = window.funwallet.getWalletFollowerURL();
        } else {
          document.getElementById('logged-in-content').style.display = 'none';
          document.getElementById('logged-out-content').style.display = 'block';
        }
      });

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }

      async function login() {
        try {
          const result = await window.funwallet.sdk.auth.login();
          console.log('Authentication result', result);

          isAuthenticated$.next(true);
        } catch (error) {
          console.error('User did not sign in');
          return;
        }
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>

    <div id="logged-out-content">
      <div id="logged-out-actions">
        <button onclick="login()">Login</button>
      </div>
    </div>
  </body>
</html>
```

### Logout

Method to logout the authenticated user.

```js
await window.funwallet.sdk.auth.logout();
```

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <style>
      #logged-out-content,
      #logged-in-content {
        display: none;
      }
    </style>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      isAuthenticated$.pipe(rxjs.operators.skip(1)).subscribe((value) => {
        if (value) {
          document.getElementById('logged-in-content').style.display = 'block';
          document.getElementById('logged-out-content').style.display = 'none';

          document.getElementById(
            'fun-wallet-follower'
          ).src = window.funwallet.getWalletFollowerURL();
        } else {
          document.getElementById('logged-in-content').style.display = 'none';
          document.getElementById('logged-out-content').style.display = 'block';
        }
      });

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }

      async function login() {
        try {
          const result = await window.funwallet.sdk.auth.login();
          console.log('Authentication result', result);

          isAuthenticated$.next(true);
        } catch (error) {
          console.error('User did not sign in');
          return;
        }
      }

      async function logout() {
        await window.funwallet.sdk.auth.logout();
        isAuthenticated$.next(false);
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>

    <div id="logged-out-content">
      <div id="logged-out-actions">
        <button onclick="login()">Login</button>
      </div>

      <div id="logged-in-content">
        <div id="logged-in-actions">
          <button onclick="logout()">Logout</button>
        </div>
      </div>
    </div>
  </body>
</html>
```

### Authentication Refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory. We have handled a way to restore authentication on refresh and keep the user logged in. What this means for the developer is they must wait for [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) to complete before they show any UI. This is super fast but needed to avoid showing login buttons then flashing to logout buttons. Lets walk you through how you would do this.

If you want to read more about how this works and keeps your private key safe read [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).

We just add a loading state to our data which is by default `true` - this will then turn to `false` once the restoreAuthenticationCompleted has completed. Then in the template we just add some loading state to hide and show the buttons.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <style>
      #logged-out-content,
      #logged-in-content {
        display: none;
      }
    </style>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      isAuthenticated$.pipe(rxjs.operators.skip(1)).subscribe((value) => {
        if (value) {
          document.getElementById('logged-in-content').style.display = 'block';
          document.getElementById('logged-out-content').style.display = 'none';

          document.getElementById(
            'fun-wallet-follower'
          ).src = window.funwallet.getWalletFollowerURL();
        } else {
          document.getElementById('logged-in-content').style.display = 'none';
          document.getElementById('logged-out-content').style.display = 'block';
        }
        document.getElementById('loading').style.display = 'none';
      });

      restoreAuthenticationTaskCompleted$
        .pipe(rxjs.operators.skip(1))
        .subscribe((value) => {
          if (value && !isAuthenticated$.value) {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('logged-in-content').style.display = 'none';
            document.getElementById('logged-out-content').style.display =
              'block';
          }
        });

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }

      async function login() {
        try {
          const result = await window.funwallet.sdk.auth.login();
          console.log('Authentication result', result);

          isAuthenticated$.next(true);
        } catch (error) {
          console.error('User did not sign in');
          return;
        }
      }

      async function logout() {
        await window.funwallet.sdk.auth.logout();
        isAuthenticated$.next(false);
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>
    <p id="loading">Loading please wait...</p>
    <div id="logged-out-content">
      <div id="logged-out-actions">
        <button onclick="login()">Login</button>
      </div>

      <div id="logged-in-content">
        <div id="logged-in-actions">
          <button onclick="logout()">Logout</button>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Show Wallet UI

We call the Wallet UI iframe a `follower`. If you want to read more information about what a `follower` is, please go [here](/guide/how-does-it-work/leader-and-follower-communication.html#what-is-a-follower).

Paste this HTML snippet where you want the Wallet UI to render on your dApp. This example uses an `onload` event using JavaScript. You just change that event accordingly depending on the framework you're using.

```html
<iframe
  id="fun-wallet-follower"
  onload="followerLoaded()"
  is-fun-wallet="true"
  is-follower="true"
  frameborder="0"
></iframe>
```

If you want to deep link the into a page on the Wallet, please read [here](./routing.html#deep-link-page-routes).

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <style>
      #logged-out-content,
      #logged-in-content {
        display: none;
      }
    </style>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      isAuthenticated$.pipe(rxjs.operators.skip(1)).subscribe((value) => {
        if (value) {
          document.getElementById('logged-in-content').style.display = 'block';
          document.getElementById('logged-out-content').style.display = 'none';

          document.getElementById(
            'fun-wallet-follower'
          ).src = window.funwallet.getWalletFollowerURL();
        } else {
          document.getElementById('logged-in-content').style.display = 'none';
          document.getElementById('logged-out-content').style.display = 'block';
        }
        document.getElementById('loading').style.display = 'none';
      });

      restoreAuthenticationTaskCompleted$
        .pipe(rxjs.operators.skip(1))
        .subscribe((value) => {
          if (value && !isAuthenticated$.value) {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('logged-in-content').style.display = 'none';
            document.getElementById('logged-out-content').style.display =
              'block';
          }
        });

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }

      async function followerLoaded() {
        await window.funwallet.sdk.registerFollowerInstance();
      }

      async function login() {
        try {
          const result = await window.funwallet.sdk.auth.login();
          console.log('Authentication result', result);

          isAuthenticated$.next(true);
        } catch (error) {
          console.error('User did not sign in');
          return;
        }
      }

      async function logout() {
        await window.funwallet.sdk.auth.logout();
        isAuthenticated$.next(false);
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>
    <p id="loading">Loading please wait...</p>
    <div id="logged-out-content">
      <div id="logged-out-actions">
        <button onclick="login()">Login</button>
      </div>

      <div id="logged-in-content">
        <div id="logged-in-actions">
          <button onclick="logout()">Logout</button>
        </div>

        <iframe
          id="fun-wallet-follower"
          onload="followerLoaded()"
          is-fun-wallet="true"
          is-follower="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </body>
</html>
```

## KYC - Feature Request Only!

KYC is a billable feature due to costs we have to pay third party KYC providers. You will have to get in contact with FunFair if you want this feature turned on. To get in contact with us, please join our Discord by clicking [here](https://discord.com/invite/YEUQVvQrzy).

If you do not want to have KYC as a feature on your dApp please ignore this section completely.

To read more about our providers and countries we cover, please read [here](../information/kyc)

It is up to the dApp to decide if they want to use our KYC feature or not and at which stage. The events get fired regardless, but it's up to the dApp to listen to them if they want to use it. The dApp needs to listen to [isKycVerified](./sdk-event-listeners.html#iskycverified) event which will fire when the user has successfully passed or failed KYC. It also fires on initial login with the value of that logged in user's KYC status. You can listen to the [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event, which will fire when the user cancels or closes the KYC modal. The reason we made the dApp handle this is to give them greater flexibility on when you show the KYC stage and what your client does after it was cancelled.

To check if the user has KYC'd or not you can call [isKycVerified](./sdk-methods/kyc.html#kyc-verified-status-for-the-logged-in-user)

```js
const isKycVerified = await window.funwallet.sdk.kyc.isVerified();
```

If that returns false (i.e. they are not KYC'd), you can trigger the KYC modal to open by calling [sdk.kyc.start()](./sdk-methods/kyc.html#start-kyc) SDK method:

```js
await window.funwallet.sdk.kyc.start();
```

Once completed, you will get the status of the pass/fail through the [isKycVerified](./sdk-event-listeners.html#iskycverified) event. Obviously, if they do not complete the KYC you will see them cancel it with the [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <style>
      #logged-out-content,
      #logged-in-content {
        display: none;
      }
    </style>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      isAuthenticated$.pipe(rxjs.operators.skip(1)).subscribe((value) => {
        if (value) {
          document.getElementById('logged-in-content').style.display = 'block';
          document.getElementById('logged-out-content').style.display = 'none';

          document.getElementById(
            'fun-wallet-follower'
          ).src = window.funwallet.getWalletFollowerURL();
        } else {
          document.getElementById('logged-in-content').style.display = 'none';
          document.getElementById('logged-out-content').style.display = 'block';
        }
        document.getElementById('loading').style.display = 'none';
      });

      restoreAuthenticationTaskCompleted$
        .pipe(rxjs.operators.skip(1))
        .subscribe((value) => {
          if (value && !isAuthenticated$.value) {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('logged-in-content').style.display = 'none';
            document.getElementById('logged-out-content').style.display =
              'block';
          }
        });

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        //REGISTER THESE BELOW FOR KYC

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#iskycverified
        window.funwallet.sdk.on('isKycVerified', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
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

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#kycprocesscancelled
        window.funwallet.sdk.on('kycProcessCancelled', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }

      async function followerLoaded() {
        await window.funwallet.sdk.registerFollowerInstance();
      }

      async function login() {
        try {
          const result = await window.funwallet.sdk.auth.login();
          console.log('Authentication result', result);

          isAuthenticated$.next(true);
        } catch (error) {
          console.error('User did not sign in');
          return;
        }
      }

      async function logout() {
        await window.funwallet.sdk.auth.logout();
        isAuthenticated$.next(false);
      }

      async function openKycProcess() {
        await window.funwallet.sdk.kyc.start();
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>
    <p id="loading">Loading please wait...</p>
    <div id="logged-out-content">
      <div id="logged-out-actions">
        <button onclick="login()">Login</button>
      </div>

      <div id="logged-in-content">
        <div id="logged-in-actions">
          <button onclick="openKycProcess()">Start KYC</button>
          <button onclick="logout()">Logout</button>
        </div>

        <iframe
          id="fun-wallet-follower"
          onload="followerLoaded()"
          is-fun-wallet="true"
          is-follower="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </body>
</html>
```

## Speaking to the Blockchain (web3/etherjs)

Now you have the Wallet all hooked up, you can start speaking to the blockchain. Most developers use `web3` and `etherjs` to interact with the blockchain. The SDK exposes our own [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible Ethereum provider.

```js
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

To read more about the Ethereum provider please read [here](./ethereum-provider).

This can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance. This means minimal changes to your blockchain code.

Once the leader has loaded, the SDK will expose the Ethereum provider on the window, which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

### web3

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

// the web3 typings do not handle certain custom providers in their TS typings
// so please cast it as any for it to compile with TS
const web3 = new Web3(window.funwallet.sdk.ethereum as any);
```

:::

::: tab JavaScript

```js
const web3 = new Web3(window.funwallet.sdk.ethereum);
```

:::

::::

### etherjs

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const provider = new ethers.providers.Web3Provider(
  window.funwallet.sdk.ethereum as any
);
```

:::

::: tab JavaScript

```js
const provider = new ethers.providers.Web3Provider(
  window.funwallet.sdk.ethereum
);
```

:::

::::

<strong>All your web3 or ethers calls now will work as normal but proxy through to the Wallet. Use the library to now send transaction and do all things blockchain.</strong>

**NOTE**

We don't support `eth_sign`, `eth_signTransaction` and `eth_sendRawTransaction` due to the security concerns with signing and not sending. You can only sign and send with our Wallet. Also `eth_newFilter`, `eth_newBlockFilter`, `eth_getFilterChanges`, `eth_getFilterLogs`, `eth_uninstallFilter` and `eth_newPendingTransactionFilter` are not supported by our nodes so will not work.

### Demo Using web3 in the Example Code Above

First, you need to make sure web3 is installed:

:::: tabs :options="{ useUrlFragment: false }"

::: tab NPM

```bash
$ npm i web3
```

:::

::: tab YARN

```bash
$ yarn add web3
```

:::

::::

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fun Wallet integration demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <!-- import web3 -->
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.2.11/dist/web3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js"></script>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>

    <style>
      #logged-out-content,
      #logged-in-content {
        display: none;
      }
    </style>

    <script type="text/javascript">
      const isAuthenticated$ = new rxjs.BehaviorSubject(false);
      const restoreAuthenticationTaskCompleted$ = new rxjs.BehaviorSubject(
        false
      );

      isAuthenticated$.pipe(rxjs.operators.skip(1)).subscribe((value) => {
        if (value) {
          document.getElementById('logged-in-content').style.display = 'block';
          document.getElementById('logged-out-content').style.display = 'none';

          document.getElementById(
            'fun-wallet-follower'
          ).src = window.funwallet.getWalletFollowerURL();
        } else {
          document.getElementById('logged-in-content').style.display = 'none';
          document.getElementById('logged-out-content').style.display = 'block';
        }
        document.getElementById('loading').style.display = 'none';
      });

      restoreAuthenticationTaskCompleted$
        .pipe(rxjs.operators.skip(1))
        .subscribe((value) => {
          if (value && !isAuthenticated$.value) {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('logged-in-content').style.display = 'none';
            document.getElementById('logged-out-content').style.display =
              'block';
          }
        });

      function leaderLoaded() {
        // INIT can take options if you want them
        window.funwallet.sdk.init();

        // REGISTER EVENT LISTENERS HERE (IDEALLY IN A NEW METHOD).

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        });

        // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
        // register all the other events your interested in here...
      }

      async function followerLoaded() {
        await window.funwallet.sdk.registerFollowerInstance();
      }

      async function login() {
        try {
          const result = await window.funwallet.sdk.auth.login();
          console.log('Authentication result', result);

          isAuthenticated$.next(true);
        } catch (error) {
          console.error('User did not sign in');
          return;
        }
      }

      async function logout() {
        await window.funwallet.sdk.auth.logout();
        isAuthenticated$.next(false);
      }

      let web3 = undefined;

      function web3Instance() {
        if (web3) {
          return web3;
        }

        return (web3 = new Web3(window.funwallet.sdk.ethereum));
      }

      async function _signAMessage(messageText) {
        const ethereumAddress = await window.funwallet.sdk.eth.address();

        const result = await web3Instance().eth.personal.sign(
          messageText,
          ethereumAddress
        );

        return result;
      }

      async function signAMessage() {
        const signature = await _signAMessage('TESTME');
        console.log('Sign message complete. sig -', signature);
      }

      async function sendSignedTransaction() {
        const signature = await _sendTransaction({
          to: '0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28',
          value: '0x00', // 0x38d7ea4c68000 if you want to add some value 0.002 ETH
        });

        console.log('Send signed transaction complete. sig -', signature);
      }

      async function _sendTransaction(tx) {
        const ethereumAddress = await window.funwallet.sdk.eth.address();
        tx.from = ethereumAddress;

        web3Instance()
          .eth.sendTransaction(tx)
          .once('transactionHash', (transactionHash) => {
            console.log('Transaction hash test app', transactionHash);
          })
          .on('error', async (error) => {
            console.log(error.message, error);
          });
      }
    </script>
  </head>
  <body>
    <div id="fun-wallet-leader">
      <div class="fun-wallet-container" style="display: none">
        <iframe
          allow="camera"
          id="funwallet-iframe"
          onload="leaderLoaded()"
          is-fun-wallet="true"
          is-leader="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div id="fun-wallet-darken"></div>
    <p id="loading">Loading please wait...</p>
    <div id="logged-out-content">
      <div id="logged-out-actions">
        <button onclick="login()">Login</button>
      </div>

      <div id="logged-in-content">
        <div id="logged-in-actions">
          <button onclick="signAMessage()">Sign message</button>
          <button onclick="sendSignedTransaction()">
            Send signed transaction
          </button>
          <button onclick="logout()">Logout</button>
        </div>

        <iframe
          id="fun-wallet-follower"
          onload="followerLoaded()"
          is-fun-wallet="true"
          is-follower="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </body>
</html>
```

When you sign anything an approval modal will appear for the user automatically - read [here](../information/approval-modal) for more info about them.

## Destroying the fun wallet injected logic

Many dApps support many wallets and you may want to destroy all trace of the fun wallet logic once the user is done using it. A destroy method is exposed on the `FunWalletEmbed` class which will remove everything the wallet injected from your dApp.

```ts
import { FunWalletEmbed } from '@funfair-tech/wallet-sdk';

FunWalletEmbed.destroy();
```
