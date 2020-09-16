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
    "revision": "94c3a82cbf00f3a442944d8ee2919aa3"
  },
  {
    "url": "assets/css/0.styles.bf254ac9.css",
    "revision": "c73f18efdc29ed1491203a61071f9186"
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
    "url": "assets/js/13.be235d22.js",
    "revision": "640459c5bc2d5872b91c8c94347df5b0"
  },
  {
    "url": "assets/js/14.fe80ad1b.js",
    "revision": "bf03338ecc4c9efbeaadcc3063ad2489"
  },
  {
    "url": "assets/js/15.6fb5dada.js",
    "revision": "55c720d7a831ffbbd5f5184d115cbd4c"
  },
  {
    "url": "assets/js/16.09bfda8c.js",
    "revision": "040acdae141e5175d9ed976617b7ef33"
  },
  {
    "url": "assets/js/17.2a767797.js",
    "revision": "9f5c624530171fd9e2f574141146c637"
  },
  {
    "url": "assets/js/18.8f6db7f1.js",
    "revision": "1dd037ce3f588734af083fb90b61d0f1"
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
    "url": "assets/js/20.8abf15b0.js",
    "revision": "73061d3fc85b9cde669cee265c599d74"
  },
  {
    "url": "assets/js/21.6c07de52.js",
    "revision": "661ef596f3cbfb30857adb46c1072fae"
  },
  {
    "url": "assets/js/22.4512d9a3.js",
    "revision": "233cf762b6bd0a962ca5bd46402f88dd"
  },
  {
    "url": "assets/js/23.4a6ee555.js",
    "revision": "1474b8f1b41282ae73a9c4cb9e963557"
  },
  {
    "url": "assets/js/24.31e6f446.js",
    "revision": "af830bb4eb71f39187da01e0d163cb10"
  },
  {
    "url": "assets/js/25.83faa27b.js",
    "revision": "40770fe99aae5a48b9d827a703ff2121"
  },
  {
    "url": "assets/js/26.b7d59cf3.js",
    "revision": "d277ccc705dbea451801e044ed7f72da"
  },
  {
    "url": "assets/js/27.aea167bc.js",
    "revision": "fd99e8936fc1c5ff888fca5e88647d18"
  },
  {
    "url": "assets/js/28.3baf6efc.js",
    "revision": "5cec973368e1542ef9a43df06121e2dd"
  },
  {
    "url": "assets/js/29.1c8079c6.js",
    "revision": "23cb94bd739dd8c13221501f9f1b6a4c"
  },
  {
    "url": "assets/js/3.da8fdf66.js",
    "revision": "a606a5f9bf451242bf1c59c7f221e833"
  },
  {
    "url": "assets/js/30.1559e60b.js",
    "revision": "418233fe7dd8dbc82b131339714f4ffc"
  },
  {
    "url": "assets/js/31.f57576d1.js",
    "revision": "07d5ca39862098e6777ff267b0d9092d"
  },
  {
    "url": "assets/js/32.8cd89f83.js",
    "revision": "abcaf5f48b0d0141533942bdb5d9f53e"
  },
  {
    "url": "assets/js/33.84e80b37.js",
    "revision": "1ffaf6644cd645db57fae6e57cc4315b"
  },
  {
    "url": "assets/js/34.ec65415e.js",
    "revision": "71ae2bf103dd20ca68656fd1817c9b9a"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.d15471d4.js",
    "revision": "14993a3a832f43e7e5cf7ec1799a40fd"
  },
  {
    "url": "assets/js/37.eadcddb5.js",
    "revision": "e034abf8469c1f44c76f6c92900aca42"
  },
  {
    "url": "assets/js/38.9dce5b8a.js",
    "revision": "a3bd395f036f0764f0a81da1df504189"
  },
  {
    "url": "assets/js/39.a7ea4a8c.js",
    "revision": "173f345b648c24a768e74e233db7df9f"
  },
  {
    "url": "assets/js/4.2dd09ca2.js",
    "revision": "a12b5b26c4bbf6d88ffd47ea2d663581"
  },
  {
    "url": "assets/js/40.10247e46.js",
    "revision": "0e0124c5afcf70893bcf41149f1603dc"
  },
  {
    "url": "assets/js/41.40c08d98.js",
    "revision": "85384551cd36f94924f836d1b4d4aa42"
  },
  {
    "url": "assets/js/42.52f2ed62.js",
    "revision": "f1fb3183bcdfbb2628964bd846a5fac8"
  },
  {
    "url": "assets/js/43.b9fad22f.js",
    "revision": "8b83173d2e4f25db58d67e53742e4015"
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
    "url": "assets/js/47.033ec42b.js",
    "revision": "69607a2f2e2ad7a0be47f1380c4d17fa"
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
    "url": "assets/js/9.84b54e99.js",
    "revision": "716ba5635d3d859800682cd169ef1363"
  },
  {
    "url": "assets/js/app.9ebdc636.js",
    "revision": "6e28eb5af5e84a30b0af38b8bedc9f96"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "a55517b19bc16fa94d03501e845007cd"
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
    "revision": "8fcba304d5fd9fb9916d9c6f04506726"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "ebe274ed5e431d9f77c5518b64894f62"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "9c868d67ae677ca583947aa86bc61a57"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "fba41dd16370e3215ba23a8de1698ddc"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "f672c5b81ee847873eb3e5d3834349bc"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "81283be6eef426ecdc11e3a01357217d"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "948d5d2764c6818260c2251dbdbe8af9"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "d5a50cd506b18746e7f026bd9c3382b7"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "67857cff91f5fcdbfd8a98492fe87dc3"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "738270fa67b666b41eddee1f55d3caec"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "30ddfc668055d576bd24c1ea1027440c"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "7715e67f0edf8a935e13e263fb6eff86"
  },
  {
    "url": "guide/index.html",
    "revision": "6c7c03344a7e0d42e595b4563e3b0e4e"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "5c0ea766273ecf1ae1215d09f5224d96"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "821287cce210f07f42381836be544969"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "f0366bfc21ac04849ea81914e0e1e3ea"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "5b00b6aa4eea8fe8e72735826633332d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "a9c9bc70726fece2d4127da71d76800c"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "da3d40343b4154b90f4e57818901934c"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "e6adc01e4b20a6b071d916366f9cfb62"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "c2dd8496d35950fef053ce289b15d885"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "2d42f17f9f78a44d4e27beba9e66499e"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "f46dd744ece77996b6afe6ad54d96abc"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "6759c1ad77c1e7c2175fbe613d8c3ba3"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "ed7fd053041127f128395ea5791f9fd8"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "7536fa777eb4d20d3bdfcd1a9efb8918"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "f2222e19c069fcd73a3a60e8ea9c53ae"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "40e53166a080e8fda9355900e6be8cca"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "f43f92da873899ed939c1e2640332087"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "7f25f0e59a94e4b010212e73427538fa"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "16f4e8b30daa05e5ffbf7222c616b9e2"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "9f0d5ecfc08609109f10d648eb181b23"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "19f785ed65c00c37dfb5dc8f25679f61"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "c6469918a6c14239f1067e2eec02aca1"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "576e14c21a825f3f48d3e17bbf8bf8c8"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "b2137d2e961b8be4ab9ccfdaac5feb4e"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "90364995b5a1427062afbf7b9cab1624"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "b65e70bc10d9e8461b65b9c57bfae5e7"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "64b42108116b4fde03a7afcb0acba4fb"
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
