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
    "revision": "f1769f3bc33017841ff708ea6b46b246"
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
    "url": "assets/js/10.4625b6fb.js",
    "revision": "c3b0d90ed317adc82ba83dbc51f56230"
  },
  {
    "url": "assets/js/11.6a733a61.js",
    "revision": "d7226a6861a21a010d00f45e0b6a05bc"
  },
  {
    "url": "assets/js/12.b7a0cc17.js",
    "revision": "4bb7f424c01c41b17ee0f192436a95b0"
  },
  {
    "url": "assets/js/13.3eb8d381.js",
    "revision": "4cf3a38053a86bb156edda738e9a45d6"
  },
  {
    "url": "assets/js/14.b82d1002.js",
    "revision": "864358623e87bced06e950dacb8550a2"
  },
  {
    "url": "assets/js/15.c7f40ebc.js",
    "revision": "1856b56d2ee5b015e71946cf04cc0ed5"
  },
  {
    "url": "assets/js/16.d180afde.js",
    "revision": "b05deb952f962a968e089ee0546f8aaf"
  },
  {
    "url": "assets/js/17.164e7cac.js",
    "revision": "2ba61386f86ed492e2e20c55452ed994"
  },
  {
    "url": "assets/js/18.d733c602.js",
    "revision": "1d8645fb442d99c20e646b8effd12978"
  },
  {
    "url": "assets/js/19.2e3992ab.js",
    "revision": "927f31d42c9313ab4c3daad763c3f674"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.5f9b62dd.js",
    "revision": "d8b0311f6c7097e2449ed8840ea9cd38"
  },
  {
    "url": "assets/js/21.55a694f1.js",
    "revision": "121c8cdaa166cec2e885caa4d89cd272"
  },
  {
    "url": "assets/js/22.2b31739d.js",
    "revision": "f2e16ea0a3204b0cc2e1cd22619515ac"
  },
  {
    "url": "assets/js/23.742def7b.js",
    "revision": "86d88a0f8df444129a827aca69e38a36"
  },
  {
    "url": "assets/js/24.6389fc72.js",
    "revision": "36411f0d28c92cac501d52fed29d097d"
  },
  {
    "url": "assets/js/25.c29f350c.js",
    "revision": "f965ee79622a0fe0cd4ac68b9e330796"
  },
  {
    "url": "assets/js/26.6b8259f7.js",
    "revision": "d9c42b0750a8c1d3b1f7e2d6ae84303c"
  },
  {
    "url": "assets/js/27.4b2947e4.js",
    "revision": "40d85dd9312574ecd3907972ef9270a6"
  },
  {
    "url": "assets/js/28.e3ec2ea5.js",
    "revision": "05bc619a2c9d294d4e8f2c6135d61519"
  },
  {
    "url": "assets/js/29.76efa763.js",
    "revision": "fab48f25c57c155e44c6b107dade6abb"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.a68e76b4.js",
    "revision": "d9d4ccd20599d4661a7423020a0b4a13"
  },
  {
    "url": "assets/js/31.fc4edc0c.js",
    "revision": "e0f6607d4b8e805059d84a00920a9b7f"
  },
  {
    "url": "assets/js/32.1ca215ae.js",
    "revision": "00fbeb260fb1acb89e4f275aaed1ef37"
  },
  {
    "url": "assets/js/33.82702840.js",
    "revision": "613b6d51e733bf0cd604c69c2d1d160a"
  },
  {
    "url": "assets/js/34.3ae24228.js",
    "revision": "0fc6a4ba761c0968a052faf8cc2c6826"
  },
  {
    "url": "assets/js/35.304689f3.js",
    "revision": "e5adb833bb5728fdc1ed8a7d845a300c"
  },
  {
    "url": "assets/js/36.b3998dcc.js",
    "revision": "710992962f120cc3cbd2114f1c3f05b5"
  },
  {
    "url": "assets/js/37.31186d2a.js",
    "revision": "4d552c83fdfab5144cc58b5a5363e89f"
  },
  {
    "url": "assets/js/38.6b0475c9.js",
    "revision": "e0145515069ac2bcefdcc696ccaa67e2"
  },
  {
    "url": "assets/js/39.607630bd.js",
    "revision": "fbfc1efa5653b2e571747f0338e3dc18"
  },
  {
    "url": "assets/js/4.2a1378ca.js",
    "revision": "b75cd931ee03e692f920cb84d676d5ed"
  },
  {
    "url": "assets/js/40.23d5e085.js",
    "revision": "5ca52909f1346d3638b6b77bb2af8d19"
  },
  {
    "url": "assets/js/41.7e5d4f65.js",
    "revision": "13b3c1c6e22cf0a9a04798e286fd07e6"
  },
  {
    "url": "assets/js/42.9f30d010.js",
    "revision": "c301702ae984ec24f005f00e5c6b590a"
  },
  {
    "url": "assets/js/43.7a4d61e6.js",
    "revision": "bbba3b81fee3c44d4162c2d03dd7fb44"
  },
  {
    "url": "assets/js/44.e4ac11ba.js",
    "revision": "453cb96534076de0e3647ae4b56e00e2"
  },
  {
    "url": "assets/js/45.986f6fcd.js",
    "revision": "e9a9fd21cfc23a919a0ed057065b8321"
  },
  {
    "url": "assets/js/46.db20da67.js",
    "revision": "97b020672a03ce46950b05260d4e3112"
  },
  {
    "url": "assets/js/47.50b30977.js",
    "revision": "cb38e70da760b88e092073780354c2bf"
  },
  {
    "url": "assets/js/48.4dd04f93.js",
    "revision": "7fdc156d2e92bee2a1c6d7610674cc02"
  },
  {
    "url": "assets/js/49.1bcc8bc8.js",
    "revision": "0f1a96ff918761e6d37149ebf1579361"
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
    "url": "assets/js/8.2ee958ac.js",
    "revision": "0e96e4625435295dceb004253368ce68"
  },
  {
    "url": "assets/js/9.52ed1a4f.js",
    "revision": "ceb82f6ed258572fc95d73a11b493057"
  },
  {
    "url": "assets/js/app.8e98a068.js",
    "revision": "ba8eef575bae0dac5b1130ab784527ac"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "daeca0d148e9413664d554c54652317d"
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
    "revision": "951c9ef25655b7fe6a6d73898fa30a80"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "8937a7682c3eb08364121f5136379374"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "fb892b014a5b9042b975c1d29357b005"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "0b5c33e4dc116bf6f45fd5c1b180c66f"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "e3193325463f8dcb81edef64ca05fb75"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "50cbbabf4a4b0a2a0fef924d0c288cd3"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "689df35b8caa6c600eb7e2ee6f364590"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "29272299d60a06fbaa540d929977739e"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "6ad36fae2fa0487ea237fb1844a12dac"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "83cebc47b51174d639fe918de3d4a7a4"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "414111e402b5f585dc47812b8d244e97"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "770e03c8e2edfd29517d056f559c8f8e"
  },
  {
    "url": "guide/index.html",
    "revision": "a120a52d14ca8f48e8221a4a9f514e33"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "2475b425431c2cc4f7443c634ec5443e"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "e57d2d124680c181fd4069e868f3e864"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "2d30314e5bd36b5e702ae400daa66958"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "1a2c19dd2c5602e1b6fa7939815758a2"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "2a3cbd5c556970b946efc621c9eab1e8"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "c62a07df9a8a8ba31e717f52e7b9683e"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "25f829d177714ca4bbc81a81d9017924"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "c43e0a614b661e1260cc6c92cf1bf5f3"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "331b739d8428a54ac6803cc051f02b51"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "5536c18a7d87cd6ff422d3dd2b0097ee"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "52e4662c95f96ddb25486a73918f6fd2"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "fcff676f869fdd9b2744946ff8a78d1d"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "69b8527bc42e0fa5ccc957844d051399"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "da510a815612257acf906facd0ecc1a7"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "989e88727fa74e3877555b486235139a"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "dcd57a07dabe889e29deb784c78cc1b0"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "300d102ee3988cb989e93d97a1e0ec4e"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "5e0ed9f78872e40e4da3763761d699e6"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "b0b6bc5634e8a0ef30987b5bb210114b"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "53a0d154ecc5c43a136ec7cdcf30c781"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "7c1d0510556a02967a6b1503349547e5"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "f0b1d0b5229af09278c137360aea812c"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "3bb648ffff4ce683d7f09c9ed72d3ac9"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "a21676e2c2cb6ec0c6eb3a8b14cd1b72"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "ee8d0178f49d4f89758169e8f4925000"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "93f6fcea51ac060637663d26f70cdca2"
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
