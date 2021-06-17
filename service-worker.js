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
    "revision": "f436a50805368d46e5c7de3dd08e4d70"
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
    "url": "assets/js/10.6bd91467.js",
    "revision": "0e229d69da3926024c1c4364dcd0f053"
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
    "url": "assets/js/15.c24e8281.js",
    "revision": "253c7c2354ae3625075c9fc7a6d2fa31"
  },
  {
    "url": "assets/js/16.0c9e71e3.js",
    "revision": "b15a0ba49a08d81d56d30787f2c90053"
  },
  {
    "url": "assets/js/17.8ce60bcd.js",
    "revision": "314229a3a4a3891f09ba3e5a551a5416"
  },
  {
    "url": "assets/js/18.184cf279.js",
    "revision": "bac19542822b221f74b3be4dd8ebbc0c"
  },
  {
    "url": "assets/js/19.9f026561.js",
    "revision": "538a00703f80c7f2f45e55ab1bd7786c"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.a01f1344.js",
    "revision": "e406c0b27fe15fcc451c03eb78290fa5"
  },
  {
    "url": "assets/js/21.5effc0c6.js",
    "revision": "49d973e05f01b67cfafee84dd22fc34a"
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
    "url": "assets/js/24.3617b6ba.js",
    "revision": "282f4b9afde6ab4eff507ca32d1f9d59"
  },
  {
    "url": "assets/js/25.00e26884.js",
    "revision": "9284a2a1b24720e14c0479c92134ec9e"
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
    "url": "assets/js/28.2cfb83f9.js",
    "revision": "7998bc72d7dbe021251bcf41e30ee61d"
  },
  {
    "url": "assets/js/29.6eca67b3.js",
    "revision": "27e7c23a5e08a5ae226127cc75612364"
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
    "url": "assets/js/31.e621ccb9.js",
    "revision": "117fc2a5dd87aeb36667b3bc131d845f"
  },
  {
    "url": "assets/js/32.76d32148.js",
    "revision": "cb367c100a614d31e30724203c0c2f46"
  },
  {
    "url": "assets/js/33.8669f065.js",
    "revision": "30bf1abbaed77146b3c7d7bf2d44634b"
  },
  {
    "url": "assets/js/34.626a4246.js",
    "revision": "782e888b43ef347d3cc85220f206fc14"
  },
  {
    "url": "assets/js/35.14f0a744.js",
    "revision": "9450becebda4afd67a6a66af68dd6e30"
  },
  {
    "url": "assets/js/36.f4103857.js",
    "revision": "7b6adaf3f3959d5f38186495ff6a7113"
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
    "url": "assets/js/41.ba85109a.js",
    "revision": "6539d9ec30ff342adb90d581c0e8e808"
  },
  {
    "url": "assets/js/42.9bd0d221.js",
    "revision": "1bb5bd99d449550c131f35bcd471e98a"
  },
  {
    "url": "assets/js/43.5f36a386.js",
    "revision": "5435c810eed3123c8c7ea8ad103d2eaf"
  },
  {
    "url": "assets/js/44.1f73344e.js",
    "revision": "71180e98c9d6410dcac2d4f88c235670"
  },
  {
    "url": "assets/js/45.867af048.js",
    "revision": "07b12a2e2c952b8e7456201d8c388676"
  },
  {
    "url": "assets/js/46.9894cf60.js",
    "revision": "151d6ec38932ce5b40be91352cc6ec8a"
  },
  {
    "url": "assets/js/47.06e459ae.js",
    "revision": "4607503299e7e688aba57dc84cdb80d4"
  },
  {
    "url": "assets/js/48.02a7379b.js",
    "revision": "64c14f31c869bd32eb1b0c885f0ca1ae"
  },
  {
    "url": "assets/js/49.62dff197.js",
    "revision": "7d626507486ed1c6d325940f7030bae1"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.758369a3.js",
    "revision": "6d12c4b6dd1f40f3e0dbb688a8ef1460"
  },
  {
    "url": "assets/js/51.22f01d99.js",
    "revision": "7e2eace9863048c5446f9753865a5266"
  },
  {
    "url": "assets/js/52.5a8f6acb.js",
    "revision": "464057c8434dc7924edc8c09eff60add"
  },
  {
    "url": "assets/js/53.551f708f.js",
    "revision": "a0016d344edefce1897868feb5928851"
  },
  {
    "url": "assets/js/54.fc77a0a0.js",
    "revision": "20bdd36b571c985d90c000ab03eaa059"
  },
  {
    "url": "assets/js/55.273a0ecd.js",
    "revision": "ec5e614b58cb51f8e9e61c7be88cf363"
  },
  {
    "url": "assets/js/56.6e997f89.js",
    "revision": "c9bd83338b67241f5aa1e373fe644322"
  },
  {
    "url": "assets/js/57.66dc2b16.js",
    "revision": "71b93e0c71335201c4e9dd18edd4a512"
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
    "url": "assets/js/9.2e790c1e.js",
    "revision": "155004c37dfde7da3d350d3438757abe"
  },
  {
    "url": "assets/js/app.5277fd7f.js",
    "revision": "9fa1098fab119ef98af0c9b4085c83ba"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "4f4a51b146acd2728309f4a4adb92adb"
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
    "revision": "39e62106324574db85302a05d433b860"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "f591e0deb50593598bd722b889755221"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "fb32897ee6b5997c8483639c17c3b079"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "84cc780c9d13bdcf1d2d42748ba15182"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "a4ad02271244a9823f8f2c4cac4189d8"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "f809f86123cbc1c89ab7391af3d1b012"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "7bbb0db7019e654cd9ff691a9759b8bb"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "dd3472fa182994e12c9ca6a09898e705"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "cb1af964861c2a12bb17045b20068e65"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "d5df393efe18b451149c049e431bd3bd"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "621df7ce344b4b45dd500328bd118db3"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "f5f42640b4a6b92227ad2d500fe07a8f"
  },
  {
    "url": "guide/index.html",
    "revision": "2c4cf62ebdc88e2a6cc51004d9afe795"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "afcf3abd75728622e615431dc1cf0006"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "dbded05fc91f2fba14b6d6a8a9835bf7"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "670d3fbe157b28232da20d9ac83b2063"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "c049d9de096871b0de16d6d649117772"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "33fc18cf01021841d0c08d54b9707ef8"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "b056b87d575bed0b25c13928e5ac3aae"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "d2eb3adc4554f6942b635f99d2ca5e28"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "64aed75cd9047225dd1338e6411182a9"
  },
  {
    "url": "guide/information/support.html",
    "revision": "6db6f278670a9fbbf182664362fa5a41"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "af9aa9759e8809dbab0cf7ee39ff10ac"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "bb1f5b8fb525d77130a87a44f07f677d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "87219eb005c0c26cd6d5fbaa1ab1e62f"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "9f18fdcbb9ca8d079ed23d8deb4e182e"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "138735498bc6b56de007197ddb151435"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "5139d4b1190b0a7750b588daf46d0731"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "1c255191172e575a2beab811e7bb9cdd"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "2d3d75e9840994d3931236a8682a4973"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "ef7ccb87560ec5eff21a40a324f989af"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "60cbba713825b57b5063e33b385a2bfb"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "86a7aef9cf086b9fcbf7dadd5ea67901"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "021e0443a139bfd1d4282469cd12fe6c"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "a0db8f3b412fd4c7075bb64cfc272c2d"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "3a6ce7ac3e3b050d87cea4513d4b026c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "e773019ec10ccb2bf102cbe0ecfff021"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "66884d70a93f52c36bd3730b97754a04"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "4dcdcc4f013a2c89809d831ede9d8c75"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "e885b5aeba46b0ef8f888b4bb4c68fad"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "a03404ae71546ad77ea88969723dab1f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "fd0e348e12120f9c372bd6db234ed91c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "89a252e4ccf12e6565fe55435558c2c8"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "c4781debbff657fed3196a3060176a7d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "fe292ff634bbc765b4dbbb5efccd8ae5"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "157923d708c47e287731871ea79c0c33"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "d546526f008ef4ed7f99c72445114e9d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "051acee0b7da7f7711554956756cfe0a"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "6365406e48517bd6503319b13c810deb"
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
