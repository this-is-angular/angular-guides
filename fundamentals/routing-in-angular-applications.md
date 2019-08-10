---
contributors: Nate Lapinski
---

# Routing in Angular applications

## Suggested topics
- Navigation
- Route guards
- Route resolvers
- Router events
- Lazy-loading
- Route configuration

# Routing
Routing is what enables users to navigate from page to page inside of an Angular application. It is a surpisingly deep subject, especially in Angular. This guide will give you a comprehensive view of client-side routing in Angular, as well as some deeper insights into how the framework implements this concept. 

In its simplest form, the router enables navigation from page to page, usually updating the browser's location along the way. But Angular's router module is responsible for so much more. It enables lazy loading of modules, enforces route guards, and improves performance, just to name a few. It is very customizable, and as we will see, the router follows a regular lifecycle, and internally makes heavy use of tree-based data structures, as well as the RxJS library. But first, let's understand the difference between server-side routing, and client-side routing, as it will help us develop a better mental model of how Angular's router works.

For the first part of this chapter, consider the following minimal Angular application with routing. This is simple, but it will be enough to show the basics of routing. A more sophisticated example will be used later to show features such as lazy loading.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

/**
 * Normally, this would be split over multiple files.
 * Everything is placed into one file here to make it
 * easier to read.
 */

// Sample component for routing.
// Displayed when we have routed to pathA
@Component({
  template: `<h1>This is Component A</h1>`
})
export class ComponentA {}

// Sample component for routing.
// Displayed when we have routed to pathB
@Component({
  template: `<h1>This is Component B</h1>`
})
export class ComponentB {}

