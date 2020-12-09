# SDK Methods

Please note none of the SDK calls will work if the SDK has not been [initialized](/guide/web-sdk/initialising-the-sdk.html). The SDK will throw errors telling you this if you try to do so.

## init

This initializes the SDK and sets up communicate with the leader instance and the Wallet. If using react, vue or angular wallet packages you do not need to worry about this.

```ts
public init(options?: InitOptions): void
```

`Parameters`:

- `options` - The options for the SDK

```js
{
  // the `NgZone` class angular allows you to inject
  ngZone?: NgZone | undefined;
  // The sdk will inject the mobile nav bar at the bottom of the body automatically for you.
  // Now this should be fine for most dapps we give the flexibility to specify which class you
  // want it to inject to. It will pick the first class it finds. This can be if you want it to inject in a different place in the DOM
  // so you can manipulate z-index layouts. For example if you had your own sticky bottom nav, you
  // may want to handle some css yourself for it and this gives you full flexibility.
  // Do not need to worry about this if you are happy with how it injects by default.
  mobileNavInjectToClass?: string | undefined;
}
```

`JavaScript`:

```js
window.funwallet.sdk.init();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.sdk.init({ ngZone: this._zone });
```

---

## openWalletAuthenticationPopUp

This opens the authentication pop up for you and can be called on any click event. Please note this should not be called unless its a proper user click or it could be blocked by some browsers

```ts
public openWalletAuthenticationPopUp(): void
```

`JavaScript`:

```js
window.funwallet.sdk.openWalletAuthenticationPopUp();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.sdk.openWalletAuthenticationPopUp();
```

---

## userAccountId

This gets the fun wallet user account id for that user. This will be the same whatever dApp they login to, it's a global ID.

```ts
public userAccountId(): void
```

`JavaScript`:

```js
window.funwallet.sdk.userAccountId();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.sdk.userAccountId();
```

---

## registerFollowerInstance

This initializes an authenticated follower instance for you to display Wallet UI with. If the leader is not authenticated this will throw an error.

```ts
public async registerFollowerInstance(): Promise<void>
```

`JavaScript`:

```js
await window.funwallet.sdk.registerFollowerInstance();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.registerFollowerInstance();
```

---

## versionInfo

Returns the Wallet's version information.

```ts
public async versionInfo(options?: InitOptions): Promise<VersionInfo>
```

`VersionInfo`:

```js
{
  clientVersion: string,
  serverVersion: string,
}
```

`JavaScript`:

```js
const versionInfo = await window.funwallet.sdk.versionInfo();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const versionInfo = await window.funwallet.sdk.versionInfo();
```

---

## isAuthenticated

Returns the authenticated status of the user on the Wallet.

```ts
public async isAuthenticated(): Promise<boolean>
```

`JavaScript`:

```js
const loggedIn = await window.funwallet.sdk.isAuthenticated();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const loggedIn = await window.funwallet.sdk.isAuthenticated();
```

---

## ethereumAddress

Returns the authenticated user's Ethereum address. If they're not authenticated it will return `null`.

```ts
public async ethereumAddress(): Promise<string | null>
```

`JavaScript`:

```js
const ethereumAddress = await window.funwallet.sdk.ethereumAddress();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const ethereumAddress = await window.funwallet.sdk.ethereumAddress();
```

---

## currentNetwork

Returns the authenticated user's current network details.

```ts
public async currentNetwork(): Promise<NetworkDetails | undefined>
```

`NetworkDetails`:

```ts
{
  name: string;
  id: Networks;
  providerUrl: string;
  enabled: boolean;
}
```

`Networks`:

```ts
{
  mainnet = 1,
  ropsten = 3,
  rinkeby = 4,
  kovan = 42,
  novichok = 1984,
  bracknell = 1999,
  unknown = -1,
}
```

`JavaScript`:

```js
const networkState = await window.funwallet.sdk.currentNetwork();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const networkState = await window.funwallet.sdk.currentNetwork();
```

---

## enabledNetworks

Returns the enabled networks set by the wallet dApp config.

```ts
public async enabledNetworks(): Promise<NetworkDetails[] | undefined>
```

`JavaScript`:

```js
const enabledNetworks = await window.funwallet.sdk.enabledNetworks();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const enabledNetworks = await window.funwallet.sdk.enabledNetworks();
```

---

## currentCurrency

Returns the authenticated user's current currency.

```ts
public async currentCurrency(): Promise<string>
```

`JavaScript`:

```js
const currentCurrency = await window.funwallet.sdk.currentCurrency();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const currentCurrency = await window.funwallet.sdk.currentCurrency();
```

---

## setCurrency

