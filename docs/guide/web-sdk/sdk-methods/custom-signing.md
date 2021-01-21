# SDK Methods Custom Signing

## signAndVerifyInterpretedBytes

This method is used to make whitelisted contract calls, for example `openFateChannel`, without the need for the approval modal.

```ts
 public async signAndVerifyInterpretedBytes(
    executor: SignAndVerifyInterpretedExecutors,
    version: number,
    request: SignAndVerifyInterpretedExecutorsRequest,
  ): Promise<string>
```

`SignAndVerifyInterpretedExecutors`:

```ts
export enum SignAndVerifyInterpretedExecutors {
  openFateChannel = 'openFateChannel',
}
```

`SignAndVerifyInterpretedExecutorsRequest`:

```ts
export interface OpenFateChannelRequest {
  inputData: string[];
  serverSignature: string;
}

export type SignAndVerifyInterpretedExecutorsRequest = OpenFateChannelRequest;
```

Example usage:

:::: tabs :options="{ useUrlFragment: false }"

::: tab TypeScript

```ts
import window from '@funfair-tech/wallet-sdk/window';
import { SignAndVerifyInterpretedExecutors } from '@funfair-tech/wallet-sdk';

const signature = await window.funwallet.sdk.signAndVerifyInterpretedBytes(
  SignAndVerifyInterpretedExecutors.openFateChannel,
  1,
  {
    inputData: [
      '0x0000000000000000000000002fa31aca647ec38d41e39fc636c7b1874676f795',
      '0xc2d51fbe40a4d574a5d4715379c227346ff6f5f764c3135d494c47a1899f0b80',
      '0x0000000000000000000000001247d144c0d73d46b1a967b8bc4dbde037422a1d',
      '0x0000000000000000000000000000000000000000000000000000059d555a8500',
      '0x000000000000000000000000f887491c5132ddd7ba59a04ec5ebc6e3a03df868',
      '0x00000000000000000000000000000000000000000000000000005af3107a4000',
      '0x0000000000000000000000003bad9dbe1e4d0704193aa4bdeaa60770dd170d1c',
      '0x000000000000000000000000030f24602a83abf644e41d7b06c4821d0e36fc43',
      '0x2f00f9ec88b553f6fbc5bd527f8b3944ce9ad4da1758b4b0c1a46de6aadf02b1',
      '0xf626d7153b8eaf3a66da6999e278cec43c78b23755d3af74add18f5fd5e77262',
      '0x0000000000000000000000000000000000000000000000000000000000000004',
      '0x0000000000000000000000009e1b3a08b7405919864a9a51187d55c0ce95abf2',
      '0x000000000000000000000000000000000000000000000000000000005e468dc6',
    ],
    serverSignature:
      '0x3ad55ae3037dbc1b4a2d5ac21d374fa8569202d7d86f9f6e90c874cbe28580397c1c2b3560dd9e1c43cde39797eabc92e5e3bb4ab2c760bf580d7c327554ee5d1c',
  }
);
```

:::

::: tab JavaScript

```js
import { SignAndVerifyInterpretedExecutors } from '@funfair-tech/wallet-sdk';

const signature = await window.funwallet.sdk.signAndVerifyInterpretedBytes(
  SignAndVerifyInterpretedExecutors.openFateChannel,
  1,
  {
    inputData: [
      '0x0000000000000000000000002fa31aca647ec38d41e39fc636c7b1874676f795',
      '0xc2d51fbe40a4d574a5d4715379c227346ff6f5f764c3135d494c47a1899f0b80',
      '0x0000000000000000000000001247d144c0d73d46b1a967b8bc4dbde037422a1d',
      '0x0000000000000000000000000000000000000000000000000000059d555a8500',
      '0x000000000000000000000000f887491c5132ddd7ba59a04ec5ebc6e3a03df868',
      '0x00000000000000000000000000000000000000000000000000005af3107a4000',
      '0x0000000000000000000000003bad9dbe1e4d0704193aa4bdeaa60770dd170d1c',
      '0x000000000000000000000000030f24602a83abf644e41d7b06c4821d0e36fc43',
      '0x2f00f9ec88b553f6fbc5bd527f8b3944ce9ad4da1758b4b0c1a46de6aadf02b1',
      '0xf626d7153b8eaf3a66da6999e278cec43c78b23755d3af74add18f5fd5e77262',
      '0x0000000000000000000000000000000000000000000000000000000000000004',
      '0x0000000000000000000000009e1b3a08b7405919864a9a51187d55c0ce95abf2',
      '0x000000000000000000000000000000000000000000000000000000005e468dc6',
    ],
    serverSignature:
      '0x3ad55ae3037dbc1b4a2d5ac21d374fa8569202d7d86f9f6e90c874cbe28580397c1c2b3560dd9e1c43cde39797eabc92e5e3bb4ab2c760bf580d7c327554ee5d1c',
  }
);
```

:::

::::
