# Show Wallet UI

We call the Wallet UI iframe a `follower`. If you want to read more information about what a `follower` is, please go [here](http://localhost:8080/fun-wallet-docs/guide/how-does-it-work/leader-and-follower-communication.html#what-is-a-follower).

Paste this HTML snippet where you want the Wallet UI to render on your dApp. This example uses an Angular `load` event, but you can register an iframe `onload` event using JavaScript or via functionality exposed by whatever framework you're using. So just change that event accordingly depending on the framework you're using.

Due to the ability of [deep-linking](./routing.md), which is supported out of the box, the Wallet has to build up your src dynamically (hence the `| safe` pipe in the example). Again, the example shown is from an Angular app, so change how you handle that accordingly depending on the framework you're using.

```html
<iframe
  id="fun-wallet-follower"
  (load)="yourFollowerInstanceLoadFunction()"
  [src]="walletUrl | safe"
  is-fun-wallet
  is-follower
></iframe>
```

You have to create a `safe` pipe by using `DomSanitizer`. This helps to prevent cross-site scripting (XSS) security bugs by sanitizing values to be safe to use in the different DOM contexts.

https://angular.io/api/platform-browser/DomSanitizer

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
```

```ts
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent {
  public walletUrl = window.funwallet.getWalletFollowerURL();

  public async yourFollowerInstanceLoadFunction(): Promise<void> {
    await window.funwallet.sdk.registerFollowerInstance();
  }
}
```

Once the follower has been authenticated it will fire an event [`followerAuthenticationCompleted`](#followerauthenticationcompleted), letting you know that you can unlock any of the Wallet buttons you have disabled. It's best practice to disable any other Wallet router buttons when this is authenticating, as it can cause a lot of unnecessary requests and sometimes cause race conditions.

## Auto-resizing of iframes

As you may know, the parent cannot know the context of the child it has iframed in. This is standard cross-site protection which is a universal principle of Internet security. But if you don't know the content of the iframe, how do you know the height of it? Well, the good news is you don't need to worry about that, the SDK takes care of this for you and auto-resizes the UI anytime the height changes.
