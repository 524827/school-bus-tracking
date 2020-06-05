import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from '../../../../services/loader.service';
import { AlertBoxService } from '../../../../services/alert-box.service';
import { VehicleService } from '../../../../services/vehicle.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-driverbusdetails',
  templateUrl: './driverbusdetails.component.html',
  styleUrls: ['./driverbusdetails.component.scss'],
})
export class DriverbusdetailsComponent implements OnInit, OnDestroy {
  userId: string;
  vehicleData;
  subscription: Subscription;
  vehicleImages = environment.vehicleImages;

  constructor(
    private navCtl: NavController,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private loaderService: LoaderService,
    private alertBoxService: AlertBoxService
  ) {
    // Get the route parameter.
    this.route.params.subscribe(data => {
      this.userId = data.userId;
    });
  }

  ngOnInit() {
    this.getVehicleData();
  }

  getVehicleData() {
    // Presenting the loader.
    this.loaderService.loaderPresent('Please wait.', 'crescent');
    this.subscription = this.vehicleService.getDriversVehicleDetails(this.userId).subscribe(
      res => {
        if (res) {
          this.vehicleData = res['data'];
          this.vehicleData = this.vehicleData[0];
        }
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
  }

  navigateBack() {
    this.navCtl.pop();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
