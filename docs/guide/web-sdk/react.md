# Integrating with a react app

## HTTPS

Your domain must ALWAYS run `https` when pointing to the wallet else it will be rejected. This is also required on local development.

### Setup https on localhost

Firstly please grab the `ssl` folder with all the files from [here](https://github.com/funfair-tech/wallet-react-integration-sample-js/tree/master/ssl) and drop it into the root of your project.

You then need to create a `.env` file in the root which looks like:

```
HTTPS=true
SSL_CRT_FILE=./ssl/server.crt
SSL_KEY_FILE=./ssl/server.key
```

If you already have a `.env` just add the above properties to it.

When you serve this now using `react-scripts start` and it will serve it on https. You will need to install the https cert as shown below:

#### Windows

<img :src="$withBase('/windows-https-install.PNG')" >

#### Mac

<img :src="$withBase('/mac-https-install.gif')" >

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

This guide will be shown in `js` but all the same rules apply for react `ts` projects. Make sure you use all the typings supplied in the `SDK`. As the `SDK` is exposed on the window object, you should use the window object supplied by the `SDK`. This extends the `Window` object as well, so you can use it for standard window calls. This will give you full compile time errors on your wallet integration.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## React package

We have created a react package component library this package holds components you can use to hook the wallet into a react app easier. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-react-integration-sample-js)

To install run:

### NPM

```bash
$ npm install @funfair-tech/wallet-react
```

### YARN

```bash
$ yarn add @funfair-tech/wallet-react
```

## Hooking up the SDK

Firstly you need to drop the below script into your `<head>` HTML tag in your main index.html (public > index.html). Please replace the `YOUR_APP_ID` with the appId we have supplied you:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Fun Wallet Integration demo</title>
    <script
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js?appId=YOUR_APP_ID"
      type="text/JavaScript"
    ></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

Next import the wallet leader react shared component into your main index.js of your react app:

```js
import { WalletLeader } from '@funfair-tech/wallet-react';
```

Usage:

```js
<WalletLeader registerEventListeners={YOUR_REGISTER_EVENT_LISTENERS_METHOD} />
```

### Parameters

#### registerEventListeners

Type - Function

