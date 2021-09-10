import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval  } from 'rxjs';
import { AuthService } from 'src/app/data/auth.service';
import { DataService } from 'src/app/data/data.service';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) { }
  
  exerciseData: Exercise[] = [];

  ngOnInit(): void {
    this.dataService.getExerciseData().subscribe(items => this.exerciseData = items);
  }

  onMealCardClick(){
    this.router.navigateByUrl('/track-meal'); 
  }
  
  onGymCardClick(){
    this.router.navigateByUrl('/track-workout');
  }

}
