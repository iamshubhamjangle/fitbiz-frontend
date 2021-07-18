import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';

import { DataService } from 'src/app/data/data.service';
import { Meal } from 'src/app/data/meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor(private dataService: DataService) { }

  showMyContainer: boolean = true;

  postError = false;
  postSuccess = false;
  postErrorMessage = '';
  mealItems!: Observable<Meal[]>;

  ngOnInit(): void {
    this.mealItems = this.dataService.getMealItems();
  }
  
  toggleFormVisibility() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    // console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    // console.log('duplicate: ', this.meal);
    // console.log("Form Selected Id: ", form.value.dropdownMealId);

    let currentDateTime = new Date();
    var selectedMealItem = {
      id: form.value.dropdownMealId,
      date: currentDateTime
    }

    if(form.valid){
      this.postError = false;
      this.dataService.postMealForm(selectedMealItem).subscribe(
        result => this.onPostSuccess(result),
        error => this.onHttpError(error)
        );
      } else {
        this.postError = true;
        this.postSuccess = false;
        this.postErrorMessage = 'Please select an item to continue...';
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