This will fire when the wallet leader has loaded and this will be a function you register all your event listeners you want to attach to the wallet, list of them [here](https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#registering-an-event-listener)

Example:

store.js

```js
// for ease of the example i have just used subjects here, a bigger more complex app should probably use a store framework like redux
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);
```

index.js

```js
import { WalletLeader } from '@funfair-tech/wallet-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';
import { MessageListeners } from '@funfair-tech/wallet-sdk';

// like in our github example https://github.com/funfair-tech/wallet-react-integration-sample-js
// it would be nicer code if you extracted this into its own file and called in within here.
// for ease of understanding it is all in this file.
const registerEventListeners = () => {
  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
  window.funwallet.sdk.on(
    MessageListeners.authenticationCompleted,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(true);
      }
    }
  );

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
  window.funwallet.sdk.on(
    MessageListeners.restoreAuthenticationCompleted,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        restoreAuthenticationTaskCompleted$.next(true);
      }
    }
  );

  // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
  window.funwallet.sdk.on(
    MessageListeners.walletInactivityLoggedOut,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(false);
      }
    }
  );

  // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
  window.funwallet.sdk.on(
    MessageListeners.walletDeviceDeletedLoggedOut,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(false);
      }
    }
  );

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
  // register all the other events your interested in here...
};

ReactDOM.render(
  <React.StrictMode>
    <WalletLeader registerEventListeners={registerEventListeners} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

## Authentication

It's up to the integration to show the user the login and logout buttons, which allows flexibility on designs. This below will show you how you would hook login and logout buttons into your app.

### Login

Method to pop up the authentication modal.

```js
window.funwallet.sdk.auth.login();
```

This will load a window popup for the user to enter their login details. Once logged in it will fire [authenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted), which you will need to have registered to so you can listen out for success. If the user closes the authentication popup it will fire [authenticationPopUpClosed](/guide/web-sdk/sdk-event-listeners.html#authenticationpopupclosed), which you can listen out for if you want to know when that happens.

**NOTE**
Chrome and other browsers can block popups if triggered without a genuine user click. Make sure whenever you pop this modal up its from a click event from the user to avoid any cross browser issues.

App.js

```js
import React, { Component } from 'react';
import './App.css';
import { isAuthenticated$ } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
      });
      this.forceUpdate();
    });
  }

  login() {
    window.funwallet.sdk.auth.login();
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <div className="action-buttons">
            {!this.state.isLoggedIn ? (
              <div className="logged-out">
                <button onClick={this.login}>Login</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
```

### Logout

Method to logout the authenticated user.

```js
await window.funwallet.sdk.auth.logout();
```

Example:

App.js

```js
import React, { Component } from 'react';
import './App.css';
import { isAuthenticated$ } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
      });
      this.forceUpdate();
    });
  }

  login() {
    window.funwallet.sdk.auth.login();
  }

  async logout() {
    await window.funwallet.sdk.auth.logout();
    isAuthenticated$.next(false);
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <div className="action-buttons">
            {!this.state.isLoggedIn ? (
              <div className="logged-out">
                <button onClick={this.login}>Login</button>
              </div>
            ) : null}
            {this.state.isLoggedIn ? (
              <div className="logged-in">
                <button onClick={this.logout}>Logout</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
```

### Authentication refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory. We have handled a way to restore authentication on refresh and keep the user logged in. What this means for the developer is they must wait for [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) to complete before they show any UI, this is super fast but needed to avoid showing login buttons then flashing to logout buttons. Lets walk you through how you would do this.

If you want to read more about how this works and keeps your PK safe read [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).

We just add a loading state to our data which is default true, this will then turn to false once the restoreAuthenticationCompleted has completed. We then in the html just add some loading state to hide and show the buttons.

Example:

App.js

```js
import React, { Component } from 'react';
import './App.css';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, loading: true };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
        loading: !restoreAuthenticationTaskCompleted$.value,
      });
      this.forceUpdate();
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        this.setState({ isLoggedIn: isAuthenticated$.value, loading: false });
        this.forceUpdate();
      }
    });
  }

  login() {
    window.funwallet.sdk.auth.login();
  }

  async logout() {
    await window.funwallet.sdk.auth.logout();
    isAuthenticated$.next(false);
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          {this.state.loading ? <p>Loading please wait</p> : null}
          <div className="action-buttons">
            {!this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-out">
                <button onClick={this.login}>Login</button>
              </div>
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-in">
                <button onClick={this.logout}>Logout</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
```

## Show wallet UI

To get the `WalletFollower` you have to import it from the sdk.

```js
import { WalletFollower } from '@funfair-tech/wallet-react';
```

Usage:

```js
<WalletFollower />
```

If you want to deep link the into a page on the wallet it is explained how to do that [here](./routing.html#deep-link-page-routes). By default to the main `/funds` page will load.

Please note you must only show the follower once [restoreAuthenticationTaskCompleted](./sdk-event-listeners.html#restoreauthenticationcompleted) has fired and [authenticationcompleted](./sdk-event-listeners.html#authenticationcompleted) has fired, `authenticationcompleted` means they are logged in.

Example:

App.js

```js
import { WalletFollower } from '@funfair-tech/wallet-react';
import React, { Component } from 'react';
import './App.css';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, loading: true };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
        loading: !restoreAuthenticationTaskCompleted$.value,
      });
      this.forceUpdate();
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        this.setState({ isLoggedIn: isAuthenticated$.value, loading: false });
        this.forceUpdate();
      }
    });
  }

  login() {
    window.funwallet.sdk.auth.login();
  }

  async logout() {
    await window.funwallet.sdk.auth.logout();
    isAuthenticated$.next(false);
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          {this.state.loading ? <p>Loading please wait</p> : null}
          <div className="action-buttons">
            {!this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-out">
                <button onClick={this.login}>Login</button>
              </div>
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-in">
                <button onClick={this.logout}>Logout</button>
              </div>
            ) : null}
          </div>
          {this.state.isLoggedIn ? (
            <div className="wallet-follower">
              <WalletFollower />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
```

## KYC - feature request only!

KYC is a billable feature due to costs we have to pay the third party KYC provider. You will have to get in contact with funfair if you want this feature turned on. - josh.stevens@funfair.io

If you do not want to have KYC as a feature on your dApp please ignore this section completely.

To read more about our providers and countries we cover please read [here](../information/kyc)

It is up to the dApp to decide if they want to use our KYC feature or not. The events get fired regardless but its up to the dApp to listen to them to know when to trigger the KYC modal.

The dApp needs to listen to [isKycVerified](./sdk-event-listeners.html#iskycverified) event which will fire when you try to open the KYC modal and allows you to work out if you show the modal or not.

It also needs to listen to [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event which will fire when the user cancels or closes the KYC modal.

The reason we made the dApp handle it to give you greater flexibility on when you showed it and what you did after it was cancelled.

To trigger the KYC modal to open you have to call [sdk.kyc.start()](./sdk-methods/kyc.html#start-kyc) SDK method:

```js
await window.funwallet.sdk.kyc.start();
```

This will then do the lookup on the wallet side and fire the result to `isKycVerified` event.

Example:

index.js

```js
import { WalletLeader } from '@funfair-tech/wallet-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';
import { MessageListeners } from '@funfair-tech/wallet-sdk';

// like in our github example https://github.com/funfair-tech/wallet-react-integration-sample-js
// it would be nicer code if you extracted this into its own file and called in within here.
// for ease of understanding it is all in this file.
const registerEventListeners = () => {
  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
  window.funwallet.sdk.on(
    MessageListeners.authenticationCompleted,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(true);
      }
    }
  );

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
  window.funwallet.sdk.on(
    MessageListeners.restoreAuthenticationCompleted,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        restoreAuthenticationTaskCompleted$.next(true);
      }
    }
  );

  // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
  window.funwallet.sdk.on(
    MessageListeners.walletInactivityLoggedOut,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(false);
      }
    }
  );

  // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
  window.funwallet.sdk.on(
    MessageListeners.walletDeviceDeletedLoggedOut,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(false);
      }
    }
  );

  // REGISTER THESE EVENTS BELOW FOR KYC

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#iskycverified
  window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
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
  window.funwallet.sdk.on(MessageListeners.kycProcessCancelled, (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (result.data.cancelled) {
        // MUST CALL
        window.funwallet.sdk.hideFunWalletModal();
        // you may want to move routes etc here hence why you hook onto this action
        // and the sdk does not
      }
    }
  });

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
  // register all the other events your interested in here...
};

