import { NavController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-bus-details',
  templateUrl: './admin-bus-details.component.html',
  styleUrls: ['./admin-bus-details.component.scss'],
})

/**
 * @Class - AdminBusDetailsComponent
 */
export class AdminBusDetailsComponent implements OnInit, OnDestroy {
  /**
   * @member {string} vehicleId - Stores the id of the vehicle.
   * @member {string} vehicleNumber -stores the number of the vehicle.
   * @member {string} userType - Stores the type of the logged in user.
   */
  vehicleId: string;
  vehicleNumber: string;
  userType: string;
  public routeStatus = true;
  public livemapStatus = false;

  /**
   * @description - This constructor initializes the instances of the NavController and ActivatedRoute.
   * @param navCtrl
   * @param route
   */
  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    this.vehicleNumber = this.route.snapshot.queryParamMap.get('vehicleNumber');
    this.vehicleId = this.route.snapshot.queryParamMap.get('vehicleId');
    this.userType = this.route.snapshot.queryParamMap.get('user');
  }

  /**
   * this function change the value of routeStatus and livemapStatus for applying css
   */
  busRouteStyle() {
    this.routeStatus = true;
    this.livemapStatus = false;
  }

  /**
   * this function change the value of routeStatus and livemapStatus for applying css
   */
  liveMapStyle() {
    this.routeStatus = false;
    this.livemapStatus = true;
  }
  /**
   * @description - This function navigate the page back.
   */
  navigateBack() {
    // Calling  back method of navCtrl.
    this.navCtrl.pop();
  }

  ngOnDestroy() {
    console.log('destroy');
    // this.alertService.loaderDismiss();
  }
}
