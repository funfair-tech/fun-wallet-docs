# Integrating with an Angular App

## Creating a dApp

Before you start integrating you need to go and create and config your dApp on our self service portal, which you can access through [here](https://developers.funfairwallet.io/home). Once you have created your dApp you will be given an appId which you will use in your integration.

## GitHub Repo

A full React code integration example can be seen [here](https://github.com/funfair-tech/wallet-angular-integration-sample).

## HTTPS

Your domain must ALWAYS run on `https` when pointing to the Wallet, otherwise it will be rejected. This is also required for local development.

### Set Up HTTPS on localhost

Firstly, please grab the `ssl` folder with all the files from [here](https://github.com/funfair-tech/wallet-angular-integration-sample/tree/master/ssl) and drop it into the root of your project.

Then edit your `start` script in the package.json to pass in `ssl` and `ssl-cert` as parameters - example below:

```js
 ng serve --ssl true --ssl-cert \"ssl/server.crt\" --ssl-key \"ssl/server.key\"
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

Make sure you use all the typings supplied in the SDK. As the SDK is exposed on the window object, you should use the window object supplied by the SDK. This extends the `Window` object as well, so you can use it for standard window calls. This will give you full compile time errors on your Wallet integration.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

All the other typings can be imported directly from the module itself.

`TypeScript`:

```ts
import {
  NetworkDetails,
  MessageListeners,
  EventResponse,
  FunWalletSdkWindow,
  ChangeNetworkResponse,
  PendingTransactionResponse,
  ... // loads more
} from '@funfair-tech/wallet-sdk';
```

**HINT** it seems `VSCODE` has a mind of its own sometimes, so if it autocompletes with a long path i.e. `sdk/src/type...`, just revert it to the root npm package namespace (`@funfair-tech/wallet-sdk`) and then `VSCODE` should sort itself out.

If you find anything without a type, or any issues with it, please raise a GitHub issue for us to triage.

## Angular Package

We have created an Angular package component library this package holds components you can use to hook the Wallet into an Angular app easier. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-angular-integration-sample)

:::: tabs :options="{ useUrlFragment: false }"

::: tab NPM

```bash
$ npm install @funfair-tech/wallet-angular
```

:::

::: tab YARN

```bash
$ yarn add @funfair-tech/wallet-angular
```

:::

::::

## Hooking up the SDK

Most of our integrators have many wallets they support. For this case our wallet is lazy loaded aka only loaded when you need it.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/app.module.ts

Next, import the `WalletModule` into your `app.module` or in another module you will be using the Wallet components. This should be imported in the `imports` array.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WalletModule } from '@funfair-tech/wallet-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WalletModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

:::

::: tab src/app.component.ts

Register all the event listeners you want to listen to, The ones below are mandtory for the integration to work properly.

```ts
import { Component, NgZone } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;
  constructor(private _zone: NgZone) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  private listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }
}
```

:::

::: tab src/store.service.ts

```ts
// for ease of the example i have just used subjects here, a bigger more complex app should probably use a store framework like redux
import { BehaviorSubject } from 'rxjs';

export class StoreService {
  constructor() {}

  public static restoreAuthenticationTaskCompleted = new BehaviorSubject<
    boolean
  >(false);
  public static isAuthenticationCompleted = new BehaviorSubject<boolean>(false);
}
```

:::

::::

## Authentication

It's up to the integration to show the user the login and logout buttons, which allows flexibility on designs.

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
Chrome and other browsers can block popups if triggered without a genuine user click. Make sure whenever you call the authentication method that it's from a click event from the user to avoid any cross-browser issues.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->

<button click="lazyLoadFunWallet()" *ngIf="!injectedFunWallet">
  Load fun wallet sdk into dapp
</button>

<div class="app" *ngIf="injectedFunWallet">
  <div class="app-container">
    <div class="action-buttons">
      <!-- should only show this if the user is NOT logged in -->
      <div class="logged-out" *ngIf="!(isAuthenticationCompleted$ | async)">
        <button (click)="login()">Login</button>
      </div>
    </div>
  </div>
</div>
```

:::

::: tab src/app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(private _zone: NgZone) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  public listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login to the fun wallet
   */
  public async login(): Promise<void> {
    try {
      const result = await window.funwallet.sdk.auth.login();
      console.log('Authentication result', result);
    } catch (error) {
      console.error('User did not sign in');
      return;
    }

    // user all logged in
    StoreService.isAuthenticationCompleted.next(true);
  }
}
```

:::

::::

### Logout

Method to logout the authenticated user.

```js
await window.funwallet.sdk.auth.logout();
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->

