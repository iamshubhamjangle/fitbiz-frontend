import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({  providedIn: 'root' })
export class ApiInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("In Api Interceptor service! ");
    return next.handle(request);

    // if (request.url.includes("login") || request.url.includes("signup"))
    // return next.handle(request);

    // let token = localStorage.getItem("token");
    
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`,
    //   'Content-Type': `application/json`,
    //   'Access-Control-Allow-Origin': '*'
    // });

    // // const url = `${request.url}&api_key=xyZapiKeyExample`;
    // const requestWithHeaders = request.clone({headers})

    // return next.handle(requestWithHeaders).pipe(catchError(err => {
    //   console.log(headers);
    //   if(err instanceof HttpErrorResponse) {
    //     if(err.status === 400) {
    //       console.log("Unauthorized: 400");
    //       // Handle unauthorized error
    //       // logout() user
    //     } else if(err.status === 500) {
    //       console.log("Server is not responding: 500")
    //       // Handler internal server error
    //       // alert("Try after some time.")
    //     }
    //   }
    //   return new Observable<HttpEvent<any>>();
    // }));

  }

}
