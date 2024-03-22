import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtIInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Modify the request, add headers, etc.
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer your_token_here'),
    });

    return next.handle(modifiedRequest);

  }
}
