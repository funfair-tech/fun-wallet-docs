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
    "revision": "231024b72353c2b375363dfc5551e5d0"
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
    "url": "assets/js/10.3f48a5b8.js",
    "revision": "0cc9a1455f7edefdcbf66187451e146f"
  },
  {
    "url": "assets/js/11.80799146.js",
    "revision": "0ed601b979e2e9895bc52c18b7a32753"
  },
  {
    "url": "assets/js/12.c9e90c03.js",
    "revision": "b01535a1cb38a3e0c4e02a74476c8269"
  },
  {
    "url": "assets/js/13.26c9aafe.js",
    "revision": "9f9c393763e789fe43a742aff233f841"
  },
  {
    "url": "assets/js/14.405c9bb4.js",
    "revision": "0b466d8be14a034c310a685e37a640f4"
  },
  {
    "url": "assets/js/15.51e6d202.js",
    "revision": "59a6b4b8d947127198da4b014aae1aa0"
  },
  {
    "url": "assets/js/16.8acb4140.js",
    "revision": "9c8a6056c0d9809110f23bc9096baa82"
  },
  {
    "url": "assets/js/17.88d47e1e.js",
    "revision": "89bb5d50acb992cc0bf825ad3353eb56"
  },
  {
    "url": "assets/js/18.456ac713.js",
    "revision": "e37b188db8afc3d9f50e855bcad236ce"
  },
  {
    "url": "assets/js/19.68d50449.js",
    "revision": "b30f233ad7b95a6e3b18d577f429fdac"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.b03c3625.js",
    "revision": "6bd59d5eedec978e11fd97481c0582d2"
  },
  {
    "url": "assets/js/21.9fe38918.js",
    "revision": "a8fdd686e6b757796147c866390b2e89"
  },
  {
    "url": "assets/js/22.68b03b92.js",
    "revision": "5e910f4d1f433431bc711a6dc1cd3651"
  },
  {
    "url": "assets/js/23.f918fd7e.js",
    "revision": "3ee6893e5e07a11ac5a3d1f9f349cc09"
  },
  {
    "url": "assets/js/24.04689a5f.js",
    "revision": "baffe121afe3d7281ec876923ee2de0b"
  },
  {
    "url": "assets/js/25.acb68253.js",
    "revision": "1c34a67b8e9379b001a2a2a42de27b7f"
  },
  {
    "url": "assets/js/26.6aabc13c.js",
    "revision": "ecb17b378d38b8af26b1a1b4bb6c5cbc"
  },
  {
    "url": "assets/js/27.3456d543.js",
    "revision": "4d0f8dea355e8862de71bc75c9daa503"
  },
  {
    "url": "assets/js/28.9ed7c73e.js",
    "revision": "2d788ad6830d95fd1ec95dff8289d23d"
  },
  {
    "url": "assets/js/29.72ea09cd.js",
    "revision": "ac915e3ec30134b4269282517d59ac7e"
  },
  {
    "url": "assets/js/3.115da35b.js",
    "revision": "a6ed8ddc9fca6bd2f35d5c95858098d7"
  },
  {
    "url": "assets/js/30.49a7366a.js",
    "revision": "f490ea5d5ece3524af97fabc32ed7890"
  },
  {
    "url": "assets/js/31.65afac2a.js",
    "revision": "cb81e511473c998dd878cc72934192d1"
  },
  {
    "url": "assets/js/32.0ae9dfac.js",
    "revision": "a09f43908fade1cb4c61a5587125a73a"
  },
  {
    "url": "assets/js/33.b3b4d446.js",
    "revision": "13324680de5d619648e44a68442fd138"
  },
  {
    "url": "assets/js/34.71bc582d.js",
    "revision": "ed1bb0fa7053aa9a8402db2777263942"
  },
  {
    "url": "assets/js/35.8f2ed5d3.js",
    "revision": "503269c9aef211663fea88eb0fcb28e0"
  },
  {
    "url": "assets/js/36.afd52f90.js",
    "revision": "edd8dcbf89626cea912acd7323f0f3e1"
  },
  {
    "url": "assets/js/37.5f1b5326.js",
    "revision": "66dcb3e127db20ae41213c53177db12d"
  },
  {
    "url": "assets/js/38.9d6c76f1.js",
    "revision": "79470e3b734a8bbaa98a25967130cc60"
  },
  {
    "url": "assets/js/39.0aa068d5.js",
    "revision": "ec0b3deb17c17e362dc0c974a93e379e"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.f92fd921.js",
    "revision": "c4d1f20c1758699b9b31f80b6076f4c3"
  },
  {
    "url": "assets/js/41.553fe969.js",
    "revision": "38b19fbe35a2659f5cda583c504753a2"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.28406707.js",
    "revision": "b2ce583ce65000fca0833dc0a9b83f3a"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.259a090f.js",
    "revision": "270ca801577efb3943989e9fe70597b3"
  },
  {
    "url": "assets/js/9.8a11410d.js",
    "revision": "3ae63f425ffcc7845b25c2cfe9e0ce1b"
  },
  {
    "url": "assets/js/app.8570d101.js",
    "revision": "354f437a2cf3f1c20ebe0c0364dec228"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "25130e8b175d614b037ec580a944ffe1"
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
    "revision": "0ddad695a745940f6feecd33b6ee546a"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "e8363aa9b447e66e487683c15df02b33"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "a59c1d5da8af06ae6d7cad071cf3895c"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "b62512a2c50f8048e2cf24df5afafe05"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "cdf44af9f8a237ddac89304f6f0b8b39"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "51147d60c12fcbe897a4b5c42df0de15"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "bec8ae0e8a0a6d5259ed60e9506ea0a1"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "3469b9e031886b9377dbac166135da87"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "003140a0c84da8601e95e0cbaf4c4476"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "e4dd3b94d68e3eaa4bb2603077e6ddbd"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "280ec5495b70732c31821d8acfc66a8a"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "e3a36818b8172d30c8b0bc447b6679ac"
  },
  {
    "url": "guide/index.html",
    "revision": "90b9d52d4e14adeca9e77d95fd4fb8a2"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "ccc1740bdd3abf3e142bc351288b9b22"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "6286329fe0c3e52733797e83eae5583a"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "e5c7ff15db2ee4550ed7df65edc2e0f4"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "cc8598ced107a6156c4e61915a2352a0"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "7d991c86571a9f74c9308c391751aacc"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "04c9a6bd04a201f3f5abaea8a437e2ca"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "62633cd45c9bdeed8e677df2ea39baed"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "e3afed1c43db64e7533759c93614c11d"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "e8bc51de8c5eebb4dc01836b4a5acc28"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "a0c54aee99d9fc5c7a51233da69bc622"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "ae47e696fe91d3838dc3739cc05446d1"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "8751a87147de52c57c1d9111047f2ffe"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4f1bbfd5d8d4d3fd42894f37ee46fd1f"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "c9b2c27c7eb878ec4b394b1e4fbc1cac"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "5639b329a776edc8d3063361f5ba127d"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "da68116959afd8a30e20588703b9db8f"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "131ab011d4ed628c4a2e7185bf208bdf"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "bfa63fe6fc354ad1f3b05dd501cfeeb3"
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
