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
    "revision": "43e5928eac49e2a483aaa02410714c14"
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
    "url": "assets/js/10.4625b6fb.js",
    "revision": "c3b0d90ed317adc82ba83dbc51f56230"
  },
  {
    "url": "assets/js/11.f632004d.js",
    "revision": "ac41028c35d5b13d1eb4a00978e05c61"
  },
  {
    "url": "assets/js/12.d1e56508.js",
    "revision": "cecef8e4ead108f6cde0be3f490f317e"
  },
  {
    "url": "assets/js/13.0b978695.js",
    "revision": "532ee95301d057e9b2898c516dd3785a"
  },
  {
    "url": "assets/js/14.d3874a17.js",
    "revision": "9f03b9a56c2a4a050a88cbfb95b7591f"
  },
  {
    "url": "assets/js/15.af4aeec2.js",
    "revision": "a8657b3d541bcff9a9ced716d8393857"
  },
  {
    "url": "assets/js/16.1dcc7b07.js",
    "revision": "ede8a3a6a37bb429324dad38c9e3a263"
  },
  {
    "url": "assets/js/17.f834c520.js",
    "revision": "c63372799743d8913eab61d448585bad"
  },
  {
    "url": "assets/js/18.3f54564e.js",
    "revision": "183cf7206e24eb19aa37796fea41b87b"
  },
  {
    "url": "assets/js/19.19a4e495.js",
    "revision": "32c068ebed12fea2360c9d8c109af173"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.302d2440.js",
    "revision": "90e07877c6233da486c5563a17f7a72c"
  },
  {
    "url": "assets/js/21.3d830296.js",
    "revision": "bd951ea7ff52f877e5f0e6cddd376315"
  },
  {
    "url": "assets/js/22.fd4a60e4.js",
    "revision": "dc640bce42d754ad0c10ebaa11e34f5f"
  },
  {
    "url": "assets/js/23.f32faa52.js",
    "revision": "b93d2e5119410ed3553514e18c362a75"
  },
  {
    "url": "assets/js/24.a322992b.js",
    "revision": "838e0ca40e3ed6ba78fe91c6642c9d77"
  },
  {
    "url": "assets/js/25.ee7e90cc.js",
    "revision": "1253c037ff1e6f2dfaf5432a7af9a2a3"
  },
  {
    "url": "assets/js/26.a09e2aef.js",
    "revision": "a6ed9d1df3493b88061403be9abb4290"
  },
  {
    "url": "assets/js/27.8b710ee5.js",
    "revision": "292b43d4bf9bc5f04bb495b867ac8fd8"
  },
  {
    "url": "assets/js/28.4b44e3d5.js",
    "revision": "cf30eba5420a62d4e41d61c44cabf098"
  },
  {
    "url": "assets/js/29.978edc7f.js",
    "revision": "729f08893bde6ac028db9e9f6d62906d"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.67b44be6.js",
    "revision": "8f9f4ac1bf8de4873aa996caf792645b"
  },
  {
    "url": "assets/js/31.f321fb83.js",
    "revision": "a5a7269835fc821f86700edbd8535a0a"
  },
  {
    "url": "assets/js/32.f102b203.js",
    "revision": "2bf5518c681cecc4556084af8a3558cf"
  },
  {
    "url": "assets/js/33.9743d287.js",
    "revision": "2f779d07e2819794e6f2d4874011f14d"
  },
  {
    "url": "assets/js/34.7fec65b6.js",
    "revision": "e4926f0db7deb821b5da07c7193ccbe7"
  },
  {
    "url": "assets/js/35.e6ece728.js",
    "revision": "246f69fb70935d2c93d30dea88782581"
  },
  {
    "url": "assets/js/36.70dc8c46.js",
    "revision": "41ccdf02e336b171bcc9f1ff4bb03d76"
  },
  {
    "url": "assets/js/37.9d3addae.js",
    "revision": "3d28e77c927936e62f6194a96ab1eec3"
  },
  {
    "url": "assets/js/38.6f18a8ff.js",
    "revision": "a75048d4bf4436d8ad4281c740c00a68"
  },
  {
    "url": "assets/js/39.3d1a0c7b.js",
    "revision": "99be149e70493aac1e702c9a95b7bb8a"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.4592ca50.js",
    "revision": "739cf264bc4fb5f3210246d5dc50983f"
  },
  {
    "url": "assets/js/41.55175011.js",
    "revision": "6a91c668f46e0dac20e6e7ef5166c23a"
  },
  {
    "url": "assets/js/42.74ea80fc.js",
    "revision": "4161c9a7443a3ab39608fbf8652a6afd"
  },
  {
    "url": "assets/js/43.3f9763d4.js",
    "revision": "81a297e52b3d52cd1e772608b32793f1"
  },
  {
    "url": "assets/js/44.6bd2234c.js",
    "revision": "a7422ad9df90265069529816b096630e"
  },
  {
    "url": "assets/js/45.14a1a4a2.js",
    "revision": "b8d6a494a772222494c04956db02e961"
  },
  {
    "url": "assets/js/46.43f8e8a4.js",
    "revision": "6c7f25c2c9569989f14d791313080c5c"
  },
  {
    "url": "assets/js/47.5c15a922.js",
    "revision": "d4e8bced94a870ae33120eff47b1c56a"
  },
  {
    "url": "assets/js/48.c64fb647.js",
    "revision": "1981badc8bfa806de1258fa9e8e8be54"
  },
  {
    "url": "assets/js/49.14d9b24f.js",
    "revision": "70066578f219c34aafb653dd545f6958"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.3ed36284.js",
    "revision": "87c8bed28d3aa0744a135710b37623a2"
  },
  {
    "url": "assets/js/51.dff14e6c.js",
    "revision": "4f861bf26a3f1463038ae5b754c05b1f"
  },
  {
    "url": "assets/js/52.4b25b9ac.js",
    "revision": "9b1cf4ccf0d7f323b72f05e25de76343"
  },
  {
    "url": "assets/js/53.01310ff8.js",
    "revision": "5888372a6633e9b1cde71ac9d73d839a"
  },
  {
    "url": "assets/js/54.95453f13.js",
    "revision": "5f17cded6cb678797c7eafe56f22d82b"
  },
  {
    "url": "assets/js/55.2d1a69bb.js",
    "revision": "8886266535155f8cdf74ea050a21e46f"
  },
  {
    "url": "assets/js/56.71c8e044.js",
    "revision": "3449cfdfe840181636ecd7d166ba718a"
  },
  {
    "url": "assets/js/57.891f780c.js",
    "revision": "e2734e11ab61be5b86d272558097b327"
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
    "url": "assets/js/9.3b8b4a6e.js",
    "revision": "acbb04e9b1eb58f28307eeab748a5b54"
  },
  {
    "url": "assets/js/app.27e06750.js",
    "revision": "8b51519cda0ab206ecd83c9b1f7f5b67"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "88936f0eb01d6b75ef28f55dc6182d47"
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
    "revision": "cbf12bb648165161fdbb5b804613edb6"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "d76b66f26534509aa9a4e9ef7a2a76fa"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "9397aee26ccf5498da5a5b7dd256a2f6"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "cd4a9d295d719b3cb159bd76b8ca0437"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "99fc7ccb198d26df3ea7bcb124738ec9"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "40616ca06c9901be7be1f4d4b3cddb34"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "95d0ee2a07591ce728c0891de1b1700d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c7ecb1097ac858e09273a254999a5273"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "c657f5c3c50368395939cb9a187c56dc"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "d19d7bf36c04e0b9def3194a24750dba"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "b4688a65665a093c7b7f4960cbaed524"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "27641ca39a61fd87f718b993ff7f3ef0"
  },
  {
    "url": "guide/index.html",
    "revision": "a75b084c86170ef49497515630e23e0e"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "69e53a81ce8b2679dfeca4072bdb804e"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "6984b5a39c4d85ad692f331d1f911e74"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "eed41b9acbb8374a7940fa070a74a95e"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "02d3e61eb33b0bb2efb866122b6d6ea1"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "4ada7937d8f663138d3613697e0b49ca"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "e4ccd132bed7631380463e68ad119179"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "68519224fed92271ce34a70aec018d2f"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "f1547a5da2f1a0971dd0cb873ac17c6f"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "13c62ab3335f9ef3c777080cb9bb1efb"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "8fc678a5e57c0793f2560ae660dcfe1f"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "2136d6eaf153fad85b72ad88671ee38c"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "f7b440fde3822fc05ce816be794c33a0"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "79e3d99778969d1fcbd9ea501ef3b3db"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "f14ef284e461f0deab74e039738fe52e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "83c323acef201c80eeaa7a3dab3ff187"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "7243ff25f8bc333e1ba2432d0179fe39"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "8aeb5216a0d5ec0f8fac9b2843cc3bae"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "8771f4e12b708895ffad6bac95c57dad"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "837ec3319f657658e7e46ae783d7b14f"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "c5883cf871b72beee99fe501b3c0c04f"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "b6f78baa5806650b350527e2367f11b8"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "8ad2c1f72ce9c5028609431c56675180"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "f5a131dee4a4ee7692ae5a08be98423f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "1b6fe4dc6a7c27e53b9c8d9226a57966"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "985547a362c3a3131f21383aed3e158c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "268146bbe8b9ed41e6307dbe34da7048"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "de30244b36856950d9c52da1ebd38386"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "8415eea966e47dca362616f94d282e47"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "b9d217975ec42a922bc95e7fbc03e5fb"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "5776feccba87ad123f092af1403259a1"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "f5b752c46c834487cfde95d75415c345"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "ef9414d1444b5ffa16878b6c91fb34a6"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "119990e61dbd1e60ead0c6a8b19aa97e"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "5e32bce9fc4e9d58c3e598f1e7dbcfb7"
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
