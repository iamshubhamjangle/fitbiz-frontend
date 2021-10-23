import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NgForm } from '@angular/forms';
import { Workout } from 'src/app/models/workout';
import { DataService } from 'src/app/data/data.service';
import * as moment from 'moment';

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
  postSuccessMessage = '';
  originalWorkoutLogData: Workout[] = [];
  showMyContainer: boolean = false;
  inUpdateMode: boolean = false;
  date: string = moment().format('YYYY-MM-DD');

  originalWorkout: Workout = {
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

  workout: Workout = { ...this.originalWorkout };


  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService() {
    this.dataService.getWorkoutLogData().subscribe(items => this.originalWorkoutLogData = items);
  }

  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    this.postSuccess = false;
    this.postError = false;
    $('i').toggleClass('fa-chevron-up fa-chevron-down');
  }

  onSubmit(form: NgForm) {
    // console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    if (form.valid) {
      this.dataService.postWorkoutForm(this.workout).subscribe(
        result => this.onPostSuccess(result + ' -- onSubmit', 'Your log was added successfully!'),
        error => this.onHttpError(error)
      );
    } else {
      this.postErrorMessage = 'Please enter all required fields.';
      this.postError = true;
      this.postSuccess = false;
    }
  }


  onEditWorkoutItem(choosedItemId: any) {
    // console.log("onEditItemCLick: " + choosedItemId + " " + typeof(choosedItemId))
    // console.log(this.workoutLogData);
    let item = JSON.parse(JSON.stringify(this.originalWorkoutLogData));

    for (let i = 0; i < item.length; i++) {
      if (item[i].id == choosedItemId) {
        // console.log(item[i] + ' === ' + this.workout);
        this.workout = item[i];
        this.showMyContainer = true;
        this.inUpdateMode = true;
      }
    }
  }

  onDeleteWorkoutItem(item: any) {
    // console.log("onDeleteItemCLick: " + item + " " + typeof(item))
    this.dataService.deleteWorkoutItem(item).subscribe(
      result => this.onPostSuccess(result, 'Your log was deleted successfully!'),
      error => this.onHttpError(error)
    )
  }

  onUpdateSubmit() {
    this.dataService.updateWorkoutItem(this.workout).subscribe(
      result => this.onPostSuccess(result + ' -- onUpdate', 'Your log was updated successfully!'),
      error => this.onHttpError(error)
    )
  }

  onUpdateCancel() {
    this.workout = this.originalWorkout;
    this.inUpdateMode = false;
    this.showMyContainer = false;
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onPostSuccess(successResponse: any, message: string) {
    // console.log('success: ', successResponse);
    // this.workout = this.originalWorkout;
    // this.showMyContainer = false;
    this.inUpdateMode = false;
    this.postSuccessMessage = message;
    this.postSuccess = true;
    this.postError = false;
    this.removeNotification();
    this.getDataFromService();
  }

  removeNotification(){    
    setTimeout(()=>{ this.postSuccess = false; }, 3000);
  }

  updateTheDateEventHandler(dateEmitted: string) {
    this.date = dateEmitted;
  }

}
