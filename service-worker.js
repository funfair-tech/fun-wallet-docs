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
    "revision": "807655564e27137e32b4114651805f49"
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
    "url": "assets/js/11.c07b3369.js",
    "revision": "34308473a1935bf3e7c6a0c7c8680b63"
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
    "url": "assets/js/14.0dedd9a7.js",
    "revision": "1091f628c35033bf608cc1d888c56fe0"
  },
  {
    "url": "assets/js/15.9cb3daab.js",
    "revision": "9433d23b9ec724d20dd9623196fb856e"
  },
  {
    "url": "assets/js/16.66025140.js",
    "revision": "8ef182aa3c361735931861e22e25ff27"
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
    "url": "assets/js/app.21b91e74.js",
    "revision": "94bb5d291f73352fd8077c5194ecaece"
  },
  {
    "url": "faq/index.html",
    "revision": "7dd93cfe52fd0ba8b35ba69201f11117"
  },
  {
    "url": "guide/index.html",
    "revision": "b436c6683c26942792deddbb41bb9c53"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "db744e60eadf0dab51ed487226d396a2"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "1ed0aaedcc3e8c4363124e12924d896f"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "581cba176e320a1292b694cd28ffbea1"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "38acaee586dbc4f8ec19cb1d50366c2d"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "ec7072174331cabf9a8133eb6a9bc9a7"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "8038811a7d3c3c4e93cff161e84af5fb"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "cfba14e0cbf8530b45438f452552d1af"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "f3e0aa5c6c33df45734ede406e8d8617"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "d35701c8ed8022bcba1a20d2bae3eda8"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "7ee15c0f7a5bba56e9d807d1465a9616"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "ccbb2482ab2cca823296b28a433611f2"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "5905bcb960eb40736b5ec8ddf8828c8b"
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
