# Leader and Follower Communication

## Introduction

Since the Wallet can't trust the dApp hosting the client, it can't pass sensitive data through to the SDK, because that's hosted on the dApp and would mean the dApp could get access to that sensitive data (e.g. the private key), which would be an unacceptable security compromise. The 'Leader and Follower' solution allows communication between the `leader` and the `follower` without the dApp being able to intercept the data, allowing the Wallet to have two instances of itself running for reasons described below.

If iframes are removed from the DOM, it kills the instance and when added back to the DOM it reloads itself. Also, if you move an iframe using JavaScript it also reloads itself - so there is no such thing as `magic iframes`.

As the Wallet needs to be authenticated and then never reloaded due to it holding the user's private key in memory, this causes a bit of a problem. Front-end apps of today use awesome frameworks like Angular and React, and developers want to take advantage of lazy loading and other solid approaches. If you just had one instance which never got removed from the DOM it would only work on a very basic Web app, hence where the `leader` and `follower` come in.

## What is a Leader Instance?

The `leader` is the authenticated instance which never gets removed from the DOM or moved. The `leader` is the communication window which speaks to the SDK. This is in charge of spawning up a new `follower` instance and runs the show. Your dApp will only ever speak to the leader when it needs to perform SDK calls. All event listeners and messages will be sent to the parent from the `leader`. You **MUST** only ever have `1` leader - the SDK will throw errors if you ever have more then one.

The `leader` instance will be in an `iframe` hidden away in the start of the `<body>` and invisible. Once the user has logged in, the [`authenticationCompleted`](#authenticationcompleted) event is fired and the leader is completely authenticated. Any sensitive data passed between the leader and the follower is RSA-encrypted so nobody can decrypt it, _including_ the dApp. The leader will keep everything in sync going forward (like nonces, blocks etc).

You should never use the `leader` instance to show the standard UI as it doesn't route to certain views - it's mainly used for the communication, approval modals, KYC process and player protection. If you want to show any other Wallet UI please use a `follower` instance to do that.

## What is a Follower?

The follower is an instance you can spawn and destroy whenever you want. This is what you would use to show content on the UI for the Wallet. You can only ever have `1 leader` and `1 follower`, due to synchronisation being essential. This is a fixed limit.

You must only ever spawn a follower when the [`authenticationCompleted`](#authenticationcompleted) event has fired and you know the leader instance is authenticated. You can also check this by using the [`isAuthenticated`](#isauthenticated) SDK method. This again is all shown in the Wallet integration test app.

## Secure Communication Between the Leader and Follower

The leader and the follower communicate using the [`Broadcast Channel Api`](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API), or via cookies. Safari and Edge do not support the native `Broadcast Channel API` so they communicate by saving and reading cookies.

<img :src="$withBase('/leader-follower-authentication-flow.png')" >

As you can see in the above flow, all data passed between the instances is encrypted, meaning if someone did get to that data it's useless without the RSA private key. This private key is never exposed and is held in memory within the instances.

## How is the Leader and Follower Communication Secure?

💡 Every message between leader > follower and follower > leader is encrypted.

💡 Even if the dApp could snoop (which it can't), the messages will be a blob of data without the RSA private key which is held in the instance's memory, which means it's a useless blob of data.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 A dApp can't get to that as it's protected by cross-site scripting and standard Internet security.
<br/>

💡 Broadcast API is something supported in most browsers, but not in Safari or Edge.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 This can only broadcast to its own domain. For example, `wallet.funfair.io` can only speak to `wallet.funfair.io`, so it’s never exposed to anyone else.

💡 Due to differences within Safari and Edge, we had to write our own broadcast logic for those browsers, which uses cookies to read and write values to each instance, again protected by the domain.

💡 As client-side code is holding the private key in memory, there's no physical trace of it anywhere after you refresh. The encrypted session data may remain, but is useless without all the other encrypted data as it's double encrypted. This is also removed when you close the tab.
