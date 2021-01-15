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
    "revision": "ec14ccfc6ada787677de8bd5368d556f"
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
    "url": "assets/js/10.62318c1d.js",
    "revision": "b1e78809520d5b9ec30413b5d9e1b872"
  },
  {
    "url": "assets/js/11.998f59f7.js",
    "revision": "e5cdf2cbd255d05f107c45c6d18e2cb9"
  },
  {
    "url": "assets/js/12.80cbc937.js",
    "revision": "69194b697344d9ca5ee0e203d5cdf191"
  },
  {
    "url": "assets/js/13.13f7b782.js",
    "revision": "3be192ff971f5956baa759c65698e583"
  },
  {
    "url": "assets/js/14.26db8506.js",
    "revision": "774db17061b59a8869957277edf303d4"
  },
  {
    "url": "assets/js/15.59caac8f.js",
    "revision": "10ed23b622cce4e90134ce19fa48c9ca"
  },
  {
    "url": "assets/js/16.4f9f0def.js",
    "revision": "6632433123bae12ccb2e5d85470d38de"
  },
  {
    "url": "assets/js/17.2ab9b3ee.js",
    "revision": "e13a0268ce052c89bae1e45d366e63f2"
  },
  {
    "url": "assets/js/18.22689942.js",
    "revision": "ac7adb501bc2bd24952a2cf2b60acb06"
  },
  {
    "url": "assets/js/19.22b80fa0.js",
    "revision": "77b3bd372d55ff12ad1c7c3ca8fd7f63"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.3b915651.js",
    "revision": "4412d0816071dba37ba2725abdaaf166"
  },
  {
    "url": "assets/js/21.d1cbcd62.js",
    "revision": "9e6963f19501035b1b69a384985f7734"
  },
  {
    "url": "assets/js/22.fd4a60e4.js",
    "revision": "dc640bce42d754ad0c10ebaa11e34f5f"
  },
  {
    "url": "assets/js/23.acd93a67.js",
    "revision": "57e735f97b284216304e522480006b73"
  },
  {
    "url": "assets/js/24.f493e662.js",
    "revision": "855dee6e25c515d0516f5129d8b5e77d"
  },
  {
    "url": "assets/js/25.ee7e90cc.js",
    "revision": "1253c037ff1e6f2dfaf5432a7af9a2a3"
  },
  {
    "url": "assets/js/26.33867d15.js",
    "revision": "d3feab047fc75420ea49fe5d708f4fa9"
  },
  {
    "url": "assets/js/27.dd6463e9.js",
    "revision": "b7df9b8cdb15346566afb95f9387f3e5"
  },
  {
    "url": "assets/js/28.634e7072.js",
    "revision": "0daa5eca59fcc7fb72fa1d626d5b48f0"
  },
  {
    "url": "assets/js/29.600ce231.js",
    "revision": "766f14732a973dc6c53b51e951bf97c9"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.50e28302.js",
    "revision": "f56139cd5a6273bff33f09a1fc18c57c"
  },
  {
    "url": "assets/js/31.f0be7c7b.js",
    "revision": "f8ae60b75ed0109553729c91aeb44f79"
  },
  {
    "url": "assets/js/32.eb2d141d.js",
    "revision": "040724bdf3a47c1a2c31ed6dc7a29391"
  },
  {
    "url": "assets/js/33.688a4ab9.js",
    "revision": "9be2d367af00e074ea4bf9b6bcc91567"
  },
  {
    "url": "assets/js/34.08a204dc.js",
    "revision": "639c853fc74852a5a56acafa893c5aee"
  },
  {
    "url": "assets/js/35.e6ece728.js",
    "revision": "246f69fb70935d2c93d30dea88782581"
  },
  {
    "url": "assets/js/36.e6daf07c.js",
    "revision": "f873fba77d4f6f91b512b3f784c01199"
  },
  {
    "url": "assets/js/37.8284352e.js",
    "revision": "38bbf2c0bc6130ede84ecacd967f933d"
  },
  {
    "url": "assets/js/38.643444d7.js",
    "revision": "f79942ab91420b3eb292bc1a94a51211"
  },
  {
    "url": "assets/js/39.b1ce4d88.js",
    "revision": "df79d0aa74ad91c1ba349408eca01016"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.323f0543.js",
    "revision": "b33e1f8c06c4b5ad3ed944e3fa345288"
  },
  {
    "url": "assets/js/41.94a189e3.js",
    "revision": "af2ae3c22ae996a64ec00ecb34687da1"
  },
  {
    "url": "assets/js/42.25a76a54.js",
    "revision": "d94c3899f7b270f21d6f7086b22a3908"
  },
  {
    "url": "assets/js/43.675b4a09.js",
    "revision": "2cf7caa588c477618024f50179b8566a"
  },
  {
    "url": "assets/js/44.095815f4.js",
    "revision": "d4b8cd3fae75af0ae4a22180674c3150"
  },
  {
    "url": "assets/js/45.7d23e744.js",
    "revision": "2d84938e8b54348ffb46be7125218d87"
  },
  {
    "url": "assets/js/46.7a88ffc9.js",
    "revision": "2b3912e45c870a90d5a9dddde3000f1a"
  },
  {
    "url": "assets/js/47.3e03e5f3.js",
    "revision": "3eddeae2d83f26b3bb652bf6e25e9793"
  },
  {
    "url": "assets/js/48.15e4bba4.js",
    "revision": "5cfe42099c019feb1cd2ed069cc335fa"
  },
  {
    "url": "assets/js/49.89cd8474.js",
    "revision": "397879cd17198dcd0613f8112ab1b3a3"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.ae852b8f.js",
    "revision": "17f0acd1ee6e272826a61e5a94db0563"
  },
  {
    "url": "assets/js/51.0e980c8a.js",
    "revision": "f04ec9540a7c735014bf890f0b7be37e"
  },
  {
    "url": "assets/js/52.e72f6b09.js",
    "revision": "78d098b6ea89a247bfd8174c4b56dce9"
  },
  {
    "url": "assets/js/53.781ee33e.js",
    "revision": "86772be503a0a5a158adc087472b22e0"
  },
  {
    "url": "assets/js/54.27a54677.js",
    "revision": "ba41834d04dc6861d931f7f570232468"
  },
  {
    "url": "assets/js/55.c2548db7.js",
    "revision": "d4aad4e8dc8d419d95e1969f0d63a27e"
  },
  {
    "url": "assets/js/56.71c8e044.js",
    "revision": "3449cfdfe840181636ecd7d166ba718a"
  },
  {
    "url": "assets/js/57.891f780c.js",
    "revision": "e2734e11ab61be5b86d272558097b327"
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
    "url": "assets/js/9.1e0b8aed.js",
    "revision": "9679998f90c54eeeeed4b8d16de0e68c"
  },
  {
    "url": "assets/js/app.6d48ddb8.js",
    "revision": "fc168b43a384544e1f2ed4f8a9cf1404"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "12904b7a6050d317c67b1845ea1ea7f1"
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
    "revision": "9c11b69d668c664a49768b831bf1e08b"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "d97da8d524418f677773d2fa46e2c8e6"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "c39ac2775206ddd3eb75fce3ab302169"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "bebd80c386fe7d98b4522b1349ccf238"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "470aec9606678fd0a0c69378367149cf"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "db7bcc2875a4cb75d495fa9e2a2a1282"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "9aca1655d891824cb51def7adb435f13"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "f9a6b824ef0d4534e515e65ddebc8e92"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "7fc76f2c2e7912b0a42acf03a79a2142"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "9b263788093151d43200d505f19f6c0a"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "9a5d86d48040c4f7ad030e38e23320dc"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "c6328bafd96d750b90883f297c71622f"
  },
  {
    "url": "guide/index.html",
    "revision": "46c68cf4fc53cf70d3c1b247806047a3"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "88028b96a9e74b3f504ff79c1dddd954"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "b86a7edb43a2ebd8ee7ee77320aa35bf"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "4c78402350ac9a82fd9869a1606ee2b8"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "756c027d30d2e51466a7bb41bb27851b"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "58355b0f8973ee6b872f0ca28d26152a"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "28c53d85569e90f79aaa55cee000e617"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "7e1f2b39b89d03a826222f06fe8902f3"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "c0c69927a24ab78fcdc0316ce8c0db03"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "1cf72a10db3a44b394611303992b73f8"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "d3901fb58ecd34a6125fb5eec41a413d"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "28ae3dfd7da53f9e9ea02c09812a7d85"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "653dbf75edef59451582a90546db734f"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "11932988a566748bbb40b3b2478ada4f"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "7b07e73b1db3ae88e79f66539f9afad5"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "a09c96422467da00e01dca693f5062d2"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "2a74fc030b7618756dc0ba0adc814ff9"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "fff866bc8bda9145b75782e51cd5b80d"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "ad61b1930f1a06d01730ca620e04bdfc"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "952ecb45c7af199419181ca4ac5927fe"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "0d1261b79fec4b237026c3153774e37a"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "d9b0af2d68057f73b5a4c41fb4e6321b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "a6d85d7e7abc81d5f0dda096d5df52f2"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "3c2a0d9f69510eff25d8d267f6f59ad1"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "73ac7b4cad82bc8ad7068ca5533adcdb"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "0fa81647fcceeba19889f83cefb891e5"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "9c4bfabaf1ba0875d283fd0ae8674332"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "3d7cc962d7c4515dfff075bc8f016bc4"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "b70d55e82daca59891360c769ac4fb62"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "325534a5d4ccbde914ab9474823d9ee7"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "839c437db6127738941894b104539a5d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "c80cd280ebcfa91bf7d9a0befd86382f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "5650d99709be000feabed8a61edfb2cd"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "a7bedc2307b8fe2e6f6071eb9347cfa3"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "de86178464eb25b7e529ff3d17489934"
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
