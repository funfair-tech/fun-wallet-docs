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
    "revision": "112b6fd287cacf083d2d9d5e4450dd06"
  },
  {
    "url": "assets/css/0.styles.698cab01.css",
    "revision": "cabb7307b3e9fd46d26829046be1b6bb"
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
    "url": "assets/js/12.492ccdbc.js",
    "revision": "9b655d6f3e803974bbb81a40e7ebfc4e"
  },
  {
    "url": "assets/js/13.8b4dd6a4.js",
    "revision": "07b601b03c90acdb843e41a117c433c8"
  },
  {
    "url": "assets/js/14.38ef7b3b.js",
    "revision": "b326ad20fa6d763630fb1f1752a00107"
  },
  {
    "url": "assets/js/15.f0edb06a.js",
    "revision": "c7f9c6ab3e143c0b4f7edb387bfb2a9b"
  },
  {
    "url": "assets/js/16.1413e8b8.js",
    "revision": "51c94239c81ba301634fa53fab4ff171"
  },
  {
    "url": "assets/js/17.164e7cac.js",
    "revision": "2ba61386f86ed492e2e20c55452ed994"
  },
  {
    "url": "assets/js/18.12e1586d.js",
    "revision": "ae1a540b4a2cba01c6be53d1ed184aee"
  },
  {
    "url": "assets/js/19.56fdb952.js",
    "revision": "c118b4d14b37edfb8e6087e077c8fb8f"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.96ab54a0.js",
    "revision": "c26fd39d003f328c5460baf5aa678eb0"
  },
  {
    "url": "assets/js/21.095f1c70.js",
    "revision": "ce4182803933aa13fbc7eb53977205d8"
  },
  {
    "url": "assets/js/22.d2fd5553.js",
    "revision": "3814aad96438b7d1c54566ccddfa6fd8"
  },
  {
    "url": "assets/js/23.b1c0d249.js",
    "revision": "04e14c9412f167fcefb9c5346dde137d"
  },
  {
    "url": "assets/js/24.57950520.js",
    "revision": "952efb14be0df86665517ec1ec18a028"
  },
  {
    "url": "assets/js/25.35607ad7.js",
    "revision": "346e4be0d971500e1dfb4f3e8acb2bb1"
  },
  {
    "url": "assets/js/26.52665155.js",
    "revision": "effebd8816f79e7d9abc6cc65ccf0459"
  },
  {
    "url": "assets/js/27.dda7a29a.js",
    "revision": "bc0d744385d10597e2c554f3aacbaa86"
  },
  {
    "url": "assets/js/28.f50c88ff.js",
    "revision": "aba6035a2807cc17b09050e9dedf370b"
  },
  {
    "url": "assets/js/29.8d0c39ef.js",
    "revision": "bf6ac334c9c82d78b8c39aa07fa02626"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.94803a2f.js",
    "revision": "2d42b035e2c627af7bca34da4b29798f"
  },
  {
    "url": "assets/js/31.ce0c592b.js",
    "revision": "3b38d3e75304ea46883fef666f294930"
  },
  {
    "url": "assets/js/32.aae0b4a7.js",
    "revision": "f0c2fb90287832909085f6157b531646"
  },
  {
    "url": "assets/js/33.ab675b19.js",
    "revision": "dbcb7d5d195aee35b8eab4858d96f685"
  },
  {
    "url": "assets/js/34.8a44dfad.js",
    "revision": "24b47536098484dfb3681f6f44abd70d"
  },
  {
    "url": "assets/js/35.143e4411.js",
    "revision": "6e800cf94cde9500fdb606bb81b35423"
  },
  {
    "url": "assets/js/36.007e0aee.js",
    "revision": "1ccbc7cc2c397faa4e117e03503f1ce6"
  },
  {
    "url": "assets/js/37.bb149d0d.js",
    "revision": "edefd9a8e07402fda5062aee0a926d03"
  },
  {
    "url": "assets/js/38.22fcfd09.js",
    "revision": "d3b63277fc446129262b3b170844afca"
  },
  {
    "url": "assets/js/39.ec078c24.js",
    "revision": "d888df3942c0ae25d724c38c9f66c3ff"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.3b224cda.js",
    "revision": "713a80d95dcd92638f780ab65d791966"
  },
  {
    "url": "assets/js/41.f71b7a2b.js",
    "revision": "0fdd317dd5c5d216caccbcb74b96ba7d"
  },
  {
    "url": "assets/js/42.bf8c9392.js",
    "revision": "cab162ea664a6a1c5f428cc6b17f37eb"
  },
  {
    "url": "assets/js/43.98a998fe.js",
    "revision": "242a84245b568f30a9f8f7ffc9d095a2"
  },
  {
    "url": "assets/js/44.b88f6b77.js",
    "revision": "3bd657753e58b5d8df1ad651cd029796"
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
    "url": "assets/js/9.88720105.js",
    "revision": "bc7146905dfdf92863bd7044cf4b40b3"
  },
  {
    "url": "assets/js/app.70be46a0.js",
    "revision": "a5058ba42cebc033677e5967e2bff8b5"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "22c789b6da8bd1d80e8e01113d3402e4"
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
    "revision": "036f1fa34af3aecd559a462eeaa132c7"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "a41cfb557a4d5861051630c0d1b21053"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "86674266bdd889e9cc2444166ad7a0ea"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "e0336565f46f4310e1e02d913be98329"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "518a42a4f7e9b8faa72f18bb680267d7"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "9eeb2936f55ce2eb050e098dccab8dcd"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "7474c2fe681a6217484149759fee7214"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "662fd2df82abd6a0aae6010b8b7ef4eb"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "25f3872bfc97b1f1912fa8a221962d94"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "26b172cdb280af128ab6de85e58df0b3"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "593b4d37ea54a0d739f7e59e44b78d30"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "7810c896ad2ee178891e699eb41b999a"
  },
  {
    "url": "guide/index.html",
    "revision": "5daf78d5561ba06e1b4044de3c5d0022"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "a6fb761af7f1b301e3da9ce446f6230e"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "a7c704d6872fa1f5abfeac42f8e96c5b"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "2b84e81e0ecf373dbcfe1fdd117783ad"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "6b4c11b0f1e2a81f517615a11524e559"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "2f4f015f31ace6a79267129d229f8f85"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "8a09f4b903857a7432c02d981870ef4f"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "74e4038b9443dd018bfd953184e7a4ae"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "5041f65edb165df051b26a20db574e77"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "119f381ec3ba8ac01a85eb6bfa8da000"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "a5cd036eb5af747afb598cc1a8311aa5"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "05b392bc0f2a9c90ae9146d3c3ec0bd5"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "e46d4abaebb1c1d49aec084745319952"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "bffa2099f12bf62beaa861c66dfaacd5"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "ea813b0db766e695ef922785c39a6b8e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "7723df036e0c0d87edf05a22ba82d13d"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "905ad593b4c1f8be57edb41da9c1cc69"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "97326810e91dd484feb901673b3aa92b"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "59636f3acd00e0160d04689b206b3688"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "7b6b086e47b0cf3c723494c9ce669474"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "12bc7d3bb2ba6812dcd4bf6b3a320780"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "2f1c064b57fae418aaf9ddfcb53398ba"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "1fad72c4f80421bca76d7ce4a20b4208"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "10df9071b4142106fdce7c70ed61355f"
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
