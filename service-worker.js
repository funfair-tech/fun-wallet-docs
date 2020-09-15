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
    "revision": "58d38404848f69477e503248b65b93ac"
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
    "url": "assets/js/10.1fc259ec.js",
    "revision": "941dbd6d69c93bb27e2682869e0464e2"
  },
  {
    "url": "assets/js/11.e9e5a9af.js",
    "revision": "1abdc1c46c3a28264165c5f2f381b274"
  },
  {
    "url": "assets/js/12.7734cd4b.js",
    "revision": "ecade67ae6715151ecdf98eecd0c4d5c"
  },
  {
    "url": "assets/js/13.d774358d.js",
    "revision": "5d57f009b778118dfb88ced4443e9ef5"
  },
  {
    "url": "assets/js/14.44091245.js",
    "revision": "744f9663f4b924ac5bf53b5649641677"
  },
  {
    "url": "assets/js/15.487685f6.js",
    "revision": "1fcd39b1f5194c3021f5d1d05e4cad41"
  },
  {
    "url": "assets/js/16.c313f203.js",
    "revision": "1607c1f48d09c44d68d511ae3d405892"
  },
  {
    "url": "assets/js/17.22711cfc.js",
    "revision": "93c54c257759a741bcfbd2a6110baedd"
  },
  {
    "url": "assets/js/18.7463cfe7.js",
    "revision": "3fed0709a8b81d0771516d356fec44cc"
  },
  {
    "url": "assets/js/19.4b193deb.js",
    "revision": "6c66df2682530a12ead4eed87b8bc656"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.b69f7de3.js",
    "revision": "b561d589528de9a61708951f62a2f24c"
  },
  {
    "url": "assets/js/21.84374f73.js",
    "revision": "4bc97f4c2c2fb70223bc7c258bf5e0d4"
  },
  {
    "url": "assets/js/22.c3a31f03.js",
    "revision": "b7bfe5b614a3a16b79725f2b9d89442f"
  },
  {
    "url": "assets/js/23.3dc9529e.js",
    "revision": "8e42dfdf7ab41595861b649691bb537c"
  },
  {
    "url": "assets/js/24.bf73281c.js",
    "revision": "980efb05dc6684d4463cd5b7e4481d93"
  },
  {
    "url": "assets/js/25.460cc3bf.js",
    "revision": "0ad392abab323dcdcc550363d6959bab"
  },
  {
    "url": "assets/js/26.608e06f1.js",
    "revision": "a868dae292cd85655e957552d1911d33"
  },
  {
    "url": "assets/js/27.c2d0f292.js",
    "revision": "36d904a70a805546a5558bc65e53a4c1"
  },
  {
    "url": "assets/js/28.48b73243.js",
    "revision": "ac4105bd284199ff1a0b4bbae501f2a4"
  },
  {
    "url": "assets/js/29.f680e3b1.js",
    "revision": "9a697bc801964f2ba2bfcb2ea8672362"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.4801961a.js",
    "revision": "3efb7e4f66ca3f1b38f5448e1c0288f6"
  },
  {
    "url": "assets/js/31.8432056a.js",
    "revision": "9ead87ef50d96b566117a1e60e97d597"
  },
  {
    "url": "assets/js/32.0510c52a.js",
    "revision": "4686cf0b4d4a9e64aff2bf6bc726b1ec"
  },
  {
    "url": "assets/js/33.98efff3d.js",
    "revision": "ac8c3759c87a947150c3a655ca0ed7ba"
  },
  {
    "url": "assets/js/34.564c4fb3.js",
    "revision": "4e61f5b4efa7da7ff8c3fec31a6cf710"
  },
  {
    "url": "assets/js/35.0f285276.js",
    "revision": "8b948ae81a6b4940f41b221e14d2678f"
  },
  {
    "url": "assets/js/36.86e2f3c0.js",
    "revision": "729268742f9a739b2263693e87c6cc4b"
  },
  {
    "url": "assets/js/37.eadcddb5.js",
    "revision": "e034abf8469c1f44c76f6c92900aca42"
  },
  {
    "url": "assets/js/38.1e370fed.js",
    "revision": "562a59a197a183a22639c6661816811a"
  },
  {
    "url": "assets/js/39.1788f379.js",
    "revision": "42d7b9ed4bfc8a9af6fc0103fdb5b4aa"
  },
  {
    "url": "assets/js/4.e2554563.js",
    "revision": "387cb7d21a485b2f5dfe59c95d0a975e"
  },
  {
    "url": "assets/js/40.f44a2227.js",
    "revision": "4054db5af20ff46e5aedd491277caeb2"
  },
  {
    "url": "assets/js/41.926f1931.js",
    "revision": "d733e2d0c2157c7e4903d03b70f62f32"
  },
  {
    "url": "assets/js/42.54b95f6d.js",
    "revision": "c02e5d78cebd990b252aba677646e831"
  },
  {
    "url": "assets/js/43.31fa7f20.js",
    "revision": "fbe1ddfc5b2153c0db2820389f2a66b3"
  },
  {
    "url": "assets/js/44.612967de.js",
    "revision": "c8925dfb617122886aa6ee82541094a8"
  },
  {
    "url": "assets/js/45.ec74bf2f.js",
    "revision": "868eee194b113f934b967e29f4878684"
  },
  {
    "url": "assets/js/46.4bafbb6e.js",
    "revision": "141d653168713502d23c7ab275d17ed5"
  },
  {
    "url": "assets/js/47.9e5d2b9e.js",
    "revision": "f351810aaf94d86747179b13e0b07db2"
  },
  {
    "url": "assets/js/48.0f7bf1de.js",
    "revision": "ca2484905990a4a49c745c163b526786"
  },
  {
    "url": "assets/js/49.0d62712b.js",
    "revision": "44c7f45f89bf23c296cf03735aff29f3"
  },
  {
    "url": "assets/js/5.b1c6dba4.js",
    "revision": "8f832ef27a0f19d0c406e12204eaeec2"
  },
  {
    "url": "assets/js/50.02c321c9.js",
    "revision": "2a4eeeefdc7fa4f629a938a6e961b335"
  },
  {
    "url": "assets/js/6.ebfbf5b0.js",
    "revision": "bd4aa7d3eef4b89d105d7669c1c2cb89"
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
    "url": "assets/js/9.19a2fac2.js",
    "revision": "51dc56a323b1c68dcc13204f3b029750"
  },
  {
    "url": "assets/js/app.46569879.js",
    "revision": "44f405fc6dd09d85bb29c6bb9796af54"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "e2c9fa2b52b771bf2407466d7ab2e8e7"
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
    "revision": "fa591601c68a91498a572cfa8442c220"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "4ff7c1494e9629662cb3acfe26e03cc3"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "ee9e9e53ad90a1e3072d282a5d726991"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "24f9d556a566f17e7c4d5514861f9180"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "9e018f941886d0736b29e382d4da7dae"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "734748ef4501c53faf943278f4cfe1d9"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "89fcdb328377f60739733490757ec7e3"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c7aa57f2b2188704039ce472fd7adad6"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "bb4519a6d4e37dc2f6259c268624170d"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "51286186c464a6922c9fea2f447f77f8"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "be49c0269058613e4173f550e91e24a2"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "03942fc28c7ba6d1eed7f2445de88f42"
  },
  {
    "url": "guide/index.html",
    "revision": "d4630dfb2147311f724976638865ec22"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "799204b7f33de09a1d93b0b507e98d35"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "39d4970befcdc1b4e2ff51053754d7ec"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "2de85c198ba18890cc3867bddad1d832"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "bb85d216936dd3d0aa86ec8445270e8f"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "065622a4aeeee032ba7985b9847cac0e"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "e66fe4b611750beda0d6e81c3236847e"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "1f21cb8117039f5de280b04693c1f153"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "d66e0b24c42156d4ca27bb2cc6e2af0b"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "ee7648f622649d65a8592a46bc3da754"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "a7deb7ad244ff1b1c193afc331773747"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "5965a3d8df0a3b8fb482973b75987a4d"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "ad539d89799309347492c50248065dcc"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "c9a0ddf51119c193d2e4ba79f140765c"
  },
  {
    "url": "guide/web-sdk/another-framework.html",
    "revision": "e2d23c2f3f6497e18e0a69b7e9b9ab1c"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "f6d9e6026e0c8e74ccbadea37dab5206"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "93632cfab25b7324b9504aebdfa0e361"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "705a292bb7daa6129d256963548a973a"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "03467ebd2b61243689861ab011e0de11"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "21b88613dd165a4358b09d6be881eaaf"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "9b83c738c95a4445e6b9ed74246a0094"
  },
  {
    "url": "guide/web-sdk/native-js.html",
    "revision": "4d1458f22985ea6badaecac9abe13fa4"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "d887b0a596bbf795f155cf2cfceb6c49"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "7973a38cf9013c3198f9f73fb0b6b685"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "38ec6560aa72c397643d475d96348039"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "a88fe30203e0f656bdfde56fce8785ef"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "abf3535ee708898c189b612f534a9c29"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "6a76629d9aff035ed5904470f464b35b"
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
