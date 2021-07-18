import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meal } from './meal';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }
  
  postWorkoutForm(workout: Workout): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', workout);
    // return of(workout);
  }
  
  postMealForm(mealId: any): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', mealId);
    // return of(workout);
  }
  
  getMealItems(): Observable<Meal[]> {
    //This can be done later using get request
    return of(
      [
        {
          id: '1',
          mealName: 'Peanut',
          date: ''
        },
        {
          id: '2',
          mealName: 'Egg',
          date: ''
        },
        {
          id: '3',
          mealName: 'Apple',
          date: ''
        },
      ]
    );
  }
}
