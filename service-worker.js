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
    "revision": "7b9458503ce69136bb71ca7836113f1b"
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
    "url": "assets/js/13.79e5e600.js",
    "revision": "268fb29b54dd2d34499b32a5da2891d2"
  },
  {
    "url": "assets/js/14.d854c661.js",
    "revision": "6b3e0da314223c36ae1b0b82a6190484"
  },
  {
    "url": "assets/js/15.f30583d8.js",
    "revision": "254112dc81fa248dfec3cd67b967429c"
  },
  {
    "url": "assets/js/16.ec4b8e77.js",
    "revision": "adad5b659448dfafa16958565875bbdb"
  },
  {
    "url": "assets/js/17.31b904e4.js",
    "revision": "c43525333a4153de55fa67a4098d351c"
  },
  {
    "url": "assets/js/18.e3118307.js",
    "revision": "e712a712d4fbc6f96704d0beeef6fb95"
  },
  {
    "url": "assets/js/19.8353a40d.js",
    "revision": "6118b31c19ec38ddf02ded1060980f95"
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
    "url": "assets/js/24.cde7fbaf.js",
    "revision": "dc2a68dad84b686016b1292422cc2484"
  },
  {
    "url": "assets/js/25.c5ac63ec.js",
    "revision": "8f45497dccd771304630d54a5c489492"
  },
  {
    "url": "assets/js/26.988e7d1b.js",
    "revision": "b49f677e0022360b5b509f353f08a17b"
  },
  {
    "url": "assets/js/27.9e6b648c.js",
    "revision": "0312eb60d5027d6e93a075af50cb599d"
  },
  {
    "url": "assets/js/28.a1923801.js",
    "revision": "944fd0df01841d4771d98325f9bc4d0d"
  },
  {
    "url": "assets/js/29.0afb3ba7.js",
    "revision": "721f7c7c5502f1385891709eedea4075"
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
    "url": "assets/js/34.3ccaa14a.js",
    "revision": "adf8bcec7f25400637a4c8f92df1eee9"
  },
  {
    "url": "assets/js/35.bb5c1185.js",
    "revision": "71eea044d56e2cc706d1a8091a0500e6"
  },
  {
    "url": "assets/js/36.e42bff8d.js",
    "revision": "6c04240e39fc6ff64b1b49129c367fc3"
  },
  {
    "url": "assets/js/37.fb8d3d43.js",
    "revision": "e08e3e0ce0040f0996afeae0648227dc"
  },
  {
    "url": "assets/js/38.b73c912d.js",
    "revision": "b373931c521de85d6073721f26b93925"
  },
  {
    "url": "assets/js/39.2c98ab3f.js",
    "revision": "a37d0cc3c043a0ceb6e4194efd44bf25"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.5cb198bc.js",
    "revision": "7875c8c586e6a4f227f886f91def050a"
  },
  {
    "url": "assets/js/41.d7ca15e8.js",
    "revision": "162e47e2aa003fabcfc06130a91070b5"
  },
  {
    "url": "assets/js/42.e89c729e.js",
    "revision": "6b0c6a4542e35b85d20b27fc0de52244"
  },
  {
    "url": "assets/js/43.946a0d2b.js",
    "revision": "d91eac6a0b8ab08b3694b366175b8286"
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
    "url": "assets/js/app.44baf3bc.js",
    "revision": "1b0c7792ca8ff8c5bbedb3618f84af45"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "1a6b3789f37b1f01a07f31a0b291173c"
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
    "revision": "2f8de840aeb22b06a9aa1553ec501de8"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "0cbb4a19bb2b095ca34896eec9d539ea"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "8c178aefa6c9d7309c66bab1cc300357"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "c50d5bd104e0f35d347ae29dd13675d8"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "fc232331e1bcaf83bce8bb599614bb00"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "a5bb82e164521409189d01563045300b"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "52edf2c3abfb4199376545277b97e816"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "27dabd4093b39249d6de841674ea84d7"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "ea4186847b284c5e8b9c5a3fcf3c6d32"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "44409c46472d419ef021591649bc8458"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "ee34449f004b5d7c0f54a10078018aaa"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "78af7951900b700cdd6ddb53d7f08bbc"
  },
  {
    "url": "guide/index.html",
    "revision": "cd54baaaeb8ee4538ac065ab2b625cb4"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "35810f2be818bfee14a23e3ed74e1893"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "ba4210eee9cf26fff180760635c0109d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "db8625ac6e935a37d9c8267f32fd91ef"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "85f8f95b4ae092929274533762518e7e"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "defe11c871d9ee9cf141db06068d03f0"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "9f220adbdb3c0ad81d0223e62b9be8c4"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "4ed01f44d2883edc5db68231b923cde2"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "bb1a03cb89a995863f8b9976306ff5b1"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "dfcde58b6f18929f4a38d4eaa88e9360"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "266ecfd6561d4fb2c91444a5f3234eb5"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "b259246f25f081350e914a82d2d915d6"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "c65d1ff929d8e3aa4bd5269c1c0c8e99"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "d69a551114cbb2f9b1be4fd0a7ac2a16"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "52c11b330b77bc1eff95d916d461e4c7"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "7f08a745e5dad8f36f5e11bb93fd6ac3"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "498bf9f1278e85a946474fee1fed88b5"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "0ed03685f0a6afd463d41f662fa78762"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "d2e7ef1bee5ce3438d19a49abbecd005"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "ddcdc52805e467e7407dff136385da58"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "0244e58f5c97d5f124e17a6038d005a0"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "5629b480aa8751e6c39c2cee49679b12"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "18c0c2f2b1a8ba26cef894c606e61731"
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
