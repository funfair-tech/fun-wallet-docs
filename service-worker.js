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
    "revision": "b9156fdba838b3c678f10af321269988"
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
    "url": "assets/js/10.13fe1ed5.js",
    "revision": "eb8b6b0119233a3f4e474acc6fdfc9a3"
  },
  {
    "url": "assets/js/11.5118828d.js",
    "revision": "378ac7323cbfab8c3514be8e9bd5ebc5"
  },
  {
    "url": "assets/js/12.8bd97a35.js",
    "revision": "0c6a3f5d4cbe008f6231979b3d72f4c5"
  },
  {
    "url": "assets/js/13.6ee2b275.js",
    "revision": "cc65d78bc05196c147d9d7670f05a276"
  },
  {
    "url": "assets/js/14.13ddedc6.js",
    "revision": "08adf67feda68216ae893abd1058c412"
  },
  {
    "url": "assets/js/15.a68397b1.js",
    "revision": "9433d23b9ec724d20dd9623196fb856e"
  },
  {
    "url": "assets/js/16.b1761d07.js",
    "revision": "4da045f8d90762c347cd1429016cd686"
  },
  {
    "url": "assets/js/17.7009b94d.js",
    "revision": "53809749b180cdb7f64541b38c4dd362"
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
    "url": "assets/js/20.746f97fc.js",
    "revision": "e51f53df4e04f7914b7a91495128bcc9"
  },
  {
    "url": "assets/js/21.7327d00b.js",
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
    "url": "assets/js/9.9bf9912c.js",
    "revision": "9274cdcb6a60b5664781c501c4653245"
  },
  {
    "url": "assets/js/app.a600b0e5.js",
    "revision": "42ffc80595c23a21325901d00866b63a"
  },
  {
    "url": "faq/index.html",
    "revision": "1419431b446c718324f46a3ed52f1fdd"
  },
  {
    "url": "fun-wallet-docs/index.html",
    "revision": "cb58b707aabf2bb7c67583fd6204dcf6"
  },
  {
    "url": "fun-wallet-docs/information/getting-started.html",
    "revision": "b6ec8b0c834b969bbe75a1bab68c3fde"
  },
  {
    "url": "fun-wallet-docs/information/leader-and-follower.html",
    "revision": "14f189abf7a368cf5a647171f5b2fbee"
  },
  {
    "url": "fun-wallet-docs/web-sdk/approval-modal.html",
    "revision": "f38fed967036539f50966a78aba9c5d1"
  },
  {
    "url": "fun-wallet-docs/web-sdk/authentication.html",
    "revision": "9dce4163d35b43be946da8686d4df9b8"
  },
  {
    "url": "fun-wallet-docs/web-sdk/ethereum-provider.html",
    "revision": "cf5de819f8ad0f862df535edfebddacf"
  },
  {
    "url": "fun-wallet-docs/web-sdk/initialising-the-sdk.html",
    "revision": "0e189f67694a80338af6c5c166189d2c"
  },
  {
    "url": "fun-wallet-docs/web-sdk/installing-sdk.html",
    "revision": "3b1f169299b2d1270036d9850a441c38"
  },
  {
    "url": "fun-wallet-docs/web-sdk/languages.html",
    "revision": "84bd4a056fdfcbf9005027fc87792109"
  },
  {
    "url": "fun-wallet-docs/web-sdk/sdk-event-listeners.html",
    "revision": "4e66960cb2a90c50781cca71d4c66cb6"
  },
  {
    "url": "fun-wallet-docs/web-sdk/sdk-methods.html",
    "revision": "e8d875793fe654b2a95d4eb5992b6535"
  },
  {
    "url": "fun-wallet-docs/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "4ac303344f668e10c4cbfdada82da86b"
  },
  {
    "url": "fun-wallet-docs/web-sdk/wallet-ui.html",
    "revision": "500158c1f8ef4618ebc40d0506e27ea7"
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
