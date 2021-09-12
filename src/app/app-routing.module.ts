import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HomeComponent }          from './components/home/home.component';
import { AuthComponent }          from './components/auth/auth.component';
import { ExercisesComponent }     from './components/exercises/exercises.component';
import { GymComponent }           from './components/tracking/gym/gym.component';
import { MealComponent }          from './components/tracking/meal/meal.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'track-workout', component: GymComponent },
  { path: 'track-meal', component: MealComponent },
  { path: 'login', component: AuthComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-detail', component: ExerciseDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// ROUTING
// fitbiz.com
// fitbiz.com/exercises
// fitbiz.com/login?page=signin
// fitbiz.com/login?page=signup
// fitbiz.com/track-meal
// fitbiz.com/track-workout
// fitbiz.com/**404**