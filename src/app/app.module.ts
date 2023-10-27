import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherSectionComponent } from './Components/weather-section/weather-section.component';
import { MoreInfoSectionComponent } from './Components/more-info-section/more-info-section.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSectionComponent,
    MoreInfoSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
