---
contributors: Oleksandr Poshtaruk, Wojciech Trawiński
---

# Reactive programming

## Suggested resources
- [Real Talk JavaScript: RxJS Wizardry with Ben Lesh](https://realtalkjavascript.simplecast.fm/39f4a2e2)
- [RxJS schedulers from outer space - Performance, animations, asynchrony at ng-conf by Michael Hladky](https://youtu.be/wfSKE7GtKhU)
- [A deep dive into RxJS subjects at Angular In Depth by Michael Hladky](https://www.youtube.com/watch?v=y2aBiA5N4h8)
- [Learn RxJS](https://www.learnrxjs.io/)
- [Official Getting started guide](https://rxjs.dev/guide/overview)
- [Angular.io: Observables & RxJS](https://angular.io/guide/observables)
- [Reactive Programming in Angular by Victor Savkin](https://blog.nrwl.io/reactive-programming-in-angular-7dcded697e6c)

## Suggested topics
- Composing asynchronous software
- Understanding operators
- "Breaking the ice"
- Reactive programming in more abstract terms, no RxJS specifics
- How RxJS is used by Angular
- `share`, `publish`, and `refCount`
- Schedulers
- Cold, hot, warm observables

### Reactive micro and macro architecture
Concepts and techniques coined and taught by Michael Hladky.

- [Slides](https://docs.google.com/presentation/d/1G76QJ6EC1mwUt99exVyQqwU7FutXbulA8flweWJKubQ/edit#slide=id.g4de9327dad_0_21)
- [StackBlitz](https://stackblitz.com/edit/rxjs-operating-heavily-dynamic-uis)
- [ng-conf workshop: Operate heavily dynamic UIs](https://youtu.be/XKfhGntZROQ)
- [Tweet with images](https://twitter.com/Michael_Hladky/status/1136327245050630144)
- [AID conf workshop: RxJS advanced patterns: Operate heavily dynamic UIs](https://www.youtube.com/watch?v=3aiJ3XX_vpQ)

### Filtering and subscription management
- `takeWhile` vs. `takeUntil`
- `takeWhile` when you want to unsubscribe based on an event in the observable
  pipeline
- `takeUntil` when you want to unsubscribe based on another event
- `filter` to filter out events based on their value
- [Learn RxJS: Filtering operators](https://www.learnrxjs.io/operators/filtering/)

### Building your own observable
When to build your own observable, when not to.

### Building your own operator
Use composition of existing operators over building your own.

#### Application/enterprise-specific operators
Usually combines a bunch of operators that are used throughout one or more
applications, or even just in a few places but to make the code more readable.

#### Reusable operators (libraries)
- [Real Talk JavaScript: RxJS Wizardry with Ben Lesh](https://realtalkjavascript.simplecast.fm/39f4a2e2)

Describe and test the semantics of every edge case:
- What happens when a synchronous `empty()` is passed?
- What happens when an asynchronous `empty()` is passed?
- What happens when a `NEVER` is passed?

When joining more than one observable:
- What happens when one is a `NEVER` and one is not?

When accepting function parameters:
- What happens when an error happens in that function?

Error handling:
- Test your custom operator in isolation
- Errors that unsubscribe
- An observable goes south and drops future subscriptions (bad)

### Subscribers
- [Real Talk JavaScript: RxJS Wizardry with Ben Lesh](https://realtalkjavascript.simplecast.fm/39f4a2e2)

Subscribers have a subscription. They are observables with a subscription tied
to them. Every operator sets up one subscriber.

Subscribers have these safety semantics:
- If you call `error` or `complete`, the subscription is teared down and an
  internal property call closed is flipped and make sure that you cannot call
  `next`, `error`, or `complete` again.
- Chain of subscribers: Error in any single point - that subscriber cannot be
  used again which means you can't pass values through it and you've
  unsubscribed from the original subscription.
- Several strategies, the primary for protecting your observable from dying:
  Create another observable with a flattening operator and punctuate that
  observable with a `catchError`.
  - `catchError`: Listens to error channel on its subscriber and maps it to a
  new observable, subscribes to that and sends its output to the flattening
  operator and shields the main chain of subscribers from ever having error
  called on any of them and therefore have their subscription kept active.

### Subjects
Subjects can be used for multicasting.

- `BehaviorSubjects` have an initial state when created, so they can be used to
  capture hot streams
- `Subjects` are for eventual values--they don't have an initial or current
  state
- `ReplaySubjects` are used to replay streams

### Subscriptions
Forgetting to unsubscribe will lead to memory leaks and side effects being run
after the related component is destroyed.

Strategies for managing subscriptions:
- `takeUntil(this.destroy)` (here be dragons)
- `Subscription#add` (tree of subscriptions) vs. `SubSink` (array of
  subscriptions)
- Manual unsubscription of every subscription
