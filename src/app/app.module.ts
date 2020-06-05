import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Network } from '@ionic-native/network/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login/:schoolId',
        component: LoginComponent,
      },
    ]),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    AuthGuardService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    BackgroundGeolocation,
    NativeStorage,
    NativeGeocoder,
    Network,
    FileTransfer,
    FileTransferObject,
    LocalNotifications,
    Camera,
    Crop,
    Firebase,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
