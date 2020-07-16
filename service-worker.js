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
    "revision": "d4b37f1b65d21afe653fddf69c3ee9c2"
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
    "url": "assets/js/10.09cc6756.js",
    "revision": "bc2d34edac46e6412c628cb9503e275d"
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
    "url": "assets/js/13.7c7207ab.js",
    "revision": "f10bd272d6712f9c1448646d75c5c833"
  },
  {
    "url": "assets/js/14.d348ae01.js",
    "revision": "45d981d0d83a7553cb63fd68f3df865b"
  },
  {
    "url": "assets/js/15.1be9aba1.js",
    "revision": "9ee7927e32b0196f745b243281cff79d"
  },
  {
    "url": "assets/js/16.2a85eb2c.js",
    "revision": "d2229e1466f43f029a4c1b163f5926ba"
  },
  {
    "url": "assets/js/17.607835a5.js",
    "revision": "e9b85b42672279bceed54ffc48719acb"
  },
  {
    "url": "assets/js/18.eb929403.js",
    "revision": "d02de19b68bed0704ff10611d2ff73c9"
  },
  {
    "url": "assets/js/19.3eae78b4.js",
    "revision": "6415429defdd06957adec0c386986778"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.8abf15b0.js",
    "revision": "73061d3fc85b9cde669cee265c599d74"
  },
  {
    "url": "assets/js/21.eea2c3ef.js",
    "revision": "1f1c1ee28fd5fdefaef1895b9e28d7ae"
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
    "url": "assets/js/25.767178e2.js",
    "revision": "b7c8569ba590b38c81dd111511dcb684"
  },
  {
    "url": "assets/js/26.988e7d1b.js",
    "revision": "b49f677e0022360b5b509f353f08a17b"
  },
  {
    "url": "assets/js/27.8243fb9b.js",
    "revision": "24281194791d2368b4812ae1d306c86a"
  },
  {
    "url": "assets/js/28.9c685a55.js",
    "revision": "415e72417460e4b8da0391a87a603bb2"
  },
  {
    "url": "assets/js/29.a83728fd.js",
    "revision": "c12d25f824cd481c2f93bb222ee18131"
  },
  {
    "url": "assets/js/3.93480ce7.js",
    "revision": "f8c07b059c764c8cd2e867e6a7cb848e"
  },
  {
    "url": "assets/js/30.9aab8618.js",
    "revision": "79dba99b872ca5c4428e3891615720d2"
  },
  {
    "url": "assets/js/31.fd10623f.js",
    "revision": "4f9adf9087e2484d861e2e09460d594b"
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
    "url": "assets/js/34.362a201d.js",
    "revision": "652f9ff964a08322e62324e3a8243c8b"
  },
  {
    "url": "assets/js/35.df950756.js",
    "revision": "cff5a51c4806b0ecfa4c24f52a7e7657"
  },
  {
    "url": "assets/js/36.46ec7c3e.js",
    "revision": "9f8e771c17fbbe5a9dae5f13fde9df38"
  },
  {
    "url": "assets/js/37.f61c8882.js",
    "revision": "d0f6c4b65e960fd618812e98febb9a6b"
  },
  {
    "url": "assets/js/38.6882d530.js",
    "revision": "134183f8ee1df8db74186ed13c787dbf"
  },
  {
    "url": "assets/js/39.216b17f9.js",
    "revision": "2d47a9d683d7626864120875d7094f11"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.881bd605.js",
    "revision": "1129b43fae01d72a501c4ddb391148a0"
  },
  {
    "url": "assets/js/41.1e5fcdda.js",
    "revision": "a0412a227822c3f170d6057b215715ab"
  },
  {
    "url": "assets/js/42.5d6a3652.js",
    "revision": "0043c3bac51442a3dad1b4756670dc58"
  },
  {
    "url": "assets/js/43.1f4314ef.js",
    "revision": "cf727ffe3fe603ce1ee16e4423608474"
  },
  {
    "url": "assets/js/44.03d2f4b5.js",
    "revision": "99ebfdaec914ce50e8761332a2617a73"
  },
  {
    "url": "assets/js/45.aca79237.js",
    "revision": "e6f643cfd8589806294b08a74c876f5d"
  },
  {
    "url": "assets/js/46.6ea406df.js",
    "revision": "82852bb05c96264d7ede81208b3fac01"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.fddb07c3.js",
    "revision": "521337d863baf3ac4c7065babdcc983b"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.472fca48.js",
    "revision": "c34263606008a62aac1f40bbfce82da6"
  },
  {
    "url": "assets/js/9.199cbcee.js",
    "revision": "f532bec1355eca7445863c273826d130"
  },
  {
    "url": "assets/js/app.ea2168f6.js",
    "revision": "d20519fad9f046694eae5a0a531ea8b1"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "c0f03fe6b20115f8f4af697be33087f2"
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
    "revision": "178d089fbccab3074edca67d8366c314"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "c7c0fb0a92aa0098fef870926a1ae1e7"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "316c7f85e1706024ad7903bee5effa56"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "e725fd01e2f43e026c4c2582ac12cb22"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "9dc2dd1890722ea4a25f688df6245213"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "33f5700be811ff87be0f84d97d9263a1"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "5930cb53d6b68096b92fc85977255c0a"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "eda48e05d0740a70a1f6f630447803e2"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "2eceebbb86bd5dae9705e6f0e7ac0e89"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "c2a2a62b232337f25dc1121a24035d2b"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "f41d619a2c785585bb6962b50da53e77"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "eb1ecc23183753923a5847c3d368babb"
  },
  {
    "url": "guide/index.html",
    "revision": "1873c44947429086215e794173c67254"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "7c7d07c5c41962f1760ca08a3bed7c43"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "db187e035846d0ed91d2ada9b2167f08"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "4dd955adda726c8d5d5ec888a3edc272"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "7d7fe609eda01713ac126f9e03c84206"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "96bf0a74745f42e4fd6ee3b702cb45b6"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "3a4ac06c9a7b33cae7a00a5f90f98140"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "96ef6cf129abfa84e532860dbc5dd609"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "49dc6c104e4ba800e3df205a9342134f"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "a99b5b6dea34273408a28a3904ad7bd3"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "cb83a0e0a689c5ec6e917ea753c43748"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "6823517f92840aba9638a63421ea9f5f"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "46b9d957ebd58819352ba7228a055f89"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "6aa11008e027fc1da000d120b4e729fc"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "4adbcaabf8d80d066036ce4f0bfb4e8e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "fcf8590c15def987ef719b2e14759e73"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "d1fe7be38ce574b985285ecb09fb83cb"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "2454edd0b3caa720d95f39df232be18a"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "0867f38a23d331608219feb11554f90e"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "b7bcc68b8d098dee201625f0873762f9"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "11b821b2653ddae8bd3904dcbe4ca309"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "71b9de28513e67152f4082844b51bd1f"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "26a4b7d1960a2ec96e1d0caebdad6c11"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "681f43999c7f4360c80a6577c3e1ea5b"
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
