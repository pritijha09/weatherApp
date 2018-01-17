import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as myglobals from '../../app/_models/globals';
import 'rxjs/Rx';


@Injectable()
export class WeatherServiceProvider {
//public http: any;
public api_key: any;
public conditionalUrl: string;
public searchUrl:string;
public conditionsUrl: string;

  constructor(private http: Http) {
   
    this.api_key = myglobals.apiKey;
     this.searchUrl = myglobals.searchUrl;
    this.conditionsUrl = myglobals.conditionalUrl;

    console.log('Hello WeatherServiceProvider Provider');
  }

  searchCities(searchStr) {
    debugger
      return this.http.get(this.searchUrl + '' + searchStr)
      .map(res => res.json());

  }

  getWeather(zmw){
    return this.http.get(this.conditionsUrl+'/zmw:' + zmw + '.json')
    .map(res => res.json());
  }


  public sendCardToken(token: string) {
    // alert("2");
    debugger
    let url = myglobals.chargeUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
    let body = {
      'stripeToken': token
    };
   // alert("body" + body);
    return this.http.post(url, body, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }


 public getCardDetail() {
    // alert("2");
    debugger
    let url = myglobals.getCardUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
  
   // alert("body" + body);
    return this.http.get(url, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }

  public getPaymentToken(){
      debugger
    let url = myglobals.getCardUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
  
   // alert("body" + body);
    return this.http.get(url, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }

  public getServiceDetail() {
    // alert("2");
    debugger
    let url = myglobals.getServiceUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
  
   // alert("body" + body);
    return this.http.get(url, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }

   public getAddressDetail() {
    // alert("2");
    debugger
    let url = myglobals.getAddressUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
  
   // alert("body" + body);
    return this.http.get(url, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }

  AddNewAddressDetail(completeaddress){
 // alert("2");
    debugger
    let url = myglobals.AddAddressUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
    let body = {
      'geocode': completeaddress.geocode,
      'address': completeaddress.address,
      'landMark': completeaddress.landmark,
      'Type': completeaddress.Type
    };

    return this.http.post(url, body, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }

  checkCouponCode(couponcode){
    let url = myglobals.couponCodeUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
    let body = {
      'couponCode': couponcode
    };
   // alert("body" + body);
    return this.http.post(url, body, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }

  saveBooking(data){
    debugger
    let url = myglobals.saveBookingUrl;
    var header: Headers = new Headers();
    header.append("Content-type", 'application/json');
   // header.append("api_key", myglobals.apiKey);
    header.append("auth_token", myglobals.authToken);
    debugger
    let options = new RequestOptions({ headers: header });
    let body =  data;
   // alert("body" + body);
    return this.http.post(url, body, options).map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(Error(error._body));
      });
  }
}