Allows the dApp to set the currency for the wallet. This can be useful if you have your own currency UI and on change of that you want to make sure the wallet shows in the same currency the user has selected.

```ts
public async setCurrency(fiatCurrency: FiatCurrencyType): Promise<void>
```

`FiatCurrencyType`:

```ts
export enum FiatCurrencyType {
  CAD = 'CAD',
  JPY = 'JPY',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  KRW = 'KRW',
  CNY = 'CNY',
  SGD = 'SGD',
}
```

`JavaScript`:

```js
import { FiatCurrencyType } from '@funfair-tech/wallet-sdk';

await window.funwallet.sdk.setCurrency(FiatCurrencyType.USD);
```

`TypeScript`:

```ts
import { FiatCurrencyType } from '@funfair-tech/wallet-sdk';

await window.funwallet.sdk.setCurrency(FiatCurrencyType.USD);
```

---

## userActive

The sdk handles all `mouse`, `clicks` and `scroll` events from the dapp window. This method is here if you have a edge case integration where you have another iframe in the dapp which the user has to use. In this case you need to emit messages back from that iframe to your dapp which then should call this sdk method to keep the JWT token refreshing to make sure it does not fire an inactivity event which logs all instances out of the Wallet. We suggest calling this every 30 seconds. If you don't have any edge cases like this in your dapp please ignore.

```ts
public async userActive(): Promise<void>
```

`JavaScript`:

```js
await window.funwallet.sdk.userActive();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.userActive();
```

---

## logout

This logs out all authenticated instances of the wallet including the leader.

```ts
public async logout(): Promise<void>
```

`JavaScript`:

```js
await window.funwallet.sdk.logout();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.logout();
```

---

## kycModalOpen

This manually starts the kyc process which pops up the kyc modal. This can be used if the initial KYC popup got closed and the account now wanted to KYC. If you call this when the account has already been KYC-verified then it will throw a error.

```ts
public async kycModalOpen(): Promise<void>
```

`JavaScript`:

```js
await window.funwallet.sdk.kycModalOpen();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.kycModalOpen();
```

---

## isKycVerified

Returns the kyc verification status of the user on the wallet. Event listeners will fire as well to keep this value updated.

```ts
public async isKycVerified(): Promise<boolean>
```

`JavaScript`:

```js
const isKycVerified = await window.funwallet.sdk.isKycVerified();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const isKycVerified = await window.funwallet.sdk.isKycVerified();
```

---

## getWalletFollowerURL

Build up the follower URL for you and adds all the context in the query string so you do not have to worry about it.

```ts
public getWalletFollowerURL(): string
```

`JavaScript`:

```js
const walletFollowerUrl = window.funwallet.getWalletFollowerURL();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const walletFollowerUrl = window.funwallet.getWalletFollowerURL();
```

---

---

## setLanguage

Build the language for the wallet (default is en).

```ts
public setLanguage(lang: string): string
```

`JavaScript`:

```js
window.funwallet.setLanguage('en');
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.setLanguage('en');
```

---

### signAndVerifyInterpretedBytes

This method is used to call contract calls we whitelist, for example `openFateChannel`, without the need for the approval modal.

```ts
 public async signAndVerifyInterpretedBytes(
    executor: SignAndVerifyInterpretedExecutors,
    version: number,
    request: SignAndVerifyInterpretedExecutorsRequest,
  ): Promise<string>
```

`SignAndVerifyInterpretedExecutors`:

```ts
export enum SignAndVerifyInterpretedExecutors {
  openFateChannel = 'openFateChannel',
}
```

`SignAndVerifyInterpretedExecutorsRequest`:

```ts
export interface OpenFateChannelRequest {
  inputData: string[];
  serverSignature: string;
}

export type SignAndVerifyInterpretedExecutorsRequest = OpenFateChannelRequest;
```

Example usage:

`JavaScript`:

