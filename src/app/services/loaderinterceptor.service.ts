import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { get as _get } from 'lodash';

import {LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderinterceptorService implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private router : Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onEnd();
      }
    },
      (err: any) => {
        let status = _get(err, 'status');
        // 0 for unknown error
        if(status == 401 || status == 302 || status == 0){
          window.location.href = 'saml/logout';
        }
        this.onEnd();
    }));
  }
  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }

}
