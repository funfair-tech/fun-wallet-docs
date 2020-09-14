# Integrating with a react app

## NPM package

We have created a react npm package component library this package holds components you can use to hook the wallet into a react app easier. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-react-integration-sample-js)

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

Firstly you need to drop the below script into your `<head>` HTML tag in your main index.html (public > index.html):

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
      src="https://wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
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

This will be a function with all your event listeners you want to attach to the wallet - https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#registering-an-event-listener

Example:

```js
import { WalletLeader } from '@funfair-tech/wallet-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { registerEventListeners } from './services/wallet-service';
import * as serviceWorker from './serviceWorker';

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

Import the wallet follower react shared component into your main index.js of your react app:

```js
import { WalletFollower } from '@funfair-tech/wallet-react';
```

Usage:

```js
<WalletFollower />
```

### Parameters

#### page - optional

Type - string

If you want to deep link the into a page on the wallet you can pass any of the routes to this parameter - https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/routing.html#deep-link-page-routes

If not passed in it will default to the main route page.

Example:

```js
import { WalletFollower } from '@funfair-tech/wallet-react';
import React, { Component } from 'react';
import './App.css';
import LoggedInActions from './components/logged-in-actions/Logged-In-Actions';
import LoggedOutActions from './components/logged-out-actions/Logged-Out-Actions';
import logo from './logo.svg';
// we suggest people using redux to store state in this example we just did a basic store using subjects
import {
  isAuthenticated$,
  restoreAuthenticationTaskCompleted$,
} from './services/store';

class App extends Component {
  constructor(props) {
    super(props);
    // should only show the follower once the wallet is logged in and loaded
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

    // this is your loading toggle you should make sure you dont show any of
    // the wallet UI until this task has been completed. Once completed if they
    // are still logged in it will fire you the `authenticationCompleted` event
    // so should go through the same path as before for you.
    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        this.setState({ isLoggedIn: isAuthenticated$.value, loading: false });
        this.forceUpdate();
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="action-buttons">
            {this.state.loading ? <p>Loading please wait</p> : null}
            {!this.state.isLoggedIn && !this.state.loading ? (
              <LoggedOutActions />
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <LoggedInActions />
            ) : null}
          </div>
          {this.state.isLoggedIn ? <WalletFollower page="/funds" /> : null}
        </div>
      </div>
    );
  }
}

export default App;
```
