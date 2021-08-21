import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NgForm } from '@angular/forms';
import { Workout } from 'src/app/data/workout';
import { DataService } from 'src/app/data/data.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  
  postSuccess = false;
  postError = false;
  postErrorMessage = '';
  workoutLogData!: Observable<Workout[]>;

  originalWorkout : Workout = {
    id: '',
    date: '',
    workoutName: '',
    weight1: '',
    rep1: '',
    weight2: '',
    rep2: '',
    weight3: '',
    rep3: ''
  }

  workout : Workout = { ...this.originalWorkout };


  ngOnInit(): void {
    this.workoutLogData = this.dataService.getWorkoutLogData();
  }

  showMyContainer: boolean = true;
  
  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    // console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    if(form.valid){
      this.dataService.postWorkoutForm(this.workout).subscribe(
        result => this.onPostSuccess(result),
        error => this.onHttpError(error)
        );
      } else {
        this.postError = true;
        this.postSuccess = false;
        this.postErrorMessage = 'Please enter all required fields.';
      }
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;    
  }

  onPostSuccess(successResponse: any) {
    console.log('success: ', successResponse),
    this.postSuccess = true;
    this.postError = false;
  }

}
