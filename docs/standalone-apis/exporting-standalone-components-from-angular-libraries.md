# Exporting standalone components from Angular libraries

## Exporting unrelated standalone components from Angular libraries

Libraries export standalone components, directives, and pipes directly from their public API, usually an `index.ts` or `public_api.ts` file:

```ts
export * from "./lib/our-button.component";
export * from "./lib/our-checkbox.component";
```

Standalone components consuming the library import the components through their `imports` array:

```ts
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

Legacy components depending add the standalone component to their NgModule's `imports` array:

```ts
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

In case multiple components, directive, and pipes are always used together, we export them in an array from our library's public API:

```ts
import { OurTableCellComponent } from "./lib/table/our-table-cell.component";
import { OurTableRowComponent } from "./lib/table/our-table-row.component";
import { OurTableComponent } from "./lib/table/our-table.component";

import type { Type } from "@angular/core";

// (Optionally) export the individual types for selective importing and
// referencing instances for queries and similar purposes
export OurTableCellComponent;
export OurTableRowComponent;
export OurTableComponent;

// Export cohesive standalone declarables for easy importing
export type OurTableType = OurTableCellComponent | OurTableRowComponent | OurTableComponent;
export const ourTableImports: Type<OurTableType>[] = [
  OurTableCellComponent,
  OurTableRowComponent,
  OurTableComponent,
];
```

Standalone components consuming the library import the components through their `imports` array:

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ourTableImports } from "@our-org/our-lib";

@Component({
  imports: [CommonModule, ourTableImports],
  standalone: true
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

Legacy components depending add the exported components to their NgModule's `imports` array:

```ts
import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { ourTableImports } from "@our-org/our-lib";

@Component({
  imports: [CommonModule, ourTableImports],
  standalone: true
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
  imports: [CommonModule, ourTableImports]
})
export class DataGridModule {}
```
