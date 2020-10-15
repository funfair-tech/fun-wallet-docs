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
    "revision": "59c32375cfd3438b189b989b52944137"
  },
  {
    "url": "assets/css/0.styles.306652f4.css",
    "revision": "87b44de8f838e08102f05f35fcf6c60e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ceeaf9c2.js",
    "revision": "550c1aba81a8ba326ac442a74dec569a"
  },
  {
    "url": "assets/js/11.d6653671.js",
    "revision": "be90c60c89c88145d2e276d3970af8c6"
  },
  {
    "url": "assets/js/12.e41eab8e.js",
    "revision": "58db8f9a595df0ec06e5834291127daa"
  },
  {
    "url": "assets/js/13.1c94983b.js",
    "revision": "064ad14911615bbea62eddd3c10db377"
  },
  {
    "url": "assets/js/14.38ef7b3b.js",
    "revision": "b326ad20fa6d763630fb1f1752a00107"
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
    "url": "assets/js/19.5bd16690.js",
    "revision": "7a7c6c49d3736b2e0fd3bbeaa634d651"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.cbff71df.js",
    "revision": "679d06e00fd0ceb266620579dbc409e8"
  },
  {
    "url": "assets/js/21.6d721e39.js",
    "revision": "6fb92b952239a864c2b5d357248e787a"
  },
  {
    "url": "assets/js/22.5dd1ed44.js",
    "revision": "a37a8f3c49b08b7d1989078bce3eba78"
  },
  {
    "url": "assets/js/23.742def7b.js",
    "revision": "86d88a0f8df444129a827aca69e38a36"
  },
  {
    "url": "assets/js/24.2988a151.js",
    "revision": "ecacbd06e8167aef53d49704cd9a418e"
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
    "url": "assets/js/27.b502eabb.js",
    "revision": "9c8f0bdd1ecd33d7a012466e90bba072"
  },
  {
    "url": "assets/js/28.ae5833e4.js",
    "revision": "40b7b2a8c346170cc76f8c812a98f785"
  },
  {
    "url": "assets/js/29.0b09d7a3.js",
    "revision": "fa4349aca9ae78409c3c5b94aea4e817"
  },
  {
    "url": "assets/js/3.8f1ecd03.js",
    "revision": "193ddb4be7fc295fc8d346a9b7701c74"
  },
  {
    "url": "assets/js/30.67157ff2.js",
    "revision": "f803dc010be082c621ab817a9d59718f"
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
    "url": "assets/js/34.cce54fa9.js",
    "revision": "89b096376719dd9d669852ab1a76be85"
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
    "url": "assets/js/37.434c96e0.js",
    "revision": "4f7b4627311db3dd909db6ba6ef17297"
  },
  {
    "url": "assets/js/38.4a0bf3f9.js",
    "revision": "47124a4c1e89210b18b549d106a0f600"
  },
  {
    "url": "assets/js/39.8c3d1067.js",
    "revision": "bf55d65e0975200905470f49c88d0d61"
  },
  {
    "url": "assets/js/4.abae5d29.js",
    "revision": "867d8b0e2554872c1cd2b40473b69163"
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
    "url": "assets/js/42.751175f5.js",
    "revision": "70c8e4365eeca698137d556301b5cfb5"
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
    "url": "assets/js/9.88720105.js",
    "revision": "bc7146905dfdf92863bd7044cf4b40b3"
  },
  {
    "url": "assets/js/app.437c8505.js",
    "revision": "65feff4708c9d8d1b9b9d351a44fa89e"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "d3adff1df3f3a4f5f04c726815dccf92"
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
    "revision": "5aec725903ef2ea713aa846ebfc9da2f"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "7af948a57ecf1d74529c5fd60fd5552b"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "11a7068512a66bb9d68b0bf8481bb7ce"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "b4eb795012702b7adf4dea59dbf9be83"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "75b7b1bf60b03d1835f16e4f60e9abde"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "fb2e2876cf990e1c02bc57fa4ff9aa7f"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "be71cc41387c94c810d0d5d1917992b3"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "bd428340300be483055af69509cca7f2"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "84ce5beb850cdfeeb62a637aa5d59169"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "e73dccc92149b0e6bd235876dc6758b7"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "65a190154b180a5655624c706d4d0fe5"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "0976ac2747a3fc234f1bb90bcac8cef8"
  },
  {
    "url": "guide/index.html",
    "revision": "580424f94685bd8210aee499b1967d02"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "67f04fb8e89d7d4020635ea62cb196b8"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "60bcb85e350d4862431ec09ba7df75ca"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "a1c393b3d92b9c1c4e98991d836c62a1"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "899f61bb11ce3d42cdea2e5722db681b"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "bdbf3425ac8cb22900ded5d44c6dd699"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "7bfead033f9ef528ae73a1accbb0f676"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "2fee7ea1e3715ba36ac10ea53c1d9f8c"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "b511f2ed82af88bd8bfa097e2ff76ab8"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "f4c53f89feca7031287f61a141b50bc6"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "2a144f5bc18cd3d966446ba0dccf5447"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "6adb6e5055f3ff9746af66618e4f2d0e"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "20861a0ca58ae5d3d30b63255057c02f"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "da6312585fb130db5649e463c5e83624"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "60c78f2928dab30c77b4853e873d7521"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "0c882c4c8e76898e2b85f998b9f1a4fb"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4082caaf0426176368029476492b6c7a"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "a5f940ce2ac2ea1f75d0ee06ced07629"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "c15a3c49c6fec09eb9fdfbe4d10f0b9a"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "8534a9be4046e6faa3ee294487f362c9"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "693ca1605d4b7ebb8d3cb4cfc7767565"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "ef17aaf8f1de5e067261755c635c0292"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "b1d2c2c3289caf2773aaa42d48a96e2c"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "559187d6e848cd71dfe480e20b761b7b"
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
