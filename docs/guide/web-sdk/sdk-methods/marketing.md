# SDK Methods Marketing

## Get marketing opt-in status

Get marketing opt-in status

```ts
get(): Promise<boolean | null>
```

`JavaScript`:

```js
const marketingOptInStatus = await window.funwallet.sdk.marketing.get();
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

const marketingOptInStatus = await window.funwallet.sdk.marketing.get();
```

---

## Update marketing opt-in status

Update marketing opt-in status. Will throw if it did not update the status successfully.

```ts
set(status: boolean): Promise<void>
```

`JavaScript`:

```js
await window.funwallet.sdk.marketing.set(true);
```

`TypeScript`:

```ts
import window from '@funfair-tech/wallet-sdk/window';

await window.funwallet.sdk.marketing.set(true);
```
