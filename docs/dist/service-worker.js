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
    "revision": "5287a16ca929c3ce84f3f293c02170d9"
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
    "url": "assets/js/10.6b28662a.js",
    "revision": "0b4e3493723e6f97ceceddddec0fbf73"
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
    "url": "assets/js/app.6922d332.js",
    "revision": "f8c2767ab09cd8164c7aa5ce1aaa7fcf"
  },
  {
    "url": "faq/index.html",
    "revision": "b9c0f57785d63bcc08b2dd053d792cad"
  },
  {
    "url": "guide/index.html",
    "revision": "d4fafe57541ede0c0939a1a3619d6d85"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "102d1823415b42277256c0e122417596"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "2feca849756089f76a894614e23fa72e"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "caa7bb2849f94a72f5dd0e204812ffc4"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "95c5ab9d4cdeca0df42dd231920486d0"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "5f213d3ae6f1d690da6dd4db36e5ff4b"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "f142d1d54bb47e3ee0638bb82de3db66"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "ad02df1483912b52535a6ff290bbff4a"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "7188b9d0a0dc48a28a20d0826b04fc21"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "e89494342747be817207f474b3b4ee73"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "ed063b07a42ae7fe8dbe95a7029ea87f"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "2c655c2982473a902829676c3801899f"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "99b34f93090f863197e1fb2ed625f3c0"
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
