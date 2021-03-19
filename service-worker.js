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
    "revision": "558a4c4ea4760fca1b04dab89371a7d9"
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
    "url": "assets/js/13.b6a8d37d.js",
    "revision": "fa2d3690de9ea250d5f4c5add4983e19"
  },
  {
    "url": "assets/js/14.7e15987f.js",
    "revision": "8d134c377bf51e21ad8aa09a8465c318"
  },
  {
    "url": "assets/js/15.af4100ef.js",
    "revision": "247468aebfe0f5ca98d4eaa944ba8f64"
  },
  {
    "url": "assets/js/16.e33c81ba.js",
    "revision": "f9b5adcacd7b7f7caf9d3df8ac16c6f5"
  },
  {
    "url": "assets/js/17.c6a52b36.js",
    "revision": "bb718a27a3068a9982396013da91079f"
  },
  {
    "url": "assets/js/18.8d067ea1.js",
    "revision": "ef11445a39478e9e13ac98a52a92ac42"
  },
  {
    "url": "assets/js/19.3f05c1ea.js",
    "revision": "c028b121fe062e8f35e74df5c00e7159"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.b1e62622.js",
    "revision": "3e20691955c89ccff0c52891cf6846b8"
  },
  {
    "url": "assets/js/21.52631233.js",
    "revision": "fba67efcab54f2790921041313d78baa"
  },
  {
    "url": "assets/js/22.e28b7fcf.js",
    "revision": "501d72ba7fd937ffac3fb516c48da230"
  },
  {
    "url": "assets/js/23.dfd783b0.js",
    "revision": "34274c2ecd2a6b587f90aca4e62776ba"
  },
  {
    "url": "assets/js/24.3617b6ba.js",
    "revision": "282f4b9afde6ab4eff507ca32d1f9d59"
  },
  {
    "url": "assets/js/25.00e26884.js",
    "revision": "9284a2a1b24720e14c0479c92134ec9e"
  },
  {
    "url": "assets/js/26.28fb04f2.js",
    "revision": "0214a86e8076f7615314b784fe8f3332"
  },
  {
    "url": "assets/js/27.6c98ce89.js",
    "revision": "bb27cf1466e92ca7901df320a5d3c295"
  },
  {
    "url": "assets/js/28.735f09f5.js",
    "revision": "b21a5dc4b97c31e58fecf5d98ecf7d8a"
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
    "url": "assets/js/30.47ef39e5.js",
    "revision": "0eff01524b044ec92b8440be5832e8ea"
  },
  {
    "url": "assets/js/31.4ddd79ea.js",
    "revision": "863cf299b9e6b685ceb82031712fc5d5"
  },
  {
    "url": "assets/js/32.9ff9e619.js",
    "revision": "80d53df9d0877e98f42848bb7cdeff31"
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
    "url": "assets/js/35.14f0a744.js",
    "revision": "9450becebda4afd67a6a66af68dd6e30"
  },
  {
    "url": "assets/js/36.b9d53bb7.js",
    "revision": "06d48b66464dc0571c2c3b962c2901f0"
  },
  {
    "url": "assets/js/37.4c455439.js",
    "revision": "130b2766531ee74940ad41845feff495"
  },
  {
    "url": "assets/js/38.c694d564.js",
    "revision": "930eb6f8de303423761f80ff1b039ecd"
  },
  {
    "url": "assets/js/39.195ffb9c.js",
    "revision": "48c3ace7b7783c24d77e03e68092f8c9"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.ce08d7b6.js",
    "revision": "6279082ab238930d97ccf13cdea3fba9"
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
    "url": "assets/js/43.02f4c8d7.js",
    "revision": "b4ff862d650650092666c4f0aa0b05aa"
  },
  {
    "url": "assets/js/44.2231f425.js",
    "revision": "26b3cc2590dd4fba16b8d7f1d16ca599"
  },
  {
    "url": "assets/js/45.32e6809b.js",
    "revision": "902495b02eb1595e5e462042c2abd1d9"
  },
  {
    "url": "assets/js/46.bdab561b.js",
    "revision": "c832ddf68b180747e17769f36b634575"
  },
  {
    "url": "assets/js/47.66d5d73a.js",
    "revision": "9e755ace19c2361054cfc9abceef5560"
  },
  {
    "url": "assets/js/48.11dd73a8.js",
    "revision": "bb8cc77f8cdc65ac146e36df3e564788"
  },
  {
    "url": "assets/js/49.973a62bd.js",
    "revision": "1063f1065b7ee0a28adbe7e554f49d5d"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.7219226d.js",
    "revision": "3f666888c3b5e9c80c0a749eb5842dad"
  },
  {
    "url": "assets/js/51.1fd48b2f.js",
    "revision": "cd910f6e206078af8cfd0853b92d21d3"
  },
  {
    "url": "assets/js/52.cbac5fe0.js",
    "revision": "1e67879bb27bf9edca5c71408b7fb1a2"
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
    "url": "assets/js/app.48ad92b0.js",
    "revision": "e40c8ed384effbe384cadf1c57804437"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "fa9a15228447b43bd80a362afeef0829"
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
    "revision": "e2044d697af2528316aee09f74b12048"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "8204884f91ea48ad2a27511004432f3f"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "ce3456789781aedec32d4d54a1c4a295"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "abd7acc893541c005c913fef3f2b0e3a"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "2bfbf7a59d72f9c98705fda5b969bd5c"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "027ea9cec2522ad2e86601806604b144"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "e1b73c90f9e1b8cc8b27fbbf769eef64"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "d2ee775b28aec6bf45b46b640fa0628d"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "85e5b42cc3a96455b747d42fcf7dda1c"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "c13d5fb75ea5b1cecc92149584da4121"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "507b78a854f38d78a7c560f51d9f6d9a"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "e42e09d311e918c704eed51525be4a75"
  },
  {
    "url": "guide/index.html",
    "revision": "9cd4ce69507b0cf9ca6b2088f51b7fa1"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "7f2dec3a07529682fdc1a525cf8d0ad8"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "30a9912051a96a2be0089da887142dda"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "3d0d111b282476a833e5d7ac8bc5cf26"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "09651f9244701af7f8644beaf8062286"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "adfafa8702e55973cfecaea5860ad3b3"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "ec27a9cb74af17ccd518d4e9cf5b4d53"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "8fc0089dc47e97de873361add0f8b239"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "941d983834972f40f8fc8d82749e2c1c"
  },
  {
    "url": "guide/information/support.html",
    "revision": "186c143ecc46d1152886693731f42c37"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "73acf8e187fcb5a1d6ab178d11100e39"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "d70a224bbb9670711b68c645440b7a99"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "f162e9fac7960b660b4ff022c75c6ed7"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "5b1d9001647da93ed18a711dde62b691"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "3d47b9d2d7d60a7bbe90790c9422795f"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "d60e9f6f115ba6e4193519b2ca9e3b65"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "ec252ef85313716316da13937724ec8f"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "b15e8f412bc42903beb58343580e8a8c"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4d07c841bee8f07bbc2db872e683841f"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "536eed3985f3215cb9a100e960a70c49"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "f7793f50d5cde5ab0df2763df714edaa"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "36a5db1f3fa0370538fc401b311ac9cc"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "76dedd248024d6c52ccb9ce7e4cfc225"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "fbf1027a003b64c8f7be1976e56943d3"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "cad27eb11ecab09ff165086b9f7af01c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "002211fbcdd91714c32b863b42bbeaf7"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "15db3b0e060abd2ba3ec7d7ebd03d5ad"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "c83204eaa6ca556d6f6ef1e13432fc10"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "5c10dfb2a93e686efdb2f2800631585e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "b389361e948cf31c02e29b7e63f72f1d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "1591b555c5aa8f2dc579b5e284340716"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "c16beb592425f81a352fb0ebe05f58c4"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "75c1c808176ecd4d82717ccff1ec4fb7"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "6cab2c9155b1f33465ad46d8ffb69555"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "fffac105c463b0b3c2c6913b69ccfa56"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "ff1dcc80ae1518dfc05924183ddb36d3"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "12c00b7e9f62567e116b647d8a897f40"
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
