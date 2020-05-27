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
    "revision": "6af6d84f9e5559dcccd620cfd1cf6700"
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
    "url": "assets/js/11.80799146.js",
    "revision": "0ed601b979e2e9895bc52c18b7a32753"
  },
  {
    "url": "assets/js/12.c9e90c03.js",
    "revision": "b01535a1cb38a3e0c4e02a74476c8269"
  },
  {
    "url": "assets/js/13.e4a5dcfb.js",
    "revision": "991717782d23f21001c0ee9c83f04b84"
  },
  {
    "url": "assets/js/14.355eb188.js",
    "revision": "b75dedcb0d5fd24242c6d3304cc6eeba"
  },
  {
    "url": "assets/js/15.e12ec460.js",
    "revision": "328bd1d68a82ebadfa093b8532e92e25"
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
    "url": "assets/js/20.a49817c7.js",
    "revision": "ec8aea73c6c70e25d165770377b3e2d0"
  },
  {
    "url": "assets/js/21.ce2df6c0.js",
    "revision": "9660d903a2458945ebbd37b553f4cdbb"
  },
  {
    "url": "assets/js/22.7612c77c.js",
    "revision": "82b51cbe84d980e51c4fa6847f850cd6"
  },
  {
    "url": "assets/js/23.1c157430.js",
    "revision": "c8a2ce8aec988b8dde7a4924625164e2"
  },
  {
    "url": "assets/js/24.04689a5f.js",
    "revision": "baffe121afe3d7281ec876923ee2de0b"
  },
  {
    "url": "assets/js/25.056809c0.js",
    "revision": "805fe3062ead0e1c5f5dc4a395288368"
  },
  {
    "url": "assets/js/26.727b7ec0.js",
    "revision": "9d9bfa78d460132053447e74e4784cb8"
  },
  {
    "url": "assets/js/27.065e4d50.js",
    "revision": "451e7be07dfe4d298665bd652eda04af"
  },
  {
    "url": "assets/js/28.095f1f4b.js",
    "revision": "56cba6f5ddf7716b2a4f455d77e9e90c"
  },
  {
    "url": "assets/js/29.1bbd32c9.js",
    "revision": "ff2ce1ed9e19b23d400be58f9fe9be47"
  },
  {
    "url": "assets/js/3.115da35b.js",
    "revision": "a6ed8ddc9fca6bd2f35d5c95858098d7"
  },
  {
    "url": "assets/js/30.a813e3d3.js",
    "revision": "bc1253ecf064535c1ddab888109826bd"
  },
  {
    "url": "assets/js/31.2d3f224a.js",
    "revision": "5fbbb70a44af3573d697988d2ee66e4f"
  },
  {
    "url": "assets/js/32.3fe15494.js",
    "revision": "d00d3466314a1124320c70a65b6ac472"
  },
  {
    "url": "assets/js/33.4eeb39a4.js",
    "revision": "10349cfd1f277fae00ad2ac51451b2ea"
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
    "url": "assets/js/app.f4c58420.js",
    "revision": "9c45e44fa66d8ab611bd8fa2bc747b92"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "13183f3afce9356b65534e47f2c6caa4"
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
    "revision": "0290dfcb651262b969c5baa0629878aa"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "ca8fc07d60629998ae0871036f24df15"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "6d914fdbeadac46d0eb4019e61f78e46"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "42780af6d0cff6d7c9396e66d24f4f97"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "bd39b8404ead758b6d82ae19427be8d1"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "ffd56e930138e269987cfc7f7902276d"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "2b0d9febc992325afc4b4df6b5d18ca9"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "e717c9ff6f7d53c0b4d6b52376eabf80"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "764b2c0c6ee8303bb03d37b501a01ebf"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "f26aafb2beca3f1410bcdbb890e2ef3a"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "5ad18fbc1f3a8630e568b49713d0cf9a"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "cd73bbb73a930d22bbc94cb5bc466ed5"
  },
  {
    "url": "guide/index.html",
    "revision": "81ad3d6cfd47f2899c22c78fe0298937"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "653ba6fb4a6601c9fa5374502af55843"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "99c786cdad731429dbfe2b9117142ef7"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "29779053d2722702f4b821b832635a09"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "427679bf8ddea8d057ca9b6b8a978e61"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "a92c134e712582aa8acf8cd8b76da2a0"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "a13bedcb3dd65b6bfc91eb048a9b13fd"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "60c6b7e845ea1cf6c91227f7ff5009d6"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "b419f6e39d767b604cae0818bec93bf1"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "15a4e0e84e2455d8dddebcd1135a4ca3"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "16b692ee9a58eea222ae06c01e54db5d"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "e4ab5170524b7abf99eb5af9971df220"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "29349805d774f38b3acd82a155ca5b59"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "fa80595bb384339f62edb7d57de041b8"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "e7862aa8a2b077abc3fa7ecf976fe092"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "fe72d22c44b66dab84b5717cc44a0f2a"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "3192a2ef64bea01924617a6126b1d104"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "702721891c9893da673630ec30a1c118"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "8d80df1fc76560e1299f0cb19a0c32f5"
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
