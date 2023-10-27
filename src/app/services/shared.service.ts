import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedData?: string;

  setSharedData(data: string) {
    console.log('setCity in service- ', data);

    this.sharedData = data;
  }

  getSharedData(){
    console.log('getCity in service- ', this.sharedData);
    return this.sharedData;
  }

}
