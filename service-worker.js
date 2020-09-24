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
    "revision": "9743ed333b750a53f270c7c40b085991"
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
    "url": "assets/js/10.3adfbf61.js",
    "revision": "9bbfa2001c03b2efecb76248b3cebc55"
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
    "url": "assets/js/13.18a81b7d.js",
    "revision": "2f0b4c65fb2e135fc212ab1b6e657771"
  },
  {
    "url": "assets/js/14.8bb3d181.js",
    "revision": "d9c4418a1baa66bf5c03bbdf8c8bde05"
  },
  {
    "url": "assets/js/15.4941638f.js",
    "revision": "80b0c541b5b346b5b29cb59d7da257c9"
  },
  {
    "url": "assets/js/16.b8aab9ba.js",
    "revision": "517764c5c2a6c9a84dabf87501c95a16"
  },
  {
    "url": "assets/js/17.ed990a60.js",
    "revision": "c5893b2dd8ca028aa1d2bffb88a39482"
  },
  {
    "url": "assets/js/18.bd53761a.js",
    "revision": "fc46f4d5f8961fe6e8f64e8c822d9dd0"
  },
  {
    "url": "assets/js/19.55dc7ab2.js",
    "revision": "ceb5c5281ac9aca49392a859607062a9"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.7f23aef8.js",
    "revision": "fe34fb14a7debed3f91fcf82bd97a94a"
  },
  {
    "url": "assets/js/21.5b1acebb.js",
    "revision": "cb682376578be0630adcdd4f4832293e"
  },
  {
    "url": "assets/js/22.a14f6d65.js",
    "revision": "64fcac00f66ed70b178a65f6b216bf4d"
  },
  {
    "url": "assets/js/23.b1c0d249.js",
    "revision": "04e14c9412f167fcefb9c5346dde137d"
  },
  {
    "url": "assets/js/24.aa2721e9.js",
    "revision": "fe87859b889520948d1f07a350374449"
  },
  {
    "url": "assets/js/25.6e08792c.js",
    "revision": "57d31ca80e7e30c9093e9d0a6d5f6185"
  },
  {
    "url": "assets/js/26.577900f1.js",
    "revision": "d5d86b11a67185ff838ce66fcb53134f"
  },
  {
    "url": "assets/js/27.b99f07bc.js",
    "revision": "73a0c96cd05bc1c5dc8e47abd60a1580"
  },
  {
    "url": "assets/js/28.db909e4a.js",
    "revision": "eeeff109b51e3d453846a8c2e513f354"
  },
  {
    "url": "assets/js/29.8254746a.js",
    "revision": "95a5d6784abb10442a7d4dce0e4c53c2"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.94803a2f.js",
    "revision": "2d42b035e2c627af7bca34da4b29798f"
  },
  {
    "url": "assets/js/31.7121509e.js",
    "revision": "b03225993e4c4d2aa91ab3f2f53a5f6b"
  },
  {
    "url": "assets/js/32.aae0b4a7.js",
    "revision": "f0c2fb90287832909085f6157b531646"
  },
  {
    "url": "assets/js/33.6580da89.js",
    "revision": "5209c92dbbd0f63cacd78963ee7e501a"
  },
  {
    "url": "assets/js/34.fe418c83.js",
    "revision": "4eab79e2c0c77043a182fe1a76f1575f"
  },
  {
    "url": "assets/js/35.143e4411.js",
    "revision": "6e800cf94cde9500fdb606bb81b35423"
  },
  {
    "url": "assets/js/36.283fe36f.js",
    "revision": "293604813c692f64ba7876af1637ad1d"
  },
  {
    "url": "assets/js/37.bb149d0d.js",
    "revision": "edefd9a8e07402fda5062aee0a926d03"
  },
  {
    "url": "assets/js/38.4a0bf3f9.js",
    "revision": "47124a4c1e89210b18b549d106a0f600"
  },
  {
    "url": "assets/js/39.ec078c24.js",
    "revision": "d888df3942c0ae25d724c38c9f66c3ff"
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
    "url": "assets/js/42.95af0026.js",
    "revision": "27201a0b8292cc3d17e37eb3e18dd1a2"
  },
  {
    "url": "assets/js/43.98a998fe.js",
    "revision": "242a84245b568f30a9f8f7ffc9d095a2"
  },
  {
    "url": "assets/js/44.b88f6b77.js",
    "revision": "3bd657753e58b5d8df1ad651cd029796"
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
    "url": "assets/js/9.88720105.js",
    "revision": "bc7146905dfdf92863bd7044cf4b40b3"
  },
  {
    "url": "assets/js/app.d6fddf78.js",
    "revision": "ffe1296939515bc54791ed7278526a45"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "920b612242294d45d5279a82ed7df3ba"
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
    "revision": "64baccf021e7c0fa6351199a30868b4c"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "881929cfe9485f95c8bc4fb36ed62037"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "a36fa4ad9dd7541880786a3f4b6ebe3c"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "099a425c06cfa31c142972db0680feb2"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "1367400041f160b053492dc730ce98b9"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "10055aea6a1d7148e1d8cb3c508262c8"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "da4ae5dc250df8da11f3c19a2467f62c"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "81437ed242a2c4bb6b00109d42551237"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "2caa4e06da530f0639eccc5e83988830"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "d00dab3f3ff2562d2816164e3ef351ad"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "7cd54293791db88ce478531f13a3523f"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "6e437582dcbd4432067952f7c16afc74"
  },
  {
    "url": "guide/index.html",
    "revision": "545ed9e42a2e574a5ba36d084dcd9058"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "de9c481af73a1a252ff405ae36bceebd"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "68f661c551346e6025b5997c3d41f848"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "c22d760f667d78b0986fb2aa629063e3"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "4454d260a3b464b159fffdadb67e5cc5"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "041f9fdc4709d54613743bdc20bffbba"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "bc17ef814009df0f15da64e2e6e72035"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "19644d9cd653343263ee81a03d488862"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "60ef21f7828d5e27f772faf4d248762f"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "19170d4fe9422dfd6f3520d3b951b43f"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "4ee46745fb98d62f4f6f96451f1c4b71"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "491a2916e1aa58d02d4b6b8e0753f5a5"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "aa555d539d23b67aaf387c42d9504e4f"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "0d7468e0183bd5a274d2c160ed877e96"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "062c6afc10dde67ef444c726c82f88de"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "2d0fb7eba10a0f362cbcaecdaf60d5d4"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "b4af9e22792da37426e91292c6bd517a"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "243ac49af9bb13f672f4a913090b6435"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "e86ae7e322391d8a1847ffa337900ee4"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "e39925662e4472c20e0077e0802270b6"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "c10200c3a0764b204c2604953b9996f0"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "96d526122e5b606fddd990345492d574"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "0dd3054c5d74f88f00f305db69ad065d"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "a43f271411aa348ea73475fd677c63e7"
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
