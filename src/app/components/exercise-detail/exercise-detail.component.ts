import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  exercise: any;

  constructor() { }

  ngOnInit(): void {
    console.log(history.state);
    this.exercise = history.state;
  }


}
