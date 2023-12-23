---
contributors: Jia Li
---

# How change detection works in Angular projects

## Suggested resources
- [Faster Angular Applications - Part 1. On Push Change Detection and Immutability by Minko Gechev](https://blog.mgechev.com/2017/11/11/faster-angular-applications-onpush-change-detection-immutable-part-1/)
- [Faster Angular Applications - Understanding Differs. Developing a Custom IterableDiffer by Minko Gechev](https://blog.mgechev.com/2017/11/14/angular-iterablediffer-keyvaluediffer-custom-differ-track-by-fn-performance/)

## Suggested topics

- Dirty checking
- Differs
- Change detection strategies
  - Default change detection (relies on Zone.js)
  - On push change detection (skip dirty checking unless input property
    references change)
- Manual change detection
  - `ngDoCheck` vs. `ngOnChanges`
  - Experimental Ivy options
    - `markDirty`
    - `detectChanges`
- `NgZone`
  - When and how does it trigger change detection?
  - How do we opt out?
