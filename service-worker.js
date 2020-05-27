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
    "revision": "937e8ebe17e9131cc0645cc8895a89f6"
  },
  {
    "url": "assets/css/0.styles.d2ddfb65.css",
    "revision": "d00a59f9bba7642bd37dec09b1b09ead"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f48a5b8.js",
    "revision": "0cc9a1455f7edefdcbf66187451e146f"
  },
  {
    "url": "assets/js/11.18fc514b.js",
    "revision": "d0e109b75fc336c12a5d09d07bc180af"
  },
  {
    "url": "assets/js/12.3935b949.js",
    "revision": "2f823ad1c3246d9b32a644be0da632e1"
  },
  {
    "url": "assets/js/13.2194c904.js",
    "revision": "62b618bb68de517f2d21ad9eeed722be"
  },
  {
    "url": "assets/js/14.355eb188.js",
    "revision": "b75dedcb0d5fd24242c6d3304cc6eeba"
  },
  {
    "url": "assets/js/15.30b4d1fa.js",
    "revision": "e4decba63b43ba9556f5fcb831dbff41"
  },
  {
    "url": "assets/js/16.5742e3d8.js",
    "revision": "1755fae78e7b46cb35896e6da37d73e7"
  },
  {
    "url": "assets/js/17.0fc06e43.js",
    "revision": "e30430b25d846ba47f1e2e44aefdca42"
  },
  {
    "url": "assets/js/18.5808ac01.js",
    "revision": "086a1223868beeea1dd95329949d0886"
  },
  {
    "url": "assets/js/19.80a5d59e.js",
    "revision": "53c651931263e071b9242dd7136355d4"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.779133ae.js",
    "revision": "a4379f6d0e268dd935fa12306d36924a"
  },
  {
    "url": "assets/js/21.6cfe2726.js",
    "revision": "23b36d5852aa647420368a12e03a44eb"
  },
  {
    "url": "assets/js/22.ccfbcabc.js",
    "revision": "be11755657caa9a80a7a4ff15175b1a1"
  },
  {
    "url": "assets/js/23.f918fd7e.js",
    "revision": "3ee6893e5e07a11ac5a3d1f9f349cc09"
  },
  {
    "url": "assets/js/24.3e7af472.js",
    "revision": "b81442a44967aefd2c2d687ee5fc7d1a"
  },
  {
    "url": "assets/js/25.acb68253.js",
    "revision": "1c34a67b8e9379b001a2a2a42de27b7f"
  },
  {
    "url": "assets/js/26.ee14261b.js",
    "revision": "ae6295411099e50838270df9b08ed998"
  },
  {
    "url": "assets/js/27.065e4d50.js",
    "revision": "451e7be07dfe4d298665bd652eda04af"
  },
  {
    "url": "assets/js/28.0abc8a0d.js",
    "revision": "8183fc9785f9946cae85e2a02d5eefba"
  },
  {
    "url": "assets/js/29.dd0c4de8.js",
    "revision": "86a9197299c10c21d5e62584ff178a10"
  },
  {
    "url": "assets/js/3.115da35b.js",
    "revision": "a6ed8ddc9fca6bd2f35d5c95858098d7"
  },
  {
    "url": "assets/js/30.49a7366a.js",
    "revision": "f490ea5d5ece3524af97fabc32ed7890"
  },
  {
    "url": "assets/js/31.2d3f224a.js",
    "revision": "5fbbb70a44af3573d697988d2ee66e4f"
  },
  {
    "url": "assets/js/32.18a76cba.js",
    "revision": "530cb66a19ace1743ed120df424b6d37"
  },
  {
    "url": "assets/js/33.d95ba274.js",
    "revision": "2f44f635783a7584801c8683813d1ace"
  },
  {
    "url": "assets/js/34.6a6d372c.js",
    "revision": "7b97a2bce33d4c5d2d18a814f9f32299"
  },
  {
    "url": "assets/js/35.b6b05392.js",
    "revision": "44d3967147626690a3e2d8f1b1357db5"
  },
  {
    "url": "assets/js/36.afd52f90.js",
    "revision": "edd8dcbf89626cea912acd7323f0f3e1"
  },
  {
    "url": "assets/js/37.80fac9d7.js",
    "revision": "02d660b1176c2824d5ee7a1dc6632b0d"
  },
  {
    "url": "assets/js/38.9d6c76f1.js",
    "revision": "79470e3b734a8bbaa98a25967130cc60"
  },
  {
    "url": "assets/js/39.7b2ae1e4.js",
    "revision": "cc9b89db41e5d9688d203d906deb115d"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.f92fd921.js",
    "revision": "c4d1f20c1758699b9b31f80b6076f4c3"
  },
  {
    "url": "assets/js/41.553fe969.js",
    "revision": "38b19fbe35a2659f5cda583c504753a2"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.28406707.js",
    "revision": "b2ce583ce65000fca0833dc0a9b83f3a"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.259a090f.js",
    "revision": "270ca801577efb3943989e9fe70597b3"
  },
  {
    "url": "assets/js/9.8a11410d.js",
    "revision": "3ae63f425ffcc7845b25c2cfe9e0ce1b"
  },
  {
    "url": "assets/js/app.bdf74da0.js",
    "revision": "784df19eb51fd5160ac3ea4e5b1fb978"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "ee395a99f480decb8a47e4c3cbaed0b9"
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
    "revision": "816db0b613466bc8562b9a7a10b02eb7"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "23c05b8e5e6e796d48084efe207fdd58"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "cd086807f233e4024001bc26d61f40fa"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "48a30423011f221bb0c65be2301b9547"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "3ab01b4cee345aa38b6821cad7bb2dbe"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "a1ee9d6bc58cdfeb3ce50c04c16c8063"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "d292581f9349ca506e345794b64c0bbc"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "2eae616f1ecb370e557e220204301b88"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "14520c0be95181c8bbc035996a2f7bd7"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "cc5a288ad8d85f4f60f806ca51838ff1"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "00d8d1624c6c7a572d5dd70f0aaf75e9"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "5f025de8468468c604bbc362c49d9fd4"
  },
  {
    "url": "guide/index.html",
    "revision": "cc3e02a2aeadfc6be4afb2b6b26d96e8"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "7e091356768650ea849ee23cd667af84"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "f11d65847ad8bb22c0c2bd164c6790b9"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "3928b68be98c69c36212d7ee718df465"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "2b180edfecad59b40d33d2188683b274"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "57cf9e5a2b45782ae6463efc9bcf093c"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "7b8ed13e57dd5aa9d36f9edb7d96e5b4"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "b97296ee4bc1757b466c143045b59f5d"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "3246b4ec527fd592640829a9c9a1a5d3"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "72c1c4fb78b20c78e86eadb84e5215b9"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4d2ec1d1fc003872d45011bd772868c2"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "a87eca12fd30af21abde4f2436c45cc2"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "fab9716472e43c9d6f1f0db5f4c8998d"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "3a0936468de8a4460aee574c13b354a2"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "69b673abfbb44350ec32635671ee6992"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "73d8909cd1d8a47874d527efeb091d6d"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "e49595c563291011e10e329efdca2152"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "7c7844efd1b2a281511166cb35d29a09"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "42bec927673a8b9c53991f45fb1a6a3f"
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
