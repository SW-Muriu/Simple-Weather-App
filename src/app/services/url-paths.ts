import { HttpClient } from '@angular/common/http';
// import * as  apiConfig from '../interfaces/apiConfig.json';
// import apiConfig from '../interfaces/apiConfig.json'


// constructor(private httpClient: HttpClient) {}

export function fetchOpenWeatherUrl(city: string, country: string) {
    const url =
        "https://api.openweathermap.org/geo/1.0/" +
        'direct?q=' +
        city +
        ',,' +
        country +
        '&limit=3&appid=' +
        "180aff8985c4d1be039fb47bf05ae0a3";

    return url;
}

// src/assets/apiConfig.json
export function getUrlFromParams(latitude: number, longitude: number) {
    const url =
        "https://api.openweathermap.org/data/2.5/" +
        'weather?lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&appid=' +
        "180aff8985c4d1be039fb47bf05ae0a3" +
        '&units=metric';

    return url;
}

export function getIconUrl(weatherIcon: string){
    const url = "https://openweathermap.org/img/wn/" + weatherIcon + '@2x.png'; 
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


