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

This will be a function with all your event listeners you want to attach to the wallet - https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#registering-an-event-listener

Example:

```vue
<template>
  <div id="app">
    <WalletLeader :registerEventListeners="this.registerEventListeners" />
  </div>
</template>

<script>
import { WalletLeader } from '@funfair-tech/wallet-vue';
import { registerEventListeners } from './services/wallet-service';

export default {
  name: 'App',
  components: {
    WalletLeader,
  },
  methods: {
    registerEventListeners: function () {
      registerEventListeners();
    },
  },
};
</script>
```

`registerEventListeners` method example (please note yours will be different to what you require and want to listen to):

```js
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// we suggest people using redux to store state in this example we just did a basic store using subjects
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';

export function registerEventListeners() {
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

  window.funwallet.sdk.on(MessageListeners.kycProcessCancelled, (result) => {
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
```

## Authentication

Go [here](./authentication.md) for guides in login, logout and tolerate refresh logic.

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
        <img class="App-logo" src="./assets/logo.svg" />
        <p v-if="loading">Loading please wait</p>
        <div class="action-buttons">
          <div v-if="!loading && !isLoggedIn">
            <LoggedOutActions />
          </div>
          <div v-if="!loading && isLoggedIn">
            <LoggedInActions />
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
import { login, logout } from './services/wallet-service';
import { registerEventListeners } from './services/wallet-service';
import LoggedInActions from './components/Logged-In-Actions.vue';
import LoggedOutActions from './components/Logged-Out-Actions.vue';
import {
  isAuthenticated$,
  restoreAuthenticationTaskCompleted$,
} from './services/store';

export default {
  name: 'App',
  components: {
    WalletLeader,
    LoggedInActions,
    LoggedOutActions,
    WalletFollower,
  },
  data: () => {
    return { isLoggedIn: false, loading: true };
  },
  methods: {
    registerEventListeners: function () {
      registerEventListeners();
    },
    login: function () {
      login();
    },
    logout: function () {
      logout();
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

.App-logo {
  pointer-events: none;
  width: 200px;
  height: 100px;
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
