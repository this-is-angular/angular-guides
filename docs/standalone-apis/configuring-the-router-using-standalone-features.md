# Configuring the router using standalone features

## Configuring the router for a standalone application

To configure the `Router`, we pass the `with*` feature provider factories to the `provideRouter` function. The first argument passed must be `Routes` while subsequent arguments are 0..n router features, for example:

```typescript {3,34-37} title="main.ts"
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, Routes, withPreloading, withRouterConfig } from "@angular/router";

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
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: "reload",
      })
    ),
  ],
}).catch((err) => console.error(err));
```

## Router features

Feature providers such as [`RouterFeatures`](https://next.angular.io/api/router/RouterFeatures) are tree-shakable.

The following router feature provider factories are available:

- [withDebugTracing](https://next.angular.io/api/router/withPreloading)
- [withDisabledInitialNavigation](https://next.angular.io/api/router/withDisabledInitialNavigation)
- [withEnabledBlockingInitialNavigation](https://next.angular.io/api/router/withEnabledBlockingInitialNavigation)
- [withInMemoryScrolling](https://next.angular.io/api/router/withInMemoryScrolling)
- [withPreloading](https://next.angular.io/api/router/withPreloading)
- [withRouterConfig](https://next.angular.io/api/router/withRouterConfig)

## Configuring the router for component tests

As of Angular version 14.2.0-rc.0, there is no standalone router provider factory for testing.

Until a standalone router testing provider becomes available, use the `RouterTestingModule`, for example:

```typescript {5,20-23} title="category.component.spec.ts"
import { Component, NgZone } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Router, RouterOutlet, Routes } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { CategoryComponent } from "./category.component";

@Component({
  imports: [RouterOutlet],
  standalone: true,
  template: `<router-outlet></router-outlet>`,
})
class TestAppComponent {}

describe(CategoryComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: "category/:name", component: CategoryComponent }], {
          onSameUrlNavigation: "reload",
          preloadingStrategy: PreloadAllModules,
        }),
      ],
    });

    rootFixture = TestBed.createComponent(TestAppComponent);
    ngZone = TestBed.inject(NgZone);
    router = TestBed.inject(Router);
    ngZone!.run(() => router.initialNavigation());
    rootFixture.autoDetectChanges();
  });

  let ngZone: NgZone;
  let rootFixture: ComponentFixture<TestAppComponent>;
  let router: Router;

  it("displays the category title", async () => {
    await ngZone!.run(() => router.navigateByUrl("/category/shirts"));
    rootFixture.detectChanges();
    const title = rootFixture.debugElement.query(By.css("h1")).nativeElement as HTMLElement;

    expect(title.textContent?.trim()).toBe("Shirts");
  });
});
```
