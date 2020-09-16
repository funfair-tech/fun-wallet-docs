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
    "revision": "0906d720d2e4165939f1fd16ca8c7177"
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
    "url": "assets/js/11.660044ea.js",
    "revision": "4b78d03d21595f58834fa53f68b545d3"
  },
  {
    "url": "assets/js/12.5ab22c0e.js",
    "revision": "0dea332fdc3d8b732f33f3a47969b964"
  },
  {
    "url": "assets/js/13.b11986f9.js",
    "revision": "3c1c6bccceb1dd8acd9502f06f8f059b"
  },
  {
    "url": "assets/js/14.76b8a8fc.js",
    "revision": "4cf2422c79518eee93d01badb04104aa"
  },
  {
    "url": "assets/js/15.487685f6.js",
    "revision": "1fcd39b1f5194c3021f5d1d05e4cad41"
  },
  {
    "url": "assets/js/16.ec4b8e77.js",
    "revision": "adad5b659448dfafa16958565875bbdb"
  },
  {
    "url": "assets/js/17.2a767797.js",
    "revision": "9f5c624530171fd9e2f574141146c637"
  },
  {
    "url": "assets/js/18.c53fb4ae.js",
    "revision": "19de8049545ffdff4ef93d6cd126e434"
  },
  {
    "url": "assets/js/19.c02287cd.js",
    "revision": "13fac78b97c085a174841874424921dc"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.1fb0a94a.js",
    "revision": "6e8332ae8a2e5dcf54614737b272da67"
  },
  {
    "url": "assets/js/21.eea2c3ef.js",
    "revision": "1f1c1ee28fd5fdefaef1895b9e28d7ae"
  },
  {
    "url": "assets/js/22.61623794.js",
    "revision": "4670dd3d5990f74a4911e58fbea4bda4"
  },
  {
    "url": "assets/js/23.47a3502c.js",
    "revision": "6e324006f73b3a8496ed30665db92f1e"
  },
  {
    "url": "assets/js/24.31e6f446.js",
    "revision": "af830bb4eb71f39187da01e0d163cb10"
  },
  {
    "url": "assets/js/25.287e4556.js",
    "revision": "3e6d40fce7f7c88fd018c379302a678e"
  },
  {
    "url": "assets/js/26.c52d62a8.js",
    "revision": "0288234713778a10fd9163cec887cdee"
  },
  {
    "url": "assets/js/27.ff4e9f0e.js",
    "revision": "95b90d67daf026ec0d4901b3dd830805"
  },
  {
    "url": "assets/js/28.dc6c6b0a.js",
    "revision": "79c04e93ebf5564f6484fbd162da2748"
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
    "url": "assets/js/30.94a9aa1b.js",
    "revision": "e644c5b06eac8d35725743fb777b92ec"
  },
  {
    "url": "assets/js/31.55639adb.js",
    "revision": "d20d4c087fb131c6f54863489bbb5cb8"
  },
  {
    "url": "assets/js/32.8cd89f83.js",
    "revision": "abcaf5f48b0d0141533942bdb5d9f53e"
  },
  {
    "url": "assets/js/33.8400ccce.js",
    "revision": "039d7b7142cd65ae71cd38aa3457dbd8"
  },
  {
    "url": "assets/js/34.6985b182.js",
    "revision": "ba1e9e9a31324d62823c026d6843b6a8"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.86e2f3c0.js",
    "revision": "729268742f9a739b2263693e87c6cc4b"
  },
  {
    "url": "assets/js/37.51a347a2.js",
    "revision": "0681839750a8cbb23264882363a065dd"
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
    "url": "assets/js/41.e7f26244.js",
    "revision": "89e5a08b9a4eaf15cc39f22d30516127"
  },
  {
    "url": "assets/js/42.8f4aee7d.js",
    "revision": "ff2e448f2584ab83559c30b091ba04e9"
  },
  {
    "url": "assets/js/43.43725857.js",
    "revision": "b8c7b07b14d0fe1f2bcf8a42ba6405d2"
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
    "url": "assets/js/47.0e44d613.js",
    "revision": "8b27e0e83ad73a7f5b91591d73b9f062"
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
    "url": "assets/js/9.d0806942.js",
    "revision": "0aa4efdeb9c143610092bfa6632b2903"
  },
  {
    "url": "assets/js/app.4318dbf0.js",
    "revision": "e767a4fefb3712aade576ea7b1005895"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "70ab2b0a071646ad022216974941092d"
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
    "revision": "5180c9c6bc2fa58368e28b3ce09531fb"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "9b62a67e1685e05ded15ec9357cd24f7"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "b9295c018abbf33cc04e28016fcde5bf"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "eb61a143cca7184ab2f70cfa083985a5"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "cc149a6ab331ce87d397151d9513a334"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "a5f76ba4059fd0494151bb834a9e0b0a"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "a5c4a69352af5344447464a4226dcd9e"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "fd54d77faff5c4e98668f5fd618d1317"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "49d6c37bbec77b3b56253fdc03a72a5a"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "31c475571d2839534451dfd9f7f09b81"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "37e9a6f9b35a9523858dd081cd469ffd"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "9c6252c70270e6e92b7608d645dcc14c"
  },
  {
    "url": "guide/index.html",
    "revision": "a1fdd6dfc6911a647309ee2783f78384"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "e90120ec26769dbbac6108fc7f42f82d"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "4d8c1f05ec943100c5759ee60b1cc0b4"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "67b685241119182e2d5f9b7c6619142d"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "c65a503b769b416311d5d37db1ee846a"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "f0b24e627e6d1f30b8720dab3b705486"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "1f041d4ef455e46576cea913c24a0654"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "3a2fb8d75386a347e1b17689bc78e870"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "63204ab848224b545f0df50b9845e545"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "02ee56ae2fd7417b9b49913852bd679d"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "745b64c63ef8a7c38f0f6e1cebcb6028"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "a64fc6cd71c38c3631d8924cedaccd70"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "ec1ef2e1f84eebe2f8a6845be2aa70c6"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "1e9b40b7a4ddda45010e0f9c535a2d4b"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "5cd1391b5e3f70f04d6edc83e8283384"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "1c0b1dff6cdc6b5ebd1a57d4b83ad118"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "5acb84e8a3a11c2ad36daabc4ce22a5d"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "385b2040fb3c498fb9c6dee5f44dea1a"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "bd6c463f5e9f7f9b3b996c90bd86d814"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "a6f8ceb05a9ea7cf86f2d7f2f864809f"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "68220261f24e66138cd1fea4b8281c3c"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "90e62ea104e7e814934731b542fc8c9a"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "b3ebd3ca73cf75670fb0afd793f9b875"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "c68008a9bf0a84ae694ea5ddebf6f6ed"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "0ca906c545c1bcbf73569a1c45bfdf8b"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "53e32c8456342328c905274da3d48327"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "d1574951bbffa32ec7a8d6526d7de4f3"
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
