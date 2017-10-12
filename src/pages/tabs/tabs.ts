import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ClassifyPage } from '../classify/classify';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //标签列表
  tabs = [
    { page: HomePage, title: '首页' },
    { page: ClassifyPage, title: '分类' },
    { page: AboutPage, title: '关于' },
  ]

  constructor() {

  }

}
