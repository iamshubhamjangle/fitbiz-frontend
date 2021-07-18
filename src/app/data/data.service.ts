import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meal } from './meal';
import { MealList } from './mealList';
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
        },
        {
          id: '2',
          mealName: 'Egg',
        },
        {
          id: '3',
          mealName: 'Apple',
        },
      ]
    );
  }

  getMealListData(): Observable<MealList[]> {
    return of(
      [
        {
            id: '1',
            date: '18 Jun 2021',
            mealName: 'Peanuts',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        },
        {
            id: '2',
            date: '19 Jul 2021',
            mealName: 'Almonds',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        },
        {
            id: '3',
            date: '20 Aug 2021',
            mealName: 'Egg',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        },
        {
            id: '4',
            date: '21 Sep 2021',
            mealName: 'Milk',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        }
    ]
    );
  }

  getWorkoutLogData(): Observable<Workout[]> {
    return of(
      [
        {
          id: '1',
          date: '01 Jun 2021',
          workoutName: 'Biceps',
          weight1: '10',
          weight2: '15',
          weight3: '20',
          rep1: '30',
          rep2: '25',
          rep3: '20',
        },
        {
          id: '2',
          date: '02 Jun 2022',
          workoutName: 'Arms',
          weight1: '10',
          weight2: '15',
          weight3: '20',
          rep1: '30',
          rep2: '25',
          rep3: '20',
        },
        {
          id: '3',
          date: '03 Jun 2023',
          workoutName: 'Triceps',
          weight1: '10',
          weight2: '15',
          weight3: '20',
          rep1: '30',
          rep2: '25',
          rep3: '20',
        },
      ]
    );
  }
}
