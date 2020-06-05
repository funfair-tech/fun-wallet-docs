# Installing the FunFair Wallet SDK

## NPM

```bash
$ npm install @funfair-tech/wallet-sdk
```

## YARN

```bash
$ npm install @funfair-tech/wallet-sdk
```

## Reference the Web SDK

Once installed you need to drop the below script into your `<head>` HTML tag:

```js
<script
  src="https://dev.wallet.funfair.io/assets/sdk/fun-wallet-sdk.js"
  type="text/JavaScript"
></script>
```

### Example

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

It should be fine to use the latest version of [post-robot](https://github.com/krakenjs/post-robot); however, if you're only installing it to allow the SDK to work then we recommend installing the exact version that's referenced.
