import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GymComponent } from './components/tracking/gym/gym.component';
import { MealComponent } from './components/tracking/meal/meal.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'track-workout', component: GymComponent },
  { path: 'track-meal', component: MealComponent },
  { path: 'login', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// ROUTING
// fitbiz.com   -- home
// fitbiz.com/track-meal
// fitbiz.com/track-workout
// fitbiz.com/exercises
// fitbiz.com/profile
// fitbiz.com/login
// 