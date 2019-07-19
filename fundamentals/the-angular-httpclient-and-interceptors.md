---
contributors: Michael Karén
---

# The Angular HttpClient and interceptors

## Suggested resources

- [Insider’s guide into interceptors and HttpClient mechanics in Angular](https://blog.angularindepth.com/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf)
- [Top 10 ways to use Interceptors in Angular](https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6)

## Suggested topics

### `HttpClient`

- Requests
  - Verbs
  - `request` options
    - `headers`
    - `observe`
    - `params`
    - `reportProgress`
    - `responseType`
    - `withCredentials`
  - Handling errors

### Interceptors (middleware)

[HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor) was introduced with Angular 4.3.
It provides a way to intercept HTTP requests and responses to transform or handle them before passing them along.
Interceptors are capable of mutating requests and responses, but the [HttpRequest](https://angular.io/api/common/http/HttpRequest)
and [HttpResponse](https://angular.io/api/common/http/HttpResponse) instance properties are read-only.
This is because we might want to retry a request if it does not succeed at first.
And immutability ensures that the interceptor chain can re-process the same request multiple times.

You can use multiple interceptors but keep this in mind that Angular applies interceptors in the order that you provide them.
If you provide interceptors A, then B, then C, requests will flow in A->B->C and responses will flow out C->B->A.

![alt text](images/interceptors-flow.png 'Interceptors flow')

Another nice thing about interceptors is that they can process the request and response together.
This gives the possibility to combine a feature on the whole event.

- Feature-specific interceptors
- Component-specific interceptors
- Shared error handlers

### Security

- [Cross-Site Request Forgery (XSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery) is an attack technique by which the attacker can trick an authenticated user into unknowingly executing actions on your website. 
Angular uses interceptors for protection against XSRF. It does this by reading the XSRF-TOKEN from a cookie and setting it as the X-XSRF-TOKEN HTTP header. Since only code that runs on your domain could read the cookie, the backend can be sure that the HTTP request came from your client application and not an attacker.
- Authentication and authorization headers
