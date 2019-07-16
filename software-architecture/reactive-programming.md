# Reactive programming

## Suggested resources
- [Real Talk JavaScript: RxJS Wizardry with Ben Lesh](https://realtalkjavascript.simplecast.fm/39f4a2e2)

## Suggested topics
- Composing asynchronous software
- Understanding operators

### Filtering and subscription management
- `takeWhile` vs. `takeUntil`
- `takeWhile` when you want to unsubscribe based on an event in the observable
  pipeline
- `takeUntil` when you want to unsubscribe based on another event
- `filte`r to filter out events based on their value
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
- `BehaviorSubjects` are for warm/hot observables
- `Subjects` are for cold observables
- `ReplaySubjects` are for multicast/buffered observables

### Subscriptions
Forgetting to unsubscribe will lead to memory leaks and side effects being run
after the related component is destroyed.

Strategies for managing subscriptions:
- `takeUntil(this.destroy)` (here be dragons)
- `Subscription#add` (tree of subscriptions) vs. `SubSink` (array of
  subscriptions)
- Manual unsubscription of every subscription
