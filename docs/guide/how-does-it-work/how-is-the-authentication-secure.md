# How Is The Authentication Secure?

💡 Encryption logic makes it impossible for you to get back to the master key without the email address and password.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 Server never knows password

💡 If you know the password you can always generate the same master key which encrypted the encrypted private key which is saved on the server.

💡 Your authentication token is a hash of your master key again you can only get back to that if you can generate your master key.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 If this matches what’s on the server you know this person can be logged in

💡 The server at this point can return you the encrypted private key and the iv and you can only decrypt this if you have the master key.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 Whoop you have your private key in memory to be able to sign stuff without anyone else seeing it.
