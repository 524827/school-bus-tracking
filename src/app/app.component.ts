import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs/Subscription';
import { Firebase } from '@ionic-native/firebase/ngx';
import { NetworkService } from './services/network.service';

import { LoaderService } from './services/loader.service';
import { StorageService } from './services/storage.service';
import { DriverService } from './services/driver.service';
import { ParentService } from './services/parent.service';
import { BusCoordinatorService } from './services/bus-coordinator.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

/**
 * @description - This is the main class of the application.
 * @class - AppComponent
 */
export class AppComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  /**
   * @description - initializes the application.
   * @constructor
   * @param {Platform} platform
   * @param {SplashScreen} splashScreen
   * @param {StatusBar} statusBar
   * @param {AlertService} alertService - Instance of the alert service.
   * @param {StorageService} storageService - Instance of the storage service.
   * @param {BusCoordinatorService} buscoordinatorService - Instance of the bus coordinator service.
   * @param {Router} router - Instance of the Router.
   * @param {NetworkService} networkService - Instance of the network service.
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loaderService: LoaderService,
    private storageService: StorageService,
    private alert: AlertController,
    private router: Router
  ) {
    console.log('app');
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      //  Showing the status bar content.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      // Presenting the loader.
      this.loaderService.loaderPresent('Please wait.', 'crescent');
      // Calling getLoginDetails().

      this.storageService.authState.subscribe(state => {
        if (state) {
          this.storageService.getLoginDetails();
        } else {
          this.loaderService.loaderDismiss();
          this.router.navigate(['home']);
        }
      });
      this.ionViewDidEnter();
    });
  }

  ngOnInit() {}
  ngOnDestroy() {
    // Dismiss the loader
    this.loaderService.loaderDismiss();
    this.ionViewWillLeave();
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(async () => {
      await this.loaderService.loaderDismiss();
      this.showAlert();
    });
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  // show alert for exit application
  async showAlert() {
    const alert = await this.alert.create({
      header: 'Confirm',
      message: 'Do you want to exit?',
      buttons: [
        {
          text: 'exit?',
          handler: () => {
            navigator['app'].exitApp();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
}
