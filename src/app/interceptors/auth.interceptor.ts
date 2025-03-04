import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // This function Intercepts every network call and adds the Authorization Headers
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Adding the new Header to the previous request
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth', 'Bearer - Anirban Custom Token'),
    });

    // We are letting the request go to the next set of interceptor or get sent
    return next.handle(modifiedRequest);
  }
}
