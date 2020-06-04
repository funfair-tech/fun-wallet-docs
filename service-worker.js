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
    "revision": "288d0193e1cc783a8a29f2ceb387c5e0"
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
    "url": "assets/js/13.7c7207ab.js",
    "revision": "f10bd272d6712f9c1448646d75c5c833"
  },
  {
    "url": "assets/js/14.2620c205.js",
    "revision": "b1915b99269b095181cbf14866a705ad"
  },
  {
    "url": "assets/js/15.0d11e2fe.js",
    "revision": "6d7138a461889cc1a447466f38e971dd"
  },
  {
    "url": "assets/js/16.1da330df.js",
    "revision": "6304f973a7dc2c3934252c4f43362f1c"
  },
  {
    "url": "assets/js/17.62e23bbe.js",
    "revision": "8ab35f950ad9ed4de664158b46c48fa5"
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
    "url": "assets/js/20.3e6aaa4c.js",
    "revision": "3da939bb9924ecb1c4359f176e6925ab"
  },
  {
    "url": "assets/js/21.1478dac9.js",
    "revision": "922fb199a24aae01dbe639d1a9c405c2"
  },
  {
    "url": "assets/js/22.30d959de.js",
    "revision": "c78bb763d7b8e75cc076b3a73d857e31"
  },
  {
    "url": "assets/js/23.2f6ede56.js",
    "revision": "cc8c70b83589664035fce93566b2f2fe"
  },
  {
    "url": "assets/js/24.461c3fbe.js",
    "revision": "15562a358076e4e683850302b1be7467"
  },
  {
    "url": "assets/js/25.767178e2.js",
    "revision": "b7c8569ba590b38c81dd111511dcb684"
  },
  {
    "url": "assets/js/26.0879f23c.js",
    "revision": "7f19484bca090640a91336cdd1a4f837"
  },
  {
    "url": "assets/js/27.dadf3499.js",
    "revision": "f832cf7ace3f92db22fa6cb3b514df92"
  },
  {
    "url": "assets/js/28.4f3285c7.js",
    "revision": "1fa8b57ec29828f940919e30b67ebea2"
  },
  {
    "url": "assets/js/29.87dfac24.js",
    "revision": "d091f5b5994b5534b83c222451a35941"
  },
  {
    "url": "assets/js/3.7515ba86.js",
    "revision": "9dc44d5711e09bf25c5d74296c6a41f0"
  },
  {
    "url": "assets/js/30.d587356e.js",
    "revision": "28d7d85d9391d410affb6e9d931d810c"
  },
  {
    "url": "assets/js/31.929eacab.js",
    "revision": "d2fe090d7cec3a0b2333ac3cd3890362"
  },
  {
    "url": "assets/js/32.b6c62458.js",
    "revision": "9fd8e03c65938f795f550190e8f5be9b"
  },
  {
    "url": "assets/js/33.207cd617.js",
    "revision": "ee99416d17dae3c7138e903bac70d8d1"
  },
  {
    "url": "assets/js/34.1a04fcc1.js",
    "revision": "10ffa31c908d73e69997d19d8a2010a7"
  },
  {
    "url": "assets/js/35.30485975.js",
    "revision": "808e725e020a3d5c4d78db3922de4ded"
  },
  {
    "url": "assets/js/36.967e96d5.js",
    "revision": "b4155de29aa38f70a796d373a986f645"
  },
  {
    "url": "assets/js/37.3f2ada2f.js",
    "revision": "b877c984bb352139e2bf10d39789b136"
  },
  {
    "url": "assets/js/38.e7b212a6.js",
    "revision": "f23a615a09cacbd96e7fa00bd6694b36"
  },
  {
    "url": "assets/js/39.cfff38a8.js",
    "revision": "c4b3812117fd193dcd7310c812e6fa52"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.5cb198bc.js",
    "revision": "7875c8c586e6a4f227f886f91def050a"
  },
  {
    "url": "assets/js/41.d7ca15e8.js",
    "revision": "162e47e2aa003fabcfc06130a91070b5"
  },
  {
    "url": "assets/js/42.4ddc8754.js",
    "revision": "41d01fd80b3a4a40731253e713f4b289"
  },
  {
    "url": "assets/js/43.946a0d2b.js",
    "revision": "d91eac6a0b8ab08b3694b366175b8286"
  },
  {
    "url": "assets/js/44.c4c91deb.js",
    "revision": "3c944cbfb355b2661734448130a8a2b9"
  },
  {
    "url": "assets/js/45.b7b086e4.js",
    "revision": "88a7c06f76ffbfc45dcbffbc8688a8b7"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.37b07a85.js",
    "revision": "0525da58608e1a41e4511733f427ed34"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.0a8332f4.js",
    "revision": "a60065227fef62f7c991ce2e8fdec502"
  },
  {
    "url": "assets/js/9.40643991.js",
    "revision": "5453d6b6eaa505d19ed79600870e11f4"
  },
  {
    "url": "assets/js/app.4d437745.js",
    "revision": "443db3c525f634723c4d53d72cbd7ff6"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "ebbe70f70235b10e34853a00648b92e7"
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
    "revision": "7af47f06c541b37b4492e010a06d7c82"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "175751d601875ed5ce0e50ec2fe6f6d1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "ae9cb6b13db67dd36f6b45e442d5239f"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "803b7febabe92282db8625d74f661db9"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "290e95b1905979eca3cf65c331f07167"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "d221ceac6ca3da4c8602a38811dd8526"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "8dd3a017132a16303e43218142fb3d1d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "a17c23243f22d7c59f26d00afbb475fb"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "c6c7e593385d42986574b391fce9508c"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "0555097843d8f311e982e46158093018"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "16f12e1d9a4259c5ae830d41e7f20ea6"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "e32db43c7af3b702a60c8da58ba63675"
  },
  {
    "url": "guide/index.html",
    "revision": "e0e4743602c40be8731fcfb9c6b53338"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "7fcd18531728bd690ae63bf95d002745"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "fb719acfcbf9cad77ce42ca59ac0bf8a"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "c1cfb092634e8b8b9bb56c03f6cffa96"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "93869e5b1b6fb405685d1dfeb1b0b33b"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "ac0a9f16a08b28674e9e26cca779f88d"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "78d33f96b6e8faec974e1073e13f50da"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "d31788a2a2331206cf753080ecaed924"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "20e3746c3d5f7999ab6ef5ce705a2dfd"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "65e9068c36b592dac930fbfedc693616"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "afc960ec0a5e00c24c0f4979e36e786b"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "093469483cd86ecd5b94ba7c9286cc90"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "918042f43c87c27baf1e185c24f73af8"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "e7b15875c053aad2795ec0d49e233d7e"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "81a900e33832343c4bc2239147751fff"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "b536ef0aeec292869accbb98799fe7b9"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "fee56a026f6ac72779207957b7a9d188"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "e22459cf19409baaa57fd5bdd0ae469a"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "42fa1c9cf38337c99436d731c3fa2dfe"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "ef156511ca1b93b31aec56effefde267"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "466bb965e08a84a34a89d57d431e1b0c"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "cb631a1f3d81d1814fbe3ad94afbb688"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "ef50b88fa854a0b123c9e9239040fb27"
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
