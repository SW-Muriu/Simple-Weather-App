import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Weather } from 'src/app/interfaces/interfaces';
import { getIconUrl, getUrlFromParams } from 'src/app/services/url-paths';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.sass']
})
export class WeatherBoardComponent {

  name: string = "";
  country: string = "";
  currentWeather: Weather = {} as Weather;
  temperature: number = 0;
  temperatureFeelsLike: number = 0;
  isLoading: boolean = false;
  iconUrl: string = "";

  constructor(
    private route: ActivatedRoute,
    private weatherManService: WeatherService,
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const info = this.getInfoFromParams(params);
      if (!info) {
        console.error("Missing paramters in the querry");
        return;
      }
      this.name = info.name;
      this.country = info.country;

      const fetchUrl = getUrlFromParams(info.latitude, info.longitude);

      this.weatherManService.fetchWeather(fetchUrl).subscribe({
        next: (res) => {

          // Cast the res variable to Weather objects
          this.currentWeather = res as unknown as Weather;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.iconUrl = getIconUrl(this.currentWeather.weather[0].icon);
          this.temperature = Math.round(this.currentWeather.main.temp);
          this.temperatureFeelsLike = Math.round(this.currentWeather.main.feels_like);
          this.isLoading = true;
        }
      })
    })
  }

  getInfoFromParams(params: Params) {
    const name = params['name'];
    const country = params?.['country'];
    const latitude = params?.['lat'];
    const longitude = params?.['lon'];

    if (!params || !country || !latitude || !longitude) return null;
    return {
      name, country, latitude, longitude
    };
  };
}
