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
    "revision": "d1e4c96b1334056c0efb963d3528528b"
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
    "url": "assets/js/10.b8a1f6fe.js",
    "revision": "dbf2240f7de519756062b0fde5d11764"
  },
  {
    "url": "assets/js/11.77ecbf1f.js",
    "revision": "e2bd94dc1f03ecd98182d8bad8293107"
  },
  {
    "url": "assets/js/12.269d10b3.js",
    "revision": "8a3988a7322f922b8693565598080d63"
  },
  {
    "url": "assets/js/13.be235d22.js",
    "revision": "640459c5bc2d5872b91c8c94347df5b0"
  },
  {
    "url": "assets/js/14.44091245.js",
    "revision": "744f9663f4b924ac5bf53b5649641677"
  },
  {
    "url": "assets/js/15.076fe783.js",
    "revision": "e31b9db1b78d296f3a267c5b8ba92a1f"
  },
  {
    "url": "assets/js/16.fc9eee4a.js",
    "revision": "4e0da963616865c213881ee5dffbce14"
  },
  {
    "url": "assets/js/17.2a767797.js",
    "revision": "9f5c624530171fd9e2f574141146c637"
  },
  {
    "url": "assets/js/18.5d59d490.js",
    "revision": "fd19bc6c72cd100b184c446517cdd457"
  },
  {
    "url": "assets/js/19.8353a40d.js",
    "revision": "6118b31c19ec38ddf02ded1060980f95"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.4ad2aba6.js",
    "revision": "f15b35db7ff3e63f8ac3af5f9feb9ade"
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
    "url": "assets/js/23.bf1961e5.js",
    "revision": "4babd5f3a6f9c40fd73754a2a2c67e55"
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
    "url": "assets/js/28.7755f9f2.js",
    "revision": "2fa99bc6cb81d169cebc8f808576e656"
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
    "url": "assets/js/30.3d7ee580.js",
    "revision": "0a4f064e3e35e1be691f9999214b7765"
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
    "url": "assets/js/33.8400ccce.js",
    "revision": "039d7b7142cd65ae71cd38aa3457dbd8"
  },
  {
    "url": "assets/js/34.5dbfac7c.js",
    "revision": "a949dd3e8e88a8a8d58bc10ba7fb96d5"
  },
  {
    "url": "assets/js/35.8b6808df.js",
    "revision": "c5d54b95fdc0a2de0ccce4360f9981f6"
  },
  {
    "url": "assets/js/36.f889ecb5.js",
    "revision": "6ee4bc2393a4c7b92cb88bb1ce1b02cc"
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
    "url": "assets/js/39.a7ea4a8c.js",
    "revision": "173f345b648c24a768e74e233db7df9f"
  },
  {
    "url": "assets/js/4.903bb4c8.js",
    "revision": "686f40135815e1b92b21d077b9867af9"
  },
  {
    "url": "assets/js/40.8def8e7f.js",
    "revision": "ee79cad2f396acad26673c993f0b6434"
  },
  {
    "url": "assets/js/41.40c08d98.js",
    "revision": "85384551cd36f94924f836d1b4d4aa42"
  },
  {
    "url": "assets/js/42.d4fe99d2.js",
    "revision": "85d833ca6d094724104e3d1810bf9582"
  },
  {
    "url": "assets/js/43.191c3ce3.js",
    "revision": "ddc9b45d002468326bbe69cb6ddbfc03"
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
    "url": "assets/js/46.5b07ed21.js",
    "revision": "0c83916b64a624169175eaed92c12352"
  },
  {
    "url": "assets/js/47.c636f71c.js",
    "revision": "482cf8bb976a3442479c4227ee9d1119"
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
    "url": "assets/js/9.06544d44.js",
    "revision": "4175d51a09db4d93c8f307ba9effb6bc"
  },
  {
    "url": "assets/js/app.bf657126.js",
    "revision": "431928fc2420ada7b3c250b7f715cdfb"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "a12d9af7dd98af52f27d5eb4511a313d"
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
    "revision": "8c92d8237494722854f2ba931f8f16c3"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "1394b557d0ba2cdeb50279114ffc707f"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "615f59492141895c06ce4921fa535a1e"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "156a34802ad438101948f3a8202f64a9"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "4ea40bdd3d82747f11c776cd2c7e040a"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "5e643445cdabe3b4e6bc9d2e68369377"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "4f764ae2a1745dede617331f13767715"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "12fd97b5646a0bc42112343550d4af4f"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "9a46a4e54a47719d7f79ed492de32023"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "898b3f616e3fa2278fb4d1862f32bb68"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "6f4562bf175b1f7b5e75b0ee94db68e2"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "995d2897c1a828613ccde346c15fa0fa"
  },
  {
    "url": "guide/index.html",
    "revision": "589672923115a5656a2fc8bb428379fa"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "5994030a113b3b7e07e9e2a46baee16d"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "943c350069c78c1a55461e9ad90be161"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "8522191c11b267a0c3f8c6c92ed17d93"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "fdf692498792d1cb29d3eaea8e5774c3"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "b64bf5bfb1b4e39284f3707025fd67ea"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "58df7b49c80a995974baf83df98e9cce"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "d3f9c7512b368da00a5e64520e44e22d"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "8066404bca986e6f2919f351c32efd4b"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "d5ec2fa3ba42b5a85bf46155c8f18dff"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "9fc0705eb8a602770b2127e90830457f"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "7789b330aa47c81e07567a432a517dbf"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "bc799b7c5ed34347b51c5271c9bd81a6"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "90d7f77486df8880a6474d64e2a0c8f1"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "af5861523dbe1f6dd9540411f8a20364"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "63c35fc5ce93ef92135f505cfdf98a68"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "12c039723c71b43afef57c6c0365d6cb"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "9d6067b4f726715373716aacd308143e"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "da2297422cc4e178ed3aa55f1ef422ba"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "eb4134c155c94fde64a6e957af4297fe"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "8ad7f4c187b41c537067ea25fbc9f4c2"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "8cba9743ae77cad6b460a294668346e3"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "4f248728a4bdecd77408febea64111a5"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "657e0fed458e31b1563b435101b2451c"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "e7a73beed3ad8b6ba5e58c9653b029dc"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "11a570b0e5c2c0ce0c30e667b28f1bf6"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "fc7831432f58918661774f06a04d7db0"
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
