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
    "revision": "aac0c35c8e8857be0437dc984d7c3ed6"
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
    "url": "assets/js/10.4625b6fb.js",
    "revision": "c3b0d90ed317adc82ba83dbc51f56230"
  },
  {
    "url": "assets/js/11.52314802.js",
    "revision": "d1c24a1c0719cdc15e00f745ad470459"
  },
  {
    "url": "assets/js/12.fc4d7b8b.js",
    "revision": "dd9a823a9c2d766c0f2a6f00a5be8389"
  },
  {
    "url": "assets/js/13.f823f425.js",
    "revision": "d92887fc5406c1defcb31d493a949c53"
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
    "url": "assets/js/16.d8a6a40d.js",
    "revision": "c26ce70d8a342f0367c77b08c0cf9bf9"
  },
  {
    "url": "assets/js/17.5a89027c.js",
    "revision": "d40b976ecdab5643282eb5eeb46e44a7"
  },
  {
    "url": "assets/js/18.1887e79d.js",
    "revision": "ddeacc313fccadecaa5c86167f93cb45"
  },
  {
    "url": "assets/js/19.ce89cb61.js",
    "revision": "362e5ed66c0e8d4ee55ec20200c60ceb"
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
    "url": "assets/js/22.d344ac57.js",
    "revision": "69743de49a91cff4bea6ec8481940694"
  },
  {
    "url": "assets/js/23.cf663bf7.js",
    "revision": "c390541e81f514a8d2d7ddd3ad974460"
  },
  {
    "url": "assets/js/24.a322992b.js",
    "revision": "838e0ca40e3ed6ba78fe91c6642c9d77"
  },
  {
    "url": "assets/js/25.04b21472.js",
    "revision": "40d0f879a141770b26e02ec6914b16a6"
  },
  {
    "url": "assets/js/26.d45cf11d.js",
    "revision": "5c9a4bf7b5cfc58391c0fdbcad7ac610"
  },
  {
    "url": "assets/js/27.c63c6b0d.js",
    "revision": "fded850836fe428cceae78fd97e0f512"
  },
  {
    "url": "assets/js/28.1e4ca1f5.js",
    "revision": "90f1e54a4013d92947c6207d539138d4"
  },
  {
    "url": "assets/js/29.1dcee4a0.js",
    "revision": "bb6b26696ab0ce3c9fa5a20a99e95782"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.89139d53.js",
    "revision": "687a5f0f0d6af78cbbb64c513ccc617e"
  },
  {
    "url": "assets/js/31.a31fb8cb.js",
    "revision": "c68d3a8d04130553f89003413700c94b"
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
    "url": "assets/js/34.7038b0e8.js",
    "revision": "c17361ded9483beec074511a1c67088b"
  },
  {
    "url": "assets/js/35.143e4411.js",
    "revision": "6e800cf94cde9500fdb606bb81b35423"
  },
  {
    "url": "assets/js/36.2784d89c.js",
    "revision": "ff873e4cf1cc8e50efe56eaa591820c6"
  },
  {
    "url": "assets/js/37.b397df93.js",
    "revision": "39bed82f2d4dc78f9e6d54216eb79742"
  },
  {
    "url": "assets/js/38.e4084f52.js",
    "revision": "c1f9f6c3e46743d66270e82b4fac6695"
  },
  {
    "url": "assets/js/39.5ba66205.js",
    "revision": "403fc2154cca6f388bc68b840c535e55"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.99f9fac0.js",
    "revision": "e237306aa153097d782eb2de5f4e42df"
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
    "url": "assets/js/44.de531133.js",
    "revision": "aa704ec36dd4526aef27aea64ed56f49"
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
    "url": "assets/js/9.d617a0cd.js",
    "revision": "b9d1485c927ee9588b425d968a6dd790"
  },
  {
    "url": "assets/js/app.98683496.js",
    "revision": "9be3e0510d337d351d5032697b1cec06"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "28cdaf18a5df788ef92640a94a0355d0"
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
    "revision": "c56d834dc27f18806bcf4fee6fd6706a"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "65d149dd70d910e53289aeda28b7585f"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "7161199d0ff7ddef3bea30aa22dddf7a"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "0f8000f6f94f4c517ee4122e53679a5a"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "80e60ce6821cb866e43e301aadeda8e5"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "a1044ecea2ae3b3be4155e917e308d95"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "dad2d71597ddf143bbdc2facfcf98bb3"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c108e0388eb145a50e95c1c44436b655"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "77de7c11f21b0931e920cc7446b23646"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "3b9a1df4717f250ad359f5a1b9927d90"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "52c7fe8669eaa39e9f557b2f84109635"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "624d976d52c7ecf05a5df5aa0f18e48e"
  },
  {
    "url": "guide/index.html",
    "revision": "656573b1597a5ff7587e6af3f264699e"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "0e4578e678e25df48f47293bbdec0423"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "4c598da01e36d5be70a625af7443fd2f"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "801e48dfa83a4c1b7141df4d4f75ab40"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "cfbda752fcb2fdaa173b084906dd316d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "61da1ab1d823cae0290ecd5943a27e86"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "3ed15149f6f91d652d4591edd5a6ddca"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "327392e42f79ce24c32322f51e920197"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "ff5a4aa3a0f38c147fd9ff8788211ae6"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "80db254ee620aa433dac3a1d33450a51"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "3f27bbc1d088f4f1dd9e66a5e099454a"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "9fcd720439d4d2b379094798c9ffca15"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "f076e52133df515006824c2d4527276d"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "99f1f615246680ee724f612b1110b635"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "894962280251298edaa70dbdfe314700"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "2cda78f05927d222bbb5215c11beb178"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "e1c541384b74a8fb6cc901c85333ce8c"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "f7f8acb72273e421bd8f386222eb1a77"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "38c58fbcc8a304095873bcb507c181d7"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "eb68037a9d318a6a5fa7efb4030211a1"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "0c5c65ac9cd4bb4f0f21bd4e40043698"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "89f1f76442be60ff35b726d62c64b23a"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "4f54c91827a8ab40debb0efb3a044d3e"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "4099f31999dd087d3e280a7f67808a96"
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
