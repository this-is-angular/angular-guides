# Adding top-level routes to a standalone Angular application

## Interoperability using the RouterModule

As of Angular version 14.0.0-rc.0, there is no dedicated standalone API for the Angular router so we pass `RouterModule.forRoot` to the `importProvidersFrom` function:

```typescript
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./app/about.component";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/home.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
```

## Future standalone API

In a future Angular version, a function creating the necessary providers will be available. It might look something like this:

```typescript
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { Routes, withRoutes } from "@angular/router";

import { AboutComponent } from "./app/about.component";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/home.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [withRoutes(routes)],
}).catch((err) => console.error(err));
```
