import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  postSignInData(signInData: any): Observable<any> {
    console.log(signInData);
    return this.http.post(this.REST_API_SERVER + `users/signin?username=${signInData.username}&password=${signInData.password}`, '', {responseType: 'text'});
  }

  postSignUpData(reqBody: any): Observable<any> {
    console.log(reqBody);
    return this.http.post(this.REST_API_SERVER + 'users/signup', reqBody, {responseType: 'text'});
  }
  
  postWorkoutForm(workout: Workout): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', workout);
  }
  
  postMealForm(requestBody: any): Observable<any> {
    console.log(requestBody);
    return this.http.post(this.REST_API_SERVER + 'meal-data-user', requestBody, {responseType: 'text'});
  }

  getMealListItems(): Observable<MealList[]> {
    return this.http.get<MealList[]>(this.REST_API_SERVER + '/meal-list');
  }
  
  getMealDataItemForUser(): Observable<MealData[]> {
    return this.http.get<MealData[]>(this.REST_API_SERVER + '/meal-data-user');
  }
  
  getWorkoutLogData(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.REST_API_SERVER + '/workout-log-user');
  }
  
  getExerciseData(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.REST_API_SERVER + '/exercise');
  }
  
  // return of();
}
