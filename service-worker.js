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
    "revision": "973a55d9680d9b832add5e31040e5c2c"
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
    "url": "assets/js/11.124ee54e.js",
    "revision": "8fa9ba02da9fc0caa52f70a97d5b4c99"
  },
  {
    "url": "assets/js/12.a28198d8.js",
    "revision": "0a9ca95019ca22c593288d96c68e67fb"
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
    "url": "assets/js/15.0d11e2fe.js",
    "revision": "6d7138a461889cc1a447466f38e971dd"
  },
  {
    "url": "assets/js/16.ec4b8e77.js",
    "revision": "adad5b659448dfafa16958565875bbdb"
  },
  {
    "url": "assets/js/17.8f4f329c.js",
    "revision": "20c9544aa4d69d61ccc699b5e6dff673"
  },
  {
    "url": "assets/js/18.c53fb4ae.js",
    "revision": "19de8049545ffdff4ef93d6cd126e434"
  },
  {
    "url": "assets/js/19.19dc7b62.js",
    "revision": "66063ff80f5a620ab6758626c9e49c66"
  },
  {
    "url": "assets/js/2.a0d94ea1.js",
    "revision": "c8c06802ace222ed3b56e29d45347c8c"
  },
  {
    "url": "assets/js/20.f5411eba.js",
    "revision": "cb504a4602e4c7331394fd54308e8796"
  },
  {
    "url": "assets/js/21.eea2c3ef.js",
    "revision": "1f1c1ee28fd5fdefaef1895b9e28d7ae"
  },
  {
    "url": "assets/js/22.cb8bf568.js",
    "revision": "c73cf2ce5fc9854d74ece3e273c3f7bc"
  },
  {
    "url": "assets/js/23.2433c56e.js",
    "revision": "c2be58a0e3dba82c0c033ccca7a9a891"
  },
  {
    "url": "assets/js/24.8db98613.js",
    "revision": "03eda0c73ce3dfc9b31d306c8accf027"
  },
  {
    "url": "assets/js/25.8e82babc.js",
    "revision": "541cc0928cd18f1d054087711ba74133"
  },
  {
    "url": "assets/js/26.e0441623.js",
    "revision": "69258fb7a9db691f696fb6cb42c0f1a3"
  },
  {
    "url": "assets/js/27.9e6b648c.js",
    "revision": "0312eb60d5027d6e93a075af50cb599d"
  },
  {
    "url": "assets/js/28.9c685a55.js",
    "revision": "415e72417460e4b8da0391a87a603bb2"
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
    "url": "assets/js/30.a01197db.js",
    "revision": "5e0064ffac1450b9a0306760b44bd458"
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
    "url": "assets/js/33.1b1ab332.js",
    "revision": "77c4d3535ba5abacbc67c711ddeeef62"
  },
  {
    "url": "assets/js/34.3f63557b.js",
    "revision": "ae523ac79bb14d837e709efdff44c940"
  },
  {
    "url": "assets/js/35.52bb2ed2.js",
    "revision": "7d8a240e7ca889f8c8966261c199e746"
  },
  {
    "url": "assets/js/36.1df32b2c.js",
    "revision": "4d7e48a9bd6b81244238ba5cb75d75f3"
  },
  {
    "url": "assets/js/37.0fd0c842.js",
    "revision": "dcd5cff6a11436fdd72abd88aea12a4d"
  },
  {
    "url": "assets/js/38.beede36e.js",
    "revision": "84bf6121178558446c37db61505bd87e"
  },
  {
    "url": "assets/js/39.75bd0c41.js",
    "revision": "d15c4ae2f0ea8afa2315d655d7b63f31"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.8130e260.js",
    "revision": "c78538574f12433c399388ccdb538479"
  },
  {
    "url": "assets/js/41.82306271.js",
    "revision": "759ccd5daeae37df139872126bf03373"
  },
  {
    "url": "assets/js/42.dbde1b2e.js",
    "revision": "4da1379fe09bac9bf0cf0605045d359b"
  },
  {
    "url": "assets/js/43.cdc2d578.js",
    "revision": "db4a03b4d29d4fede5c3be84907c2efd"
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
    "url": "assets/js/9.67022518.js",
    "revision": "2980a40602d42e3b7e04c60b939fcb54"
  },
  {
    "url": "assets/js/app.c447f7f7.js",
    "revision": "225bd1b814c39301795f033b9226adb2"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "b8369fe2e7851346618ac980f19a9f31"
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
    "revision": "06d9260a6d891277e8b6d537f92af82b"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "879a7d6b8a21461c59ffda2984a07e6c"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "4848992d536ab3ba67db2204001ce162"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "a268a23356ef7b849a2e33a736ad9a56"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "1c1e1fdc0806d2d15b9a320aab1c62da"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "1a3bde3fa33eaa33b272cc2a147cc058"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "ec918b5621c54375ba172abc52cdfede"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "72268566c17da42e4c4676c7349da4a4"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "163deb8ee209d6b1ebb788ddcc489f96"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "50780bad6862ea1c531974e69ad34dcf"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "10e37c71712d26ac692ba6f07c815596"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "e5188b4c673a6effd5e96821c24812ad"
  },
  {
    "url": "guide/index.html",
    "revision": "dfb677b8731edea2e2aab2df48685199"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "48eebf89830ba0e6294061448b978787"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "9dc88486112452b63bbe5022c7b66aae"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "14311262059bc0907d30b6138466b095"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "bb9b29f94f8c71127bfecfb05cef8506"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "21b32996e5f86c5fbbd98cea694f6efa"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "f7f2a2c88e12550b484daf44be4aeef9"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "16e268376daf200e3431622dc0dd33f4"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "3d0ee68f30af876cde9f92de92930f29"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "81d0913d5cb42e77420cdd9c1109314b"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "e95538b89dc92e822a59f7a0632d7317"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "31f8d5dfe4e6826d809e3790486b5c2f"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "c15acc33077f583d4b04a567d12eba4e"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "71edcddea7e22823285ea34c7f4a151f"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "3691ee1bafb9c426a1b3fc059ff2238c"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "2a4647bff68a0e4abe3a37742e384ef4"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "5fe806462ba570980be249e477f636f2"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4bd4b04b549da358ee54b73c2cb0e52e"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "b2fe3421c96a549698a5ce7a59e1ce02"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "1b7331fb6db99e0801707cead9351c9f"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "1475f52190b7bd45c6e4d433ef0bb467"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "7698b84b0930deeac7c64de685202bed"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "e49dc6700d24ff86df9ac0e25f2daf52"
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
