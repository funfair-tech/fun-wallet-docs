# Integrating with native JS or another framework

You may be using another JS framework or you may want to build your own package which is fine. We highly recommend using our packages for react, vue and angular but this guide shows you the raw code which those packages abstract away for you. If you have a request for any popular javascript frameworks which you would like a integrated code with reusable components packages to install built for it, please do let us know and we try our best to get it up here for you.

If your using plain JS full code example is [here](https://github.com/funfair-tech/wallet-vanilla-integration-sample-js) but this guide should help you as well.

## HTTPS

TODO

## Installing the FunFair Wallet SDK

### NPM

```bash
$ npm install @funfair-tech/wallet-sdk
```

### YARN

```bash
$ yarn add @funfair-tech/wallet-sdk
```

## TypeScript Typings

This guide will be shown in `js` but all the same rules apply for `ts` projects. Make sure you use all the typings supplied in the `SDK`. As the `SDK` is exposed on the window object, you should use the window object supplied by the `SDK`. This extends the `Window` object as well, so you can use it for standard window calls. This will give you full compile time errors on your wallet integration.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## Hooking up the SDK

Firstly you need to drop the below script into your `<head>` HTML tag in the main index.html:

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
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
      type="text/JavaScript"
    ></script>
  </head>
  <body>
    <!-- YOUR CONTENT -->
  </body>
</html>
```

We call the Wallet authentication iframe the `leader`. If you want to read more information about what a `leader` is, please go [here](/guide/how-does-it-work/leader-and-follower-communication.html#what-is-a-leader-instance).

Paste this HTML snippet as close as possible to the top of the `<body>`. This should live in a place which does not get removed from the DOM. You need to allow the camera in the feature policies in order for our KYC provider to work. This example is using an `onload` event using JavaScript, just change that event accordingly for the framework you're using.

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

The Wallet has certain event listeners it needs to register on load of the Wallet. To avoid any race conditions, ensure you only `init` the SDK after the leader iframe has loaded.

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
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
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

        window.funwallet.sdk.on('authenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        });

        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        });

        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        });

        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        });

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

        window.funwallet.sdk.on('kycProcessCancelled', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
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

Go [here](./authentication.md) for guides in login, logout and tolerate refresh logic.

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

please note you must only show the follower once [restoreAuthenticationTaskCompleted](./sdk-event-listeners.html#restoreauthenticationcompleted) has fired and [authenticationcompleted](./sdk-event-listeners.html#authenticationcompleted) has fired, `authenticationcompleted` means they are logged in.

If you want to deep link the into a page on the wallet please read [here](./routing.html#deep-link-page-routes).

Full example:

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
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
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

        window.funwallet.sdk.on('authenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        });

        window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        });

        window.funwallet.sdk.on('walletInactivityLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        });

        window.funwallet.sdk.on('walletDeviceDeletedLoggedOut', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        });

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

        window.funwallet.sdk.on('kycProcessCancelled', (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
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

      function login() {
        window.funwallet.sdk.openWalletAuthenticationPopUp();
      }

      function logout() {
        window.funwallet.sdk.logout();
        isAuthenticated$.next(false);
      }

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

    <section data-component="app">
      <img src="./logo.svg" id="logo" alt="logo" />
      <p id="loading">Loading please wait...</p>
      <div id="content">
        <div id="logged-out-content">
          <div id="logged-out-actions">
            <button onclick="login()">Login</button>
          </div>
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
          ></iframe>
        </div>
      </div>
    </section>
  </body>
</html>
```
