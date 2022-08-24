# Adding top-level routes to a standalone Angular application

To provide the `Router` service and add top-level routes, pass routes to the `provideRouter` function and add it to the `providers` option for `bootstrapApplication`:

```typescript {3,31} title="main.ts"
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";

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
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
```
