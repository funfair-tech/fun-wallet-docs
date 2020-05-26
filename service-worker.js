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
    "revision": "f92cd61d9dc0cb69da71a1fd91e90884"
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
    "url": "assets/js/10.81e3c6ba.js",
    "revision": "abbf2bd19e63459a82d0c09c44e70530"
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
    "url": "assets/js/14.e0db5057.js",
    "revision": "d4b1821526b3e87ebb62b2c52be3c71b"
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
    "url": "assets/js/20.ce775525.js",
    "revision": "6221e02d9ae329704e4f3e31bd734d59"
  },
  {
    "url": "assets/js/21.c311b579.js",
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
    "url": "assets/js/8.f0c05850.js",
    "revision": "57c79d84b66e0dde6cdfb02c185980de"
  },
  {
    "url": "assets/js/9.7bac6ea9.js",
    "revision": "a7481efb2272bde2584192d1e7cc7008"
  },
  {
    "url": "assets/js/app.0b6ce434.js",
    "revision": "a27d64527dade163a9dcd1cd778e897a"
  },
  {
    "url": "faq/index.html",
    "revision": "1ecc4fe1f18fac3f862d2ba1a8db9c3c"
  },
  {
    "url": "guide/index.html",
    "revision": "b24036001ae1b782362dc287bd9fe095"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "36698212480cc51e8794c9fa43a27b2b"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "61274e676dd05198a6de9c26eab12497"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "76851e0659815ab4d268635ee0936060"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "8b394559b6e9352af0580188b5ec42d2"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "c93f47c344a11880c520c5663c04b525"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "d71c82a5f1d076f5aa3a4481152aba11"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "2487b93c4c768f61fcc73c229f7e277b"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "66f86b199b065a145333490df0495ee6"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "0148d6aad4608387a9355c35c00d0060"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "15d2f800a672552cd9ca99a72568ef24"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "26e2fd33600356786850bd920a07ceea"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "24decfc5f6f641c78ffb0cdff6fe72e7"
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
