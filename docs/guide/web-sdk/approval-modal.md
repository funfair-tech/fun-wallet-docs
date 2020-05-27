# Approval Modals

## Sending Transactions And Signing Data

The FunWallet has its own approval modal. This will appear anytime you need to sign something and gives the full details of what you're about to sign. This is hosted in the FunWallet itself which protects the dapp from being able to hijack it and makes the process secure. Say we had an evil dapp this stops them being able to send transactions without you knowing. This is not optional and can not be turned off by the user due to security risks. The SDK handles the popping for you so the dapp does not need to do anything.

### Sending A Transaction

<br/>
<img :src="$withBase('/sign-transaction.jpg')" >
<br/>
<br/>
<img :src="$withBase('/sign-contract.jpg')" >

### Signing Some Text

<br/>
<img :src="$withBase('/sign-text.jpg')" >

As you be using `web3` or `ethers` any rejection or approval will be resolved through the provider you are using, so no code changes your side to handle any of this.
**HINT** A rejection will reject the promise.
