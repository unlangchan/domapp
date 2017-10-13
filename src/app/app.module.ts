import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';

import { AboutPage } from '../pages/about/about';
import { ClassifyPage } from '../pages/classify/classify';
import { TabsPage } from '../pages/tabs/tabs';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ClassifyPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    HttpModule,
    IonicModule.forRoot(MyApp),
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ClassifyPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
