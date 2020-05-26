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
    "revision": "97db4d6b3e6be86c5472734903ad5050"
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
    "url": "assets/js/10.81e3c6ba.js",
    "revision": "abbf2bd19e63459a82d0c09c44e70530"
  },
  {
    "url": "assets/js/11.c07b3369.js",
    "revision": "34308473a1935bf3e7c6a0c7c8680b63"
  },
  {
    "url": "assets/js/12.c8f75d4b.js",
    "revision": "64f1292942172f4eb3389c9763f31582"
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
    "url": "assets/js/9.c0147e08.js",
    "revision": "8a86a5de4af70c260d58e89307da0460"
  },
  {
    "url": "assets/js/app.e480d63f.js",
    "revision": "8b2f94b1b2476a4a06c358dc18856f5e"
  },
  {
    "url": "faq/index.html",
    "revision": "b8b73d2edaf3dc39d61918f1bbc4260d"
  },
  {
    "url": "guide/index.html",
    "revision": "556deec821e98249ab223a7954a3c07a"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "e27ed232b0ccffd99648f5ab3c9b3dd1"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "c0d07a774e594c4e73b401543be00914"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "805420aee32e73bccaa43ed887562474"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "0a63c3193b523e78c4886dd09e59e708"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "2aafbc1b7a71b2922d15afeb60e7c39f"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "c16324d0b6d8bffd93a6c7ea07b3fa53"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "ff9027a8c4e5a9995fbd2767a89390a7"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "cea129065d2b6ca09fe0becebad7b96c"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "86322442cba7b6376451ba21a8e62864"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "bc967a717b7912fb73290c622c1c421d"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "f74c4205616453b73625df2e08a69eff"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "776ae64c4423931bc6a72c3af604214e"
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
