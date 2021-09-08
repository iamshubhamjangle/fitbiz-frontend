import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  mealListItems: MealList[] = [];
  mealDataItemsForUser: MealData[] = [];

  ngOnInit(): void {
    this.dataService.getMealListItems().subscribe(items => this.mealListItems = items);
    this.dataService.getMealDataItemForUser().subscribe(items => this.mealDataItemsForUser = items);
  }
  
  toggleFormVisibility() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    // console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    // console.log("Form Selected Id: ", form.value.dropdownMealId);

    let currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    let mealIdSelected = parseInt(form.value.dropdownMealId);
    console.log('selected meal id: ' + mealIdSelected);

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

  onDeleteItemClick(item: any) {
    console.log("onDeleteItemCLick: " + item)
    // console.log(typeof(item));

    this.dataService.deleteMealDataItem(item).subscribe(
      result => this.onDeleteSuccess(result),
      error => console.log(error)
    );
  }

  onDeleteSuccess(successResponse: any) {
    console.log('Success' + successResponse);
    window.location.reload();
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

  reloadMealList() {
    // this.dataService.getMealListItems().subscribe(items => this.mealListItems = items);
    window.location.reload();
  }

}
