import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fetchOpenWeatherUrl, getCityCountry } from 'src/app/services/url-paths';
import { WeatherService } from 'src/app/services/weather.service';
import { Location } from '../../interfaces/interfaces';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent {
  searched: boolean = false;
  dataSource: Location [] = [];
  isLoaded: boolean = false;
  constructor(
    private router: Router,
    private weatherManService: WeatherService,
  ) {

  }

  _fetchLocation(cityCountry: string) {
    const data = getCityCountry(cityCountry);
    const city = data.city;

    if (!city) {
      console.error("Missing Parameters in the querry");
      return;
    }
    const country = data.country;
    const fetchUrl = fetchOpenWeatherUrl(city, country);
    this.searched = true;
    this.weatherManService.fetchWeather(fetchUrl).subscribe({
      next: (res) => {

        // Cast the res variable to an array of Location objects
        this.dataSource = res as unknown as Location[];
      },
      error: (err) => {
        console.log('Error fetching location');
      },
      complete: () => {
        console.info('Fetch Complete');
        this.isLoaded = true
      }
    })
  }

  selectedLocation(selectedLocation: Location) {
    this.router.navigate(['/weather'], {
      queryParams: {
        name: selectedLocation.name,
        country: selectedLocation.country,
        lat: selectedLocation.lat,
        lon: selectedLocation.lon,
      },
    });
  }


}

