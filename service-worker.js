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
    "revision": "76f7e7608fd262defa5647933312e502"
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
    "url": "assets/js/10.0124df39.js",
    "revision": "eb8b6b0119233a3f4e474acc6fdfc9a3"
  },
  {
    "url": "assets/js/11.044707ab.js",
    "revision": "378ac7323cbfab8c3514be8e9bd5ebc5"
  },
  {
    "url": "assets/js/12.d5d54ae4.js",
    "revision": "0c6a3f5d4cbe008f6231979b3d72f4c5"
  },
  {
    "url": "assets/js/13.34acc030.js",
    "revision": "c1785cd66727bb1cb9b4223d4a5dd089"
  },
  {
    "url": "assets/js/14.16863443.js",
    "revision": "08adf67feda68216ae893abd1058c412"
  },
  {
    "url": "assets/js/15.c8e9bfac.js",
    "revision": "2816f0910ad8b309d29cdacac775c4b4"
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
    "url": "assets/js/app.08e276fc.js",
    "revision": "562161504b0d35c8226ec5213af72b19"
  },
  {
    "url": "faq/index.html",
    "revision": "362f1b4fdeb1966b85e7412b29f9c3ef"
  },
  {
    "url": "guide/index.html",
    "revision": "77160a8a19bfd112639d4bd2d7bb4f88"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "736b932b927c6476a6e1a1850cc92398"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "082766c7270615e4822670346eed4a29"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "0008aa21e8fc3e21537481e758242070"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "87e525217720785bb32fbe4160195b47"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "f445e4294ad3da2e8868eaa98c54e0e9"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "d2ce7960e5419096ec14853445c32ee4"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "1c640d20bfdd53372072af1441214d45"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "58f6501b8603f22aa554ef1c1948c9c4"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "70ffed45466ef2aa73724a3e28290a41"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "becc2cd6d14549c554d8197f956c5c9b"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "4bb248eb72b21e5d63da06336131a4a5"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "481dee2f16f37cf7c48761694ecf20a8"
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
