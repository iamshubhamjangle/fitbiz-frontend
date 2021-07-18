import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meal } from 'src/app/data/meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor() { }

  showMyContainer: boolean = true;
  originalMeal: Meal = {
    id: '',
    date: '',
    mealName: '',
    calories: '',
    carbs: '',
    fats: '',
    proteins: ''
  }

  meal: Meal = { ...this.originalMeal };

  ngOnInit(): void {
  }
  
  toggleFormVisibility() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    // console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    // console.log('duplicate: ', this.meal);    
  }

}
