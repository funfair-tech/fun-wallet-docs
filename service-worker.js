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
    "revision": "63dc43f37b0db1bb32bfd111afc431da"
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
    "url": "assets/js/10.4625b6fb.js",
    "revision": "c3b0d90ed317adc82ba83dbc51f56230"
  },
  {
    "url": "assets/js/11.25b57ef7.js",
    "revision": "e1c0faff8678f9148a93ebdf3d749a0a"
  },
  {
    "url": "assets/js/12.9748e9e8.js",
    "revision": "3de7a510237c374d812aca82e27b1a3a"
  },
  {
    "url": "assets/js/13.00eaea31.js",
    "revision": "1c6a0522a242b2c21062b92f3155b58f"
  },
  {
    "url": "assets/js/14.38ef7b3b.js",
    "revision": "b326ad20fa6d763630fb1f1752a00107"
  },
  {
    "url": "assets/js/15.7c199fd9.js",
    "revision": "19b7bfbc9fce35dc303da09cd177470e"
  },
  {
    "url": "assets/js/16.1413e8b8.js",
    "revision": "51c94239c81ba301634fa53fab4ff171"
  },
  {
    "url": "assets/js/17.acc0fbd4.js",
    "revision": "34dafbfac90985b771c8eaa4d108b2ed"
  },
  {
    "url": "assets/js/18.47cf1018.js",
    "revision": "d7ca678d72f691d9bf7ad53edcbc2a04"
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
    "url": "assets/js/20.5f9b62dd.js",
    "revision": "d8b0311f6c7097e2449ed8840ea9cd38"
  },
  {
    "url": "assets/js/21.efcb38ba.js",
    "revision": "35821075964e6e8b1a4aeee33b8e5255"
  },
  {
    "url": "assets/js/22.d2fd5553.js",
    "revision": "3814aad96438b7d1c54566ccddfa6fd8"
  },
  {
    "url": "assets/js/23.cf663bf7.js",
    "revision": "c390541e81f514a8d2d7ddd3ad974460"
  },
  {
    "url": "assets/js/24.2988a151.js",
    "revision": "ecacbd06e8167aef53d49704cd9a418e"
  },
  {
    "url": "assets/js/25.6e08792c.js",
    "revision": "57d31ca80e7e30c9093e9d0a6d5f6185"
  },
  {
    "url": "assets/js/26.577900f1.js",
    "revision": "d5d86b11a67185ff838ce66fcb53134f"
  },
  {
    "url": "assets/js/27.b99f07bc.js",
    "revision": "73a0c96cd05bc1c5dc8e47abd60a1580"
  },
  {
    "url": "assets/js/28.1e4ca1f5.js",
    "revision": "90f1e54a4013d92947c6207d539138d4"
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
    "url": "assets/js/30.67157ff2.js",
    "revision": "f803dc010be082c621ab817a9d59718f"
  },
  {
    "url": "assets/js/31.7121509e.js",
    "revision": "b03225993e4c4d2aa91ab3f2f53a5f6b"
  },
  {
    "url": "assets/js/32.aae0b4a7.js",
    "revision": "f0c2fb90287832909085f6157b531646"
  },
  {
    "url": "assets/js/33.6580da89.js",
    "revision": "5209c92dbbd0f63cacd78963ee7e501a"
  },
  {
    "url": "assets/js/34.69b3eabe.js",
    "revision": "432a2086e6f63f7efa1a0f71d6d0ded4"
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
    "url": "assets/js/39.ec078c24.js",
    "revision": "d888df3942c0ae25d724c38c9f66c3ff"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.c4220f8a.js",
    "revision": "432e02185b12b3ba2332346b37ffecff"
  },
  {
    "url": "assets/js/41.745bb636.js",
    "revision": "096e81e88a98567766dc875bcea3d554"
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
    "url": "assets/js/44.24b7a348.js",
    "revision": "377a58ddddcbedbd2a839c5ebb6da5f9"
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
    "url": "assets/js/9.6b651dbc.js",
    "revision": "6a629cd566d21aeab07faccb5e0a45af"
  },
  {
    "url": "assets/js/app.7ff390a0.js",
    "revision": "7754b6cf834f082226f0d32937bb30e7"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "7bac164196e36340d316b34306d4dba6"
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
    "revision": "c823153939fa00478c39c671b1393a8d"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "7fcf4aa916550413adf36c26d452cf44"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "7b0a334a9f845b766ed1016b1d43c686"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "a82c799eb227f07ffeb6d51d3462657b"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "d2ec0a76b9fd20b67b9fdc1c5d6217fe"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "c3a9654d6d431b06726f232dc8296b70"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "3c0f8f98ef60ce03d395e9102376aa10"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "5ed67194a86f30828ebfddab6ab74226"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "90d7c1c8dcb52e5bca2a1d4cb02d7570"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "8d8912835708ce3c96839f3f035bf37e"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "437b70703d7edf3f541adfbbe71dc575"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "22fae8d4d2a59605fc99b7a89f946b78"
  },
  {
    "url": "guide/index.html",
    "revision": "4b6c857de0b3a55b45d0d53a2d49b92a"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "564f760d106e10ea087a9690eea09e0f"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "81c709287fe157327b825e6475fdd5d1"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "bde5fb58a4782b3601e919b366144fd9"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "b681d5b16775912f4d6439ce69c9bec3"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "8a1b78ed9b99bfa10c96fff52d06e3a6"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "c72eabd8787b91f1da2871ee0b780b41"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "067b24baded95d3d155785c164c5a92a"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "059276a69c1766ebe45204384283bb80"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "805b2be42c35b8a4c469a8a545eeeedf"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "6d15f4b6a0205d63e3ac8d0cffafe691"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "1dfb84ac42a362b38d864b6923d9cdb3"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "31db7427be7bb1c62e467e61a708eb56"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "e783bd0ed08490d56fcb77a493535af0"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "bba464860cc66c06d9d971620771e082"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "37f7d98f84f56f70329b3bcc0d85015b"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "29d0dc6601a892b54275f558aa299082"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "971b7b4ebca180c799a7c756f227dcbe"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "33e3d2d51955eee7a6ae2f3980c13500"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "20ff920ef5053ee5455f4c65dd6c993c"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "877aef52dfeb6895f2fcdb85f406b0fa"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "36520ff563690f562c4c7103dfda42e4"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "38001011a7d13639e7144a79aae3f3bc"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "0a1c0cc15fd7d4aba6daec2f26b97d8c"
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
