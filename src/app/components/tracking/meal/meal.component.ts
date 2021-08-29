import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';

import { DataService } from 'src/app/data/data.service';
import { MealData } from 'src/app/models/mealData';
import { MealList } from 'src/app/models/mealList';
import * as moment from 'moment';       //for formatting datetime


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
  mealListItems!: Observable<MealList[]>;
  mealDataItemsForUser!: Observable<MealData[]>;

  ngOnInit(): void {
    this.mealListItems = this.dataService.getMealListItems();
    this.mealDataItemsForUser = this.dataService.getMealDataItemForUser();
    // this.mealDataItemsForUser.subscribe(val => {
    //   console.log(val)
    // });
  }
  
  toggleFormVisibility() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    console.log("Form Selected Id: ", form.value.dropdownMealId);

    let currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    let mealIdSelected = parseInt(form.value.dropdownMealId);

    var requestBody = {
      mealId: mealIdSelected,
      date: currentDateTime
    }

    if(form.valid){
      this.postError = false;
      this.dataService.postMealForm(requestBody).subscribe(
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

  reloadMealList() {
    
  }
}
