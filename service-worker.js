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
    "revision": "430be62477f4d72f762ae854b4f4dd30"
  },
  {
    "url": "assets/css/0.styles.64d71016.css",
    "revision": "5ba34cc5b39917b0d93d1aa751ef2d38"
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
    "url": "assets/js/11.044707ab.js",
    "revision": "378ac7323cbfab8c3514be8e9bd5ebc5"
  },
  {
    "url": "assets/js/12.0ff0b593.js",
    "revision": "82bb393d2a64fec6aea746afd7b06e34"
  },
  {
    "url": "assets/js/13.1052c4fc.js",
    "revision": "debde3ed8912b277b378ce9d4ad4d396"
  },
  {
    "url": "assets/js/14.c9a9bb06.js",
    "revision": "5fae462141a035f3b0b27b9dcc49599d"
  },
  {
    "url": "assets/js/15.54b012b3.js",
    "revision": "98b6422e9d2c01241213066fdccf27f3"
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
    "url": "assets/js/9.d443497d.js",
    "revision": "33003076876961237a2110eeb5f85822"
  },
  {
    "url": "assets/js/app.b9556e55.js",
    "revision": "0cd0a5547528a0ca9647027482ac7ef8"
  },
  {
    "url": "faq/index.html",
    "revision": "248f5bad307d220668f5587f7651d0d9"
  },
  {
    "url": "guide/index.html",
    "revision": "623854ef92947b976987966bd2398e6a"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "9fd0fa008b73d722894650da79bd638b"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "bb61159165186c2d68be9715d3f3e026"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "963994689ccd0159cb40f2a42ea06efd"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "ce8c7205cc53e33329005d2d7cee4a7b"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "239c9293a79834b7c11e41d11cd438e3"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "7453e7b8174e89077a19c61542a4c3d2"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "a782937732e209c19e3a2db9d71eb060"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "1b982c1447e1f96b876bb4401b526db1"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "2d169ca8ad8d96fedd4187e5a77bc79e"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "3af3af3b5809e64f9ac92a545c8cf884"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "1a0379862a9566f512fa929386cfa2cb"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "301aba8544b1e0866a9dcde3b01be84e"
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
