# Providing dependencies in a standalone Angular feature

## Using route providers

If all routes in a feature `Routes` array are top-level routes, we can wrap them in a component-less route with an empty path by nesting them in an array assigned to its `children` property.

Next, we add the feature-specific dependencies to the `providers` array of our feature routes:

```typescript
import { Routes } from "@angular/router";

import { CategoryComponent } from "./category.component";
import { CategoryHttpClient } from "./category-http-client.service";
import { CategoryListComponent } from "./category-list.component";
import { CategoryState } from "./category-state.service";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        component: CategoryListComponent,
      },
      {
        path: ":name",
        component: CategoryComponent,
      },
    ],
    providers: [CategoryHttpClient, CategoryState],
  },
];
```

## Interoperability with NgModules

Angular libraries using the forRoot-forFeature pattern expose an NgModule that provides dependencies that we must load with the Angular feature using it. To use it in a standalone Angular feature, we pass the NgModule to the `importProvidersFrom` function:

```typescript
import { importProvidersFrom } from "@angular/core";
import { Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { CategoryEffects } from "./+state/effects";
import { categoryFeature } from "./+state/reducers";
import { CategoryComponent } from "./category.component";
import { CategoryListComponent } from "./category-list.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        component: CategoryListComponent,
      },
      {
        path: ":name",
        component: CategoryComponent,
      },
    ],
    providers: [
      importProvidersFrom(EffectsModule.forFeature([CategoryEffects])),
      importProvidersFrom(StoreModule.forFeature(categoryFeature)),
    ],
  },
];
```
