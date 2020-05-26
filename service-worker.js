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
    "revision": "ef9147c585054c784f20abd4ec82241c"
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
    "url": "assets/js/10.81e3c6ba.js",
    "revision": "abbf2bd19e63459a82d0c09c44e70530"
  },
  {
    "url": "assets/js/11.417648c6.js",
    "revision": "954fac1e5661a8deb40eef252c5fe16d"
  },
  {
    "url": "assets/js/12.c8f75d4b.js",
    "revision": "64f1292942172f4eb3389c9763f31582"
  },
  {
    "url": "assets/js/13.ba6923fa.js",
    "revision": "1508c19ed0ed176367d7b4c48b63162a"
  },
  {
    "url": "assets/js/14.e0db5057.js",
    "revision": "d4b1821526b3e87ebb62b2c52be3c71b"
  },
  {
    "url": "assets/js/15.5d1f879a.js",
    "revision": "1521fc99a9e424f2526819d70982423f"
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
    "url": "assets/js/20.ce775525.js",
    "revision": "6221e02d9ae329704e4f3e31bd734d59"
  },
  {
    "url": "assets/js/21.c311b579.js",
    "revision": "d355d7fcd85edd2fbcf6e145a77e658b"
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
    "url": "assets/js/9.d443497d.js",
    "revision": "33003076876961237a2110eeb5f85822"
  },
  {
    "url": "assets/js/app.8307bdc3.js",
    "revision": "fcec07cb03438c1c3425b20556dc9888"
  },
  {
    "url": "faq/index.html",
    "revision": "ae0f97dc7474261e323ba022be63af5e"
  },
  {
    "url": "guide/index.html",
    "revision": "f192ba3a6b52db3c4e901f467e4ae2f7"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "5b2ceae7a5d968866f081bf1749f0a28"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "71de4836e3736d1009860827a71dfee6"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "a3f3e6bc6dd4429a9f34cf121717ad38"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "8f88055a7482abcb620214acd1364279"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4ce6d19fb2d76bf4c92a3d541c73b6c3"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "b1df787bdde7cd5444b6f7d5eeadeefb"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "7a15337311cb61d4f546c40055871e53"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "b0d38ebdecd5a3660207d437d333ba6e"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "2217ccd0b99fa5afa513461306dd8093"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "49bd63bcddd7ad7863131d8b5788f847"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "12da1d1a2b069b9ea1050f2423031591"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "4ab74fb0d308e7b7f06bc9e0c9ef46da"
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
