import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { VehicleService } from '../../../services/vehicle.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss'],
})
export class BusDetailsComponent implements OnInit, OnDestroy {
  userType;
  vehicleId;
  vehicleData: any;
  vehicleImages: string;
  userImages: string;
  profilePhoto: string;
  subscription: Subscription;

  constructor(
    public navctl: NavController,
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {
    // this.alertService.loaderPresent('Please wait', 'crescent');
    // Assigning vehicle image folder link of server to vehicleImages member.
    this.vehicleImages = environment.vehicleImages;

    // Assigning svg driver image link of server to driverImages member.
    this.userImages = environment.userImages;

    /*  this.route.params.subscribe(async data => {
      this.userType = data.userType;
      this.vehicleId = data.vehicleId;
      console.log(this.userType, this.vehicleId);
      console.log('routes', data);
      // this.checkUserType();
      this.getVehicleFromServer(data.vehicleId);
    }); */
  }

  /* async checkUserType() {
    console.log(this.userType);
    if (this.userType === 'busCoordinator') {
      const element = <HTMLElement>document.getElementById('header');
      element.setAttribute('style', 'display: none');
    }
  }

 */
  /**
   * This function get vehicle details from server
   * @param vehicleId - vehicle id
   */
  async getVehicleFromServer(vehicleId) {
    console.log('funcion' + vehicleId);
    const vehicleDetails = await this.vehicleService.getServerVehicleDetails(vehicleId);

    this.subscription = vehicleDetails.subscribe(res => {
      const data = res['data'];
      console.log(data);
      this.vehicleData = data[0];
      this.profilePhoto = this.vehicleData.driver_details.driver_documents.photo;
      //  this.alertService.loaderDismiss();
      console.log('Res : ', this.vehicleData);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(async data => {
      this.userType = data.userType;
      this.vehicleId = data.vehicleId;
      console.log(this.userType, this.vehicleId);
      console.log('routes', data);
      // this.checkUserType();
      this.getVehicleFromServer(data.vehicleId);
    });
  }

  back() {
    this.navctl.pop();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
