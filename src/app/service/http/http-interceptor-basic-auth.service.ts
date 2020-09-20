import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let basicAuthString;
    if (sessionStorage.getItem('auth_key')) {
      basicAuthString = sessionStorage.getItem('auth_key')
      let headers = new HttpHeaders({
        Authorization: basicAuthString
      })
      request = request.clone(
        {
          headers
        }
      )
    }
    return next.handle(request);
  }
}
