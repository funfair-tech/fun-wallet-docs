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
    "revision": "fd931abb9211848f7e8e74e73cc0f2fd"
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
    "url": "assets/js/10.a9addc42.js",
    "revision": "a6143b9bb4ce16224bba087d6f8c94f3"
  },
  {
    "url": "assets/js/11.33123c88.js",
    "revision": "2071da61bb21e576ac052a8ce7fbb400"
  },
  {
    "url": "assets/js/12.feef4069.js",
    "revision": "893908d0ac4def3c21c2636c2575e369"
  },
  {
    "url": "assets/js/13.d72d1c53.js",
    "revision": "8f726641a34e1b797c4a31be967cf9bd"
  },
  {
    "url": "assets/js/14.9cb2795e.js",
    "revision": "4989e1c966a59478ed04d4bfb178062a"
  },
  {
    "url": "assets/js/15.35de1c04.js",
    "revision": "ca93fb4e160042294478438bc89d42f8"
  },
  {
    "url": "assets/js/16.0bf1c116.js",
    "revision": "43eeade66218cc13c4362e60f58ddbd3"
  },
  {
    "url": "assets/js/17.acc0fbd4.js",
    "revision": "34dafbfac90985b771c8eaa4d108b2ed"
  },
  {
    "url": "assets/js/18.1887e79d.js",
    "revision": "ddeacc313fccadecaa5c86167f93cb45"
  },
  {
    "url": "assets/js/19.3b5582eb.js",
    "revision": "8f793f596472af275be7b926acfa041b"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.5f9b62dd.js",
    "revision": "d8b0311f6c7097e2449ed8840ea9cd38"
  },
  {
    "url": "assets/js/21.095f1c70.js",
    "revision": "ce4182803933aa13fbc7eb53977205d8"
  },
  {
    "url": "assets/js/22.d344ac57.js",
    "revision": "69743de49a91cff4bea6ec8481940694"
  },
  {
    "url": "assets/js/23.cf663bf7.js",
    "revision": "c390541e81f514a8d2d7ddd3ad974460"
  },
  {
    "url": "assets/js/24.aa2721e9.js",
    "revision": "fe87859b889520948d1f07a350374449"
  },
  {
    "url": "assets/js/25.970da2f0.js",
    "revision": "5ac8fd52a0c12dcf18df674975d25f4c"
  },
  {
    "url": "assets/js/26.52665155.js",
    "revision": "effebd8816f79e7d9abc6cc65ccf0459"
  },
  {
    "url": "assets/js/27.dda7a29a.js",
    "revision": "bc0d744385d10597e2c554f3aacbaa86"
  },
  {
    "url": "assets/js/28.ae5833e4.js",
    "revision": "40b7b2a8c346170cc76f8c812a98f785"
  },
  {
    "url": "assets/js/29.774a6e43.js",
    "revision": "02b39d47deb422c16fa82414891c0799"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.89139d53.js",
    "revision": "687a5f0f0d6af78cbbb64c513ccc617e"
  },
  {
    "url": "assets/js/31.a31fb8cb.js",
    "revision": "c68d3a8d04130553f89003413700c94b"
  },
  {
    "url": "assets/js/32.9f7bac0f.js",
    "revision": "ebb583ba45b8536c5f33774a0f453b3a"
  },
  {
    "url": "assets/js/33.6839f899.js",
    "revision": "7a84c36ff1733e175ab212143ff969c2"
  },
  {
    "url": "assets/js/34.8a44dfad.js",
    "revision": "24b47536098484dfb3681f6f44abd70d"
  },
  {
    "url": "assets/js/35.616d46df.js",
    "revision": "dc6ba16a3332ef3934a8efeb449e8493"
  },
  {
    "url": "assets/js/36.2784d89c.js",
    "revision": "ff873e4cf1cc8e50efe56eaa591820c6"
  },
  {
    "url": "assets/js/37.88bc04f5.js",
    "revision": "95c6a9df1924659b3a207c1ec511fa87"
  },
  {
    "url": "assets/js/38.4a0bf3f9.js",
    "revision": "47124a4c1e89210b18b549d106a0f600"
  },
  {
    "url": "assets/js/39.ce3a9d2e.js",
    "revision": "145c3c797cac5e0f9a988f27374c65a1"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.3b224cda.js",
    "revision": "713a80d95dcd92638f780ab65d791966"
  },
  {
    "url": "assets/js/41.745bb636.js",
    "revision": "096e81e88a98567766dc875bcea3d554"
  },
  {
    "url": "assets/js/42.b7f535d3.js",
    "revision": "abb75e3d2c289d3f2baeb1eb952487a5"
  },
  {
    "url": "assets/js/43.98a998fe.js",
    "revision": "242a84245b568f30a9f8f7ffc9d095a2"
  },
  {
    "url": "assets/js/44.cae141ef.js",
    "revision": "46363d64d87bd34577447180edbca913"
  },
  {
    "url": "assets/js/45.f3c9aba7.js",
    "revision": "9aad8e22ce5bfef555b487a2f1b5a9ce"
  },
  {
    "url": "assets/js/46.513babf4.js",
    "revision": "bcfb2d8e98253d359233114879992a2d"
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
    "url": "assets/js/9.03e76005.js",
    "revision": "ed81e5de95482c6e01eb5a04385998a0"
  },
  {
    "url": "assets/js/app.9bcc0b63.js",
    "revision": "4da5cc9fc92b44c4f8098b64332264d8"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "ab950bea40b0bd1f7b60397cb385eada"
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
    "revision": "16784c2e85f2630a4691846ac42771dd"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "ec830ea770220e45d4f7fc724c7d60b3"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "ee1885d4eb81be9dd7cc00e144c9f6e1"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "f11aca4ec134f7d5d1fb49cb24a2f271"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "53041be2969b394a562905d76179468b"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "179966f40c46ff4fd883db83225fda86"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "ad3c8fbf7b8e5ab5ee4ff5223a37bc5d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "5546844806eb99c830056c257eb2ac68"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "6129b1208b343baa090948f5ec66ba89"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "549309cba03115f6345fac1409fac387"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "5a2055d6bc294866cc5bc7f3fcbfdff5"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "be13e92f8554c9e2f0993a6b28b30a7b"
  },
  {
    "url": "guide/index.html",
    "revision": "9e588b037e2532cbfc8a60a345849246"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "ecf499c5c3aef7c36cc659748ee957c5"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "1d39f4855ad1a777635ca54d14799a54"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "c8da52e0b094e5fe271e36618d34a169"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "ab27615b3c0a0ec58b8758f31b7ce458"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "d3e4727bd228f0bf6c24acbc8fb8ad28"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "b4dd305c527c90bca508ee74c1c8de7c"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "2c22797af18a9576a984c156089ab251"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "544fd0b2ce1669ea1733c82402f6c0de"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "37c0a25bf0af81f9dda145b9dde2ed8d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "3c773ed1f5bf339b90b78fc946162dde"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "9e1bef59fe7d600ba9920b639a5ac7d4"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "8838d152fb11aee10cdbc17415b2573b"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "7d7372ed4c8719e9eb5549075f3f7acc"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "0850390f763bd77bd5907022179339f3"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4ba487c31bfd4f12b701af5c83ea4fba"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "7588f1636e3fbf5adfdfd25ea13ad0f7"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "e94ccbf4129b76b0236dde807fda5a2b"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "701dd1d9296f63203f1c5a5195c40676"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "25b27dbcd636f798a08b2dd6a0c66f7e"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "dcfa52a4fd9ba0bd06166356af3fcbd0"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "6bdae4c1c50961c0aa2c2c351b1c976e"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "94aa578a9b8fa5933bd1e94a7829a02d"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "543fb38e6c03019056b13af621c99fa7"
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
