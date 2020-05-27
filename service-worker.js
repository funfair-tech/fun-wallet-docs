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
    "revision": "975397504f87eed568acd7344dc761de"
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
    "url": "assets/js/10.90dff10c.js",
    "revision": "f338fe5f1e978ce190053dc27d1c21a9"
  },
  {
    "url": "assets/js/11.5c9fb61a.js",
    "revision": "d5d6cacba59259fa579307094184c2f9"
  },
  {
    "url": "assets/js/12.12d7166f.js",
    "revision": "4d26ebbf1d06528d48dfc69b003c466a"
  },
  {
    "url": "assets/js/13.e4a5dcfb.js",
    "revision": "991717782d23f21001c0ee9c83f04b84"
  },
  {
    "url": "assets/js/14.b852d566.js",
    "revision": "108d4eb08e7c6efcc7d54a20ca70c542"
  },
  {
    "url": "assets/js/15.1b5cd478.js",
    "revision": "e0081f6cd6eed14646e99c330ea8ab1b"
  },
  {
    "url": "assets/js/16.8acb4140.js",
    "revision": "9c8a6056c0d9809110f23bc9096baa82"
  },
  {
    "url": "assets/js/17.bb4151e7.js",
    "revision": "844c29d3f0a1467e697290ca2d0933d9"
  },
  {
    "url": "assets/js/18.94a98aea.js",
    "revision": "d24d7c8d3c149ba62164379f562b893f"
  },
  {
    "url": "assets/js/19.a473e4fb.js",
    "revision": "5b24441c39fb2331ad649ffc5c624279"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.3e6aaa4c.js",
    "revision": "3da939bb9924ecb1c4359f176e6925ab"
  },
  {
    "url": "assets/js/21.a4c70e16.js",
    "revision": "8bf52b02d79984d820a3391a5c5c4033"
  },
  {
    "url": "assets/js/22.ccfbcabc.js",
    "revision": "be11755657caa9a80a7a4ff15175b1a1"
  },
  {
    "url": "assets/js/23.f918fd7e.js",
    "revision": "3ee6893e5e07a11ac5a3d1f9f349cc09"
  },
  {
    "url": "assets/js/24.48cd2c06.js",
    "revision": "10fdc7653686647642b717178ffae1d7"
  },
  {
    "url": "assets/js/25.7d8a5d6c.js",
    "revision": "f62d5ff092d1b10f97cd9dfe9de0aa0e"
  },
  {
    "url": "assets/js/26.977ef867.js",
    "revision": "1a6af3679d7b358321bd23b75be9c4af"
  },
  {
    "url": "assets/js/27.3456d543.js",
    "revision": "4d0f8dea355e8862de71bc75c9daa503"
  },
  {
    "url": "assets/js/28.57aedf1c.js",
    "revision": "ad676e24b1e5f68069a670e8d281d938"
  },
  {
    "url": "assets/js/29.72ea09cd.js",
    "revision": "ac915e3ec30134b4269282517d59ac7e"
  },
  {
    "url": "assets/js/3.115da35b.js",
    "revision": "a6ed8ddc9fca6bd2f35d5c95858098d7"
  },
  {
    "url": "assets/js/30.a813e3d3.js",
    "revision": "bc1253ecf064535c1ddab888109826bd"
  },
  {
    "url": "assets/js/31.2d3f224a.js",
    "revision": "5fbbb70a44af3573d697988d2ee66e4f"
  },
  {
    "url": "assets/js/32.18a76cba.js",
    "revision": "530cb66a19ace1743ed120df424b6d37"
  },
  {
    "url": "assets/js/33.b6a0dab6.js",
    "revision": "61502740c9e46cc1355af22cb49875f6"
  },
  {
    "url": "assets/js/34.0f860a2e.js",
    "revision": "e099c8196e6bf0e7eb36401daafead51"
  },
  {
    "url": "assets/js/35.8f2ed5d3.js",
    "revision": "503269c9aef211663fea88eb0fcb28e0"
  },
  {
    "url": "assets/js/36.afd52f90.js",
    "revision": "edd8dcbf89626cea912acd7323f0f3e1"
  },
  {
    "url": "assets/js/37.80fac9d7.js",
    "revision": "02d660b1176c2824d5ee7a1dc6632b0d"
  },
  {
    "url": "assets/js/38.9d6c76f1.js",
    "revision": "79470e3b734a8bbaa98a25967130cc60"
  },
  {
    "url": "assets/js/39.0aa068d5.js",
    "revision": "ec0b3deb17c17e362dc0c974a93e379e"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.f92fd921.js",
    "revision": "c4d1f20c1758699b9b31f80b6076f4c3"
  },
  {
    "url": "assets/js/41.553fe969.js",
    "revision": "38b19fbe35a2659f5cda583c504753a2"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.28406707.js",
    "revision": "b2ce583ce65000fca0833dc0a9b83f3a"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.259a090f.js",
    "revision": "270ca801577efb3943989e9fe70597b3"
  },
  {
    "url": "assets/js/9.2d5b7cb2.js",
    "revision": "c26245a5a3f29a426459ccca6edbc13d"
  },
  {
    "url": "assets/js/app.9157256d.js",
    "revision": "e5f4e0fea13d9c47adb1bdbffb0cc22e"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "6b364294fa592259093a289fe2b2406c"
  },
  {
    "url": "fun-wallet-provider-flow.png",
    "revision": "68d9ce5e8921050db76f1077844ae450"
  },
  {
    "url": "fun-wallet-sdk-listeners.svg",
    "revision": "d8ddf8c005fa7f8b97642812841ddf65"
  },
  {
    "url": "fun-wallet-sdk-methods.svg",
    "revision": "5e16821dbb08db331038d25ff1a2db4b"
  },
  {
    "url": "guide/how-does-it-work/blooms.html",
    "revision": "dc2b2c7a322a56298c175c865a115bd1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "125d6923c30001b4cabb141a64781098"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "60152da36fe5c7f8daf4862787d61ebc"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "97d7b1af12140c2df8fc29ffec147ef5"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "90df337ab7c72b147a72e4ece3e6f548"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "b22be18382d3d5287478e35863de60fb"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "ae2fb5a23342d190089c2647ef93834d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "0e2b3f7c3cc1106aaafe68a7b617e3e5"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "5238445ad5992ff818527d420b56cdc3"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "b9bbc97c9d0b38b82d4323597eb1aac8"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "9fbef2e6a134cdf79cc96ceefb89c42c"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "667b2df7a5fcb0f9d691b74fb77211fd"
  },
  {
    "url": "guide/index.html",
    "revision": "c4f4cf55f9925929d91ef94ab26e55a8"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "6b583a5fd84a8fc402ba15fecda56639"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "264bcbf9cc24e935ecc2be2100124fec"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "19340a489c579018cc4c858948ca82a1"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "5d8b754e077587d8a7218970441cb3d9"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "ad52acdbbab7dc8e4e8103dbeb2734a8"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "b1eaa9fb181d9330d90514cbfb1dce87"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "dc8e6a59643c08066b871b28e59f6788"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "43949cf838cb5d794e29cec7e914bf71"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "210621bd621cb9e6c5a6e2e4855de383"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "d722c61cbf661b00d93a9f094c93968a"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "247b52c92179cdb7ec992bf585c2ab37"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "a77bce374d8044f050fb0068c3e2e93a"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "f64bb6468ee6fdfc09f4c62d875a1cf3"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "4b6bf71b010131d3ec881769655a83ae"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "b2b0732fc4e6549c2cd30439c720554f"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "2228032225f3f39501e3e140ef9f51e1"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "018a850dfe933e5089dc98014f154949"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "1983d00d41d0b41a0ee30a85caabf754"
  },
  {
    "url": "leader-and-popup-authentication-exchange.svg",
    "revision": "d85822300d9e8afea03c6c7b3d88680f"
  },
  {
    "url": "leader-follower-authentication-flow.png",
    "revision": "3305e47990038d576b3940105a60c47e"
  },
  {
    "url": "login-and-recovery-token-generation.svg",
    "revision": "8d32ea4d85aa0868207213b8ab82c413"
  },
  {
    "url": "logo.svg",
    "revision": "02850c4cabcbbe69b13b1281d108b5dd"
  },
  {
    "url": "recovery-flow.svg",
    "revision": "356f767864078e9eea4f454a5af17fdb"
  },
  {
    "url": "registration-flow.svg",
    "revision": "e6bca7cc05505f13ef7432035542aeb8"
  },
  {
    "url": "restore-session.png",
    "revision": "b049ed2a5dcb9662926c339a542aaf36"
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
