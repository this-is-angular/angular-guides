# Using the HttpClient in a standalone Angular application

As you might know, Angular's `HttpClient` has many dependencies that we have to provide in Angular applications using it.

## Interoperability using the HttpClientModule

As of Angular version 14.0.0-rc.0, there is no dedicated standalone API for the Angular HTTP client so we pass for example `HttpClientModule` to the `importProvidersFrom` function:

```typescript
import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
```

## Future standalone API

In a future Angular version, a function creating the necessary providers will be available. It might look something like this:

```typescript
import { withHttpClient } from "@angular/common/http";
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [withHttpClient()],
}).catch((err) => console.error(err));
```
