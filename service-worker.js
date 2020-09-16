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
    "revision": "35ebe85690dd2081c2296f1129ba8e3a"
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
    "url": "assets/js/10.23eecf96.js",
    "revision": "e9efab84c468de50b1b8144e91fbab7c"
  },
  {
    "url": "assets/js/11.e9e5a9af.js",
    "revision": "1abdc1c46c3a28264165c5f2f381b274"
  },
  {
    "url": "assets/js/12.3ad6ba37.js",
    "revision": "7824b0ad20b07cbbc945c87d36947ae3"
  },
  {
    "url": "assets/js/13.ed73b645.js",
    "revision": "44192757e6a689b04c0662cbc7221d25"
  },
  {
    "url": "assets/js/14.44091245.js",
    "revision": "744f9663f4b924ac5bf53b5649641677"
  },
  {
    "url": "assets/js/15.2d603731.js",
    "revision": "b47c094a838a842ed0e312714a66b816"
  },
  {
    "url": "assets/js/16.9b70c3c3.js",
    "revision": "d32828b2626aba50ebd1904488c4e209"
  },
  {
    "url": "assets/js/17.607835a5.js",
    "revision": "e9b85b42672279bceed54ffc48719acb"
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
    "url": "assets/js/21.555b43be.js",
    "revision": "df083a3b6d2481be627ca9a802257cda"
  },
  {
    "url": "assets/js/22.c3a31f03.js",
    "revision": "b7bfe5b614a3a16b79725f2b9d89442f"
  },
  {
    "url": "assets/js/23.fddc80da.js",
    "revision": "a61d5ea8acd2c1b6f3a4d61eef5f85be"
  },
  {
    "url": "assets/js/24.d1b9bfc8.js",
    "revision": "61ea04fc4875e4f38aa24506adb4c370"
  },
  {
    "url": "assets/js/25.acea7083.js",
    "revision": "dfff9ed2b9380b32697a95b422ee7dad"
  },
  {
    "url": "assets/js/26.7924a1be.js",
    "revision": "c35c09f08ac20a173ac0ad48460f7126"
  },
  {
    "url": "assets/js/27.24efea37.js",
    "revision": "1cc35f31a3d8747e67a962dd0771c5b4"
  },
  {
    "url": "assets/js/28.495f8370.js",
    "revision": "db0094c32a7b267e3ae3dfd32b3dee48"
  },
  {
    "url": "assets/js/29.2f711deb.js",
    "revision": "e2d5b9cb4ddcca8eef756020f07757a1"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.1559e60b.js",
    "revision": "418233fe7dd8dbc82b131339714f4ffc"
  },
  {
    "url": "assets/js/31.c59eeedb.js",
    "revision": "45900e1007a553b21e14a22ac67e0b02"
  },
  {
    "url": "assets/js/32.2ce10c94.js",
    "revision": "56848a98bd8f0e02b90f3df1734449db"
  },
  {
    "url": "assets/js/33.84e80b37.js",
    "revision": "1ffaf6644cd645db57fae6e57cc4315b"
  },
  {
    "url": "assets/js/34.7b2af612.js",
    "revision": "f15a441d9961b4d9bbac72aa3876f352"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.e4151605.js",
    "revision": "b25140320cbc47e9da435b2f86aab338"
  },
  {
    "url": "assets/js/37.f4dfd884.js",
    "revision": "36ecbbbacd98de5cdb2c1516c37fcdaf"
  },
  {
    "url": "assets/js/38.f6daabee.js",
    "revision": "620bfa842282bdfa17b2153f9f242b2a"
  },
  {
    "url": "assets/js/39.38710bed.js",
    "revision": "e3fcc615af1d37c2b589b1384ea1d5c0"
  },
  {
    "url": "assets/js/4.903bb4c8.js",
    "revision": "686f40135815e1b92b21d077b9867af9"
  },
  {
    "url": "assets/js/40.aa0404fc.js",
    "revision": "486619f1dfaa7b73cbc7f825bd7ef59d"
  },
  {
    "url": "assets/js/41.40c08d98.js",
    "revision": "85384551cd36f94924f836d1b4d4aa42"
  },
  {
    "url": "assets/js/42.8f4aee7d.js",
    "revision": "ff2e448f2584ab83559c30b091ba04e9"
  },
  {
    "url": "assets/js/43.676a30e5.js",
    "revision": "4479c54c6a28fe26e2034ee871316a21"
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
    "url": "assets/js/46.59ef3e66.js",
    "revision": "79b688ea53cfcb4459c7e9c22528235c"
  },
  {
    "url": "assets/js/47.4e0a2da7.js",
    "revision": "69ab1e1faa95be773b382c7b84882919"
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
    "url": "assets/js/app.0de7d0d5.js",
    "revision": "c30d68004a1d8b10c20108721ea339bc"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "70ab9fa4120b30c7d5a8effb4459fdff"
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
    "revision": "b71418fb69bb0c0104b5d843a0190717"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "da9e1c6869dea89a0a53d245108d29b3"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "2f5ecca704ea8d421aa4bd389b6e97be"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "cc17973cbe01f01ee7cebcb0150306ca"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "be77a5d9adcdf01cb268bc0c2147a7a6"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "49aa728944f8570db7496c773393e00d"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "279874e9331357facd7428744bd000c0"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "9d8ab497fcd216babc5fd9954fb75d1a"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "f16e25616e8e70327defe357a2f066fc"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "525fd28a117ea0d1255c17fc62010f17"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "ab8541afd5d2d7742a210670e32285fa"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "492a3c199c657c81179281c9be3b1ebd"
  },
  {
    "url": "guide/index.html",
    "revision": "64c8e824d7e283c36dcd56258f54e233"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "b75edf920804440580375fb29ef01d61"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "c1de935555a2c1ac6f2adb6d9939efe9"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "db6afdf859a602bf58f5a106041433b9"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "8b1bc927bc681458ee07f3cf8d3e7e01"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "2f97f1ae944bc470ddeaf522a5230bd0"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "1a52b4ab80eca908d7c827c130c4b9e8"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "f139a8fb0abb70cf7da4130538217518"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "ec534f4f777f50d235ccbc6f917cb653"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "ee20467623997f94487d0a10e019b7d0"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "9ccb9b273df7ea1a9609cf8098d9972b"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "c4580e042408103e5674e9f850fec1b8"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "10d13cb5d76810494be4a19d52a7ce59"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "980b9952981d118de05a3a1a3e408485"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "4ef394d9ace5266be3bdf834ec1a9cf0"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "18b2a330cb7437e6a4ec9ae3b80075ca"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "7b1443a9cc0683f326026a440b4b8fdd"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "61940c5b77125c085dfa1e5c0391edb5"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "ca2af1380cd30abe25aaae19c7ae44df"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "7ec5f2c2c0c50aec86a13efccd95e086"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "b52dffac68cc3214f584b8d3f83dd158"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "8bfbce8966521e471797b3d709414de1"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "618ad4ffb61bd938def7ad5c0eef27a9"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "8f5a7377077e34f258df67eeb808294e"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "c56e5a3bab429f4f922d3a0ba096695a"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "1fc78642cfa625abb344f3ecbcf76904"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "f1894478a2ab0f5f60dceb98f552f239"
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
