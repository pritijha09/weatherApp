import { WeatherPage } from './../weather/weather';
import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
public searchLocation: string;
public results: any;
public defaultLocation: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherservice: WeatherServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.getDefaultLocation();
  }

  getQuery(){
    this.weatherservice.searchCities(this.searchLocation).subscribe(res =>{
      this.results = res.RESULTS;
    })
  }

getDefaultLocation(){
  if(localStorage.getItem('location') != undefined){
    this.defaultLocation = JSON.parse(localStorage.getItem('location')).name;
  }
}
setDefaultLocation(location){
this.results = [];
localStorage.setItem('location', JSON.stringify(location));
this.searchLocation = location.name;
this.getDefaultLocation();
}
  saveChanges(){
    this.navCtrl.push(WeatherPage);
  }

}
