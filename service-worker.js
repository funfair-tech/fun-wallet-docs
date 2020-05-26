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
    "revision": "ad402396c2b9af96b5705d7e97fb8350"
  },
  {
    "url": "assets/css/0.styles.68051902.css",
    "revision": "3f85c2c2fa51e7e8571c51d6c65bf204"
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
    "url": "assets/js/12.fe94ee76.js",
    "revision": "9e0acc7b8b8b48e0a187707ef8dbf5fd"
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
    "url": "assets/js/9.2b944457.js",
    "revision": "150935e7f16c458f31e061fe0068996e"
  },
  {
    "url": "assets/js/app.27a38950.js",
    "revision": "67cd26539884f549f66518c77b4009e8"
  },
  {
    "url": "faq/index.html",
    "revision": "b2df72cc8f658fb28ca8c976553f9fd2"
  },
  {
    "url": "guide/index.html",
    "revision": "b6738801e84920abaeb22533aa0fe9cb"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "7c58c40f9ac5cf5b8074cb3393944290"
  },
  {
    "url": "guide/information/leader-and-follower.html",
    "revision": "f9f5f2a1c26ec3d7d1ab364fc51b9fb0"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "4b44900f5434cc1d6c267d4b589ff744"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "35365fe9d39393c4225dfc294f1f90b1"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4bcee433a36d2f02c8c982e24af955f2"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "4c7afbcac0fdf6eed3ed77676c6fc2c4"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "ecccc0a7f15bac5b24f081ca02819e03"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "82f83d09ab50bfa4c26f49156279db6a"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "12aa09acb0e033eeb33ff6fd1ad5fd08"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "5186686456cfe46e47c42190ae4661cf"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "f46b1cdba8c47889d4265c4f6456fb7a"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "8824ed3c9816b7f0a640381eb04682aa"
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
