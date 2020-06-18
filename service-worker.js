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
    "revision": "335d7aad7f792202e663a098113321a9"
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
    "url": "assets/js/11.d2865aee.js",
    "revision": "a85a15e5c6dd9d9e7f425e72550da85f"
  },
  {
    "url": "assets/js/12.ceb3bb60.js",
    "revision": "cf819a231a229ccc7266cd6c5704b91d"
  },
  {
    "url": "assets/js/13.08041c8c.js",
    "revision": "7d1998d4b1c33a7f4fd8490c6820bdad"
  },
  {
    "url": "assets/js/14.d854c661.js",
    "revision": "6b3e0da314223c36ae1b0b82a6190484"
  },
  {
    "url": "assets/js/15.0d11e2fe.js",
    "revision": "6d7138a461889cc1a447466f38e971dd"
  },
  {
    "url": "assets/js/16.2a85eb2c.js",
    "revision": "d2229e1466f43f029a4c1b163f5926ba"
  },
  {
    "url": "assets/js/17.09c5e52a.js",
    "revision": "6c968db85c6a2f0c3427c6f782859827"
  },
  {
    "url": "assets/js/18.29eff908.js",
    "revision": "d488ce4422340ebc67302361f1631c19"
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
    "url": "assets/js/20.3e6aaa4c.js",
    "revision": "3da939bb9924ecb1c4359f176e6925ab"
  },
  {
    "url": "assets/js/21.1478dac9.js",
    "revision": "922fb199a24aae01dbe639d1a9c405c2"
  },
  {
    "url": "assets/js/22.13133d31.js",
    "revision": "3f77e24ca1e829f5d871f1e8ec797294"
  },
  {
    "url": "assets/js/23.3003a220.js",
    "revision": "29ff4b971cb8200068c3ff9079535233"
  },
  {
    "url": "assets/js/24.461c3fbe.js",
    "revision": "15562a358076e4e683850302b1be7467"
  },
  {
    "url": "assets/js/25.21067a62.js",
    "revision": "160da30baa255b0c61fbe0a364cc9030"
  },
  {
    "url": "assets/js/26.ce8b61c3.js",
    "revision": "8945e5f05c76496cbdc094bd6c9708af"
  },
  {
    "url": "assets/js/27.58e9b851.js",
    "revision": "77a6d3e395f4270c7eeefc8b9139ae0f"
  },
  {
    "url": "assets/js/28.8b7c9862.js",
    "revision": "27e29cef991c17852fb16e0fb15e02b6"
  },
  {
    "url": "assets/js/29.42f66348.js",
    "revision": "159d538979d04fa589a6ac8699f2b013"
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
    "url": "assets/js/31.929eacab.js",
    "revision": "d2fe090d7cec3a0b2333ac3cd3890362"
  },
  {
    "url": "assets/js/32.3bec5bfe.js",
    "revision": "b0017cee7fc1e8d43fb4af0b23ad213f"
  },
  {
    "url": "assets/js/33.cc30d81e.js",
    "revision": "d2b4e6a28748c78f013c449147b19982"
  },
  {
    "url": "assets/js/34.c94490c9.js",
    "revision": "bba87cac7a827e0977ba9d8eaa3b0e2d"
  },
  {
    "url": "assets/js/35.4f67390b.js",
    "revision": "583a04bd0f2736e06e425939fcf274cc"
  },
  {
    "url": "assets/js/36.967e96d5.js",
    "revision": "b4155de29aa38f70a796d373a986f645"
  },
  {
    "url": "assets/js/37.0fd0c842.js",
    "revision": "dcd5cff6a11436fdd72abd88aea12a4d"
  },
  {
    "url": "assets/js/38.b73c912d.js",
    "revision": "b373931c521de85d6073721f26b93925"
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
    "url": "assets/js/40.1fe6f6fa.js",
    "revision": "c4a78e4b10501a364affacee281dce24"
  },
  {
    "url": "assets/js/41.6113b5b0.js",
    "revision": "2960cc6a90b0b67f5d85279da7bdbd3f"
  },
  {
    "url": "assets/js/42.ec41e9e2.js",
    "revision": "0d3b1ef28abb535b9185250c06c16cdf"
  },
  {
    "url": "assets/js/43.946a0d2b.js",
    "revision": "d91eac6a0b8ab08b3694b366175b8286"
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
    "url": "assets/js/app.bf7dc533.js",
    "revision": "c8e76c9618a4f76ea157f87b47a1e6cd"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "a55c6630c202e848a8fcd6cade7f24a6"
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
    "revision": "cbb1c0654b9b70bc4a62bbe2e291caf4"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "1b8d41058059c395ea707d81cbdc62df"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "45fc5154781b4e73631d8d1185eea7dd"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "bb33bafd244095ec0d46225e6b97e4f0"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "c127929d47e68b8fd2eeafc1a41fa1b3"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "9adf5f4ed7ddfece5d9620b7ec28c74e"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "355d5914670b031dca9e6427db51aa7d"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "da8322af5111e02b6dea41a994f6276b"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "84d48a78507f8eb1545412c9cd984125"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "4cd4c419f16d35a975c8f1674e380108"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "246759c7593d83b92dcc7a9e5437a4fe"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "1e82ee382af3db03d332b5842ffeb2f9"
  },
  {
    "url": "guide/index.html",
    "revision": "c06939cbe14b2b4d5e7e19431abac6a6"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "600ec720f7bd7e046eaa95cb8428311b"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "696da5ce962a8303633ce51dc42b1e3d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "3867a570cca4fbb47ed8bad705d988fa"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "60d3c63fcbf5642b835ebadf69bd6e3d"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "d6bd745b6012bd46cc3e0ffa3b5705c4"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "f99caaa12f1ff3ed64e218c7c14fda86"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "525dbc3f72a206e571d3d99524263363"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "aad6231394343b2b21139af1069c97d4"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "396dddaefd6d3284aacc0b34d2239820"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "1cd762fb09b14a20932bee0f4756910a"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "30a2095d80e8c968742eb2ed406115ba"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "6d9d331b7b6ca6282c90a3799983f2d5"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "2d2ca50c0e3228985d7c8a7c4c89dc52"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "703b438bd30ba4055a9062d5629f92db"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "612d8234f97254e5ae3ac5af614d8c82"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "20893aaecce6353c2165cad0cd0ec204"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "1b798135bdc989b41bca40acdabf3bf0"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "18a0e360051fcd7b53bd7f6ffee75379"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "3e224c3d16281fc1a60a21ffed2944d7"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "6fb780926c46474bebbc65a2f8737b26"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "8bba9ccddd7ca71a6882223e9cfb0c4c"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "b9dd9d30d34effd11e61d74d74db4f65"
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
