import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { FooterComponent }        from './components/footer/footer.component';
import { HomeComponent }          from './components/home/home.component';
import { GymComponent }           from './components/tracking/gym/gym.component';
import { MealComponent }          from './components/tracking/meal/meal.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MealComponent,
    GymComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