<button click="lazyLoadFunWallet()" *ngIf="!injectedFunWallet">
  Load fun wallet sdk into dapp
</button>

<div class="app" *ngIf="injectedFunWallet">
  <div class="app-container">
    <div class="action-buttons">
      <!-- should only show this if the user is NOT logged in -->
      <div class="logged-out" *ngIf="!(isAuthenticationCompleted$ | async)">
        <button (click)="login()">Login</button>
      </div>
      <div class="logged-in" *ngIf="isAuthenticationCompleted$ | async">
        <button (click)="logout()">Logout</button>
      </div>
    </div>
  </div>
</div>
```

:::

::: tab src/app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(private _zone: NgZone) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  public listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login to the fun wallet
   */
  public async login(): Promise<void> {
    try {
      const result = await window.funwallet.sdk.auth.login();
      console.log('Authentication result', result);
    } catch (error) {
      console.error('User did not sign in');
      return;
    }

    // user all logged in
    StoreService.isAuthenticationCompleted.next(true);
  }

  /**
   * Logout from the wallet
   */
  public async logout(): Promise<void> {
    await window.funwallet.sdk.auth.logout();
    StoreService.isAuthenticationCompleted.next(false);
  }
}
```

:::

::::

### Authentication Refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory. We have handled a way to restore authentication on refresh and keep the user logged in. What this means for the developer is they must wait for [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) to complete before they show any UI, this is super fast, but needed to avoid showing login buttons then flashing to logout buttons. Let's walk you through how you would do this.

If you want to read more about how this works and keeps your private key safe read [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).

We just add a loading state to our data which is default `true`, this will then turn to `false` once the restoreAuthenticationCompleted has completed. We then in the template just add some loading state to hide and show the buttons.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<button click="lazyLoadFunWallet()" *ngIf="!injectedFunWallet">
  Load fun wallet sdk into dapp
</button>

<div class="app" *ngIf="injectedFunWallet">
  <div class="app-container">
    <p *ngIf="!(restoreAuthenticationTaskCompleted$ | async)">
      Loading please wait
    </p>
    <ng-container *ngIf="restoreAuthenticationTaskCompleted$ | async">
      <div class="action-buttons">
        <!-- should only show this if the user is NOT logged in -->
        <div class="logged-out" *ngIf="!(isAuthenticationCompleted$ | async)">
          <button (click)="login()">Login</button>
        </div>
        <div class="logged-in" *ngIf="isAuthenticationCompleted$ | async">
          <button (click)="logout()">Logout</button>
        </div>
      </div>
    </ng-container>
  </div>
</div>
```

:::

::: tab src/app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(private _zone: NgZone) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  public listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login to the fun wallet
   */
  public async login(): Promise<void> {
    try {
      const result = await window.funwallet.sdk.auth.login();
      console.log('Authentication result', result);
    } catch (error) {
      console.error('User did not sign in');
      return;
    }

    // user all logged in
    StoreService.isAuthenticationCompleted.next(true);
  }

  /**
   * Logout from the wallet
   */
  public async logout(): Promise<void> {
    await window.funwallet.sdk.auth.logout();
    StoreService.isAuthenticationCompleted.next(false);
  }
}
```

:::

::::

## Show Wallet UI

Usage:

```html
<lib-wallet-follower></lib-wallet-follower>
```

