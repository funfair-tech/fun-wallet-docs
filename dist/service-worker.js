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
    "revision": "da75bcc9275de3f09c97a41d9014ea16"
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
    "url": "assets/js/10.0124df39.js",
    "revision": "eb8b6b0119233a3f4e474acc6fdfc9a3"
  },
  {
    "url": "assets/js/11.044707ab.js",
    "revision": "378ac7323cbfab8c3514be8e9bd5ebc5"
  },
  {
    "url": "assets/js/12.1ecdea2a.js",
    "revision": "3ff5bfe3eda963ff94926b4c8a2d4dfa"
  },
  {
    "url": "assets/js/13.4cc4c211.js",
    "revision": "3336b27e4be60a33a60b8aa878657836"
  },
  {
    "url": "assets/js/14.3ad9a3c0.js",
    "revision": "a86cc89202175a8c665ebc92c5ce9cca"
  },
  {
    "url": "assets/js/15.4005cf90.js",
    "revision": "d5bc3aa74fc97ef7a674f7b7ee5e9f8c"
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
    "url": "assets/js/8.aa2e6563.js",
    "revision": "ea2d6ef393580b1cf4c1532d856a431b"
  },
  {
    "url": "assets/js/9.7bac6ea9.js",
    "revision": "a7481efb2272bde2584192d1e7cc7008"
  },
  {
    "url": "assets/js/app.d9a8a2ad.js",
    "revision": "0eeda894f2830d57a527ca5a79cedb0f"
  },
  {
    "url": "faq/index.html",
    "revision": "32b11b504401c7d529b47cbdfb2e025a"
  },
  {
    "url": "guide/index.html",
    "revision": "3a76603bf2776ff1b45e06ad1d50eeed"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "d84f49f2cd79b8d8a4dfbe991b36758f"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "fb36550b353d587cfc46074055d6bdb7"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "342efbb303568629c6511549052f2bdd"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "81c455a817592cbfe20c1e59ed0d9630"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "f89a691ee4120687ea6bc0bc70803bdf"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "34eecbf5a1ecfdc09e7626cf91b8710f"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "eb93b9a7cf793333335eed31ba40d816"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "9c2cb1369367092e87ddba65a040d97e"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "9c7feb346747f6121c3757727c455649"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "d60d3d681c933eb2cdea2e24bba88843"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "0c932d4a86f14b8d37896082d6ef64a4"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "30bd66146d32b859b94ebfe31bf936f0"
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
