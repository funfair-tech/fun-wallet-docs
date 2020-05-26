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
    "revision": "7a6e812956c58ef0462714f7760c4853"
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
    "url": "assets/js/10.deb79f23.js",
    "revision": "6b3249675f14b649da8ce27fcaee27ba"
  },
  {
    "url": "assets/js/11.c07b3369.js",
    "revision": "34308473a1935bf3e7c6a0c7c8680b63"
  },
  {
    "url": "assets/js/12.c8f75d4b.js",
    "revision": "64f1292942172f4eb3389c9763f31582"
  },
  {
    "url": "assets/js/13.4cc4c211.js",
    "revision": "3336b27e4be60a33a60b8aa878657836"
  },
  {
    "url": "assets/js/14.e0db5057.js",
    "revision": "d4b1821526b3e87ebb62b2c52be3c71b"
  },
  {
    "url": "assets/js/15.e477ccea.js",
    "revision": "f6511db2d416c2be2e2071702640d6d4"
  },
  {
    "url": "assets/js/16.0a60ac1e.js",
    "revision": "4da045f8d90762c347cd1429016cd686"
  },
  {
    "url": "assets/js/17.cd299afc.js",
    "revision": "53809749b180cdb7f64541b38c4dd362"
  },
  {
    "url": "assets/js/18.362a932c.js",
    "revision": "8f9b2d677a0076ed03e3381f297b03a1"
  },
  {
    "url": "assets/js/19.7a32c01b.js",
    "revision": "2b8a8c4ea6d94420379e032cce377765"
  },
  {
    "url": "assets/js/2.df3542b2.js",
    "revision": "daa3d4cf0ef778c12188668bb6a12d62"
  },
  {
    "url": "assets/js/20.28c3bbd2.js",
    "revision": "983e521391813c4273038958f325b4fd"
  },
  {
    "url": "assets/js/21.7c7cb977.js",
    "revision": "f93c5df6d787ef33f379c92d0f1c9f81"
  },
  {
    "url": "assets/js/22.8a9b0de5.js",
    "revision": "f39c42062689f56b9ea820f6a3ba1beb"
  },
  {
    "url": "assets/js/23.8147783c.js",
    "revision": "49398eed118fde96ba7086e91321946a"
  },
  {
    "url": "assets/js/3.0c702ba4.js",
    "revision": "be66f6a05204afa0f51de08ff7ffea47"
  },
  {
    "url": "assets/js/4.df916398.js",
    "revision": "67e8f61a129261ce50cd7be631eaeaca"
  },
  {
    "url": "assets/js/5.4c5a6809.js",
    "revision": "2c47aa486952c3b15182859a6719cc0a"
  },
  {
    "url": "assets/js/6.77c69655.js",
    "revision": "8367117b6e1551187e03b00730ae3718"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.aa2e6563.js",
    "revision": "ea2d6ef393580b1cf4c1532d856a431b"
  },
  {
    "url": "assets/js/9.7bac6ea9.js",
    "revision": "a7481efb2272bde2584192d1e7cc7008"
  },
  {
    "url": "assets/js/app.e23beb8e.js",
    "revision": "34ebc8ccc873e7ae7ff1e593d114a87e"
  },
  {
    "url": "faq/index.html",
    "revision": "fa02dab5a1493df9265eb27ee85cbdd3"
  },
  {
    "url": "guide/index.html",
    "revision": "4175bf6ba0becb8354e5390f84ae827d"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "cf3b99e0714c4502abf366f084e63803"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "459acdc44b299817a82261f204f753f6"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "951de7f2d3e3e9750d16cef89b1d0e03"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "9b89446786d78d48e2fa827d78ec5524"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "27c0c0a850ea8fab5a2d598b2efb8e7c"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "78352ebafe106b9cb11dc349f653f871"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "e4744787d026f48992fffa97cd8c1ed7"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "1fcc7e7fb95c76206b790956aae7e476"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "bbcbb0a410c999627067b2169ff184be"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "857f577741d521a5fd4abb9e3998f0a0"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "d9e1125333f93b157985097418948af7"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "a63364ef54f284bb448750b962d3fba5"
  },
  {
    "url": "leader-follower-authentication-flow.png",
    "revision": "3305e47990038d576b3940105a60c47e"
  },
  {
    "url": "logo.svg",
    "revision": "02850c4cabcbbe69b13b1281d108b5dd"
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
