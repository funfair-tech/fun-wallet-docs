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
    "revision": "99a5afbb00d4ca664826f53686690c7a"
  },
  {
    "url": "assets/css/0.styles.8202249f.css",
    "revision": "a27cf453117890c0d5c6de7b28a6e7ba"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6f69c669.js",
    "revision": "68900be30b54129a070097ddd220dbe9"
  },
  {
    "url": "assets/js/11.a8aea88f.js",
    "revision": "e1681d9d0905f40e7a6e7adeb5e1ff21"
  },
  {
    "url": "assets/js/12.0ff0b593.js",
    "revision": "82bb393d2a64fec6aea746afd7b06e34"
  },
  {
    "url": "assets/js/13.ba6923fa.js",
    "revision": "1508c19ed0ed176367d7b4c48b63162a"
  },
  {
    "url": "assets/js/14.3ad9a3c0.js",
    "revision": "a86cc89202175a8c665ebc92c5ce9cca"
  },
  {
    "url": "assets/js/15.54b012b3.js",
    "revision": "98b6422e9d2c01241213066fdccf27f3"
  },
  {
    "url": "assets/js/16.a1ae3d8c.js",
    "revision": "a26679681ca19ca85aecc770dd878043"
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
    "url": "assets/js/8.102080d5.js",
    "revision": "a8f24464c69d795f22a3da091b3913b6"
  },
  {
    "url": "assets/js/9.5d513774.js",
    "revision": "775d7f22c81c084ea6cb8e53424d973e"
  },
  {
    "url": "assets/js/app.7bc907f1.js",
    "revision": "4740e16eb93f6b985bbbdba6fcb3b4be"
  },
  {
    "url": "faq/index.html",
    "revision": "1e85f92691742181929e8d23a20746f1"
  },
  {
    "url": "guide/index.html",
    "revision": "7f9552ee9f14438f7de26579e85bc0e5"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "3ff6618d31b5ea7689949445c5f9ed21"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "4f5b7f989218892826f43edab8532f11"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "76770e63bebde6160c6ffaa06bf0ee9e"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "e13627ade4eb888d32488167e185824e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "ffd941727e199dc08c4d22dc844e774b"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "00990e6f4d5930d02324bd685c3c9be3"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "6fa32272bf09acd8560295e4875190f1"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "f46f1a793e8a166fc58c3fae3c7da24c"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "64829af7e8585aaea70b3b809b1940db"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "55509181d42c0d80775af9f3e39efb5a"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "d37d047101239399885907eb62869881"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "d6bfd89fdd97808864c46ffdb4b1bc8d"
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
