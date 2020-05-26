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
    "revision": "b8530edb11af5771dd1c0a1dd1f70d8d"
  },
  {
    "url": "assets/css/0.styles.d1a83009.css",
    "revision": "e512e0bc4d2e13041bdbfaa151b8edcf"
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
    "url": "assets/js/12.c8f75d4b.js",
    "revision": "64f1292942172f4eb3389c9763f31582"
  },
  {
    "url": "assets/js/13.1052c4fc.js",
    "revision": "debde3ed8912b277b378ce9d4ad4d396"
  },
  {
    "url": "assets/js/14.3ad9a3c0.js",
    "revision": "a86cc89202175a8c665ebc92c5ce9cca"
  },
  {
    "url": "assets/js/15.c8e9bfac.js",
    "revision": "2816f0910ad8b309d29cdacac775c4b4"
  },
  {
    "url": "assets/js/16.66025140.js",
    "revision": "8ef182aa3c361735931861e22e25ff27"
  },
  {
    "url": "assets/js/17.f2d30196.js",
    "revision": "d4678165b1e8544c5bbcf3b840fcd17b"
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
    "url": "assets/js/8.102080d5.js",
    "revision": "a8f24464c69d795f22a3da091b3913b6"
  },
  {
    "url": "assets/js/9.8f1211be.js",
    "revision": "9274cdcb6a60b5664781c501c4653245"
  },
  {
    "url": "assets/js/app.2bfcb6ed.js",
    "revision": "48befa04c9da18cb1f48f83b2dcc7e2a"
  },
  {
    "url": "faq/index.html",
    "revision": "947b2220a3e2ad6a8d202ba364475a89"
  },
  {
    "url": "guide/index.html",
    "revision": "fbb1c69dad2becb7860456db12498a25"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "f814cc53448dae43b60c0109d505a8ee"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "e6add78381ee1b93ae727e947e0584fe"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "5b760c2ad5121c3f071bf47de00b2111"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "1bcce7e6dbb0fe67432bb0705e47acc2"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "b067049a8ef14e839c6a965b006007d2"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "563fca8a748bc5f1f5534de5157f9d58"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "4f733b63dbf84a5399e2519051723a5e"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "313702ffaa1006b26270f8ccb0b39de7"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "666a8e1ec011c030b79224e8a42ca230"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "902622d8845bc039690ca30c74625e21"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "a78da44aaf62aee875b12807a6b6d8c2"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "2601f6b1cb2a3afa0e3ec263b359be78"
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
