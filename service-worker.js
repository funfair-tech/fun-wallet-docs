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
    "revision": "c1ae9184bde48414424ba36521fe606d"
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
    "url": "assets/js/10.d682e561.js",
    "revision": "e0d8cd5fa733aca959899ac8f87084c6"
  },
  {
    "url": "assets/js/11.ca85f405.js",
    "revision": "7cba8796eea04eb2b718171d389ad5ec"
  },
  {
    "url": "assets/js/12.e46e5a2a.js",
    "revision": "226143cf12e30389db7388bdf7f43af8"
  },
  {
    "url": "assets/js/13.c68f3bf1.js",
    "revision": "fdcb6898454595adfa44d965e967f3df"
  },
  {
    "url": "assets/js/14.d854c661.js",
    "revision": "6b3e0da314223c36ae1b0b82a6190484"
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
    "url": "assets/js/18.e3118307.js",
    "revision": "e712a712d4fbc6f96704d0beeef6fb95"
  },
  {
    "url": "assets/js/19.4ed76072.js",
    "revision": "6616bac71519e69bc89da9629911fb1f"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.385e42b6.js",
    "revision": "e79aa92222898370531c18eb47aa0f94"
  },
  {
    "url": "assets/js/21.5fed1a42.js",
    "revision": "15998b3554cbe787a48f73f2408e7f47"
  },
  {
    "url": "assets/js/22.469eb599.js",
    "revision": "9ff0488ffb2794fe283d8405b6bcd990"
  },
  {
    "url": "assets/js/23.2f0ac2f1.js",
    "revision": "ebab2caca9ca651eb49c0b051f3d9dd2"
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
    "url": "assets/js/28.9c685a55.js",
    "revision": "415e72417460e4b8da0391a87a603bb2"
  },
  {
    "url": "assets/js/29.a83728fd.js",
    "revision": "c12d25f824cd481c2f93bb222ee18131"
  },
  {
    "url": "assets/js/3.93480ce7.js",
    "revision": "f8c07b059c764c8cd2e867e6a7cb848e"
  },
  {
    "url": "assets/js/30.9aab8618.js",
    "revision": "79dba99b872ca5c4428e3891615720d2"
  },
  {
    "url": "assets/js/31.fd10623f.js",
    "revision": "4f9adf9087e2484d861e2e09460d594b"
  },
  {
    "url": "assets/js/32.b6c62458.js",
    "revision": "9fd8e03c65938f795f550190e8f5be9b"
  },
  {
    "url": "assets/js/33.9377b8fa.js",
    "revision": "7d18d166b11cdecf9c55fcdb7a85dee8"
  },
  {
    "url": "assets/js/34.963a2350.js",
    "revision": "7b067ac6464c5ca48810cf3bb7c834a9"
  },
  {
    "url": "assets/js/35.f12b2500.js",
    "revision": "11c218c33df9e293684cab2d19150b5b"
  },
  {
    "url": "assets/js/36.8d13854d.js",
    "revision": "085d87c1991ccfc3b92c33bc324a1013"
  },
  {
    "url": "assets/js/37.eff79142.js",
    "revision": "c598133ba8739db6ca2d61fd8090e2c1"
  },
  {
    "url": "assets/js/38.4ae19338.js",
    "revision": "6de34d88f44d4d5abec3a7753582e366"
  },
  {
    "url": "assets/js/39.afef5a36.js",
    "revision": "4426a2ac8737c0fa45baaa85c057beb2"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
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
    "url": "assets/js/app.5f19a79c.js",
    "revision": "27f1d6b6a48fa1a7d273fa57a25b1b5f"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "b62e7255d571785843e58b421acb1417"
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
    "revision": "d29a9ac2d7566582fdd92b4140d6c9c5"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "380fde845971ab0bad30ab47779b8d60"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "41540389931c4419a72d13cd43dfb0f1"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "5dce3233e6dbd30a8372f0558efcc746"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "4f98213b564fd183c4d9c0264d593158"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "7e73a66609a1e08c5efeef2c4d7b7099"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "d0b840024ce0292f01fc552ce274c445"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "2b1ab8910048ccdae4ace8e27352403b"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "f92dde223736eecbeaf151f814245ea8"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "500d81d15b7cb9ad37ba0ecb120f0d8c"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "7ab6ce7d4f84cf35c6a4b9d591388234"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "91848563c181498fcbf12141786337c0"
  },
  {
    "url": "guide/index.html",
    "revision": "219bd5cc04a3bbf7e794fd8ce80cf61b"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "7289b9b54b0a1d57a0e4d089a81711c7"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "406b00dee8a7c2a4cdb578596f5a92ff"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "8ed7a954c107cd9d7f36c13f678bdfb0"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "578b47f319dd0d2df0b364edad47b398"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "944d791266f8023999b10a99b6786e88"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "f8637e2c0c588e2602f28b2ed597740c"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "4f3b307e68d5ce9687e77513eed6d1a3"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "77cdf8baee229052f03dd2c43b479ae1"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "19eafd25f73f85bd51808254f6b0b22c"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "31db6e3f45661a4cfebae8b990e8d3ed"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "4f9faa6f80664ca41ad6f655be8bcd29"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "2bdacb597277d711d645f80390d15d06"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "547f7d40759c4418e443c8d1cbb34771"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "170a0d32d4ac317a23e543bbf65407c1"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "92a3cf807c7803fa40702c6ddbfab8e7"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "c7a5d5d2588cbb39b59a1fc61f04cab2"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "d38828dd4e2d2a70bdb982a47c4cfc52"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "47471d86b2e3209740bab22c46e3fa27"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "9f66b0b7f05e4f1fbff50801fd7ee4da"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "d8308cdafb4c8d243564e2eabc105f13"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "ba6c6c79c7c340ac89eceeb0338781ac"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "91dc21ea6aa7cb498f94df034b680205"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "072a8186a2c209e6ed0db91edc8c35d2"
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
