# How Broadcast Works

*All of these messages are exchanged synchronously.*

💡 Leader requests follower to create a RSA key pair > follower generates and sends back to leader > and so on...
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 It follows a set of rules before moving on, allowing us to more easily handle communication to an authenticated instance from an unauthenticated instance.

💡 Each tab session instance can speak to each other one, i.e. all leader and follower and popup instances linked to the tab use an identifier to allow communication.

💡 Tab-to-tab communication is prevented.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 This allows someone to be able to be logged in to the same dApp on different tabs and one tab does not affect any instances loaded in other tabs.
