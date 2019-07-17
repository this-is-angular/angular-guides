---
contributors: Lars Gyrup Brink Nielsen
---

# The `multiScan` operator for RxJS

## Suggested resources
- [NPM package page](https://www.npmjs.com/package/rxjs-multi-scan)
- [GitHub repository](https://github.com/LayZeeDK/rxjs-multi-scan)

`rxjs-multi-scan` is a microlibrary for RxJS. It adds a single operator,
`multiScan`, which combines multiple observable sources into a single scan
operation.

For each observable source, a separate reducer function is applied whenever a
value is emitted.

This makes it easy to capture user interaction and other forms of I/O in
subjects and observables and combine them into a single state container without
the need for a full state management library.