```js
import { SignAndVerifyInterpretedExecutors } from '@funfair-tech/wallet-sdk';

const signature = await window.funwallet.sdk.signAndVerifyInterpretedBytes(
  SignAndVerifyInterpretedExecutors.openFateChannel,
  1,
  {
    inputData: [
      '0x0000000000000000000000002fa31aca647ec38d41e39fc636c7b1874676f795',
      '0xc2d51fbe40a4d574a5d4715379c227346ff6f5f764c3135d494c47a1899f0b80',
      '0x0000000000000000000000001247d144c0d73d46b1a967b8bc4dbde037422a1d',
      '0x0000000000000000000000000000000000000000000000000000059d555a8500',
      '0x000000000000000000000000f887491c5132ddd7ba59a04ec5ebc6e3a03df868',
      '0x00000000000000000000000000000000000000000000000000005af3107a4000',
      '0x0000000000000000000000003bad9dbe1e4d0704193aa4bdeaa60770dd170d1c',
      '0x000000000000000000000000030f24602a83abf644e41d7b06c4821d0e36fc43',
      '0x2f00f9ec88b553f6fbc5bd527f8b3944ce9ad4da1758b4b0c1a46de6aadf02b1',
      '0xf626d7153b8eaf3a66da6999e278cec43c78b23755d3af74add18f5fd5e77262',
      '0x0000000000000000000000000000000000000000000000000000000000000004',
      '0x0000000000000000000000009e1b3a08b7405919864a9a51187d55c0ce95abf2',
      '0x000000000000000000000000000000000000000000000000000000005e468dc6',
    ],
    serverSignature:
      '0x3ad55ae3037dbc1b4a2d5ac21d374fa8569202d7d86f9f6e90c874cbe28580397c1c2b3560dd9e1c43cde39797eabc92e5e3bb4ab2c760bf580d7c327554ee5d1c',
  }
);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import { SignAndVerifyInterpretedExecutors } from '@funfair-tech/wallet-sdk';

const signature = await window.funwallet.sdk.signAndVerifyInterpretedBytes(
  SignAndVerifyInterpretedExecutors.openFateChannel,
  1,
  {
    inputData: [
      '0x0000000000000000000000002fa31aca647ec38d41e39fc636c7b1874676f795',
      '0xc2d51fbe40a4d574a5d4715379c227346ff6f5f764c3135d494c47a1899f0b80',
      '0x0000000000000000000000001247d144c0d73d46b1a967b8bc4dbde037422a1d',
      '0x0000000000000000000000000000000000000000000000000000059d555a8500',
      '0x000000000000000000000000f887491c5132ddd7ba59a04ec5ebc6e3a03df868',
      '0x00000000000000000000000000000000000000000000000000005af3107a4000',
      '0x0000000000000000000000003bad9dbe1e4d0704193aa4bdeaa60770dd170d1c',
      '0x000000000000000000000000030f24602a83abf644e41d7b06c4821d0e36fc43',
      '0x2f00f9ec88b553f6fbc5bd527f8b3944ce9ad4da1758b4b0c1a46de6aadf02b1',
      '0xf626d7153b8eaf3a66da6999e278cec43c78b23755d3af74add18f5fd5e77262',
      '0x0000000000000000000000000000000000000000000000000000000000000004',
      '0x0000000000000000000000009e1b3a08b7405919864a9a51187d55c0ce95abf2',
      '0x000000000000000000000000000000000000000000000000000000005e468dc6',
    ],
    serverSignature:
      '0x3ad55ae3037dbc1b4a2d5ac21d374fa8569202d7d86f9f6e90c874cbe28580397c1c2b3560dd9e1c43cde39797eabc92e5e3bb4ab2c760bf580d7c327554ee5d1c',
  }
);
```

---

## appJwtToken

Get the dApp's JWT.

```ts
public async appJwtToken(): Promise<string>
```

`JavaScript`:

```js
const appJwtToken = await window.funwallet.sdk.appJwtToken();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const appJwtToken = await window.funwallet.sdk.appJwtToken();
```

---

## getMarketingOptInStatus

Get marketing opt-in status

```ts
public async getMarketingOptInStatus(): Promise<boolean | null>
```

`JavaScript`:

```js
const marketingOptInStatus = await window.funwallet.sdk.getMarketingOptInStatus();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const marketingOptInStatus = await window.funwallet.sdk.getMarketingOptInStatus();
```

---

## updateMarketingOptInStatus

Update marketing opt-in status. Will throw if it did not update the status successfully.

```ts
public async updateMarketingOptInStatus(status: boolean): Promise<void>
```

`JavaScript`:

```js
await window.funwallet.sdk.updateMarketingOptInStatus(true);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.updateMarketingOptInStatus(true);
```

---

## gasRecommendations

Get the gas recommendations

```ts
public async gasRecommendations(): Promise<NetworkGasRecommendationsResponse>
```

`NetworkGasRecommendationsResponse`:

```ts
export interface NetworkGasRecommendationsResponse {
  recommendations: {
    speed: number;
    gasPrice: string;
    estimatedExecutionTime: number;
  }[];
  recommendedSpeed: number;
}
```

`JavaScript`:

```js
const gasRecommendations = await window.funwallet.sdk.gasRecommendations();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';
import { NetworkGasRecommendationsResponse } from '@funfair-tech/wallet-sdk';

const gasRecommendations = await window.funwallet.sdk.gasRecommendations();
```
