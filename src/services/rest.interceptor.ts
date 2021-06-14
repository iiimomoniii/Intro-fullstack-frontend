import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { tap, finalize, delay } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { LoadingService } from './loading.service';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  constructor(
    private snackbar: MatSnackBar,
    private loadingService: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = `${environment.baseUrl}api/${request.url}`;
    const urlReq = request.clone({ url });
    //console.log("Req : RestInterceptor");

    //if add product and edit will not show spinner
    if (!request.reportProgress) {
      this.loadingService.indeterminate.next(true);
    }

    return next.handle(urlReq).pipe(
      tap(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {  
              const total: number = event.total;  
              const progress = Math.round(100 * event.loaded / total);
              this.loadingService.determinate.next(progress);
            }
            break;
          case HttpEventType.Response:
            const config: MatSnackBarConfig = {
              //time for show notice in ms
              duration: 4000,
              //postion of notice in website
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar', 'snackbar-green']
            }
            switch (event.status) {
              case 200:
                if (request.method === 'PUT') {
                  this.snackbar.open("Edit Success", '', config);
                }
                break;
              case 201:
                this.snackbar.open("Create Success", '', config);
                break;
              case 204:
                this.snackbar.open("Edit Success", '', config);
                break;
            }
            break;
        }
      },
        error => {
          if (error instanceof HttpErrorResponse) {
            const config: MatSnackBarConfig = {
              //time for show notice in ms
              duration: 4000,
              //postion of notice in website
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar', 'snackbar-error']
            }
            //check authen
            if (error.status === 401 || error.status === 403) {
              this.snackbar.open("UnAuthen", '', config);
            }
            if (error.status === 404 && error.error.message) {
              this.snackbar.open(error.error.message, '', config);
            } else {
              this.snackbar.open(error.message, '', config);
            }
          }
        }),
      //delay response
      //delay(5000),
      finalize(() => {
        this.loadingService.indeterminate.next(false);
      })
    );
  }
}
