import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { ContactPage } from '../contact/contact';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-summery',
  templateUrl: 'summery.html',
})
export class SummeryPage {
public couponCode: string;
public service: any = {
   name: '',
    price: '',
};
public address: any= {
   Type: '',
    landMark: '',
    geocode: '',
    address: '',
};
public cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }
  public token: any;
  public data: any;
public coupon: any;
public amount: any;
public cards: any;
public isCardAdd: boolean = false;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,public stripe: Stripe, public navParams: NavParams, private storage: Storage, public weatherservice: WeatherServiceProvider, public http: Http) {
  }

  ionViewDidLoad() {
  this.storage.get('service').then((val) => {
    this.service.name = val.name;
     this.service.price = val.price; 
     this.amount = val.price; 
  });
  this.storage.get('address').then((data) => {
   this.address.Type = data.Type;
   this.address.landMark = data.landMark;
   this.address.geocode = data.geocode;
   this.address.address = data.address;
  });

  this.getCardDetails();
  }

  getCardDetails(){
     this.weatherservice.getCardDetail().subscribe(res => {
       //alert(res)
       //  console.log(JSON.stringify(res))
       this.cards = res;
      // alert(JSON.stringify(this.cards))
   });
   
  }


 


  checkCoupon(){
    this.weatherservice.checkCouponCode(this.couponCode).subscribe(res =>{
    
      if(res.isSuccess == 1){
        this.couponCode = '';
        
        this.coupon = res.data;
    
          this.calculatePrice();
      if(this.coupon){
         let alert = this.alertCtrl.create({
    subTitle: 'Valid Coupon code!!',
    buttons: ['ok']
  });
  alert.present();

      }
         
      }else{
        this.couponCode = '';
         let alert = this.alertCtrl.create({
    subTitle: 'Invalid Coupon code!!',
    buttons: ['ok']
  });
  alert.present();
      }
    })
  }

  calculatePrice(){
    this.amount = this.service.price - (this.service.price * this.coupon.discountPercentage)/100;
    this.storage.set('Amount', this.amount)
  }


  goToPayment(customerid, cardid){
//      var coupondata
//     if(this.coupon){
// coupondata = {"couponCode":this.coupon.couponCode,"discountPercentage":this.coupon.discountPercentage};
//     }else{
//       coupondata = '';
//     }
   
    var detail = {
      "customerId": customerid,
      "cardId": cardid,
      "service":[{"serviceNo":4,"name":this.service.name,"price": this.service.price}],
      "address":{"geocode":this.address.geocode,"address":this.address.address, "landMark": this.address.landMark},
      "coupon":{"couponCode":this.coupon.couponCode,"discountPercentage":this.coupon.discountPercentage},
      "chargeAmount":this.amount,
      "bookingTime":"2017-12-30T15:22:48.108Z",


    }
  //  alert(JSON.stringify(detail))
    this.weatherservice.saveBooking(detail).subscribe(res =>{
      if(res.isSuccess == 1){
         let alert = this.alertCtrl.create({
    subTitle: 'Payment Successfully!!',
    buttons: ['ok']
  });
  alert.present();
  this.navCtrl.push(ContactPage)
      }
    })
  }

  addNewCard(){
this.isCardAdd = true;
  }
  saveCard(){
    this.stripe.setPublishableKey('pk_test_nRHnSPAe2BEYBrH0R0yYtwmO');
    this.stripe.createCardToken(this.cardinfo).then((token) => {
      this.token = token.id;
  
       this.weatherservice.sendCardToken(this.token).subscribe(res => {
         
       this.data = res;
       if(this.data){
this.isCardAdd = false;
this.getCardDetails();
       }
   
       
      
     
   });
    });
  }
}


