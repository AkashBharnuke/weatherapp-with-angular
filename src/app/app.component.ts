import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';

  selectedCity: string = '';

  setCityName(city: string) {
    this.selectedCity = city;
  }

}
