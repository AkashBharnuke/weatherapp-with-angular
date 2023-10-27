import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../Models/weather.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-more-info-section',
  templateUrl: './more-info-section.component.html',
  styleUrls: ['./more-info-section.component.css']
  
})
export class MoreInfoSectionComponent implements OnInit, OnChanges {

  @Input() cityName?: string;
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService, private sharedService: SharedService) {

  }
 

  
  ngOnInit(): void {
    this.cityName = this.sharedService.getSharedData() || 'Mumbai';
    console.log('OnInit - ', this.cityName);
    this.loadWeatherData();

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('in on changes')
      //  this.cityName = this.sharedService.getSharedData();
    if(changes['cityName']){
     
      console.log('OnChanges - ', this.cityName);

      this.loadWeatherData();
    }

  }
  
private loadWeatherData(){
  if(this.cityName) {
      // console.log('more info - ', this.cityName)
      this.weatherService.getWeatherData(this.cityName)
      .subscribe({
        next: (response) => {
  
          this.weatherData = response;
          // console.log(response);
          // console.log(this.weatherData);
        }
      })
    }
}


  // ngOnInit(): void {
    
  //   this.cityName = this.sharedService.getSharedData() || 'Mumbai';
  //   console.log("gxytutd")

  //   if(this.cityName) {
  //   console.log('more info - ', this.cityName)
  //   this.weatherService.getWeatherData(this.cityName)
  //   .subscribe({

  //     next: (response) => {

  //       this.weatherData = response;
  //       // console.log(response);
  //       console.log(this.weatherData);
  //     }
  //   })
  // }
  // }

}

