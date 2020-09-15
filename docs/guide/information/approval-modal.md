# Approval Modals

The Wallet has its own approval modal. This will appear any time you need to sign something, and gives the full details of what you're about to sign. This is hosted in the Wallet itself which protects the dApp from being able to hijack it and makes the process secure. For example, a malicious dApp would be prevented from being able to send transactions without you knowing. Due to security constraints, this is not optional and can't be turned off by the user. The SDK handles the popping for you so the dApp doesn't need to do anything.

### Sending a Transaction

<br/>
<img :src="$withBase('/sign-transaction.jpg')" >
<br/>
<br/>
<img :src="$withBase('/sign-contract.jpg')" >

### Signing Some Text

<br/>
<img :src="$withBase('/sign-text.jpg')" >

As you be using `web3` or `ethers`, any rejection or approval will be resolved through the provider you're using, so no code changes on your side are required to handle any of this.
**HINT** A rejection will reject the promise.
