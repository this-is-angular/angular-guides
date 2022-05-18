# I am looking for an Angular component design pattern

## Shared application state

You want to share the same pieces of application state between multiple
components?

Use a [common container component](../design-patterns/common-container-component)
for data binding to multiple presentational components.

## Common presentation

You want the same UI but for different pieces of the state?

Use different container components to data bind to a
[common presentational component](../design-patterns/common-presentational-component).

## Cross-platform code sharing

You want cross-platform code-sharing?

Use [the BLoC pattern](../design-patterns/the-bloc-pattern) or otherwise
[extract common business logic into class-based services](../design-patterns/extract-common-business-logic-into-class-based-services)
that can be shared between similar components for different platforms.

## Separating state from presentation

You want to separate shared state from presentation?

Split mixed components into [container components](../design-patterns/container-components)
and [presentational components](../design-patterns/presentational-components).

## Sharing common behavior and user interaction

You want to share common UI logic?

Use [component features](../fundamentals/component-features) or examine
[the class-based mixins used by Angular Components](../frameworks-and-libraries/angular-components-mixins).
