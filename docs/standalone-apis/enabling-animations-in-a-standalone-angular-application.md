# Enabling animations in a standalone Angular application

## Interoperability using the BrowserAnimationsModule

As of Angular version 14.0.0-rc.0, there is no dedicated standalone API for Angular browser animations so we pass `BrowserAnimationsModule` to the `importProvidersFrom` function:

```typescript
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)],
}).catch((err) => console.error(err));
```

## Future standalone API

In a future Angular version, a function creating the necessary providers will be available. It might look something like this:

```typescript
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { withAnimations } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [withAnimations()],
}).catch((err) => console.error(err));
```
