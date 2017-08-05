import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user={
      email:'',
      password:''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Home(){
    this.navCtrl.setRoot("TabsPage");
  }
}
