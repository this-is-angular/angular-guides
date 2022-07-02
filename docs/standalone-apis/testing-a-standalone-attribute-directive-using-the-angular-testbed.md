# Testing a standalone attribute directive using the Angular testbed

For the purpose of this example, we will create a standalone attribute directive
that adds the CSS classes provided by [Primer](https://primer.style/) for its
[Button](https://primer.style/css/components/buttons) component:

```typescript
// primer-button.directive.ts
import { Directive, HostBinding, Input } from "@angular/core";

export type PrimerButtonVariant = "default" | "primary" | "danger" | "outline" | "invisible";
type PrimerButtonVariantClass = `btn-${Exclude<PrimerButtonVariant, "default">}`;

export type PrimerButtonSize = "small" | "medium" | "large";
type PrimerButtonSizeClass = "btn-sm" | "btn-large";

@Directive({
  exportAs: "primerButton",
  selector: "[primerButton]",
  standalone: true,
})
export class PrimerButtonDirective {
  get #sizeClass(): PrimerButtonSizeClass | null {
    switch (this.size) {
      case "small":
        return "btn-sm";
      case "large":
        return "btn-large";
      case "medium":
      // Fall through
      default:
        return null;
    }
  }
  get #variantClass(): PrimerButtonVariantClass | null {
    return this.variant === "default" ? null : `btn-${this.variant}`;
  }

  @Input()
  size: PrimerButtonSize = "medium";
  @Input()
  variant: PrimerButtonVariant = "default";

  @HostBinding("class.btn")
  protected get baseClassAdded(): true {
    return true;
  }
  @HostBinding("className")
  protected get className(): string {
    return [this.#sizeClass, this.#variantClass].filter((className) => className !== null).join("");
  }
}
```

## Creating a test host component for a standalone attribute directive

To interact with a standalone component through its component API, we add it to the test host component's `imports` array:

```typescript {10}
// primer-button.directive.spec.ts
import { Component, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { PrimerButtonDirective, PrimerButtonSize, PrimerButtonVariant } from "./primer-button.directive";

describe(PrimerButtonDirective.name, () => {
  @Component({
    imports: [PrimerButtonDirective],
    standalone: true,
    template: ` <button primerButton [size]="size" [variant]="variant">Button</button> `,
  })
  class TestHostComponent {
    @Input()
    size: PrimerButtonSize = "medium";
    @Input()
    variant: PrimerButtonVariant = "default";
  }

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    host = hostFixture.componentInstance;
    hostFixture.autoDetectChanges();
    buttonElement = hostFixture.debugElement.query(By.css("button")).nativeElement;
  });

  let buttonElement: HTMLButtonElement;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
});
```

## Exercising input properties in standalone attribute directive tests

We use the bound properties of our test host component to exercise our attribute
directive's input properties:

```typescript
// primer-button.directive.spec.ts
describe(PrimerButtonDirective.name, () => {
  // (...)

  it("adds the base class", () => {
    expect(buttonElement.classList.contains("btn")).toBe(true);
  });

  it("adds a size class", () => {
    host.size = "large";
    hostFixture.detectChanges();

    expect(buttonElement.classList.contains("btn-large")).toBe(true);
  });

  it("adds a variant class", () => {
    host.variant = "primary";
    hostFixture.detectChanges();

    expect(buttonElement.classList.contains("btn-primary")).toBe(true);
  });
});
```

Our attribute directive tests verify the attribute directive's side effects by
inspecting the DOM of its host element.
