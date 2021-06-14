import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const started = Date.now();
    // console.log("Req : LogInterceptor");
    return next.handle(request).pipe(
      tap(event => {
        //console.log("Res : LogInterceptor");
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`[${event.status}] Request for ${request.urlWithParams} took ${elapsed} ms.`);
        }
      })
    );
  }
}
