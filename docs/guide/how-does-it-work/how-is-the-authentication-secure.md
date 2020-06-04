# How is the Authentication Secure?

💡 Encryption logic makes it impossible to retrieve the master key without the user's email address and password.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 *The server never knows a user's password.*

💡 If you know the password you can always generate the same master key which encrypted the encrypted private key which is saved on the server.

💡 Your authentication token is a hash of your master key, so you can only get back to that if you can generate a master key using a password.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 If this matches what’s on the server, you know this person can be logged in to your dApp.

💡 The server at this point can return the encrypted private key and the IV, and this can only be decrypted using the master key.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 Whoop! You have your private key in memory, so you're able to sign data without anyone else seeing it.
