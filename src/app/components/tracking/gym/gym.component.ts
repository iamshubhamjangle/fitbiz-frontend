import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NgForm } from '@angular/forms';
import { Workout } from 'src/app/models/workout';
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
  originalWorkoutLogData: Workout[] = [];
  showMyContainer: boolean = false;
  inUpdateMode: boolean = false;

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
    this.dataService.getWorkoutLogData().subscribe(items => this.originalWorkoutLogData = items);
  }

  
  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-up fa-chevron-down');
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
    window.location.reload();
  }

  onEditWorkoutItem(choosedItemId: any) {
    // console.log("onEditItemCLick: " + choosedItemId + " " + typeof(choosedItemId))
    // console.log(this.workoutLogData);
    
    let item = JSON.parse(JSON.stringify(this.originalWorkoutLogData));

    for(let i=0; i < item.length; i++) {
      if(item[i].id == choosedItemId){
        // console.log(item[i]);
        this.workout = item[i];
        // console.log(this.workout)
        this.showMyContainer = true;
        this.inUpdateMode = true;
      }
    }
  }

  onDeleteWorkoutItem(item: any) {
    // console.log("onDeleteItemCLick: " + item + " " + typeof(item))
    this.dataService.deleteWorkoutItem(item).subscribe(
      result => this.onPostSuccess(result),
      error => this.onHttpError(error)
    )
  }

  onUpdateSubmit() {
    this.dataService.updateWorkoutItem(this.workout).subscribe(
      result => this.onPostSuccess(result),
      error => this.onHttpError(error)
    )
  }

  onUpdateCancel() {
    this.workout = this.originalWorkout;
    this.inUpdateMode = false;
  }

}
