import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../Models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
//for rapidapi
  // url: string = 'https://open-weather13.p.rapidapi.com/city/';
  // XRapidAPIHostHeaderName: string = 'X-RapidAPI-Host'
  // XRapidAPIHostHeaderValue: string = 'open-weather13.p.rapidapi.com'

  // XRapidAPIKeyHeaderName: string = 'X-RapidAPI-Key'
  // XRapidAPIKeyHeaderValue: string = '26643d5abamsh7d93daa5b111916p1c7c92jsn600f9ce7f822'

  // getWeatherData(city: string): Observable<WeatherData>{

  //   return this.http.get<WeatherData>(this.url + city, {
  //     headers: new HttpHeaders().set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
  //       .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue)
  //   });
  // }


//for openweather
  apikey: string = '659668f302cd1dc7c803cf78728088c2';
  url: string = 'https://api.openweathermap.org/data/2.5/weather';

  // ?q={city name}&appid=' + this.apikey
  
  getWeatherData(city: string): Observable<WeatherData>{

    const params = new HttpParams()
    .set('q', city)
    .set('appid', this.apikey);

 

  return this.http.get<WeatherData>(this.url, { params });
  
  }

}
