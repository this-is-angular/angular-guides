# Using the HttpClient in a standalone Angular application

As you might know, Angular's `HttpClient` has many dependencies that we have to provide in Angular applications using it.

## Interoperability using the HttpClientModule

As of Angular version 14.2.0-rc.0, there is no dedicated standalone API for the Angular HTTP client so we pass for example `HttpClientModule` to the `importProvidersFrom` function:

```typescript {1,2,13} title="main.ts"
import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

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

```typescript {1,13} title="main.ts"
import { provideHttpClient } from "@angular/common/http";
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
```
