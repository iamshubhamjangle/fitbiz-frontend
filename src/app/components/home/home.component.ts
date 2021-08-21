import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval  } from 'rxjs';
import { DataService } from 'src/app/data/data.service';
import { Exercise } from 'src/app/models/exercise';

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
    // this.exerciseData.subscribe(val => console.log(val));
  }
  
  onGymCardClick(){
    this.router.navigateByUrl('/track-workout');
  }

}
