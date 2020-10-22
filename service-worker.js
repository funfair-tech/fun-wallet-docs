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
    "revision": "2739a07ae55c9662d04d477fdfa44016"
  },
  {
    "url": "assets/css/0.styles.c3a9366e.css",
    "revision": "5e3a20b2ebd5efe2d3b865e5af81741e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b4ad7518.js",
    "revision": "34a07fc1f0288bc7fdaff4ba7ad9e594"
  },
  {
    "url": "assets/js/11.25b57ef7.js",
    "revision": "e1c0faff8678f9148a93ebdf3d749a0a"
  },
  {
    "url": "assets/js/12.e2482db6.js",
    "revision": "e6d6155fbd9b843af9abc8143890acd5"
  },
  {
    "url": "assets/js/13.1c94983b.js",
    "revision": "064ad14911615bbea62eddd3c10db377"
  },
  {
    "url": "assets/js/14.8b5e6a42.js",
    "revision": "5c1aa421502396de2afa9aa543a0f737"
  },
  {
    "url": "assets/js/15.4941638f.js",
    "revision": "80b0c541b5b346b5b29cb59d7da257c9"
  },
  {
    "url": "assets/js/16.b8aab9ba.js",
    "revision": "517764c5c2a6c9a84dabf87501c95a16"
  },
  {
    "url": "assets/js/17.ed990a60.js",
    "revision": "c5893b2dd8ca028aa1d2bffb88a39482"
  },
  {
    "url": "assets/js/18.bd53761a.js",
    "revision": "fc46f4d5f8961fe6e8f64e8c822d9dd0"
  },
  {
    "url": "assets/js/19.55dc7ab2.js",
    "revision": "ceb5c5281ac9aca49392a859607062a9"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.7f23aef8.js",
    "revision": "fe34fb14a7debed3f91fcf82bd97a94a"
  },
  {
    "url": "assets/js/21.5b1acebb.js",
    "revision": "cb682376578be0630adcdd4f4832293e"
  },
  {
    "url": "assets/js/22.a14f6d65.js",
    "revision": "64fcac00f66ed70b178a65f6b216bf4d"
  },
  {
    "url": "assets/js/23.b1c0d249.js",
    "revision": "04e14c9412f167fcefb9c5346dde137d"
  },
  {
    "url": "assets/js/24.aa2721e9.js",
    "revision": "fe87859b889520948d1f07a350374449"
  },
  {
    "url": "assets/js/25.6e08792c.js",
    "revision": "57d31ca80e7e30c9093e9d0a6d5f6185"
  },
  {
    "url": "assets/js/26.577900f1.js",
    "revision": "d5d86b11a67185ff838ce66fcb53134f"
  },
  {
    "url": "assets/js/27.b99f07bc.js",
    "revision": "73a0c96cd05bc1c5dc8e47abd60a1580"
  },
  {
    "url": "assets/js/28.db909e4a.js",
    "revision": "eeeff109b51e3d453846a8c2e513f354"
  },
  {
    "url": "assets/js/29.0b09d7a3.js",
    "revision": "fa4349aca9ae78409c3c5b94aea4e817"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.67157ff2.js",
    "revision": "f803dc010be082c621ab817a9d59718f"
  },
  {
    "url": "assets/js/31.7121509e.js",
    "revision": "b03225993e4c4d2aa91ab3f2f53a5f6b"
  },
  {
    "url": "assets/js/32.aae0b4a7.js",
    "revision": "f0c2fb90287832909085f6157b531646"
  },
  {
    "url": "assets/js/33.6580da89.js",
    "revision": "5209c92dbbd0f63cacd78963ee7e501a"
  },
  {
    "url": "assets/js/34.7038b0e8.js",
    "revision": "c17361ded9483beec074511a1c67088b"
  },
  {
    "url": "assets/js/35.143e4411.js",
    "revision": "6e800cf94cde9500fdb606bb81b35423"
  },
  {
    "url": "assets/js/36.2784d89c.js",
    "revision": "ff873e4cf1cc8e50efe56eaa591820c6"
  },
  {
    "url": "assets/js/37.434c96e0.js",
    "revision": "4f7b4627311db3dd909db6ba6ef17297"
  },
  {
    "url": "assets/js/38.4a0bf3f9.js",
    "revision": "47124a4c1e89210b18b549d106a0f600"
  },
  {
    "url": "assets/js/39.5ba66205.js",
    "revision": "403fc2154cca6f388bc68b840c535e55"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.99f9fac0.js",
    "revision": "e237306aa153097d782eb2de5f4e42df"
  },
  {
    "url": "assets/js/41.745bb636.js",
    "revision": "096e81e88a98567766dc875bcea3d554"
  },
  {
    "url": "assets/js/42.23c61524.js",
    "revision": "2672e844d9d627267a19e3c958c9e3b1"
  },
  {
    "url": "assets/js/43.98a998fe.js",
    "revision": "242a84245b568f30a9f8f7ffc9d095a2"
  },
  {
    "url": "assets/js/44.de531133.js",
    "revision": "aa704ec36dd4526aef27aea64ed56f49"
  },
  {
    "url": "assets/js/45.f3c9aba7.js",
    "revision": "9aad8e22ce5bfef555b487a2f1b5a9ce"
  },
  {
    "url": "assets/js/46.513babf4.js",
    "revision": "bcfb2d8e98253d359233114879992a2d"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/6.8d3fee9f.js",
    "revision": "91382e3bd933ef47346aa2d9ee022bb1"
  },
  {
    "url": "assets/js/7.1d7dad65.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.2ee958ac.js",
    "revision": "0e96e4625435295dceb004253368ce68"
  },
  {
    "url": "assets/js/9.1e0b8aed.js",
    "revision": "9679998f90c54eeeeed4b8d16de0e68c"
  },
  {
    "url": "assets/js/app.48f8a85a.js",
    "revision": "96f2432224d59d7d1afe4a17d186cd95"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "07ece2ca1d6814c85f6ea5314101277c"
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
    "revision": "44d80d6af69f00df6f587243cfb40d4c"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "d38aca1c848390c333854fff15258804"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "7c86457a476541ae7fe25c962c8f5844"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "3773b6934ea1900df85ff9564fb0df70"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "4140c9fd55a5d8f2747b965f2998b258"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "7024cb8de0242acd87a2f7596c1fc3f6"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "a7fe621ab8b39ecd99a77e3106f2d759"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "55f2b192c145424c4b3e507e744a89b8"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "e675466daaccff998647ec001a42ef10"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "a6eb53a861640408af27a7ba733c267b"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "23356c5892e63ea14f2ca2d7bd3578b1"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "dc5a3ce5e47eecc2522208dd0fb74d53"
  },
  {
    "url": "guide/index.html",
    "revision": "e9a8a7cd648c0f6202c731a284ba68c5"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "f5b5b02ac68da9cc7475cc26d75d2938"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "bd7a2be0c67ad6c7cc917929b7249547"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "e06ab55b04957fefd385f49f20348a61"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "dc732add6300998fafec257c5fae6032"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "76d0449e7c014c4a3c88fd40ca6c6e19"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "90e690c0b53ef110bf00072ae78dd99a"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "3dec067c76eb1b318b7657126c89231e"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "4c4eb318a9e5a2fcc93ddb7b2701149c"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "05ff96fe0ab488fc42a4e2915d5076bf"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "7f375e7f05636a8b4f6767be07a26020"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "da68c82cf6f3f0565653ad0711b3c753"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "ccd75a40b1ceb63076112f90d445916c"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "382a983a94d30c633bc07c7b64be4072"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "1c337688c165414071a92fd329d8782c"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "55508e55202b5dd3d367f9e969c95299"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "7d8e4b2b60ec127b6a4efffcf83e5863"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "ff92227ced8b5f0398be461740f0847c"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "0495f193c46d4683c83178350452bfe6"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "a01e378fece1f10d247b06d9269e410b"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "b01f93cfcce4395e37db30ae8e754584"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "aeba26a4ecbd41cc1fac322da5f6c919"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "4cb2e7ff9edc2642c28d8d4f6a855843"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "d2776314e792a277723e72b562ac8184"
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
