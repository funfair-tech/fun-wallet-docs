# FunWallet Ethereum Provider

## What Is A Ethereum Provider ?

💡 Most dapps use web3 or etherjs to do blockchain stuff on the client.

💡 These all follow “best” practices on interfaces and expose everything you need to do blockchain development.

💡 Also the nodes and signing all needs to happen in the wallet client not the dapp client as that’s where it has all the context.

💡 A ethereum provider is something you can inject into the constructor of web3 or etherjs and override the point it does the JSONRPC call.

💡 Minimal changes if any to the web3/ethers code.

💡 Once done our ethereum provider will proxy all the JSONRPC calls to the wallet

## Ethereum provider flow

Click on the image to zoom in.

<img :src="$withBase('/fun-wallet-provider-flow.png')" >
