import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({  providedIn: 'root' })
export class ApiInterceptorService implements HttpInterceptor{

  constructor(private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
      if (request.url.includes("signin") || request.url.includes("signup")){
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      const requestWithHeaders = request.clone({headers})
      return next.handle(requestWithHeaders);
    }

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
          console.log("Server down: 400");
        } 
        else if(err.status === 403) {
          console.log("Unauthorized Request: 403")
          this.authService.removeTokenFromLocalStorage();
          this.router.navigateByUrl("/login?page=signin")
        } 
        else if(err.status === 504) {
          console.log("Server down: 504")
          alert('Server Down! Please try again later!')
          this.router.navigateByUrl("/")
        } 
        else if(err.status === 500) {
          console.log("Server is not responding: 500")
        }
      }
      return new Observable<HttpEvent<any>>();
    }));

  }

}
