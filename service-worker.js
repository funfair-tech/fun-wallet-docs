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
    "revision": "59b26c60fc843d68f52ab21b2b247c91"
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
    "url": "assets/js/10.8c6be132.js",
    "revision": "122f34c2f3675899c7c97fe2bfaf8eb3"
  },
  {
    "url": "assets/js/11.716ed28a.js",
    "revision": "2295ddfa8731d426ad222a0299d9c586"
  },
  {
    "url": "assets/js/12.3c8442c5.js",
    "revision": "ec9a2337d43512b2dd23259ea0ecc21d"
  },
  {
    "url": "assets/js/13.59cfa6e1.js",
    "revision": "1eea03a18862016c36708ca6fae28f65"
  },
  {
    "url": "assets/js/14.7e15987f.js",
    "revision": "8d134c377bf51e21ad8aa09a8465c318"
  },
  {
    "url": "assets/js/15.be633ee5.js",
    "revision": "60aa3e3053c0bff81614474acad5e262"
  },
  {
    "url": "assets/js/16.67421f56.js",
    "revision": "17415cd6e28a72699809b3d6d8b140df"
  },
  {
    "url": "assets/js/17.fc8c04cf.js",
    "revision": "450dbac36ac43d38c0d474d4fc2b5319"
  },
  {
    "url": "assets/js/18.184cf279.js",
    "revision": "bac19542822b221f74b3be4dd8ebbc0c"
  },
  {
    "url": "assets/js/19.861411fd.js",
    "revision": "e9ac6cbefbb481aebc716664a686164d"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.d5123399.js",
    "revision": "6c7c809d8df998282a573218caeea6a5"
  },
  {
    "url": "assets/js/21.31cbfc37.js",
    "revision": "7d1e5de343c174e5fdfa234846007a37"
  },
  {
    "url": "assets/js/22.e28b7fcf.js",
    "revision": "501d72ba7fd937ffac3fb516c48da230"
  },
  {
    "url": "assets/js/23.dfd783b0.js",
    "revision": "34274c2ecd2a6b587f90aca4e62776ba"
  },
  {
    "url": "assets/js/24.ca4fa609.js",
    "revision": "6644b7567fd7c5934e446280f6bf0597"
  },
  {
    "url": "assets/js/25.b11dec33.js",
    "revision": "2bb04ac621479072480f303102157776"
  },
  {
    "url": "assets/js/26.577900f1.js",
    "revision": "d5d86b11a67185ff838ce66fcb53134f"
  },
  {
    "url": "assets/js/27.11d419fc.js",
    "revision": "469434fc08473ea461d3e90e8d4e119d"
  },
  {
    "url": "assets/js/28.753033f3.js",
    "revision": "302d4c551499a9b9b06cbb43ab40053c"
  },
  {
    "url": "assets/js/29.3efcdb31.js",
    "revision": "37cc12786d20f0137b4e255d9fca40b4"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.d21269da.js",
    "revision": "f178b99e0baf84cffa6f424348d2e7e9"
  },
  {
    "url": "assets/js/31.4133c26f.js",
    "revision": "ea9f2fbb49c0bd5e6696db28e3696c5f"
  },
  {
    "url": "assets/js/32.57c55797.js",
    "revision": "07085aca0ef09339454203da5f403621"
  },
  {
    "url": "assets/js/33.f75c8e01.js",
    "revision": "1b1ad1a61de4c5d2a7ef79fea49fd2e7"
  },
  {
    "url": "assets/js/34.5b3b40ed.js",
    "revision": "1d600d91a3ad463d041ecfefe6d95771"
  },
  {
    "url": "assets/js/35.14f0a744.js",
    "revision": "9450becebda4afd67a6a66af68dd6e30"
  },
  {
    "url": "assets/js/36.1a5f5314.js",
    "revision": "6c4aef18641b5706d1caf11a6f3deae1"
  },
  {
    "url": "assets/js/37.94ef9289.js",
    "revision": "4bc8fe3511a90a3304aa60e2ea3151de"
  },
  {
    "url": "assets/js/38.c694d564.js",
    "revision": "930eb6f8de303423761f80ff1b039ecd"
  },
  {
    "url": "assets/js/39.50a9e882.js",
    "revision": "22f9038774313bc331b435b9ac7eb4fb"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.81725498.js",
    "revision": "d25244051d63fbe27666f5f1c3f37075"
  },
  {
    "url": "assets/js/41.c5404307.js",
    "revision": "5e2e92a2c8f023d0aa10c45127455042"
  },
  {
    "url": "assets/js/42.92def178.js",
    "revision": "684358f8e3f8875b2631d9a61240268b"
  },
  {
    "url": "assets/js/43.51d46663.js",
    "revision": "2b60bd40a94e99b56955eb96d9a3de13"
  },
  {
    "url": "assets/js/44.1f73344e.js",
    "revision": "71180e98c9d6410dcac2d4f88c235670"
  },
  {
    "url": "assets/js/45.428c1082.js",
    "revision": "68b8fdb7369105c4346d525e1544fa06"
  },
  {
    "url": "assets/js/46.9894cf60.js",
    "revision": "151d6ec38932ce5b40be91352cc6ec8a"
  },
  {
    "url": "assets/js/47.ac9cfa3d.js",
    "revision": "a5bd6794a011976b39827c2548228cb5"
  },
  {
    "url": "assets/js/48.11dd73a8.js",
    "revision": "bb8cc77f8cdc65ac146e36df3e564788"
  },
  {
    "url": "assets/js/49.bd5d64b3.js",
    "revision": "4e2053f7e2e8480263306485a574afa2"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.07702080.js",
    "revision": "8ff2872a05f55f5f49df9a576fbe1a0f"
  },
  {
    "url": "assets/js/51.70ad87aa.js",
    "revision": "cfd44ce25aced8301ae809dac5416ca3"
  },
  {
    "url": "assets/js/52.0027beee.js",
    "revision": "78cbd6fc86d83e3606cd877a94615b16"
  },
  {
    "url": "assets/js/53.0d1cfaef.js",
    "revision": "e0bf4594cbc5c16ce0d44e444cfe86d2"
  },
  {
    "url": "assets/js/54.567f4895.js",
    "revision": "5a4286171baeda6b774c921d834daa29"
  },
  {
    "url": "assets/js/55.4a8b6f8b.js",
    "revision": "86070382a549bbcd6886dffe430c7fd9"
  },
  {
    "url": "assets/js/56.6e997f89.js",
    "revision": "c9bd83338b67241f5aa1e373fe644322"
  },
  {
    "url": "assets/js/57.cd85e798.js",
    "revision": "d0c41ee2f89f5e6293cfb4ad5fdd0b7a"
  },
  {
    "url": "assets/js/58.b735b570.js",
    "revision": "852290fd7305ca4eda15bb98c6129d98"
  },
  {
    "url": "assets/js/59.edcc0917.js",
    "revision": "ff8ce3e54c13e4f84b459c23cd896075"
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
    "url": "assets/js/8.e75ecad1.js",
    "revision": "58b1fc8d90bb1e5ce14481d221be70e1"
  },
  {
    "url": "assets/js/9.8b652510.js",
    "revision": "51c9115349f5304fc4a7f10f935149b1"
  },
  {
    "url": "assets/js/app.da61f664.js",
    "revision": "bd750f11c82361dce606dbb5d2e4b107"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "2aad97e6e375a99521a5ca0f29a03a7e"
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
    "revision": "a4aaf1e489385ca93338231bf29df7ac"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "c0dff3a8606c94708e88271515764695"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "b165aa556940984c196ae22b9d05c894"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "8732c4bc7179944ae611f92411f97475"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "67c3748a190b6478d05744742c2df555"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "1cd1e89e81a95f399fabec097ddfdce1"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "f11255e8227b4803ce33aa0b7f52a056"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c7bd01f5a934c0f2d4fb92d0a3816fc2"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "da2882b411bc4dba9c8404394afdd6ae"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "b2e601018074b3b2060d2d3b795c1066"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "c90b8699a29f24994ca89160ca269e92"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "db149283e8662c6ce74e46f88570cf3d"
  },
  {
    "url": "guide/index.html",
    "revision": "3ba6f3e123471b823c4448dd3a321933"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "16bbb6ea87d1bb7e09e47e613b3b6349"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "5bc5e9be9db9d1d9d7511393a4312396"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "fe6c0fe76e72805620a45937e7143721"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "d76e3ed654d5a8513517f2c008930e55"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "02a73d2b925b46a8ad558ea5bf3df229"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "a45884056f69ad726e336b0632bcf6c9"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "b5089af535338812df3d0ce0e796a04d"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "e970acebbb122714aa775d26e0b3fef5"
  },
  {
    "url": "guide/information/support.html",
    "revision": "fa06f4b5c6249ceb457b650f9540d645"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "69ae3f1d963c73ce84424276f566a44b"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "ca9fc5702a63c6ecfdfca0850609a9fc"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "f917ce21e16d0ed4bba07882b62eda81"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "fea6b06ca6de20356058e80eb60e1b0d"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "60940e5baa6fa05f2fa187867ecf5e5d"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "f9da5797d297e5f181c4b6b94fc53f27"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "d925858657be45ee213da45498e146a8"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "d8b754f2032dde21b2fa1c6c0ab36edd"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "9b7c865169b9a87b753996cfbde74024"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "ecba209328721cec627aaeb1b93aa9af"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "5ae74f08fa9cfb713562fe13f503f3da"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "bc87d2a941a64fce9d0d6a4c7c5203a2"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "da130617119e925c3b656b2edcdff65a"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "5e028feb6ea0d045edb98ed5b48293b1"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "b27fd245f50ec0520e5c8be3aa9154e5"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "a80d7c4eeed376a538732bd3f1331c14"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "b917e7e61d4c633d5544ebd68c70317d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "29d5f18a107fc75c2d47a2c2b8412f3b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "4544901218fb4b81bc31d6c0610a07bc"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "4085dbcc163a7fb927d6d25ffaec4f0e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "19aa844e6a1f7622fbc974b4a824965f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "ed67d585e00cd2e43eb27854c001493d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "494e214d0ca2fa02e57849428a096d60"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "4d6851b710e0c483e2579f29a3a1da6c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "8e39de9073341a75769294599d18e95d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "77c3bb8a7121c87466f68e67c240fd0c"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "e1e8c060020a4e4a081819f7491189ff"
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
