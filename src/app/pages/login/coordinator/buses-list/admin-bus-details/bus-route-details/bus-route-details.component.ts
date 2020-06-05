import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteService } from '../../../../../../services/route.service';
import { VehicleService } from '../../../../../../services/vehicle.service';
import { LoaderService } from '../../../../../../services/loader.service';
import { AlertBoxService } from '../../../../../../services/alert-box.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-bus-route-details',
  templateUrl: './bus-route-details.component.html',
  styleUrls: ['./bus-route-details.component.scss'],
})

/**
 * @description - This class provides the bus route details.
 * @class - BusRouteDetailsComponent
 */
export class BusRouteDetailsComponent implements OnInit, OnDestroy {
  /**
   * @member routeData - Stores the route details of vehicle from server. By default
   * @member schoolData - Stores the school's bus arrival and departure time.
   * @member {string} svgIcons - Stores the svgIcon folder link of server.
   */

  vehicleId: string;
  startPoint = {};
  routeData = [];
  subscription: Subscription;

  schoolData = { stop: 'School', time: { morning: '7:30 AM', afternoon: '2:00 PM' } };

  svgIcons: string;

  /**
   * @description - This constructor sets the value of svgIcons member of the class.
   * @constructor
   */
  constructor(
    private routeService: RouteService,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private loaderService: LoaderService,
    private alertBoxService: AlertBoxService
  ) {
    // Assigning svg icons folder link of server to svgIcons member.
    this.svgIcons = environment.svgIcons;
  }

  ngOnInit() {
    this.vehicleId = this.route.snapshot.queryParamMap.get('vehicleId');
    this.getRouteData(this.vehicleId);
  }

  async getRouteData(vehicleId) {
    // Presenting the loader.
    this.loaderService.loaderPresent('Please wait.', 'crescent');

    const vehicleData = await this.vehicleService.getServerVehicleDetails(vehicleId);
    vehicleData.subscribe(async res => {
      const data = res['data'];
      const routeData = await this.routeService.getRouteAllDetails(data[0].driver_details._id);
      this.subscription = routeData.subscribe(
        response => {
          this.setRouteData(response['data']);
          // Dismiss the loader.
          this.loaderService.loaderDismiss();
        },
        err => {
          // Dismiss the loader.
          this.loaderService.loaderDismiss();

          setTimeout(() => {
            this.alertBoxService.presentAlert(
              'Alert',
              'Server Problem.',
              'Server not responding. Try after sometime.'
            );
          }, 1200);
        }
      );
    });
  }

  setRouteData(serverRouteData) {
    serverRouteData.forward_routes.map((item, index) => {
      serverRouteData.backward_routes.map((items, indexes) => {
        if (item.location === items.location) {
          this.routeData.push({
            stop: item.location,
            time: { morning: item.time, afternoon: items.time },
          });
        }
      });
    });

    this.startPoint = this.routeData[0];

    this.schoolData = this.routeData.pop();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
