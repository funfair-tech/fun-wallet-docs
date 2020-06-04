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
    "revision": "5663f3a4443748512d58bfb07cc535d1"
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
    "url": "assets/js/10.7bbbbc32.js",
    "revision": "b1a008931a3400833c8bef03cab39e2f"
  },
  {
    "url": "assets/js/11.77ecbf1f.js",
    "revision": "e2bd94dc1f03ecd98182d8bad8293107"
  },
  {
    "url": "assets/js/12.e46e5a2a.js",
    "revision": "226143cf12e30389db7388bdf7f43af8"
  },
  {
    "url": "assets/js/13.a6b2a7fa.js",
    "revision": "41c4c3ea5f054d36c7bdd1412681a6fc"
  },
  {
    "url": "assets/js/14.d854c661.js",
    "revision": "6b3e0da314223c36ae1b0b82a6190484"
  },
  {
    "url": "assets/js/15.f30583d8.js",
    "revision": "254112dc81fa248dfec3cd67b967429c"
  },
  {
    "url": "assets/js/16.20774cc1.js",
    "revision": "05d8beb91df9b7c38766d010a3649415"
  },
  {
    "url": "assets/js/17.e36e087f.js",
    "revision": "ae0f2332ef3a862cd83858da6f474668"
  },
  {
    "url": "assets/js/18.e3118307.js",
    "revision": "e712a712d4fbc6f96704d0beeef6fb95"
  },
  {
    "url": "assets/js/19.d368feb0.js",
    "revision": "7e0d70908e716777125a0b58530f046b"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.3e6aaa4c.js",
    "revision": "3da939bb9924ecb1c4359f176e6925ab"
  },
  {
    "url": "assets/js/21.6161adae.js",
    "revision": "6452a6a6815c699b3c525007d3f325f3"
  },
  {
    "url": "assets/js/22.13133d31.js",
    "revision": "3f77e24ca1e829f5d871f1e8ec797294"
  },
  {
    "url": "assets/js/23.a70b8cdb.js",
    "revision": "8ba5cdb3c811ec7cc05dca9855c6c1bf"
  },
  {
    "url": "assets/js/24.8db98613.js",
    "revision": "03eda0c73ce3dfc9b31d306c8accf027"
  },
  {
    "url": "assets/js/25.d86a542a.js",
    "revision": "91642f3de42f9c50f43fca33f4126f2d"
  },
  {
    "url": "assets/js/26.988e7d1b.js",
    "revision": "b49f677e0022360b5b509f353f08a17b"
  },
  {
    "url": "assets/js/27.58e9b851.js",
    "revision": "77a6d3e395f4270c7eeefc8b9139ae0f"
  },
  {
    "url": "assets/js/28.12d571d0.js",
    "revision": "3e110741a9dc0b6de571533e980a438d"
  },
  {
    "url": "assets/js/29.4af8e63c.js",
    "revision": "5c0c74d53364a73c6eddff7c51de834b"
  },
  {
    "url": "assets/js/3.7515ba86.js",
    "revision": "9dc44d5711e09bf25c5d74296c6a41f0"
  },
  {
    "url": "assets/js/30.4efef4b6.js",
    "revision": "afc9d015af86d558833709cb05086676"
  },
  {
    "url": "assets/js/31.7d72db5d.js",
    "revision": "e523247abdfee8d4bf25241605a8ba68"
  },
  {
    "url": "assets/js/32.0434b3c0.js",
    "revision": "2d5eb1a90fe5a90d5981d12f029df718"
  },
  {
    "url": "assets/js/33.56afced9.js",
    "revision": "8ff8d14393cbc3bb64fd15cfc587166d"
  },
  {
    "url": "assets/js/34.3ccaa14a.js",
    "revision": "adf8bcec7f25400637a4c8f92df1eee9"
  },
  {
    "url": "assets/js/35.effcdaf0.js",
    "revision": "bf3c18423cb3adbee417322668d9986b"
  },
  {
    "url": "assets/js/36.e42bff8d.js",
    "revision": "6c04240e39fc6ff64b1b49129c367fc3"
  },
  {
    "url": "assets/js/37.991b3dec.js",
    "revision": "c120517eb371a889b4ed9e6ae83a3fc6"
  },
  {
    "url": "assets/js/38.b73c912d.js",
    "revision": "b373931c521de85d6073721f26b93925"
  },
  {
    "url": "assets/js/39.bb846ce6.js",
    "revision": "0cf6ce0bfe94dc526729969737a89598"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.5cb198bc.js",
    "revision": "7875c8c586e6a4f227f886f91def050a"
  },
  {
    "url": "assets/js/41.cd929154.js",
    "revision": "63312da4c25d3489026884c72511c3b9"
  },
  {
    "url": "assets/js/42.61ad5121.js",
    "revision": "10f0205f99221c19a0fa067b1718d361"
  },
  {
    "url": "assets/js/43.904dcb46.js",
    "revision": "ff464819c41264712ada8587b18c37d9"
  },
  {
    "url": "assets/js/44.c4c91deb.js",
    "revision": "3c944cbfb355b2661734448130a8a2b9"
  },
  {
    "url": "assets/js/45.b7b086e4.js",
    "revision": "88a7c06f76ffbfc45dcbffbc8688a8b7"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.37b07a85.js",
    "revision": "0525da58608e1a41e4511733f427ed34"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.0a8332f4.js",
    "revision": "a60065227fef62f7c991ce2e8fdec502"
  },
  {
    "url": "assets/js/9.67022518.js",
    "revision": "2980a40602d42e3b7e04c60b939fcb54"
  },
  {
    "url": "assets/js/app.275ebb48.js",
    "revision": "6513a5113d74a1ac127f6c60deab2320"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "da3bd7aaf4408b426e9dbcbf5e889f0e"
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
    "revision": "75f410039c3054731cac6119ccdac779"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "d9e43a38d29cc5d0764a5fd92346fb70"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "f74231344df4f353d8689c054ad2a0cf"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "3bcb95939531c32a1369cdb098590301"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "b6c2b3302ba84e5afbd0ca9b539a7038"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "a467da61e6ec0019aaf5fcb723976ec8"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "8c019f02c03acd15ad3b0f37c3e0343c"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "b0dd88a0bd94b7055c5802f831137078"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "2ab86a42721cd1b159f5a65689f3315d"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "d63e103fea1e404766bfcd2d411934bf"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "d6e3596a7032b949417a3fbd381984af"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "ebe5aef2f96f057d8525b9e9a6bec856"
  },
  {
    "url": "guide/index.html",
    "revision": "e7d937c563377b5d477b420086051aa5"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "7b71545c41e711fd12c6f2565c02c7cc"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "5937c87cfc02d2bd447db1f6a3d75fba"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "cce40939d594aac25aba81470ab01a92"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "2182431e836bb6af7b5d7475fbe7bea2"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "9e09c49459c0ee7f2cc6e85e7c341ca1"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "85c600f32d68688ca460c2f1837e738d"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "9354d7cc50145e54fd381533ec9d6dd9"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "bb9b401a439f1d4a0b3ad55359df5911"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "368107e2e679198c969bbb9111b7ac0c"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "d940cda9a730c267a258de452cbf770b"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "a1a9f638822dda9f45329257a1908b37"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "93a0bbbed24eaf6f6b72b36df99ac61f"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "6fbf46805e85eb9cac9d46002c57c746"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "7a290c9564704b586cf91c636f4c58de"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "b27428fb63b3a0f886bc3fa42b1bdb1a"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "14ad5c706fafced6583f712973e78122"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "0e05ce47dcb3f0f1b07b417358c0feff"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "57b0db66064a4eda7d8d05a48350bac0"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "f7be7a6c25ce77f5e36cd4385bedd255"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "b9927af03a19e849bb217edbe23a5652"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "49606d5458f5cbe34793bb14348b2354"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "70c7aa22477d24bfc26c757c4a594bb3"
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