ReactDOM.render(
  <React.StrictMode>
    <WalletLeader registerEventListeners={registerEventListeners} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

App.js

```js
import { WalletFollower } from '@funfair-tech/wallet-react';
import React, { Component } from 'react';
import './App.css';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, loading: true };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
        loading: !restoreAuthenticationTaskCompleted$.value,
      });
      this.forceUpdate();
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        this.setState({ isLoggedIn: isAuthenticated$.value, loading: false });
        this.forceUpdate();
      }
    });
  }

  login() {
    window.funwallet.sdk.auth.login();
  }

  async logout() {
    await window.funwallet.sdk.auth.logout();
    isAuthenticated$.next(false);
  }

  async openKycProcess() {
    await window.funwallet.sdk.kyc.start();
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          {this.state.loading ? <p>Loading please wait</p> : null}
          <div className="action-buttons">
            {!this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-out">
                <button onClick={this.login}>Login</button>
              </div>
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-in">
                <button onClick={this.openKycProcess}>Start KYC</button>
                <button onClick={this.logout}>Logout</button>
              </div>
            ) : null}
          </div>
          {this.state.isLoggedIn ? (
            <div className="wallet-follower">
              <WalletFollower />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
```

## Speaking to the blockchain (web3/etherjs)

Now you have the wallet all hooked up you can start speaking to the blockchain. Most developers use `web3` and `etherjs` to interact with the blockchain, the SDK exposes our own [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible ethereum provider.

```js
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

To read more about the ethereum provider please read [here](./ethereum-provider).

This can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance. This means minimal changes to your blockchain code.

Once you the leader has loaded, the SDK will expose the Ethereum provider on the window, which can be used as the provider you inject when you create a new `web3` or `ethers` instance.

Example:

### web3

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

### etherjs

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

App.js

```js
import { WalletFollower } from '@funfair-tech/wallet-react';
import React, { Component } from 'react';
import './App.css';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';
import { sendTransaction, signAMessage } from './ethereum.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, loading: true };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
        loading: !restoreAuthenticationTaskCompleted$.value,
      });
      this.forceUpdate();
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        this.setState({ isLoggedIn: isAuthenticated$.value, loading: false });
        this.forceUpdate();
      }
    });
  }

  login() {
    window.funwallet.sdk.auth.login();
  }

  async logout() {
    await window.funwallet.sdk.auth.logout();
    isAuthenticated$.next(false);
  }

  async signAMessage() {
    // hard coded data for this example
    const signature = await signAMessage('TESTME');
    console.log('Sign message complete. sig -', signature);
  }

  async sendSignedTransaction() {
    // hard coded data for this example
    const signature = await sendTransaction({
      to: '0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28',
      value: '0x00', // 0x38d7ea4c68000 if you want to add some value 0.002 ETH
    });

    console.log('Send signed transaction complete. sig -', signature);
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          {this.state.loading ? <p>Loading please wait</p> : null}
          <div className="action-buttons">
            {!this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-out">
                <button onClick={this.login}>Login</button>
              </div>
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <div className="logged-in">
                <button onClick={this.signAMessage}>Sign message</button>
                <button onClick={this.sendSignedTransaction}>
                  Send signed transaction
                </button>
                <button onClick={this.openKycProcess}>Start KYC</button>
                <button onClick={this.logout}>Logout</button>
              </div>
            ) : null}
          </div>
          {this.state.isLoggedIn ? (
            <div className="wallet-follower">
              <WalletFollower />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
```

When you sign anything an approval modal will appear for the user automatically, read [here](../information/approval-modal) for more info about them.
