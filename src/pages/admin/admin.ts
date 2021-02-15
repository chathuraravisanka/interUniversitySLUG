import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnewsPage } from '../anews/anews';
import { AeventPage } from '../aevent/aevent';
import { ArankPage } from '../arank/arank';
import { AdrawPage } from '../adraw/adraw';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  click1(){
    this.navCtrl.push(AnewsPage);
  }

  click2(){
    this.navCtrl.push(AeventPage);
  }

  click3(){
    this.navCtrl.push(ArankPage);
  }

  click4(){
    this.navCtrl.push(AdrawPage);
  }


}
