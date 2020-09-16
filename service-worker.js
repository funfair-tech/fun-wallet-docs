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
    "revision": "a2d92faa2f5f318809aef3dcfd942711"
  },
  {
    "url": "assets/css/0.styles.bf254ac9.css",
    "revision": "c73f18efdc29ed1491203a61071f9186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c7e6a1b.js",
    "revision": "31297d9fc773c1285d1a810730b6fac9"
  },
  {
    "url": "assets/js/11.e5c1c2bb.js",
    "revision": "017203efb311a7d9649a88b1137cb666"
  },
  {
    "url": "assets/js/12.387a4b96.js",
    "revision": "95fbf4a51a8d2278aad21d3f89073abc"
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
    "url": "assets/js/15.2d603731.js",
    "revision": "b47c094a838a842ed0e312714a66b816"
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
    "url": "assets/js/18.7463cfe7.js",
    "revision": "3fed0709a8b81d0771516d356fec44cc"
  },
  {
    "url": "assets/js/19.2b1547c1.js",
    "revision": "7e424514e7f2dabcafecf2db39e3aef5"
  },
  {
    "url": "assets/js/2.ed1124da.js",
    "revision": "97434c3875ce04154457d0866afa7fa4"
  },
  {
    "url": "assets/js/20.b69f7de3.js",
    "revision": "b561d589528de9a61708951f62a2f24c"
  },
  {
    "url": "assets/js/21.ecdb9b52.js",
    "revision": "1e8e293de3b631dfeb05445a73f47254"
  },
  {
    "url": "assets/js/22.d01c17ee.js",
    "revision": "5521b3dd08dae4f8390e6fad368cde71"
  },
  {
    "url": "assets/js/23.6847fec5.js",
    "revision": "566019041e704bfaf54231bbe0575cf6"
  },
  {
    "url": "assets/js/24.d1b9bfc8.js",
    "revision": "61ea04fc4875e4f38aa24506adb4c370"
  },
  {
    "url": "assets/js/25.83faa27b.js",
    "revision": "40770fe99aae5a48b9d827a703ff2121"
  },
  {
    "url": "assets/js/26.bf22c3a0.js",
    "revision": "0eebc0e9d6000aca1d6d34844a8339ee"
  },
  {
    "url": "assets/js/27.aea167bc.js",
    "revision": "fd99e8936fc1c5ff888fca5e88647d18"
  },
  {
    "url": "assets/js/28.3a2a19b4.js",
    "revision": "05acdf61a4290a601e7c7a5420170779"
  },
  {
    "url": "assets/js/29.238732a4.js",
    "revision": "282761223f7db4f2973ec5ee80bcb31f"
  },
  {
    "url": "assets/js/3.da8fdf66.js",
    "revision": "a606a5f9bf451242bf1c59c7f221e833"
  },
  {
    "url": "assets/js/30.645e03b4.js",
    "revision": "2e8ae29f2776fbe86b73f2c19b47cfb4"
  },
  {
    "url": "assets/js/31.f57576d1.js",
    "revision": "07d5ca39862098e6777ff267b0d9092d"
  },
  {
    "url": "assets/js/32.2ce10c94.js",
    "revision": "56848a98bd8f0e02b90f3df1734449db"
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
    "url": "assets/js/36.0f5a6e71.js",
    "revision": "db94205d9cf450ca722df60751c35865"
  },
  {
    "url": "assets/js/37.51a347a2.js",
    "revision": "0681839750a8cbb23264882363a065dd"
  },
  {
    "url": "assets/js/38.741d42e3.js",
    "revision": "b5025e2750413c052896f608c1af945c"
  },
  {
    "url": "assets/js/39.fc83967b.js",
    "revision": "3bfca5afb8869ebfc8847638c91550e8"
  },
  {
    "url": "assets/js/4.2dd09ca2.js",
    "revision": "a12b5b26c4bbf6d88ffd47ea2d663581"
  },
  {
    "url": "assets/js/40.7bcfadf5.js",
    "revision": "4b167392d7ab7532aa741cf54c681874"
  },
  {
    "url": "assets/js/41.9cc54921.js",
    "revision": "4b4a2f56fd429467f75a1cd3bf0af542"
  },
  {
    "url": "assets/js/42.8f4aee7d.js",
    "revision": "ff2e448f2584ab83559c30b091ba04e9"
  },
  {
    "url": "assets/js/43.89257f90.js",
    "revision": "1f8c9c66cffefd9d3f4a2056df15a5b6"
  },
  {
    "url": "assets/js/44.c62a60b4.js",
    "revision": "56829e1ab79c0c51e034552c7e7bf02f"
  },
  {
    "url": "assets/js/45.b97dd0b8.js",
    "revision": "5111f86a1ac91047d9571bb2a17ddf7e"
  },
  {
    "url": "assets/js/46.59ef3e66.js",
    "revision": "79b688ea53cfcb4459c7e9c22528235c"
  },
  {
    "url": "assets/js/47.bf9513e6.js",
    "revision": "ea1434ee0b51d4b54569d052fac1d25d"
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
    "url": "assets/js/8.9dea165f.js",
    "revision": "913bce5490e165eda9bee34ae9ba95bb"
  },
  {
    "url": "assets/js/9.19a2fac2.js",
    "revision": "51dc56a323b1c68dcc13204f3b029750"
  },
  {
    "url": "assets/js/app.ca02b16a.js",
    "revision": "2b22db8c05b0d4af41634a7da51df2b0"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "98c669ebc1d9723550c009de6bcfa6de"
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
    "revision": "572b67d5b94cae21d12c54a7e26ccc83"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "005808865969749896b437386d069f51"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "f08fd9ed4112fc2bc7b446adfed48950"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "18a5178b3eac9b66e398e2cb24f66852"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "a076b9980fb3fc807730b6bf13ab27d5"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "e01806d63ea158e2077e0c1b0f7b4c98"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "cf4fd3b0511d031b5e7a80c81183e857"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "9dbfd5abcd37d400265c39c5ebb8d10a"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "db04074a33fd6992986ae255ed4c70de"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "e8282cb3599bdc91b803e462bb9cb199"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "462c9a12bbf0347094ddd36d25bc055a"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "58a884b335a9469a2fd858cce747805e"
  },
  {
    "url": "guide/index.html",
    "revision": "3a8c73f583a715cf05737511be51535e"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "0ebeb3f2fca910b9dd2654892979f3e1"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "eb59bc254323fe173e1b0749a4fc10de"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "565d693bd0b38c554f1227e4668693b6"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "7e59cc7a4bbcfbad38dcdc734057a12d"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "593e82a7803e5e1bad032ceb7060c8e6"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "684022708f264ef00167d2d3f016cbc5"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "dcea3ff5839c79cdf0cdf31400aef384"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "b1a5b44966e4f73c5264d210f4c39dd9"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "9a52cc285d86320767849500502599b8"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "a1fa848687ac3210cc297a3b0875b3ad"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "cbf76e943752bff9196b4695871091be"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "ef2c7f4438683b3b59c4401fc6bae408"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "b748ae242780a237d45f81e19d026b9a"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "ab8e2715460fb9e1fa7295052d159b67"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "8c1b56a78f5882a70b6d1a2fc1a7ab8c"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "9f6f9fa68774bb1da276cd49f3adbd44"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "430dbaa4e5849bbc9051f69a21f82269"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "8892baf5226ad3d8d86fc03a71ca352c"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "271ed77d36b4861a90b9ea41f3799a9e"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "53da4d484f16b9ba9ebdc9a076f3356f"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "ce9aa8cb68fd935a66632167c57c0960"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "5b4c7edac118db66e96debd80df1a8cb"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "ea778b23b04a87fec006181f695fa5c3"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "4090a48f588d584e2f435a5ecceb515c"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "0815267467a5f6ea217871086b46828b"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "145cad7f4d6ec99fa8f20972f339dc08"
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
