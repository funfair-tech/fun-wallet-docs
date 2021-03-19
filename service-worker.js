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
    "revision": "4e599790e292a783135118fbadafb8c3"
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
    "url": "assets/js/11.9eba4f7d.js",
    "revision": "c44da4066a7057071e356d8b206dcd62"
  },
  {
    "url": "assets/js/12.32aa9719.js",
    "revision": "38821b631fde74d2fe26bc76c34ac9bb"
  },
  {
    "url": "assets/js/13.b8110229.js",
    "revision": "879518840f783931d5bbc60fe10d65cf"
  },
  {
    "url": "assets/js/14.7aa287a5.js",
    "revision": "231148d58d287b8c9b1325367a3069d9"
  },
  {
    "url": "assets/js/15.5ac62dc4.js",
    "revision": "cd0d217529af4c698d2e2543e63ce9fc"
  },
  {
    "url": "assets/js/16.67421f56.js",
    "revision": "17415cd6e28a72699809b3d6d8b140df"
  },
  {
    "url": "assets/js/17.87aecc11.js",
    "revision": "b300115ab0922cded33be853d55f363c"
  },
  {
    "url": "assets/js/18.ea512ac8.js",
    "revision": "f836675ad21af3e14876996d06388f0f"
  },
  {
    "url": "assets/js/19.861411fd.js",
    "revision": "e9ac6cbefbb481aebc716664a686164d"
  },
  {
    "url": "assets/js/2.7b9da207.js",
    "revision": "7d506b62dffd1e41b330cac8abdf7f23"
  },
  {
    "url": "assets/js/20.b1e62622.js",
    "revision": "3e20691955c89ccff0c52891cf6846b8"
  },
  {
    "url": "assets/js/21.aae0cc0c.js",
    "revision": "67c04bc490b2e53e9e154529beaef5e9"
  },
  {
    "url": "assets/js/22.1dc6de8c.js",
    "revision": "0d2d469a07a419a1845f060e93e6b6c5"
  },
  {
    "url": "assets/js/23.9a8681a3.js",
    "revision": "042d365c2f4815992465b50aa565bf65"
  },
  {
    "url": "assets/js/24.7c72e58d.js",
    "revision": "9626765aa1d39aeaea7cf8ca55c5aa69"
  },
  {
    "url": "assets/js/25.9549004c.js",
    "revision": "70e0fdd84bb7523b26fdc692b509497a"
  },
  {
    "url": "assets/js/26.b0c1fec3.js",
    "revision": "54f05c1213c7cba2533ba7693ab0beee"
  },
  {
    "url": "assets/js/27.11d419fc.js",
    "revision": "469434fc08473ea461d3e90e8d4e119d"
  },
  {
    "url": "assets/js/28.753033f3.js",
    "revision": "302d4c551499a9b9b06cbb43ab40053c"
  },
  {
    "url": "assets/js/29.ce8b0845.js",
    "revision": "0bb8ebe3d7b504c6571d6ecd30052d59"
  },
  {
    "url": "assets/js/3.28d81154.js",
    "revision": "d292b194120982a11268001c64d9bcf0"
  },
  {
    "url": "assets/js/30.3dfbca13.js",
    "revision": "9a3dba4c4ca11ba5f4523a39ec9ca564"
  },
  {
    "url": "assets/js/31.4ddd79ea.js",
    "revision": "863cf299b9e6b685ceb82031712fc5d5"
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
    "url": "assets/js/34.5b3b40ed.js",
    "revision": "1d600d91a3ad463d041ecfefe6d95771"
  },
  {
    "url": "assets/js/35.14f0a744.js",
    "revision": "9450becebda4afd67a6a66af68dd6e30"
  },
  {
    "url": "assets/js/36.b9d53bb7.js",
    "revision": "06d48b66464dc0571c2c3b962c2901f0"
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
    "url": "assets/js/41.9cccf362.js",
    "revision": "f104dc242953ce2329efbf70cca38f3f"
  },
  {
    "url": "assets/js/42.c73bffe8.js",
    "revision": "8e89968c143d11536658ffaa0637874e"
  },
  {
    "url": "assets/js/43.5f36a386.js",
    "revision": "5435c810eed3123c8c7ea8ad103d2eaf"
  },
  {
    "url": "assets/js/44.368e88da.js",
    "revision": "7274540803d0145d1b755a8ef8917ca3"
  },
  {
    "url": "assets/js/45.fb2c86f3.js",
    "revision": "1f8404a701eab567e9e2fef2d27f6060"
  },
  {
    "url": "assets/js/46.5578d673.js",
    "revision": "6f311fd6e18a7dec90fe8099701b4eda"
  },
  {
    "url": "assets/js/47.66d5d73a.js",
    "revision": "9e755ace19c2361054cfc9abceef5560"
  },
  {
    "url": "assets/js/48.a3c8b197.js",
    "revision": "72362a83737467c6cecf61779065eaed"
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
    "url": "assets/js/50.7219226d.js",
    "revision": "3f666888c3b5e9c80c0a749eb5842dad"
  },
  {
    "url": "assets/js/51.70ad87aa.js",
    "revision": "cfd44ce25aced8301ae809dac5416ca3"
  },
  {
    "url": "assets/js/52.0027beee.js",
    "revision": "78cbd6fc86d83e3606cd877a94615b16"
  },
  {
    "url": "assets/js/53.0d1cfaef.js",
    "revision": "e0bf4594cbc5c16ce0d44e444cfe86d2"
  },
  {
    "url": "assets/js/54.5c0bc88f.js",
    "revision": "78721b264ffbc0de4a2b9a4cf074460e"
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
    "url": "assets/js/57.2484e8e9.js",
    "revision": "3f900c497d07bdf2726f271c9123a8f9"
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
    "url": "assets/js/app.d91c7db6.js",
    "revision": "77330ba0ce40dbf1d7944042244e7698"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "51c25f90bc87948b71c202b6d5000435"
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
    "revision": "9891fee28ef61edf17339564da3e4811"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "d70e99d9a98add8cb277d6ae413ebaff"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "7e6b3c9269d9908271812b63dc6e9a46"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "3062fd23db1cbf681b4c285e1e8a66c6"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "ba5a4a4b9ace3a9e08790f23336cb0a6"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "f0121e5223844f5c8b3a60a9b6adb0c2"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "f2f66014e5202d94f1f64218394fbfd6"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "2e9b227d40ccc1e21a649518996f8d56"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "af9fa0ca5718e5e283cf43200e5f22a1"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "4e1d94d90692528da10f93a992d5e9b1"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "ef8c0731a3fc3f8d72f29e83806fe549"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "e60713f96585c463e986fd4045bd43e1"
  },
  {
    "url": "guide/index.html",
    "revision": "d0e148c15fceafe752541ebaa766038c"
  },
  {
    "url": "guide/information/approval-modal.html",
    "revision": "6cfaa04a3ae0fc49f3e58c69380ef305"
  },
  {
    "url": "guide/information/auto-resizing-iframes.html",
    "revision": "ac1bccc0c05b1fcf5fb53324b2e85421"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "6bd95c59edc8cae0c97b936e54ad9b42"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "c9e7b771b2d34570a2e9856120ce05ac"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "6e3f2c3d8311895516446c2d434e6c52"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "1ce91c96d8327108c44b34757d4b72ee"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "b15fdabe1fe9c5ee35368897147177f5"
  },
  {
    "url": "guide/information/self-service-portal.html",
    "revision": "8dd5bc2f1dcaa8eb0512eb13ed3cd675"
  },
  {
    "url": "guide/information/support.html",
    "revision": "08b573927b328eadadb0b512860e13c5"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "a619a93b7aa61b085b6174ad464bab03"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "d6f12524ca969c5da697ecfeb46ae09e"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "1fc80e1046dc8b9f94a833e78939df75"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "d993cf168737b6796f377aef54190a27"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "cb80cc0fc9a0e13ef5dd59bf0dd23aaa"
  },
  {
    "url": "guide/web-sdk/angular.html",
    "revision": "d9788807ce1c5b8453e5f7a33fedd718"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "3c3f7461f8cfedd7aa6177204e568bab"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "fef5cc3e5f6c267e28d59e536ab08bee"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "feac0b23074afcdb2b52404056e17fb1"
  },
  {
    "url": "guide/web-sdk/live-demo.html",
    "revision": "c3991b8f50633d71f65f3599a32ed3fa"
  },
  {
    "url": "guide/web-sdk/native-js-or-another-framework.html",
    "revision": "577ae2f27fe0014064380ffcb6cda560"
  },
  {
    "url": "guide/web-sdk/react.html",
    "revision": "094d6380d0422feef04793d229ce3639"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "5aacdda058e8aba20f1db08a8f480e04"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "a7760ff1a45bddb50e44603c3b5749e0"
  },
  {
    "url": "guide/web-sdk/sdk-methods/auth.html",
    "revision": "953ecbf83253ff2aab340907f6dcfd37"
  },
  {
    "url": "guide/web-sdk/sdk-methods/currencies.html",
    "revision": "f21ecb5899e3b53e002c8fa2a315cb23"
  },
  {
    "url": "guide/web-sdk/sdk-methods/custom-signing.html",
    "revision": "4c353ee8b1c7f11286bed1f0cc5b1a2b"
  },
  {
    "url": "guide/web-sdk/sdk-methods/eth.html",
    "revision": "173cc264aa844e1b559cee7cd98d129c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/follower.html",
    "revision": "671c7cb74fae5a9a78ce0c38ee6b9167"
  },
  {
    "url": "guide/web-sdk/sdk-methods/init.html",
    "revision": "076434bef7df6d2a2b5eef5d55c0ef4c"
  },
  {
    "url": "guide/web-sdk/sdk-methods/kyc.html",
    "revision": "fff4f73716c18f0d9e95d3cf0357d2c3"
  },
  {
    "url": "guide/web-sdk/sdk-methods/language.html",
    "revision": "d3566201148608d958c528bdf75ec71e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/marketing.html",
    "revision": "a33397e71dc2e4341ff07cac94e67c7e"
  },
  {
    "url": "guide/web-sdk/sdk-methods/networks.html",
    "revision": "14b2c15e3a73a044ffa6bfde821ef059"
  },
  {
    "url": "guide/web-sdk/sdk-methods/tokens.html",
    "revision": "890d67b185fcc810f4cc4c31810882a2"
  },
  {
    "url": "guide/web-sdk/sdk-methods/version-info.html",
    "revision": "e5997397ebb2d85ee02c3dc92a26a3a9"
  },
  {
    "url": "guide/web-sdk/vue.html",
    "revision": "5c96d9d84c56e9889c1bd4566faaeacb"
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
