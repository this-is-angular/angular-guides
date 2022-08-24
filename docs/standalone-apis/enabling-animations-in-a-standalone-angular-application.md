# Enabling animations in a standalone Angular application

## Enabling browser animations in a standalone Angular application

To enable browser animations in a standalone Angular application, we add the providers returned by the `provideAnimations` provider factory to the `providers` option for the `bootstrapApplication` function:

```typescript title="main.ts"
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()],
}).catch((err) => console.error(err));
```

## Enabling browser animations in a standalone Angular application

To disable browser animations in a standalone Angular application, we add the providers returned by the `provideAnimations` provider factory to the `providers` option for the `bootstrapApplication` function:

```typescript title="main.ts"
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideNoopAnimations } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideNoopAnimations()],
}).catch((err) => console.error(err));
```

## Conditionally disable browser animations in a standalone Angular application

Let's say we want to enable browser animations when the application is deployed and running but disable browser animations when our Cypress end-to-end test suites are running. We can do this by creating a custom browser animations provider factory that returns the no-op animations provider when the application is running in a Cypress context and the browser animations provider otherwise:

```typescript title="provide-browser-animations.ts"
import { Provider } from "@angular/core";
import { provideAnimations, provideNoopAnimations } from "@angular/platform-browser/animations";

export function provideBrowserAnimations(): Provider[] {
  return "Cypress" in (window as any) ? provideNoopAnimations() : provideAnimations();
}
```

Then we add the result of calling our custom animations provider to the `providers` option for the `bootstrapApplication` function:

```typescript title="main.ts"
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { provideBrowserAnimations } from "./app/provide-browser-animations";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideBrowserAnimations()],
}).catch((err) => console.error(err));
```
