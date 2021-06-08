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
    "revision": "b011bc390beecde037ec3010fce73838"
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
    "url": "assets/js/10.136bda5a.js",
    "revision": "80f810d56a347cc120f3e97a7ad84cb7"
  },
  {
    "url": "assets/js/11.c2018726.js",
    "revision": "274252b19530929cee126f50ac97fee7"
  },
  {
    "url": "assets/js/12.46883c3b.js",
    "revision": "5df68c0d108b5b2e9321a8bba1aa1909"
  },
  {
    "url": "assets/js/13.80d6346f.js",
    "revision": "d9ceffb9db89157d1662be0a9aba0495"
  },
  {
    "url": "assets/js/14.14ac35ce.js",
    "revision": "85f21dfe47467634a0a4dab2c6ea615c"
  },
  {
    "url": "assets/js/15.c4db3cca.js",
    "revision": "96154d9cfdd0c8a4a235e120ca5ba53a"
  },
  {
    "url": "assets/js/16.c5b9d7d3.js",
    "revision": "0ebbc42ccafb57e4a7f1ff5309078ff9"
  },
  {
    "url": "assets/js/17.ade5fb0a.js",
    "revision": "871a0405f3641da8595a33cdc41508ff"
  },
  {
    "url": "assets/js/18.184cf279.js",
    "revision": "bac19542822b221f74b3be4dd8ebbc0c"
  },
  {
    "url": "assets/js/19.de384e79.js",
    "revision": "458c8ea74d8deded47957fab551c9d19"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.86fd1e0a.js",
    "revision": "be0c7e0cf9df7a0fab2c3bfc55ed3ad0"
  },
  {
    "url": "assets/js/21.0f0426eb.js",
    "revision": "7c295e7e7e47f3fb64488745ed22ecd6"
  },
  {
    "url": "assets/js/22.f1bd4ace.js",
    "revision": "6101ac173aeefaeb87d8d958ff2b0750"
  },
  {
    "url": "assets/js/23.a3494fa0.js",
    "revision": "a43a949b55b4c71ef898f5d2ebdc232a"
  },
  {
    "url": "assets/js/24.f106fc1c.js",
    "revision": "32876a006896932313ba3672055fd1f9"
  },
  {
    "url": "assets/js/25.9549004c.js",
    "revision": "70e0fdd84bb7523b26fdc692b509497a"
  },
  {
    "url": "assets/js/26.2cc62620.js",
    "revision": "ac99b063d44c3e086ef6c3175d53c795"
  },
  {
    "url": "assets/js/27.757bb0ea.js",
    "revision": "28de3965d8ba19c05898cb3e9213add8"
  },
  {
    "url": "assets/js/28.ce55f5cb.js",
    "revision": "4e59100cf049770f261cc3184d857d62"
  },
  {
    "url": "assets/js/29.6d4cccee.js",
    "revision": "a5bcb426059be69b83915f9783860ae2"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.0879bd28.js",
    "revision": "51fc08bd1bc9d9118a70359bc0f3298f"
  },
  {
    "url": "assets/js/31.745cd81e.js",
    "revision": "741d68dba967cb70b99df99b7055085e"
  },
  {
    "url": "assets/js/32.c513284a.js",
    "revision": "e68d3be93d954aa6062f1a48a59122c9"
  },
  {
    "url": "assets/js/33.8669f065.js",
    "revision": "30bf1abbaed77146b3c7d7bf2d44634b"
  },
  {
    "url": "assets/js/34.5b3b40ed.js",
    "revision": "1d600d91a3ad463d041ecfefe6d95771"
  },
  {
    "url": "assets/js/35.aa2b2095.js",
    "revision": "cd6b83df596cda2e26e2ce3a9369edec"
  },
  {
    "url": "assets/js/36.ae30bc7d.js",
    "revision": "84d9d2efc8c8f967e587b2a291083007"
  },
  {
    "url": "assets/js/37.69d2c531.js",
    "revision": "44175447924419c00cf40c18b7a0cf4a"
  },
  {
    "url": "assets/js/38.c694d564.js",
    "revision": "930eb6f8de303423761f80ff1b039ecd"
  },
  {
    "url": "assets/js/39.195ffb9c.js",
    "revision": "48c3ace7b7783c24d77e03e68092f8c9"
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
    "url": "assets/js/41.2d4a7d15.js",
    "revision": "0f0e7817926492ac511ad0b220533727"
  },
  {
    "url": "assets/js/42.92def178.js",
    "revision": "684358f8e3f8875b2631d9a61240268b"
  },
  {
    "url": "assets/js/43.5f36a386.js",
    "revision": "5435c810eed3123c8c7ea8ad103d2eaf"
  },
  {
    "url": "assets/js/44.d39362e0.js",
    "revision": "d792393028a4de7311858fb96e298d73"
  },
  {
    "url": "assets/js/45.7a59249e.js",
    "revision": "e5a5a6fdf68dc7a053c077360ff13a1c"
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
    "url": "assets/js/48.230f5676.js",
    "revision": "a1f98541f55c6a217a4b2560994e9314"
  },
  {
    "url": "assets/js/49.f2c6c9bf.js",
    "revision": "f6815b7ad01f663f0064c22be5619e60"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.94cc3368.js",
    "revision": "ca681961acb82e9b1b08481ac91c3cae"
  },
  {
    "url": "assets/js/51.63996ac5.js",
    "revision": "f0514796216d215c02fa70ed85b8073b"
  },
  {
    "url": "assets/js/52.cbac5fe0.js",
    "revision": "1e67879bb27bf9edca5c71408b7fb1a2"
  },
  {
    "url": "assets/js/53.166c6ae1.js",
    "revision": "479d05ead2c4d32826a999eddbfc35bf"
  },
  {
    "url": "assets/js/54.567f4895.js",
    "revision": "5a4286171baeda6b774c921d834daa29"
  },
  {
    "url": "assets/js/55.8a889745.js",
    "revision": "fd30d91f3160342f749bedc52a07a1dc"
  },
  {
    "url": "assets/js/56.7b0b253d.js",
    "revision": "aea74c5f96ac3957a96a30f76d1da16c"
  },
  {
    "url": "assets/js/57.61bfee78.js",
    "revision": "8cb1d0c3619fdc1d2d4fadbff1761923"
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
    "url": "assets/js/9.ffb4316d.js",
    "revision": "a29d7bf9fb79fc182c704b87e957e7c8"
  },
  {
    "url": "assets/js/app.9dc914a6.js",
    "revision": "0d688e78416ec535c8aa5469806418a1"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "048ac248477c10862f421eacd5668c91"
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
    "revision": "7d399e8c4d359a410a44a70a13266dd1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "32afba191f692e3831ce66e8005e17cf"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "eb04b10b7d1c89830e7e2108b48b57c9"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "fd8fc187eb19e2ebacf9942331fb6461"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "03b0eaa790242ad3a7853c4aac9908b1"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "ec82fa7ca31898aa8862100dfdf572ae"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "706ba455ac099e667405c79c8d8779c7"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "89df9aa335756c57e941d4c33e3cdf1a"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "af43ff57fd013b90ffe3ca46204b5a9d"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "06ceebf0b299e3bfb365b5cc4dc039d0"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "615fb1bffffd5277a6d80a9b1a6a45ea"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "445244a8228871d854926dce51f0cbec"
  },
  {
    "url": "guide/index.html",
    "revision": "aecaf9fa2dfd82d4cdff8990748148e0"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "eea7233966e6f89833489605bda5ef76"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "894a348408348db99f6062e3eff89253"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "359b704ade77453289e5697b39678245"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "adf474641c0aab8d56cac0cf5e8bd2fa"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "1bf2a27064bb9a906cedc0b10a3535bc"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "85b2cb0bc9462990f2df036301ee9db9"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "97526fd2e7a87ecc44c6fbdb66d01223"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "0a1f09bf17f1dd75e404ec83103bbe41"
  },
  {
    "url": "guide/information/support.html",
    "revision": "62a956d1b1481fe5ac59f43a5abc1fbf"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "d7d57e9a41d87a83527429c878776cd5"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "583747c34856edef6d147fae342fc05d"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "3c856daa047ec52277e34e4a59b88053"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "b9849e86c9265dd72d93eed60fe943ee"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "21a6f275ca41a7d64337012e11b138ae"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "80b2108674ac750492a6b69d955bbc01"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "b8ffd5ab8c5fcb2c03bc28a697ae7868"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "6c574a9d4d9db487b1c5acf064616491"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "23f1886fd8b9105c91eb92613a4b3bb7"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "bcfb3c236f7603a139e64e20047fec7f"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "26d3da029c55ad9d049e5f75f338e3f5"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "8f46935d5775e151414f18cf8af5719d"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "dc7f646661f43c50855d73a039d2318e"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "9712b1fa8b7e06fccba869c6e99bab4f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "29c8e904ca01caa6617091f79955e100"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "55280487efab6842afe8de3d8cd9d009"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "4fdfb5f17a110f20112060a4ce51da1b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "2920aa146f8a8f029605d642f5d93ffe"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "da85fe47b1ee3e25a5b79244a4051240"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "eb3bb9b9ccc15d28a111c67117486045"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "e40c94017575caf74a9f799728eb48e7"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "e2155cc3d3366ab9f98241087509e1c6"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "143f5f13f5b8e2b2a1d7a4ec8e6e057f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "195ab94a4430d384d46bd069e38afc39"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "375ad3310ebf508e5965ec08d440eb54"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "4d8eb55ad4bf41da1eaf1078314d3e5e"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "141c49c930b3c08643ceb2dab92c9272"
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
