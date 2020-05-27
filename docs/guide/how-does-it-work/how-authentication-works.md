# How Authentication Works?

💡 Wallet server never sees the private key due to encryption.

💡 Private key is held in memory of the wallet client which is protected by standard cross site and internet security.

💡 A iframe is embedded in the top of the page which is invisible this is what we call a `leader` it’s in charge of signing stuff and also in charge of spawning new UI elements and all the approval modals. It never gets removed from the DOM.

💡 Once loaded the dapps hooks onto all the message listeners which are all of exposed by the SDK.

💡 On click of the sign in / up button the dapp client calls the SDK to popup the authentication view. The embedded leader creates a secure encrypted communication channel with the authentication popup, passing a public RSA key to the authentication popup.

💡 Sign in / Register / Recovery action happens and the popup now holds all the authentication context. It then encrypts all of the authenticated data with the RSA public key the leader supplied and broadcasts it to the leader instance. At this point the leader is authenticated and can do the signing.
