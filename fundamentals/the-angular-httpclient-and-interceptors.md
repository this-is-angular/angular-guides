# The Angular HttpClient and interceptors

## Suggested resources

- [Insider’s guide into interceptors and HttpClient mechanics in Angular](https://blog.angularindepth.com/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf)

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

- Feature-specific interceptors
- Component-specific interceptors
- Shared error handlers

[HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor) was introduced with Angular 4.3.
It provides a way to intercept HTTP requests and responses to transform or handle them before passing them along.
Interceptors are capable of mutating requests and responses, but the [HttpRequest](https://angular.io/api/common/http/HttpRequest)
and [HttpResponse](https://angular.io/api/common/http/HttpResponse) instance properties are read-only.
This is because we might want to retry a request if it does not succeed at first.
And immutability ensures that the interceptor chain can re-process the same request multiple times.

You can use multiple interceptors but keep this in mind that Angular applies interceptors in the order that you provide them.
If you provide interceptors A, then B, then C, requests will flow in A->B->C and responses will flow out C->B->A.
![alt text](images/interceptors-flow.png 'Interceptors flow')

### Security

- Cross-site Request Forgery (XSRF) tokens
- Authentication and authorization headers
