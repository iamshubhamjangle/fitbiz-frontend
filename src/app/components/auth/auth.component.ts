import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  forminfo = false;
  formPasswordMatch = false;
  formSignInIsBlank = false;
  postErrorMessage = '';

  constructor(private dataService: DataService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['page'] == 'signup') {
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
    console.log(form1.value);

    if (form1.valid) {
      this.postError = false;
      this.dataService.postSignInData(form1.value).subscribe(
        result => this.onPostSuccess(result),
        error => this.onHttpError(error, "Incorrect username/password"),
      );
    } else {
      this.formSignInIsBlank = true;
    }
  }

  onSignUpSubmit(form2: NgForm) {
    if (form2.valid) {
      if (form2.value.password === form2.value.confirmPassword) {
        this.postError = false;
        this.formPasswordMatch = false;
        this.forminfo = false;
        console.log(form2.value);

        var body = {
          "username": form2.value.username,
          "email": form2.value.email,
          "password": form2.value.password,
          "roles": [
            "ROLE_CLIENT"
          ]
        }

        this.dataService.postSignUpData(body).subscribe(
          result => this.onPostSuccess(result),
          error => this.onSignUpError(error)
        )
      } else {
        this.formPasswordMatch = true;
      }
    } else {
      this.forminfo = true;
    }
  }

  onSignUpError(error: any): void {
    if (error.status === 422) {
      this.postErrorMessage = 'username already exist!';
      this.postError = true;
    } else if (error.status === 417) {
      this.postErrorMessage = 'Email already exist!';
      this.postError = true;
    } else {
      this.postErrorMessage = 'Some went wrong...';
      this.postError = true;
    }
  }

  onHttpError(error: any, message: string) {
    if (error.status === 423) {
      this.postErrorMessage = 'username already exist!';
      this.postError = true;
    } else if (error.status === 417) {
      this.postErrorMessage = 'Email already exist!';
      this.postError = true;
    } else if (error.status === 504) {
      this.postErrorMessage = 'Server down, Please try again later!';
      this.postError = true;
    } else if (error.status === 424) {
      this.postErrorMessage = "Username/password doesn't exist!";
      this.postError = true;
    } else {
      this.postErrorMessage = 'Some went wrong...';
      this.postError = true;
    }
  }

  onPostSuccess(jsonResult: any) {
    this.authService.saveTokenToLocalStorage(jsonResult.token, jsonResult.username);
    this.postError = false;
  }

}
