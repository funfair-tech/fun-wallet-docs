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
    "revision": "21e3b40f1352fa4537cf97fe714e67eb"
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
    "url": "assets/js/10.1a19e6f0.js",
    "revision": "fd6276bf436542011a9bd2d267780104"
  },
  {
    "url": "assets/js/11.cdf0c7db.js",
    "revision": "5f4124643417422de55561fedd8ab424"
  },
  {
    "url": "assets/js/12.cad9b033.js",
    "revision": "804ea32ab7e35b916144208041e5e869"
  },
  {
    "url": "assets/js/13.a61269f2.js",
    "revision": "ed5dc57e93f239244111674682429702"
  },
  {
    "url": "assets/js/14.d7a2b028.js",
    "revision": "00a0b172070f801524d34bc6334257f3"
  },
  {
    "url": "assets/js/15.a0d85e04.js",
    "revision": "d83bfedbf9c3a60eaef99e2a93b4185d"
  },
  {
    "url": "assets/js/16.0bf1c116.js",
    "revision": "43eeade66218cc13c4362e60f58ddbd3"
  },
  {
    "url": "assets/js/17.1a223d3c.js",
    "revision": "ed2a220d4a8a39deb0160c6370576d3d"
  },
  {
    "url": "assets/js/18.bd53761a.js",
    "revision": "fc46f4d5f8961fe6e8f64e8c822d9dd0"
  },
  {
    "url": "assets/js/19.a92d06d8.js",
    "revision": "3e934528d04741ff0769caeb397ad2f2"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.7f23aef8.js",
    "revision": "fe34fb14a7debed3f91fcf82bd97a94a"
  },
  {
    "url": "assets/js/21.5b1acebb.js",
    "revision": "cb682376578be0630adcdd4f4832293e"
  },
  {
    "url": "assets/js/22.a14f6d65.js",
    "revision": "64fcac00f66ed70b178a65f6b216bf4d"
  },
  {
    "url": "assets/js/23.ed84c64d.js",
    "revision": "69c25bca202cd3a2d50b8eaa7f5b8584"
  },
  {
    "url": "assets/js/24.2988a151.js",
    "revision": "ecacbd06e8167aef53d49704cd9a418e"
  },
  {
    "url": "assets/js/25.35607ad7.js",
    "revision": "346e4be0d971500e1dfb4f3e8acb2bb1"
  },
  {
    "url": "assets/js/26.421055a5.js",
    "revision": "835d823276ec929e65157882d03fb5e2"
  },
  {
    "url": "assets/js/27.b99f07bc.js",
    "revision": "73a0c96cd05bc1c5dc8e47abd60a1580"
  },
  {
    "url": "assets/js/28.678e635b.js",
    "revision": "02790a2cf18681265241fcdd4384166f"
  },
  {
    "url": "assets/js/29.f024e6b4.js",
    "revision": "b6f8d8fd305f4370bacca5080678eeb0"
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
    "url": "assets/js/32.9f7bac0f.js",
    "revision": "ebb583ba45b8536c5f33774a0f453b3a"
  },
  {
    "url": "assets/js/33.9f209506.js",
    "revision": "257ee08de8e5f7eb2780bc556e09b2d9"
  },
  {
    "url": "assets/js/34.875b19d9.js",
    "revision": "4d372fa1408113ced88b487dbee7c88d"
  },
  {
    "url": "assets/js/35.3242b707.js",
    "revision": "ce7daa25d3a5efa9a330c9e01f09f8e2"
  },
  {
    "url": "assets/js/36.7c77b778.js",
    "revision": "c196736792a2807bf60036bacd7ff6a8"
  },
  {
    "url": "assets/js/37.3beebdb1.js",
    "revision": "fcee09968b3d598dc11eea14438d52ab"
  },
  {
    "url": "assets/js/38.ebce6df8.js",
    "revision": "839cdd616e28f861420daab94ed56990"
  },
  {
    "url": "assets/js/39.95c3304f.js",
    "revision": "2d0d9706f0a71e38a9f75d5e0f09aeb2"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.069a87ab.js",
    "revision": "152af530aa280dbbc6c47cb0bd87aacd"
  },
  {
    "url": "assets/js/41.06ae6b58.js",
    "revision": "c8948471b853791ca5c7fb74e3458b01"
  },
  {
    "url": "assets/js/42.564583ce.js",
    "revision": "4d195f943a8f91c6a19166c31f6b752f"
  },
  {
    "url": "assets/js/43.cea37625.js",
    "revision": "e53c7adf1d532a7e3996d87cd039d874"
  },
  {
    "url": "assets/js/44.557850ca.js",
    "revision": "141a14dfd4b289e8f46c97b914e76d53"
  },
  {
    "url": "assets/js/45.436fb329.js",
    "revision": "800a70e0e5f3241d2f2fd24561ce824e"
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
    "url": "assets/js/9.52ed1a4f.js",
    "revision": "ceb82f6ed258572fc95d73a11b493057"
  },
  {
    "url": "assets/js/app.c0a1b105.js",
    "revision": "eaa9040e5f988498f7540d847a848cf4"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "c8dbb5d1bfaf3912f230087ffb7d41c0"
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
    "revision": "b4efb315ee8dd07715e576adc4b4f160"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "0ce9da7fe792acb4a231d3ec66ce5eb2"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "43054ffeeb2df670e82526cf8145678d"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "a2e63cc4fcaeb7aec06226a32b1b4816"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "2155eeda031d695f1f883df8af39420e"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "38e68538dbb6f755c1de60d74f9d2d2b"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "d5bb09db53173c3c7254b8059963336e"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "9f141bc351900d2c9beef7870afeb161"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "5416094b51614ca93d13456c96bd53ed"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "baa697f20ca81ec114c6450dcf34e59b"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "1542570941ace94bc71a873d2ad96a30"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "929bbac324d3a1db978f81cd5b65ba33"
  },
  {
    "url": "guide/index.html",
    "revision": "a5a9e430681e03982b739e96c89b7614"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "5f298c70578e2de487394e9036dd1287"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "f50b230beb5c772d1fad0194b7c1216c"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "f41d576025e50df9f7ca6feb53187a29"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "7fea252928f9f26ac34ad449ead4393d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "36a794718a5b206c5ec421b05290c009"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "31cb9af6bc095e80dbbad184c9680e4e"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "2b5099c484c4dc6d8db11ea9f4d5b5ed"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "54d75a70883b1b137fbf59159e868344"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "3bdfd3617f05c8c3ae1500f678942ee5"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "2a2a3c71f8aec6693a126ab0793d2426"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "9d330ca2158d9f15ad823d90ba51ed14"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "6723f7e742fc9e9198fb14c5eef7b3ac"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "0419ede593f00ac163e8626c59c35bef"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "5c74e63b33bf12fa3e86786d74af1444"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "e39716940d5fff4a8ead521e864adb4e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "19c92e71b5de34eb938a332753a9642c"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "179c8d67953f68bdfbb7819fa68cb391"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "5d2315997e49f7a14b5d6692fc4b57d6"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "bf4673b912de5f6ff1b744fc548863e1"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "c207d0b8d7afaf37d47d375314a4d4d8"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "d3491d67f071e23fbc25480ed79f1592"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "ba0546dd1f122f1a40e56f3eccd04797"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "9bdbc9a2c4a9b185396f9d07fa22d483"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "778c99a6bc5423f4333768568ff7fb5b"
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
