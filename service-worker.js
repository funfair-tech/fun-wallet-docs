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
    "revision": "f0a144feb78b92219a92e47ac9443a20"
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
    "url": "assets/js/10.0a142308.js",
    "revision": "f463547364a554db646de5427da568e8"
  },
  {
    "url": "assets/js/11.1d506141.js",
    "revision": "32afbf4de31b99194a49faf0c1e538ec"
  },
  {
    "url": "assets/js/12.9ffe2c8d.js",
    "revision": "7cd1e7aa7cf1f85500c31d4fc040b0f8"
  },
  {
    "url": "assets/js/13.39f3c1a9.js",
    "revision": "06b6de0d872ed6fe639058bfa6c4b603"
  },
  {
    "url": "assets/js/14.c9a9bb06.js",
    "revision": "5fae462141a035f3b0b27b9dcc49599d"
  },
  {
    "url": "assets/js/15.9cb3daab.js",
    "revision": "9433d23b9ec724d20dd9623196fb856e"
  },
  {
    "url": "assets/js/16.38025f3c.js",
    "revision": "57437a6e6c3b8a7df3213f58533aa8b5"
  },
  {
    "url": "assets/js/17.07dbe46f.js",
    "revision": "2701cb0934ea254db5a46defdff8510d"
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
    "url": "assets/js/20.99b6f13c.js",
    "revision": "e51f53df4e04f7914b7a91495128bcc9"
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
    "url": "assets/js/8.102080d5.js",
    "revision": "a8f24464c69d795f22a3da091b3913b6"
  },
  {
    "url": "assets/js/9.5d513774.js",
    "revision": "775d7f22c81c084ea6cb8e53424d973e"
  },
  {
    "url": "assets/js/app.64f310d3.js",
    "revision": "f5ef2e601f537ac21764b115a00e1355"
  },
  {
    "url": "faq/index.html",
    "revision": "547e4d3191d6b4432cdb634d8e0702cb"
  },
  {
    "url": "guide/index.html",
    "revision": "2bbdd031654f3fa8598f1edfcaae56c2"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "4ee0caa26652e6d771a07f087834be6c"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "6e41e50762054f040135bf6c7f2b81a8"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "6389bc1fcb481abdd64c41bb824901d5"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "412f365a4ea3373cae19d487f596249d"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "3c0e0f5e9f8370dcc233e0cac34d9852"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "01353d6d37f673da629558a5f76a6ddb"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "3f7c67b33bde2c7751f572ba8ce7d68f"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "279955be7174140d2e863c64f2352043"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "8446944ab182ade73548fc4a457e4ef9"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "1e71c12c8cb71b18799414b6346b88fe"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "85650190b9cffcc329a05134b183335a"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "ae620eee64e9556f541f4bcb8e0cdab4"
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
