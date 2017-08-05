import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
