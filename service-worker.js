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
    "revision": "348d9340118d23f885ec6357a3fe8268"
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
    "url": "assets/js/10.ceeaf9c2.js",
    "revision": "550c1aba81a8ba326ac442a74dec569a"
  },
  {
    "url": "assets/js/11.33123c88.js",
    "revision": "2071da61bb21e576ac052a8ce7fbb400"
  },
  {
    "url": "assets/js/12.e2482db6.js",
    "revision": "e6d6155fbd9b843af9abc8143890acd5"
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
    "url": "assets/js/15.f0edb06a.js",
    "revision": "c7f9c6ab3e143c0b4f7edb387bfb2a9b"
  },
  {
    "url": "assets/js/16.127ffe5a.js",
    "revision": "7a90e2bf22c24a441672303d975f9616"
  },
  {
    "url": "assets/js/17.acc0fbd4.js",
    "revision": "34dafbfac90985b771c8eaa4d108b2ed"
  },
  {
    "url": "assets/js/18.eafe9643.js",
    "revision": "59829b12a3b25884325e6edf824a06b1"
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
    "url": "assets/js/23.1a3a3c85.js",
    "revision": "8afef946f77d3e8ad25685d52f364ec1"
  },
  {
    "url": "assets/js/24.f37fc1df.js",
    "revision": "c17b2889b288dfe1e70295c3f076fbe1"
  },
  {
    "url": "assets/js/25.d7aafd88.js",
    "revision": "0c3f7cdf95d56d57c1befa19bfd877e1"
  },
  {
    "url": "assets/js/26.e7b36495.js",
    "revision": "c1e2bd926b02ce39cdc26bfa7bc2a345"
  },
  {
    "url": "assets/js/27.0491fe31.js",
    "revision": "6b54eb9934f9279cf16e753c324177a3"
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
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.85726265.js",
    "revision": "2bd6762178ef8595c40b9e257fde412a"
  },
  {
    "url": "assets/js/31.a31fb8cb.js",
    "revision": "c68d3a8d04130553f89003413700c94b"
  },
  {
    "url": "assets/js/32.90a129e1.js",
    "revision": "4d46d69e8ee957241e8c12d8deab7a22"
  },
  {
    "url": "assets/js/33.6580da89.js",
    "revision": "5209c92dbbd0f63cacd78963ee7e501a"
  },
  {
    "url": "assets/js/34.a2b3249c.js",
    "revision": "a3452ddd95be0a31c75194c57ee83d47"
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
    "url": "assets/js/39.f880a762.js",
    "revision": "01d6d91ea1fc6c67406800167802406e"
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
    "url": "assets/js/42.81221d3a.js",
    "revision": "fb518d711a846b7a17530c2121c17faa"
  },
  {
    "url": "assets/js/43.e0485235.js",
    "revision": "0078ee45b5bb1cf1a71f198aaa363164"
  },
  {
    "url": "assets/js/44.076e42c6.js",
    "revision": "1bc266d7f272f89993b64d3a84600c40"
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
    "url": "assets/js/9.1e0b8aed.js",
    "revision": "9679998f90c54eeeeed4b8d16de0e68c"
  },
  {
    "url": "assets/js/app.b104eda4.js",
    "revision": "996a68a252b9486688c13700bcefef96"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "5c46aa664efd5a2aa1b5bcb6c12745f1"
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
    "revision": "69768051fe25146ef10663c88d45fb77"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "8c284ff827a44e608b48263bcb53ecfb"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "7f4e25e9727d58dd0e924529122e556d"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "cfb0b0827fcad935d49694ee21cdcd92"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "ade0c109d970e3eee42c42a491c36b8b"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "db15d2559b85465ebd75a9e6d64da7ee"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "0098df8c939eb68ed5b062cb55182210"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "f6eec7f0c923623ef3549d2c7b502486"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "c9a261cbc6c5410f20c3401adc48c11b"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "6fe136eda422d7dc241896af5df0829d"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "9899c7debbf4f707e371a46ebed97489"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "0f0ba7ebe064ca70155ab88edb8c0012"
  },
  {
    "url": "guide/index.html",
    "revision": "da96961aa1ad032ea700d6e6401ea92e"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "287f7c3a0707c260f8e5abc551e85e02"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "a78544dac629f8f401238973805dd30b"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "47d522bfc78af4605d10e09c592875ca"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "3068d437b82dd2609420eb9f05bfbb41"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "5b75dac14feefeadd099c5221573f0b3"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "5535bde73d21b09aaf6537646874c307"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "5a0bc5b4fc64d3f4b09635035ae8375d"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "5c98c7764c8d829b25a9569854a98136"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "3f4bd9da0df148306edfd775fe20bb10"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "98b079762ceaa1fc8b4e75da3f57d8c0"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "f56870de30a118bca2174b8d2961c353"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "01f9353dc40ede2c5e9c98690cf9bad0"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "c2e6a9f2d4bd8573622fef6592110706"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "0144fee9325ec9793476af1f3fef4317"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "1eb8221508cee566ded38ac818eab75c"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "83a4a5cf92d773ff56180a5190167c30"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "393bf2bf10d648d2ea315da4d2976259"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "7c502999e3a493f88fc30a76e84c71a2"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "f4e712b6432931f8f2b10b912e81c7ee"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "fd1037dc2909e9f6a975da6498ba5e5d"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "d84f2b857ab882d5b3eafe796b10b020"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "33441f8a1a92d84b79b5d32582889982"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "5518436ebe562cb5b72fb6884852b0b9"
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
