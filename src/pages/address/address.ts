import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SummeryPage } from '../summery/summery';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
public addressDetail: any;
public isAddAddress: boolean = false;
public addressData: any;
public completeaddress: any = {
    geocode: '',
    address: '',
    landmark: '',
    Type: ''
  }
  constructor(public navCtrl: NavController,private storage: Storage, public navParams: NavParams, public weatherservice: WeatherServiceProvider) {
  }

  ionViewDidLoad() {
    this.getAddress();
  }

  getAddress(){
    this.weatherservice.getAddressDetail().subscribe(res =>{
  this.addressDetail = res.data;
 

})
  }

  addAddress(){
this.isAddAddress = true;

  }

  save(){
   // alert(JSON.stringify(this.completeaddress))
 this.weatherservice.AddNewAddressDetail(this.completeaddress).subscribe(res=>{
  if(res.isSuccess){
    this.isAddAddress = false;
    this.getAddress();
  }
})
  }

  selectAddress(address){
     this.addressData = address;

       this.storage.set('address', this.addressData );
       this.navCtrl.push(SummeryPage);
  }

}
