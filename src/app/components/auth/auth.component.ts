import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  signInButtonClick() {
    this.signInActive = true;
  }

  signUpButtonClick() {
    this.signInActive = false;
  }

  onSignInSubmit(form1: NgForm) {
    console.log('in onSubmit: ' + form1.submitted + " form-valid: " + form1.valid);
    console.log(form1.value);

    var signInData = {
      username: form1.value.userName,
      password: form1.value.password
    }

    console.log(signInData);

    if(form1.valid) {
      // this.postError = false;
      this.dataService.postSignInData(signInData).subscribe(
        result => this.onPostSuccess(result),
        error => this.onHttpError(error),
        );
    } else {
      console.log('Please enter valid username/password');
    }
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = "Incorrect username/password";
  }

  onPostSuccess(successResponse: any) {
    console.log('success: ', successResponse);
    // this.postSuccess = true;
    this.postError = false;
  }

}
