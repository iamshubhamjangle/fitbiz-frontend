import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormsModule, NgForm } from '@angular/forms';
import { Workout } from 'src/app/data/workout';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  showMyContainer: boolean = true;
  
  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ' + form.submitted + " form-valid: " + form.valid);
    this.dataService.postWorkoutForm(this.workout).subscribe(
      result => console.log('success: ', result),
      error => console.log('Error: ', error)
    );
  }

}
