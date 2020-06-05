import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VehicleService } from '../../../../services/vehicle.service';
import { DriverService } from '../../../../services/driver.service';
import { StorageService } from '../../../../services/storage.service';
import { LoaderService } from '../../../../services/loader.service';
import { AlertBoxService } from '../../../../services/alert-box.service';
import { environment } from '../../../../../environments/environment';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.scss'],
})

/**
 * @Class - BusesListComponent
 */
export class BusesListComponent implements OnInit, OnDestroy {
  /**
   * @member {any} vehicleData - Stores the vehicle's data fetched from server.
   * @member {any} driverData - Stores the driver's data fetched from server.
   * @member {any} vehicleAndDriverData - Stores the object including vehicle's data and driver's data.
   * @member {string} userType - Stores the type of the logged in user.
   * @member {string} vehicleImages - Stores the vehicleImages folder link of server.
   * @member {string} svgIcons - Stores the svgIcon folder link of server.
   */
  vehicleData: any;
  driverData: any;
  vehicleAndDriverData: any;
  userType: string;
  vehicleImages: string;
  svgIcons: string;
  routeId: string;

  /**
   * @description - This constructor initializes instances of VehicleService, DriverService, Router, ActivatedRoute, AlertService.
   * @constructor
   * @param {VehicleService} vehicleService - Instance of VehicleService.
   * @param {DriverService} driverService - Instance of DriverService.
   * @param {Router} router - Instance of router.
   * @param {ActivatedRoute} route - Instance of route.
   */
  constructor(
    private vehicleService: VehicleService,
    private driverService: DriverService,
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private alertBoxService: AlertBoxService,
    private routeService: RouteService
  ) {
    // Assigning vehicle images folder link of server to vehicleImages member.
    this.vehicleImages = environment.vehicleImages;

    // Assigning svg icons folder link of server to svgIcons member.
    this.svgIcons = environment.svgIcons;

    // Get the route parameter.
    this.route.params.subscribe(res => {
      this.userType = res.userType;
    });
  }
  ngOnInit() {
    // Calling getAllVehicleFromServer method of vehicleService to fetch all vehicle deails.
    this.getAllVehicleFromServer();
  }

  /**
   * @description - This function call the vehicle service and get the response. This service also activate response return from service.
   * @function - getAllVehicleFromServer
   */
  async getAllVehicleFromServer() {
    // Presenting the loader.
    // this.loaderService.loaderPresent('Please wait.', 'crescent');
    // Calling getServerVehicleDetails method with getAllVehicleDetails parameter of vehicle service.
    // Storing the response return from the server in to vehicleDetails.
    const vehicleDetails = await this.vehicleService.getServerVehicleDetails(
      'getAllVehicleDetails'
    );

    // Subscribing the vehicleDetails to get the data.
    vehicleDetails.subscribe(
      res => {
        // Assigning subscribed data to vehicleData member.
        this.vehicleData = res['data'];

        // Dismiss the loader.
        this.loaderService.loaderDismiss();
      },
      err => {
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
        // Calling the presentAlert method of AlertBoxService using the alertBoxService instance.
        this.alertBoxService.presentAlert(
          'Alert',
          'Server Error',
          'Server not responding. Try after sometime.'
        );
      }
    );
    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }

  /**
   * @description - This function navigate route to admin-bus-details component.
   * @function - adminBusDetails
   * @param {string} vehicleId  - Stores the id of the vehicle.
   * @param {string} vehicleNumber - Stores the number of the vehicle.
   * @returns - void.
   */
  adminBusDetails(vehicleId: string, vehicleNumber: string): void {
    console.log(vehicleId);

    // Navigating the route to admin-bus-details components with userType, vehicleId and vehicleNumber parameter.
    this.router.navigate(['/admin-bus-details'], {
      queryParams: {
        user: this.userType,
        vehicleId: vehicleId,
        vehicleNumber: vehicleNumber,
      },
    });
  }

  /**
   * @description - This function navigate route to single-bus-map component.
   * @function - singleBusDetails
   * @param {string} vehicleId  - Stores the id of the vehicle.
   * @param {string} vehicleNumber - Stores the number of the vehicle.
   * @param {string} driverId - Stores the id of the driver.
   * @returns - void.
   */
  singleBusDetails(vehicleId: string, vehicleNumber: string, driverId: string): void {
    console.log(vehicleId);
    this.routeService.getRouteAllDetails(driverId).subscribe(data => {
      const routeData = data['data'];
      this.routeId = routeData._id;
      console.log(this.routeId);

      this.router.navigate(['/single-bus-map'], {
        queryParams: {
          user: this.userType,
          driverId: driverId,
          vehicleNumber: vehicleNumber,
          routeId: this.routeId,
        },
      });
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      // Calling getSchoolFromServer method.
      this.getAllVehicleFromServer();
      event.target.complete();
    }, 2000);
  }
  ngOnDestroy() {
    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
