# FunFair Wallet Ethereum Provider

## What is an Ethereum Provider?

💡 Most dApps use either web3 or etherjs to read from and write to the blockchain directly from the client.

💡 These libraries follow best practices, and expose interfaces that should allow you to do everything necessary for blockchain development.

💡 Also, the nodes and signing all need to happen in the Wallet client not the dApp client as only the Wallet client has access to the necessary context information.

💡 An Ethereum provider is something you can inject into the constructor of web3 or etherjs and override the point at which it makes the JSON-RPC call.

💡 Minimal changes, if any, should be required to the web3/etherjs code.

💡 Once done, our Ethereum provider will proxy all the JSON-RPC calls to the Wallet.

## Ethereum Provider Flow

Click on the image to zoom in.

<img :src="$withBase('/fun-wallet-provider-flow.png')" >
