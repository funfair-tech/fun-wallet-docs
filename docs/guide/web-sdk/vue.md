# Integrating with a Vue App

## Creating a dApp

Before you start integrating you need to go and create and config your dApp on our self service portal, which you can access through [here](https://developers.funfairwallet.io/home). Once you have created your dApp you will be given an appId which you will use in your integration.

## GitHub Repo

A full Vue code integration example can be seen [here](https://github.com/funfair-tech/wallet-vue-integration-sample-js)

## HTTPS

Your domain must ALWAYS run `https` when pointing to the Wallet else it will be rejected. This is also required on local development.

### Setup https on localhost

First, please grab the `ssl` folder with all the files from [here](https://github.com/funfair-tech/wallet-vue-integration-sample-js/tree/master/ssl) and drop it into the root of your project.

You then need to config the `vue.config.js` to map the `key` and `cert`. If you do not have a `vue.config.js` please create one in the main root.

Paste the `https` object under the `devServer` object:

```js
devServer: {
  https: {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
  },
}
```

Full example:

```js
const fs = require('fs');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./ssl/server.key'),
      cert: fs.readFileSync('./ssl/server.crt'),
    },
  },
};
```

When you serve this now using `vue-cli-service serve` and it will serve it on HTTPS. You will need to install the HTTPS cert as shown below:

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

This guide will be shown in `js` but all the same rules apply for vue `ts` projects. Make sure you use all the typings supplied in the `SDK`. As the `SDK` is exposed on the window object, you should use the window object supplied by the `SDK`. This extends the `Window` object as well, so you can use it for standard window calls. This will give you full compile time errors on your Wallet integration.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## Hooking up the SDK

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/App.vue

```vue
<template>
  <div id="app"></div>
</template>

<script>
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
  },
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });
  },
};
</script>
```

:::

::::

## Authentication

It's up to the integration to show the user the login and logout buttons, which allows flexibility on designs.

:::: tabs :options="{ useUrlFragment: false }"

::: tab Login

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

src/App.vue

```vue
<template>
  <div id="app">
    <div class="App">
      <div class="App-container">
        <div className="action-buttons">
          <!-- should only show this if the user is NOT logged in -->
          <div v-if="!isLoggedIn" className="logged-out">
            <button @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  data: () => {
    return { isLoggedIn: false };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: async function () {
      try {
        const result = await window.funwallet.sdk.auth.login();
        console.log('Authentication result', result);

        isAuthenticated$.next(true);
      } catch (error) {
        console.error('User did not sign in');
        return;
      }
    },
  },
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });

    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });
  },
};
</script>
```

:::

::: tab Logout

Method to logout the authenticated user.

```js
await window.funwallet.sdk.auth.logout();
```

src/App.vue

```vue
<template>
  <div id="app">
    <div class="App">
      <div class="App-container">
        <div className="action-buttons">
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
  </div>
</template>

<script>
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  data: () => {
    return { isLoggedIn: false };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: async function () {
      try {
        const result = await window.funwallet.sdk.auth.login();
        console.log('Authentication result', result);

        isAuthenticated$.next(true);
      } catch (error) {
        console.error('User did not sign in');
        return;
      }
    },
    logout: async function () {
      await window.funwallet.sdk.auth.logout();
      isAuthenticated$.next(false);
    },
  },
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });

    isAuthenticated$.subscribe((value) => {
      _this.$data.isLoggedIn = value;
    });
  },
};
</script>
```

:::

::: tab Authentication-Refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory. We have handled a way to restore authentication on refresh and keep the user logged in. What this means for the developer is they must wait for [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) to complete before they show any UI, this is super fast but needed to avoid showing login buttons then flashing to logout buttons. Lets walk you through how you would do this.

If you want to read more about how this works and keeps your private key safe read [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).

We just add a loading state to our data which defaults to `true`. This will then turn to `false` once the restoreAuthenticationCompleted has completed. We then in the template just add some loading state to hide and show the buttons.

src/App.vue

```vue
<template>
  <div id="app">
    <div class="App">
      <div class="App-container">
        <!-- in this example we just have a simple message you can config your loading screen to whatever you want -->
        <p v-if="loading">Loading please wait</p>
        <div className="action-buttons">
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
  </div>
</template>

<script>
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  data: () => {
    return { isLoggedIn: false, loading: true };
  },
  methods: {
    registerEventListeners: function () {
      // like in our github example https://github.com/funfair-tech/wallet-vue-integration-sample-js
      // it would be nicer code if you extracted this into its own file and called in within here.
      // for ease of understanding it is all in this file.

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: async function () {
      try {
        const result = await window.funwallet.sdk.auth.login();
        console.log('Authentication result', result);

        isAuthenticated$.next(true);
      } catch (error) {
        console.error('User did not sign in');
        return;
      }
    },
    logout: async function () {
      await window.funwallet.sdk.auth.logout();
      isAuthenticated$.next(false);
    },
  },
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });

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

:::

::::

## Show Wallet UI

### Vue Package

You only need to install this package if you want to show the UI.

We have created a Vue package component library. This package holds components you can use to hook the Wallet into a Vue app more easily. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-vue-integration-sample-js).

:::: tabs :options="{ useUrlFragment: false }"

::: tab NPM

```bash
$ npm install @funfair-tech/wallet-vue
```

:::

::: tab YARN

```bash
$ yarn add @funfair-tech/wallet-vue
```

:::

::::

To show any Wallet UI you have to import the `WalletFollower` from the SDK.

```js
import { WalletFollower } from '@funfair-tech/wallet-vue';
```

Usage:

```js
<WalletFollower />
```

If you want to deep link the into a page on the Wallet, we explain how to do that [here](./routing.html#deep-link-page-routes). By default, the main `/funds` page will load.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/App.vue

```vue
<template>
  <div id="app">
    <div class="App">
      <div class="App-container">
        <p v-if="loading">Loading please wait</p>
        <!-- These action buttons are just here to show you how to hook in authentication
             but its up to you where/how you display them -->
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
import { WalletFollower } from '@funfair-tech/wallet-vue';
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
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

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);

            // if the user has been restored authentication then your all good
            // to go again
            if (result.data.isAuthenticated) {
              // result.data.result holds `AuthenticationCompletedResponeData` in for you.
              isAuthenticated$.next(true);
            }
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: async function () {
      try {
        const result = await window.funwallet.sdk.auth.login();
        console.log('Authentication result', result);

        isAuthenticated$.next(true);
      } catch (error) {
        console.error('User did not sign in');
        return;
      }
    },
    logout: async function () {
      await window.funwallet.sdk.auth.logout();
      isAuthenticated$.next(false);
    },
  },
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });

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

