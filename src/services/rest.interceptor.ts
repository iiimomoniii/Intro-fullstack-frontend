import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = `${environment.baseUrl}api/${request.url}`;
    const urlReq = request.clone({ url });
    //console.log("Req : RestInterceptor");
    return next.handle(urlReq).pipe(
      tap( event => {
        //console.log("Res : RestInterceptor");
        if (event instanceof HttpResponse) {

        }
      })
    );
  }
}
