# Installing FunWallet SDK

## NPM

```bash
$ npm install @funfair/wallet-sdk
```

## YARN

```bash
$ npm install @funfair/wallet-sdk
```

## Reference The Web SDK

Once installed you need to drop the below script into your `<head>` html tag:

```js
<script
  src="https://dev.wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
  type="text/JavaScript"
></script>
```

### example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script
      src="https://dev.wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
      type="text/JavaScript"
    ></script>
  </head>

  <body></body>
</html>
```

## Peer Dependencies

```json
  "post-robot": "9.0.36"
```

### NPM

```bash
$ npm install post-robot@9.0.36
```

### YARN

```bash
$ yarn add post-robot@9.0.36
```

If you want to use the latest version of `post-robot` that is fine but if your only installing this to allow the SDK to work then just install the exact version.
