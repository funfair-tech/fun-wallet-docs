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
    "revision": "4c7cab04525e74264a02dbb8b08924e2"
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
    "url": "assets/js/10.0a142308.js",
    "revision": "f463547364a554db646de5427da568e8"
  },
  {
    "url": "assets/js/11.044707ab.js",
    "revision": "378ac7323cbfab8c3514be8e9bd5ebc5"
  },
  {
    "url": "assets/js/12.fe94ee76.js",
    "revision": "9e0acc7b8b8b48e0a187707ef8dbf5fd"
  },
  {
    "url": "assets/js/13.34acc030.js",
    "revision": "c1785cd66727bb1cb9b4223d4a5dd089"
  },
  {
    "url": "assets/js/14.0dedd9a7.js",
    "revision": "1091f628c35033bf608cc1d888c56fe0"
  },
  {
    "url": "assets/js/15.4005cf90.js",
    "revision": "d5bc3aa74fc97ef7a674f7b7ee5e9f8c"
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
    "url": "assets/js/9.8f1211be.js",
    "revision": "9274cdcb6a60b5664781c501c4653245"
  },
  {
    "url": "assets/js/app.1aefd7bb.js",
    "revision": "31cecf5168020dceb7d7354c7df7d538"
  },
  {
    "url": "faq/index.html",
    "revision": "5208895db0489cfa8ec172996d031990"
  },
  {
    "url": "guide/index.html",
    "revision": "8f5b01644c342516ecf9ce5a3f6201d6"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "5f5e1e3a7b0dcd1e5d5444b918337a94"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "70d56d84df5942ca7d2ffad1a4e991d1"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "88ce8da6d0ad89c9b901487bc15aefea"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "9b2889a89941039895aa559d322e491e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "351c27dc0d839577a50ddfff410017ae"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "6ac7b2af7f39f781114a6145179f5bd3"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "80f5fa2774382c7bfd2e5ba9f3bd9117"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "46fc78257f58f14c953837b2ccf67b7c"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "fe102a44258160e4704711d84acd8af7"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "04d491b3b38313ea591971878f78021c"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "8da7a3446400e8efdbca0b6c7c2ca346"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "277f436b92384400b734d63fef815969"
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
