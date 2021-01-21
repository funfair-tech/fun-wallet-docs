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
    "revision": "7c8d49e304bc9d2bc8cf4c0702b0507f"
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
    "url": "assets/js/10.4169d171.js",
    "revision": "13a382d6145884f88ad293a85663ff23"
  },
  {
    "url": "assets/js/11.406cf11f.js",
    "revision": "e7a4f2b785344ef535c671da89a1ce7a"
  },
  {
    "url": "assets/js/12.aa39c71f.js",
    "revision": "3384c6bc4b0ba04b59c258e4b56eddb5"
  },
  {
    "url": "assets/js/13.8b4dd6a4.js",
    "revision": "07b601b03c90acdb843e41a117c433c8"
  },
  {
    "url": "assets/js/14.f3b5ab53.js",
    "revision": "9366674739c3c78ac6e24401f52ee0bf"
  },
  {
    "url": "assets/js/15.7c199fd9.js",
    "revision": "19b7bfbc9fce35dc303da09cd177470e"
  },
  {
    "url": "assets/js/16.23635d78.js",
    "revision": "f6d8aa0d80cca28d38634f71caa8aa29"
  },
  {
    "url": "assets/js/17.d916dbdf.js",
    "revision": "89760102be59058087b7ebbbd5dcb93b"
  },
  {
    "url": "assets/js/18.47e043c2.js",
    "revision": "516b026fcea60b956d02e7d5cb1bc0a6"
  },
  {
    "url": "assets/js/19.ce85e800.js",
    "revision": "156f4168e4bd9213e72f201dd457b3ea"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.febeab2c.js",
    "revision": "9312120e9ad291052b23f27223811e04"
  },
  {
    "url": "assets/js/21.e6451efb.js",
    "revision": "f53b8673d533315fda7049f0034f9675"
  },
  {
    "url": "assets/js/22.54a25987.js",
    "revision": "c45818e27be0d71298e0a81b40e4801a"
  },
  {
    "url": "assets/js/23.ed84c64d.js",
    "revision": "69c25bca202cd3a2d50b8eaa7f5b8584"
  },
  {
    "url": "assets/js/24.faeed520.js",
    "revision": "fe24cd77ebe5cfef319b69a8664ff2a6"
  },
  {
    "url": "assets/js/25.096ae099.js",
    "revision": "e9d384155f40fd174b614c531cecafc0"
  },
  {
    "url": "assets/js/26.15267995.js",
    "revision": "eedd098fe7ee6f6b8189aec5b4d02a67"
  },
  {
    "url": "assets/js/27.61d3f514.js",
    "revision": "faa3e3418411e16456d94ff78d2d8ef8"
  },
  {
    "url": "assets/js/28.6e8d4b1e.js",
    "revision": "810b30058a755861a5b8a599bc976e92"
  },
  {
    "url": "assets/js/29.2e0aecb7.js",
    "revision": "6fa9de7cd1de96b99a64c0e83fa975b9"
  },
  {
    "url": "assets/js/3.24480461.js",
    "revision": "3b76135aa28abf2dc60e165db273d5a0"
  },
  {
    "url": "assets/js/30.6bbcc7d5.js",
    "revision": "5cb20ebeacd086f697f42d9124f80b2d"
  },
  {
    "url": "assets/js/31.fa4a2209.js",
    "revision": "f4ff646fd8aaa54ce29354e2181e71ef"
  },
  {
    "url": "assets/js/32.7644e0e6.js",
    "revision": "e3572665044b5dd18596b48e458b6b9a"
  },
  {
    "url": "assets/js/33.1b217073.js",
    "revision": "ac0210fae2faa0c7066cd9a2c1fb91dc"
  },
  {
    "url": "assets/js/34.042483c4.js",
    "revision": "0af70c4b9a33ea4c5367e41792e8689b"
  },
  {
    "url": "assets/js/35.efe4cbdf.js",
    "revision": "4935e12953b609bcde3b5e1d42de4cdd"
  },
  {
    "url": "assets/js/36.8054976b.js",
    "revision": "612fecfce8e4b7a86a0b21b095225307"
  },
  {
    "url": "assets/js/37.34cb5466.js",
    "revision": "0a21e3f5b8b9d36d40b7fc826fa53aae"
  },
  {
    "url": "assets/js/38.e4eb4476.js",
    "revision": "9056b7585166ee52cfcebfd48c0a7150"
  },
  {
    "url": "assets/js/39.1da41130.js",
    "revision": "6a4222d6ad48886dde6b904109099c55"
  },
  {
    "url": "assets/js/4.6ff6bccf.js",
    "revision": "0752f5b80041ef1c24f58f14192dc51f"
  },
  {
    "url": "assets/js/40.e5e10524.js",
    "revision": "a234a6a8c0f801a57fb80d1d3f54016c"
  },
  {
    "url": "assets/js/41.437bff89.js",
    "revision": "d30d91bd626686e14f80dbb9a31de576"
  },
  {
    "url": "assets/js/42.9eddb092.js",
    "revision": "be21ede3e42be5c7c78315dfebd70240"
  },
  {
    "url": "assets/js/43.03650805.js",
    "revision": "7d46993de25b53f86f46511dc85c5450"
  },
  {
    "url": "assets/js/44.925d68aa.js",
    "revision": "602923966879d12bd576024183ee8b39"
  },
  {
    "url": "assets/js/45.17b3889e.js",
    "revision": "b0a8225d7435ded3ee716edb95547b3e"
  },
  {
    "url": "assets/js/46.d02c98ef.js",
    "revision": "e32d2fd9862c30640a213557e86c0c98"
  },
  {
    "url": "assets/js/47.212113c8.js",
    "revision": "2f34386fa394d8152182a85b12d4f9a4"
  },
  {
    "url": "assets/js/48.e8d4c395.js",
    "revision": "fa210e08e0d5ecc0cbcdf8ca7e99279f"
  },
  {
    "url": "assets/js/49.4656753d.js",
    "revision": "675c8f6aab02e6be39a79c99369ff83f"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.0b6cbf79.js",
    "revision": "6a734d276bba8e011545ddca482251fc"
  },
  {
    "url": "assets/js/51.788ad9c5.js",
    "revision": "4cab8f22b311ed846b8d667a4b881422"
  },
  {
    "url": "assets/js/52.ba4237df.js",
    "revision": "2f5fba74c40bb49ea1b10bbc4904a597"
  },
  {
    "url": "assets/js/53.18e3deb1.js",
    "revision": "ace3456b5df68e90cdbc49847056ecc3"
  },
  {
    "url": "assets/js/54.bb682149.js",
    "revision": "74174339bb4e301dffef755a01a9b227"
  },
  {
    "url": "assets/js/55.3eaf0c14.js",
    "revision": "b3385357b51f8a0be7fcb9b1890f630d"
  },
  {
    "url": "assets/js/56.a6f4ec1e.js",
    "revision": "f756753d8fafebb6de246d603ce04a8e"
  },
  {
    "url": "assets/js/57.1288cb59.js",
    "revision": "863051c45cfb97b6ae3fcbd04dfa7680"
  },
  {
    "url": "assets/js/58.c4e5f675.js",
    "revision": "6639caa65470bb4e41e5d99b37756100"
  },
  {
    "url": "assets/js/6.f6e3edd5.js",
    "revision": "a65022365832aa5edcfc32f1d0052e47"
  },
  {
    "url": "assets/js/7.1d7dad65.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.ba002602.js",
    "revision": "c0df522ace047d132c38428d4810d51c"
  },
  {
    "url": "assets/js/9.ed713b71.js",
    "revision": "88b27b81f840f9f68f4cc51c84ceabfc"
  },
  {
    "url": "assets/js/app.759089cc.js",
    "revision": "26aaf1623f4177c77efa9a3250290260"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "cabceff38fbc5c5852a31e6d3bdf3dc8"
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
    "revision": "6d8d9b0e366ee60bde0fc40a30587903"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "38ac8d329fe939c7541a743931dde435"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "8f3b62b0a4db8e3c35ed704ad9e5c2a1"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "1e6251b2211c69c8f587f3002ed9f420"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "ecce1b13c235a6743468decf3ba7f982"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "f718349a44939cb30653ff2aa8c22730"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "968113bf20c6dfe355a027ad0e213af2"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "7f6bc31f8ae4b444209be2a024a295c5"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "c0632a78ea005d56a6830b9f847e0dbd"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "69eaea025baab14f2f05f263e8d68714"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "411d75a1fa2a2f17e30de2526be9f516"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "61ec9215a1578db3bd3eb982c01e4ceb"
  },
  {
    "url": "guide/index.html",
    "revision": "91cdbeede43d5552359dfa8bd218a706"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "72ea386dba32837ca3728cae08e0813a"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "e0b03b539bc946ed05a6b1709aceb75c"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "4d5271f46b2df26ba53ccba026977d27"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "8f17a8eb3e955a7a2825f6a6e27b0883"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "ad92e0c733bc5024582647d7333dfb57"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "58993735ac55bbf6ca1f3fe4b4c8cc0b"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "159385d61374fa03176278820e612657"
  },
  {
    "url": "guide/information/support.html",
    "revision": "00efc21052690849d3ba2f8d62a3b871"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "eb2b6648202baa48470d013e3a302d44"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "19a9b6b580506abcc3ec58600e7b8a65"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "f24e10017b8f2caa08cfd7360824345a"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "5be815309adf30eddeeb2224c9005a88"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "fc980048c81e25ff67b1ea0eb4a8f047"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "c7fb735e410fafe5cd84081067814f4a"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "21b8a17101a3d07787b65f3eea1d289a"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "e5e8ced5c714435581f5154381853150"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "9c7cda14a0aadc52e5ece1e294baf76d"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "6c31027e774736a790ecf509270df9a5"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "f91a3c55dbe9e980d967809cb5f8f257"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "ebc902b0dfad3ad7cc23067c4bbe35d3"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "50cdef4b0ebdcd1d6c365295035ef20d"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "09b34bf69d5b470a7508d52de7d7aee8"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "b3adf2da9250e87530a217129c660acb"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "be151f4bc311abfa1f85b711bfaedd3c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "c1134361bb8e772cfa5de40954d12588"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "0d42d9cca2baa6444a73918a8fe6258c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "279fc05a3b5e8bb84c1b46bfea370b31"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "f8646b16e20d214584f27dd609c551d9"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "d6686149a6bfac3b626ae0cba04d170d"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "c814d27d6bdcfa7c5672513afe2e7d46"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "b529b955623d142a6bd4e65230c47513"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "8cc76e1cd84b8267b1d3c815be4304a1"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "829fd25c3c8a47dd5a0fee94901791e9"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "5ca38fd06d46f749743292f5df8a3754"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "abe54969da234b59a4014f79e0c4d84f"
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
