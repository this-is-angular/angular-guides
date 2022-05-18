# Lazy loading a feature using the Angular Router

## Resolving a Routes array

To lazy load an Angular feature, resolve a `Routes` array from the dynamic `import` statement returned by a `loadChildren` callback:

```typescript
import { Routes } from "@angular/router";

import { AboutComponent } from "./app/about.component";
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
    component: AboutComponent,
  },
  {
    path: "category",
    loadChildren: () => import("./category/category.routes").then((m) => m.routes),
  },
];
```

## Exporting feature routes

Our Angular feature exports a `Routes` array to enable lazy loading using the Angular Router.

```typescript
import { Routes } from "@angular/router";

import { CategoryComponent } from "./category.component";
import { CategoryListComponent } from "./category-list.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CategoryListComponent,
  },
  {
    path: ":name",
    component: CategoryComponent,
  },
];
```

## Lazy loading specific components in a feature

Let's say that we wanted to eagerly load the default component of our feature, in this case the `CategoryListComponent`. Our routes configuration is the same as in the previous section. Now let's say that we wanted to lazy load the `CategoryComponent` used to display individual categories. We do this by adding a `loadComponent` callback to the component route:

```typescript
import { Routes } from "@angular/router";

import { CategoryListComponent } from "./category-list.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CategoryListComponent,
  },
  {
    path: ":name",
    loadComponent: () => import("./category.component").then((m) => m.CategoryComponent),
  },
];
```
