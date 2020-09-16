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
    "revision": "68db66fbcec5a5a54a1732b4cf116162"
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
    "url": "assets/js/10.b8a1f6fe.js",
    "revision": "dbf2240f7de519756062b0fde5d11764"
  },
  {
    "url": "assets/js/11.e753c150.js",
    "revision": "1a502577035c574757caa7002f4c1e96"
  },
  {
    "url": "assets/js/12.269d10b3.js",
    "revision": "8a3988a7322f922b8693565598080d63"
  },
  {
    "url": "assets/js/13.d774358d.js",
    "revision": "5d57f009b778118dfb88ced4443e9ef5"
  },
  {
    "url": "assets/js/14.c206fe91.js",
    "revision": "0e72de102c2b3a80b8df17fca440e12b"
  },
  {
    "url": "assets/js/15.2d603731.js",
    "revision": "b47c094a838a842ed0e312714a66b816"
  },
  {
    "url": "assets/js/16.fc9eee4a.js",
    "revision": "4e0da963616865c213881ee5dffbce14"
  },
  {
    "url": "assets/js/17.2a767797.js",
    "revision": "9f5c624530171fd9e2f574141146c637"
  },
  {
    "url": "assets/js/18.8f6db7f1.js",
    "revision": "1dd037ce3f588734af083fb90b61d0f1"
  },
  {
    "url": "assets/js/19.4b193deb.js",
    "revision": "6c66df2682530a12ead4eed87b8bc656"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.b69f7de3.js",
    "revision": "b561d589528de9a61708951f62a2f24c"
  },
  {
    "url": "assets/js/21.ead6901f.js",
    "revision": "15ed102334460ebe1de688210f7ea24f"
  },
  {
    "url": "assets/js/22.c3a31f03.js",
    "revision": "b7bfe5b614a3a16b79725f2b9d89442f"
  },
  {
    "url": "assets/js/23.bf1961e5.js",
    "revision": "4babd5f3a6f9c40fd73754a2a2c67e55"
  },
  {
    "url": "assets/js/24.d1b9bfc8.js",
    "revision": "61ea04fc4875e4f38aa24506adb4c370"
  },
  {
    "url": "assets/js/25.17dd9631.js",
    "revision": "b436fbc5f81ba25a52fc6a710ee50b2c"
  },
  {
    "url": "assets/js/26.434340a4.js",
    "revision": "940d361e38833246fa4a6d0a16ca300a"
  },
  {
    "url": "assets/js/27.ff4e9f0e.js",
    "revision": "95b90d67daf026ec0d4901b3dd830805"
  },
  {
    "url": "assets/js/28.50b1b966.js",
    "revision": "b9739a6f5f94c7bb24be052bcb0cc470"
  },
  {
    "url": "assets/js/29.bf512a76.js",
    "revision": "4a60c02352f66752411f8fd448a89c5e"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.94a9aa1b.js",
    "revision": "e644c5b06eac8d35725743fb777b92ec"
  },
  {
    "url": "assets/js/31.55639adb.js",
    "revision": "d20d4c087fb131c6f54863489bbb5cb8"
  },
  {
    "url": "assets/js/32.8cd89f83.js",
    "revision": "abcaf5f48b0d0141533942bdb5d9f53e"
  },
  {
    "url": "assets/js/33.8400ccce.js",
    "revision": "039d7b7142cd65ae71cd38aa3457dbd8"
  },
  {
    "url": "assets/js/34.5dbfac7c.js",
    "revision": "a949dd3e8e88a8a8d58bc10ba7fb96d5"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.d15471d4.js",
    "revision": "14993a3a832f43e7e5cf7ec1799a40fd"
  },
  {
    "url": "assets/js/37.eadcddb5.js",
    "revision": "e034abf8469c1f44c76f6c92900aca42"
  },
  {
    "url": "assets/js/38.f6daabee.js",
    "revision": "620bfa842282bdfa17b2153f9f242b2a"
  },
  {
    "url": "assets/js/39.9faecb33.js",
    "revision": "dec6530eb75f6a067c43fa39f97fdfc9"
  },
  {
    "url": "assets/js/4.903bb4c8.js",
    "revision": "686f40135815e1b92b21d077b9867af9"
  },
  {
    "url": "assets/js/40.233d4b96.js",
    "revision": "423086549a950b4aabd9f8fd8d2671cf"
  },
  {
    "url": "assets/js/41.c0d1fc95.js",
    "revision": "7debbc89cdea05509d7946922a731e71"
  },
  {
    "url": "assets/js/42.8f4aee7d.js",
    "revision": "ff2e448f2584ab83559c30b091ba04e9"
  },
  {
    "url": "assets/js/43.43725857.js",
    "revision": "b8c7b07b14d0fe1f2bcf8a42ba6405d2"
  },
  {
    "url": "assets/js/44.612967de.js",
    "revision": "c8925dfb617122886aa6ee82541094a8"
  },
  {
    "url": "assets/js/45.7bfc1ab6.js",
    "revision": "af29a5e912cec19677ff5495e2037078"
  },
  {
    "url": "assets/js/46.7626d943.js",
    "revision": "6107e78bf59d1676544c2ed777a7da06"
  },
  {
    "url": "assets/js/47.071fa328.js",
    "revision": "1a81b1675ce58f1655167464e16661d3"
  },
  {
    "url": "assets/js/48.3c37fa6b.js",
    "revision": "dbabb5db42addecd03e37b6c87e22f59"
  },
  {
    "url": "assets/js/49.9665e80e.js",
    "revision": "e440bbf1f2f1af00a60da5776cba627b"
  },
  {
    "url": "assets/js/5.b1c6dba4.js",
    "revision": "8f832ef27a0f19d0c406e12204eaeec2"
  },
  {
    "url": "assets/js/6.68dfb2dd.js",
    "revision": "e30613e1f0553878ab6b48b03cab9b93"
  },
  {
    "url": "assets/js/7.57e275c0.js",
    "revision": "af5d1acb85b1a2af4dd96567718358d6"
  },
  {
    "url": "assets/js/8.a1823884.js",
    "revision": "17a529262d2d60816b70d47d525b756f"
  },
  {
    "url": "assets/js/9.06544d44.js",
    "revision": "4175d51a09db4d93c8f307ba9effb6bc"
  },
  {
    "url": "assets/js/app.4ab52c9a.js",
    "revision": "2159fd4e342774e37cc702d008680855"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "ba6a7d0dba17b58a68906574d8199ac6"
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
    "revision": "8c853042a9a43bab78e97a9bce1cb436"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "cccf3424bb26e40fcbbcf3376cb12404"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "7a48e6606573460092d0034e0281a18d"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "d40a2b224f319ef5ae4241ade9ee1f95"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "bb7eabf306b3d83d7b3b3745c8ee0a91"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "cf2418a1322968e042ca3d5997860d1f"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "ac63d39bfb1cab55e69ff59c1edd6454"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "7e0a8c43464e715fb5f25945492225e0"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "0e1efcff29d007b849bfa227956f3fd2"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "b0b108f882a21d2ef3773769964b70af"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "53f864fdfc11962f6fc7ae9f9eb18039"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "d76ec25fbb4ec734ad8aeacb3356dfec"
  },
  {
    "url": "guide/index.html",
    "revision": "093db2b54afe63da78ac4c977d55d0b3"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "16b5f0edbf37a59b9d7481071b9ad3cf"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "61187b34dc1de91e7c27323558b78960"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "90158ed74cc6110ae24ae7b0aeb3d9f5"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "a902d4bd223185ddc74d698d69c6a5a1"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "361417761232407e4eff36fe9619ef6b"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "a1593c197c9fc4bcb780e5fa5a20550a"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "78472e6e617a0d548410dba520b599d0"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "ed92f0e5d2213abc65df62b0ca410d3b"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "8e70d4bcfe0d4a1e3b005f35c5461ab4"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "ec2031ef06dcecc92992513b7f6d1cc8"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "bd16e0d25cf61912dfe4b38522ae4b95"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "78c50c615639839b04050201e2d95b83"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "bdc6629e320dec7586dc9bab50a56864"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "03a8d0ab7013b91fdc422de2e7372999"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "cee01f5d26c9d5550f8c5620e21e7e6a"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "0816fb47c6bb5a4c310082a22ad91290"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4aafa538d08cdb4fe5ffca530de99bd1"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "4dbef36a4abee0efc983d68af71f7e56"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "9d77df7eab014546df0b8ab9a85d7427"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "3e2cd4398f070f91b260e982f9a21b72"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "eb059a73984f6ca00a9fa5cd20f72acb"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "aca2f8d0b6ce621d4020dc223b108dc2"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "009b2f871dca2ae0325a9e77d0aee1c2"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "5f29545a871a60b661b09266d7992356"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "6ebccc13ccdae927a3e54a80fe14a473"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "7173c3fae9de080fa6392e41f6b4512b"
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
