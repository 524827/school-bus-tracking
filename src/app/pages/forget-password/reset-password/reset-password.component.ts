import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentService } from '../../../services/parent.service';
import { DriverService } from '../../../services/driver.service';
import { BusCoordinatorService } from '../../../services/bus-coordinator.service';
import { LoaderService } from '../../../services/loader.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  passwordResettingForm: FormGroup;
  userId;
  userType;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private parentService: ParentService,
    private driverService: DriverService,
    private busCoordinatorService: BusCoordinatorService,
    private loaderservice: LoaderService,
    private alertController: AlertController
  ) {
    // Get the route parameter.
    this.route.params.subscribe(data => {
      this.userType = data.userType;
      this.userId = data.userId;
    });

    this.showresetPasswordMessage();
  }
  resetPasswordMessage;

  async setPassword(passwordData: FormGroup) {
    console.log(passwordData.value.newPassword, passwordData.value.confirmPassword);
    if (passwordData.value.newPassword === passwordData.value.confirmPassword) {
      const userData = {
        busCoordinatorId: this.userId,
        busCoordinatorPassword: passwordData.value.newPassword,
      };

      switch (this.userType) {
        case 'driver': {
          // Call getServerDriverDetails method from driver service and store response to driverDetails.
          const driverDetails = await this.driverService.updateServerDriverDetailsById(userData);

          // Subscribe the driverDetails to get data.
          driverDetails.subscribe(data => {
            console.log(data);

            // Navigate the page after driver's successful resetting password.
            this.router.navigate(['/home']);
          });
          break;
        }

        // When user type is parent.
        case 'parent': {
          // Call getServerDriverDetails method from parent service and store response to parentDetails.
          const parentDetails = await this.parentService.updateServerParentDetailsById(userData);

          // Subscribe the parentDetails to get data.
          parentDetails.subscribe(data => {
            console.log(data);

            // Navigate the page after parent's successful resetting password.
            this.router.navigate(['/home']);
          });

          break;
        }

        // When user type is busCoordinator.
        case 'busCoordinator': {
          // Call getServerDriverDetails method from busCoordinator service and store response to busCoordinatorDetails.

          const busCordinatorDetails = await this.busCoordinatorService.updateServerBusCoordinatorDetailsById(
            userData
          );

          // Subscribe the busCoordinatorDetails to get data.
          busCordinatorDetails.subscribe(res => {
            console.log(res);

            this.presentAlert();
            // Navigate the page after bus coordinator's successful resetting password.
            this.router.navigate(['/home']);
          });
          break;
        }
        // Default
        default: {
          break;
        }
      }
    } else {
      alert('Password not matched.');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'WIMB Account',
      subHeader: 'Success',
      message: 'Your password changed successfully.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  showresetPasswordMessage() {
    this.resetPasswordMessage = 'Please enter your new password for your account.';
  }

  ngOnInit() {
    this.passwordResettingForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
}
