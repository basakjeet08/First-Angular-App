import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  // This function intercepts the api calls and logs the details for better debugging
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      // This helps us to tap into api call events without changing any data
      tap((event) => {
        // If the event type is sent -> Means the api call is sent to backend
        if (event.type === HttpEventType.Sent) {
          console.log(`Request to Url : ${request.url} sent successfully....`);
          console.log(request);
        }

        // If the event is Response -> Means the api call response is received
        if (event.type === HttpEventType.Response) {
          console.log(`The response of : ${request.url} is received....`);
          console.log(event.body);
        }
      })
    );
  }
}
