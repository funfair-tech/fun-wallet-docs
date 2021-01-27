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
    "revision": "6c53c049b40efa7440e18aa379740768"
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
    "url": "assets/js/10.b3b0215b.js",
    "revision": "14ed26763b876d47a3fc43f699532fd2"
  },
  {
    "url": "assets/js/11.716ed28a.js",
    "revision": "2295ddfa8731d426ad222a0299d9c586"
  },
  {
    "url": "assets/js/12.3c8442c5.js",
    "revision": "ec9a2337d43512b2dd23259ea0ecc21d"
  },
  {
    "url": "assets/js/13.5be39116.js",
    "revision": "9544adf06b2b3d49c8518c9844e13f3d"
  },
  {
    "url": "assets/js/14.14ac35ce.js",
    "revision": "85f21dfe47467634a0a4dab2c6ea615c"
  },
  {
    "url": "assets/js/15.7abc8001.js",
    "revision": "5c27583e62df126d57487bb686441a15"
  },
  {
    "url": "assets/js/16.67421f56.js",
    "revision": "17415cd6e28a72699809b3d6d8b140df"
  },
  {
    "url": "assets/js/17.23ec5813.js",
    "revision": "1f287fc6f41f7a12e02ecad95509c008"
  },
  {
    "url": "assets/js/18.1261f454.js",
    "revision": "5b517e005a09b49ee52e0168272d8ed3"
  },
  {
    "url": "assets/js/19.879a82ad.js",
    "revision": "12981e35160f75708d010bf3909bc539"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.a020210d.js",
    "revision": "9fb6513f464fe8fcdef2f449c38b22b6"
  },
  {
    "url": "assets/js/21.0f0426eb.js",
    "revision": "7c295e7e7e47f3fb64488745ed22ecd6"
  },
  {
    "url": "assets/js/22.06cf61d7.js",
    "revision": "a2ca2e0d8d105813b78149e478e124c9"
  },
  {
    "url": "assets/js/23.849a2ad2.js",
    "revision": "0b6a235a53f500cebf72cfec76db038c"
  },
  {
    "url": "assets/js/24.ba43f529.js",
    "revision": "fa3b6f0151f18fe3c3a6d50a1142198a"
  },
  {
    "url": "assets/js/25.b11dec33.js",
    "revision": "2bb04ac621479072480f303102157776"
  },
  {
    "url": "assets/js/26.05692018.js",
    "revision": "5283aae76cb0192a1fae3a4e2291726b"
  },
  {
    "url": "assets/js/27.f488c5d4.js",
    "revision": "5a921ddcff36d4126f94f49242e073fc"
  },
  {
    "url": "assets/js/28.735f09f5.js",
    "revision": "b21a5dc4b97c31e58fecf5d98ecf7d8a"
  },
  {
    "url": "assets/js/29.a615992d.js",
    "revision": "49cedf78b809abbae0348b77a46012b9"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.e22fad1c.js",
    "revision": "d1b81c08f4e81d97ccae56798f8274cd"
  },
  {
    "url": "assets/js/31.745cd81e.js",
    "revision": "741d68dba967cb70b99df99b7055085e"
  },
  {
    "url": "assets/js/32.c513284a.js",
    "revision": "e68d3be93d954aa6062f1a48a59122c9"
  },
  {
    "url": "assets/js/33.8669f065.js",
    "revision": "30bf1abbaed77146b3c7d7bf2d44634b"
  },
  {
    "url": "assets/js/34.626a4246.js",
    "revision": "782e888b43ef347d3cc85220f206fc14"
  },
  {
    "url": "assets/js/35.8b93ddd4.js",
    "revision": "ce778b1369c91431dc3310191eea17e9"
  },
  {
    "url": "assets/js/36.b9d53bb7.js",
    "revision": "06d48b66464dc0571c2c3b962c2901f0"
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
    "url": "assets/js/41.093cd845.js",
    "revision": "325c0d9e90c74be2a9c76535a2bf9729"
  },
  {
    "url": "assets/js/42.c73bffe8.js",
    "revision": "8e89968c143d11536658ffaa0637874e"
  },
  {
    "url": "assets/js/43.5f36a386.js",
    "revision": "5435c810eed3123c8c7ea8ad103d2eaf"
  },
  {
    "url": "assets/js/44.71915e8a.js",
    "revision": "bf9823dad996aa190bfc21c50182fe7d"
  },
  {
    "url": "assets/js/45.a2d7f2a7.js",
    "revision": "ba97d4f5073646e7730f98890493b4d2"
  },
  {
    "url": "assets/js/46.61e42c7b.js",
    "revision": "0d1da9b0203b1b555b5c2f04ace7a503"
  },
  {
    "url": "assets/js/47.d0c05bfa.js",
    "revision": "53f9088923fab5434fa6411fee767419"
  },
  {
    "url": "assets/js/48.a3c8b197.js",
    "revision": "72362a83737467c6cecf61779065eaed"
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
    "url": "assets/js/50.75b58c61.js",
    "revision": "c5a58b8099cb5eb9ca21e1452cdf02c2"
  },
  {
    "url": "assets/js/51.70ad87aa.js",
    "revision": "cfd44ce25aced8301ae809dac5416ca3"
  },
  {
    "url": "assets/js/52.5a8f6acb.js",
    "revision": "464057c8434dc7924edc8c09eff60add"
  },
  {
    "url": "assets/js/53.551f708f.js",
    "revision": "a0016d344edefce1897868feb5928851"
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
    "url": "assets/js/57.2484e8e9.js",
    "revision": "3f900c497d07bdf2726f271c9123a8f9"
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
    "url": "assets/js/app.0b5ac731.js",
    "revision": "8ce6b1ab5c59b6165dd51bde8ded5830"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "540fd1a401dbae1a4ca63e676031b23d"
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
    "revision": "70322fb5fb61e968fac61ebded461bee"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "ae35b9a6c30c1e2183cca78df8953721"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "d7832162394a7f37a6b2f5c84a364a92"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "c05d4a95876aa4988e7317e293ec098a"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "7ebd038ea20e4f790729258f61b9ada0"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "e59356970211272445fca85ef8a6be46"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "e7fee3ec8460335ccb6b075662af3d60"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "d4f1ebda91cbf791f5e3e454ab4a8050"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "310242fd7368ee9d6a47eb7cb3dfc34d"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "fadbb2f3b7557516932dd736ef36de62"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "d98a9e5f1f471080a024b93db8bf1cb4"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "73d2ab1f2eaa20b001c5216c7454e9e9"
  },
  {
    "url": "guide/index.html",
    "revision": "974e68b15e6abda3f29a1c3b7f85abe9"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "911a2849001a9cbac6b8d15982bf859c"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "d1133bcaa2e90b4fb33b22f253e5eb79"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "37e4f3b97f32aabe3f2c90339147bc0a"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "b95b3b600949bcb444ec7651be94fc15"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "ac15668512bc5437b852e941fc67d111"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "68b00579ae974c58a77644efa358c4f8"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "d3d2f16857c7dcdf6040544ed840a86e"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "172e7abf9111a26d708b7e78a5e49948"
  },
  {
    "url": "guide/information/support.html",
    "revision": "f5ced2b379c1938a3a87d4358c3b20d8"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "0125fca4564bd760203b6717d1fff304"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "ae1df49cca625bbda6a970e4514a1a2d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "c56ce913c40b527fb138b58c2b593b63"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "51a9e8f46dcfea5c59085e8d701e8fc0"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "4f9261210740a44ab39f46a4c2a5ba61"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "7985fc0286df8408c86cb43d96d1afbd"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "1da4632b9699c0decca56e6b641e1e8e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "0d729164514b2bc4cf0cef3dd69dbd56"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "dbb00705e5112592df4e9aa9b9917f13"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "7aca5af6ead93c00d2d9d9e5008c8a82"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "346049a20fe4a08a95536297bc79016b"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "09c054bc6203c2485ae12e01bb4df73a"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "afd03513d312891f729bfa738b962be9"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "34cd408c33e0c11ced44abb05949c060"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "fdd4a25ba8dae9eaa694ad40d9e56434"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "2cde959932b84ac15ccb6d1073fb2241"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "ae8fd34b369ab2aaa4cddcd2a7b15977"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "7b388423522b758cc2f9720048775e24"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "560dfb9aa350c6c43e296cbe2527c0ba"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "0c7b3fcfd461965f404d5df024a90e6f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "dc48900718ea049542fe8e1f44628cc9"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "235b197632a9f6b211b86baeae8f4283"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "dd98db83e652d7f47cc43219cbba090d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "5e484e6d6978d676e9e730e9b9f1f4eb"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "25a73a8a1adb111b7855204d054799e6"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "231ef50ff65c50572cc3b13cace2d163"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "4e9a969fd879e6fae59bd00613599d7d"
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
