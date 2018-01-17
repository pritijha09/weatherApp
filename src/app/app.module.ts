import { MediaPage } from './../pages/media/media';
import { SummeryPage } from './../pages/summery/summery';
import { AddressPage } from './../pages/address/address';
import { BookingPage } from './../pages/booking/booking';
import { CardPage } from './../pages/card/card';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Stripe } from '@ionic-native/stripe';
import { IonicStorageModule } from '@ionic/storage';

import { SettingPage } from './../pages/setting/setting';
import { WeatherPage } from './../pages/weather/weather';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherPage,
    SettingPage,
    CardPage,
    BookingPage,
    AddressPage,
    SummeryPage,
    MediaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherPage,
    SettingPage,
    CardPage,
    BookingPage,
    AddressPage,
    SummeryPage,
    MediaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherServiceProvider,
  
  ]
})
export class AppModule {}
