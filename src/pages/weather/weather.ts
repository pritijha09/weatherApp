import { MediaPage } from './../media/media';
import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
public searchLocation: string;
public zmw: any;
public weathers: any;
public result: any;
public name:any;
public icon_Url: any;
public c_weather: any;
public temp_c: any;
public temperature_string1: any;
public relative_humidity1: any;
public dewpoint_string1: any;
public visibility_km1: any;
public wind_kph1: any;
public wind_dir1: any;
public hear_index_string1: any;
public options: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherservice: WeatherServiceProvider) {


}

  ionViewDidLoad() {
    // const obj1 = {a:1, b:2}
    // const obj2 = {e:3, c:3, d:5}
    // const obj3 = {...obj1, ...obj2}
    // alert(JSON.stringify(obj3));
    // var a = 1;
    // var b = 2;
    // var c = 3;
    // var obj4 = {a, b,c};
    // alert(JSON.stringify(obj4))
  }

  ngOnInit(){
    this.getDefaultLocation();
    this.getWeather();
    
  }

  getDefaultLocation(){
    if(localStorage.getItem('location') != undefined){
      this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
    }else{
      this.zmw = '10001.11.99999';
    }
  }

  getWeather(){
    this.weatherservice.getWeather(this.zmw).subscribe(weather =>{  
      this.weathers = JSON.parse(JSON.stringify(weather.current_observation)); 
      this.name = this.weathers.display_location.full;
      this.icon_Url = this.weathers.icon_url;
       this.c_weather = this.weathers.weather;
       this.temp_c = this.weathers.temp_c;
       this.temperature_string1 = this.weathers.temperature_string;      
      this.relative_humidity1 = this.weathers.relative_humidity;
      this.dewpoint_string1 = this.weathers.dewpoint_string;
      this.visibility_km1= this.weathers.visibility_km;
      this.wind_kph1 = this.weathers.wind_kph;
      this.wind_dir1 = this.weathers.wind_dir;
      this.hear_index_string1 = this.weathers.heat_index_string;
    })
  }

  getQuery(){
   
    this.weatherservice.searchCities(this.searchLocation).subscribe(location =>{
      debugger
      console.log(location)
      this.result = location.RESULTS;
    })
  }

  chooseLocation(location){
     this.result = [];
    this.zmw = location.zmw;
    this.getWeather();
  }

  goToMedia(){
  this.navCtrl.push(MediaPage)
  }

//  greetings(name){
//    alert(name)
//  return `hello ${name}`;
// }
 greetings = name =>alert(`${name}`);
// greetings(ev){
//   alert(ev)
// }

//  loadAd(){
//    let options = {
//     adId: 'ca-app-pub-3871990878987657/3370275741',
//     isTesting: false
//    };
//     AdMob.prepareInterstitial(options)
//          .then(() => {
//            AdMob.showInterstitial();
//          });
//   };
}
