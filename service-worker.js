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
    "revision": "7bf38cd6f78d21166dc4dbd459db3fa8"
  },
  {
    "url": "assets/css/0.styles.698cab01.css",
    "revision": "cabb7307b3e9fd46d26829046be1b6bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ceeaf9c2.js",
    "revision": "550c1aba81a8ba326ac442a74dec569a"
  },
  {
    "url": "assets/js/11.bb6b6d94.js",
    "revision": "1d991886b9457e8101e7a2130df7798f"
  },
  {
    "url": "assets/js/12.e41eab8e.js",
    "revision": "58db8f9a595df0ec06e5834291127daa"
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
    "url": "assets/js/15.b778d2b0.js",
    "revision": "689e40672505bb6982c25de900b2f290"
  },
  {
    "url": "assets/js/16.6f989771.js",
    "revision": "037b50623553a9dc24e71057dd27d176"
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
    "url": "assets/js/19.5bd16690.js",
    "revision": "7a7c6c49d3736b2e0fd3bbeaa634d651"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.96ab54a0.js",
    "revision": "c26fd39d003f328c5460baf5aa678eb0"
  },
  {
    "url": "assets/js/21.5b1acebb.js",
    "revision": "cb682376578be0630adcdd4f4832293e"
  },
  {
    "url": "assets/js/22.d344ac57.js",
    "revision": "69743de49a91cff4bea6ec8481940694"
  },
  {
    "url": "assets/js/23.cf663bf7.js",
    "revision": "c390541e81f514a8d2d7ddd3ad974460"
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
    "url": "assets/js/28.1e4ca1f5.js",
    "revision": "90f1e54a4013d92947c6207d539138d4"
  },
  {
    "url": "assets/js/29.8d0c39ef.js",
    "revision": "bf6ac334c9c82d78b8c39aa07fa02626"
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
    "url": "assets/js/31.ce0c592b.js",
    "revision": "3b38d3e75304ea46883fef666f294930"
  },
  {
    "url": "assets/js/32.90a129e1.js",
    "revision": "4d46d69e8ee957241e8c12d8deab7a22"
  },
  {
    "url": "assets/js/33.6839f899.js",
    "revision": "7a84c36ff1733e175ab212143ff969c2"
  },
  {
    "url": "assets/js/34.a2b3249c.js",
    "revision": "a3452ddd95be0a31c75194c57ee83d47"
  },
  {
    "url": "assets/js/35.616d46df.js",
    "revision": "dc6ba16a3332ef3934a8efeb449e8493"
  },
  {
    "url": "assets/js/36.2a182025.js",
    "revision": "2a0f4ae6a9542b583906fd25e1cad057"
  },
  {
    "url": "assets/js/37.bb149d0d.js",
    "revision": "edefd9a8e07402fda5062aee0a926d03"
  },
  {
    "url": "assets/js/38.4a0bf3f9.js",
    "revision": "47124a4c1e89210b18b549d106a0f600"
  },
  {
    "url": "assets/js/39.8c3d1067.js",
    "revision": "bf55d65e0975200905470f49c88d0d61"
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
    "url": "assets/js/42.0808767b.js",
    "revision": "51be4c439fa1b27beea8cbace587893d"
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
    "url": "assets/js/8.65cfbfe1.js",
    "revision": "c9d1a52675054b262a523bacb953664d"
  },
  {
    "url": "assets/js/9.903b985e.js",
    "revision": "441f882bc4c531340e6dff42259895c6"
  },
  {
    "url": "assets/js/app.55c9c568.js",
    "revision": "c3def743318db9827b66cf973b55d55e"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "8be6e7715a8cf1844bc2a3adcd1817f9"
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
    "revision": "0d8b5535587fe83456a545b5baf10554"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "78626df4133ebb98c056194a2425074a"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "6e8a148ac41920cdcf9ce03772f0b053"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "0947ae95f801d8301782ae77628a6f46"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "c25809c5ff560229106789fa071a3b45"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "bfb274400a91fa39d4bf4cd202d00e89"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "57c9a0789db4ec382c8bfb60b9675e00"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "0b4e0a75cc64dec6dcd56ab1e867245a"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "6210a4711f871a7c80bb978b6ff7e609"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "ad6f88a740fb6ab5b9a4861499a65f1e"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "0de56277915f3a0c29e76118be1d9af9"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "7b2f08c0f9b912ff2e3ba82ec2c21870"
  },
  {
    "url": "guide/index.html",
    "revision": "8fe052685789ec780694ac5887f7249f"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "eb65f22cd63ff9b02d796aa481d75280"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "9a8084d134e40ccd34db02b66923f98c"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "c4eea9a5f10551b92de1de160881480b"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "7bcd36fbce88bf4932e9a39949973954"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "cbcb26449f139b996ca8c93a411c813b"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "b0ffcb1782b4d1f2672465df8c06f5e3"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "dad2b302f26f3a46b9c750c1d776cae6"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "5183f47361e94a290bbd60bcf1e7c504"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "cd17dc5053b9725195eb4c959b2ba119"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "9c7726cfd45ca9cb9b431b4ce1b457ea"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "afc4b625d0673b763796e9b32a611c35"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "5a462fb706c1d885eef596ca8a3d6fa8"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "30d532315588dbf56076dee335a4070d"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "e765c38261853d2a80881f77a46ae0f8"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "a66c5b6fc3ede01008478c6a6f527e63"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "eb75b1388c3b579dbdc1ea3d5a144f60"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "689364ad8e7621eb77542481deb9bb88"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "25706bcb4e294df218a57e76c39d4172"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "8f77d36dad6b5c076a5631d2bc3fd2a3"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "48fd4d8cecea9cf6b854fa09e9be52d9"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "5e13cfef8b2559ce5f168fa0681a59af"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "cc496d63762c8bf613cb53ce6438222a"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "aaee7edcf9a4ff4ff643c10ceeaed063"
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
