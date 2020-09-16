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
    "revision": "4a44cbdaf5a859c559328914d40808d0"
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
    "url": "assets/js/10.23eecf96.js",
    "revision": "e9efab84c468de50b1b8144e91fbab7c"
  },
  {
    "url": "assets/js/11.e9e5a9af.js",
    "revision": "1abdc1c46c3a28264165c5f2f381b274"
  },
  {
    "url": "assets/js/12.83027ded.js",
    "revision": "4534efa9ac5bebfaeb64fc807cdd7751"
  },
  {
    "url": "assets/js/13.947acdc4.js",
    "revision": "8a6c182740e7f8e51ed7858a1e1ca924"
  },
  {
    "url": "assets/js/14.c206fe91.js",
    "revision": "0e72de102c2b3a80b8df17fca440e12b"
  },
  {
    "url": "assets/js/15.076fe783.js",
    "revision": "e31b9db1b78d296f3a267c5b8ba92a1f"
  },
  {
    "url": "assets/js/16.fc9eee4a.js",
    "revision": "4e0da963616865c213881ee5dffbce14"
  },
  {
    "url": "assets/js/17.607835a5.js",
    "revision": "e9b85b42672279bceed54ffc48719acb"
  },
  {
    "url": "assets/js/18.5d59d490.js",
    "revision": "fd19bc6c72cd100b184c446517cdd457"
  },
  {
    "url": "assets/js/19.15f094bb.js",
    "revision": "f589d3344bcd5986de3c764d077ea303"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.b2b22dd9.js",
    "revision": "f1ad05559fc83e9e7edbaa58b559d7ce"
  },
  {
    "url": "assets/js/21.84374f73.js",
    "revision": "4bc97f4c2c2fb70223bc7c258bf5e0d4"
  },
  {
    "url": "assets/js/22.c3a31f03.js",
    "revision": "b7bfe5b614a3a16b79725f2b9d89442f"
  },
  {
    "url": "assets/js/23.bf1961e5.js",
    "revision": "4babd5f3a6f9c40fd73754a2a2c67e55"
  },
  {
    "url": "assets/js/24.de82e596.js",
    "revision": "2fa3443077582df74ac5317c46d7ec7a"
  },
  {
    "url": "assets/js/25.287e4556.js",
    "revision": "3e6d40fce7f7c88fd018c379302a678e"
  },
  {
    "url": "assets/js/26.434340a4.js",
    "revision": "940d361e38833246fa4a6d0a16ca300a"
  },
  {
    "url": "assets/js/27.99aceab4.js",
    "revision": "073808931a6a8933f66d13c13e63d41c"
  },
  {
    "url": "assets/js/28.50b1b966.js",
    "revision": "b9739a6f5f94c7bb24be052bcb0cc470"
  },
  {
    "url": "assets/js/29.bf512a76.js",
    "revision": "4a60c02352f66752411f8fd448a89c5e"
  },
  {
    "url": "assets/js/3.9a3f16a7.js",
    "revision": "8754c54628e652abe4e4f55884e6c004"
  },
  {
    "url": "assets/js/30.df08c004.js",
    "revision": "9293678e11684c908ed4dd2b7784458b"
  },
  {
    "url": "assets/js/31.2d135249.js",
    "revision": "9c87d45ec9c11b2717292697ea2b2c82"
  },
  {
    "url": "assets/js/32.ec3ead67.js",
    "revision": "bb813fff3d7626051c4e8eacde5c4947"
  },
  {
    "url": "assets/js/33.8400ccce.js",
    "revision": "039d7b7142cd65ae71cd38aa3457dbd8"
  },
  {
    "url": "assets/js/34.5dbfac7c.js",
    "revision": "a949dd3e8e88a8a8d58bc10ba7fb96d5"
  },
  {
    "url": "assets/js/35.430e1733.js",
    "revision": "f7a688ad808d48645f001b1a0daede31"
  },
  {
    "url": "assets/js/36.d15471d4.js",
    "revision": "14993a3a832f43e7e5cf7ec1799a40fd"
  },
  {
    "url": "assets/js/37.eadcddb5.js",
    "revision": "e034abf8469c1f44c76f6c92900aca42"
  },
  {
    "url": "assets/js/38.9dce5b8a.js",
    "revision": "a3bd395f036f0764f0a81da1df504189"
  },
  {
    "url": "assets/js/39.a4b7555c.js",
    "revision": "4a281432c4863bebedd447ace3d6ccde"
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
    "url": "assets/js/41.c0d1fc95.js",
    "revision": "7debbc89cdea05509d7946922a731e71"
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
    "url": "assets/js/47.42cac57c.js",
    "revision": "f15c03e93afd720602c4b15564ad5c39"
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
    "url": "assets/js/app.29293983.js",
    "revision": "96c42d7584f618ec31ab039151c4ec3e"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "69b6320e0c8f1fc5881de40473182d54"
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
    "revision": "6efc13816d58c6da0642281d298cff41"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "574a71082311cecdee45e07a5047fbbc"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "4e435cb5112f1c385c30acdae74cd20a"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "1153bd3f211af71af444a9c208cec277"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "1ca92e624dba8a54f9f301bdb3b7a15f"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "b4408f558b7f1cd91d4e68f55be7ceab"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "0cdeebd08509481039666f5610c2fcea"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "fb3b6347989fa785ad42623b67aeae4b"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "ddcf347f533dbf13bb15a9679c5d5c0a"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "142f9853084927897f9324faeb8bb84e"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "8263e436817be84bea0881995604153a"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "2cc5908a330cb972ff520a3fe97f8b9a"
  },
  {
    "url": "guide/index.html",
    "revision": "8f979baf534429125b61a8e5cafc3d63"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "5f3bc7436635d941dc42c265fd00cfa9"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "ecc69c821e9357464bf4bd5b257c6f13"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "f7f88ff53684fa66da6bf2f1798604db"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "7dc237c7ce15177d5037e55408dbb843"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "c63c645a90c6fcc33bcec716f67da7b3"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "3685e7c5fe69a0dc409c66ea6a944a76"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "0f9be04911dd68090a0fc8fa92d06527"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "69c82ff9e34690b4ff7aa8ed20ec8752"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "0013f43a0ae58ccc2df77c1b52fcc911"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "91ef789b8e3d240b6e05aeeeebb31824"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "324c161cef44901ef1dbaef18af49a75"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "b529306563a14a62e3dabe8b5dc62491"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "5606c0a83e115cb405e9d32688c0d148"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "3ac166f0bb72c55e9e6d79a18ad0e2d1"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "7785392f9f06dedff409bd8cb8efd9d9"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "8f98885bcadb2819df59e195b5cd58b4"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "27dfa2897789d251598af67ebaa53d8c"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "ab41ffa53b217bf0fb9e3ffc79341e2a"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "4ce056fdbf080d3575c778f9a13c943e"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "a18760d767108d311d540cb34e0518d4"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "fa8d179e97bea69312b032ae98017bbe"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "f1dc8a0007f04676bd365b7a744a9fd1"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "cf29686ebbf90beaac91a51ae00a9638"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "b13e1c972c7393bd16d9263bb9db2c62"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "74bafc5ab2bed954b9021b3150dc8309"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "e478147c7d7112895a5eb1f790cc8db2"
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
