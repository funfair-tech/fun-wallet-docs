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
    "revision": "8ad153286b3491d77cdb0e8ab2282c11"
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
    "url": "assets/js/11.ed678a7f.js",
    "revision": "f429b3aa48a57f89428fcfd0e0755b84"
  },
  {
    "url": "assets/js/12.80cbc937.js",
    "revision": "69194b697344d9ca5ee0e203d5cdf191"
  },
  {
    "url": "assets/js/13.e83dfa06.js",
    "revision": "5d3c898597f2f2efa5e6395884707d7f"
  },
  {
    "url": "assets/js/14.1df09232.js",
    "revision": "3bad2ff9b12ab3ac4333ccdd6aa534b8"
  },
  {
    "url": "assets/js/15.59caac8f.js",
    "revision": "10ed23b622cce4e90134ce19fa48c9ca"
  },
  {
    "url": "assets/js/16.c2f3e048.js",
    "revision": "e516cb2020c1857ecb1453df509f6e00"
  },
  {
    "url": "assets/js/17.5ca2cdcf.js",
    "revision": "8a410bbe654e67d643a91a4e21e107cc"
  },
  {
    "url": "assets/js/18.e41755ec.js",
    "revision": "e04540f46b517ceabc2e11c99bfc6c9c"
  },
  {
    "url": "assets/js/19.3e66782d.js",
    "revision": "180605239899fc957e528c6f4ab80f55"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.b8392d7a.js",
    "revision": "0db4979e48fce028b62975671cdc063e"
  },
  {
    "url": "assets/js/21.3d830296.js",
    "revision": "bd951ea7ff52f877e5f0e6cddd376315"
  },
  {
    "url": "assets/js/22.e5db1407.js",
    "revision": "a4f5cc9775c515a803ddd8f24923001f"
  },
  {
    "url": "assets/js/23.5fb76bd3.js",
    "revision": "7629e0fc6d07721bee084759f8c472db"
  },
  {
    "url": "assets/js/24.25d2cf07.js",
    "revision": "0324a8774ea704344fdf6f2e42f0e0f3"
  },
  {
    "url": "assets/js/25.7bcff97e.js",
    "revision": "63021ef517f5edeb13fbbaee44b0ebbf"
  },
  {
    "url": "assets/js/26.52352925.js",
    "revision": "4edb8deda54b99db6f0cb23c74827109"
  },
  {
    "url": "assets/js/27.336467fd.js",
    "revision": "7c417dcb1738f8921fc44cdaf3c591b3"
  },
  {
    "url": "assets/js/28.4b44e3d5.js",
    "revision": "cf30eba5420a62d4e41d61c44cabf098"
  },
  {
    "url": "assets/js/29.66224cf1.js",
    "revision": "90738682f8e0edc54fd304612c503355"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.5f7f8353.js",
    "revision": "77973e71ce4f719f3207ce9a1a2ef3a6"
  },
  {
    "url": "assets/js/31.8c685c9a.js",
    "revision": "39ad748337b194519fc38621bfedab1d"
  },
  {
    "url": "assets/js/32.484be0cb.js",
    "revision": "9a391b3a4e2693ad1ae0eb895aabb233"
  },
  {
    "url": "assets/js/33.3fb08fd7.js",
    "revision": "0a946f012e4cbaf0fe955c69607e3220"
  },
  {
    "url": "assets/js/34.cc66e81a.js",
    "revision": "7b3a80ff3e0432d5003f97f86856d403"
  },
  {
    "url": "assets/js/35.a5c1ee08.js",
    "revision": "ce2808b46f39c1713a0195fd099da7f1"
  },
  {
    "url": "assets/js/36.e6daf07c.js",
    "revision": "f873fba77d4f6f91b512b3f784c01199"
  },
  {
    "url": "assets/js/37.5bed192e.js",
    "revision": "a9aa8273051bde7a7c01f614bf8b3803"
  },
  {
    "url": "assets/js/38.643444d7.js",
    "revision": "f79942ab91420b3eb292bc1a94a51211"
  },
  {
    "url": "assets/js/39.c78f3112.js",
    "revision": "a5872b4333c7780cc277002aaa457245"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.17e91f20.js",
    "revision": "05fb7851e121fb461344f5c2455c16c8"
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
    "url": "assets/js/43.67b1ea43.js",
    "revision": "2771490275b1e8b6693ed807896b6f6f"
  },
  {
    "url": "assets/js/44.914494b0.js",
    "revision": "9755f6410916f462da54683151798553"
  },
  {
    "url": "assets/js/45.82f265af.js",
    "revision": "5f49d0735d0c7cee182b1a26220af5e9"
  },
  {
    "url": "assets/js/46.bb34b84d.js",
    "revision": "2badbf2c9e8eceb7a81b400ded71ba97"
  },
  {
    "url": "assets/js/47.22437caa.js",
    "revision": "7599273f066950663aea63fea90cf271"
  },
  {
    "url": "assets/js/48.15e4bba4.js",
    "revision": "5cfe42099c019feb1cd2ed069cc335fa"
  },
  {
    "url": "assets/js/49.219061d5.js",
    "revision": "c3722ab1684596c2d3dc0485e380428d"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.083bd4f0.js",
    "revision": "3b902001fdef47f642215af5fae608d3"
  },
  {
    "url": "assets/js/51.99dbde4a.js",
    "revision": "b6a80ee5f6524080c660cc8ed4e2e48c"
  },
  {
    "url": "assets/js/52.3e643279.js",
    "revision": "889f0091f38aa528befad69131d97758"
  },
  {
    "url": "assets/js/53.781ee33e.js",
    "revision": "86772be503a0a5a158adc087472b22e0"
  },
  {
    "url": "assets/js/54.5c8f3f04.js",
    "revision": "0a75fbc9f49d4af81c8393a59416870b"
  },
  {
    "url": "assets/js/55.05edfe17.js",
    "revision": "012ab431ffdb39181559244ff1b2aeac"
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
    "url": "assets/js/9.3b8b4a6e.js",
    "revision": "acbb04e9b1eb58f28307eeab748a5b54"
  },
  {
    "url": "assets/js/app.927459d6.js",
    "revision": "66cc4f4bdffc1aa8772bd15d95e4b86d"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "b740b72d93e1b536efd16a5741eab5d7"
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
    "revision": "b1e9158f8ffb3e277934786a1e3c4a63"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "999a3f7af1cc3164fd4f2940fa78e551"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "d7b6cdb46cb32119c0f0818d76f9f98e"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "f9cdb4a0d7c3674cb017ed52d13ec287"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "32c37923999135037b05b0c8a5eb9cf6"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "6967d31648948e57eb89f6634e56f59b"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "e54c26e0ff1006c6ca1da03335a15a4f"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "58186dc0b277219e8baf5cc25fb367e8"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "b1b099056e0bafaea98e58b221282e99"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "8822f6063055b3d59dae3b94d953bc8f"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "09517bd944a1291c102954a3ca2e9a1c"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "ee7a3d64054895a61417531f81cd4d34"
  },
  {
    "url": "guide/index.html",
    "revision": "e4352a8f03125369038602e0712eacff"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "151c7dfed22cfffb5e5d3947b329ffe7"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "84d12d1ad5a6aa54a6ec9f1c39fc1876"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "4d9992987e65e108cd45af0d2d355342"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "9affcfb2e821a1eef2be114842da0cf8"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "84a7675b3a00235887934168bbb6ff0b"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "83ed2a915c2dd235f2e8ab45663985b6"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "44a503cf9424db382e0dc2be37b23640"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "67a016606cc0866a0787830a019e45a7"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "f7f8579fcfa3419490f8f678cdb14dec"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "af3c955e20c444b34fbdb6e8b3aefda0"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "2842e38fdcc20d7218cad22849ff3fca"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "ef84c8fde7af577c125598fa585c19e5"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "58c017196a135aacace3dd47622f3046"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "93141406946954456b18dc38232704a1"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "65d12fb19b49db91af9bcc2d858f3591"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "1f319e2f801269695f0159eedd899927"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "c1f3acde7d379ca1528b4b05ef83dcc7"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "830e120631f8739e419ab95b623f5459"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "46d66d3f8cd37423e01171401e49e33b"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "18d815fa7238aba55e39bbebd5c8d412"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "fe7e46416e4331bffb527a506955c03b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "e8f964821a8869bdf600f54ca5c7da4a"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "3d72b2c902a8757b1b52def0305332f1"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "402d138cdc8bd1b16583210e4358c955"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "5cd66d4922d8d8726f2819792bc3cb74"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "13e7be50e10495f80a2462f85d3c246c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "d9855855d1cf64c276950ecf18f51d3a"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "6f56e56a21d3893afc8c9af165d26195"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "9303e71c3af0a04f5b835fb7aa712eeb"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "2b860e6624d8f6126a1a83800481fbc3"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "f75e04d0ba5cc21bee6c75060d135c44"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "042f080b7b21de1db615819214eb3882"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "08bc2879cdf716eb92070186408ca773"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "e0c02fd8e04c0516fbd8722565cc211e"
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
