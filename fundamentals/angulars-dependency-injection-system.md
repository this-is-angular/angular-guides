---
contributors: Andrew Evans, Nikita Poltoratsky
---

# Angular's dependency injection system

## Suggested topics
- Injectors
- Module level injectors
  - Eagerly loaded modules share an injector
  - Lazy-loaded modules have their own injectors
- Element injectors follow the component tree
  - Also with content projection?
- Constructor injection
- Module providers
- Dependency injection token providers
- Tree-shakable providers
  - Dependency injection tokens
  - Class-based services

## Related topics
- [Angular dependencies](./angular-dependencies.md)
- [Class-based services](./class-based-angular-services.md)
- [Angular modules](./angular-modules.md)

### What is Dependency Injection?

The concept of Dependency Injection is basically around objects relying on other object (dependencies) to accomplish tasks. 

Dependency Injetion is when an object is able to pull in something it is dependent on (a service, a component, etc.) when it needs it.  This enables you to build an architecture whereby there can be multiple objects can be shared across a system, and these objects can be instantiated or built just when necessary.

Angular has a __dependency injection system__ that produces dependent objects when objects that rely on them are created.  That sound super formal, so lets break it down in terms of Angular components and services.

Typically, you will have a component that relies (is dependant) upon a service.  This service is going to be built and used when the component is created.  This means that you (as the developer) do not need to be concerned with building out a copy of this dependency yourself.  You can just create the dependency once, and then your component will pull it in when necessary.  Moreover, this promotes reusability in that this same dependent object can be reused in other areas of the appliation.  Angular has a very powerful __injection system__ that enables you to do just this.

### Injectors

For the purposes of this guide, we are going to call __injectors__ anything in your Angular application that you have setup to be injected into objects.  This is typically done with the use of:
- `providers: []` array in modules
- `providedIn` in the case of `tree-shakeable-components`
- `providedIn: 'root'`

The methods used by __injectors__ is also typically discussed in terms of `eagerly loaded` and `lazy-loaded` modules.

You can also have `element` and `content projection` injectors.

When using __injectors__ they can be with `constructors` and `module providers`.

This all also warrents a discussion of a `injector` vs a `provider`.  This will be worked out in the next several sections.

### Module Level Injectors

#### eagerly loaded modules

#### lazy loaded modules

### element injectors

### constructor injectors

### injection done with the provider syntax

### injection done with tree-shakeable providers

### best practices for efficient dependency injection in Angular
