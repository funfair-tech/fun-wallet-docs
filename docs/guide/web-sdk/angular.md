# Integrating with a angular app

## HTTPS

Your domain must ALWAYS run `https` when pointing to the wallet else it will be rejected. This is also required on local development.

### Setup https on localhost

Firstly please grab the `ssl` folder with all the files from [here](https://github.com/funfair-tech/wallet-angular-integration-sample/tree/master/ssl) and drop it into the root of your project.

Then edit your `start` script in the package.json to pass in `ssl` and `ssl-cert` as parameters, example below:

```js
 ng serve --ssl true --ssl-cert \"ssl/server.crt\" --ssl-key \"ssl/server.key\"
```

You will need to install the https cert as shown below:

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

Make sure you use all the typings supplied in the SDK. As the SDK is exposed on the window object, you should use the window object supplied by the SDK. This extends the `Window` object as well, so you can use it for standard window calls. This will give you full compile time errors on your wallet integration.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## Setting it up with Angular CLI

To get it to build with the Angular CLI compiler, you need to add the `window.ts` file in your `files` object in your `tsconfig.app.json`. It also seems if you add the `window.ts` file, Angular CLI starts complaining about the `main.ts` and the `polyfill.ts`, so you'll need to add those in the array as well if you still have them in your Angular project. Example below (example `node_modules` path shown, make sure you update this if necessary):

```json
 "files": [
    "./main.ts",
    "./polyfills.ts",
    "./node_modules/@funfair-tech/wallet-sdk/window.ts"
  ]
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

All the other typings can be imported directly from the module itself.

Example:

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

**HINT** it seems `VSCODE` has a mind of its own sometimes, so if it autocompletes with a long path i.e. `sdk/src/type...`, just revert it to SDK and it should sort itself out.

If you find anything without a type or any issues with it please raise a GitHub issue for us to triage.

## Angular package

We have created a angular package component library this package holds components you can use to hook the wallet into a angular app easier. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-angular-integration-sample)

To install run:

### NPM

```bash
$ npm install @funfair-tech/wallet-angular
```

### YARN

```bash
$ yarn add @funfair-tech/wallet-angular
```

## Hooking up the SDK

Firstly you need to drop the below script into your `<head>` HTML tag in the main index.html (app > index.html). Please replace the `YOUR_APP_ID` with the appId we have supplied you:

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
    <app-root></app-root>
  </body>
</html>
```

Next import the `WalletModule` into your `app.module` or in another module you will be using the wallet components. This should be imported in the `imports` array:

Example:

app.module.ts

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

Insert the wallet leader at the top of the `app.component.html`

Usage:

```html
<lib-wallet-leader
  (loaded)="YOUR_REGISTER_EVENT_LISTENERS_METHOD()"
></lib-wallet-leader>
```

### Parameters

#### loaded

Type - Function

This will fire when the wallet leader has loaded and this will be a function you register all your event listeners you want to attach to the wallet, list of them [here](https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#registering-an-event-listener)

Example:

app.component.html

```html
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>
```

store.service.ts

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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }
}
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

Example:

app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>

