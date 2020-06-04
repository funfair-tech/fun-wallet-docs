# Authorization

These endpoint require requests to be signed using your organisation's private key. 

Populate the ```X-App-Signature``` header in all requests using the generated signature.

Requests that are unsigned, or are signed using a private key that hasn't been configured for use with the Fun Wallet, will be rejected - you'll receive a 403.