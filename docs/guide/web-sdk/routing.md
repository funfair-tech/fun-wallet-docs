# Routing and Deep Linking

The SDK handles deep linking for you. Every Wallet change performed by the user in the Wallet iframe will silently change the URL without reloading and append a `funWalletRoute` query parameter to the query string. This functionality preserves any other query parameters which exist in your dApp's URL, so there's no need to worry about losing any of your other query string parameters - all it does is add it, or edit it if it already exists.

## Deep Linking With Your dApp

Say you want to deep link into the withdrawal page, or any other page, from a click on your dApp. When the `follower` iframe is loading the SDK passes whatever is in the `funWalletRoute` query parameter, so all you need to do is set the `funWalletRoute` to the page you wish to load before routing your dApp to the page which loads the `follower` iframe.

The SDK handles all the encoding and decoding for you: the dApp just needs to make sure it calls:

```ts
window.funwallet.formatRouterToValue(YOUR_PAGE_VALUE);
```

This will format certain stuff like replace `?` > `_` and `=` > `.` so we can preserve query string parameters for the Wallet itself whilst also keeping the query string in a valid format.

## Deep Link Page Routes

```ts
{
  settings = '/settings',
  accountSettings = '/settings/account-settings',
  securitySettings = '/settings/security-settings',
  securitySettingsTwoFactorAuthentication = '/settings/security-settings/two-factor-authentication',
  securitySettingsApprovedDevices = '/settings/security-settings/approved-devices',
  responsibleGaming = '/settings/responsible-gaming',
  responsibleGamingTakeABreak = '/settings/responsible-gaming/take-a-break',
  responsibleGamingSelfExclude = '/settings/responsible-gaming/self-exclude',
  funds = '/funds',
  convertFunds = '/funds/convert',
  withdrawFunds = '/funds/withdraw',
  // you need to append the token symbol in the query string for this page
  // aka `/funds/deposit/address?symbol=FUN`
  // make sure you use the `formatRouterToValue` method.
  depositAddress = '/funds/deposit/address',
  // you need to append the token symbol in the query string for this page
  // aka `/funds/deposit/crypto?symbol=FUN`
  // make sure you use the `formatRouterToValue` method.
  depositCrypto = '/funds/deposit/crypto',
  // you need to append the token symbol in the query string for this page
  // aka `/funds/deposit/card?symbol=FUN`
  // make sure you use the `formatRouterToValue` method.
  depositCard = '/funds/deposit/card',
  historyTransfers = '/history/transfers',
  historyTransactions = '/history/transactions',
}
```

These are exposed to you on `window.funwallet.deepLinkRouteTypes` so you can use that over hard coding the strings. We recommend that as if we ever did change a URL path (which we would not do unless critical), your code would not need any changing.

### Example usage

```ts
import window from '@funfair-tech/wallet-sdk/window';

const url = `https://example-dapp.io/hello-world?funWalletRoute=${window.funwallet.formatRouterToValue(
  window.funwallet.deepLinkRouteTypes.depositAddress + '?symbol=FUN'
)}`;
```
