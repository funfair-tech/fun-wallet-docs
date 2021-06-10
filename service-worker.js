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
    "revision": "b3ee856c12a122e70a4c632506684a70"
  },
  {
    "url": "assets/css/0.styles.c3a9366e.css",
    "revision": "5e3a20b2ebd5efe2d3b865e5af81741e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.136bda5a.js",
    "revision": "80f810d56a347cc120f3e97a7ad84cb7"
  },
  {
    "url": "assets/js/11.716ed28a.js",
    "revision": "2295ddfa8731d426ad222a0299d9c586"
  },
  {
    "url": "assets/js/12.39330445.js",
    "revision": "7af29c9b606be98e57a811223eeffcbc"
  },
  {
    "url": "assets/js/13.5be39116.js",
    "revision": "9544adf06b2b3d49c8518c9844e13f3d"
  },
  {
    "url": "assets/js/14.7fd39011.js",
    "revision": "7967488643be0c7a525a381b656ce36c"
  },
  {
    "url": "assets/js/15.7abc8001.js",
    "revision": "5c27583e62df126d57487bb686441a15"
  },
  {
    "url": "assets/js/16.e33c81ba.js",
    "revision": "f9b5adcacd7b7f7caf9d3df8ac16c6f5"
  },
  {
    "url": "assets/js/17.fc8c04cf.js",
    "revision": "450dbac36ac43d38c0d474d4fc2b5319"
  },
  {
    "url": "assets/js/18.1261f454.js",
    "revision": "5b517e005a09b49ee52e0168272d8ed3"
  },
  {
    "url": "assets/js/19.ba3848fb.js",
    "revision": "56ea0ef51cf8ca6acac68d94be9028d2"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.a020210d.js",
    "revision": "9fb6513f464fe8fcdef2f449c38b22b6"
  },
  {
    "url": "assets/js/21.c219c9c9.js",
    "revision": "9619faf7b15d85ae19a313c4c37c58b8"
  },
  {
    "url": "assets/js/22.99dd455d.js",
    "revision": "0217086db1f9a6769b2c5e91e275f0e3"
  },
  {
    "url": "assets/js/23.a8ad37a0.js",
    "revision": "2b1542e05d4a87bf1cdc1d7f9b954215"
  },
  {
    "url": "assets/js/24.d384fa11.js",
    "revision": "63b8b73fb0d0fdf2c3911a9991e5e030"
  },
  {
    "url": "assets/js/25.00e26884.js",
    "revision": "9284a2a1b24720e14c0479c92134ec9e"
  },
  {
    "url": "assets/js/26.577900f1.js",
    "revision": "d5d86b11a67185ff838ce66fcb53134f"
  },
  {
    "url": "assets/js/27.d306968b.js",
    "revision": "e8e77f0955547c50c257fb685a772e45"
  },
  {
    "url": "assets/js/28.2cfb83f9.js",
    "revision": "7998bc72d7dbe021251bcf41e30ee61d"
  },
  {
    "url": "assets/js/29.6eca67b3.js",
    "revision": "27e7c23a5e08a5ae226127cc75612364"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.0879bd28.js",
    "revision": "51fc08bd1bc9d9118a70359bc0f3298f"
  },
  {
    "url": "assets/js/31.8bc6b489.js",
    "revision": "0c4332a8128b2bd2cb3e5fb3b0ec151b"
  },
  {
    "url": "assets/js/32.76d32148.js",
    "revision": "cb367c100a614d31e30724203c0c2f46"
  },
  {
    "url": "assets/js/33.8669f065.js",
    "revision": "30bf1abbaed77146b3c7d7bf2d44634b"
  },
  {
    "url": "assets/js/34.5b3b40ed.js",
    "revision": "1d600d91a3ad463d041ecfefe6d95771"
  },
  {
    "url": "assets/js/35.14f0a744.js",
    "revision": "9450becebda4afd67a6a66af68dd6e30"
  },
  {
    "url": "assets/js/36.f4103857.js",
    "revision": "7b6adaf3f3959d5f38186495ff6a7113"
  },
  {
    "url": "assets/js/37.94ef9289.js",
    "revision": "4bc8fe3511a90a3304aa60e2ea3151de"
  },
  {
    "url": "assets/js/38.c694d564.js",
    "revision": "930eb6f8de303423761f80ff1b039ecd"
  },
  {
    "url": "assets/js/39.9b697d44.js",
    "revision": "9b0e6f8e2c3d5cd36e63f6cd48a5bd21"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.ce08d7b6.js",
    "revision": "6279082ab238930d97ccf13cdea3fba9"
  },
  {
    "url": "assets/js/41.ba85109a.js",
    "revision": "6539d9ec30ff342adb90d581c0e8e808"
  },
  {
    "url": "assets/js/42.9bd0d221.js",
    "revision": "1bb5bd99d449550c131f35bcd471e98a"
  },
  {
    "url": "assets/js/43.5f36a386.js",
    "revision": "5435c810eed3123c8c7ea8ad103d2eaf"
  },
  {
    "url": "assets/js/44.1f73344e.js",
    "revision": "71180e98c9d6410dcac2d4f88c235670"
  },
  {
    "url": "assets/js/45.867af048.js",
    "revision": "07b12a2e2c952b8e7456201d8c388676"
  },
  {
    "url": "assets/js/46.9894cf60.js",
    "revision": "151d6ec38932ce5b40be91352cc6ec8a"
  },
  {
    "url": "assets/js/47.06e459ae.js",
    "revision": "4607503299e7e688aba57dc84cdb80d4"
  },
  {
    "url": "assets/js/48.0a213fbb.js",
    "revision": "89e0226ca91e7e7882793deb7295c3fd"
  },
  {
    "url": "assets/js/49.973a62bd.js",
    "revision": "1063f1065b7ee0a28adbe7e554f49d5d"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.7a40fcb1.js",
    "revision": "c9e6d3db77ad9b531dae9e3f589e28ac"
  },
  {
    "url": "assets/js/51.1fd48b2f.js",
    "revision": "cd910f6e206078af8cfd0853b92d21d3"
  },
  {
    "url": "assets/js/52.cbac5fe0.js",
    "revision": "1e67879bb27bf9edca5c71408b7fb1a2"
  },
  {
    "url": "assets/js/53.0d1cfaef.js",
    "revision": "e0bf4594cbc5c16ce0d44e444cfe86d2"
  },
  {
    "url": "assets/js/54.5c0bc88f.js",
    "revision": "78721b264ffbc0de4a2b9a4cf074460e"
  },
  {
    "url": "assets/js/55.273a0ecd.js",
    "revision": "ec5e614b58cb51f8e9e61c7be88cf363"
  },
  {
    "url": "assets/js/56.6e997f89.js",
    "revision": "c9bd83338b67241f5aa1e373fe644322"
  },
  {
    "url": "assets/js/57.66dc2b16.js",
    "revision": "71b93e0c71335201c4e9dd18edd4a512"
  },
  {
    "url": "assets/js/58.b735b570.js",
    "revision": "852290fd7305ca4eda15bb98c6129d98"
  },
  {
    "url": "assets/js/59.edcc0917.js",
    "revision": "ff8ce3e54c13e4f84b459c23cd896075"
  },
  {
    "url": "assets/js/6.8d3fee9f.js",
    "revision": "91382e3bd933ef47346aa2d9ee022bb1"
  },
  {
    "url": "assets/js/7.1d7dad65.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.e75ecad1.js",
    "revision": "58b1fc8d90bb1e5ce14481d221be70e1"
  },
  {
    "url": "assets/js/9.ffb4316d.js",
    "revision": "a29d7bf9fb79fc182c704b87e957e7c8"
  },
  {
    "url": "assets/js/app.a04f81b8.js",
    "revision": "b7cbffc14e07eef2d21fdb9fbfb29c85"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "ebcf5bb36e4bddb276181ebdf1c2c133"
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
    "revision": "0ce06d250fabc843920c4c466b9db5e1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "43b1287f0f29fc33996fde99167c4e5c"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "80e5051a17060285d0e399a2d8820349"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "9cf9cf7c6e4466586e184e5d3727eae1"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "baec6a5c659b2c24473a374ff8e412e3"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "ed33752dbf6b08c267881461539120fe"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "cfb4c6c9ee28eb1fabe52368b8972cd0"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "ed56849540ddb97c6d9e62374db4158a"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "c1cccd83b9b1d8b3a50c023c7d7b38e1"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "a5556f8f0c96bcf8cb00dae433cabc8e"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "c7553a53c1297bc52d2bab98f34288b7"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "6b3e9d57787ad1cf6571a3e4fb97f62c"
  },
  {
    "url": "guide/index.html",
    "revision": "6e2be90548fcf937a2efeb05b2021545"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "37fc7814674c279a15b6cd5eb3b48009"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "8c4c35b18c65789ba810c452f549cff0"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "7ab25c4c84564c6eaff4003fa9f7839f"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "4d97bc93ae3e34131962bc3a4a973441"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "108a5150f087daf9e01bd682fd245def"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "0c61d4932dbcd4da82a82aef93740f57"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "6bda49d4696d21a44221a4d5fab75e27"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "422a89d7d8fde1ed2437dceebb0c1e2d"
  },
  {
    "url": "guide/information/support.html",
    "revision": "b12eaf5ba47452527fb9aa8b0cc4be1f"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "c041166264f664c7d34bc89e9389ce2c"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "9712779ec0c2bc5b587b5cdf3a938bb5"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "73d231f76a7da9ed561f185f7c4a0ede"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "8550d224f74cf87bb1033cd88a1b4810"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "b1dfb62c3b4ef963ca1253797c510876"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "09b15b1c37fb2a0a340447a11a67ef9a"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "1db78b0e6cc632e24a38978595e0fdf5"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "6ca967723fbf109fc579105d52f0735e"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "c32c787129e191a4e486427827922240"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "8026060ba6164e14f53babb288b95bbb"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "dd8c8a3eb2d2fc759118354b314b318b"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "54deb6c01d442b626bfa64a136c324a4"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "bc5fd9e287203e1da38067d2a90cfb6d"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "63ad2ef598229dd9f096b5e7be779781"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "1d5b321635317d35462deba9936b4d66"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "cc0b0f51e4ede6eb71190e4b7909bc3c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "7a447674c15318d30ece559fe97a5bb6"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "c81b4aef89a804726573eecbee4c372b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "0e4cc364866fd50d920a6d41befb6dbc"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "073b8ba986c13a70b43cbcfc09d1de5a"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "77ac72a31afc7038e74c8877ca81203a"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "76597bd2c830796efda6f8b8923d95bd"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "87b55ce694ad5381c2adab9653816878"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "7292d728243ca2b0693be14f950614b9"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "76cb54c0f03dd0b04fe1964fb6a14a4d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "c6b0f0c12060e22d675db8c33a6b4a5d"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "5e82b803d8d184945d0f3afa8a117c5b"
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
    "revision": "a8fa8ad546a7b08ca8775bcc53f18173"
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
  },
  {
    "url": "sitecon.svg",
    "revision": "dede5e5e72e99d953d2f4567040f9177"
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
