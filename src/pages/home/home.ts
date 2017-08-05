import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any;
  constructor(public navCtrl: NavController) {
    this.data=[];
    for (var i = 0; i < 10; i++) {
      let mydata={
          fname:'arya',
          mname:'jone',
          lname:'paid'
       };
        this.data.push(mydata);
    }
  }

}
