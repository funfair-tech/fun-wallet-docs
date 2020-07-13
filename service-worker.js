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
    "revision": "4f22ac23cb3e4f921464e56630206f73"
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
    "url": "assets/js/10.18aeb2c2.js",
    "revision": "1c705accab8a6827daf44257fe030951"
  },
  {
    "url": "assets/js/11.77ecbf1f.js",
    "revision": "e2bd94dc1f03ecd98182d8bad8293107"
  },
  {
    "url": "assets/js/12.a28198d8.js",
    "revision": "0a9ca95019ca22c593288d96c68e67fb"
  },
  {
    "url": "assets/js/13.08041c8c.js",
    "revision": "7d1998d4b1c33a7f4fd8490c6820bdad"
  },
  {
    "url": "assets/js/14.3d5f0336.js",
    "revision": "6ebff46a437c4641f4aca805539151d7"
  },
  {
    "url": "assets/js/15.1be9aba1.js",
    "revision": "9ee7927e32b0196f745b243281cff79d"
  },
  {
    "url": "assets/js/16.9b70c3c3.js",
    "revision": "d32828b2626aba50ebd1904488c4e209"
  },
  {
    "url": "assets/js/17.607835a5.js",
    "revision": "e9b85b42672279bceed54ffc48719acb"
  },
  {
    "url": "assets/js/18.29eff908.js",
    "revision": "d488ce4422340ebc67302361f1631c19"
  },
  {
    "url": "assets/js/19.3eae78b4.js",
    "revision": "6415429defdd06957adec0c386986778"
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
    "url": "assets/js/21.e7d1faa3.js",
    "revision": "562583a9bdc7e1627f6b4d3fb174384b"
  },
  {
    "url": "assets/js/22.469eb599.js",
    "revision": "9ff0488ffb2794fe283d8405b6bcd990"
  },
  {
    "url": "assets/js/23.2433c56e.js",
    "revision": "c2be58a0e3dba82c0c033ccca7a9a891"
  },
  {
    "url": "assets/js/24.8db98613.js",
    "revision": "03eda0c73ce3dfc9b31d306c8accf027"
  },
  {
    "url": "assets/js/25.d86a542a.js",
    "revision": "91642f3de42f9c50f43fca33f4126f2d"
  },
  {
    "url": "assets/js/26.988e7d1b.js",
    "revision": "b49f677e0022360b5b509f353f08a17b"
  },
  {
    "url": "assets/js/27.58e9b851.js",
    "revision": "77a6d3e395f4270c7eeefc8b9139ae0f"
  },
  {
    "url": "assets/js/28.01fb2b35.js",
    "revision": "6f6d93ea7f47cd2893f99edd65c9ffba"
  },
  {
    "url": "assets/js/29.a83728fd.js",
    "revision": "c12d25f824cd481c2f93bb222ee18131"
  },
  {
    "url": "assets/js/3.93480ce7.js",
    "revision": "f8c07b059c764c8cd2e867e6a7cb848e"
  },
  {
    "url": "assets/js/30.9aab8618.js",
    "revision": "79dba99b872ca5c4428e3891615720d2"
  },
  {
    "url": "assets/js/31.fd10623f.js",
    "revision": "4f9adf9087e2484d861e2e09460d594b"
  },
  {
    "url": "assets/js/32.3bec5bfe.js",
    "revision": "b0017cee7fc1e8d43fb4af0b23ad213f"
  },
  {
    "url": "assets/js/33.56afced9.js",
    "revision": "8ff8d14393cbc3bb64fd15cfc587166d"
  },
  {
    "url": "assets/js/34.3d24aba2.js",
    "revision": "07594428173794a48b24d527ba7db788"
  },
  {
    "url": "assets/js/35.051e96f1.js",
    "revision": "209b7a6ad6d8d631f004109686d27d4a"
  },
  {
    "url": "assets/js/36.a382db5c.js",
    "revision": "0f54718ccc431f3a4039c39c0b037d1c"
  },
  {
    "url": "assets/js/37.893377ff.js",
    "revision": "da53e5b10020874daa554dbd75b395cb"
  },
  {
    "url": "assets/js/38.d25072fc.js",
    "revision": "0a44934f0fed9d0b91eff59edffd0b74"
  },
  {
    "url": "assets/js/39.7f2c0e48.js",
    "revision": "516697d8f938da6e18db7b300f908494"
  },
  {
    "url": "assets/js/4.e3251b57.js",
    "revision": "6977562f8339582c974ea7fcb1ebbf21"
  },
  {
    "url": "assets/js/40.cc29b309.js",
    "revision": "dfb446d4887b0f73377773e46f5823f9"
  },
  {
    "url": "assets/js/41.1e5fcdda.js",
    "revision": "a0412a227822c3f170d6057b215715ab"
  },
  {
    "url": "assets/js/42.b9fb4d3d.js",
    "revision": "1ba6287deec9d9a9459db114405a6102"
  },
  {
    "url": "assets/js/43.ee8689af.js",
    "revision": "f2d3caaaa43aa2737d8937f5b4a61e20"
  },
  {
    "url": "assets/js/44.bdda4262.js",
    "revision": "33ec018ccf5940ffa214a57b80bbda6a"
  },
  {
    "url": "assets/js/45.aca79237.js",
    "revision": "e6f643cfd8589806294b08a74c876f5d"
  },
  {
    "url": "assets/js/46.6ea406df.js",
    "revision": "82852bb05c96264d7ede81208b3fac01"
  },
  {
    "url": "assets/js/5.c35ce4c3.js",
    "revision": "c99ee90101eea79683975b6ccd2aad64"
  },
  {
    "url": "assets/js/6.fddb07c3.js",
    "revision": "521337d863baf3ac4c7065babdcc983b"
  },
  {
    "url": "assets/js/7.cf304ae3.js",
    "revision": "44f9759ac7ad49044251f56ad9ec31ff"
  },
  {
    "url": "assets/js/8.472fca48.js",
    "revision": "c34263606008a62aac1f40bbfce82da6"
  },
  {
    "url": "assets/js/9.d0806942.js",
    "revision": "0aa4efdeb9c143610092bfa6632b2903"
  },
  {
    "url": "assets/js/app.85d89fd9.js",
    "revision": "4f03744f079d68d9acd5c0cc254a7764"
  },
  {
    "url": "double-encryption-localstorage.png",
    "revision": "3001cce8892f7def8081c26eaea28f3e"
  },
  {
    "url": "faq/index.html",
    "revision": "c3574868c686a02b1cd91ac67540dd46"
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
    "revision": "97f4dd01d83326fa8d75fdb909b48730"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-ethereum-provider.html",
    "revision": "ff355ba31c0d97be07986bf6b59133f1"
  },
  {
    "url": "guide/how-does-it-work/fun-wallet-sdk.html",
    "revision": "ba9fbb7b78e9199debcdc5e1b938f1e5"
  },
  {
    "url": "guide/how-does-it-work/how-authentication-works.html",
    "revision": "695e0d6955d44b32b1b7a1da8ac4a7c0"
  },
  {
    "url": "guide/how-does-it-work/how-broadcast-works.html",
    "revision": "601ab042cc20c30d7398d0f490d542c8"
  },
  {
    "url": "guide/how-does-it-work/how-is-the-authentication-secure.html",
    "revision": "6d1b2f6b01c10528479a9fc25b3efb6c"
  },
  {
    "url": "guide/how-does-it-work/how-popup-authenticates-leader.html",
    "revision": "a35d01006622b7464a0f1736a6beaa33"
  },
  {
    "url": "guide/how-does-it-work/leader-and-follower-communication.html",
    "revision": "50f3b9ebcd42278cb95b11030d069fc3"
  },
  {
    "url": "guide/how-does-it-work/login-and-recovery-token-generation.html",
    "revision": "4605f07e7e0aba07f9150fa8ef100d8a"
  },
  {
    "url": "guide/how-does-it-work/re-authentication.html",
    "revision": "543530707789cc05cf2dfd6ed4377195"
  },
  {
    "url": "guide/how-does-it-work/recovery.html",
    "revision": "9a40d71a9b4202c025a25495df08b55b"
  },
  {
    "url": "guide/how-does-it-work/registration.html",
    "revision": "21e057d7ffd6b81746b25957cfee0daf"
  },
  {
    "url": "guide/index.html",
    "revision": "344f876dbdcddf9908de0c8a18206a72"
  },
  {
    "url": "guide/information/branding.html",
    "revision": "b6589a1a174be0187ce81572995f9cb2"
  },
  {
    "url": "guide/information/browser-support.html",
    "revision": "d48c2bbbe64892c036f5aca009026769"
  },
  {
    "url": "guide/information/fiat-gateway.html",
    "revision": "a0a42549cc99e534ff75e73164d5e4e4"
  },
  {
    "url": "guide/information/getting-started.html",
    "revision": "cf7672b1780e15c111264c1f0e0ad990"
  },
  {
    "url": "guide/information/kyc.html",
    "revision": "69b8db6654347df02572828a21b7089d"
  },
  {
    "url": "guide/information/layouts.html",
    "revision": "d6324c2450db4432a54fa9bd677aa514"
  },
  {
    "url": "guide/information/testing.html",
    "revision": "4d1e17d199b03b3454349126f58f7859"
  },
  {
    "url": "guide/server-to-server-api/authorization.html",
    "revision": "d52fcb977947ff24902d55f70d6faeaf"
  },
  {
    "url": "guide/server-to-server-api/encrypted-user-information.html",
    "revision": "2fb1cb3e8dd973ab3866302b88c06fa6"
  },
  {
    "url": "guide/server-to-server-api/introduction.html",
    "revision": "3eb6934a7397a80ab00015dd005f39b5"
  },
  {
    "url": "guide/server-to-server-api/user-information.html",
    "revision": "cedfe9252c58e4e9192a7ba4f6ea1737"
  },
  {
    "url": "guide/web-sdk/approval-modal.html",
    "revision": "10d43a53fadd6268b91895c2cb924f5d"
  },
  {
    "url": "guide/web-sdk/authentication.html",
    "revision": "4a770922ebfa70e7670b3725ded88bb1"
  },
  {
    "url": "guide/web-sdk/block-listener.html",
    "revision": "89235ec349ab3c989e6db708aa83a45d"
  },
  {
    "url": "guide/web-sdk/ethereum-provider.html",
    "revision": "bb219353ed18adb9c5c678e1b105a42f"
  },
  {
    "url": "guide/web-sdk/initialising-the-sdk.html",
    "revision": "221b761f78e10fb740292c3a91071516"
  },
  {
    "url": "guide/web-sdk/installing-sdk.html",
    "revision": "701f9779251302d8b0ec7efa706a55b1"
  },
  {
    "url": "guide/web-sdk/languages.html",
    "revision": "0ec563136379836f668648c136ad7b93"
  },
  {
    "url": "guide/web-sdk/routing.html",
    "revision": "0fc6e48f3ad251fcf0c491b998750c87"
  },
  {
    "url": "guide/web-sdk/sdk-event-listeners.html",
    "revision": "f3f8e5640598e168f81600d6d247473a"
  },
  {
    "url": "guide/web-sdk/sdk-methods.html",
    "revision": "b70836d2f994eed86829c9d672d3a6cf"
  },
  {
    "url": "guide/web-sdk/setting-up-the-sdk-with-project.html",
    "revision": "61af92d3dd44a428ebf9d7059d14db33"
  },
  {
    "url": "guide/web-sdk/wallet-ui.html",
    "revision": "b66cc74e10ed1d27d4bc664b9c3ba4b3"
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
