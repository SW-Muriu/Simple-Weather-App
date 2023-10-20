import { HttpClient } from '@angular/common/http';
import * as  apiConfig from '../interfaces/apiConfig.json';
// import { apiConfig } from '../interfaces/apiConfig.json'


// constructor(private httpClient: HttpClient) {}

export function fetchOpenWeatherUrl(city: string, country: string) {
    const url =
        apiConfig.location_api +
        'direct?q=' +
        city +
        ',,' +
        country +
        '&limit=3&appid=' +
        apiConfig.api_key;

    return url;
}

// src/assets/apiConfig.json
export function getUrlFromParams(latitude: number, longitude: number) {
    const url =
        apiConfig.weather_api +
        'weather?lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&appid=' +
        apiConfig.api_key +
        '&units=metric';

    return url;
}

export function getIconUrl(weatherIcon: string){
    const url = apiConfig.icon_url + weatherIcon + '@2x.png'; 
    return url; 
}

//fetch the country from the input value 

export function getCityCountry(inputString: string) {
    const location = inputString.split(',', 2);
    const trimmedLocation = location.map((element) => {
      return element.trim();
    });
    return {
      city: trimmedLocation[0],
      country: trimmedLocation[2],
    }
  }

//   export fucntion getInfoFromParams(params: Params)


