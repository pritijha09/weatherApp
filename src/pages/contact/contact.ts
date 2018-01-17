import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
import { BookingPage } from '../booking/booking';

declare var google;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
public matches: String[];
  public isRecording = false;
  constructor(public navCtrl: NavController, private plt: Platform, private cd: ChangeDetectorRef) {

  }

 ngOnInit(){
 

 }

 isIos() {
    return this.plt.is('android');
  }
 
  stopListening() {
   alert("hii")
  }
 
  getPermission() {
    alert("hhh")
  }
 
  startListening() {
   alert("h")
  }

goToBooking(){
 this.navCtrl.push(BookingPage);
}
 

 
}
