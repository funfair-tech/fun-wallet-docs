# User information

```js
POST: /server/userinfo?yourAppAddress
```

The information returned by this endpoint focuses mainly around KYC verification and self-exclusion.

## Sample request

```js
{
  "appInfo": {
    "minimumAge": 21,
    "allowedCountries": [
      "CAN"
    ]
  },
  "userAddress": "0x48c3E004ADdf97206eE9F776e76DDCDBF7F71eA0",
  "userLocation": "CAN",
  "userIpAddress": "200.100.1.1"
}
```

The userAddress field should be populated with the Ethereum account address for the user you wish to retrieve information for. This can be retrieved from the 'addr' claim in the JWT used by the user. 

You will need to populate the userLocation with the three letter ISO code corresponding to their country, and the userIpAddress field.

## Sample response

```js
{
  "userAccountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "checks": {
    "canPlay": true,
    "hasRisksAssociated": true,
    "kycVerified": true,
    "excluded": true,
    "excludedType": "string",
    "exclusionReactivationDate": "2020-06-02T09:11:49.817Z"
  },
  "optedInToMarketing": true,
  "signers": [
    "0xe4cc4A8773E029267e2876C382A54166C4BB05a5"
  ],
  "ethereumAddress": "0x48c3E004ADdf97206eE9F776e76DDCDBF7F71eA0"
}
```