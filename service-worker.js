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
    "revision": "b7e7695d4415d6a73de5e348f319e081"
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
    "url": "assets/js/11.9089fd6d.js",
    "revision": "e48906aaf1ca7e31973d9e1d6c979069"
  },
  {
    "url": "assets/js/12.32aa9719.js",
    "revision": "38821b631fde74d2fe26bc76c34ac9bb"
  },
  {
    "url": "assets/js/13.b8110229.js",
    "revision": "879518840f783931d5bbc60fe10d65cf"
  },
  {
    "url": "assets/js/14.14ac35ce.js",
    "revision": "85f21dfe47467634a0a4dab2c6ea615c"
  },
  {
    "url": "assets/js/15.be633ee5.js",
    "revision": "60aa3e3053c0bff81614474acad5e262"
  },
  {
    "url": "assets/js/16.4f9f0def.js",
    "revision": "6632433123bae12ccb2e5d85470d38de"
  },
  {
    "url": "assets/js/17.23ec5813.js",
    "revision": "1f287fc6f41f7a12e02ecad95509c008"
  },
  {
    "url": "assets/js/18.e41755ec.js",
    "revision": "e04540f46b517ceabc2e11c99bfc6c9c"
  },
  {
    "url": "assets/js/19.9f026561.js",
    "revision": "538a00703f80c7f2f45e55ab1bd7786c"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.d5123399.js",
    "revision": "6c7c809d8df998282a573218caeea6a5"
  },
  {
    "url": "assets/js/21.f5a35a65.js",
    "revision": "a53e400ded2bd7952cf16f5a6a63f6d4"
  },
  {
    "url": "assets/js/22.1dc6de8c.js",
    "revision": "0d2d469a07a419a1845f060e93e6b6c5"
  },
  {
    "url": "assets/js/23.242af30d.js",
    "revision": "6c7ac480bc7d9072f0288b79797b2647"
  },
  {
    "url": "assets/js/24.ba43f529.js",
    "revision": "fa3b6f0151f18fe3c3a6d50a1142198a"
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
    "url": "assets/js/27.11d419fc.js",
    "revision": "469434fc08473ea461d3e90e8d4e119d"
  },
  {
    "url": "assets/js/28.753033f3.js",
    "revision": "302d4c551499a9b9b06cbb43ab40053c"
  },
  {
    "url": "assets/js/29.3efcdb31.js",
    "revision": "37cc12786d20f0137b4e255d9fca40b4"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.d21269da.js",
    "revision": "f178b99e0baf84cffa6f424348d2e7e9"
  },
  {
    "url": "assets/js/31.4133c26f.js",
    "revision": "ea9f2fbb49c0bd5e6696db28e3696c5f"
  },
  {
    "url": "assets/js/32.57c55797.js",
    "revision": "07085aca0ef09339454203da5f403621"
  },
  {
    "url": "assets/js/33.f75c8e01.js",
    "revision": "1b1ad1a61de4c5d2a7ef79fea49fd2e7"
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
    "url": "assets/js/36.af9f3c13.js",
    "revision": "9c45260557e0a7339a2cf3348c48050a"
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
    "url": "assets/js/39.50a9e882.js",
    "revision": "22f9038774313bc331b435b9ac7eb4fb"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.81725498.js",
    "revision": "d25244051d63fbe27666f5f1c3f37075"
  },
  {
    "url": "assets/js/41.2d4a7d15.js",
    "revision": "0f0e7817926492ac511ad0b220533727"
  },
  {
    "url": "assets/js/42.92def178.js",
    "revision": "684358f8e3f8875b2631d9a61240268b"
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
    "url": "assets/js/45.fb0e4916.js",
    "revision": "64337cbc5662fdd2578a33854f58b4aa"
  },
  {
    "url": "assets/js/46.61e42c7b.js",
    "revision": "0d1da9b0203b1b555b5c2f04ace7a503"
  },
  {
    "url": "assets/js/47.ac9cfa3d.js",
    "revision": "a5bd6794a011976b39827c2548228cb5"
  },
  {
    "url": "assets/js/48.11dd73a8.js",
    "revision": "bb8cc77f8cdc65ac146e36df3e564788"
  },
  {
    "url": "assets/js/49.66483ab9.js",
    "revision": "4ce423ed1ac2546bba66f431f334c5cc"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.d9fd900c.js",
    "revision": "af8c6a95ca5610d8acd210d3aca16b54"
  },
  {
    "url": "assets/js/51.70ad87aa.js",
    "revision": "cfd44ce25aced8301ae809dac5416ca3"
  },
  {
    "url": "assets/js/52.0027beee.js",
    "revision": "78cbd6fc86d83e3606cd877a94615b16"
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
    "url": "assets/js/57.61bfee78.js",
    "revision": "8cb1d0c3619fdc1d2d4fadbff1761923"
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
    "url": "assets/js/9.2e790c1e.js",
    "revision": "155004c37dfde7da3d350d3438757abe"
  },
  {
    "url": "assets/js/app.c1c81ba8.js",
    "revision": "47b3c272ad377a9dffa1da6f287b70e4"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "d91254a18c21220d1208869be0505335"
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
    "revision": "c331c0311942ec4ff985b35a98daff0b"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "018a3209a54f035954ec69f8fa2a0e7b"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "1724cac3e2b59a56a2f8b817caa03121"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "978f8d4e107b6e003ca28b8c3388b71b"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "92dfe62e5f9ee842e6222d584ba7b0ac"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "c0ab2b229ffb0d4f345b9b478fd09db1"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "e89f8b7bb7e3bfabc1d004dd0154b18d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "9e017c256aaa7b5e243c3de186993950"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "ae5f401076e1f98dc1da158430cfee81"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "40f3197b211e907a06928334c0464f1f"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "e6cee844616ccd4e02c4131897f00f53"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "021c473a70d706290acc147b5930c84a"
  },
  {
    "url": "guide/index.html",
    "revision": "d4e7ce813a07d720cfb5ed9ec9b6ed45"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "f9620f2044892b260f217a6589fcc412"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "fec7aeb3cf819a7fb3c3eba919c86b0e"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "8efa3dcd2eb7da2f5e75d2c0c9a2d2f9"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "f43bbe7dbdc77914ffab21836ec1c508"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "ca36bd464996240e9f9a4c6bf2dd43c7"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "27bf94e2ac2483a638ca416a0c01c2a9"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "70ebd580b1703f8312011c664483bcc4"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "583e6b1ff64c0d63b1bacdf9bbc6387a"
  },
  {
    "url": "guide/information/support.html",
    "revision": "c7d6f79dbce774405215b1b9c58061ee"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "665a96daf85499e7aea5eb6225bcf3b4"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "3fa16af3b5bc252d3319350882e8dde2"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "3fdc1cd1477084f1e34975ed27f9108d"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "80d8a55625f5226a6e28a2c13095e207"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "37d1a74962cd3cdf13f00b09c5cbccd8"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "b2920f048b512ce43ecb502d7e60ba23"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "3fd57c481b400a62f47049f95030c6e5"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "6917919a012ebe56032b74daf0531e4a"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "5d028c2605b73ee97a5fc3a8309b80d6"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "7d08e68a30e833d744dd39b81a86b38c"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "dacac412b0766e141d8a57d45b34dcc8"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "6edacd3287a494b3e3c8fb1465c4b10d"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "11d9e90ff4c6f9cc233f936889a1560c"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "7b2e5aeaaeae9059c96a0b0f134ddf5f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "f60b87acc4ed6d3e51993323df3519f4"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "33e373ade884c75b371a042d3e6322af"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "fa39a183a6a60f3121350bf4a57677d5"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "f33bb8625216a9d9c6f3da29f6b583d7"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "4a5f4f7f6527845709719a5b7c8e1579"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "a0f2465e105abee1cc9abb844f2055de"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "3d3df347a81686a88d81befac15f0349"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "bd2f672cccfa529f4ed5cc0f5d79d590"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "fa3bc0ef9b344437c2bccc57db84d361"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "95118dc6d2cb8edf35a0ad1621c73ccf"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "ef4feb0d7cd521ea8c43bf6290e64ad9"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "50d139ee136bfc5d2c052d94cec9f19a"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "5fb4e538143720f1e2d1c648b8d416ea"
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
