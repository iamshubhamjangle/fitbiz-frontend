import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  forminfo = false;
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
    // console.log(form1.value);

    if (form1.valid) {
      this.postError = false;
      this.dataService.postSignInData(form1.value).subscribe(
        result => this.onPostSuccess(result),
        error => this.onHttpError(error, "Incorrect username/password"),
      );
    } else {
      this.onHttpError(null, "Please enter valid username/password")
    }
  }

  onSignUpSubmit(form2: NgForm) {
    if (form2.valid) {
      if (form2.value.password === form2.value.confirmPassword) {
        this.postError = false;
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
        this.onHttpError(null, "Your password don't match!")
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

  onHttpError(errorResponse: any, message: string) {
    // console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = message;
  }

  onPostSuccess(result: any) {
    const jsonResult = JSON.parse(result);
    this.authService.saveTokenToLocalStorage(jsonResult.token);
    this.authService.setUserName(jsonResult.username);
    console.log(JSON.parse(result).token);
    console.log(JSON.parse(result).username);
    this.postError = false;
  }

}
