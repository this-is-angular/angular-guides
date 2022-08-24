# Exporting standalone components from Angular libraries

## Exporting unrelated standalone components from Angular libraries

Libraries export standalone components, directives, and pipes directly from their public API, usually an `index.ts` or `public_api.ts` file:

```ts title="libs/our-lib/src/index.ts"
export * from "./lib/our-button.component";
export * from "./lib/our-checkbox.component";
```

Standalone components consuming the library import the components through their `imports` array:

```ts {2,7} title="rocket.component.ts"
import { Component } from "@angular/core";
import { OurButtonComponent } from "@our-org/our-lib";

import { RocketService } from "./rocket.service";

@Component({
  imports: [OurButtonComponent],
  standalone: true,
  template: `<our-button (click)="onRocketLaunch()">Launch rocket</our-button>`,
})
export class RocketComponent {
  #rocket: RocketService;

  constructor(rocket: RocketService) {
    this.#rocket = rocket;
  }

  onRocketLaunch(): void {
    this.#rocket.launch();
  }
}
```

### Interoperability with NgModules

Classic components add standalone components they depend on to their declaring NgModule's `imports` array:

```ts {2,24} title="rocket.component.ts"
import { Component, NgModule } from "@angular/core";
import { OurButtonComponent } from "@our-org/our-lib";

import { RocketService } from "./rocket.service";

@Component({
  template: `<our-button (click)="onRocketLaunch()">Launch rocket</our-button>`,
})
export class RocketComponent {
  #rocket: RocketService;

  constructor(rocket: RocketService) {
    this.#rocket = rocket;
  }

  onRocketLaunch(): void {
    this.#rocket.launch();
  }
}

@NgModule({
  declarations: [RocketComponent],
  exports: [RocketComponent],
  imports: [OurButtonComponent],
})
export class RocketModule {}
```

## Exporting cohesive standalone components from Angular libraries

In case multiple components, directive, and pipes are always used together, we export them in an immutable array from our library's public API:

```ts {12-16} title="libs/our-lib/src/index.ts"
import { OurTableCellComponent } from "./lib/table/our-table-cell.component";
import { OurTableRowComponent } from "./lib/table/our-table-row.component";
import { OurTableComponent } from "./lib/table/our-table.component";

// (Optionally) export the individual types for selective importing and
// referencing instances for queries and similar purposes
export OurTableCellComponent;
export OurTableRowComponent;
export OurTableComponent;

// Export cohesive standalone declarables for easy importing
export const ourTableDeclarables = [
  OurTableCellComponent,
  OurTableRowComponent,
  OurTableComponent,
] as const;
```

Standalone components consuming the library import the components through their `imports` array:

```ts {3,8} title="data-grid.component.ts (standalone)"
import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { ourTableDeclarables } from "@our-org/our-lib";

import { DataGridService } from "./data-grid.service";

@Component({
  imports: [AsyncPipe, ourTableDeclarables],
  standalone: true,
  template: `
    <our-table>
      <our-table-row *ngFor="let row of rows$ | async">
        <our-table-cell *ngFor="let cell of row.cells">
          {{ cell.text }}
        </our-table-cell>
    </our-table>
  `,
})
export class DataGridComponent {
  rows$ =

  constructor(dataGridService: DataGridService) {
    this.rows$ = dataGridService.rows$;
  }
}
```

### Interoperability with NgModules

Classic components depending add the exported standalone declarables to their NgModule's `imports` array:

```ts {3,29} title="data-grid.component.ts (classic)"
import { AsyncPipe } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { ourTableDeclarables } from "@our-org/our-lib";

import { DataGridService } from "./data-grid.service";

@Component({
  standalone: false,
  template: `
    <our-table>
      <our-table-row *ngFor="let row of rows$ | async">
        <our-table-cell *ngFor="let cell of row.cells">
          {{ cell.text }}
        </our-table-cell>
    </our-table>
  `,
})
export class DataGridComponent {
  rows$ =

  constructor(dataGridService: DataGridService) {
    this.rows$ = dataGridService.rows$;
  }
}

@NgModule({
  declarations: [DataGridComponent],
  exports: [DataGridComponent],
  imports: [AsyncPipe, ourTableDeclarables]
})
export class DataGridModule {}
```
