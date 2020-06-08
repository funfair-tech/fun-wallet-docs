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
    "revision": "dc1ffe2f0dc40a74fcbd9f87e8ab26af"
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
    "url": "assets/js/10.913ad1f8.js",
    "revision": "c95c5420ceef2260503f5ab3d89f17be"
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
    "url": "assets/js/16.b252c39c.js",
    "revision": "bda5af73979bbbc36ef8120f095c3016"
  },
  {
    "url": "assets/js/17.e36e087f.js",
    "revision": "ae0f2332ef3a862cd83858da6f474668"
  },
  {
    "url": "assets/js/18.5d59d490.js",
    "revision": "fd19bc6c72cd100b184c446517cdd457"
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
    "url": "assets/js/20.55115ec2.js",
    "revision": "17b3065d419042c5a832cb9075530f0e"
  },
  {
    "url": "assets/js/21.a4c70e16.js",
    "revision": "8bf52b02d79984d820a3391a5c5c4033"
  },
  {
    "url": "assets/js/22.b8f6ea66.js",
    "revision": "699a152280cd40528772917ea0958a61"
  },
  {
    "url": "assets/js/23.2433c56e.js",
    "revision": "c2be58a0e3dba82c0c033ccca7a9a891"
  },
  {
    "url": "assets/js/24.4829f065.js",
    "revision": "3566e1fb120b706eadcd660158c369c2"
  },
  {
    "url": "assets/js/25.8e82babc.js",
    "revision": "541cc0928cd18f1d054087711ba74133"
  },
  {
    "url": "assets/js/26.0a690c3a.js",
    "revision": "c061452b846bd8834f96721779766cae"
  },
  {
    "url": "assets/js/27.c3c54ffb.js",
    "revision": "72da014ceff0ec4279af2efd589dd043"
  },
  {
    "url": "assets/js/28.0f80c7ef.js",
    "revision": "065dc1177f10ca3ea83e563510f28101"
  },
  {
    "url": "assets/js/29.c91e9cb4.js",
    "revision": "5d08557d49bb519308b1a1d9a2e6fcc9"
  },
  {
    "url": "assets/js/3.7515ba86.js",
    "revision": "9dc44d5711e09bf25c5d74296c6a41f0"
  },
  {
    "url": "assets/js/30.9aab8618.js",
    "revision": "79dba99b872ca5c4428e3891615720d2"
  },
  {
    "url": "assets/js/31.6a169791.js",
    "revision": "415d608a19b2800149b85d5f0c50898b"
  },
  {
    "url": "assets/js/32.0434b3c0.js",
    "revision": "2d5eb1a90fe5a90d5981d12f029df718"
  },
  {
    "url": "assets/js/33.207cd617.js",
    "revision": "ee99416d17dae3c7138e903bac70d8d1"
  },
  {
    "url": "assets/js/34.3d24aba2.js",
    "revision": "07594428173794a48b24d527ba7db788"
  },
  {
    "url": "assets/js/35.d0437520.js",
    "revision": "21fcb46f26b0d6a254ac1ffe6bae0de4"
  },
  {
    "url": "assets/js/36.1df32b2c.js",
    "revision": "4d7e48a9bd6b81244238ba5cb75d75f3"
  },
  {
    "url": "assets/js/37.6bf8615c.js",
    "revision": "edc6d464ea4dd0f55912d46a21eece1a"
  },
  {
    "url": "assets/js/38.beede36e.js",
    "revision": "84bf6121178558446c37db61505bd87e"
  },
  {
    "url": "assets/js/39.80a6183f.js",
    "revision": "33814abfafea1a054b2987b0228fce56"
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
    "url": "assets/js/42.8f1b7da3.js",
    "revision": "290e09d27ce6f09e4e4e336658feffaf"
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
    "url": "assets/js/8.77352888.js",
    "revision": "feef78308081e418df18190753e3d87e"
  },
  {
    "url": "assets/js/9.67022518.js",
    "revision": "2980a40602d42e3b7e04c60b939fcb54"
  },
  {
    "url": "assets/js/app.f6084f64.js",
    "revision": "95921c090ddf8a2cb518089b385ea4f7"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "264ae3ff4c34983ade4464d3828a1bb3"
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
    "revision": "1987a38185f838788321faa5be499dab"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "0521284e5644385093626525e4c1cbe7"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "01f79ab8e868e21f7115ee0afa908d49"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "59ea711b6e6f41e52a6b2f146dd42607"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "89d48a39eafe621cbfc5f17e99bf36ca"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "eb65c408e8369924b70b104b87cc59dc"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "9ab2f09dd90f7cd78246ed656830a073"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "a89d797d9f4357c9516515896223533e"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "21b59dd129ad51a6896a9f9a2485ff3e"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "c7f458070fe79eaf10f45e7b7f771159"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "d1bbcdf1ca8e8997ee4f9b0465ae6357"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "8034f4a8fae1f2aca68a821c7dcac6a0"
  },
  {
    "url": "guide/index.html",
    "revision": "be335a81dd18a8b38b6ddd8a06dd3205"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "17bd285b451c11a04af9b024541058da"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "18d1e80cd729601dd06708c2f012a5c5"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "08e90451cbd0986c16c4fe527ebc2b4b"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "c958638b82c2344284bdf046fa9513b9"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "8236dc86801ca092bf3fee2ff6401abf"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "a215b17bb60871734c15bcecb7d5730b"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "ed40b01108602096bb794c6f9577b480"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "83f94e816a87f93424e2bcb208e00157"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "cbee90f0be8901895f8248e7749a3155"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "52516f5680818c59ab384bef42f3f45b"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "8537fc1c2a0a26a05dfc0071365241fb"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "515d3f1e6342eca9a49e311a3c227f51"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "be25f64aeb6675ad2b15b22e39bbca17"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "09d3fd4eb4bd4493cd9ff52ee4e55c52"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "15142b4a2c2b07640aa989236b6948e5"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "411938d1e58fd70574cdc6ac69c930e7"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "23ef3dfca4e241e4e229ebf7c989b3bf"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "8490727ba367cdd3c07a016638f84feb"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "1ef8c8475b0d001fdf1f4bfd898e3065"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "056f66f36b99f0b8bd7e5d8aba7b99c2"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "3b5dc7aab461a5ab1181ee361cf2a678"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "68787ae712d09b399502b6100186cc1e"
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
