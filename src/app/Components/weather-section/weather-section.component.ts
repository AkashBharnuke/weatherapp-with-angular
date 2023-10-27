import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/Models/weather.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-weather-section',
  templateUrl: './weather-section.component.html',
  styleUrls: ['./weather-section.component.css']
  
})
export class WeatherSectionComponent {

  constructor(private weatherService: WeatherService, private sharedService: SharedService) {

  }

  cityName ?: string;

  weatherData?: WeatherData;


  @Output() citySelectedChange = new EventEmitter<string>();

  onSubmit() {
    // if(!this.cityName){ 
    //   this.getWeatherData('Mumbai');

    // }
    if(this.cityName){
      // this.sharedService.setSharedData(this.cityName);
      console.log('setCity - ', this.cityName)
      this.citySelectedChange.emit(this.cityName)
      this.getWeatherAllData(this.cityName);
      this.cityName = '';
    }
    
  }

  private getWeatherAllData(cityName: string) {
    
    this.weatherService.getWeatherData(cityName)
    .subscribe({

      next: (response) => {

        this.weatherData = response;
        // console.log(response);
        // console.log(this.weatherData);
      }
    });
}

}
