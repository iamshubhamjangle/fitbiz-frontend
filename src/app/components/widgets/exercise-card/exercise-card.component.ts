import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input()
  inputExerciseData: Exercise[] = [];

  @Input()
  selectedCategory: string = 'All';

  onExerciseCardClick(exercise: any) {
    this.router.navigateByUrl('/exercise-detail#', {state: exercise});
  }
}
