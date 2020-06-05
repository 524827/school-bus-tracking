import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../../../services/route.service';

@Component({
  selector: 'app-single-bus-map',
  templateUrl: './single-bus-map.component.html',
  styleUrls: ['./single-bus-map.component.scss'],
})
export class SingleBusMapComponent implements OnInit, OnDestroy {
  /**
   * @member {string} vehicleId - Stores the id of the vehicle.
   * @member {string} vehicleNumber -stores the number of the vehicle.
   * @member {string} userType - Stores the type of the logged in user.
   */
  vehicleId: string;
  vehicleNumber: string;
  userType: string;
  driverId: string;
  routeId: string;

  /**
   * @description - This constructor initializes the instances of the NavController and ActivatedRoute.
   * @param navCtrl
   * @param route
   */
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private routeService: RouteService
  ) { }

  ngOnInit() {
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.vehicleNumber = this.route.snapshot.queryParamMap.get('vehicleNumber');
    this.driverId = this.route.snapshot.queryParamMap.get('driverId');
    this.userType = this.route.snapshot.queryParamMap.get('user');
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
