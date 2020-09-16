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
    "revision": "7b396f557c2044de29c500b12bb57f51"
  },
  {
    "url": "assets/css/0.styles.698cab01.css",
    "revision": "cabb7307b3e9fd46d26829046be1b6bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d0addf3.js",
    "revision": "1699cf3dab9c190fcbf97fe31c484a11"
  },
  {
    "url": "assets/js/11.ed678a7f.js",
    "revision": "f429b3aa48a57f89428fcfd0e0755b84"
  },
  {
    "url": "assets/js/12.d6d62957.js",
    "revision": "7e30a7fc9338f315ee0f7471bb7b54a5"
  },
  {
    "url": "assets/js/13.1666657d.js",
    "revision": "89eb7b451416a3fb2b52adede189a1b6"
  },
  {
    "url": "assets/js/14.5967ed8a.js",
    "revision": "abaf934de37ee733308356fe10dcf870"
  },
  {
    "url": "assets/js/15.c7f40ebc.js",
    "revision": "1856b56d2ee5b015e71946cf04cc0ed5"
  },
  {
    "url": "assets/js/16.0bf1c116.js",
    "revision": "43eeade66218cc13c4362e60f58ddbd3"
  },
  {
    "url": "assets/js/17.dde20158.js",
    "revision": "91c88ba868a3a68f91fccae17536ac2f"
  },
  {
    "url": "assets/js/18.cd55a1f2.js",
    "revision": "ac59ef4792bcb16725dbb881177b84c5"
  },
  {
    "url": "assets/js/19.56fdb952.js",
    "revision": "c118b4d14b37edfb8e6087e077c8fb8f"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.96ab54a0.js",
    "revision": "c26fd39d003f328c5460baf5aa678eb0"
  },
  {
    "url": "assets/js/21.5b1acebb.js",
    "revision": "cb682376578be0630adcdd4f4832293e"
  },
  {
    "url": "assets/js/22.c331c323.js",
    "revision": "e3152e87a4c63e59e19922c8e005e19a"
  },
  {
    "url": "assets/js/23.cf663bf7.js",
    "revision": "c390541e81f514a8d2d7ddd3ad974460"
  },
  {
    "url": "assets/js/24.2988a151.js",
    "revision": "ecacbd06e8167aef53d49704cd9a418e"
  },
  {
    "url": "assets/js/25.6e08792c.js",
    "revision": "57d31ca80e7e30c9093e9d0a6d5f6185"
  },
  {
    "url": "assets/js/26.d45cf11d.js",
    "revision": "5c9a4bf7b5cfc58391c0fdbcad7ac610"
  },
  {
    "url": "assets/js/27.a1e168b5.js",
    "revision": "d80d46ed092399fbfcc11483135b0169"
  },
  {
    "url": "assets/js/28.ae5833e4.js",
    "revision": "40b7b2a8c346170cc76f8c812a98f785"
  },
  {
    "url": "assets/js/29.40941833.js",
    "revision": "26bb45cad4b19959ec0fdbd635d58e3e"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.b59f2c6d.js",
    "revision": "c3beba742fc8a8b4a69260b8a2730016"
  },
  {
    "url": "assets/js/31.fd7188f2.js",
    "revision": "cd5a79363bc4d142240e99cdef216946"
  },
  {
    "url": "assets/js/32.e1101227.js",
    "revision": "6e060ebe8484f30902d3f20b0e530b97"
  },
  {
    "url": "assets/js/33.6f40a31c.js",
    "revision": "44c57c03becb65aaba86ac00b4bed028"
  },
  {
    "url": "assets/js/34.adee4e29.js",
    "revision": "bc9a24f452d278951b563a67e5b99fc3"
  },
  {
    "url": "assets/js/35.cc0db077.js",
    "revision": "e154d1efd08ebbf012ee292b89279f8b"
  },
  {
    "url": "assets/js/36.1fd99a91.js",
    "revision": "fb14a397ac53fdf5cecd733926b52e25"
  },
  {
    "url": "assets/js/37.3beebdb1.js",
    "revision": "fcee09968b3d598dc11eea14438d52ab"
  },
  {
    "url": "assets/js/38.2a4e80f6.js",
    "revision": "db01ce66d17bd4b2cfc8e7105ec8604d"
  },
  {
    "url": "assets/js/39.2ef44668.js",
    "revision": "4d1b27a40897b07b3a102259e93c5a82"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.22a4dc48.js",
    "revision": "3eabc310637414cf300fac6c8f7ad25e"
  },
  {
    "url": "assets/js/41.a8daa68b.js",
    "revision": "0a614ebcf660b9b45890ae9e526952ec"
  },
  {
    "url": "assets/js/42.6510ebe1.js",
    "revision": "d7b03577b9dc141e2d1c0b5eff13f3e8"
  },
  {
    "url": "assets/js/43.e2d40245.js",
    "revision": "6d93fb54df9c7614a9799d9c2688b17c"
  },
  {
    "url": "assets/js/44.557850ca.js",
    "revision": "141a14dfd4b289e8f46c97b914e76d53"
  },
  {
    "url": "assets/js/45.fc704c2d.js",
    "revision": "af052f36b3f8b437d8faf5bdbee8db0f"
  },
  {
    "url": "assets/js/46.c0dac5e7.js",
    "revision": "78eaf2ac80dbe87b0b726525b7fb6cab"
  },
  {
    "url": "assets/js/47.2cf97228.js",
    "revision": "cc498e2ae6e078136c4a52e417abf7fb"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
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
    "url": "assets/js/8.2ee958ac.js",
    "revision": "0e96e4625435295dceb004253368ce68"
  },
  {
    "url": "assets/js/9.4a1dc694.js",
    "revision": "480ee17251c28183d658ca8deb095135"
  },
  {
    "url": "assets/js/app.8b314ac8.js",
    "revision": "afd9742bdacf7a18c47ed05f3829425c"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "4a0727a9f68cbfdcf317abd76af785be"
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
    "revision": "4c291740697f2f01ce8494faf3b73214"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "98d71b8ee05f0aafc36e07122eda8b28"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "dbdf5687af416d9ce2b451fbfd2b1470"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "2d9f0fb459070a54bf3dccb60279f7e0"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "7c5fcd20c9ce787849586395a5e6b33c"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "13df5a4ed55a307d7957285fe16c0c3e"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "fa881a0b6cbf7126f3793e561ef186eb"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "5ce9bccd01685d6aad4ff3f300653351"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "62519c29aab8f92a0ea5e8783e42a719"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "3a4bff49b852f47923f32adf91e94436"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "06cd4ba10e9b4e39bd07f3301d3537c6"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "e8acda649ed5e7cc87254072bfcffb67"
  },
  {
    "url": "guide/index.html",
    "revision": "884f3eaf230b79119b54e5db45912a65"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "3d0419670a47ac2f866d8dbcc272e95a"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "2eaf7438d3e8a6606d10b0da9ea5e6d9"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "eca6c954859c0e7535e87e70ed6d1421"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "e11f0eba7d3307e0602be0d6614ecb08"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "1adb700dc60ab334d3f3a1e7ee775bb1"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "a694fa9e52d7234ba3988a94bea0c2a1"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "9bec8f0316e04fd2d0b356f4cf3edac2"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "d8936045ed8accc47b929ef5791cc111"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "798c609c1b21782988341486766819f8"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "4458917f238b9291b736e454adb71bcb"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "6cc411d14c80bb1d932dad8a35307461"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "29961916abdac6cce359dee540cec557"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "e6e9d72637ef4f35667cfffc9f555d20"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "74793a462c1dc9df062bea233131297b"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "d419b1ab88bef0632127654e7b0f5e20"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "bb7ec061a8885436f86cd3782af4a8e3"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "d52f1fb7546709190e39dc5b7d9b4d8c"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "9df38328d137e2e84e7c89e289c2ef0f"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "864d81d6d9e732683f016cf8cced0031"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "55416b61e21ac28a6fb5a1fad76c7dc4"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "80203f95efe39da6693353080f82ba56"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "eec307df0c94bf6784f74c1f2b091837"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "6ff866cec55ed22fdb5a68f22efc213e"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "922f61ff5cc0387c0971128c5aa273b0"
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
