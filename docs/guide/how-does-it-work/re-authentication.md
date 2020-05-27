# Re-authentication

As the server never sees the private key and all the decryption of it happens on the client side once you refresh your tab your private key is now not in memory anymore, as we got back to it using data the user entered which again is not on the server like password. We have handled a way to restore authentication on a refresh.

**HINT**
Currently the authentication can only be re-authenticated if it's in the same tab as we use session storage, and session storage has a new storage per tab. We are looking at a way to make this a wider re-authentication moving it to local storage but we have a few issues with that which we want to address before changing.

## Double Encrypted LocalStorage (setup)

Click on the image to zoom in.

<img :src="$withBase('/double-encryption-localstorage.png')" >

## Restore Session

Click on the image to zoom in.

<img :src="$withBase('/restore-session.png')" >
