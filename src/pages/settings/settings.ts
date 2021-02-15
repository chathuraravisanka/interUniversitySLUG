import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { PrivacyPage } from '../privacy/privacy';
import { TermPage } from '../term/term';
import { GamesPage } from '../games/games';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  load(){
    this.navCtrl.push(FeedbackPage);
  }

  load1(){
    this.navCtrl.push(PrivacyPage);
  }

  load2(){
    this.navCtrl.push(TermPage);
  }

  load3(){
    this.navCtrl.push(GamesPage);
  }




  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Log out',
      message: 'Are you sure you want to Log out?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
