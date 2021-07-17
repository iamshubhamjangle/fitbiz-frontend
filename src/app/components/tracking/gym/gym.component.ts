import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormsModule, NgForm } from '@angular/forms';
import { Workout } from 'src/app/data/workout';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {

  originalWorkout : Workout = {
    id: Date.toString(),
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

  constructor() { }

  ngOnInit(): void {
  }

  showMyContainer: boolean = true;
  
  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ' + form.submitted + " form valid " + form.valid);
  }

}
