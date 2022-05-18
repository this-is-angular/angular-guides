# Bootstrapping a standalone application

## Using the bootstrapApplication function

A standalone Angular application bootstraps a component often called the `AppComponent`, making it the root component of our application. We use the `bootstrapApplication` function to do this. It accepts the class of the root component as its first parameter and optionally an object with a `providers` property that contains an array of application-wide providers.

The following code block lists a simple `main.ts` file:

<!-- TODO(LayZeeDK): support code highlighting -->

```typescript
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

## Application-wide providers

To add a root-level provider, we can add it to the `providers` array:

```typescript
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [AuthService],
}).catch((err) => console.error(err));
```

## Using providers from NgModules

To provide root-level providers using an NgModule, we pass the NgModule to the `importProvidersFrom` function.

For example, we can provide the `HttpClient`'s dependencies as shown in the following listing:

```typescript
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
