# Re-authentication

As the server never sees the private key, and all decryption using it happens on the client side, once you refresh your tab your private key is now not in memory anymore, as we got back to it using data the user entered - which again is not on the server like password. We have implemented functionality to restore authentication on a refresh.

**HINT**
Currently a session can only be re-authenticated if it's in the same tab as we use for session storage, and session storage has separate storage per tab. Implemention of a broader range of re-authentication options is on our roadmap.

## Double Encrypted LocalStorage (setup)

Click on the image to zoom in.

<img :src="$withBase('/double-encryption-localstorage.png')" >

## Restore Session

Click on the image to zoom in.

<img :src="$withBase('/restore-session.png')" >
