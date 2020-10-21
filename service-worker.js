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
    "revision": "e9f529fecd968d666dd780e90d58a867"
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
    "url": "assets/js/10.ceeaf9c2.js",
    "revision": "550c1aba81a8ba326ac442a74dec569a"
  },
  {
    "url": "assets/js/11.33123c88.js",
    "revision": "2071da61bb21e576ac052a8ce7fbb400"
  },
  {
    "url": "assets/js/12.e2482db6.js",
    "revision": "e6d6155fbd9b843af9abc8143890acd5"
  },
  {
    "url": "assets/js/13.18a81b7d.js",
    "revision": "2f0b4c65fb2e135fc212ab1b6e657771"
  },
  {
    "url": "assets/js/14.16d22a4d.js",
    "revision": "aaf67a8afa45612c55923abf5cedaa12"
  },
  {
    "url": "assets/js/15.b778d2b0.js",
    "revision": "689e40672505bb6982c25de900b2f290"
  },
  {
    "url": "assets/js/16.1413e8b8.js",
    "revision": "51c94239c81ba301634fa53fab4ff171"
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
    "url": "assets/js/19.b748d3c9.js",
    "revision": "29e480f7f1a6d3b7aba747c7cab2b16b"
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
    "url": "assets/js/21.095f1c70.js",
    "revision": "ce4182803933aa13fbc7eb53977205d8"
  },
  {
    "url": "assets/js/22.18e51fbb.js",
    "revision": "7e693199f23f7cfc454089248fd9f8c8"
  },
  {
    "url": "assets/js/23.742def7b.js",
    "revision": "86d88a0f8df444129a827aca69e38a36"
  },
  {
    "url": "assets/js/24.aa2721e9.js",
    "revision": "fe87859b889520948d1f07a350374449"
  },
  {
    "url": "assets/js/25.c4a72fd4.js",
    "revision": "198131f1ea27a9242dfdf76fa9d1334f"
  },
  {
    "url": "assets/js/26.52665155.js",
    "revision": "effebd8816f79e7d9abc6cc65ccf0459"
  },
  {
    "url": "assets/js/27.aae5ae79.js",
    "revision": "ed3a4430d63b6dc97d32232789025295"
  },
  {
    "url": "assets/js/28.b111c0ad.js",
    "revision": "e0c99fb6a6b053abcd571413b68c3318"
  },
  {
    "url": "assets/js/29.e61ea0a5.js",
    "revision": "6f602879808cd9a00a489a648b7e63cb"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.89139d53.js",
    "revision": "687a5f0f0d6af78cbbb64c513ccc617e"
  },
  {
    "url": "assets/js/31.6be6292a.js",
    "revision": "f1ae3fedaa9a656d7a99b8cb827cf09e"
  },
  {
    "url": "assets/js/32.90a129e1.js",
    "revision": "4d46d69e8ee957241e8c12d8deab7a22"
  },
  {
    "url": "assets/js/33.6580da89.js",
    "revision": "5209c92dbbd0f63cacd78963ee7e501a"
  },
  {
    "url": "assets/js/34.a2b3249c.js",
    "revision": "a3452ddd95be0a31c75194c57ee83d47"
  },
  {
    "url": "assets/js/35.08a085f0.js",
    "revision": "508a77c44e27761c6faeb01b1bb17c4f"
  },
  {
    "url": "assets/js/36.007e0aee.js",
    "revision": "1ccbc7cc2c397faa4e117e03503f1ce6"
  },
  {
    "url": "assets/js/37.88bc04f5.js",
    "revision": "95c6a9df1924659b3a207c1ec511fa87"
  },
  {
    "url": "assets/js/38.e4084f52.js",
    "revision": "c1f9f6c3e46743d66270e82b4fac6695"
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
    "url": "assets/js/9.542199bd.js",
    "revision": "ee2f48a4fecc8d626e6801ce5b13a2a3"
  },
  {
    "url": "assets/js/app.8c43ddf0.js",
    "revision": "d9e1141d382c635ea164186d700d76b1"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "936c30e107c6d3f1f0c2ceefd514ccd0"
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
    "revision": "2ebf1884e777909b6656f85e996e1eb4"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "6dcc7e5586a4560f9766abf3a25241fe"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "d5a6ec0f97835b64cbdf17dc2d49ed35"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "da33e0b86aa20ef93d5c1eb37d37d70c"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "a3bcc23c9f1122ce979c57183b8a1964"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "c275c3accc20c7466c6cb2e5eb2789e7"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "538ec81e74350e035db80a7f8aaba7e3"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "c632fc3e10afd85f10c5ab86168bd521"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "555b46e0d57686996f64b436639eb245"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "0f0d22ae74df2af5f501e58a7aa80be9"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "506961dced09349886cd101708df28b3"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "7ef32625f98d180f80cb61aa4e59cf1e"
  },
  {
    "url": "guide/index.html",
    "revision": "f58baa84fc9e85756fe0cbd57760e803"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "bde7be973dada67041ac6975c38645ab"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "d278eb1ee19edbbc82a1adefeee4ee81"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "eadae1978c069a09811757d3dd02355d"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "1004449abd6b8405decc66746abb6af0"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "e3bed71fd12d7280c14ea4d49f57c8e9"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "9ffe7cc352818c5b74833ecfc858a8de"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "864dc4e8d59c1ce0683b47ed34710d5e"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "d542818b697f57be32f51662973f2f89"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "e9c417c95edb8eae783ff08c630f9eab"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "c2d28f58864c190c7b994153ac7489b4"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "dfff080d03db70132ec0d84667962613"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "7de50a13ccb3e74504bb308f05124538"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "dacefcbff524ce7b246e0091afa95ca4"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "c0b92981a89add1a864e022907bddb92"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "d00246385052f0f4aec9c6b0e10ea357"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "a6cc83dd82cba9646703951ccd1abcac"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "e45ad53590a8cb260621a8c67e543fdf"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "f54835341f631e5626d73332ee7a2d1e"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "ef61ff262de189fd1fdd5e3dbc0aedc3"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "943da11f86ca237a95c5ac50af7120bb"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "81957dded8ebf96bfedb5ed9778e6056"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "e88e72e5dcdfa9c1fd7e9d97a2bee383"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "984c1aa62d18c1967f9f90038b977212"
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
