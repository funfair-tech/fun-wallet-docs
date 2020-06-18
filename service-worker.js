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
    "revision": "acd307855b40de7299987466a874814b"
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
    "url": "assets/js/10.6a044dbf.js",
    "revision": "b13aae174a955c0d1fabbd68ea72ae5e"
  },
  {
    "url": "assets/js/11.ca85f405.js",
    "revision": "7cba8796eea04eb2b718171d389ad5ec"
  },
  {
    "url": "assets/js/12.ae3e84b0.js",
    "revision": "899f07d7a484167d9132d6f5227b1397"
  },
  {
    "url": "assets/js/13.b235ad35.js",
    "revision": "f57b8f5071d550f03248f58207ad3f02"
  },
  {
    "url": "assets/js/14.5ab990ba.js",
    "revision": "425192feee7f89d882593886d73e6be8"
  },
  {
    "url": "assets/js/15.6fb5dada.js",
    "revision": "55c720d7a831ffbbd5f5184d115cbd4c"
  },
  {
    "url": "assets/js/16.ec4b8e77.js",
    "revision": "adad5b659448dfafa16958565875bbdb"
  },
  {
    "url": "assets/js/17.09c5e52a.js",
    "revision": "6c968db85c6a2f0c3427c6f782859827"
  },
  {
    "url": "assets/js/18.5d59d490.js",
    "revision": "fd19bc6c72cd100b184c446517cdd457"
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
    "url": "assets/js/20.1a949f26.js",
    "revision": "a265dbfa92683b251710863dfd541d8d"
  },
  {
    "url": "assets/js/21.1478dac9.js",
    "revision": "922fb199a24aae01dbe639d1a9c405c2"
  },
  {
    "url": "assets/js/22.811e3ed0.js",
    "revision": "4a61ba7dd24f64c072b4f83ba007494c"
  },
  {
    "url": "assets/js/23.6d67afd7.js",
    "revision": "fe8ed31a0383de74a4d94dcd0b921a60"
  },
  {
    "url": "assets/js/24.b125e9fb.js",
    "revision": "72a3976f15251b465f12a223c913b9ce"
  },
  {
    "url": "assets/js/25.21067a62.js",
    "revision": "160da30baa255b0c61fbe0a364cc9030"
  },
  {
    "url": "assets/js/26.2bde5123.js",
    "revision": "827b3f89b24b6001791f9238d23eddbf"
  },
  {
    "url": "assets/js/27.9e6b648c.js",
    "revision": "0312eb60d5027d6e93a075af50cb599d"
  },
  {
    "url": "assets/js/28.a1923801.js",
    "revision": "944fd0df01841d4771d98325f9bc4d0d"
  },
  {
    "url": "assets/js/29.5ab087e3.js",
    "revision": "e30287427a4f23e2b3ddb029e47c2306"
  },
  {
    "url": "assets/js/3.7515ba86.js",
    "revision": "9dc44d5711e09bf25c5d74296c6a41f0"
  },
  {
    "url": "assets/js/30.4efef4b6.js",
    "revision": "afc9d015af86d558833709cb05086676"
  },
  {
    "url": "assets/js/31.fd10623f.js",
    "revision": "4f9adf9087e2484d861e2e09460d594b"
  },
  {
    "url": "assets/js/32.3bec5bfe.js",
    "revision": "b0017cee7fc1e8d43fb4af0b23ad213f"
  },
  {
    "url": "assets/js/33.9377b8fa.js",
    "revision": "7d18d166b11cdecf9c55fcdb7a85dee8"
  },
  {
    "url": "assets/js/34.3f63557b.js",
    "revision": "ae523ac79bb14d837e709efdff44c940"
  },
  {
    "url": "assets/js/35.e89becad.js",
    "revision": "0490af7bf810e0b493960b38f2192536"
  },
  {
    "url": "assets/js/36.54b8a6b4.js",
    "revision": "04d8ee0ec030fa664fd4c1aadb51ac54"
  },
  {
    "url": "assets/js/37.a7168a34.js",
    "revision": "9d4e4c090daf544d294b866094dba266"
  },
  {
    "url": "assets/js/38.694cc643.js",
    "revision": "a5881ec8cbb2b4784539075612d4e8fe"
  },
  {
    "url": "assets/js/39.854c00db.js",
    "revision": "a60192645b45b2941a0092bcd5a88bf6"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.0b404826.js",
    "revision": "551f05f2e375a215f1274328a5614693"
  },
  {
    "url": "assets/js/41.75d3e370.js",
    "revision": "6c2241db53bfee2ac4d0bab8f734f465"
  },
  {
    "url": "assets/js/42.dbde1b2e.js",
    "revision": "4da1379fe09bac9bf0cf0605045d359b"
  },
  {
    "url": "assets/js/43.904dcb46.js",
    "revision": "ff464819c41264712ada8587b18c37d9"
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
    "url": "assets/js/app.aa18858f.js",
    "revision": "47de05fee16874c63442cf34e9ce79ee"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "0840ddc2e7a2158da361c2686d00b60a"
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
    "revision": "2a746f0395105da39b125befe608aea1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "8ae55e62c139af3d30ee17fe40430090"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "294c37826d2b857af82ed4a8c3ccdd76"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "4fb2a508799dd21ea55da0e44fd3fa79"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "bfec38064369780a447737d4d53b6fe7"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "afaa95c75647b16e56d40a52d6b06c29"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "93965d2c313fa5df72d9fb5c969caa0d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "ebf6f7b3bfd5e80dc7927e88a2a7fb60"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "b91a4cf77a9c71e5aafc5e735b4a0405"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "552e99a35b5d5ecd8563b84c3274be79"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "e5236a813dff64eecf478e2fce9c5335"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "357e0f3c9b0937041eef0b646049147d"
  },
  {
    "url": "guide/index.html",
    "revision": "ffdbaa6d0c99c346a0556cd870cd721b"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "037ade7a06374d9d83641d3398875fe5"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "aeb67dafccaeecbf63e363c63a4d13ba"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "4147cb303e052957113ed7f2532cb431"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "4cd939ad87c5845e95ddd70733cba587"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "7cac75cbf0e40d83703354fb2187e22d"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "bb3938d4ccb5f0f0bf336bfbdc2fe7d8"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "6b401691b6f1cbf9a11e43bd3fd18f10"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "a236d32eb0802e8e9cad67bf2b6ea26d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "9d3bf43248994fdffa72cf11a9bc68ed"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "d8da57752206ab820335646aa4a3415e"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "1816028709a82491831b1287bc7dcde5"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "9de2274e3533a733b552a763619f3e1f"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "fa8f4c3abdc7e116c92d24ada99af8f2"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "086414dc2cf5c22d12bc8c5a15acfd1a"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "df319be7776cd5775e14b1cfe428bfe3"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "274841c60e827af57515d4103558d655"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "91ce57007cf259af2ec52fdabded2b8d"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "9ee0fcd28c68609b9d7f790b8039b799"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "71c285def95f0f32c19d57fcfd44eebe"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "7325b5aa1429a96fa4e33d70ce1b1cfe"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "d4b136185df4ca4a37e66f888953630f"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "6e51c8d2895ea42c742c64f25c29b153"
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
