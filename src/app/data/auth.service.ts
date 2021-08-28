import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isUserLoggedIn = new Subject<boolean>();

  saveTokenToLocalStorage(token: string){
    localStorage.setItem('currentUser', JSON.stringify({ token: token, name: 'Shubham' }));
    this.isUserLoggedIn.next(true);
    this.router.navigate(['/']);
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem('currentUser');
    this.isUserLoggedIn.next(false);
  }

  userExist(): boolean {
    var user = localStorage.getItem('currentUser');
    if(user != null){
      this.isUserLoggedIn.next(true);
      return true;
    }
    return false;
  }
  
  getTokenFromLocalStorage(): any {
    var user = localStorage.getItem('currentUser');
    if(user != null){
      this.isUserLoggedIn.next(true);
      return JSON.parse(user).token;
    }
    this.isUserLoggedIn.next(false);
    return null;
  }

}
