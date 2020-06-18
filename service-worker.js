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
    "revision": "0f2a142c77cf6e841cb6cb3d6c4ace92"
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
    "url": "assets/js/10.d682e561.js",
    "revision": "e0d8cd5fa733aca959899ac8f87084c6"
  },
  {
    "url": "assets/js/11.124ee54e.js",
    "revision": "8fa9ba02da9fc0caa52f70a97d5b4c99"
  },
  {
    "url": "assets/js/12.83027ded.js",
    "revision": "4534efa9ac5bebfaeb64fc807cdd7751"
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
    "url": "assets/js/15.0d11e2fe.js",
    "revision": "6d7138a461889cc1a447466f38e971dd"
  },
  {
    "url": "assets/js/16.2fc74ce9.js",
    "revision": "fb7fbe8218b82bc9bec92ed96ae79645"
  },
  {
    "url": "assets/js/17.62e23bbe.js",
    "revision": "8ab35f950ad9ed4de664158b46c48fa5"
  },
  {
    "url": "assets/js/18.29eff908.js",
    "revision": "d488ce4422340ebc67302361f1631c19"
  },
  {
    "url": "assets/js/19.4b193deb.js",
    "revision": "6c66df2682530a12ead4eed87b8bc656"
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
    "url": "assets/js/21.eea2c3ef.js",
    "revision": "1f1c1ee28fd5fdefaef1895b9e28d7ae"
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
    "url": "assets/js/26.a8f362b3.js",
    "revision": "4c1224665785cb4a58940ebf5ef11bb4"
  },
  {
    "url": "assets/js/27.58e9b851.js",
    "revision": "77a6d3e395f4270c7eeefc8b9139ae0f"
  },
  {
    "url": "assets/js/28.12d571d0.js",
    "revision": "3e110741a9dc0b6de571533e980a438d"
  },
  {
    "url": "assets/js/29.42f66348.js",
    "revision": "159d538979d04fa589a6ac8699f2b013"
  },
  {
    "url": "assets/js/3.cab6926b.js",
    "revision": "d4c921c20d34ed5440b781ec85ced7dc"
  },
  {
    "url": "assets/js/30.524d1ac3.js",
    "revision": "ca400466f0931059b7faa7830f67e0f1"
  },
  {
    "url": "assets/js/31.929eacab.js",
    "revision": "d2fe090d7cec3a0b2333ac3cd3890362"
  },
  {
    "url": "assets/js/32.714c68ef.js",
    "revision": "d3b4cf20048efef4dd0de87cc1c341c5"
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
    "url": "assets/js/35.14260fa3.js",
    "revision": "0b299a61395740c1cbee3fe4f619de57"
  },
  {
    "url": "assets/js/36.d2096e4c.js",
    "revision": "bc1793c64f6617c0232c66f0a977cd15"
  },
  {
    "url": "assets/js/37.7b6e7084.js",
    "revision": "8baa00deb8872862ce5c59f84867fb36"
  },
  {
    "url": "assets/js/38.d25072fc.js",
    "revision": "0a44934f0fed9d0b91eff59edffd0b74"
  },
  {
    "url": "assets/js/39.afef5a36.js",
    "revision": "4426a2ac8737c0fa45baaa85c057beb2"
  },
  {
    "url": "assets/js/4.cd74692e.js",
    "revision": "32d9dc0215bb0d1a89c921316bffcb77"
  },
  {
    "url": "assets/js/40.4f1b91fb.js",
    "revision": "a75312f9ec6cd0393295bef17e694789"
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
    "url": "assets/js/app.c28f2c14.js",
    "revision": "1508fa8c5135bcb64b21336c0d83a169"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "610ddaf14a587cf8cb9cd096c0322d1d"
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
    "revision": "3b42e8bffb9a74a6e7b0be56fb3ba3de"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "ea3615d8d1dc3ee97c5cc6968be8abed"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "d08ce8897fd7b3ee65d7abcdba096b19"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "a800c8bc5c618d44a2abddd86ebb7f3c"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "d39d62451391e7d63131f7d67793e2d1"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "9585558e4a257ddeff32e62c161afff6"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "bf6e34ea58f855fdd27d029880b0b627"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c6c20f32124b35bb9cbd7e14c6784de0"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "ba4473e8dff523c3df04693d0c551b0f"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "38ed6324697ad5466f350f507bd62de9"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "0dbc7a1e3a63ab51952a48bff71a9bd8"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "f04f3ddd00e791f62bf2b0d1a228f6c1"
  },
  {
    "url": "guide/index.html",
    "revision": "7fa70048f57a680e2ddb78dd25de9414"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "135b4a1b99e64193c55d213bbce96c23"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "cf123024fab69a3bf15cd58858cdd8c3"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "f9cff5fadd175ba5c153071c7a134dcc"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "177b3f68a25f7df49c38e040c40e7eda"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "3e30a2041bb3a01a096cdadd406590e1"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "64a66d922b91ffb62dda276926bb8f39"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "63686de88a0bf62cce5f996855b3fec0"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "65beeb1fee468eb567a89278e3998e30"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "c4d552b13bba3b8824ac155349976681"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "35852e551fa86eda5262ad4d01b992c4"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "49a63a1fe345b8b0decdce8401f7050e"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "fc0b2a2baab1c4cfee55823de7b506a3"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "037ba41a6bbb5a750bb3c97fdba9f536"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "7c7b58a01c3fbcd1002b77776d119d5c"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "2d1c40a9c1ef292d289ac8713c8eab29"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "e7a9011352f799ba38e1756bda8b5a44"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "8d50f1fcae8491ef8f481263bad7e67d"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "d144e6af4489f6fbc16aea34e57b4fde"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "fb4741db28af100686435e7bade931f6"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "a03312f6d43b82d4905bcfa47c4558c2"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "7874ed1400cea06a12e4aab76986669d"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "05a73e134b78a4f850a8ea2026b028c4"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "36fdf688d32fba098022a20610998e67"
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
