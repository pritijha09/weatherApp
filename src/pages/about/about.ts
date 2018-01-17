import { Stripe } from '@ionic-native/stripe';
import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
public data: any;
public cards: any;
public price: any = 50;
public cardinfo: any;
  constructor(public navCtrl: NavController, public weatherservice: WeatherServiceProvider, public stripe: Stripe) {

  }

  ionViewDidLoad() {
    this.getCardDetails();
  }

carddetails() {
    this.navCtrl.push(CardPage);
  }

  getCardDetails(){
     this.weatherservice.getCardDetail().subscribe(res => {
       //alert(res)
       //  console.log(JSON.stringify(res))
       this.cards = res;
      // alert(this.cards)
   });
   
  }

  goToPayment(customerid, cardid){

    //  var myCharge = new StripeChargeCreateOptions();
    //     myCharge.Amount = 5153;
    //     myCharge.Currency = "usd";
    //     myCharge.CustomerId = customerId;
    //     myCharge.Description = "Charge it like it's hot";
    //     var chargeService = new StripeChargeService();
    //     StripeCharge stripeCharge = chargeService.Create(myCharge);
   this.cardinfo = {
    customerId: customerid, 
    cardId: cardid,
  }
    this.stripe.setPublishableKey('pk_test_nRHnSPAe2BEYBrH0R0yYtwmO');
    debugger
this.stripe.createCardToken(this.cardinfo).then((token) =>{
  alert("hiii")
})



// this.stripe.createCardToken(this.cardinfo).then((token) => {
//       alert("token" +token)
// });
  }

// getData(){
//   this.weatherservice.getCardDetail().subscribe(res => {
//       this.data = res;
     
//     });
// }
}
