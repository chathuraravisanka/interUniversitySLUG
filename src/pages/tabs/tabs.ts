import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';
import { RankingPage } from '../ranking/ranking';
import { DrawPage } from '../draw/draw';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsPage;
  tab3Root = RankingPage;
  tab4Root = DrawPage;
  tab5Root = SettingsPage;



  constructor() {

  }
}
