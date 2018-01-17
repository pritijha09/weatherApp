import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Stripe } from '@ionic-native/stripe';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }

  public token: any;
  public data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherservice: WeatherServiceProvider, public stripe: Stripe, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
    //this.getCardDetail();
  }

   pay() {
    this.stripe.setPublishableKey('pk_test_nRHnSPAe2BEYBrH0R0yYtwmO');
    this.stripe.createCardToken(this.cardinfo).then((token) => {
      this.token = token.id;
      console.log(this.token)
       this.weatherservice.sendCardToken(this.token).subscribe(res => {
         
       this.data = res;
      
     
   });
    
    });
    //  console.log(JSON.stringify(token.id))
      // var data = 'stripetoken=' + token + '&amount=50';
      // alert(data);
      // var headers = new Headers();
      // headers.append('Conent-Type', 'application/x-www-form-urlencoded');
      // this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
      //   if (res.json().success)
      //   alert('transaction Successfull!!')  
      // })
    //})
  }

  
}
