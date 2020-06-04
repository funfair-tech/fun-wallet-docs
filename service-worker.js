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
    "revision": "b40f00e592a60e9381cb96351f7439e9"
  },
  {
    "url": "assets/css/0.styles.0e0696de.css",
    "revision": "924a6a0d1968232fe163e16a000daa2f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.18aeb2c2.js",
    "revision": "1c705accab8a6827daf44257fe030951"
  },
  {
    "url": "assets/js/11.d2865aee.js",
    "revision": "a85a15e5c6dd9d9e7f425e72550da85f"
  },
  {
    "url": "assets/js/12.e46e5a2a.js",
    "revision": "226143cf12e30389db7388bdf7f43af8"
  },
  {
    "url": "assets/js/13.7c7207ab.js",
    "revision": "f10bd272d6712f9c1448646d75c5c833"
  },
  {
    "url": "assets/js/14.2620c205.js",
    "revision": "b1915b99269b095181cbf14866a705ad"
  },
  {
    "url": "assets/js/15.f30583d8.js",
    "revision": "254112dc81fa248dfec3cd67b967429c"
  },
  {
    "url": "assets/js/16.20774cc1.js",
    "revision": "05d8beb91df9b7c38766d010a3649415"
  },
  {
    "url": "assets/js/17.e36e087f.js",
    "revision": "ae0f2332ef3a862cd83858da6f474668"
  },
  {
    "url": "assets/js/18.11108fdc.js",
    "revision": "02fa499c19792d72203ff729d7e6f41a"
  },
  {
    "url": "assets/js/19.c02287cd.js",
    "revision": "13fac78b97c085a174841874424921dc"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.d9e1fa82.js",
    "revision": "ea2b4a9d4b7b8d482aa09a8fda5a6af9"
  },
  {
    "url": "assets/js/21.1478dac9.js",
    "revision": "922fb199a24aae01dbe639d1a9c405c2"
  },
  {
    "url": "assets/js/22.8bcf5688.js",
    "revision": "6eca67897ecc737c6f284eb5f958444e"
  },
  {
    "url": "assets/js/23.3003a220.js",
    "revision": "29ff4b971cb8200068c3ff9079535233"
  },
  {
    "url": "assets/js/24.461c3fbe.js",
    "revision": "15562a358076e4e683850302b1be7467"
  },
  {
    "url": "assets/js/25.21067a62.js",
    "revision": "160da30baa255b0c61fbe0a364cc9030"
  },
  {
    "url": "assets/js/26.16e35387.js",
    "revision": "27482129c5f8de7dee44bfae341b2bd6"
  },
  {
    "url": "assets/js/27.58e9b851.js",
    "revision": "77a6d3e395f4270c7eeefc8b9139ae0f"
  },
  {
    "url": "assets/js/28.8b7c9862.js",
    "revision": "27e29cef991c17852fb16e0fb15e02b6"
  },
  {
    "url": "assets/js/29.ac24025b.js",
    "revision": "721f7c7c5502f1385891709eedea4075"
  },
  {
    "url": "assets/js/3.cab6926b.js",
    "revision": "d4c921c20d34ed5440b781ec85ced7dc"
  },
  {
    "url": "assets/js/30.016ef62d.js",
    "revision": "11fd36536027019299c74d7766a10217"
  },
  {
    "url": "assets/js/31.910bbef2.js",
    "revision": "3326beba8be2559ba21a1ba00f20bf60"
  },
  {
    "url": "assets/js/32.da38ea18.js",
    "revision": "b0017cee7fc1e8d43fb4af0b23ad213f"
  },
  {
    "url": "assets/js/33.cc30d81e.js",
    "revision": "d2b4e6a28748c78f013c449147b19982"
  },
  {
    "url": "assets/js/34.fe2c80ce.js",
    "revision": "7b3c07213f5b1596a9d660b55adc9d51"
  },
  {
    "url": "assets/js/35.bb5c1185.js",
    "revision": "71eea044d56e2cc706d1a8091a0500e6"
  },
  {
    "url": "assets/js/36.967e96d5.js",
    "revision": "b4155de29aa38f70a796d373a986f645"
  },
  {
    "url": "assets/js/37.3f2ada2f.js",
    "revision": "b877c984bb352139e2bf10d39789b136"
  },
  {
    "url": "assets/js/38.694cc643.js",
    "revision": "a5881ec8cbb2b4784539075612d4e8fe"
  },
  {
    "url": "assets/js/39.bb846ce6.js",
    "revision": "0cf6ce0bfe94dc526729969737a89598"
  },
  {
    "url": "assets/js/4.498bbee8.js",
    "revision": "6d987f752b37c16f514ee0d37f70960c"
  },
  {
    "url": "assets/js/40.5cb198bc.js",
    "revision": "7875c8c586e6a4f227f886f91def050a"
  },
  {
    "url": "assets/js/41.cd929154.js",
    "revision": "63312da4c25d3489026884c72511c3b9"
  },
  {
    "url": "assets/js/42.61ad5121.js",
    "revision": "10f0205f99221c19a0fa067b1718d361"
  },
  {
    "url": "assets/js/43.904dcb46.js",
    "revision": "ff464819c41264712ada8587b18c37d9"
  },
  {
    "url": "assets/js/44.c4c91deb.js",
    "revision": "3c944cbfb355b2661734448130a8a2b9"
  },
  {
    "url": "assets/js/45.b7b086e4.js",
    "revision": "88a7c06f76ffbfc45dcbffbc8688a8b7"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.37b07a85.js",
    "revision": "0525da58608e1a41e4511733f427ed34"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.0a8332f4.js",
    "revision": "a60065227fef62f7c991ce2e8fdec502"
  },
  {
    "url": "assets/js/9.199cbcee.js",
    "revision": "f532bec1355eca7445863c273826d130"
  },
  {
    "url": "assets/js/app.ead5eb01.js",
    "revision": "aa3089cfc3dcb2aabe8bbfb2b1e9d4a2"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "85db688134873fc2901a735d72dd853c"
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
    "revision": "38012ddc9563546b2235ee03a4bbd18e"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "23f86cb0359ea796058679b1847f1c3d"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "53ed6726f42df739cb8b7c735c64da83"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "e9d1c13ec3da8e4084ffcfe551c5c28c"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "090a31a9c94782d3e59d681ee2a95e92"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "479c7c0d26c28a19e7f6b52056fde99f"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "86ce1e075a38084fee40c9a55f77464f"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c27c7989eb8d8b85e5fb1db92f53d4e8"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "946b77d057a0958cb518f7e814b1c8f4"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "20af34b1cec62c9217863dbc4ebdb08d"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "fbf16b0bbd0e9154e7630c96c6ca9a83"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "ac1c142272b6f9d7314e89cca90844bd"
  },
  {
    "url": "guide/index.html",
    "revision": "452234728cb833002a7e044feaba6ccb"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "0569f475d3866287593f476253b91b9d"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "11bfd5fb36269eedd2a91695956ed1ca"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "eb499754716f4bdb71a1b3ba0b59bd94"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "a1ca9420e4c72d7fba32ac294787dae2"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "a9519b1a8d48d1a55307b47651a08267"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "b88c52e9c1f29b6b27ef4119d1708a27"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "a83a74038a305fb84e9df24ba60d10d7"
  },
  {
    "url": "guide/user-information/authorization.html",
    "revision": "c1611a25999960b8594316fa631377a6"
  },
  {
    "url": "guide/user-information/encrypted-user-information.html",
    "revision": "17b40be2a14bb412a3d24ca3093ec2e4"
  },
  {
    "url": "guide/user-information/introduction.html",
    "revision": "5f591189765b19695aaeb6005ce290a2"
  },
  {
    "url": "guide/user-information/user-information.html",
    "revision": "0ab3bd9ea8723ac749780a92794ab10a"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "01fc5429c49a0a936f5fb7bea136bdfc"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "67a19f4166af43504f95274ac2dc0438"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "5f6bbb3688f398f943886a1fb9d1fbba"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "6ef0092de28e527285a46b0ef761d12a"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "5518a2eb891b120475ad0bc5cb20d6bb"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "978693ab1261b0703849e035040189c6"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "bf841db7f202606914a53bf46866d310"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "19ab6fd6b8ad8c97364dfbf0e9e5b51c"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "7769bb6a50516a334ff4c123010b0c33"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "3742ad8c49a14ecfe046c115b6bd8ceb"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "fd58f98975361746428cd8e4c75876f0"
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
