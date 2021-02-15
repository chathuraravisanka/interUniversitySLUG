import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-anews',
  templateUrl: 'anews.html',
})
export class AnewsPage {

  myPhoto: any;
  base64: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnewsPage');
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myPhoto = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + imageData);
      this.base64 = imageData;
    }, (err) => {
      // Handle error
    });
  }

}
