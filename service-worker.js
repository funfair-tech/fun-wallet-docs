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
    "revision": "a9a1c8d59b33e7cdeadf86286a9bf5f5"
  },
  {
    "url": "assets/css/0.styles.68a09f45.css",
    "revision": "6b1a3ce0de6a2c159b0982bd5d184246"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2eea2b17.js",
    "revision": "a0f286b13245696ac552b7ee76c596b9"
  },
  {
    "url": "assets/js/11.c8298937.js",
    "revision": "d4bc2de5f050d81b3822a209b935b31a"
  },
  {
    "url": "assets/js/12.6aaed44a.js",
    "revision": "2c5c8b9c308de8447cdb2e76755a571e"
  },
  {
    "url": "assets/js/13.f08174b0.js",
    "revision": "a2cbe64a24411cd52bbb75f93d1bb65c"
  },
  {
    "url": "assets/js/14.28cf74c0.js",
    "revision": "b922187e603555022c551085e92a360e"
  },
  {
    "url": "assets/js/15.3ac9e089.js",
    "revision": "d34867c357fe15834135d2ab233fbe72"
  },
  {
    "url": "assets/js/16.9b739762.js",
    "revision": "c43a9dc5e594cbcf399730ddc7465c60"
  },
  {
    "url": "assets/js/17.baaa0869.js",
    "revision": "69cc42d844cfdf45d5d8baf63b34318e"
  },
  {
    "url": "assets/js/18.9dcf42f5.js",
    "revision": "12e571f850f3335267e1d802bbfd9f8e"
  },
  {
    "url": "assets/js/19.2c5d8cd4.js",
    "revision": "65ec401e88b75d9dfce78bdd48e86d00"
  },
  {
    "url": "assets/js/2.09b9bab2.js",
    "revision": "7a5e0cbd8302644379d8c77b7280f31e"
  },
  {
    "url": "assets/js/20.3356354f.js",
    "revision": "d7edf5bafeb8c16a2a16d3aadd597cda"
  },
  {
    "url": "assets/js/21.27434e20.js",
    "revision": "69e87f4d562fadda89e73d4b6733764e"
  },
  {
    "url": "assets/js/22.01ff1d72.js",
    "revision": "169ca3daa65f68842919f44dc4b13f68"
  },
  {
    "url": "assets/js/23.b874d1d0.js",
    "revision": "0ddfd5eb5395541c9b4c4a803479be93"
  },
  {
    "url": "assets/js/24.3852327e.js",
    "revision": "2acd8243b52d5227292ebf6f6442046a"
  },
  {
    "url": "assets/js/25.f27168cb.js",
    "revision": "429cc4538433d1b1b2d321da19166d0a"
  },
  {
    "url": "assets/js/26.fdeec242.js",
    "revision": "f122d7a6cd3f90e302d14738a4887ba6"
  },
  {
    "url": "assets/js/27.40dc9058.js",
    "revision": "909ca65a971bf00ceb1028c4909d0dc8"
  },
  {
    "url": "assets/js/28.0406f18e.js",
    "revision": "864d0f847221ae5616f6c7a4e2a9ee6c"
  },
  {
    "url": "assets/js/29.5e34e350.js",
    "revision": "9e3165d0b914c9de176fbb655f0c04f3"
  },
  {
    "url": "assets/js/3.6286e9cc.js",
    "revision": "df178c98368c336d5775a2d0033de517"
  },
  {
    "url": "assets/js/30.77415bd0.js",
    "revision": "92e25e26587bdbf61b0266de98fdec6f"
  },
  {
    "url": "assets/js/31.676fd47c.js",
    "revision": "e3bdfa7c69d70714efebb7186760b799"
  },
  {
    "url": "assets/js/32.4334bb51.js",
    "revision": "3b2da99a1635aa940bae91b5c63a5078"
  },
  {
    "url": "assets/js/33.ed605320.js",
    "revision": "d09c0bf6627583a82940809b1e125e63"
  },
  {
    "url": "assets/js/34.acfd426a.js",
    "revision": "b5550211247c488020003c1cd94bb351"
  },
  {
    "url": "assets/js/35.089ab940.js",
    "revision": "fb6feb559697e413d039846669956886"
  },
  {
    "url": "assets/js/36.3e4c38f2.js",
    "revision": "78141619a882fceebbd9bf3abc094870"
  },
  {
    "url": "assets/js/37.7d2733e9.js",
    "revision": "7ed30d323d031f6d4a4d97d6ed6ea7a9"
  },
  {
    "url": "assets/js/38.3062b37f.js",
    "revision": "8cd56e8ed9bbc4a081bfdef246e0564d"
  },
  {
    "url": "assets/js/39.6e788f06.js",
    "revision": "a3d8dacfe24c1d9d241797f97c74c9c5"
  },
  {
    "url": "assets/js/4.5884f682.js",
    "revision": "d0a3a99cf9a26f441851e2f928acac59"
  },
  {
    "url": "assets/js/40.d10db248.js",
    "revision": "64b45b0b2fd10bcfe34d8670a623c71e"
  },
  {
    "url": "assets/js/41.f47de488.js",
    "revision": "b5d8ea680e0524242579d01fd59ca6d1"
  },
  {
    "url": "assets/js/42.e53c8df3.js",
    "revision": "029ba27ffd449a3e1293ebd07f79d644"
  },
  {
    "url": "assets/js/43.f0c44337.js",
    "revision": "abbe66aaf5486706d231208553fc47ab"
  },
  {
    "url": "assets/js/44.37356607.js",
    "revision": "a49633eb8409f9de502d77268fd65323"
  },
  {
    "url": "assets/js/45.c93ece26.js",
    "revision": "f259373c4c9bb255de7a0cc97b4b809f"
  },
  {
    "url": "assets/js/46.58151940.js",
    "revision": "4eef144628462752e1a5df271801af4f"
  },
  {
    "url": "assets/js/47.e43e569c.js",
    "revision": "27e5f59006628975962d04c400541349"
  },
  {
    "url": "assets/js/48.1332f9d4.js",
    "revision": "dbe8ec3b2b0ae221a0f6cef84c1eeab5"
  },
  {
    "url": "assets/js/49.279fdb2c.js",
    "revision": "711a729dfff5137c14328bf6605db7cf"
  },
  {
    "url": "assets/js/5.02fe4c16.js",
    "revision": "ae66d32ad9064027f90cf4e8ab0cfb47"
  },
  {
    "url": "assets/js/50.e18637fe.js",
    "revision": "ae8cabd0766c045f99a3adac248ee715"
  },
  {
    "url": "assets/js/51.e7e7c263.js",
    "revision": "39693b02a1655fc931f75615851ff38d"
  },
  {
    "url": "assets/js/52.e76e5a08.js",
    "revision": "2fb99c2aced9896bb9bb261c91fcee04"
  },
  {
    "url": "assets/js/53.8af981dd.js",
    "revision": "426c95302eb2e57abca3d200a6ca6a02"
  },
  {
    "url": "assets/js/54.2fa19e19.js",
    "revision": "180436e2a8cc7fb8b10bbc4ae05556f8"
  },
  {
    "url": "assets/js/55.439bf842.js",
    "revision": "4913092cbed523ed4486b57979378cbf"
  },
  {
    "url": "assets/js/56.3104e1e4.js",
    "revision": "3ae2d971e064f73ed49efe549f513461"
  },
  {
    "url": "assets/js/57.39e23ac6.js",
    "revision": "a4805445791cf51ee5450e1f4adfcd5e"
  },
  {
    "url": "assets/js/58.087f39b0.js",
    "revision": "9273ae698b9a15b410a9cb3a6cd43329"
  },
  {
    "url": "assets/js/6.36ddba87.js",
    "revision": "72d20501381a5eee3757055a5c1b76f0"
  },
  {
    "url": "assets/js/7.3ddffe18.js",
    "revision": "ce08c2f89ce6f325f927859f41fad52c"
  },
  {
    "url": "assets/js/8.ba8a460a.js",
    "revision": "00529b85a09dfc8f31f98785b3e446ce"
  },
  {
    "url": "assets/js/9.00ba6992.js",
    "revision": "57e2cf30ed1dc8f6af196de17b6608b2"
  },
  {
    "url": "assets/js/app.c1a6985e.js",
    "revision": "8383246fa1821e3b901ff4f0da94c663"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "62732dbf675befa39f9641318c260679"
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
    "revision": "ddef40889c763a4358689b51d5bcf9d0"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "767063aecd405761a37aac9d59e6e024"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "ee06154da17869e065283661f92fe414"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "d24b59818ac2b24ab327ebc47a082694"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "63f31367ed8f052a83aed561babb76f6"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "cf79f3c5e8a93d1a16ec0949dcccd357"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "0c24acf941fec6d752338aff014c961b"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "2a276096dedec965cd80ec05b6c23133"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "09eaf55905876fd9834a793f8bf40374"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "a83863a4e9878b62185df8f08af3c419"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "381f8e16340baa1c0cf9df5c9def2e5a"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "b89ddee584c6a8d70e6653ba0380af47"
  },
  {
    "url": "guide/index.html",
    "revision": "b23e21499e2e0255e5d23efa72d9a45b"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "26cc0b4ad0e01a07b1f88836a8cdb884"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "046a5799d7be381e2140accf466a20a4"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "703d0a5fefbbb182bcb24b10de75b1f8"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "2375a46d788fd13b54006796b953100f"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "980d65603f55d698a8feedb93cd313b6"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "bec6d6c053e3e86c9c1d04ffe69030a4"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "13962107b694bb8fab8e33e3736dc690"
  },
  {
    "url": "guide/information/support.html",
    "revision": "2ae541b9f5c7aca9d305ba2b2d0005fc"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "efb1b52dbaff33a9300035758ec601c4"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "235b63a9e8214fceb9000c5aebb0757f"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "43197b27ddafb78d55bb656deac66afe"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "3cf1e9cbeafe8a3d2067326e3837130f"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "7fd2948a4f262645cb959ff355277444"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "5e1bff91d29da7c93c14b5f056053af1"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "db8b47fa76ebe0df4d6ca848b5571e08"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "3994adc23b04d4c1beaad831c742fa0b"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "2c8cad96eada6c09a391bec81797b369"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "9dfd0d595e142a3c77e3d1fedbb38a54"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "686d17a96e0b8ca50e7c2419de3c5147"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "87fd7131bc19152b86abd0a1f323150b"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "f811b2bdd1f6cd7ddf1188530b69dfa3"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "35951470c1fcbe1d5946822b67079147"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "7898c4cb12ee2a85bd9c154dce8f389f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "1f15375a143b062f24ad14474fb05c0d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "8c7c16f7bc6750e4afa64e40fc390bb4"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "f57fe8b349477582b8ad36560b74bc0b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "bf25e10e2e9ed55ff4ef786362092bde"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "fc498d476a23a0681139d8a1af9b15f2"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "115fc180aeac4738a37d5a02d0df7683"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "ebe2b5b7a0a6d5197af0ed4786f95825"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "73b8b5a4ad20e57549f3ac717a966757"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "f0a552474a80d03afafea5004f3baafd"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "ca6429deb05d8cf5b5f6c13c09f98747"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "ceeb7c3257d47c43f4d0bffc9aca8442"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "ab7d9447f0585e594c12159181227b44"
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
    "revision": "a8fa8ad546a7b08ca8775bcc53f18173"
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
  },
  {
    "url": "sitecon.svg",
    "revision": "dede5e5e72e99d953d2f4567040f9177"
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
