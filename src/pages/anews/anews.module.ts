import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnewsPage } from './anews';

@NgModule({
  declarations: [
    AnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnewsPage),
  ],
})
export class AnewsPageModule {}
