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
    "revision": "9ade2451cd0dbe55ffd2cdbfe8f363d5"
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
    "url": "assets/js/12.ae3e84b0.js",
    "revision": "899f07d7a484167d9132d6f5227b1397"
  },
  {
    "url": "assets/js/13.d774358d.js",
    "revision": "5d57f009b778118dfb88ced4443e9ef5"
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
    "url": "assets/js/16.fc9eee4a.js",
    "revision": "4e0da963616865c213881ee5dffbce14"
  },
  {
    "url": "assets/js/17.607835a5.js",
    "revision": "e9b85b42672279bceed54ffc48719acb"
  },
  {
    "url": "assets/js/18.5d59d490.js",
    "revision": "fd19bc6c72cd100b184c446517cdd457"
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
    "url": "assets/js/20.b99f91cd.js",
    "revision": "0a0fe1d5ee0b74b33234994216410fe2"
  },
  {
    "url": "assets/js/21.84374f73.js",
    "revision": "4bc97f4c2c2fb70223bc7c258bf5e0d4"
  },
  {
    "url": "assets/js/22.1fc8115b.js",
    "revision": "321ddb0f98e23ad4fabe14126cfe2ba2"
  },
  {
    "url": "assets/js/23.fb139746.js",
    "revision": "8380f1ce4e26a67447a3cf186b5c5ebc"
  },
  {
    "url": "assets/js/24.d1b9bfc8.js",
    "revision": "61ea04fc4875e4f38aa24506adb4c370"
  },
  {
    "url": "assets/js/25.0752237c.js",
    "revision": "61b68a75832f1bc3c09d1e20a2e9b05a"
  },
  {
    "url": "assets/js/26.cb9d0821.js",
    "revision": "766dd413cf8112f65b3a509457bcbd14"
  },
  {
    "url": "assets/js/27.ff4e9f0e.js",
    "revision": "95b90d67daf026ec0d4901b3dd830805"
  },
  {
    "url": "assets/js/28.3a2a19b4.js",
    "revision": "05acdf61a4290a601e7c7a5420170779"
  },
  {
    "url": "assets/js/29.8f61fa7a.js",
    "revision": "bd620cb2488bdcf9d7011b42f0d8ce7f"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.df08c004.js",
    "revision": "9293678e11684c908ed4dd2b7784458b"
  },
  {
    "url": "assets/js/31.c59eeedb.js",
    "revision": "45900e1007a553b21e14a22ac67e0b02"
  },
  {
    "url": "assets/js/32.ec3ead67.js",
    "revision": "bb813fff3d7626051c4e8eacde5c4947"
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
    "url": "assets/js/35.be1cac17.js",
    "revision": "40d078efa3f70a044ae492456d23b384"
  },
  {
    "url": "assets/js/36.d15471d4.js",
    "revision": "14993a3a832f43e7e5cf7ec1799a40fd"
  },
  {
    "url": "assets/js/37.c080b4c7.js",
    "revision": "dbeed24ac10d52b0fb1e234d23b335fa"
  },
  {
    "url": "assets/js/38.741d42e3.js",
    "revision": "b5025e2750413c052896f608c1af945c"
  },
  {
    "url": "assets/js/39.a7ea4a8c.js",
    "revision": "173f345b648c24a768e74e233db7df9f"
  },
  {
    "url": "assets/js/4.903bb4c8.js",
    "revision": "686f40135815e1b92b21d077b9867af9"
  },
  {
    "url": "assets/js/40.10247e46.js",
    "revision": "0e0124c5afcf70893bcf41149f1603dc"
  },
  {
    "url": "assets/js/41.40c08d98.js",
    "revision": "85384551cd36f94924f836d1b4d4aa42"
  },
  {
    "url": "assets/js/42.ac7cbdd0.js",
    "revision": "a6f3306fd1b244ff220f5d476bd0ca93"
  },
  {
    "url": "assets/js/43.31fa7f20.js",
    "revision": "fbe1ddfc5b2153c0db2820389f2a66b3"
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
    "url": "assets/js/47.24299cbc.js",
    "revision": "e7fd9aab26b2cca11925281d2d086281"
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
    "url": "assets/js/app.572079d2.js",
    "revision": "17eaa0255c0c09a9fa4b14a43e21caee"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "9407539ee5fcf260302521166ad1546c"
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
    "revision": "bc74a609bf0ff174c8c4364a6f2f8277"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "409e9533a8e094303cc71b5c1d3ae950"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "5a6814080df30c019047274631a5651f"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "84deabc0341c5154da4bd3f5b7660b29"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "b9f7b641053d58b7912883c1e3c6eb58"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "4c20617a502e466b9fb638331246bd0f"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "488962873b9f429e19fcf00e0caf39ad"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "b1db51be091cd49410faba17c670c9b2"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "2a1a9c002f17a8534517f0fe90200f55"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "d21e1b9b35624ca496b2caf4c35e4c02"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "a0c135321c60b6bc1f1ccc39a8b06f86"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "47ebe9b58883ff45611c5f2245bf7d45"
  },
  {
    "url": "guide/index.html",
    "revision": "ca575fe4a72be592013c57c3a1602d3e"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "e0f264aba69d0441a797b9c9d020d4f9"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "512ab0e9e2fe8de3f58949c9a74835f6"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "daed5147e327db24588d28635abcc4bc"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "7351d6d267a5fc34f189192fb484affd"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "76c1a2b60e0fbb7667ef8b96d4793f0a"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "ed0599a070b15cb60641a9f8a7c23354"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "005bb773d3eac26f90cfae0a44d4b16d"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "829fa915447c9d1c132c088a16c25578"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "5ec5ea2bbfe801de9345bb16c5392097"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "70539f0a98ac30518496681beb68d9e0"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "5b79cd6af5d1a5392c1b84e0dffd7424"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "e441c1e0b9a796fd8e71497dcf0eb4ce"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "9a71f38031eaac0b9bd3352c23f6ab2a"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "13e6e1fbe10570fde51d153b1f21aa92"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "6894475493f891b45be15736079330f2"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "f3f13014eb814546111f0db3a067c86f"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "19dfc97510485ffa7e6ee77e0d517154"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "bc658fd8edf514a0704ca68301800875"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "62b91ddbf975b787cc9fcbdc7a5fb4a1"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "3eaa1e813805ea7db1c88168f30d6e42"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "c519d85620b74e5c22b48bab62e62b75"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "202a31e8f1782451ae1c760c0e752a2f"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "0492392a5d592f671faef2f619501683"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "33d62648199907c5aecac01888e71ff0"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "f500f03ba715593218755fa01fee153d"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "2b221b2652f05ac5a05f587924068ec6"
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
