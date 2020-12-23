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
    "revision": "3f7f8a4538d8e66480433a76677e7a82"
  },
  {
    "url": "assets/css/0.styles.65350e26.css",
    "revision": "9409d7e5d34593a0cbebefdc633d15d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d0addf3.js",
    "revision": "1699cf3dab9c190fcbf97fe31c484a11"
  },
  {
    "url": "assets/js/11.5bce2786.js",
    "revision": "61e7d01373d1c416656ce0f1a6a14361"
  },
  {
    "url": "assets/js/12.92dfc82b.js",
    "revision": "1e99a061f7e116a21db3ca6767b844e6"
  },
  {
    "url": "assets/js/13.13f7b782.js",
    "revision": "3be192ff971f5956baa759c65698e583"
  },
  {
    "url": "assets/js/14.a7975a68.js",
    "revision": "5c841038f388ffbcaf860dba14eaa042"
  },
  {
    "url": "assets/js/15.59caac8f.js",
    "revision": "10ed23b622cce4e90134ce19fa48c9ca"
  },
  {
    "url": "assets/js/16.67421f56.js",
    "revision": "17415cd6e28a72699809b3d6d8b140df"
  },
  {
    "url": "assets/js/17.8160fa1d.js",
    "revision": "d924aa724787de2a851daf29d5015c9f"
  },
  {
    "url": "assets/js/18.f42220ea.js",
    "revision": "87bb58d832cda875bf0e57d1cc9424c6"
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
    "url": "assets/js/20.b849ff56.js",
    "revision": "51a904e690aa2c2fdce8c379ae3238e5"
  },
  {
    "url": "assets/js/21.8e97f2e9.js",
    "revision": "aaf560b7072c81c97a2cacab865bc0be"
  },
  {
    "url": "assets/js/22.be129e1a.js",
    "revision": "6d308037f0a317f621d857d5e74f729e"
  },
  {
    "url": "assets/js/23.acd93a67.js",
    "revision": "57e735f97b284216304e522480006b73"
  },
  {
    "url": "assets/js/24.f6841b51.js",
    "revision": "76fabdaef1b28f3bf21d085fc5c224b6"
  },
  {
    "url": "assets/js/25.7bcff97e.js",
    "revision": "63021ef517f5edeb13fbbaee44b0ebbf"
  },
  {
    "url": "assets/js/26.371e5269.js",
    "revision": "836ead9f9d977a8e9b611bedbd8332be"
  },
  {
    "url": "assets/js/27.6c225b8c.js",
    "revision": "257691e0c28e0ca765a15359e8a5243a"
  },
  {
    "url": "assets/js/28.0aa2c104.js",
    "revision": "ea2923cde8c332b9d5d9e5f0eca4bd0d"
  },
  {
    "url": "assets/js/29.600ce231.js",
    "revision": "766f14732a973dc6c53b51e951bf97c9"
  },
  {
    "url": "assets/js/3.8f1ecd03.js",
    "revision": "193ddb4be7fc295fc8d346a9b7701c74"
  },
  {
    "url": "assets/js/30.67b44be6.js",
    "revision": "8f9f4ac1bf8de4873aa996caf792645b"
  },
  {
    "url": "assets/js/31.6b69be06.js",
    "revision": "2339bcc285322b8c1a28cf76cf338786"
  },
  {
    "url": "assets/js/32.0b8c0dfc.js",
    "revision": "4af28658c50492b90647b1aa3317df39"
  },
  {
    "url": "assets/js/33.688a4ab9.js",
    "revision": "9be2d367af00e074ea4bf9b6bcc91567"
  },
  {
    "url": "assets/js/34.b5f2aa09.js",
    "revision": "fcbd24ab0d368bdfa87cd5a90417fa44"
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
    "url": "assets/js/39.6009b2b5.js",
    "revision": "ae2915d8dd590dae2ae7442961a8b03e"
  },
  {
    "url": "assets/js/4.abae5d29.js",
    "revision": "867d8b0e2554872c1cd2b40473b69163"
  },
  {
    "url": "assets/js/40.1398efee.js",
    "revision": "02265def7a8be2f2ca5ac624385c7bee"
  },
  {
    "url": "assets/js/41.94a189e3.js",
    "revision": "af2ae3c22ae996a64ec00ecb34687da1"
  },
  {
    "url": "assets/js/42.fdc76957.js",
    "revision": "a58fe36189592fff613587f8d78d2482"
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
    "url": "assets/js/45.db847f61.js",
    "revision": "b7588ea0cbac56b88d3fff76d470c863"
  },
  {
    "url": "assets/js/46.6b917d7f.js",
    "revision": "6a99f62c4efb9d0d07e4b1ff3c38e98f"
  },
  {
    "url": "assets/js/47.45bea7e3.js",
    "revision": "4daa2b54efee5715c5f3db7e082b74d0"
  },
  {
    "url": "assets/js/48.458d0f4f.js",
    "revision": "6005fdf7a84867557385475499a3adcd"
  },
  {
    "url": "assets/js/49.c7c66322.js",
    "revision": "a6ce1f7eeb498dabd818d5467a9782c5"
  },
  {
    "url": "assets/js/5.ecad0ec5.js",
    "revision": "2eb627d106ab901b40d55b78afa59f2f"
  },
  {
    "url": "assets/js/50.a70f4e9a.js",
    "revision": "b6f65fafedd8cf2e579fe5f3c4ce4877"
  },
  {
    "url": "assets/js/51.c322e84f.js",
    "revision": "6c95e3426a365a6d66abce6d40df6b2b"
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
    "url": "assets/js/54.7a8598db.js",
    "revision": "fe9585d5b6ef25d4a5306f97d9b9c847"
  },
  {
    "url": "assets/js/55.231b483b.js",
    "revision": "951a5c88599f454eb9fb4ef88c2a36fd"
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
    "url": "assets/js/app.088b4ceb.js",
    "revision": "bc906db679d4eba5261cfc6ed714a047"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "89f97bcfa5bcb3a7af01bb89935b43f0"
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
    "revision": "dcb1b41a48ff71c25e38487d3b79cc3d"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "8017bd77e32f16660cdbf041041892bd"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "996759be20e2bfd6a3cef272bae1c4d3"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "afe103f2f8cfb5ab387b8b0e9926cad9"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "ca66b3334a6a933cb03256f474e9ff06"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "47b519ad73bc6188dd5b57289dea2539"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "02993bf8b23c369cadcb6a0fba309408"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "e053ff73be303e4dc906b3dec3121cb7"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "49e2ea364cb45fc30d66275944aa6585"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "9d9e2180a17237e56f098b3c80897be0"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "327e351a86a4319dc0f0e86e0e70e732"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "b056fd54073ce09233a116cd13894614"
  },
  {
    "url": "guide/index.html",
    "revision": "ce1ed332647295b59843259d8573b504"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "1e2b642df1064080489ff0fbfbf5ff4a"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "469c5f9360d63bf9a3af62a2b9e29d9d"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "19b6ce0e50f7cdd6c0e14adbde3b3400"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "d53dd21e049690e27291ade3a9d1e735"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "7bd6031d94545cb4ad7ba73ee6544d43"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "d92cab8a8530b98c75b6978c7be8c340"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "039c39d88bcde158ba3188d0f5ae9407"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "86a540041442fd54d3d894a019722b1d"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "f64724586fd5484c0b09259c7e1031b8"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "1036b3e69cf4b6ac12a0167a5a463f71"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "fdb155ebb6b097e2b9014c8db746d0d4"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "93e5594f7a1b8a4a7f482c8617ef6051"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "a51b4e3b6b3800707d7b1f43c711e842"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "f3615a48f1a124be2c2b8fcd359ddedb"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "4ea749ec2e5521bc2ce21f88f874daf9"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "eb08c45ddb59e2083c11e27eba53ebdc"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "b6e7f01266b8d20970be7547dbb70ebe"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "dc3cb26519f1f1185c464b85455e569a"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "8451566e9df548aec78ecc8bc856187f"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "05e44a0e4d2122130298f73dc1d678b5"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "0a2eddabb66289e184f99152f7341379"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "2ba77b5748dd5a0c1a5a888efcdbbbc9"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "7fb5e2c42d8897b8cdf4b4ab8f799542"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "d88d925ae7063fc8a1be4df606680b35"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "f4a0a6c4696a05d8c9689fac5f142e86"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "b9010fe50c4f7553a6e0825df08732fa"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "df824177bd336f3e21204d54edd31031"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "1a462f02550c33e6795d8ddddcd51704"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "5cfa09fc2502f0af269a2b28ce25db6b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "a2bb04282f816e5b893dde90724e413f"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "1d87b1906c284bfc1e49026a04eb226a"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "f7783e3f91600f9aaecccdca9b51229b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "eb2690a36e320aa7ed4fcf32c8a11e55"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "85ba713768b1553067aae594a4204af3"
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
