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
    "revision": "061ab3648b8016c819b35a805bafd410"
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
    "url": "assets/js/10.18aeb2c2.js",
    "revision": "1c705accab8a6827daf44257fe030951"
  },
  {
    "url": "assets/js/11.77ecbf1f.js",
    "revision": "e2bd94dc1f03ecd98182d8bad8293107"
  },
  {
    "url": "assets/js/12.0d41be4b.js",
    "revision": "617de19a98861c56b5fb99d506780fdd"
  },
  {
    "url": "assets/js/13.c68f3bf1.js",
    "revision": "fdcb6898454595adfa44d965e967f3df"
  },
  {
    "url": "assets/js/14.5820c296.js",
    "revision": "415867068c38434e31349de3fcb8769e"
  },
  {
    "url": "assets/js/15.f30583d8.js",
    "revision": "254112dc81fa248dfec3cd67b967429c"
  },
  {
    "url": "assets/js/16.ec4b8e77.js",
    "revision": "adad5b659448dfafa16958565875bbdb"
  },
  {
    "url": "assets/js/17.31b904e4.js",
    "revision": "c43525333a4153de55fa67a4098d351c"
  },
  {
    "url": "assets/js/18.11108fdc.js",
    "revision": "02fa499c19792d72203ff729d7e6f41a"
  },
  {
    "url": "assets/js/19.c02287cd.js",
    "revision": "13fac78b97c085a174841874424921dc"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.8abf15b0.js",
    "revision": "73061d3fc85b9cde669cee265c599d74"
  },
  {
    "url": "assets/js/21.ead6901f.js",
    "revision": "15ed102334460ebe1de688210f7ea24f"
  },
  {
    "url": "assets/js/22.88b89ca7.js",
    "revision": "3f14a5fb89baca1920c94ff7d47458ca"
  },
  {
    "url": "assets/js/23.3003a220.js",
    "revision": "29ff4b971cb8200068c3ff9079535233"
  },
  {
    "url": "assets/js/24.461c3fbe.js",
    "revision": "15562a358076e4e683850302b1be7467"
  },
  {
    "url": "assets/js/25.21067a62.js",
    "revision": "160da30baa255b0c61fbe0a364cc9030"
  },
  {
    "url": "assets/js/26.ce8b61c3.js",
    "revision": "8945e5f05c76496cbdc094bd6c9708af"
  },
  {
    "url": "assets/js/27.8243fb9b.js",
    "revision": "24281194791d2368b4812ae1d306c86a"
  },
  {
    "url": "assets/js/28.3a3d94ea.js",
    "revision": "85539aaff8e5647f73cc612861f79978"
  },
  {
    "url": "assets/js/29.a83728fd.js",
    "revision": "c12d25f824cd481c2f93bb222ee18131"
  },
  {
    "url": "assets/js/3.cab6926b.js",
    "revision": "d4c921c20d34ed5440b781ec85ced7dc"
  },
  {
    "url": "assets/js/30.18a8860c.js",
    "revision": "cb19e3b5c5109ca35a361735660444e9"
  },
  {
    "url": "assets/js/31.5491739f.js",
    "revision": "c3806de2864da81b4adc806f07434b3f"
  },
  {
    "url": "assets/js/32.49d3409a.js",
    "revision": "049c85f0b4046b699dd26d0aeefdb760"
  },
  {
    "url": "assets/js/33.207cd617.js",
    "revision": "ee99416d17dae3c7138e903bac70d8d1"
  },
  {
    "url": "assets/js/34.3f63557b.js",
    "revision": "ae523ac79bb14d837e709efdff44c940"
  },
  {
    "url": "assets/js/35.f12b2500.js",
    "revision": "11c218c33df9e293684cab2d19150b5b"
  },
  {
    "url": "assets/js/36.00c59300.js",
    "revision": "0847ac041af64be89cf3375713655c28"
  },
  {
    "url": "assets/js/37.7b6e7084.js",
    "revision": "8baa00deb8872862ce5c59f84867fb36"
  },
  {
    "url": "assets/js/38.a5c26c33.js",
    "revision": "c9f488912ea3474a7f10791c18b993e0"
  },
  {
    "url": "assets/js/39.527044a1.js",
    "revision": "dcf72cf09d03bea5c692c59f0d301edc"
  },
  {
    "url": "assets/js/4.cd74692e.js",
    "revision": "32d9dc0215bb0d1a89c921316bffcb77"
  },
  {
    "url": "assets/js/40.881bd605.js",
    "revision": "1129b43fae01d72a501c4ddb391148a0"
  },
  {
    "url": "assets/js/41.1e5fcdda.js",
    "revision": "a0412a227822c3f170d6057b215715ab"
  },
  {
    "url": "assets/js/42.b9fb4d3d.js",
    "revision": "1ba6287deec9d9a9459db114405a6102"
  },
  {
    "url": "assets/js/43.f98b96ce.js",
    "revision": "6880c9e0e7926eca8760097353fd79bd"
  },
  {
    "url": "assets/js/44.b673b3ee.js",
    "revision": "09b3f75d3d12f7d3de27f440eb7f39ff"
  },
  {
    "url": "assets/js/45.aca79237.js",
    "revision": "e6f643cfd8589806294b08a74c876f5d"
  },
  {
    "url": "assets/js/46.6ea406df.js",
    "revision": "82852bb05c96264d7ede81208b3fac01"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.fddb07c3.js",
    "revision": "521337d863baf3ac4c7065babdcc983b"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.472fca48.js",
    "revision": "c34263606008a62aac1f40bbfce82da6"
  },
  {
    "url": "assets/js/9.d0806942.js",
    "revision": "0aa4efdeb9c143610092bfa6632b2903"
  },
  {
    "url": "assets/js/app.1f8cf1b7.js",
    "revision": "c809c7a7d18d6ef06d8f1cbc661f38c7"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "bfda3c97e40825cecdcaca98604d66d0"
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
    "revision": "9dedd9718434af75f92b29c66f8df53e"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "b4c53c7a21ff9a97c155a27d6271a32e"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "e809a28ad91972b46da15a83ca5efb45"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "f58b3a882573db5ced59dae745f82db9"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "bf7674f718cd91ab1314c33bd7e2a6aa"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "201fd5ed1faf5288c1511a212594822a"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "ba1e2a31921dec1bc49fc82720b5fb4d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "e1f1c9d0f966811685cd6a6c5b712195"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "8b5f3b614a26973d779490da7b0e4ed2"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "6bc922fa0512d7bf3b2afd2f102048b3"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "bc39d78d0c607ec3b0f837299c17fa0d"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "192be2265aa8cfb17843a5459e2a4351"
  },
  {
    "url": "guide/index.html",
    "revision": "5f563c4dac281dc670a43b9c42ed2003"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "f2cf4728a324f47edc99502fd92e93fc"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "55bd1ea7ec592a5b81c8832b031f3f2c"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "6b96fc9482d74fd7b5a634b8972c7aae"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "1c72698ffb0837ba5ae7d871dae38ef3"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "e0f722e4c28bcbaf5b48840d2a200c50"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "5d640bce319a387a70af0719a0fc993a"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "ee5735308852e7ece97c07323e1c5176"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "839f072728dac18c47f077ee3e59444e"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "891e66121c6257e649dfd2048899370e"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "e65ad5f0150066bf0e183a819285a49d"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "602ac6da318e1360f4f65e2cb7674c43"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "1dec4ac7eec18a8b4e3298316a904ccb"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "15ca884b8425778f0c4c001b1e5ae0f1"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "9d2b9bc4817ea8973b3e084ae81f5ac7"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "ce5c0e8c8522d80ea1e31469a534483d"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "5b7a10a4fd1e4c1854377491ceb5ae7c"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "d20ad9b95f9d5c8519cf518469437df5"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "57599400a8db01f7bcb83f97a51ef2dc"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "63309f4396a59dbbf55f2bbe9697a50f"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "2a573ac38ff57ceae78ecf56011dcf83"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "aa67c68faab7eecf197a56cd6c418601"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "e66624472728d8e077bbb787b7978483"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "a2746abdacfaa0168cace729a3ac5d15"
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
