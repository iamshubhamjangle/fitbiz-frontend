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
  
  // private REST_API_SERVER = "http://localhost:8080/";    //our proxy server running on spring boot
  // private REST_API_SERVER = "http://localhost:4200/server/";    //our proxy server running on spring boot
  private REST_API_SERVER = "https://fitbiz-backend.herokuapp.com/";

  constructor(private http: HttpClient) { }

  postSignInData(signInData: any): Observable<any> {
    console.log(signInData);
    return this.http.post(this.REST_API_SERVER + `users/signin?username=${signInData.username}&password=${signInData.password}`, '');
  }

  postSignUpData(requestBody: any): Observable<any> {
    console.log(requestBody);
    return this.http.post(this.REST_API_SERVER + 'users/signup', requestBody);
  }
  
  postWorkoutForm(requestBody: Workout): Observable<any> {
    console.log(requestBody);
    return this.http.post(this.REST_API_SERVER + 'workout-log-user', requestBody);
  }
  
  postMealForm(requestBody: any): Observable<any> {
    console.log(requestBody);
    return this.http.post(this.REST_API_SERVER + 'meal-data-user', requestBody);
  }

  getMealListItems(): Observable<MealList[]> {
    return this.http.get<MealList[]>(this.REST_API_SERVER + 'meal-list');
  }
  
  getMealDataItemForUser(): Observable<MealData[]> {
    return this.http.get<MealData[]>(this.REST_API_SERVER + 'meal-data-user');
  }
  
  getWorkoutLogData(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.REST_API_SERVER + 'workout-log-user');
  }
  
  getExerciseData(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.REST_API_SERVER + 'exercise');
  }

  getTop8ExerciseData(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.REST_API_SERVER + 'exercise/fetch-top8-only');
  }

  deleteMealDataItem(item: number): Observable<any> {
    return this.http.delete(this.REST_API_SERVER + `meal-data-user/${item}`);
  }

  deleteWorkoutItem(item: number): Observable<any> {
    return this.http.delete(this.REST_API_SERVER + `workout-log-user/${item}`);
  }

  updateWorkoutItem(workout: Workout): Observable<any> {
    return this.http.put(this.REST_API_SERVER + 'workout-log-user/', workout);
  }
  
  // return this.http.put(this.REST_API_SERVER + 'workout-log-user/', workout, {responseType: 'text'});
  // return of();
}
