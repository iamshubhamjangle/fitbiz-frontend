import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { MealData } from '../models/mealData';
import { Exercise } from '../models/exercise';
import { MealList } from '../models/mealList';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private REST_API_SERVER = "http://localhost:4200/server/";    //our proxy server running on spring boot

  constructor(private http: HttpClient) { }
  
  postWorkoutForm(workout: Workout): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', workout);
  }
  
  postMealForm(mealId: any): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', mealId);
  }

  postSignInData(signInData: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER + `users/signin?username=${signInData.username}&password=${signInData.password}`, '', {responseType: 'text'});
  }
  
  getMealItems(): Observable<MealData[]> {
    return this.http.get<MealData[]>(this.REST_API_SERVER + '/meal-list');
  }
  
  getMealListData(): Observable<MealList[]> {
    return this.http.get<MealList[]>(this.REST_API_SERVER + '/meal-data-user');
  }
  
  getWorkoutLogData(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.REST_API_SERVER + '/workout-log-user');
  }
  
  getExerciseData(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.REST_API_SERVER + '/exercise');
  }
  
  // return of();
}
