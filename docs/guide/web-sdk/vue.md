# Integrating with a vue app

Please make sure you have installed the fun wallet sdk before continuing [here](./installing-sdk.html)

## NPM package

We have created a vue npm package component library this package holds components you can use to hook the wallet into a vue app easier. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-vue-integration-sample-js)

To install run:

### NPM

```bash
$ npm install @funfair-tech/wallet-vue
```

### YARN

```bash
$ yarn add @funfair-tech/wallet-vue
```

## Hooking up the SDK

Firstly you need to drop the below script into your `<head>` HTML tag in your main index.html (public > index.html):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= htmlWebpackPlugin.options.title %></title>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
      type="text/JavaScript"
    ></script>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

Import the wallet leader vue shared component into your main App.vue:

```js
import { WalletLeader } from '@funfair-tech/wallet-vue';
```

Usage:

```js
<WalletLeader registerEventListeners="YOUR_REGISTER_EVENT_LISTENERS_METHOD" />
```

### Parameters

#### registerEventListeners

Type - Function

This will fire when the wallet leader has loaded and this will be a function you register all your event listeners you want to attach to the wallet, list of them [here](https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#registering-an-event-listener)

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
  </div>
</template>

<script>
import { WalletLeader } from '@funfair-tech/wallet-vue';
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
    WalletLeader,
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
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

      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
  },
};
</script>
```

## Authentication

It's up to the integration to show the user the login and logout buttons, which allows flexibility on designs. This below will show you how you would hook login and logout buttons into your app.

### Login

Method to pop up the authentication modal.

```js
window.funwallet.sdk.openWalletAuthenticationPopUp();
```

This will load a window popup for the user to enter their login details. Once logged in it will fire [authenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted), which you will need to have registered to so you can listen out for success. If the user closes the authentication popup it will fire [authenticationPopUpClosed](/guide/web-sdk/sdk-event-listeners.html#authenticationpopupclosed), which you can listen out for if you want to know when that happens.

**NOTE**
Chrome and other browsers can block popups if triggered without a genuine user click. Make sure whenever you pop this modal up its from a click event from the user to avoid any cross browser issues.

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
    <div class="App">
      <div class="App-container">
        <!-- should only show this if the user is NOT logged in -->
        <div v-if="!isLoggedIn" className="logged-out">
          <button @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WalletLeader } from '@funfair-tech/wallet-vue';
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
    WalletLeader,
  },
  data: () => {
    return { isLoggedIn: false };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
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

      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: function () {
      window.funwallet.sdk.openWalletAuthenticationPopUp();
    },
  },
  created: function () {
    const _this = this;
    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });
  },
};
</script>
```

### Logout

Method to logout the authenticated user.

```js
await window.funwallet.sdk.logout();
```

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
    <div class="App">
      <div class="App-container">
        <!-- should only show this if the user is NOT logged in -->
        <div v-if="!isLoggedIn" className="logged-out">
          <button @click="login">Login</button>
        </div>
        <!-- should only show this if the user is logged in -->
        <div v-if="isLoggedIn" className="logged-in">
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WalletLeader } from '@funfair-tech/wallet-vue';
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
    WalletLeader,
  },
  data: () => {
    return { isLoggedIn: false };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
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

      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: function () {
      window.funwallet.sdk.openWalletAuthenticationPopUp();
    },
    logout: async function () {
      await window.funwallet.sdk.logout();
    },
  },
  created: function () {
    const _this = this;
    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });
  },
};
</script>
```

### Authentication refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory. We have handled a way to restore authentication on refresh and keep the user logged in. What this means for the developer is they must wait for [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) to complete before they show any UI, this is super fast but needed to avoid showing login buttons then flashing to logout buttons. Lets walk you through how you would do this.

If you want to read more about how this works and keeps your PK safe read [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).

We just add a loading state to our data which is default true, this will then turn to false once the restoreAuthenticationCompleted has completed. We then in the template just add some loading state to hide and show the buttons.

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
    <div class="App">
      <div class="App-container">
        <!-- in this example we just have a simple message you can config your loading screen to whatever you want -->
        <p v-if="loading">Loading please wait</p>
        <!-- should only show this if the user is NOT logged in -->
        <div v-if="!loading && !isLoggedIn" className="logged-out">
          <button @click="login">Login</button>
        </div>
        <!-- should only show this if the user is logged in -->
        <div v-if="!loading && isLoggedIn" className="logged-in">
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WalletLeader } from '@funfair-tech/wallet-vue';
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
    WalletLeader,
  },
  data: () => {
    return { isLoggedIn: false, loading: true };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
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

      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: function () {
      window.funwallet.sdk.openWalletAuthenticationPopUp();
    },
    logout: async function () {
      await window.funwallet.sdk.logout();
    },
  },
  created: function () {
    const _this = this;
    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        _this.$data.loading = false;
      }
    });
  },
};
</script>
```

