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
    "revision": "46f2bd589ae961ca3cf42f9c01711f09"
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
    "url": "assets/js/12.5ab22c0e.js",
    "revision": "0dea332fdc3d8b732f33f3a47969b964"
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
    "url": "assets/js/18.611d3084.js",
    "revision": "ffd1bf7c7d1dd5062283e9b8b76502e4"
  },
  {
    "url": "assets/js/19.4ed76072.js",
    "revision": "6616bac71519e69bc89da9629911fb1f"
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
    "url": "assets/js/21.6c07de52.js",
    "revision": "661ef596f3cbfb30857adb46c1072fae"
  },
  {
    "url": "assets/js/22.4512d9a3.js",
    "revision": "233cf762b6bd0a962ca5bd46402f88dd"
  },
  {
    "url": "assets/js/23.b10dcc44.js",
    "revision": "be8f78dbe60200ac47631678905e7de0"
  },
  {
    "url": "assets/js/24.d1b9bfc8.js",
    "revision": "61ea04fc4875e4f38aa24506adb4c370"
  },
  {
    "url": "assets/js/25.287e4556.js",
    "revision": "3e6d40fce7f7c88fd018c379302a678e"
  },
  {
    "url": "assets/js/26.69655186.js",
    "revision": "851a2b1dec0ca2b0e4e2973207c3cf3f"
  },
  {
    "url": "assets/js/27.a4168dce.js",
    "revision": "480c30395733ba978e22a8a689ef059a"
  },
  {
    "url": "assets/js/28.3baf6efc.js",
    "revision": "5cec973368e1542ef9a43df06121e2dd"
  },
  {
    "url": "assets/js/29.3e867f61.js",
    "revision": "6ef4464d27cc070158dd28e2d3e8728f"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.645e03b4.js",
    "revision": "2e8ae29f2776fbe86b73f2c19b47cfb4"
  },
  {
    "url": "assets/js/31.55639adb.js",
    "revision": "d20d4c087fb131c6f54863489bbb5cb8"
  },
  {
    "url": "assets/js/32.ec3ead67.js",
    "revision": "bb813fff3d7626051c4e8eacde5c4947"
  },
  {
    "url": "assets/js/33.c606aa0b.js",
    "revision": "5898820e32dbeb1aa5bc464f4f98940f"
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
    "url": "assets/js/38.9dce5b8a.js",
    "revision": "a3bd395f036f0764f0a81da1df504189"
  },
  {
    "url": "assets/js/39.fc83967b.js",
    "revision": "3bfca5afb8869ebfc8847638c91550e8"
  },
  {
    "url": "assets/js/4.903bb4c8.js",
    "revision": "686f40135815e1b92b21d077b9867af9"
  },
  {
    "url": "assets/js/40.7bcfadf5.js",
    "revision": "4b167392d7ab7532aa741cf54c681874"
  },
  {
    "url": "assets/js/41.40c08d98.js",
    "revision": "85384551cd36f94924f836d1b4d4aa42"
  },
  {
    "url": "assets/js/42.52f2ed62.js",
    "revision": "f1fb3183bcdfbb2628964bd846a5fac8"
  },
  {
    "url": "assets/js/43.b9fad22f.js",
    "revision": "8b83173d2e4f25db58d67e53742e4015"
  },
  {
    "url": "assets/js/44.612967de.js",
    "revision": "c8925dfb617122886aa6ee82541094a8"
  },
  {
    "url": "assets/js/45.b97dd0b8.js",
    "revision": "5111f86a1ac91047d9571bb2a17ddf7e"
  },
  {
    "url": "assets/js/46.7626d943.js",
    "revision": "6107e78bf59d1676544c2ed777a7da06"
  },
  {
    "url": "assets/js/47.e80b1e29.js",
    "revision": "c46cec1d625da46c4f3c2d7663e2544c"
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
    "url": "assets/js/app.207a3950.js",
    "revision": "0ebe032b22b375bb8f85352f0f2cb654"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "e2f147fc8430b3fc8e916cabbbe6802f"
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
    "revision": "b30a40187aaf086e613ec3fc307ee8f5"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "100e6d0dc8e53af45acb11046d34db45"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "2f6cb0a202146b83244b4bb082b71027"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "9874d0d301190f73ecea625cc1a502fd"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "40203a93531d41585cebd9129e3b9cc7"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "f6e0c804b17de9507414feab482abacd"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "a34accee3d445f4cd84707a71b2f5ee0"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "2a02174c1e7630013fbc8e09af69dc42"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "740435c48ed1ef18d82b9342ea097464"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "0c3ef00438fba98b08cf7c8a1e4ad132"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "7b8b8df0bd30b1d9512df7faaa027472"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "537be3ddc04b5d9ab2ba57e560dca0f9"
  },
  {
    "url": "guide/index.html",
    "revision": "7077218f90cb4b48cbd02e3721704345"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "850742580a01b9030bb1f6de7486d4ea"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "73fc5370f1449fc45f067c40cc0a4993"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "5ae548765eed5db62769743c556b0453"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "e6ddd23f8249d85e5358d4220300e5e7"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "c5bc23972969f9ab205b4b93c7fa6dea"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "155d7ca6c67fc0dff84fb836c9885d0f"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "c7461dbe621ddbf19d1846840a0397b3"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "22f6a21ba8ec239583482d1af6d87fa2"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "5ef4d0158298ab9ba5a82bd1648ee1f0"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "1839495a149d7e05fcce0e6a656864fb"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "defca5bf65190a308b0b711160eeb006"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "1cd12c78873cb1a0f437d67908d876e7"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "06ce73d50d2355b81007e53a9196d82c"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "169832b0d252d6346120c381a8a6323c"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "17d75ec7eafd21c106e605175b2f0d5f"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "131be4d6bdb11a45e45731ba0bc9d826"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "6dd1367be61026d0d8eb3a2189dc9077"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "f37f1a446a1d47e12c41a6a05eb14113"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "88bc54dd6dba87cc8d0ca1de77fd0246"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "e8c44328a716307a4f5e1f4dbac40725"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "173ca853dc74b7a6b3e9b1e4d7835263"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "ea549651c951b0f51bddd7853c77ef64"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "12240d091a1141e5f59117daf069518d"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "83ccf8360295778e0d8aa4514f139026"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "57ca7d1a198dc3e8df76b634d508aa22"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "d4b64dd710035f28aa9396ec67887448"
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
