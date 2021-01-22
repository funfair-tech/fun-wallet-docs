(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{483:function(s,t,a){"use strict";a.r(t);var e=a(131),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"encrypted-user-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-user-information"}},[s._v("#")]),s._v(" Encrypted User Information")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("encrypteduser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("yourAppAddress\n")])])]),a("p",[s._v("This endpoint returns a user's name, date of birth and three letter country code.")]),s._v(" "),a("p",[s._v("For this endpoint, "),a("em",[s._v("information is encrypted in transit.")]),s._v(" This works as follows:")]),s._v(" "),a("ol",[a("li",[s._v("Your server-side code generates an RSA key pair")]),s._v(" "),a("li",[s._v("You provide the user address to be queried (which can be obtained from the 'addr' claim in a user's JWT), and the modulus and exponent of the public key that was generated by your code")]),s._v(" "),a("li",[s._v("You sign the request as specified in "),a("RouterLink",{attrs:{to:"/guide/server-to-server-api/authorization.html"}},[s._v("Authorization")])],1),s._v(" "),a("li",[s._v("The response will contain an AES key, encrypted using the RSA components supplied in your request, an AES IV, and user data, encrypted using the AES key")]),s._v(" "),a("li",[s._v("Use the private key from the RSA key pair that was previously generated in order to decrpyt the AES key")]),s._v(" "),a("li",[s._v("Use the decrypted AES key to decrypt the user data")])]),s._v(" "),a("h2",{attrs:{id:"sample-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-request"}},[s._v("#")]),s._v(" Sample Request")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5010")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("encrypteduser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("casinoAddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x2D447Da24D7174e142D6708ca350CF43f12a5570")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5010")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("App"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Signature"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xd31c8806f916f2179e9f2c838dd02280c1bae42808b113cc3ce56c10aa978777799090d309ef93b567be104c0e1798c6300e6f752a39271d09c86b68e00750c21c")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v("T09"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("Z "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// signature goes here")]),s._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" gzip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deflate\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("377")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x19D491B3e5CdB5af04b4A9ADB1d521784CAB433f"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rsaPublicKeyModulus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xbcb5bfa7a4a58689151ed9ea9a17655f32c0ed560d6f0231976b3adf08d36375d9aa7cbbd11f067ee500ba62a12544c97d49883c3579de697406918eae2d7c91e1a0599e305d2374a4ed9313ad75d483e70234ca52926d227aec7d6986a335992ca2ed596adb6e11738d73bf68e2c6148ff5028f2330964d25b3cdda0fccdb1d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rsaPublicKeyExponent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x010001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("The userAddress field should be populated with the Ethereum account address for the user you wish to retrieve information for. This can be retrieved from the 'addr' claim in the JWT used by the user.")]),s._v(" "),a("h2",{attrs:{id:"sample-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-response"}},[s._v("#")]),s._v(" Sample Response")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aesKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x3e7f20d5414c654466011743126c1e5b5ab10a6e70ca57b98c0083a7bba02f794e5835804987431376555e01f61b501f6bcba64e161d0c9c4c56c1a39278653b30718f777d571ffd054909c88ac7d30a0a83ce9076457740c3ccfca9826e3a2c046bea8abe252206759574f308cd83ada92689a1f6ce3aba60e2d48a5e5e7881"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aesIv"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xd8df0c110843ea95f2a329b3faa1dc69"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x763f4f6dec5c348e6908f7788cc825271db607c2acfe59738e8b5ee525bf0a34a124c52cd71b3e925f75241cd0adbec43411051dde4a86a86963bb1bc2c5ad5da1346d8f570c0893c7602dbc667d2fb8"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"decrypted-user-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decrypted-user-data"}},[s._v("#")]),s._v(" Decrypted User Data")]),s._v(" "),a("p",[s._v("Successful decryption of the 'data' value using the AES key (once it's been decrypted using your RSA private key) will result in JSON like this:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FullName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Justin Bieber"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DateOfBirth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6235156423")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// unix time")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CountryCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CAN"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);