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
    "revision": "393aedde4d820133f0bbb26d156f31e0"
  },
  {
    "url": "assets/css/0.styles.0e0696de.css",
    "revision": "924a6a0d1968232fe163e16a000daa2f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0124df39.js",
    "revision": "eb8b6b0119233a3f4e474acc6fdfc9a3"
  },
  {
    "url": "assets/js/11.417648c6.js",
    "revision": "954fac1e5661a8deb40eef252c5fe16d"
  },
  {
    "url": "assets/js/12.9ffe2c8d.js",
    "revision": "7cd1e7aa7cf1f85500c31d4fc040b0f8"
  },
  {
    "url": "assets/js/13.34acc030.js",
    "revision": "c1785cd66727bb1cb9b4223d4a5dd089"
  },
  {
    "url": "assets/js/14.e0db5057.js",
    "revision": "d4b1821526b3e87ebb62b2c52be3c71b"
  },
  {
    "url": "assets/js/15.f4e1f46b.js",
    "revision": "932d756034f093fe257d5c211f7957ea"
  },
  {
    "url": "assets/js/16.0a60ac1e.js",
    "revision": "4da045f8d90762c347cd1429016cd686"
  },
  {
    "url": "assets/js/17.07dbe46f.js",
    "revision": "2701cb0934ea254db5a46defdff8510d"
  },
  {
    "url": "assets/js/18.74df310e.js",
    "revision": "55303877647a95c2977c1ddf3c366507"
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
    "url": "assets/js/3.051191ab.js",
    "revision": "56e46e96ca52e45d1b71fa0b2589aa88"
  },
  {
    "url": "assets/js/4.cfd585d0.js",
    "revision": "e3ddbe0dde23792b6ae4b1071555ca0b"
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
    "url": "assets/js/app.58f7b95e.js",
    "revision": "0c7837725c4c359dffc1e4ba0e8d0fc8"
  },
  {
    "url": "faq/index.html",
    "revision": "63b5ac57e6e0f335c0dbd156ccdf1056"
  },
  {
    "url": "guide/index.html",
    "revision": "e6c7aeed211cb025d1d21ac51efa90ad"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "0c84764a7936bfa7a6d894f152ca7b44"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "15624ad0bde12728b19d709da42db52d"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "045e5776168ba483fc9d55640262cb82"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "ffc7a3013220ec199612e7c76ac60d6a"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "d088b1b8ae1949d1483eb6efa5ad67ec"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "86a520babd21dd25d95fb7028eb1b05d"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "72c4128a6fbe36a89aa42c9b93918f8b"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "63136027167ef6cb7d3ec8472a27196f"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "5cf3d9b62f9aea5e07e4f3b040012c90"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "8940ce4c2ae3b8fa734640bb6dce7b90"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "6aff53c18a7a601f4829d0b37ae62a3b"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "d7b1f29664f4a31c86c46e715acc7824"
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