:::

::::

## KYC - Feature Request Only!

KYC is a billable feature due to costs we have to pay third party KYC providers. You will have to get in contact with FunFair if you want this feature turned on. To get in contact with us please join our Discord by clicking [here](https://discord.com/invite/YEUQVvQrzy).

If you do not want to have KYC as a feature on your dApp please ignore this section completely.

To read more about our providers and countries we cover please read [here](../information/kyc)

It is up to the dApp to decide if they want to use our KYC feature or not and at what stage. The events get fired regardless but its up to the dApp to listen to them if they want to use it. The dApp needs to listen to [isKycVerified](./sdk-event-listeners.html#iskycverified) event which will fire when the user has successfully passed or failed KYC'ed, it also fires on initial login with the status of that logged in users KYC status. You can listen to [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event which will fire when the user cancels or closes the KYC modal. The reason we made the dApp handle this is to give them greater flexibility on when you show the KYC stage and what your client does after it was cancelled.

To check if the user has KYC'ed or not you can call [isKycVerified](./sdk-methods/kyc.html#kyc-verified-status-for-the-logged-in-user)

```js
const isKycVerified = await window.funwallet.sdk.kyc.isVerified();
```

If that returns false (i.e. they are not KYC'd), you can trigger the KYC modal to open by calling [sdk.kyc.start()](./sdk-methods/kyc.html#start-kyc) SDK method:

```js
await window.funwallet.sdk.kyc.start();
```

Once completed, you will get the status of the pass/fail through [isKycVerified](./sdk-event-listeners.html#iskycverified) event. Obviously if they do not complete the KYC you will see them cancel it with the [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/App.vue

```vue
<template>
  <div id="app">
    <div class="App">
      <div class="App-container">
        <p v-if="loading">Loading please wait</p>
        <!-- These action buttons are just here to show you how to hook in authentication
             but its up to you where/how you display them -->
        <div class="action-buttons">
          <div v-if="!loading && !isLoggedIn" className="logged-out">
            <button @click="login">Login</button>
          </div>
          <div v-if="!loading && isLoggedIn" className="logged-in">
            <button @click="openKycProcess">Start KYC</button>
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
import { WalletFollower } from '@funfair-tech/wallet-vue';
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
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

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(true);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // REGISTER THESE EVENTS BELOW FOR KYC

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#iskycverified
      window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          if (!result.data.isVerified) {
            // MUST CALL
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
      window.funwallet.sdk.on(
        MessageListeners.kycProcessCancelled,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            if (result.data.cancelled) {
              // MUST CALL
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
    login: async function () {
      try {
        const result = await window.funwallet.sdk.auth.login();
        console.log('Authentication result', result);

        isAuthenticated$.next(true);
      } catch (error) {
        console.error('User did not sign in');
        return;
      }
    },
    logout: async function () {
      await window.funwallet.sdk.auth.logout();
      isAuthenticated$.next(false);
    },
    openKycProcess: async function () {
      await window.funwallet.sdk.kyc.start();
    },
  },
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });

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

:::

::::

## Speaking to the Blockchain (web3/etherjs)

Now you have the Wallet all hooked up you can start speaking to the blockchain. Most developers use `web3` and `etherjs` to interact with the blockchain. The SDK exposes our own [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible Ethereum provider.

```js
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

To read more about the Ethereum provider, please read [here](./ethereum-provider).

This can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance. This means minimal changes to your blockchain code.

Once you the leader has loaded, the SDK will expose the Ethereum provider on the window, which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

Example:

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

### Demo using web3 in the example code above

First you need to make sure web3 is installed:

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

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/ethereum.service.js

We will create a new `js` file in the `src` which will hold our web3 logic. In this example we are going to call it `ethereum.service.js`. Please note you can structure this code as you want but for us a new `.js` file makes the code nice and clean.

We have wrote common `web3` methods to send a transaction and sign a message. All the other `web3` methods work the same and you can just use the standard interface to call them.

When you sign anything an approval modal will appear for the user automatically, read [here](../information/approval-modal) for more info about them.

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
  const ethereumAddress = await window.funwallet.sdk.eth.address();

  const result = await web3Instance().eth.personal.sign(
    messageText,
    ethereumAddress
  );

  return result;
}

export async function sendTransaction(tx) {
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
```

:::

::: tab src/App.vue

All hooked together:

```vue
<template>
  <div id="app">
    <div class="App">
      <div class="App-container">
        <p v-if="loading">Loading please wait</p>
        <!-- These action buttons are just here to show you how to hook in authentication
             but its up to you where/how you display them -->
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
import { WalletFollower } from '@funfair-tech/wallet-vue';
import { MessageListeners, FunWalletEmbed } from '@funfair-tech/wallet-sdk';
import { sendTransaction, signAMessage } from './ethereum.service';
// For ease of the example we have just used subjects here.
// A bigger more complex app should probably use a store framework like redux.
// If your hooking this into a big app you probably have your own state management anyway.
// If not and this is your first state storing feel free to use `BehaviorSubject` like the below.
import { BehaviorSubject } from 'rxjs';

const isAuthenticated$ = new BehaviorSubject(false);
const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);

export default {
  name: 'App',
  components: {
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

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.authenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(true);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
      window.funwallet.sdk.on(
        MessageListeners.restoreAuthenticationCompleted,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            restoreAuthenticationTaskCompleted$.next(true);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletInactivityLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
      window.funwallet.sdk.on(
        MessageListeners.walletDeviceDeletedLoggedOut,
        (result) => {
          if (result.origin === 'https://wallet.funfair.io/') {
            isAuthenticated$.next(false);
          }
        }
      );

      // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
      // register all the other events your interested in here...
    },
    login: async function () {
      try {
        const result = await window.funwallet.sdk.auth.login();
        console.log('Authentication result', result);

        isAuthenticated$.next(true);
      } catch (error) {
        console.error('User did not sign in');
        return;
      }
    },
    logout: async function () {
      await window.funwallet.sdk.auth.logout();
      isAuthenticated$.next(false);
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
  created: async function () {
    const _this = this;

    // you call this method when you want to load the wallet
    // this can be on a button click or page load up to how
    // your dApp needs it to act

    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    await FunWalletEmbed.load({
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.registerEventListeners();
      },
    });

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

:::

::::

## Destroying the fun wallet injected logic

Many dApps support many wallets and you may want to destroy all trace of the fun wallet logic once the user is done using it. A destroy method is exposed on the `FunWalletEmbed` class which will remove everything the wallet injected from your dApp.

```ts
import { FunWalletEmbed } from '@funfair-tech/wallet-sdk';

FunWalletEmbed.destroy();
```
