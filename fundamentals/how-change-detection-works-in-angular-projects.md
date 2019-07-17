---
contributors: Jia Li, Nikita Poltoratsky
---

# How change detection works in Angular projects

## Suggested topics

- Dirty checking
- Differs
- Change detection strategies
  - Default change detection (relies on Zone.js)
  - On push change detection (trigger change detection when input property
    references change)
- Manual change detection
  - `ngDoCheck` vs. `ngOnChanges`
  - Experimental Ivy options
    - `markDirty`
    - `detectChanges`
- `NgZone`
  - When and how does it trigger change detection?
  - How do we opt out?
