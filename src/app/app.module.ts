import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { FooterComponent }        from './components/footer/footer.component';
import { HomeComponent }          from './components/home/home.component';
import { GymComponent }           from './components/tracking/gym/gym.component';
import { MealComponent }          from './components/tracking/meal/meal.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { ApiInterceptorService } from './data/api-interceptor.service';
import { AuthComponent } from './components/auth/auth.component';
import { ExerciseCardComponent } from './components/widgets/exercise-card/exercise-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './components/widgets/datepicker/datepicker.component';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ExerciseCategoryPipe } from './pipes/exercise-category.pipe';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MealComponent,
    GymComponent,
    FooterComponent,
    PageNotFoundComponent,
    AuthComponent,
    ExerciseCardComponent,
    DatepickerComponent,
    DateFilterPipe,
    ExercisesComponent,
    ExerciseCategoryPipe,
    ExerciseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
