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
    "revision": "b0db0054739e05311372eb16402b1f34"
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
    "url": "assets/js/10.e75916dd.js",
    "revision": "ef0d9ce59ebbb9588c15957a8381d5ea"
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
    "url": "assets/js/13.39f3c1a9.js",
    "revision": "06b6de0d872ed6fe639058bfa6c4b603"
  },
  {
    "url": "assets/js/14.e0db5057.js",
    "revision": "d4b1821526b3e87ebb62b2c52be3c71b"
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
    "url": "assets/js/8.aa2e6563.js",
    "revision": "ea2d6ef393580b1cf4c1532d856a431b"
  },
  {
    "url": "assets/js/9.bcf3c8ca.js",
    "revision": "05555340f200b54c03400d395a0f4433"
  },
  {
    "url": "assets/js/app.577db941.js",
    "revision": "db9b26ff6acd5a62021bc9ba596b603f"
  },
  {
    "url": "faq/index.html",
    "revision": "bcdbeacab8164656ba1f90338cb43736"
  },
  {
    "url": "guide/index.html",
    "revision": "15fa4c6e4309c7608e702092ecd35c72"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "7fc41cf9996fae7c349662b9bdb5d240"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "440e4f83de84b668d338090db5abdbe6"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "b69229906165e43476257973df0cf3cf"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "a94b83a611bcb6989a4277b57a8e790c"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "81ea1e32a18f235ceefd5e27f1e678c4"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "72e10067f42e5e36e2a021acadbc6a96"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "a5c94b75c4d7b48c89ee64ec0182b092"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "0d9b8034f8d8a9cc8df7ad7ce55ed125"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "d6bae9c0576adda5debeb45f787cc21a"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "3a0fe55cf6359adf46f7786d8bef0ceb"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "f846e7740a875f22c1b856496d63586d"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "488ffe86ec9d5504a781a2ce829ca010"
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
