# Integrating with a angular app

Please make sure you have installed the fun wallet sdk before continuing [here](./installing-sdk.html)

## NPM package

We have created a angular npm package component library this package holds components you can use to hook the wallet into a angular app easier. A full code integration example can be seen [here](https://github.com/funfair-tech/wallet-angular-integration-sample)

To install run:

### NPM

```bash
$ npm install @funfair-tech/wallet-angular
```

### YARN

```bash
$ yarn add @funfair-tech/wallet-angular
```

## TypeScript Typings

Make sure you use all the typings supplied in the SDK. As the SDK is exposed on the window object, you should use the window object supplied by the SDK. This extends the `Window` object as well, so you can use it for standard window calls.

```ts
import window from '@funfair-tech/wallet-sdk/window';
```

## Setting it up with Angular CLI

To get it to build with the Angular CLI compiler, you need to add the `window.ts` file in your `files` object in your `tsconfig.app.json`. It also seems if you add the `window.ts` file, Angular CLI starts complaining about the `main.ts` and the `polyfill.ts`, so you'll need to add those in the array as well if you still have them in your Angular project. Example below (example `node_modules` path shown, make sure you update this if necessary):

```json
 "files": [
    "./main.ts",
    "./polyfills.ts",
    "../node_modules/@funfair-tech/wallet-sdk/window.ts"
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

## Hooking up the SDK

Firstly you need to drop the below script into your `<head>` HTML tag in the main index.html (app > index.html):

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
    <app-root></app-root>
  </body>
</html>
```

Next import the `WalletModule` into your `app.module` or in another module you will be using the wallet components. This should be imported in the `imports` array:

Example:

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

```html
<lib-wallet-leader (loaded)="walletLoaded()"></lib-wallet-leader>
```

```js
import { Component } from '@angular/core';
import { registerEventListeners } from './wallet-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public walletLoaded() {
      registerEventListeners();
  }
}

```

`registerEventListeners` method example (please note yours will be different to what you require and want to listen to):

```js
import { MessageListeners } from '@funfair-tech/wallet-sdk';
// we suggest developers to use redux to store state in this example we just did a basic store using subjects
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

Usage:

```html
<lib-wallet-follower></lib-wallet-follower>
```

### Parameters

#### page - optional

Type - string

If you want to deep link the into a page on the wallet you can pass any of the routes to this parameter which are [here](./routing.html#deep-link-page-routes). If not passed in it will default to the main route page.

please note you must only show the follower once [restoreAuthenticationTaskCompleted](./sdk-event-listeners.html#restoreauthenticationcompleted) has fired and [authenticationcompleted](./sdk-event-listeners.html#authenticationcompleted) has fired, `authenticationcompleted` means they are logged in.

Example - `app.component.html`

```html
<lib-wallet-leader
  (loaded)="walletService.listenToWalletEvents()"
></lib-wallet-leader>

<div class="app">
  <div class="app-container">
    <img src="./assets/logo.svg" class="app-logo" alt="logo" />
    <p *ngIf="!(restoreAuthenticationTaskCompleted$ | async)">
      Loading please wait
    </p>
    <ng-container *ngIf="restoreAuthenticationTaskCompleted$ | async">
      <div class="action-buttons">
        <div
          class="logged-out-actions"
          *ngIf="!(isAuthenticationCompleted$ | async)"
        >
          <button (click)="walletService.login()">Login</button>
        </div>

        <div
          class="logged-in-actions"
          *ngIf="isAuthenticationCompleted$ | async"
        >
          <button (click)="walletService.logout()">Logout</button>
        </div>
      </div>

      <!-- Should never show if the user is not logged in or restoreAuthenticationTaskCompleted has not completed -->
      <div class="wallet-follower" *ngIf="isAuthenticationCompleted$ | async">
        <lib-wallet-follower page="/funds"></lib-wallet-follower>
      </div>
    </ng-container>
  </div>
</div>
```

`app.component.ts`

```ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';
import { WalletService } from './services/wallet.service';

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

  constructor(public walletService: WalletService) {}
}
```
