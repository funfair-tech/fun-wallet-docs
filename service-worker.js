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
    "revision": "efbee01a084c9a0795469baf1d527ac5"
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
    "url": "assets/js/10.f465d623.js",
    "revision": "3fc0885df1acfe5d03011d283f5edd83"
  },
  {
    "url": "assets/js/11.b6f0cf4d.js",
    "revision": "6a4d491777cca0d3cd798d04b20a644b"
  },
  {
    "url": "assets/js/12.4534d24c.js",
    "revision": "53c1da54d36847e007f842bd61919ef1"
  },
  {
    "url": "assets/js/13.49e72db2.js",
    "revision": "758cbd8a49c23e74c19c23f1df39e354"
  },
  {
    "url": "assets/js/14.1933510c.js",
    "revision": "3adb2610bd185c0b4327949c1453efcd"
  },
  {
    "url": "assets/js/15.acdc3a18.js",
    "revision": "a320042f2b61ee71fa28d9d96424f841"
  },
  {
    "url": "assets/js/16.d7520f65.js",
    "revision": "3529931baec8c94b354baa9573e7e814"
  },
  {
    "url": "assets/js/17.ad816693.js",
    "revision": "89505373b6d35f56518d7530f04e455b"
  },
  {
    "url": "assets/js/18.c8167421.js",
    "revision": "698aede7f49a71e72a4b036b3e2ed7d8"
  },
  {
    "url": "assets/js/19.2d11929e.js",
    "revision": "9ad99256d93b41964443c285aa1f3ec3"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.d7c8ac50.js",
    "revision": "7b7b8d7d86c7ec1a7c5415c50ef70363"
  },
  {
    "url": "assets/js/21.63a0d5a3.js",
    "revision": "9fbe5069405843b56d2da668ab2eff53"
  },
  {
    "url": "assets/js/22.a3231568.js",
    "revision": "3df2583f2e2ae98837efda70615a0417"
  },
  {
    "url": "assets/js/23.e031c7da.js",
    "revision": "142fc5174aca4302b3f29b896a0c3b6c"
  },
  {
    "url": "assets/js/24.adda040c.js",
    "revision": "a07a091135a43b3b86405150c0b4b589"
  },
  {
    "url": "assets/js/25.096ae099.js",
    "revision": "e9d384155f40fd174b614c531cecafc0"
  },
  {
    "url": "assets/js/26.15267995.js",
    "revision": "eedd098fe7ee6f6b8189aec5b4d02a67"
  },
  {
    "url": "assets/js/27.0bb3af39.js",
    "revision": "8cc0de95000e0166beffedc8696304f0"
  },
  {
    "url": "assets/js/28.58b6a2ed.js",
    "revision": "9929031a9a78f366ffb50cd628656eb4"
  },
  {
    "url": "assets/js/29.248df999.js",
    "revision": "2a23ad804a59307371fe8ccef6c971ea"
  },
  {
    "url": "assets/js/3.24480461.js",
    "revision": "3b76135aa28abf2dc60e165db273d5a0"
  },
  {
    "url": "assets/js/30.d71ac58b.js",
    "revision": "18a9aed535a5feb7962b54272f1ad73c"
  },
  {
    "url": "assets/js/31.f55ad373.js",
    "revision": "70d3e449704c54d77fe775fd20e51f4e"
  },
  {
    "url": "assets/js/32.a168b0de.js",
    "revision": "74186ffbcf37b2a7fe388a6ccf3e2132"
  },
  {
    "url": "assets/js/33.d1fc6dda.js",
    "revision": "1e063bda44f5ed134548536f30408276"
  },
  {
    "url": "assets/js/34.dcd0dd4c.js",
    "revision": "5e2697f5659d65a078523ca415cc6ea6"
  },
  {
    "url": "assets/js/35.f29b1f95.js",
    "revision": "fabafaaa5b82f77496f0f5851a903980"
  },
  {
    "url": "assets/js/36.9df48da3.js",
    "revision": "baa54d9c28b0f6144667a028d0bccb75"
  },
  {
    "url": "assets/js/37.3feaf227.js",
    "revision": "a950867a720988802f2b2d4e65c0aece"
  },
  {
    "url": "assets/js/38.0d2a17d7.js",
    "revision": "f1b33a222a767b92cdb726dea3ae3afe"
  },
  {
    "url": "assets/js/39.0c9355c7.js",
    "revision": "64a0fbd028c41bfb5e7520f94bf67ac2"
  },
  {
    "url": "assets/js/4.6ff6bccf.js",
    "revision": "0752f5b80041ef1c24f58f14192dc51f"
  },
  {
    "url": "assets/js/40.4109aa32.js",
    "revision": "b248bde48199f1494f53a40ed84d1585"
  },
  {
    "url": "assets/js/41.a32b9809.js",
    "revision": "fd95e10b534a9fff2f3eab2c6cda4e64"
  },
  {
    "url": "assets/js/42.102fa344.js",
    "revision": "72c60430ce4542bf7f3484db76807fa4"
  },
  {
    "url": "assets/js/43.6d12e945.js",
    "revision": "57e3ce2f00042ec083f15e750195961c"
  },
  {
    "url": "assets/js/44.0e301eb7.js",
    "revision": "b0051fdcba44f92d2d3a41170fc77711"
  },
  {
    "url": "assets/js/45.3149761d.js",
    "revision": "81e6491bdc5e3112593405959bef17a5"
  },
  {
    "url": "assets/js/46.2252908c.js",
    "revision": "22e6ed5f247a1e1578f02dfd3ab4a332"
  },
  {
    "url": "assets/js/47.b928b068.js",
    "revision": "701c4fc2250cf4de859bb7dae08e2baa"
  },
  {
    "url": "assets/js/48.38b8ed5b.js",
    "revision": "f147e3ccb42ae1b918d7dd599a439cec"
  },
  {
    "url": "assets/js/49.f8677a9f.js",
    "revision": "ff0cbc3b63cf008399916b52e82434cd"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.ef033c87.js",
    "revision": "aebaa5f1c336047fd3514195e0f08772"
  },
  {
    "url": "assets/js/51.433dff1a.js",
    "revision": "d3efa6f3242b9e348ae5ba69ed3cb65d"
  },
  {
    "url": "assets/js/52.a3fa49e0.js",
    "revision": "5f316b992911e5849dbcf56af9602a0a"
  },
  {
    "url": "assets/js/53.0b57f8ff.js",
    "revision": "1416b2fb862ab6d4e75da5c11afc38d3"
  },
  {
    "url": "assets/js/54.2a818623.js",
    "revision": "bbb5fb299b40a6d56d696983cef2653a"
  },
  {
    "url": "assets/js/55.e8d1dd66.js",
    "revision": "db7e22e17ec9224927fdcd804e9f7bfc"
  },
  {
    "url": "assets/js/56.4cb59e12.js",
    "revision": "5a346083ec3d99df0a780f362436fe11"
  },
  {
    "url": "assets/js/57.1288cb59.js",
    "revision": "863051c45cfb97b6ae3fcbd04dfa7680"
  },
  {
    "url": "assets/js/58.c4e5f675.js",
    "revision": "6639caa65470bb4e41e5d99b37756100"
  },
  {
    "url": "assets/js/6.f6e3edd5.js",
    "revision": "a65022365832aa5edcfc32f1d0052e47"
  },
  {
    "url": "assets/js/7.1d7dad65.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.ba002602.js",
    "revision": "c0df522ace047d132c38428d4810d51c"
  },
  {
    "url": "assets/js/9.a7637554.js",
    "revision": "88a1542d7792044bda11a015b8b6b69e"
  },
  {
    "url": "assets/js/app.0a9a74cc.js",
    "revision": "95fdc14cc9a00999bf6c8058f8cf675c"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "3cb3569eb69d85e6696ff8de7e54337c"
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
    "revision": "55d82fa7969604062d9ecc20bb015511"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "6995fccbf2ab9217a045e51227483d6f"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "e455bc058c9c6377ecbfe30119f5ecf6"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "00cd205f469a8be89cda2f9bc912df9f"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "90178ccce3672a5fb5d9374a738aecb9"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "40c966d311acdcee816a77ea95af1369"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "b4ed3f3759a40fc8c8e3e7f39e01fe93"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "76b3f9e4706bdb2ccc3605bd08db0566"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "5ea89e684faca958c0d807ab7f618e9e"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "90b34ff484c9904489b9896b0cac9205"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "b9120419016ba8363fa78daef5b7d938"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "72e98b51f7ae490e5e0d1cae66ecedc1"
  },
  {
    "url": "guide/index.html",
    "revision": "09e0e267b2182e1052611a90234c1cec"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "8df3bb2cbfb5a79c0fb34cc97e3ef963"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "eaa8a078346efaaed1a36f6ad9e1076b"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "4a1cc17e0962e421904654b52e72bea6"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "e3fa0d3378570162c9b3eddea23f06b7"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "3ca56e1593d1d8eeac9b5ccdded163cf"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "8fdb49148bdfc92f97a6fbcdbe2a3475"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "d22ecf48ebf570b7a72ff60e275c170b"
  },
  {
    "url": "guide/information/support.html",
    "revision": "489ed1b2ae87da1cc17bc3b1b11b611a"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "e9288dbd9d750e4b53842d05c0a144b7"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "b2f91268273d8d6fdefdf1f49781f85d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "3d41d4a89521ac68acda1814560e47e0"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "dd9ab29187dbb1cc73837290a77fdf7b"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "eb8e432b01b748d5d2d0b51bf531d975"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "47721b5936521c53276c240bbbcd46ce"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "30635c21b5dd73b798b2e3d960a27fa4"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "0954fa6dbc1d3474b18880f0d9299cf8"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "3c6ec491ddcada6e49d8acad00fdfb47"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "f4561c28e133f486dc65704cecdbd7bb"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "5a312de9e6193b0222b023c0c97ea695"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "01f1ad94bb401a9707edb4b18cb61fee"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "57a99d7505c93b1a1dd0d9b0458c0bef"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "01d449aaab8b72ef364e8800d8d9e553"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "323208ba361ab89c0a58535c7a5ad535"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "943a5fa8953acebd95f2aca2e32d88e3"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "ce7f6741951ec334189e668f167e53a4"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "83c4895bf5fccc26dc774b6c96bebd58"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "1bdee60173d7030cc23d9ae6dd8cef73"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "82d40a5457045d513b79ed060567f348"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "fd4515d62017ab3f1f53f305f3a32998"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "1a886a0af85fe8f8b9b3deeed5088dee"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "d929370180805156e98056b6e71eabd8"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "368bf0412f980ba34c165fd0add20d5f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "f53c8b30baa1822fe32c467d00f7ef7f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "42d3bd2f5778d36d751fcb32f3ece403"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "363cdd99dc9b26ee222b4af5314022f4"
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
