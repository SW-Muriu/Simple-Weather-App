import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient, 
  ) { }

  public fetchWeather(url: string, options?: any){
    return this.http.get<any[]>(url, options); 
  }
}
