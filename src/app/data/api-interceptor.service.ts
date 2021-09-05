import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({  providedIn: 'root' })
export class ApiInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    // console.log("AAPII");

    if (request.url.includes("signin") || request.url.includes("signup")){
      console.log('APII - signin/signup');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      const requestWithHeaders = request.clone({headers})

      return next.handle(requestWithHeaders);
    }

    console.log('APII - other');

    let user = localStorage.getItem('currentUser');
    let token = '';

    if(user != null){
      token = JSON.parse(user).token;
    } else {
      console.log('token doesnt exist need to redirect user to login screen!')
    }
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': `application/json`,
      'Access-Control-Allow-Origin': '*'
    });

    // // const url = `${request.url}&api_key=xyZapiKeyExample`;
    const requestWithHeaders = request.clone({headers})

    return next.handle(requestWithHeaders).pipe(catchError(err => {
      if(err instanceof HttpErrorResponse) {
        if(err.status === 400) {
          console.log("Unauthorized: 400");
          // Handle unauthorized error  // logout() user
        } else if(err.status === 500) {
          console.log("Server is not responding: 500")
          // Handler internal server error // alert("Try after some time.")
        }
      }
      return new Observable<HttpEvent<any>>();
    }));

  }

}
