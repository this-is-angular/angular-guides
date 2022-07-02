# Testing a standalone component using the Angular testbed

## Creating a component fixture for a standalone component

To write a basic component test for a standalone component, pass the component class to `TestBed.createComponent`:

```ts
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CategoryListComponent } from "./category-list.component";

describe(CategoryListComponent.name, () => {
  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    fixture.autoDetectChanges();
  });

  let fixture: ComponentFixture<CategoryListComponent>;

  it("lists categories", () => {
    const listItems = fixture.debugElement.queryAll(By.css("li"));
    expect(listItems.length).toBeGreaterThan(0);
  });
});
```

No need to call `TestBed.configureTestingModule` before creating a component fixture for a standalone component.

## Creating a test host component for a standalone component

To interact with a standalone component through its component API, we add it to the test host component's `imports` array:

```ts
import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { DailyForecastComponent } from "./daily-forecast.component";

describe(DailyForecastComponent.name, () => {
  @Component({
    imports: [DailyForecastComponent],
    standalone: true,
    template: `<weather-daily-forecast [temperatureCelsius]="temperatureCelsius"></weather-daily-forecast>`,
  })
  class TestHostComponent {
    @Input()
    temperatureCelsius: number | null = null;
  }

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.autoDetectChanges();
  });

  let hostFixture: ComponentFixture<DailyForecastComponent>;

  it("displays the temperature in degrees Fahrenheit", () => {
    hostFixture.componentInstance.temperatureCelsius = 20;
    hostFixture.detectChanges();

    const temperatureFahrenheit = fixture.debugElement.query(By.css("[data-testid=temperature-fahrenheit]"));
    expect(temperatureFahrenheit.nativeElement.textContent).toBe("68 °F");
  });
});
```

## Stubbing a child component in a standalone component test

To stub child components, use the `TestBed.overrideComponent` function:

```ts
import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CategoryListComponent } from "./category-list.component";
import { CategoryListItemComponent } from "./category-list-item.component";

describe(CategoryListComponent.name, () => {
  @Component({
    selector: "app-category-list-item",
    standalone: true,
    template: `<li><ng-content></ng-conent></li>`,
  })
  class TestCategoryListItemComponent {}

  beforeEach(() => {
    TestBed.overrideComponent(CategoryListComponent, {
      add: {
        imports: [TestCategoryListItemComponent],
      },
      remove: {
        imports: [CategoryListItemComponent],
      },
    });
    fixture = TestBed.createComponent(CategoryListComponent);
    fixture.autoDetectChanges();
  });

  let fixture: ComponentFixture<CategoryListComponent>;

  it("lists categories", () => {
    const listItems = fixture.debugElement.queryAll(By.css("li"));
    expect(listItems.length).toBeGreaterThan(0);
  });
});
```

With this test setup, `TestCategoryListItemComponent` replaces `CategoryListItemComponent` when `CategoryListComponent` is rendered. Make sure that the test child component uses the same selector as the component it replaces.

This technique is also used to replace directives and pipes used in a standalone component's template.

## Stubbing a component-level dependency in a standalone component test

While not a technique that only applies to standalone components, the way to replace a component-level provider in a component test is to use the `TestBed.overrideComponent` function, passing `add` and `remove` instructions for `providers` or `viewProviders`:

```ts
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Category } from "./category";
import { CategoryComponent } from "./category.component";
import { CategoryState } from "./category-state.service";

describe(CategoryComponent.name, () => {
  @Injectable()
  class CategoryStateStub implements CategoryState {
    category$ = of({
      description: "A category used in tests",
      name: "Test category",
      slug: "test",
    } as Category);
  }

  beforeEach(() => {
    TestBed.overrideComponent(CategoryComponent, {
      add: {
        providers: [
          {
            provide: CategoryState,
            useClass: CategoryStateStub,
          },
        ],
      },
      remove: {
        providers: [CategoryState],
      },
    });
    fixture = TestBed.createComponent(CategoryComponent);
    fixture.autoDetectChanges();
  });

  let fixture: ComponentFixture<CategoryListComponent>;

  it("displays the category title", () => {
    const title = fixture.debugElement.query(By.css("h1"));
    expect(title.nativeElement.textContent.trim()).toBe("Test category");
  });
});
```

In this example, the `CategoryState` service is replaced with the `CategoryStateStub` service for the purpose of this test suite.
