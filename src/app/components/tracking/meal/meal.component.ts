import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMyContainer: boolean = true;
  
  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
  }

}