// Main compoment. Contains links for navigating to
// pathA and pathB
@Component({
  selector: 'my-app',
  template: `
    <div>
    <nav>
      <h1>Navigation</h1>
      <a routerLink="/pathA">Path A</a>
      &nbsp;
      <a routerLink="/pathB">Path B</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

// Table of static routes. This defintes all possible routes in our application.
// When an object's `path` matches, its `component` is rendered using the 
// `<router-outlet>` directive
const ROUTES = [
  { path: 'path-a', component: ComponentA },
  { path: 'path-b', component: ComponentB },
];

// Logs all router events to the console.
const optionsConfig = {
  enableTracing: true
};

// Basic module setup
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(ROUTES, optionsConfig) ],
  declarations: [ AppComponent, ComponentA, ComponentB ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Nothing too exciting here. `RouterModule.forRoot` takes an array containing our application's route (more on this later), as well as an optional configuration object which enables tracing. This means all router events will be logged to the console.

## Server-Side Routing and Client-Side Routing
Before we explore routing in Angular, it is worth noting the differences between client-side routing, which is what Angular's `RouterModule` provides, and traditional server-side routing.

[TODO: Add diagram showing the difference]

Consider the following two links. You might find #1 inside of a traditional HTML page that isn't using any modern Javascript framework. The second link is taken from out sample Angular application above (notice the `routerLink` directive instead of the `href` attribute).
```
// 1. Server-side routing example
<a href="https://www.example.com/path-a">Path A</a>

// 2. Client-side routing example (Angular)
<a routerLink="/path-a">Path A</a>
```

### Server-Side Routing
Server-side routing is simple. When the user clicks on link #1, the browser detects that the link has been clicked. It then fetches the resource at the URL specified by href (`https://www.example.com/path-a`) using a GET request. The server at `www.example.com` receives the request, checks its own internal routing table, and sends a response back to the browser containing the resource at `/path-a`. Usually this response is an entirely new HTML page. Upon receiving this response, the browser refreshes the page, and displays the HTML document is has received from the server. 

With server-side routing, each time a navigation occurs, it involves a request to some server, and it results in an entirely new page being loaded. While server-side rendering can be great for things like web crawlers and search engine optimization, it tends to involve a lot of page refreshes, and can cause user experience to suffer.

### Client-Side Routing (Angular)
With client-side routing, things are very different. Notice in #2 that the anchor tag is using a `routerLink` directive instead of a standard `href` attribute. This is so Angular can listen in and intercept the click instead of letting the browser make a GET request. When this link is clicked, the `routerLink` will tell Angular's router that the link has been clicked (this is also why updating the browser location directly will result in a full page refresh, since the Router doesn't intercept this). Instead of the browser making a request to a server for a new page, the router will instead check a list of user-defined routes to see if there are any entries for the `/path-a`. If it finds one, the router will render the component(s) associated with that route using a `<router-outlet>` directive, all without causing a single page refresh!

We will go into much more detail in this guide about how the Angular router makes all of this possible. Just know for now that client-side routing is done entirely in the browser, and doesn't usually involve a page refresh (unless a user forces one by interacting with the browser location manually).

## Defining Application Routes

### The Route Configuration Object

### Static Routing, and the Route Configuration Object
If you come from React, you may be familiar with dynamic routing. [give a simple example].
Angular uses a more rigid approach, known as static routing. [give a simple example].

### Mental Model 1: A Tree of Components
If you are familiar with the Document Object Model (DOM), then you will know that an HTML document has an internal, JavaScript representation inside of the browser, where each element in the HTML document becomes a JavaScript object in the DOM. Since there is a hierarchy among nodes in an HTML document (due to nesting), these nodes are best represented by a tree.

Your Angular application is much the same, and a very useful mental model is to imagine your application as a tree of components. 


## The Navigation Cycle
The router follows a regular cycle of steps whenever a navigation occurs. It also has its own set of native events that are fired during navigation.
Let's consider simple scenario where a user clicks on the following link inside of the appliation `<a routerLink="/about">about</a>`.
1. The link is clicked. Since this anchor tag is using the `routerLink` directive instead of a regular `href` attribute, Angular is able to intercept this event.
2. A `NavigationStart` event is fired by the router, indicating the start of a navigation.
3. The router looks at the path `/about`, and starts to traverse the router configuration object that was passed into `RouterModule.forRoot`. It will check to see if any object in that tree of objects has a path property matching `/about`. In the event that multiple objects contain this path, the first one to match wins.
4. The router will apply any redirects it finds in the configuration abject along the way. This is sometimes useful if your site has legacy URLs that you still want to support, but also want to redirect users to new URLs.
5. If the router finds a match inside of the routes configuration object, it dispatches a `RoutesRecognized` event to signal that a match has been found.
6. It then applies any guard functions that are specificed for the matched route, and dispatches a `GuardsCheckStart` event. If all of the guard functions pass, then the navigation continues, and a `GuardsCheckEnd` event is dispatched.
7. Next, any route resolvers associated with this route are run. Route resolvers can be used to prefetch data for a route.
8. Assuming everything has been successful up to this point, the navigation is complete, and the `NavigationEnd` event is fired.

Navigations can be more complicated and nuanced than this example, but this is all we need.


## The role of the `<router-outlet>` directive

## Route configuration
So far, we have seen what navigation is, and how `<router-outlet>` directives are used to display routable content within our application. But, how does Angular actually know which components to associate with which routes? To answer this, we pass an array of route configuration objects into the RouterModule's `forRoot` method:

```typescript
const ROUTES = [

];
RouterModule.forRoot(ROUTES);
```

The `<router-outlet>` directive tells Angular which part(s) of our application should be managed by the router. For example, if you have some content that is present on every page of your application, such as a footer or navigation, then that content doesn't change, and doesn't necessarily need to go inside of a router-outlet. However, dynamic content will go inside.

## Route guards

## Route resolvers

## Router events

## Lazy loading
We've seen how the router manages routing. It can also help make your applications more performant! If you structure your application code into distinct feature modules, you can take advantage of code-splitting and lazy loading. 

# Misc

### What is static routing? How does it differ from dynamic routing?
If you are coming from React, you may be familiar with React's router. Prior to version 4, it also used static routing. Starting with version 4, it switched over to dynamic routing.

### The Role of RxJS in Routing
The developer-facing API of the Router doesn't require much knowledge of RxJS observables. However, just under the surface of the router, observables are everywhere. As with much of the Angular framework, observables provide a clean, composable way of moving and processing data.
