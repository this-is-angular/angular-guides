# Angular performance techniques

## Suggested resources
- [Angular Performance Checklist](https://github.com/mgechev/angular-performance-checklist)
- [Embrace Component Tranquility at ng-conf by Justin Schwartzenberger](https://youtu.be/d7fLYenKy-I)
- [Faster Angular Applications - Part 1. On Push Change Detection and Immutability by Minko Gechev](https://blog.mgechev.com/2017/11/11/faster-angular-applications-onpush-change-detection-immutable-part-1/)

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
