import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
public serviceDetail: any;
public servicedata: any;
  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public weatherservice: WeatherServiceProvider) {
  }

  ionViewDidLoad() {
    this.getBookingService();
  }

  getBookingService(){
    debugger
this.weatherservice.getServiceDetail().subscribe(res =>{
  
  this.serviceDetail = res.data;
})
  }

  getAddress(name, price){
    this.servicedata = {
      name: name,
      price: price
    }
    this.storage.set('service', this.servicedata);
    this.navCtrl.push(AddressPage);
  }

}
