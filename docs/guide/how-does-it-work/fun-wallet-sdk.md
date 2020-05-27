# FunWallet SDK

## Information

💡 The SDK is only ever linked to the leader instance

💡 All communication goes from the leader > sdk

💡 If the follower needs to emit say for example some tracking information the flow would be:
`Follower emits tracking event` > `Leader picks it up emits it to` > `SDK` > `dapp`

💡 This way we only ever have 1 thing in control and the leader is the master in all of this.

💡 Leader speaks to the sdk for internal tasks without the dapp doing anything.

💡 Keeps the iframe height in sync.

💡 As it is embedded in the dapp it has super powers like storage and other things.

💡 Exposed on the window for easy web use.

💡 Supports full typings.

💡 Handles web3 or ethers libs.

💡 Script is referenced to a place in fun wallet so we can deploy fixes and new features without having to make every dapp update their package. The NPM package is just enums and typings.

💡 Use postrobot to perform nice communication with full compile time errors.

## Method Execution Flows

Click on the image to zoom in.

<img :src="$withBase('/fun-wallet-sdk-methods.svg')" >

## Method Listeners Flows

Click on the image to zoom in.

<img :src="$withBase('/fun-wallet-sdk-listeners.svg')" >
