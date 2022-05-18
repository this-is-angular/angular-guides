# Lazy loading a standalone component using the Angular Router

Add a `loadComponent` property to a `Route` object to lazy load a component. The value is a function that returns a dynamic `import` statement that points to an ES module (a `.ts` file), then resolves to the component class:

```typescript
import { Routes } from "@angular/router";

import { HomeComponent } from "./app/home.component";

export const routes: Routes = [
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
    loadComponent: () => import("./about.component").then((m) => m.AboutComponent),
  },
];
```
