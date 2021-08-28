import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/data/auth.service';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signInActive = true;
  postError = false;
  postErrorMessage = '';
  
  constructor(private dataService: DataService, private route:ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['page'] == 'signup'){
        this.signInActive = false;
      }
    })
  }

  signInButtonClick() {
    this.signInActive = true;
  }

  signUpButtonClick() {
    this.signInActive = false;
  }

  onSignInSubmit(form1: NgForm) {
    var signInData = {
      username: form1.value.username,
      password: form1.value.password
    }

    console.log(signInData);

    if(form1.valid) {
      this.postError = false;
      this.dataService.postSignInData(signInData).subscribe(
        result => this.onPostSuccess(result),
        error => this.onHttpError(error, "Incorrect username/password"),
        );
    } else {
      this.onHttpError(null, "Please enter valid username/password")
    }
  }

  onSignUpSubmit(form2: NgForm) {
    if(form2.invalid){
      this.onHttpError(null, "Please enter valid username/password")
      return;
    }    
    if(form2.value.password === form2.value.confirmPassword) {
      this.postError = false;
      console.log(form2.value);
    } else {
      this.onHttpError(null, "Your password don't match!")
    }
  }

  onHttpError(errorResponse: any, message: string) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = message;
  }

  onPostSuccess(token: any) {
    this.authService.saveTokenToLocalStorage(token);
    this.postError = false;
  }

}
