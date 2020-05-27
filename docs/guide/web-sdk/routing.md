# Routing And Deep Linking

The SDK handles deep linking for you. Every wallet change which is done by the user in the wallet iframe it will silently change the url without reloading and append a `funWalletRoute` query parameter in the query string. Don't worry it still preserves any other query parameters which exist in your dapp url, all it does is add it to it or edit it if it already exists.

## Deep Linking With Your Dapp

Say you want to deep link into the withdrawal page from a click on your dapp or something. When the `follower` iframe is loading the SDK passes whatever is in the `funWalletRoute` query parameter, so all you need to do is set the `funWalletRoute` to the page you wish to load before routing your dapp to the page which loads the `follower` iframe.

The SDK handles all the encoding and decoding for you the dapp just needs to make sure it calls:

```ts
window.funwallet.formatRouterToValue(YOUR_PAGE_VALUE);
```

This will format certain stuff like replace `?` > `_` and `=` > `.` so we can preserves query string parameters for the wallet itself and also keeping the query string a valid format.

## Deep Link Page Routes

```ts
export enum DeepLinkRouteTypes {
  settings = '/settings',
  accountSettings = '/settings/account-settings',
  securitySettings = '/settings/security-settings',
  securitySettingsTwoFactorAuthentication = '/settings/security-settings/two-factor-authentication',
  securitySettingsApprovedDevices = '/settings/security-settings/approved-devices',
  responsibleGaming = '/settings/responsible-gaming',
  responsibleGamingTakeABreak = '/settings/responsible-gaming/take-a-break',
  responsibleGamingTakeABreakReview = '/settings/responsible-gaming/take-a-break/review',
  responsibleGamingTakeABreakConfirmed = '/settings/responsible-gaming/take-a-break/confirmed',
  responsibleGamingSelfExclude = '/settings/responsible-gaming/self-exclude',
  responsibleGamingSelfExcludeConfirmed = '/settings/responsible-gaming/self-exclude/confirmed',
  responsibleGamingWelcomeBack = '/settings/responsible-gaming/welcome-back',
  responsibleGamingWelcomeBackExtendBreak = '/settings/responsible-gaming/welcome-back/extend-break',
  responsibleGamingWelcomeBackExtendBreakReview = '/settings/responsible-gaming/welcome-back/extend-break/review',
  responsibleGamingWelcomeBackExtendBreakConfirmed = '/settings/responsible-gaming/welcome-back/extend-break/confirmed',
  responsibleGamingWelcomeBackSelfExclude = '/settings/responsible-gaming/welcome-back/self-exclude',
  responsibleGamingWelcomeBackSelfExcludeConfirmed = '/settings/responsible-gaming/welcome-back/self-exclude/confirmed',
  funds = '/funds',
  convertFunds = '/funds/convert',
  withdrawFunds = '/funds/withdraw',
  deposit = '/funds/deposit',
  depositAddress = '/funds/deposit/address',
  depositCrypto = '/funds/deposit/crypto',
  depositCard = '/funds/deposit/card',
  history = '/history',
  historyTransfers = '/history/transfers',
  historyTransactions = '/history/transactions',
  help = '/help',
}
```
