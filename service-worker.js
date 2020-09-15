/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "60cfcf88f61728ae9488a5f8ac4f0db1"
  },
  {
    "url": "assets/css/0.styles.2a23e29f.css",
    "revision": "a859e8804e310dd9e3eddeba01811058"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.988a7fb3.js",
    "revision": "47b6453609a86c61265c72780c9f0608"
  },
  {
    "url": "assets/js/11.780ff465.js",
    "revision": "87bc821b3952fec274830897cf87c700"
  },
  {
    "url": "assets/js/12.ae3e84b0.js",
    "revision": "899f07d7a484167d9132d6f5227b1397"
  },
  {
    "url": "assets/js/13.d774358d.js",
    "revision": "5d57f009b778118dfb88ced4443e9ef5"
  },
  {
    "url": "assets/js/14.021e13fc.js",
    "revision": "392e0548af84f4821e74fb013a26339f"
  },
  {
    "url": "assets/js/15.2d603731.js",
    "revision": "b47c094a838a842ed0e312714a66b816"
  },
  {
    "url": "assets/js/16.376a1b23.js",
    "revision": "521711d8f386cf6e51b272bf5cc78243"
  },
  {
    "url": "assets/js/17.2a767797.js",
    "revision": "9f5c624530171fd9e2f574141146c637"
  },
  {
    "url": "assets/js/18.c53fb4ae.js",
    "revision": "19de8049545ffdff4ef93d6cd126e434"
  },
  {
    "url": "assets/js/19.3eae78b4.js",
    "revision": "6415429defdd06957adec0c386986778"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.1fb0a94a.js",
    "revision": "6e8332ae8a2e5dcf54614737b272da67"
  },
  {
    "url": "assets/js/21.58f8112b.js",
    "revision": "57964ed1311407b9ecb3c4be59cb16c5"
  },
  {
    "url": "assets/js/22.79ddad98.js",
    "revision": "5bb45799b1f73926538739f17ed3891c"
  },
  {
    "url": "assets/js/23.6d7e35cb.js",
    "revision": "be706c31793eeef82b8e8997286aaa87"
  },
  {
    "url": "assets/js/24.73c62580.js",
    "revision": "7c93e1e811e83fed45f6f48f31977492"
  },
  {
    "url": "assets/js/25.460cc3bf.js",
    "revision": "0ad392abab323dcdcc550363d6959bab"
  },
  {
    "url": "assets/js/26.608e06f1.js",
    "revision": "a868dae292cd85655e957552d1911d33"
  },
  {
    "url": "assets/js/27.042ed5f3.js",
    "revision": "6ac37f72b54e6a1ac85b859adda990be"
  },
  {
    "url": "assets/js/28.aa635f39.js",
    "revision": "2056432b76c9f232aaa78bea26ba5fe1"
  },
  {
    "url": "assets/js/29.f680e3b1.js",
    "revision": "9a697bc801964f2ba2bfcb2ea8672362"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.4801961a.js",
    "revision": "3efb7e4f66ca3f1b38f5448e1c0288f6"
  },
  {
    "url": "assets/js/31.ba9af458.js",
    "revision": "e4a4badd99cb5ae8ffad2dd8fb67b6ce"
  },
  {
    "url": "assets/js/32.3981bc5b.js",
    "revision": "9f644fff2d5b1f71eaec7d8b31ea1af4"
  },
  {
    "url": "assets/js/33.e6e78cd7.js",
    "revision": "223a74d10b2c2ca21d2d32183125e5a5"
  },
  {
    "url": "assets/js/34.564c4fb3.js",
    "revision": "4e61f5b4efa7da7ff8c3fec31a6cf710"
  },
  {
    "url": "assets/js/35.7159e194.js",
    "revision": "5f645bbadfdd1f055fad7387f4c0c650"
  },
  {
    "url": "assets/js/36.e4151605.js",
    "revision": "b25140320cbc47e9da435b2f86aab338"
  },
  {
    "url": "assets/js/37.51a347a2.js",
    "revision": "0681839750a8cbb23264882363a065dd"
  },
  {
    "url": "assets/js/38.9dce5b8a.js",
    "revision": "a3bd395f036f0764f0a81da1df504189"
  },
  {
    "url": "assets/js/39.95abdc42.js",
    "revision": "a4915d63b4f7912bdf25b76501269b84"
  },
  {
    "url": "assets/js/4.e2554563.js",
    "revision": "387cb7d21a485b2f5dfe59c95d0a975e"
  },
  {
    "url": "assets/js/40.f44a2227.js",
    "revision": "4054db5af20ff46e5aedd491277caeb2"
  },
  {
    "url": "assets/js/41.926f1931.js",
    "revision": "d733e2d0c2157c7e4903d03b70f62f32"
  },
  {
    "url": "assets/js/42.54b95f6d.js",
    "revision": "c02e5d78cebd990b252aba677646e831"
  },
  {
    "url": "assets/js/43.31fa7f20.js",
    "revision": "fbe1ddfc5b2153c0db2820389f2a66b3"
  },
  {
    "url": "assets/js/44.612967de.js",
    "revision": "c8925dfb617122886aa6ee82541094a8"
  },
  {
    "url": "assets/js/45.6f4d4b9b.js",
    "revision": "b39414cefec86101b9e87a0121996e53"
  },
  {
    "url": "assets/js/46.e4aa6039.js",
    "revision": "d119d55ab853ed0a371cc60d66eda983"
  },
  {
    "url": "assets/js/47.24299cbc.js",
    "revision": "e7fd9aab26b2cca11925281d2d086281"
  },
  {
    "url": "assets/js/48.0f7bf1de.js",
    "revision": "ca2484905990a4a49c745c163b526786"
  },
  {
    "url": "assets/js/49.0d62712b.js",
    "revision": "44c7f45f89bf23c296cf03735aff29f3"
  },
  {
    "url": "assets/js/5.b1c6dba4.js",
    "revision": "8f832ef27a0f19d0c406e12204eaeec2"
  },
  {
    "url": "assets/js/50.02c321c9.js",
    "revision": "2a4eeeefdc7fa4f629a938a6e961b335"
  },
  {
    "url": "assets/js/6.ebfbf5b0.js",
    "revision": "bd4aa7d3eef4b89d105d7669c1c2cb89"
  },
  {
    "url": "assets/js/7.57e275c0.js",
    "revision": "af5d1acb85b1a2af4dd96567718358d6"
  },
  {
    "url": "assets/js/8.e1438e91.js",
    "revision": "a18e6666d5c13ddb631366b8ec1ecd46"
  },
  {
    "url": "assets/js/9.b2848def.js",
    "revision": "7a6e702daf3c845b2d394701280d7c60"
  },
  {
    "url": "assets/js/app.d2887ffc.js",
    "revision": "739869904c2f40cc20c623097416bd4a"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "629378ef62f43a19097b6329379dcbfc"
  },
  {
    "url": "fun-wallet-provider-flow.png",
    "revision": "68d9ce5e8921050db76f1077844ae450"
  },
  {
    "url": "fun-wallet-sdk-listeners.svg",
    "revision": "d8ddf8c005fa7f8b97642812841ddf65"
  },
  {
    "url": "fun-wallet-sdk-methods.svg",
    "revision": "5e16821dbb08db331038d25ff1a2db4b"
  },
  {
    "url": "guide/how-does-it-work/blooms.html",
    "revision": "3c46802e45e9d6509cc8b954eb380a3d"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "dfd91cf98d0e4ebdcd6dc21395837ca1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "4a390660039d418668c87ad264a49cf4"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "8db15fd98331786ee829698f8772b11c"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "3eb51757b2832725781c80aaee231844"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "dda1a38459c95ce3ac1c8098d5f13c3a"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "0020b00142cd795392e6632ad6e71e66"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "e9b3829fcb206b6aebfb92d3b4b6923f"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "fbf8244a06740b4d750247ea452d15ef"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "b6c3af184502a680fc8ea1beeddbcf60"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "b8a2772255c69ccbef61532a17a13a71"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "1937133f33eeeda7ec2aa6772d2957fe"
  },
  {
    "url": "guide/index.html",
    "revision": "7087a09c5f4fb65883347ab69cb26ecb"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "670725d8de629894b27a124086db0013"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "2d9af70318463cfd81075985ae0eccf2"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "0e772a97b20818f828f4b6d2e82b9530"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "bffefeda13471f9394d9b8232cc3a77c"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "de8262345dac7c2ccb5ac1c54f6e9e95"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "81e3ff4e647f3267341b624edae4e7ab"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "b6f319cbe683be975bb2ab7dabd8f93d"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "e1873ec6e4315313f0143d15b2cc0670"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "59c1be1016a790c7ee617bf79279cdf3"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "b7efd3fd7b9259f17ce6eb55e9258329"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "48d172d53ea59d009d93aac49d6e0ff9"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "81165cdf481cf2af185aa81316c4c303"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "c592140fbbb5cd7fafbd9ad8e1f61444"
  },
  {
    "url": "guide/web-sdk/another-framework.html",
    "revision": "4ded3e55640aae2803084c72a5325b99"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "ca360dca35e13370b6a9c7b4980057a7"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "0afb94e7ff7c74847cad7da621045de3"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4ac5518ef27403ecba725cd32255c47e"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "e1eaa607bccc16cbd8fc21888878f50d"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "4669e8a3f03410c7c9e4d274dbebea03"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "23894e7659b3f692642e0ed147bbad2c"
  },
  {
    "url": "guide/web-sdk/native-js.html",
    "revision": "30252cadad294b3b91b2e24397af0bee"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "d0e060d806f89d00ac64ac474030cc12"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "68dda1994ae9d38e9e4715da11d124e4"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "9cafdc24bc77381b101d086ab6d89557"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "49950012e96a15c45267ca72036e6934"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "bbebae1db96a31aa1e2b892d503b354f"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "23ab7a3717811bc4c7545585d55274b7"
  },
  {
    "url": "leader-and-popup-authentication-exchange.svg",
    "revision": "d85822300d9e8afea03c6c7b3d88680f"
  },
  {
    "url": "leader-follower-authentication-flow.png",
    "revision": "3305e47990038d576b3940105a60c47e"
  },
  {
    "url": "login-and-recovery-token-generation.svg",
    "revision": "8d32ea4d85aa0868207213b8ab82c413"
  },
  {
    "url": "logo.svg",
    "revision": "02850c4cabcbbe69b13b1281d108b5dd"
  },
  {
    "url": "recovery-flow.svg",
    "revision": "356f767864078e9eea4f454a5af17fdb"
  },
  {
    "url": "registration-flow.svg",
    "revision": "e6bca7cc05505f13ef7432035542aeb8"
  },
  {
    "url": "restore-session.png",
    "revision": "b049ed2a5dcb9662926c339a542aaf36"
  },
  {
    "url": "sign-contract.jpg",
    "revision": "225c5fd62d499a293dab1c7a208d4332"
  },
  {
    "url": "sign-text.jpg",
    "revision": "8b7f7ada55a85cc8269703243af00df5"
  },
  {
    "url": "sign-transaction.jpg",
    "revision": "5bf2a991842cc14405d81f1459ca403b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
