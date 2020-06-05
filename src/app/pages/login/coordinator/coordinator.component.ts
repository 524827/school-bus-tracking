import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../services/storage.service';
import { BusCoordinatorService } from '../../../services/bus-coordinator.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss'],
})

/**
 * @Class - CoordinatorComponent
 */
export class CoordinatorComponent implements OnInit, OnDestroy {
  /**
   * @member {string} userType - Stores the type of the logged in user.
   * @member {string} busCoordinatorId - Stores the id of the bus coordinator.
   * @member {string} svgIcons - Stores the svgIcon folder link of server.
   */
  userType: string;
  busCoordinatorId: string;
  svgIcons: string;

  /**
   * @description - This constructor initializes instances of Router, ActivatedRoute.
   * @constructor
   * @param {Router} router - Instance of router.
   * @param {ActivatedRoute} route - Instance of route.
   * @param {StorageService} storageService - Instance of route.
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private busCoordinatorService: BusCoordinatorService
  ) {
    // Assigning svg icons folder link of server to svgIcons member.
    this.svgIcons = environment.svgIcons;

    // Get the route parameter.
    this.route.params.subscribe(data => {
      this.userType = data.userType;
      this.busCoordinatorId = data.busCoordinatorId;
      console.log(data);
    });
    /* setInterval(() => {
      this.getProfilePhoto();
    }, 1000); */
  }

  ngOnInit() {
    this.getProfilePhoto();
    // Calling getAllVehicleFromServer method of vehicleService to fetch all vehicle deails.
  }

  async getProfilePhoto() {
    const profileIconElement = <HTMLImageElement>document.getElementById('profileIcon');
    const profileImageElement = <HTMLImageElement>document.getElementById('profileIconImage');
    // Call getServerBusCoordinatorDetails method from busCoordinator service and store response to busCoordinatorDetails.

    const busCordinatorDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsById(
      this.busCoordinatorId
    );

    // Subscribe the busCoordinatorDetails to get data.
    busCordinatorDetails.subscribe(res => {
      const data = res['data'];

      if (!data[0].buscoordinator_photo) {
        profileIconElement.src = `${this.svgIcons}/adminProfile.svg`;
        profileImageElement.setAttribute('style', 'display: none;');
      } else {
        profileImageElement.src = `${environment.userImages}/${data[0].buscoordinator_photo}`;
        profileIconElement.setAttribute('style', 'display: none;');
      }
    });
  }

  changeLookOfBusList() {
    const selectedTabElement = <HTMLElement>document.getElementById('tabDivForBusList');
    const unSelectedTabElement = <HTMLElement>document.getElementById('tabDivForBusRoute');
    unSelectedTabElement.setAttribute('style', 'box-shadow: 1px 1px 5px #cccccc;');
    selectedTabElement.setAttribute(
      'style',
      'box-shadow: inset 1px 1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), 0px 1px 5px #cccccc;'
    );
  }

  changeLookOfBusRoute() {
    const selectedTabElement = <HTMLElement>document.getElementById('tabDivForBusRoute');
    const unSelectedTabElement = <HTMLElement>document.getElementById('tabDivForBusList');
    unSelectedTabElement.setAttribute('style', 'box-shadow: -1px 1px 5px #cccccc;');
    selectedTabElement.setAttribute(
      'style',
      'box-shadow: inset 0px -1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), inset -1px 1px 5px #cccccc;'
    );
  }

  /**
   * @description - This function navigate route to profile component.
   * @function - navigateToProfile
   * @param userType  - Stores the type of the user.
   * @param busCoordinatorId - Stores the id of the bus coordinator.
   * @returns - void.
   */
  navigateToProfile(userType: string, busCoordinatorId: string): void {
    console.log(userType, busCoordinatorId);

    // Navigating the route to profile components with userType and busCoordiatorId  parameter.
    this.router.navigate([
      '/profile',
      // This parameter contains the type of logged in user.
      userType,
      // This parameter contains the id of the bus coordinator.
      busCoordinatorId,
    ]);
  }

  /**
   * @description - This function log's out the user.
   * @function - logout
   * @returns - void.
   */
  logout(): void {
    // removing logged in data of user from native storage.
    this.storageService.logOut();
    this.storageService.getIntervalValue().then(data => {
      console.log(data);
      window.clearInterval(data);
    });
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}
