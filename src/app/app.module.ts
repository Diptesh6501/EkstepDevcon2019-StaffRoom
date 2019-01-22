import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JsonpModule, Http, HttpModule } from '@angular/http';
import { TeacherdayviewPage } from '../pages/teacherdayview/teacherdayview';
import { QRScanner } from '@ionic-native/qr-scanner';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';
import { DetailviewPage } from '../pages/detailview/detailview';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { RestProvider } from '../service/rest-provider';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {AskappuPage} from '../pages/askappu/askappu'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeacherdayviewPage,QrscannerPage,DetailviewPage,AskappuPage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, HttpModule,HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeacherdayviewPage,DetailviewPage,QrscannerPage,AskappuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UniqueDeviceID,RestProvider,HttpClient
  ]
})
export class AppModule {}
