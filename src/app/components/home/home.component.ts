import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data/data.service';
import { Exercise } from 'src/app/data/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  exerciseData!: Observable<Exercise[]>;


  ngOnInit(): void {
    this.exerciseData = this.dataService.getExerciseData();
  }

  onMealCardClick(){
    this.router.navigateByUrl('/track-meal');
  }
  
  onGymCardClick(){
    this.router.navigateByUrl('/track-workout');
  }

}
