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

```
// 1. Server-side routing example
<a href="https://www.test.com/about">About</a>

// 2. Client-side routing example (Angular)
<a routerLink="/about">About</a>
```

### Server-Side Routing
Server-side routing is simple. When the user clicks on the link in #1, the browser detects that the link has been clicked. It then fetches the URL specified by href (https://www.test.com/about) using a GET request. Upon response, it the browser completely refreshes the page, and displays the HTML document is has received from the server. With server-side routing, each time a navigation occurs, it results in an entirely new page being loaded.

### Client-Side Routing (Angular)
With client-side routing, things are different. Notice in #2 that the anchor tag is using a `routerLink` directive instead of a standard `href`. When this link is clicked, the `routerLink` will tell Angular's router that a link has been clicked. Instead of the browser making a request to a server, the router will instead check a list of routes to see if there are any entries for `/about`. If it finds one, the Router will render some new components, all without causing a single page refresh!


[TODO: Add a basic routing example]


## Mental Model 1: A Tree of Components
If you are familiar with the Document Object Model (DOM), then you will know that an HTML document has an internal, Javascript representation inside of the browser, where each element in the HTML document becomes a Javscript object in the DOM. Since there is a hierarchy among nodes in an HTML document (due to nesting), these nodes are best represented by a tree.

Your Angular application is much the same, and a very useful mental model is to imagine your application as a tree of components. 

## Navigation

## The role of the <router-outlet> directive

## Route configuration
So far, we have seen what navigation is, and how <router-outlet> directives are used to display routable content within our application. But, how does Angular actually know which components to associate with which routes? To answer this, we pass an array of route configuration objects into the RouterModule's `forRoot` method:

```
const ROUTES = [

];
RouterModule.forRoot(ROUTES);
```

The <router-outlet> directive tells Angular which part(s) of our application should be managed by the router. For example, if you have some content that is present on every page of your application, such as a footer or navigation, then that content doesn't change, and doesn't necessarily need to go inside of a router-outlet. However, dynamic content will go inside.

## Route guards

## Route resolvers

## Router events

## Lazy-loading
We've seen how the router manages routing. It can also help make your applications more performant! If you structure your application code into distinct feature modules, you can take advantage of code-splitting and lazy-loading. 

# Misc

### What is static routing? How does it differ from dynamic routing?
If you are coming from React, you may be familiar with React's router. Prior to version 4, it also used static routing. Starting with version 4, it switched over to dynamic routing.

### The Role of RxJS in Routing
The developer-facing API of the Router doesn't require much knowledge of RxJS observables. However, just under the surface of the router, observables are everywhere. As with much of the Angular framework, observables provide a clean, composable way of moving and processing data.