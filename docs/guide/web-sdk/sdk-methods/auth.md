# SDK Methods Authentication

## Login

This will load a login screen for the user to enter their details. The promise will not resolve until successful or unsuccessful actions has happened on the authentication login window. If the user closes the login screen then the `login` promise will reject, if the user successfully authenticates the `login` promise will resolve successfully returning back `AuthenticationCompletedResponeData` which is exposed in our sdk typings and shown below.

**NOTE**
Chrome and other browsers can block popups if triggered without a genuine user click. Make sure whenever you call the authentication method that it's from a click event from the user to avoid any cross-browser issues.

```ts
login(): Promise<AuthenticationCompletedResponeData>
```

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

export interface ExclusionStatusResponse {
  status: ExclusionStatusType;
  startTimestamp?: number | undefined;
  durationDays?: number | undefined;
  activeTimestamp?: number | undefined;
}

export interface NetworkDetails {
  selectedNode: string;
  backupNodes: string[];
  enabled: boolean;
  name: string;
  id: number;
  chainId: number;
  nativeCurrency: string;
  networkBlockExplorer?: NetworkBlockExplorer | undefined;
  feeWarningThreshold: BigNumber;
  supportsFiatPrices: boolean;
  supportsWalletConnect: boolean;
  isProductionNetwork: boolean;
  fixedGasPrice?: string | undefined;
}
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

try {
  const authenticationCompletedResponseData = await window.funwallet.sdk.auth.login();
  console.log(authenticationCompletedResponseData);
} catch (error) {
  console.error('Unauthentication failed!');
}
```

:::

::: tab JavaScript

```js
try {
  const authenticationCompletedResponseData = await window.funwallet.sdk.auth.login();
  console.log(authenticationCompletedResponseData);
} catch (error) {
  console.error('Unauthentication failed!');
}
```

:::

::::

## Authenticated

Returns the authenticated status of the user on the Wallet.

```ts
authenticated(): Promise<boolean>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const loggedIn = await window.funwallet.sdk.auth.authenticated();
```

:::

::: tab JavaScript

```js
const loggedIn = await window.funwallet.sdk.auth.authenticated();
```

:::

::::

## Logout

This logs out all authenticated instances of the Wallet, including the leader.

```ts
logout(): Promise<void>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.auth.logout();
```

:::

::: tab JavaScript

```js
await window.funwallet.sdk.auth.logout();
```

:::

::::

## User

### User accountId

This gets the FunFair Wallet user account ID for that user. This will be the same whatever dApp they log in to - it's a global ID.

```ts
id(): Promise<string>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const userAccountId = await window.funwallet.sdk.auth.user.id();
```

:::

::: tab JavaScript

```js
const userAccountId = await window.funwallet.sdk.auth.user.id();
```

:::

::::

### User Active

The SDK handles all `mouse`, `clicks` and `scroll` events from the dApp window. This method is here if you have an edge case integration where you have another iframe in the dApp which the user has to use. In this case you need to emit messages back from that iframe to your dApp, which then should call this SDK method to keep the JWT token refreshing to make sure it does not fire an inactivity event which logs all instances out of the Wallet. We suggest calling this every 30 seconds. If you don't have any edge cases like this in your dApp, please ignore.

```ts
active(): Promise<void>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.auth.user.active();
```

:::

::: tab JavaScript

```js
await window.funwallet.sdk.auth.user.active();
```

:::

::::

### Reject approval modal

This SDK method allows you to reject an approval modal on behalf of the user. A good use case for this is for example if your making a betting game which takes bets every 15 seconds, if the user has made a bet and is looking at the approval modal and doesnt accept or reject it in time before the bet starts, you can then trigger this to close it for them so the UX is nice, ready for the next bet. Obviously this is just an example and can be used in many other user cases.

```ts
rejectApprovalModal(): Promise<void>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.auth.user.rejectApprovalModal();
```

:::

::: tab JavaScript

```js
await window.funwallet.sdk.auth.user.rejectApprovalModal();
```

:::

::::

## App

### JWT Token

Get the dApp's JWT. This can be used to hook in your own authentication mechanism. This will be signed by your dApp's unique key pair and can be validated server side by the public key, which you can find on the configuration page on the dApp self-service portal. The dApp JWT gets extended before it expires, as long as the the user passes the active checks (moving mouse, clicks etc) and when it does it fires the event listener [appJwtExtended](/guide/web-sdk/sdk-event-listeners.html#appjwtextended). You must listen to `appJwtExtended` event listener, otherwise the JWT you send to your server will never extend when the user is being active, meaning once the first token expires your server will return 403s for your requests.

```ts
jwt(): Promise<string>
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

const appJwtToken = await window.funwallet.sdk.auth.app.jwt();
```

:::

::: tab JavaScript

```js
const appJwtToken = await window.funwallet.sdk.auth.app.jwt();
```

:::

::::
