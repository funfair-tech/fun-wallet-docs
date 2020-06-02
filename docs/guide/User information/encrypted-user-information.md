# User information

POST: /server/encrypteduser?yourAppAddress

This endpoint returns a user's name, date of birth and country code.

For this endpoint, information is encrypted in transit. This works as follows:
- your server-side code generates an RSA key pair
- your provide the user address to be queried (which can be obtained from the 'addr' claim in the JWT), and the modulus and exponent of the public key that was generated
- you sign the request as specified in #Authorization above
- the response will contain an AES key, encrypted using the RSA components supplied in your request, an AES IV, and user data, encrypted using the AES key
- use the private key from the RSA key pair that was previously generated in order to decrpyt the AES key
- use the decrypted AES key to decrypt the user data


## Sample request

{
  "userAddress": "string",
  "rsaPublicKeyModulus": "string",
  "rsaPublicKeyExponent": "string"
}


The userAddress field should be populated with the Ethereum account address for the user you wish to retrieve information for. This can be retrieved from the 'addr' claim in the JWT used by the user. You will need to populate the userLocation with the three letter ISO code corresponding to their country, and the userIPAddress fields.

## Sample response

{
  "aesKey": "string",
  "aesIv": "string",
  "data": "string"
}

## Decrypted user data

Successful decryption of the 'data' value using the AES key will result in JSON like this:

{
	"FullName": "string",
	"DateOfBirth": int, // unix time
	"CountryCode": "CAN"
}