## Show wallet UI

Import the wallet follower vue shared component into the vue you want it to go in, in this example we just put it all in the App.vue but same applies for putting it in different .vue files:

```js
import { WalletFollower } from '@funfair-tech/wallet-vue';
```

Usage:

```js
<WalletFollower />
```

### Parameters

#### page - optional

Type - string

If you want to deep link the into a page on the wallet you can pass any of the routes to this parameter which are [here](./routing.html#deep-link-page-routes). If not passed in it will default to the main route page.

Please note you must only show the follower once [restoreAuthenticationTaskCompleted](./sdk-event-listeners.html#restoreauthenticationcompleted) has fired and [authenticationcompleted](./sdk-event-listeners.html#authenticationcompleted) has fired, `authenticationcompleted` means they are logged in.

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
    <div class="App">
      <div class="App-container">
        <p v-if="loading">Loading please wait</p>
        <!-- These action buttons are just here to show you how to hook in authentication
             but its up to you  -->
        <div class="action-buttons">
          <div v-if="!loading && !isLoggedIn" className="logged-out">
            <button @click="login">Login</button>
          </div>
          <div v-if="!loading && isLoggedIn" className="logged-in">
            <button @click="logout">Logout</button>
          </div>
        </div>
        <div class="wallet-follower" v-if="!loading && isLoggedIn">
          <WalletFollower />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WalletLeader, WalletFollower } from '@funfair-tech/wallet-vue';
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
    WalletLeader,
    WalletFollower,
  },
  data: () => {
    return { isLoggedIn: false, loading: true };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
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

      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: function () {
      window.funwallet.sdk.openWalletAuthenticationPopUp();
    },
    logout: async function () {
      await window.funwallet.sdk.logout();
    },
  },
  created: function () {
    const _this = this;
    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        _this.$data.loading = false;
      }
    });
  },
};
</script>

<style>
body {
  margin: 0px;
}
.App {
  text-align: center;
  padding-bottom: 75px;
  background-color: #242424;
}

.App-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.wallet-follower {
  margin-top: 10px;
  width: 100%;
}

.action-buttons button {
  margin-left: 10px;
}

.action-buttons {
  margin-bottom: 20px;
}

@media only screen and (max-width: 510px) {
  .action-buttons .logged-in {
    display: grid;
  }

  .action-buttons button {
    margin-bottom: 10px;
  }
}

