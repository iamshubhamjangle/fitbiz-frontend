import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }


  postWorkoutForm(workout: Workout): Observable<Workout> {
    return of(workout);
  }
}
