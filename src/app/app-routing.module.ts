import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelAsiaComponent } from './travel-asia/travel-asia.component';
import { TravelEuropeComponent } from './travel-europe/travel-europe.component';
import { AboutComponent } from './about/about.component';
import { RecommendComponent } from './recommend/recommend.component';
import { AllCountryComponent } from './all-country/all-country.component';
import { FoodDrinkComponent } from './food-drink/food-drink.component';
import { TravelSouthAmericaComponent } from './travel-south-america/travel-south-america.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recomend', component: RecommendComponent },
  { path: 'travel-asia', component: TravelAsiaComponent },
  { path: 'travel-europe', component: TravelEuropeComponent },
  { path: 'all-country', component: AllCountryComponent },
  { path: 'food-drink', component: FoodDrinkComponent },
  { path: 'travel-south-america', component: TravelSouthAmericaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
