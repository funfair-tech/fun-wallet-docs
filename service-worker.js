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
    "revision": "1593e978c376beb2a2e27a29e0f2fbb5"
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
    "url": "assets/js/10.afe6169e.js",
    "revision": "6b3249675f14b649da8ce27fcaee27ba"
  },
  {
    "url": "assets/js/11.5118828d.js",
    "revision": "378ac7323cbfab8c3514be8e9bd5ebc5"
  },
  {
    "url": "assets/js/12.53d82ca4.js",
    "revision": "82bb393d2a64fec6aea746afd7b06e34"
  },
  {
    "url": "assets/js/13.7b6a230a.js",
    "revision": "1508c19ed0ed176367d7b4c48b63162a"
  },
  {
    "url": "assets/js/14.0b46fca0.js",
    "revision": "27e843a3542cb9dd9b74bb96c438899b"
  },
  {
    "url": "assets/js/15.6e937a12.js",
    "revision": "1521fc99a9e424f2526819d70982423f"
  },
  {
    "url": "assets/js/16.b1761d07.js",
    "revision": "4da045f8d90762c347cd1429016cd686"
  },
  {
    "url": "assets/js/17.fd9a5056.js",
    "revision": "d89b81c3d37cd395448c0abff700c6ac"
  },
  {
    "url": "assets/js/18.40a44450.js",
    "revision": "8f9b2d677a0076ed03e3381f297b03a1"
  },
  {
    "url": "assets/js/19.6f5556e4.js",
    "revision": "2b8a8c4ea6d94420379e032cce377765"
  },
  {
    "url": "assets/js/2.df3542b2.js",
    "revision": "daa3d4cf0ef778c12188668bb6a12d62"
  },
  {
    "url": "assets/js/20.32da0d1d.js",
    "revision": "6221e02d9ae329704e4f3e31bd734d59"
  },
  {
    "url": "assets/js/21.2094e7dc.js",
    "revision": "d355d7fcd85edd2fbcf6e145a77e658b"
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
    "url": "assets/js/9.6ef2c7cf.js",
    "revision": "a7481efb2272bde2584192d1e7cc7008"
  },
  {
    "url": "assets/js/app.a0b38d39.js",
    "revision": "36ff90522a384764a0f36d370760264f"
  },
  {
    "url": "faq/index.html",
    "revision": "3b6e2a7eb6db4860c91043df1c9133c9"
  },
  {
    "url": "fun-wallet-docs/index.html",
    "revision": "6c27283db6eb5fee65ec257620fda79f"
  },
  {
    "url": "fun-wallet-docs/information/getting-started.html",
    "revision": "72d00202eaca356ecb613a9df988d54b"
  },
  {
    "url": "fun-wallet-docs/information/leader-and-follower.html",
    "revision": "0c86bae9a4950c5b19655fe01a0978ef"
  },
  {
    "url": "fun-wallet-docs/web-sdk/approval-modal.html",
    "revision": "5aa3e2e4ee80795b440c61d2ea77fce7"
  },
  {
    "url": "fun-wallet-docs/web-sdk/authentication.html",
    "revision": "6ce8747dc26bb265a3e467ca1e3d21a0"
  },
  {
    "url": "fun-wallet-docs/web-sdk/ethereum-provider.html",
    "revision": "22fbb112971921ebb5d739110fa71134"
  },
  {
    "url": "fun-wallet-docs/web-sdk/initialising-the-sdk.html",
    "revision": "20ca40b2db4cb394c45d066571e21967"
  },
  {
    "url": "fun-wallet-docs/web-sdk/installing-sdk.html",
    "revision": "59c792a376e2ac9157232191385d0ff2"
  },
  {
    "url": "fun-wallet-docs/web-sdk/languages.html",
    "revision": "9c55d4df2a0baeb0ee76e1ae88cc7b5c"
  },
  {
    "url": "fun-wallet-docs/web-sdk/sdk-event-listeners.html",
    "revision": "4284f752bdb6ec12bbfdb9fe99a03127"
  },
  {
    "url": "fun-wallet-docs/web-sdk/sdk-methods.html",
    "revision": "9dcc2f4aa5be36cb13b238b903057caa"
  },
  {
    "url": "fun-wallet-docs/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "f56c0f5dbbe1ff2bb972cb2c835ad724"
  },
  {
    "url": "fun-wallet-docs/web-sdk/wallet-ui.html",
    "revision": "ef0bdc5c9ee11895b662f8cd3b202e8b"
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
