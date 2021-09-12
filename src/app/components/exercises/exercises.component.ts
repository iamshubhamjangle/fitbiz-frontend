import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getExerciseData().subscribe(items => this.exerciseData = items);
  }

  selectedCategory: string = 'All';
  exerciseData: Exercise[] = [];
  exerciseCategories: string[] = ['All','Strength', 'Power', 'Yoga', 'Stretching', 'Power2', 'Yoga2', 'Stretching2'];
  
  changeSelectedCategory(item: string) {
    this.selectedCategory = item;
  }
}
