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
    "revision": "00f7d954b52213de26eabb1ab755e494"
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
    "url": "assets/js/10.8c6be132.js",
    "revision": "122f34c2f3675899c7c97fe2bfaf8eb3"
  },
  {
    "url": "assets/js/11.a8c3e03a.js",
    "revision": "a943c29fac0984f007b91c061ff0fff7"
  },
  {
    "url": "assets/js/12.be696641.js",
    "revision": "1ff29a47aa79d3f79fa9a7104b79de9b"
  },
  {
    "url": "assets/js/13.b8110229.js",
    "revision": "879518840f783931d5bbc60fe10d65cf"
  },
  {
    "url": "assets/js/14.7aa287a5.js",
    "revision": "231148d58d287b8c9b1325367a3069d9"
  },
  {
    "url": "assets/js/15.4862550f.js",
    "revision": "3d124a078cd2e9849cf5a56f30d7406b"
  },
  {
    "url": "assets/js/16.e33c81ba.js",
    "revision": "f9b5adcacd7b7f7caf9d3df8ac16c6f5"
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
    "url": "assets/js/22.db424ed2.js",
    "revision": "bce80350d010977902812c9fe135a8c7"
  },
  {
    "url": "assets/js/23.f6b5cc21.js",
    "revision": "06c8d1952c6bbd3ff68f0fb8541031d7"
  },
  {
    "url": "assets/js/24.d384fa11.js",
    "revision": "63b8b73fb0d0fdf2c3911a9991e5e030"
  },
  {
    "url": "assets/js/25.6b040757.js",
    "revision": "b6b5baccd5a08e34d17b350012f2811c"
  },
  {
    "url": "assets/js/26.b0c1fec3.js",
    "revision": "54f05c1213c7cba2533ba7693ab0beee"
  },
  {
    "url": "assets/js/27.f488c5d4.js",
    "revision": "5a921ddcff36d4126f94f49242e073fc"
  },
  {
    "url": "assets/js/28.ce55f5cb.js",
    "revision": "4e59100cf049770f261cc3184d857d62"
  },
  {
    "url": "assets/js/29.1f211375.js",
    "revision": "df27c60d20d9e66bf9180ee40e5d4872"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.3dfbca13.js",
    "revision": "9a3dba4c4ca11ba5f4523a39ec9ca564"
  },
  {
    "url": "assets/js/31.4ddd79ea.js",
    "revision": "863cf299b9e6b685ceb82031712fc5d5"
  },
  {
    "url": "assets/js/32.ce4dfac4.js",
    "revision": "9a07ba0d898094690a66d1c2691ec42f"
  },
  {
    "url": "assets/js/33.5a56be06.js",
    "revision": "26f33ef407373fd5123e25db6957f96e"
  },
  {
    "url": "assets/js/34.0118a15b.js",
    "revision": "fcf258a71438fc9c1c25decd5d1c5abd"
  },
  {
    "url": "assets/js/35.f361691e.js",
    "revision": "b23f5492cbf25b69090982c520d4a45f"
  },
  {
    "url": "assets/js/36.f4103857.js",
    "revision": "7b6adaf3f3959d5f38186495ff6a7113"
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
    "url": "assets/js/41.ba85109a.js",
    "revision": "6539d9ec30ff342adb90d581c0e8e808"
  },
  {
    "url": "assets/js/42.9bd0d221.js",
    "revision": "1bb5bd99d449550c131f35bcd471e98a"
  },
  {
    "url": "assets/js/43.5f36a386.js",
    "revision": "5435c810eed3123c8c7ea8ad103d2eaf"
  },
  {
    "url": "assets/js/44.1c4903b2.js",
    "revision": "7a092eaa8ea3a2670324c4356850f21a"
  },
  {
    "url": "assets/js/45.310f0a8a.js",
    "revision": "dcdbb0ae64bd73673271bd4c33741207"
  },
  {
    "url": "assets/js/46.5578d673.js",
    "revision": "6f311fd6e18a7dec90fe8099701b4eda"
  },
  {
    "url": "assets/js/47.8504bfb1.js",
    "revision": "0aa6931d7331aa2aec696172d63ea042"
  },
  {
    "url": "assets/js/48.18fda3a1.js",
    "revision": "103fc69a0ddc3cc66dcd95ae1644e01e"
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
    "url": "assets/js/50.7a40fcb1.js",
    "revision": "c9e6d3db77ad9b531dae9e3f589e28ac"
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
    "url": "assets/js/54.3588893d.js",
    "revision": "0accf6d80a357b83a2fe34ba93c33de2"
  },
  {
    "url": "assets/js/55.4a8b6f8b.js",
    "revision": "86070382a549bbcd6886dffe430c7fd9"
  },
  {
    "url": "assets/js/56.b6124da6.js",
    "revision": "141480988c3e0341defcb6cf068c6ad1"
  },
  {
    "url": "assets/js/57.66dc2b16.js",
    "revision": "71b93e0c71335201c4e9dd18edd4a512"
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
    "url": "assets/js/9.6a07348b.js",
    "revision": "7a2cfd3b965e455e2da67216cfbeb5fc"
  },
  {
    "url": "assets/js/app.7d34dc1f.js",
    "revision": "2917a4465c9aa0a667078adb13a23d11"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "84bcb22f36447600c3adce5c1f56e13a"
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
    "revision": "31be3c8314cbf8ca72dd4dfc882dace1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "46a0d7110278057fc48442dfb070b4de"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "699aad6e3b4e9d826037d95887a7267a"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "8775257c41f2199220b52ac7eca5d0db"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "85d3b543f7acefc6d96b850a39e9709b"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "228999930919418cc2af9a876a131456"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "698605774902985a3cb5e8d21af1440a"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "b9b8f62a6d7c25361f70be2fd2b2c620"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "2ac9fadf6f54430b2cbed6d7fa47114d"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "1e445f24ec62547c92a9cc6c433a7ce9"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "379e33306acafcce8faa92497d596416"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "a5f1e5eb4ce89549ebe67a231ad7da83"
  },
  {
    "url": "guide/index.html",
    "revision": "441df4f2ff1bed82b396725b8107c1e3"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "8b11bba149c8248c062b1250fb6d64ea"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "69141e274943439a7b7be88fb43fff8f"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "eccfe18e0462bf55a0a5c752a810e6fc"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "558c7212535178730108d01c3aaa7d5d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "165b642714fe0a096952f8aa84b0d61d"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "ca4506eda97c9cc068ec285d13c1456c"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "bc523d045e0c641a1b69e2aa306c1384"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "f20a481f7aed7dcc29f16fe7d9c36925"
  },
  {
    "url": "guide/information/support.html",
    "revision": "4985ea22571f9e77f6e3dcd025a89eaa"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "f208cd066cc06b6705e28254e1c93ec5"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "fecef387a1fd46b86474f693664116aa"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "f94fd57a6d4316df1f1cf9078dbc89ae"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "90526eba274d8e272e0ee77c15f242ee"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "b995b2a95ebcdbea9edfef9678633078"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "7eb4208ed4304496416b43e696b12f03"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "cbea131ac94e13064fbd38274b62da84"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "6e2769d02de024996a7e9fb336ffe58d"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "53599fda667d3fdd75c72fb732de3652"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "dee697b0d8f6cbba400ca19570398371"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "080639eadbd140a58a9042d2b9a721a7"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "1f42f6393a6a35abcf04cc70b0425d93"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "d96fb9a9256985f0ef92cd894ea7d1bf"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "af93a8c499604799c98ef4881d3b552d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "23fc56c03a4c9c168bfccc19105b6d02"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "3ef0a67e9cde41be41697e19d2d2c04b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "19a71273606b21df65e06759fe9184ad"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "f220a955ea1412f2e9e682b0c70d854e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "8cc273ef63867aef0b92b60d66ce6d81"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "810a3ce6b9a0e411fa8ac608126ba6d7"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "069b886b62a27e5bd2c936865deb0369"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "b75d6d1a1e867d973b26d23ad0ec08cc"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "7a4e619508144bd5e84734e642be4b26"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "cad5ffef37867d5854206577cc74ce2e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "c73c1a7856639de46e93d7465cc02709"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "6b79db30198e87e1cb58e0eb80060b83"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "12aae36e76f3ade0ef7ce58b787d5243"
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