button {
  background: linear-gradient(to bottom, #f7a2c6 0%, #ea166f 2px, #bc1159 100%);
  color: #fff;
  box-sizing: border-box;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: visible;
  transform: translate3d(0, 0, 0);
  transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow
      280ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
```

## Speaking to the blockchain (web3/etherjs)

Now you have the wallet all hooked up you can start speaking to the blockchain. Most developers use `web3` and `etherjs` to interact with the blockchain, the SDK exposed our own [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible ethereum provider.

This lives:

```js
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

To read more about the ethereum provider please read [here](./ethereum-provider).

This can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance. This means minimal changes to your blockchain code.

Once you the leader has loaded, the SDK will expose the Ethereum provider on the window, which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

Example:

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

### Demo using web3 in the example code above

First you need to make sure web3 is installed:

#### NPM

```bash
$ npm i web3
```

#### YARN

```bash
$ yarn add web3
```

We will create a new `js` file in the `src` which will hold our web3 logic. This example we are going to call it `ethereum.service.js`.
Please note you can structure this code as you want but for us a new `.js` file makes the code nice and clean.

`ethereum.service.js`

```js
import Web3 from 'web3';

let web3 = undefined;

function web3Instance() {
  if (web3) {
    return web3;
  }

  // we inject our fun wallet provider in the web3 constructor
  return (web3 = new Web3(window.funwallet.sdk.ethereum));
}

export async function signAMessage(messageText) {
  const ethereumAddress = await window.funwallet.sdk.ethereumAddress();

  const result = await web3Instance().eth.personal.sign(
    messageText,
    ethereumAddress
  );

  return result;
}

export async function sendTransaction(tx) {
  const ethereumAddress = await window.funwallet.sdk.ethereumAddress();
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
```

We have wrote common `web3` methods to send a transaction and sign a message. All the other `web3` methods work the same and you can just use the standard interface to call them.

Below shows how you would call them in the code samples we have been doing.

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
    <div class="App">
      <div class="App-container">
        <p v-if="loading">Loading please wait</p>
        <!-- These action buttons are just here to show you how to hook in authentication
             but its up to you  -->
        <div class="action-buttons">
          <div v-if="!loading && !isLoggedIn" className="logged-out">
            <button @click="login">Login</button>
          </div>
          <div v-if="!loading && isLoggedIn" className="logged-in">
            <button @click="signAMessage">Sign message</button>
            <button @click="sendSignedTransaction">
              Send signed transaction
            </button>
            <button @click="logout">Logout</button>
          </div>
        </div>
        <div class="wallet-follower" v-if="!loading && isLoggedIn">
          <WalletFollower />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WalletLeader, WalletFollower } from '@funfair-tech/wallet-vue';
import { MessageListeners } from '@funfair-tech/wallet-sdk';
import { sendTransaction, signAMessage } from './ethereum.service';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
    WalletLeader,
    WalletFollower,
  },
  data: () => {
    return { isLoggedIn: false, loading: true };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            isAuthenticated$.next(false);
          }
        }
      );

      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
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

      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io') {
            if (result.data.cancelled) {
              window.funwallet.sdk.hideFunWalletModal();
              // you may want to move routes etc here hence why you hook onto this action
              // and the sdk does not
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: function () {
      window.funwallet.sdk.openWalletAuthenticationPopUp();
    },
    logout: async function () {
      await window.funwallet.sdk.logout();
    },
    async signAMessage() {
      // hard coded data for this example
      const signature = await signAMessage('TESTME');
      console.log('Sign message complete. sig -', signature);
    },
    async sendSignedTransaction() {
      // hard coded data for this example
      const signature = await sendTransaction({
        to: '0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28',
        value: '0x00', // 0x38d7ea4c68000 if you want to add some value 0.002 ETH
      });
      console.log('Send signed transaction complete. sig -', signature);
    },
  },
  created: function () {
    const _this = this;
    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        _this.$data.loading = false;
      }
    });
  },
};
</script>

<style>
body {
  margin: 0px;
}
.App {
  text-align: center;
  padding-bottom: 75px;
  background-color: #242424;
}

.App-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.wallet-follower {
  margin-top: 10px;
  width: 100%;
}

.action-buttons button {
  margin-left: 10px;
}

.action-buttons {
  margin-bottom: 20px;
}

@media only screen and (max-width: 510px) {
  .action-buttons .logged-in {
    display: grid;
  }

  .action-buttons button {
    margin-bottom: 10px;
  }
}

button {
  background: linear-gradient(to bottom, #f7a2c6 0%, #ea166f 2px, #bc1159 100%);
  color: #fff;
  box-sizing: border-box;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: visible;
  transform: translate3d(0, 0, 0);
  transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow
      280ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
```

When you sign anything an approval modal will appear for the user automatically, read [here](../information/approval-modal) for more info about them.
