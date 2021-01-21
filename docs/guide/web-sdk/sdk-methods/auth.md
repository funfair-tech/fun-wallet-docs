# SDK Methods Authentication

## Login

This opens the authentication pop up for you and can be called on any click event. Please note this should not be called unless it's a proper user click or it could be blocked by some browsers.

```ts
login(): void
```

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';

window.funwallet.sdk.auth.login();
```

:::

::: tab JavaScript

```js
window.funwallet.sdk.auth.login();
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