If you want to deep link into a page on the Wallet, see [here](./routing.html#deep-link-page-routes). By default the main `/funds` page will load. Please note, you must only show if the user is authenticated.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->

<button click="lazyLoadFunWallet()" *ngIf="!injectedFunWallet">
  Load fun wallet sdk into dapp
</button>

<div class="app" *ngIf="injectedFunWallet">
  <div class="app-container">
    <p *ngIf="!(restoreAuthenticationTaskCompleted$ | async)">
      Loading please wait
    </p>
    <ng-container *ngIf="restoreAuthenticationTaskCompleted$ | async">
      <div class="action-buttons">
        <!-- should only show this if the user is NOT logged in -->
        <div class="logged-out" *ngIf="!(isAuthenticationCompleted$ | async)">
          <button (click)="login()">Login</button>
        </div>
        <div class="logged-in" *ngIf="isAuthenticationCompleted$ | async">
          <button (click)="logout()">Logout</button>
        </div>

        <div class="wallet-follower" *ngIf="isAuthenticationCompleted$ | async">
          <lib-wallet-follower></lib-wallet-follower>
        </div>
      </div>
    </ng-container>
  </div>
</div>
```

:::

::: tab src/app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(private _zone: NgZone) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  public listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login to the fun wallet
   */
  public async login(): Promise<void> {
    try {
      const result = await window.funwallet.sdk.auth.login();
      console.log('Authentication result', result);
    } catch (error) {
      console.error('User did not sign in');
      return;
    }

    // user all logged in
    StoreService.isAuthenticationCompleted.next(true);
  }

  /**
   * Logout from the wallet
   */
  public async logout(): Promise<void> {
    await window.funwallet.sdk.auth.logout();
    StoreService.isAuthenticationCompleted.next(false);
  }
}
```

:::

::::

## KYC - Feature Request Only!

KYC is a billable feature due to costs we have to pay third party KYC providers. You will have to get in contact with FunFair if you'd like this feature turned on. To get in contact with us please join our Discord by clicking [here](https://discord.com/invite/YEUQVvQrzy).

If you do not want to have KYC as a feature on your dApp please ignore this section completely.

To read more about our providers and countries we cover, please read [here](../information/kyc)

It is up to the dApp to decide if they want to use our KYC feature or not and at which stage. The events get fired regardless but it's up to the dApp to listen to them if they want to use it. The dApp needs to listen to [isKycVerified](./sdk-event-listeners.html#iskycverified) event which will fire when the user has successfully passed or failed KYC. It also fires on initial login with the status of that logged-in user's KYC status. You can listen to [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event which will fire when the user cancels or closes the KYC modal. The reason we made the dApp handle this is to give them greater flexibility on when you show the KYC stage and what your client does after it was cancelled.

To check if the user has KYC'd or not you can call [isKycVerified](./sdk-methods/kyc.html#kyc-verified-status-for-the-logged-in-user).

```js
const isKycVerified = await window.funwallet.sdk.kyc.isVerified();
```

If that returns false (i.e. they are not KYC'd), you can trigger the KYC modal to open by calling the [sdk.kyc.start()](./sdk-methods/kyc.html#start-kyc) SDK method:

```js
await window.funwallet.sdk.kyc.start();
```

Once completed, you will get the status of the pass/fail through the [isKycVerified](./sdk-event-listeners.html#iskycverified) event. Obviously, if they do not complete the KYC you will see them cancel it with the [kycProcessCancelled](./sdk-event-listeners.html#kycprocesscancelled) event.

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->

<button click="lazyLoadFunWallet()" *ngIf="!injectedFunWallet">
  Load fun wallet sdk into dapp
</button>

<div class="app" *ngIf="injectedFunWallet">
  <div class="app-container">
    <p *ngIf="!(restoreAuthenticationTaskCompleted$ | async)">
      Loading please wait
    </p>
    <ng-container *ngIf="restoreAuthenticationTaskCompleted$ | async">
      <div class="action-buttons">
        <!-- should only show this if the user is NOT logged in -->
        <div class="logged-out" *ngIf="!(isAuthenticationCompleted$ | async)">
          <button (click)="login()">Login</button>
        </div>
        <div class="logged-in" *ngIf="isAuthenticationCompleted$ | async">
          <button (click)="kycModalOpen()">Start KYC</button>
          <button (click)="logout()">Logout</button>
        </div>

        <div class="wallet-follower" *ngIf="isAuthenticationCompleted$ | async">
          <lib-wallet-follower></lib-wallet-follower>
        </div>
      </div>
    </ng-container>
  </div>
</div>
```

:::

::: tab src/app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  IsKycVerifiedResponse,
  KycProcessCancelledResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(private _zone: NgZone) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  public listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // REGISTER THESE EVENTS BELOW FOR KYC

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#iskycverified
    window.funwallet.sdk.on<IsKycVerifiedResponse>(
      MessageListeners.isKycVerified,
      (result: IsKycVerifiedResponse) => {
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
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#kycprocesscancelled
    window.funwallet.sdk.on<KycProcessCancelledResponse>(
      MessageListeners.kycProcessCancelled,
      (result: KycProcessCancelledResponse) => {
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
  }

  /**
   * Login to the fun wallet
   */
  public async login(): Promise<void> {
    try {
      const result = await window.funwallet.sdk.auth.login();
      console.log('Authentication result', result);
    } catch (error) {
      console.error('User did not sign in');
      return;
    }

    // user all logged in
    StoreService.isAuthenticationCompleted.next(true);
  }

  /**
   * Logout from the wallet
   */
  public async logout(): Promise<void> {
    await window.funwallet.sdk.auth.logout();
    StoreService.isAuthenticationCompleted.next(false);
  }

  /**
   * Start the kyc process
   */
  public async kycModalOpen(): Promise<void> {
    await window.funwallet.sdk.kyc.start();
  }
}
```

:::

::::

## Speaking to the Blockchain (web3/etherjs)

Now you have the Wallet all hooked up, you can start speaking to the blockchain. Most developers use `web3` and `etherjs` to interact with the blockchain. The SDK exposes our own [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible Ethereum provider.

```js
// provider lives here in the FunFair Wallet SDK object
window.funwallet.sdk.ethereum;
```

To read more about the Ethereum provider please read [here](./ethereum-provider).

This can be injected into any new `web3` or `ethers` instance. This means you can use the standard `web3` or `ethers` interface to do all your blockchain calls, and our Ethereum provider makes sure all those calls go through the authenticated leader Wallet instance. This means minimal changes to your blockchain code.

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

We don't support `eth_sign`, `eth_signTransaction` and `eth_sendRawTransaction`, due to the security concerns with signing and not sending. You can only sign and send with our Wallet. Also `eth_newFilter`, `eth_newBlockFilter`, `eth_getFilterChanges`, `eth_getFilterLogs`, `eth_uninstallFilter` and `eth_newPendingTransactionFilter` are not supported by our nodes so will not work.

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

:::: tabs :options="{ useUrlFragment: false }"

::: tab src/ethereum.service.ts

We will create a new `ts` file in the `src` which will hold our web3 logic. In this example, we are going to call it `ethereum.service.ts`. Please note you can structure this code as you want but for us a new Angular service makes the code nice and clean.

We then have written two common `web3` methods to send a transaction and sign a message. All the `web3` methods work the same as normal and you can just use the standard interface to call them.

When you sign anything, an approval modal will appear for the user automatically. Read [here](../information/approval-modal) for more info about them.

```ts
import { Injectable } from '@angular/core';
import window from '@funfair-tech/wallet-sdk/window';
import Web3 from 'web3';
import { TransactionConfig } from 'web3-core';

@Injectable({
  providedIn: 'root',
})
export class EthereumService {
  private _web3Instance: Web3 | undefined;
  constructor(private _zone: NgZone) {}

  /**
   * Get the web3 instance
   */
  public get web3Instance(): Web3 {
    if (this._web3Instance) {
      return this._web3Instance;
    }

    return new Web3(window.funwallet.sdk.ethereum as any);
  }

  /**
   * Sign a message
   * @param messageText The message text
   */
  public async signAMessage(messageText: string): Promise<string> {
    const ethereumAddress = await window.funwallet.sdk.eth.address();

    const result = await this.web3Instance.eth.personal.sign(
      messageText,
      ethereumAddress,
      'FAKE-PASSWORD' // bad web3 types
    );

    return result;
  }

  /**
   * Send transaction
   * @param tx The transaction
   */
  public async sendTransaction(tx: TransactionConfig): Promise<void> {
    const ethereumAddress = await window.funwallet.sdk.eth.address();
    tx.from = ethereumAddress;

    this.web3Instance.eth
      .sendTransaction(tx)
      .once('transactionHash', (transactionHash) => {
        console.log('Transaction hash test app', transactionHash);
      })
      .on('error', async (error) => {
        console.log(error.message, error);
      });
  }
}
```

:::

::: tab src/app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->

<button click="lazyLoadFunWallet()" *ngIf="!injectedFunWallet">
  Load fun wallet sdk into dapp
</button>

<div class="app" *ngIf="injectedFunWallet">
  <div class="app-container">
    <p *ngIf="!(restoreAuthenticationTaskCompleted$ | async)">
      Loading please wait
    </p>
    <ng-container *ngIf="restoreAuthenticationTaskCompleted$ | async">
      <!-- These action buttons are just here to show you how to hook in authentication
             but its up to you where/how you display them -->
      <div class="action-buttons">
        <!-- should only show this if the user is NOT logged in -->
        <div class="logged-out" *ngIf="!(isAuthenticationCompleted$ | async)">
          <button (click)="login()">Login</button>
        </div>
        <div class="logged-in" *ngIf="isAuthenticationCompleted$ | async">
          <button (click)="signAMessage()">Sign message</button>
          <button (click)="sendSignedTransaction()">
            Send signed transaction
          </button>
          <button (click)="logout()">Logout</button>
        </div>

        <div class="wallet-follower" *ngIf="isAuthenticationCompleted$ | async">
          <lib-wallet-follower></lib-wallet-follower>
        </div>
      </div>
    </ng-container>
  </div>
</div>
```

:::

::: tab src/app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
import window from '@funfair-tech/wallet-sdk/window';
import {
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
  FunWalletEmbed,
  FunWalletSdk,
} from '@funfair-tech/wallet-sdk';
import { EthereumService } from './services/ethereum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(
    private _ethereumService: EthereumService,
    private _zone: NgZone
  ) {}

  // you call this method when you want to load the wallet
  // this can be on a button click or page load up to how
  // your dApp needs it to act
  public lazyLoadFunWallet(): Promise<FunWalletSdk> {
    // it returns the fun wallet sdk but this
    // is always exposed in `window.funwallet.sdk`
    const funWalletSdk = await FunWalletEmbed.load({
      initOptions: {
        ngZone: this._zone,
      },
      appId: 'YOUR_APP_ID_HERE',
      // make sure its in a arrow expression
      // functions so it can get context to `this`
      // when executing your wallet event listener method
      eventListenerCallback: () => {
        this.listenToWalletEvents();
      },
    });

    this.injectedFunWallet = true;
    return funWalletSdk;
  }

  public listenToWalletEvents(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);

          // if the user has been restored authentication then your all good
          // to go again
          if (result.data.isAuthenticated) {
            // result.data.result holds `AuthenticationCompletedResponeData` in for you.
            StoreService.isAuthenticationCompleted.next(true);
          }
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io/') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login to the fun wallet
   */
  public async login(): Promise<void> {
    try {
      const result = await window.funwallet.sdk.auth.login();
      console.log('Authentication result', result);
    } catch (error) {
      console.error('User did not sign in');
      return;
    }

    // user all logged in
    StoreService.isAuthenticationCompleted.next(true);
  }

  /**
   * Logout from the wallet
   */
  public async logout(): Promise<void> {
    await window.funwallet.sdk.auth.logout();
    StoreService.isAuthenticationCompleted.next(false);
  }

  public async signAMessage(): Promise<void> {
    // hard coded data for this example
    const signature = await this._ethereumService.signAMessage('TESTME');
    console.log('Sign message complete. sig -', signature);
  }

  public async sendSignedTransaction(): Promise<void> {
    // hard coded data for this example
    const signature = await this._ethereumService.sendTransaction({
      to: '0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28',
      value: '0x00', // 0x38d7ea4c68000 if you want to add some value 0.002 ETH
    });

    console.log('Send signed transaction complete. sig -', signature);
  }
}
```

:::

::::

## Destroying the fun wallet injected logic

Many dApps support many wallets and you may want to destroy all trace of the fun wallet logic once the user is done using it. A destroy method is exposed on the `FunWalletEmbed` class which will remove everything the wallet injected from your dApp.

```ts
import { FunWalletEmbed } from '@funfair-tech/wallet-sdk';

FunWalletEmbed.destroy();
```
