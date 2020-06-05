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
    "revision": "240d5bb66bcaa7b4aac9fb0dde7d52cc"
  },
  {
    "url": "assets/css/0.styles.d2ddfb65.css",
    "revision": "d00a59f9bba7642bd37dec09b1b09ead"
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
    "url": "assets/js/14.bd767c04.js",
    "revision": "0df4c60a109000457412ed57bc2e0569"
  },
  {
    "url": "assets/js/15.04917513.js",
    "revision": "11a10d5ef365c2436be963d13507f582"
  },
  {
    "url": "assets/js/16.2a85eb2c.js",
    "revision": "d2229e1466f43f029a4c1b163f5926ba"
  },
  {
    "url": "assets/js/17.31b904e4.js",
    "revision": "c43525333a4153de55fa67a4098d351c"
  },
  {
    "url": "assets/js/18.53bd85a7.js",
    "revision": "6e6b2b5a044db4d5b1fccc7f10991f9c"
  },
  {
    "url": "assets/js/19.4ed76072.js",
    "revision": "6616bac71519e69bc89da9629911fb1f"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.f5411eba.js",
    "revision": "cb504a4602e4c7331394fd54308e8796"
  },
  {
    "url": "assets/js/21.1478dac9.js",
    "revision": "922fb199a24aae01dbe639d1a9c405c2"
  },
  {
    "url": "assets/js/22.30d959de.js",
    "revision": "c78bb763d7b8e75cc076b3a73d857e31"
  },
  {
    "url": "assets/js/23.f81bf215.js",
    "revision": "fd427cc3082c2573577dbe626828c88c"
  },
  {
    "url": "assets/js/24.e2ac39f1.js",
    "revision": "ca46ca2cc51a3d4cc321ae8a3a253b0f"
  },
  {
    "url": "assets/js/25.767178e2.js",
    "revision": "b7c8569ba590b38c81dd111511dcb684"
  },
  {
    "url": "assets/js/26.988e7d1b.js",
    "revision": "b49f677e0022360b5b509f353f08a17b"
  },
  {
    "url": "assets/js/27.532cc21e.js",
    "revision": "917c7c13150ce509a573bd54ba49cabc"
  },
  {
    "url": "assets/js/28.9c685a55.js",
    "revision": "415e72417460e4b8da0391a87a603bb2"
  },
  {
    "url": "assets/js/29.42f66348.js",
    "revision": "159d538979d04fa589a6ac8699f2b013"
  },
  {
    "url": "assets/js/3.7515ba86.js",
    "revision": "9dc44d5711e09bf25c5d74296c6a41f0"
  },
  {
    "url": "assets/js/30.4efef4b6.js",
    "revision": "afc9d015af86d558833709cb05086676"
  },
  {
    "url": "assets/js/31.929eacab.js",
    "revision": "d2fe090d7cec3a0b2333ac3cd3890362"
  },
  {
    "url": "assets/js/32.3bec5bfe.js",
    "revision": "b0017cee7fc1e8d43fb4af0b23ad213f"
  },
  {
    "url": "assets/js/33.cc30d81e.js",
    "revision": "d2b4e6a28748c78f013c449147b19982"
  },
  {
    "url": "assets/js/34.c94490c9.js",
    "revision": "bba87cac7a827e0977ba9d8eaa3b0e2d"
  },
  {
    "url": "assets/js/35.4f67390b.js",
    "revision": "583a04bd0f2736e06e425939fcf274cc"
  },
  {
    "url": "assets/js/36.33470f47.js",
    "revision": "005fbff9094b3118ac24b9ae52871b52"
  },
  {
    "url": "assets/js/37.a7168a34.js",
    "revision": "9d4e4c090daf544d294b866094dba266"
  },
  {
    "url": "assets/js/38.694cc643.js",
    "revision": "a5881ec8cbb2b4784539075612d4e8fe"
  },
  {
    "url": "assets/js/39.0207a0e3.js",
    "revision": "3fa781e4783090b286e13eacf1870292"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.8130e260.js",
    "revision": "c78538574f12433c399388ccdb538479"
  },
  {
    "url": "assets/js/41.5625c8b3.js",
    "revision": "bbc89e88d6790ec787693c71c2465a11"
  },
  {
    "url": "assets/js/42.dbde1b2e.js",
    "revision": "4da1379fe09bac9bf0cf0605045d359b"
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
    "url": "assets/js/app.a0001168.js",
    "revision": "1ae646e49205302069803247e7ce46ca"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "64a33ea399eaad9eb7eabf23cd449621"
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
    "revision": "6b744838c9826016504a48a5580eb7a9"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "4222761a7dd087990dd398e3d4ba200b"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "1b58286f9725d2f27f40cdbf427c43e2"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "132d0b6269c6f9246bc177da6fdd234c"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "85804cb7e78b52aa1cdf236e91428244"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "fce79791347542217ac715bf94ee8843"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "2c031d6dc892062a31794979c8e404e1"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "48ff607d83ae94c6386a04b0e83f23af"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "f6e84abba08ee0b229c8989100f9ca32"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "057eb5ac55533bff03040b051995a8bc"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "6cc96e6f1e35bb9f1ec8c31f905707f5"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "aaa199267a058c93bd38a923889c0662"
  },
  {
    "url": "guide/index.html",
    "revision": "893112cd7f0a5cbcf937292af0cbf954"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "80527b0371b0bd883caf9e2e18118f3b"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "d2f3fc29988ea42e25b9c40cd71bbe03"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "9e0990b198cacbd08d8e52815c4ccfee"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "3aab01816e13e8c5cf377bf27ec3b7ab"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "802c5bd6af7d93174354abf46774b13f"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "fb48350a1409d3a95df3ad43e98bf96c"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "bf559a4bd5ceb2261f3490544de74721"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "8cb0acc616121def04d0b858cc8f23f8"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "f2e31b4fbcde19a8ec10f99e7b8d2a61"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "b2acb31116b16551a8c0ea23c913ee03"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "0bfbd3b935032d6a2a89c299e61cb3d6"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "61a477b42a79c82dbb6e6dea6516c322"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "bde18eab63e59ba19f6b43344cddf3f8"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "d12e9930a3f9913fd17d15f605cd1155"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "91e551592d369221b50ab0e1d889b5ef"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "a38536765bfceefb2d48c39d2fd515ed"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4d1c8e3fb5c07afab68b832e56403f2a"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "55e48900291d9e3ba5157e2f1f6c75e8"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "c6cde647f821e857f08d4531188950b0"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "d9652c9cf1017219a7c69c96b323c234"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "95d6ccb9a828ad7c53262140daa3b1a6"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "963027dd61c6b31e6e1a136b24b7584b"
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
