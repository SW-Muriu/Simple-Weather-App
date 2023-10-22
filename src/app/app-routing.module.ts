import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSearchComponent } from './weather/location-search/location-search.component';
import { WeatherBoardComponent } from './weather/weather-board/weather-board.component';

const routes: Routes = [
  {path: "", component: LocationSearchComponent},
  {path: "weather", component: WeatherBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
