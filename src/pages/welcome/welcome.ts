import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  load(){
    this.navCtrl.push(SignupPage);
  }

  loadA(){
    this.navCtrl.push(AdminPage);
  }

  log(){
    this.navCtrl.push(TabsPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
