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
    "revision": "4b245a426e209b4def5fdd0d6156da76"
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
    "url": "assets/js/10.7bbbbc32.js",
    "revision": "b1a008931a3400833c8bef03cab39e2f"
  },
  {
    "url": "assets/js/11.3f2a87a3.js",
    "revision": "77f0d95db218991d03c0cda33d3c222c"
  },
  {
    "url": "assets/js/12.83027ded.js",
    "revision": "4534efa9ac5bebfaeb64fc807cdd7751"
  },
  {
    "url": "assets/js/13.a6b2a7fa.js",
    "revision": "41c4c3ea5f054d36c7bdd1412681a6fc"
  },
  {
    "url": "assets/js/14.0fb219e4.js",
    "revision": "feee34e618195292214d3866fc6fb0ca"
  },
  {
    "url": "assets/js/15.f30583d8.js",
    "revision": "254112dc81fa248dfec3cd67b967429c"
  },
  {
    "url": "assets/js/16.9b70c3c3.js",
    "revision": "d32828b2626aba50ebd1904488c4e209"
  },
  {
    "url": "assets/js/17.09c5e52a.js",
    "revision": "6c968db85c6a2f0c3427c6f782859827"
  },
  {
    "url": "assets/js/18.e3118307.js",
    "revision": "e712a712d4fbc6f96704d0beeef6fb95"
  },
  {
    "url": "assets/js/19.6b1ffd3e.js",
    "revision": "f804150d68b79b845de3b7404433e8c3"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.3e6aaa4c.js",
    "revision": "3da939bb9924ecb1c4359f176e6925ab"
  },
  {
    "url": "assets/js/21.ecdb9b52.js",
    "revision": "1e8e293de3b631dfeb05445a73f47254"
  },
  {
    "url": "assets/js/22.88b89ca7.js",
    "revision": "3f14a5fb89baca1920c94ff7d47458ca"
  },
  {
    "url": "assets/js/23.f81bf215.js",
    "revision": "fd427cc3082c2573577dbe626828c88c"
  },
  {
    "url": "assets/js/24.8db98613.js",
    "revision": "03eda0c73ce3dfc9b31d306c8accf027"
  },
  {
    "url": "assets/js/25.8e82babc.js",
    "revision": "541cc0928cd18f1d054087711ba74133"
  },
  {
    "url": "assets/js/26.e0441623.js",
    "revision": "69258fb7a9db691f696fb6cb42c0f1a3"
  },
  {
    "url": "assets/js/27.2ec3f875.js",
    "revision": "d5a6914b44713b54de85b3dac6452e0c"
  },
  {
    "url": "assets/js/28.12d571d0.js",
    "revision": "3e110741a9dc0b6de571533e980a438d"
  },
  {
    "url": "assets/js/29.5ab087e3.js",
    "revision": "e30287427a4f23e2b3ddb029e47c2306"
  },
  {
    "url": "assets/js/3.7515ba86.js",
    "revision": "9dc44d5711e09bf25c5d74296c6a41f0"
  },
  {
    "url": "assets/js/30.d587356e.js",
    "revision": "28d7d85d9391d410affb6e9d931d810c"
  },
  {
    "url": "assets/js/31.39237edc.js",
    "revision": "623c2ee10513f72970400f5b09e32ef1"
  },
  {
    "url": "assets/js/32.49d3409a.js",
    "revision": "049c85f0b4046b699dd26d0aeefdb760"
  },
  {
    "url": "assets/js/33.207cd617.js",
    "revision": "ee99416d17dae3c7138e903bac70d8d1"
  },
  {
    "url": "assets/js/34.3f63557b.js",
    "revision": "ae523ac79bb14d837e709efdff44c940"
  },
  {
    "url": "assets/js/35.ca36b09d.js",
    "revision": "1f6ca8001bd08c9deb97f44463c4bbe9"
  },
  {
    "url": "assets/js/36.54b8a6b4.js",
    "revision": "04d8ee0ec030fa664fd4c1aadb51ac54"
  },
  {
    "url": "assets/js/37.5d3324e5.js",
    "revision": "0be486199167b0d3557b7422d55b1497"
  },
  {
    "url": "assets/js/38.beede36e.js",
    "revision": "84bf6121178558446c37db61505bd87e"
  },
  {
    "url": "assets/js/39.229c0418.js",
    "revision": "b0fecf79500962ca4d8f82366fb82c67"
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
    "url": "assets/js/app.6513ce21.js",
    "revision": "ddc23f7151a07f9f74cce891bd925c1b"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "98c1319bdace2923349badfd824b0cd5"
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
    "revision": "abd70fba754bc9bea7758649090a36ab"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "f50851d6431450d2f423c072d3b2945f"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "52be415e25e3f78b429625f6ce9736ed"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "962297ae339c6169298077506c4a792a"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "91c066fe39042d1d9c550c447a5eb60f"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "2fd1f1bf81ecfdaa84984de1a8d730d7"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "34a5b04613f23d182cdf47dbe99a1cb0"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "1cd165a9a3cc57a584793f7ca19a7d27"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "1952a7e3d8c3522cd64817af1744780c"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "e54135078533a74260bc925fe18964d2"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "a46ddf7b68c297c7940b0f2ea00be7f2"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "d677756cc9073108552d8e8e7908bb81"
  },
  {
    "url": "guide/index.html",
    "revision": "18e7bda3aff7c3e924e2327f73599ac1"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "dd16501995852b97da2cb68167d1c7cf"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "49c547f42d9fb03e44acf7758dc1f1b6"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "4086ceb4935c7f76e3da6c186e482990"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "997e7fb128ee563e765fd20434f454e0"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "89a60ffb7c290a017a44cbea0014eed1"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "7d25d980b5d97732134751feba385390"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "49b109e5f16782cc27f2febebf8a9d2e"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "f4e8744c85d3217f9b7e78e0e0a68e95"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "8400de15d52597de62b5f17337ce53f5"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "573f77760000d872e061ecd117632691"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "5147273e429bf4d6bcc5b144e9e08742"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "4f36747dd2f29bfede97da97c21e2c00"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "9ec9c7fe545750aa44170262c5512dcb"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "7198d329e30164b6e3b3b9b19ca8d05a"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "32e9bf399243978d063751de780737f9"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "54945b56c0a76b3323cca9b2a32f4253"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "23793a0c70e205f2476297a43332fb18"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "597f7678ef50b65c903e0a93514bac03"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "251b67d8630a5e92435e1119e9cb999d"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "fdf9c9861d60d3ff36a7cc820913e754"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "973c3f158396e12a10ab4d22759fe001"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "0f080bce171986bb685210fecf90f56b"
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
