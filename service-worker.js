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
    "revision": "514670b86b1ed09caea936fad1fd1e9e"
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
    "url": "assets/js/11.77ecbf1f.js",
    "revision": "e2bd94dc1f03ecd98182d8bad8293107"
  },
  {
    "url": "assets/js/12.7734cd4b.js",
    "revision": "ecade67ae6715151ecdf98eecd0c4d5c"
  },
  {
    "url": "assets/js/13.947acdc4.js",
    "revision": "8a6c182740e7f8e51ed7858a1e1ca924"
  },
  {
    "url": "assets/js/14.5820c296.js",
    "revision": "415867068c38434e31349de3fcb8769e"
  },
  {
    "url": "assets/js/15.076fe783.js",
    "revision": "e31b9db1b78d296f3a267c5b8ba92a1f"
  },
  {
    "url": "assets/js/16.c313f203.js",
    "revision": "1607c1f48d09c44d68d511ae3d405892"
  },
  {
    "url": "assets/js/17.2a767797.js",
    "revision": "9f5c624530171fd9e2f574141146c637"
  },
  {
    "url": "assets/js/18.611d3084.js",
    "revision": "ffd1bf7c7d1dd5062283e9b8b76502e4"
  },
  {
    "url": "assets/js/19.3eae78b4.js",
    "revision": "6415429defdd06957adec0c386986778"
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
    "url": "assets/js/21.555b43be.js",
    "revision": "df083a3b6d2481be627ca9a802257cda"
  },
  {
    "url": "assets/js/22.c3a31f03.js",
    "revision": "b7bfe5b614a3a16b79725f2b9d89442f"
  },
  {
    "url": "assets/js/23.fb139746.js",
    "revision": "8380f1ce4e26a67447a3cf186b5c5ebc"
  },
  {
    "url": "assets/js/24.0cb142ee.js",
    "revision": "8b57641e280b690dc9da42715f5874c6"
  },
  {
    "url": "assets/js/25.21f7b900.js",
    "revision": "072561286f69229002c126632f8814e1"
  },
  {
    "url": "assets/js/26.434340a4.js",
    "revision": "940d361e38833246fa4a6d0a16ca300a"
  },
  {
    "url": "assets/js/27.aea167bc.js",
    "revision": "fd99e8936fc1c5ff888fca5e88647d18"
  },
  {
    "url": "assets/js/28.ada4f194.js",
    "revision": "9bd5a77e3e8aa095ab83f1943f4d39e8"
  },
  {
    "url": "assets/js/29.bf512a76.js",
    "revision": "4a60c02352f66752411f8fd448a89c5e"
  },
  {
    "url": "assets/js/3.da8fdf66.js",
    "revision": "a606a5f9bf451242bf1c59c7f221e833"
  },
  {
    "url": "assets/js/30.df08c004.js",
    "revision": "9293678e11684c908ed4dd2b7784458b"
  },
  {
    "url": "assets/js/31.2d135249.js",
    "revision": "9c87d45ec9c11b2717292697ea2b2c82"
  },
  {
    "url": "assets/js/32.ec3ead67.js",
    "revision": "bb813fff3d7626051c4e8eacde5c4947"
  },
  {
    "url": "assets/js/33.8400ccce.js",
    "revision": "039d7b7142cd65ae71cd38aa3457dbd8"
  },
  {
    "url": "assets/js/34.5dbfac7c.js",
    "revision": "a949dd3e8e88a8a8d58bc10ba7fb96d5"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.9bd14176.js",
    "revision": "8f20bf70ed245e91ca2d0f5cf255c7a3"
  },
  {
    "url": "assets/js/37.51a347a2.js",
    "revision": "0681839750a8cbb23264882363a065dd"
  },
  {
    "url": "assets/js/38.9dce5b8a.js",
    "revision": "a3bd395f036f0764f0a81da1df504189"
  },
  {
    "url": "assets/js/39.fc83967b.js",
    "revision": "3bfca5afb8869ebfc8847638c91550e8"
  },
  {
    "url": "assets/js/4.2dd09ca2.js",
    "revision": "a12b5b26c4bbf6d88ffd47ea2d663581"
  },
  {
    "url": "assets/js/40.7bcfadf5.js",
    "revision": "4b167392d7ab7532aa741cf54c681874"
  },
  {
    "url": "assets/js/41.9cc54921.js",
    "revision": "4b4a2f56fd429467f75a1cd3bf0af542"
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
    "url": "assets/js/44.c62a60b4.js",
    "revision": "56829e1ab79c0c51e034552c7e7bf02f"
  },
  {
    "url": "assets/js/45.b97dd0b8.js",
    "revision": "5111f86a1ac91047d9571bb2a17ddf7e"
  },
  {
    "url": "assets/js/46.7626d943.js",
    "revision": "6107e78bf59d1676544c2ed777a7da06"
  },
  {
    "url": "assets/js/47.ce0a8d7e.js",
    "revision": "e2d1632a2d20e79f0642b0f44295bfa5"
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
    "url": "assets/js/app.c9e01b10.js",
    "revision": "6232293ed2f971443158be27b5762a91"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "6c6a7bde67f874aaf07241a5661ce746"
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
    "revision": "9102d9c39bbc38513651008501f756bb"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "1ed64bf473afc8749a305b1dd3fa4bc5"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "1673d3a26698211cda8dc7514365f613"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "dbd9e5410617c84be1c8b85c283ea046"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "51212bb3b08d542c317933b467ad882d"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "686eff85a8f8162eab95d25891abcdcd"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "03fbefcc9a8da27fce3cb0da60041ebd"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "facd0bce4f501ad04c10ce107a76e5af"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "47a58ad2845bdaadcbda551995a9d987"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "0d8d7dd90acc45764433c71ac0a74851"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "e2ef8cfd208bd8e7f9229e5f6f416e2b"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "ecd6c07c3c26c34a6a5d4633b98a633d"
  },
  {
    "url": "guide/index.html",
    "revision": "c831e5aff2287b8a0de0a822bd75c368"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "5bf9170decdd9cd3edffe95c3a2b356c"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "555e66af18205bd985fe1fcb3b62aa05"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "f4bcfe35efa70550e68f1199e17e53fa"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "ea94bf11d0485f42495afad6eedf4254"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "49c803cc0b6aacf78150d1c1a0bd613d"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "59cfdc3ca4aa5cdac44591bac66b5891"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "5e1c3630b2d0ee008e21748f255951b2"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "4a5f3efe8099c7de526b130bdabacfff"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "a6859ca0b8125aac0c714f98d8b60458"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "3fbbe0ea132470aeb74378098d55ec47"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "cbd5485a8ad948e92e854fe651f3c3d8"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "c5debea3b13570dd6b21550f728494e9"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "5743cdf4d3b31b51f747493a55f93dc3"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "5a12925841487cc409af8aa2f0bd744b"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "5142e4e8d9e9218b652ad34326ed29e3"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "5263d23f46511cdf5e21f77760ccc6a9"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "0d527fd2ab8d4ad91fae2ad305d0fde1"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "a3596195b81a3741f7a708095f221298"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "945a38516311fe134adffc2b0c4073eb"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "bee601f00965dca82329d50d17d9809f"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "a4f3c6ed6533d53cf2461c9e7cef5f59"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "39ad9d3b8607e8f381549193ab81cbe4"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "5e52225b55fa8e5629005d6524b87f58"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "ab41e0a5a5412fae48887400c4dd9667"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "1e83794238c6ac5ccaded7ff7beb3ef4"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "54d95d560a5867214575f147fc434d36"
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
