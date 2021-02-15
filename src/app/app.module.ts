import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera} from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsPage } from '../pages/events/events';
import { RankingPage } from '../pages/ranking/ranking';
import { DrawPage } from '../pages/draw/draw';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { FeedbackPage } from '../pages/feedback/feedback';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermPage } from '../pages/term/term';
import { GamesPage } from '../pages/games/games';
import { AdminPage } from '../pages/admin/admin';
import { AnewsPage } from '../pages/anews/anews';
import { AeventPage } from '../pages/aevent/aevent';
import { ArankPage } from '../pages/arank/arank';
import { AdrawPage } from '../pages/adraw/adraw';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SignupPage,
    RankingPage,
    DrawPage,
    HomePage,
    EventsPage,
    SettingsPage,
    FeedbackPage,
    TabsPage,
    PrivacyPage,
    TermPage,
    AdminPage,
    GamesPage,
    AnewsPage,
    AeventPage,
    ArankPage,
    AdrawPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SignupPage,
    RankingPage,
    DrawPage,
    HomePage,
    EventsPage,
    SettingsPage,
    FeedbackPage,
    TabsPage,
    PrivacyPage,
    TermPage,
    AdminPage,
    GamesPage,
    AnewsPage,
    AeventPage,
    ArankPage,
    AdrawPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}
