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
    "revision": "f73ca3bd2dfb1312e56a698eaa6287c9"
  },
  {
    "url": "assets/css/0.styles.2a23e29f.css",
    "revision": "a859e8804e310dd9e3eddeba01811058"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b8a1f6fe.js",
    "revision": "dbf2240f7de519756062b0fde5d11764"
  },
  {
    "url": "assets/js/11.ca85f405.js",
    "revision": "7cba8796eea04eb2b718171d389ad5ec"
  },
  {
    "url": "assets/js/12.269d10b3.js",
    "revision": "8a3988a7322f922b8693565598080d63"
  },
  {
    "url": "assets/js/13.947acdc4.js",
    "revision": "8a6c182740e7f8e51ed7858a1e1ca924"
  },
  {
    "url": "assets/js/14.fe80ad1b.js",
    "revision": "bf03338ecc4c9efbeaadcc3063ad2489"
  },
  {
    "url": "assets/js/15.b85da88d.js",
    "revision": "aa4fbbc60871d30571fe80ef5f741cfd"
  },
  {
    "url": "assets/js/16.09bfda8c.js",
    "revision": "040acdae141e5175d9ed976617b7ef33"
  },
  {
    "url": "assets/js/17.607835a5.js",
    "revision": "e9b85b42672279bceed54ffc48719acb"
  },
  {
    "url": "assets/js/18.91136cea.js",
    "revision": "407c9ee87c9eba474e8dc3e42b0cdbf9"
  },
  {
    "url": "assets/js/19.2b1547c1.js",
    "revision": "7e424514e7f2dabcafecf2db39e3aef5"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.e355ff36.js",
    "revision": "ba99bdfb18db18b8bf1e52a8b8472ab4"
  },
  {
    "url": "assets/js/21.b27e89ba.js",
    "revision": "8e24792287239303afb20498ef0fee3c"
  },
  {
    "url": "assets/js/22.61623794.js",
    "revision": "4670dd3d5990f74a4911e58fbea4bda4"
  },
  {
    "url": "assets/js/23.47a3502c.js",
    "revision": "6e324006f73b3a8496ed30665db92f1e"
  },
  {
    "url": "assets/js/24.acf42d1d.js",
    "revision": "e4203a38ac8067c66dff0be694bc0f5c"
  },
  {
    "url": "assets/js/25.d9f196eb.js",
    "revision": "20d19c1e691e3df1699b1b9697b5a59a"
  },
  {
    "url": "assets/js/26.21ed3bde.js",
    "revision": "8301ffc7d8fccdccbe96daa6db291888"
  },
  {
    "url": "assets/js/27.8568e43e.js",
    "revision": "6db0221d3db84a2f01677ccbd05d4102"
  },
  {
    "url": "assets/js/28.d2beddbc.js",
    "revision": "ec59b9b0902226b3cd6e73f20c7d7c23"
  },
  {
    "url": "assets/js/29.2f711deb.js",
    "revision": "e2d5b9cb4ddcca8eef756020f07757a1"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.3d7ee580.js",
    "revision": "0a4f064e3e35e1be691f9999214b7765"
  },
  {
    "url": "assets/js/31.55639adb.js",
    "revision": "d20d4c087fb131c6f54863489bbb5cb8"
  },
  {
    "url": "assets/js/32.ec3ead67.js",
    "revision": "bb813fff3d7626051c4e8eacde5c4947"
  },
  {
    "url": "assets/js/33.c606aa0b.js",
    "revision": "5898820e32dbeb1aa5bc464f4f98940f"
  },
  {
    "url": "assets/js/34.ec65415e.js",
    "revision": "71ae2bf103dd20ca68656fd1817c9b9a"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.86e2f3c0.js",
    "revision": "729268742f9a739b2263693e87c6cc4b"
  },
  {
    "url": "assets/js/37.eadcddb5.js",
    "revision": "e034abf8469c1f44c76f6c92900aca42"
  },
  {
    "url": "assets/js/38.342dd4a0.js",
    "revision": "695b921a30235e80c59b2f36f2af2037"
  },
  {
    "url": "assets/js/39.9faecb33.js",
    "revision": "dec6530eb75f6a067c43fa39f97fdfc9"
  },
  {
    "url": "assets/js/4.903bb4c8.js",
    "revision": "686f40135815e1b92b21d077b9867af9"
  },
  {
    "url": "assets/js/40.7bcfadf5.js",
    "revision": "4b167392d7ab7532aa741cf54c681874"
  },
  {
    "url": "assets/js/41.40c08d98.js",
    "revision": "85384551cd36f94924f836d1b4d4aa42"
  },
  {
    "url": "assets/js/42.8f4aee7d.js",
    "revision": "ff2e448f2584ab83559c30b091ba04e9"
  },
  {
    "url": "assets/js/43.43725857.js",
    "revision": "b8c7b07b14d0fe1f2bcf8a42ba6405d2"
  },
  {
    "url": "assets/js/44.612967de.js",
    "revision": "c8925dfb617122886aa6ee82541094a8"
  },
  {
    "url": "assets/js/45.7bfc1ab6.js",
    "revision": "af29a5e912cec19677ff5495e2037078"
  },
  {
    "url": "assets/js/46.7626d943.js",
    "revision": "6107e78bf59d1676544c2ed777a7da06"
  },
  {
    "url": "assets/js/47.b771eb90.js",
    "revision": "d0ae9b83e4d23331d4fcfc583e80b9b7"
  },
  {
    "url": "assets/js/48.3c37fa6b.js",
    "revision": "dbabb5db42addecd03e37b6c87e22f59"
  },
  {
    "url": "assets/js/49.9665e80e.js",
    "revision": "e440bbf1f2f1af00a60da5776cba627b"
  },
  {
    "url": "assets/js/5.b1c6dba4.js",
    "revision": "8f832ef27a0f19d0c406e12204eaeec2"
  },
  {
    "url": "assets/js/6.68dfb2dd.js",
    "revision": "e30613e1f0553878ab6b48b03cab9b93"
  },
  {
    "url": "assets/js/7.57e275c0.js",
    "revision": "af5d1acb85b1a2af4dd96567718358d6"
  },
  {
    "url": "assets/js/8.a1823884.js",
    "revision": "17a529262d2d60816b70d47d525b756f"
  },
  {
    "url": "assets/js/9.06544d44.js",
    "revision": "4175d51a09db4d93c8f307ba9effb6bc"
  },
  {
    "url": "assets/js/app.e2d52eac.js",
    "revision": "b1414b9689a92eccdddebe89d901474b"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "21b098a16f98c6a8b7c342ad2d638369"
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
    "revision": "e70c8e1df2e7b8618747e4627c6cc686"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "52f669994a611074c265707b9518f114"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "4782a49c8f6dc19ca7c68241312c235e"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "ab035169d6d1e4fa80ef94389ed08e86"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "6bbfadcaac9f2b2dbd4421cc66bce32f"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "c8648e724d8947e4bd71a9000a8c50eb"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "b804f63b2f822d0103c4ee6ab7aeee53"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "b2adfe3f5029c65db5d99124d837ccdc"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "3041718471d9c4faa8446b30f4ad2b53"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "78f7e29bd1e93732e90cc372c50b8e8d"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "dc332a45d5c9cdc51ea1cc5e805f20e4"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "9dbe530f25a0df04cfcb4c327fac5c75"
  },
  {
    "url": "guide/index.html",
    "revision": "b467ee16982a04d7162cdc2798cbff01"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "d2cfe63c822246a56a3c11e8098cda6c"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "d776d6b945a04d72e69926f54dae6333"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "02482774b6642b4d865cf537371a1157"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "a111b34aef7f6cab819bc55ab7210510"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "e747c5fb4b75d42ec81531b2d4c0f3fa"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "9feac37e72ab4d7ba602044668abcc16"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "0ff898a6150b9597f05cf56fb627b2e3"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "6ae84851011e9fb8507bcd68459a84df"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "1cf46ed456d9eb5a43b064cd90b1f8de"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "214baa6e6ee194d2cb80345ab28a5e5d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "64265cedbf39b8eb165a18290d5586f0"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "7cb5a57dbb3846c0b9486eb1fb3e7854"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "19b005cfaea75adc233b8f416c7b81b4"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "7d7e3753380101b89b56a7332301cafb"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "3fa18bee425071f0468bb14abf7c9554"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "695570c5d1cb6cda3bdc4652bf7afa0c"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "6f5b9a781cfc9f131cfcc44b1ad69295"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "191edc95de3248e875a2fad43d072292"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4c2be7fccc35a872f06f08cb217278e6"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "ad067f0df61fb006c4a95c32ac597dcb"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "61d46384e181476ebc4989b69c33e217"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "dd585b3ea266e1d1cad4a43b46690133"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "1c593a7727f15484879e845e02ed41c2"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "cbec5592c618b418b0501e0a24c54e93"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "934f91d2f33832f4d58a651df71a775b"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "249bcd24b3035047ddbf140ee622c434"
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
