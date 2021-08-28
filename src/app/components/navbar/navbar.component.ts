import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(val => {
      this.loggedin = val
    });
    this.authService.userExist();
  }

  gotoAuth(ch: string){
    this.router.navigate(['/login'], { queryParams: { page: ch } });
  }

  logout() {
    this.authService.removeTokenFromLocalStorage();
  }

}
