# Block listener

We expose a block listener which fires when a new block is mined. This normally is a huge pain point for dApps as they have to monitor transactions by polling every x seconds fetching the latest block, this is essentially guessing when a new block will be mined and also doing a lot of unnecessary http requests. With the use of blooms with the block listener it allows your dApp to be able to do some really powerful super efficient stuff with minimal code. This block listener can be hooked in even if the user is not authenticated, or even if your dApp handles > 1 wallet provider. You can still use this block listener if the user is using another wallet.

The block listener tech documentation can be found [here](/guide/web-sdk/sdk-event-listeners.html#newblock).

If you want to found out how you can benefit from using blooms take a read [here](/guide/how-does-it-work/blooms.html).