<div class="app">
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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor() {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login
   */
  public login(): void {
    window.funwallet.sdk.auth.login();
  }
}
```

### Logout

Method to logout the authenticated user.

```js
await window.funwallet.sdk.auth.logout();
```

Example:

app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>

<div class="app">
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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor() {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login
   */
  public login(): void {
    window.funwallet.sdk.auth.login();
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

### Authentication refresh

As the server never sees the private key and all the decryption of it happens on the client side, once you refresh your tab, your private key is no longer in memory. We have handled a way to restore authentication on refresh and keep the user logged in. What this means for the developer is they must wait for [restoreAuthenticationCompleted](/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted) to complete before they show any UI, this is super fast but needed to avoid showing login buttons then flashing to logout buttons. Lets walk you through how you would do this.

If you want to read more about how this works and keeps your PK safe read [here](/guide/how-does-it-work/re-authentication.html#double-encrypted-localstorage-setup).

We just add a loading state to our data which is default true, this will then turn to false once the restoreAuthenticationCompleted has completed. We then in the template just add some loading state to hide and show the buttons.

Example:

app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>

<div class="app">
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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor() {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login
   */
  public login(): void {
    window.funwallet.sdk.auth.login();
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

## Show wallet UI

Usage:

```html
<lib-wallet-follower></lib-wallet-follower>
```

If you want to deep link the into a page on the wallet it is explained how to do that [here](./routing.html#deep-link-page-routes). By default to the main `/funds` page will load.

please note you must only show the follower once [restoreAuthenticationTaskCompleted](./sdk-event-listeners.html#restoreauthenticationcompleted) has fired and [authenticationcompleted](./sdk-event-listeners.html#authenticationcompleted) has fired, `authenticationcompleted` means they are logged in.

Example:

app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>

<div class="app">
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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor() {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login
   */
  public login(): void {
    window.funwallet.sdk.auth.login();
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

app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>

<div class="app">
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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  IsKycVerifiedResponse,
  KycProcessCancelledResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor() {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // REGISTER THESE EVENTS BELOW FOR KYC

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#iskycverified
    window.funwallet.sdk.on<IsKycVerifiedResponse>(
      MessageListeners.isKycVerified,
      (result: IsKycVerifiedResponse) => {
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
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#kycprocesscancelled
    window.funwallet.sdk.on<KycProcessCancelledResponse>(
      MessageListeners.kycProcessCancelled,
      (result: KycProcessCancelledResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
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
   * Login
   */
  public login(): void {
    window.funwallet.sdk.auth.login();
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

We will create a new `ts` file in the `src` which will hold our web3 logic. This example we are going to call it `ethereum.service.ts`.
Please note you can structure this code as you want but for us a new angular service makes the code nice and clean.

`ethereum.service.ts`

```ts
import { Injectable } from '@angular/core';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
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
    const ethereumAddress = await window.funwallet.sdk.ethereumAddress();

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
    const ethereumAddress = await window.funwallet.sdk.ethereumAddress();
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

We have wrote common `web3` methods to send a transaction and sign a message. All the other `web3` methods work the same and you can just use the standard interface to call them.

Below shows how you would call them in the code samples we have been doing.

Example:

app.component.html

```html
<!-- Very simple example of it working in 1 app.component.html we suggest splitting into components to make this nicer as a big app would -->
<!-- this is purely for developers to understand how it comes together, the same logic would work with split components and different modules -->
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>

<div class="app">
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

app.component.ts

```ts
import { Component } from '@angular/core';
import { StoreService } from './store.service';
// for this to not give compile time errors please add "./node_modules/@funfair-tech/wallet-sdk/window.ts"
// to your files object in tsconfig.app.json
import window from '@funfair-tech/wallet-sdk/window';
import {
  AuthenticationCompletedResponse,
  MessageListeners,
  RestoreAuthenticationCompletedResponse,
  WalletDeviceDeletedLoggedOutResponse,
  WalletInactivityLoggedOutResponse,
} from '@funfair-tech/wallet-sdk';
import { EthereumService } from './services/ethereum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public restoreAuthenticationTaskCompleted$: Observable<
    boolean
  > = StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<
    boolean
  > = StoreService.isAuthenticationCompleted.pipe();

  constructor(private _ethereumService: EthereumService) {}

  public walletLoaded(): void {
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#authenticationcompleted
    window.funwallet.sdk.on<AuthenticationCompletedResponse>(
      MessageListeners.authenticationCompleted,
      (result: AuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(true);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#restoreauthenticationcompleted
    window.funwallet.sdk.on<RestoreAuthenticationCompletedResponse>(
      MessageListeners.restoreAuthenticationCompleted,
      (result: RestoreAuthenticationCompletedResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.restoreAuthenticationTaskCompleted.next(true);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletinactivityloggedout
    window.funwallet.sdk.on<WalletInactivityLoggedOutResponse>(
      MessageListeners.walletInactivityLoggedOut,
      (result: WalletInactivityLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // MUST HAVE TO KEEP YOUR APPS AUTHENTICATION STATE IN SYNC
    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#walletdevicedeletedloggedout
    window.funwallet.sdk.on<WalletDeviceDeletedLoggedOutResponse>(
      MessageListeners.walletDeviceDeletedLoggedOut,
      (result: WalletDeviceDeletedLoggedOutResponse) => {
        if (result.origin === 'https://wallet.funfair.io') {
          StoreService.isAuthenticationCompleted.next(false);
        }
      }
    );

    // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
    // register all the other events your interested in here...
  }

  /**
   * Login
   */
  public login(): void {
    window.funwallet.sdk.auth.login();
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

When you sign anything an approval modal will appear for the user automatically, read [here](../information/approval-modal) for more info about them.
