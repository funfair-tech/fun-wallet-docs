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
    "revision": "1f8f3d707e8e3139d0331314e4d2a561"
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
    "url": "assets/js/10.485b2012.js",
    "revision": "beef00c85aca30e0ec07da4aeb5639db"
  },
  {
    "url": "assets/js/11.f632004d.js",
    "revision": "ac41028c35d5b13d1eb4a00978e05c61"
  },
  {
    "url": "assets/js/12.ef5743ee.js",
    "revision": "7e216113c6a5080b81b86ce24da0d593"
  },
  {
    "url": "assets/js/13.6c42da6a.js",
    "revision": "b3edc10922e65768d7a17f42e6645dbb"
  },
  {
    "url": "assets/js/14.14ac35ce.js",
    "revision": "85f21dfe47467634a0a4dab2c6ea615c"
  },
  {
    "url": "assets/js/15.c24e8281.js",
    "revision": "253c7c2354ae3625075c9fc7a6d2fa31"
  },
  {
    "url": "assets/js/16.1dcc7b07.js",
    "revision": "ede8a3a6a37bb429324dad38c9e3a263"
  },
  {
    "url": "assets/js/17.2ab9b3ee.js",
    "revision": "e13a0268ce052c89bae1e45d366e63f2"
  },
  {
    "url": "assets/js/18.f42220ea.js",
    "revision": "87bb58d832cda875bf0e57d1cc9424c6"
  },
  {
    "url": "assets/js/19.3e66782d.js",
    "revision": "180605239899fc957e528c6f4ab80f55"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.b849ff56.js",
    "revision": "51a904e690aa2c2fdce8c379ae3238e5"
  },
  {
    "url": "assets/js/21.f9455d32.js",
    "revision": "eceb4271b0306373a98a3874389552dd"
  },
  {
    "url": "assets/js/22.eb4430e0.js",
    "revision": "c786c2f94727adde7578f883fa6af920"
  },
  {
    "url": "assets/js/23.5fb76bd3.js",
    "revision": "7629e0fc6d07721bee084759f8c472db"
  },
  {
    "url": "assets/js/24.25d2cf07.js",
    "revision": "0324a8774ea704344fdf6f2e42f0e0f3"
  },
  {
    "url": "assets/js/25.7bcff97e.js",
    "revision": "63021ef517f5edeb13fbbaee44b0ebbf"
  },
  {
    "url": "assets/js/26.371e5269.js",
    "revision": "836ead9f9d977a8e9b611bedbd8332be"
  },
  {
    "url": "assets/js/27.6c225b8c.js",
    "revision": "257691e0c28e0ca765a15359e8a5243a"
  },
  {
    "url": "assets/js/28.bd82beb0.js",
    "revision": "23c1a0c4b35ff5af73cda5ca2174fe02"
  },
  {
    "url": "assets/js/29.66224cf1.js",
    "revision": "90738682f8e0edc54fd304612c503355"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.17600a97.js",
    "revision": "df823e5f5287c39569da1c314eb0f595"
  },
  {
    "url": "assets/js/31.6b69be06.js",
    "revision": "2339bcc285322b8c1a28cf76cf338786"
  },
  {
    "url": "assets/js/32.0b8c0dfc.js",
    "revision": "4af28658c50492b90647b1aa3317df39"
  },
  {
    "url": "assets/js/33.688a4ab9.js",
    "revision": "9be2d367af00e074ea4bf9b6bcc91567"
  },
  {
    "url": "assets/js/34.e0a79494.js",
    "revision": "8d8055aea78dc452f2a4f8881a05db06"
  },
  {
    "url": "assets/js/35.e6ece728.js",
    "revision": "246f69fb70935d2c93d30dea88782581"
  },
  {
    "url": "assets/js/36.e6daf07c.js",
    "revision": "f873fba77d4f6f91b512b3f784c01199"
  },
  {
    "url": "assets/js/37.63c6b1f6.js",
    "revision": "ee214b56537b517d0deb65fa1fa3cd25"
  },
  {
    "url": "assets/js/38.6f18a8ff.js",
    "revision": "a75048d4bf4436d8ad4281c740c00a68"
  },
  {
    "url": "assets/js/39.b1ce4d88.js",
    "revision": "df79d0aa74ad91c1ba349408eca01016"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.323f0543.js",
    "revision": "b33e1f8c06c4b5ad3ed944e3fa345288"
  },
  {
    "url": "assets/js/41.94a189e3.js",
    "revision": "af2ae3c22ae996a64ec00ecb34687da1"
  },
  {
    "url": "assets/js/42.25a76a54.js",
    "revision": "d94c3899f7b270f21d6f7086b22a3908"
  },
  {
    "url": "assets/js/43.675b4a09.js",
    "revision": "2cf7caa588c477618024f50179b8566a"
  },
  {
    "url": "assets/js/44.095815f4.js",
    "revision": "d4b8cd3fae75af0ae4a22180674c3150"
  },
  {
    "url": "assets/js/45.5cca997c.js",
    "revision": "37b4ef60693cf07aa3ebcd7de1204c24"
  },
  {
    "url": "assets/js/46.6b917d7f.js",
    "revision": "6a99f62c4efb9d0d07e4b1ff3c38e98f"
  },
  {
    "url": "assets/js/47.62edf354.js",
    "revision": "b8c5b153fc3a5b5e83701aae834b3b61"
  },
  {
    "url": "assets/js/48.15e4bba4.js",
    "revision": "5cfe42099c019feb1cd2ed069cc335fa"
  },
  {
    "url": "assets/js/49.c7c66322.js",
    "revision": "a6ce1f7eeb498dabd818d5467a9782c5"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.a70f4e9a.js",
    "revision": "b6f65fafedd8cf2e579fe5f3c4ce4877"
  },
  {
    "url": "assets/js/51.c322e84f.js",
    "revision": "6c95e3426a365a6d66abce6d40df6b2b"
  },
  {
    "url": "assets/js/52.3e643279.js",
    "revision": "889f0091f38aa528befad69131d97758"
  },
  {
    "url": "assets/js/53.2bfdf450.js",
    "revision": "9e6dc534b2621b25a0d036b851f7a065"
  },
  {
    "url": "assets/js/54.16bcff8a.js",
    "revision": "93b48d88638e5a0fe377a31421a3695e"
  },
  {
    "url": "assets/js/55.c2548db7.js",
    "revision": "d4aad4e8dc8d419d95e1969f0d63a27e"
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
    "url": "assets/js/9.1e0b8aed.js",
    "revision": "9679998f90c54eeeeed4b8d16de0e68c"
  },
  {
    "url": "assets/js/app.707bce01.js",
    "revision": "7be5804a445aedbc93bdd0cbdeb4be6e"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "79ed7beb740385979cb919678b4f41fe"
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
    "revision": "349013d98f4d30673f6e4b55fd31eaf4"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "6f3b028d2dfb7683350d6aa1299a00c5"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "6b742b6b3eaa00e49094cc5ef325d6a9"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "9767a05c0132ede07068789a81fcac8b"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "761f419ca5900d6b710deea40d829869"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "af0b81c8a64251f69d3fd772b743e73b"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "b987e571a4e512be8df03b8d3f28385e"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "be178dd9267656b8636bfa08126e92e5"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "402d018ffc59e8ccaec87b35bffff274"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "b0a25a8b41428bffc7a5f772f0bf91a7"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "7dc393d6952e54291f355f738e6a56ac"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "74e07a41e24bfd33a3e1210bccfd7024"
  },
  {
    "url": "guide/index.html",
    "revision": "2f92e6e7b45977142f6524beb99dfbfa"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "85c57a0c95f48f5e11cc698caefb0eb0"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "f19596238a0fa1c3c8e5ed905a4188e0"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "26283419f6a0cab488217e8d52292ef2"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "e5d864ff639acf057ca1b7b2071ca1c8"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "b424921afef5c24a92b8fa5025c8aa4e"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "605d92b542331b5d43bfee792bdebd77"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "6ff1da9363c86d50912739052dfdca03"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "2a696e3c98433d2566f0dc2beb34e6fa"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "0b322e036900be2bbcb36a9087d015b2"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "add4e670d23c9712c819ed7bf4598486"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "ed4e5d791c2196a3a046f26049961b9d"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "5847fe77a77a9ddacf1492eca54a5641"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "f87c20bd063c07d320b31bc4de9ff346"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "3e15ee1ed7fa61caec7117460f773bbe"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "765eb5ef608679bb72dda93642fb6fbc"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "d28a211e7dc591b262ae091ca252afda"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "4b62b700c506baba0d9bbfbb774fae2b"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "bbd1b2b14d85914739a4e1097eaae203"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "44cdb11673c3d956d158858b508cc499"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "4f03d5df7b58f4cce75c717a6d163310"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "7df7ba025e71e8450210d25714422a30"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "b9197d26a9b11786515455178d180aca"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "d0df0e0549124009b491f7c56c69d67e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "4257e298d1e4b3ce4ffa539d2e2a44d6"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "50fe9c615a6a2c25166fb664edad4557"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "be6ddd87130bd81c25d4b85e2efebf72"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "b2d13a79b2b54454aaf9640b134fee7d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "4a8a34ae5ecafa209bb3c632b37b94d0"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "bbf995cf9fc55705b0f76a9c3cae0741"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "8e2176e421d9ff25f29dbbe6a1c8f056"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "b7029917ab027ebf06db604b7a43dec8"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "4cf7944c785f56815d6427869cc9addb"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "00162c80a55be75783b98ef68fcd8b2d"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "993728bac3a81e17d1fcb30e1f631c8b"
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
