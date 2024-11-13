import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelAsiaComponent } from './travel-asia/travel-asia.component';
import { TravelEuropeComponent } from './travel-europe/travel-europe.component';
import { AboutComponent } from './about/about.component';
import { RecommendComponent } from './recommend/recommend.component';
import { AllCountryComponent } from './all-country/all-country.component';
import { FoodDrinkComponent } from './food-drink/food-drink.component';
import { FormsModule } from '@angular/forms';
import { TravelSouthAmericaComponent } from './travel-south-america/travel-south-america.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelAsiaComponent,
    TravelEuropeComponent,
    AboutComponent,
    RecommendComponent,
    AllCountryComponent,
    FoodDrinkComponent,
    TravelSouthAmericaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
