# Angular performance techniques

## Suggested topics
- Optimizing change detection
  - Disable `NgZone`
  - On push change detection and immutable data structures
  - Manual change detection
- Reducing component tax
  - Render using native host elements
    - Use host listeners and bindings
    - Use `:host` styles
  - Use `<ng-container>`
  - Use `<ng-template>`
  - Use `*cdkVirtualFor`
  - Use `trackBy` with `*ngFor`
- Reduce bundle size
  - Code-splitting and lazy loading
  - Differential loading
- Heavy data processing
  - Multithreading using dedicated web workers
- Pipes
  - Pure pipes
  - Memoized pipes

## Suggested resources
- [Angular Performance Checklist](https://github.com/mgechev/angular-performance-checklist)
- [Embrace Component Tranquility at ng-conf by Justin Schwartzenberger](https://youtu.be/d7fLYenKy-I)
