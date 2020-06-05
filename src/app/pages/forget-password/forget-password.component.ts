import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { ParentService } from '../../services/parent.service';
import { BusCoordinatorService } from '../../services/bus-coordinator.service';
import { LoaderService } from '../../services/loader.service';
import { OtpService } from '../../services/otp.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  userEmailForm: FormGroup;
  userType: string;
  serverOTP: string;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,
    private parentService: ParentService,
    private driverService: DriverService,
    private busCoordinatorService: BusCoordinatorService,
    private loaderService: LoaderService,
    private otpService: OtpService
  ) {
    this.showEnterEmailMessage();
  }
  enterEmailMessage;

  showEnterEmailMessage() {
    this.enterEmailMessage = 'Enter your email below to receive your password reset instructions.';
  }

  async isEmailExist(emailData: FormGroup) {
    this.loaderService.loaderPresent('Verifying Email', 'crescent');
    const userEmail: string = emailData.value.userEmail;

    const userData = await this.otpService.getOTPFromServer(userEmail);

    userData.subscribe(res => {
      console.log(res);
      const data = res['data'];

      if (res['data'] === 'Server_Error') {
        this.loaderService.loaderDismiss();
        console.log(data);
        alert('Something Wrong. Try after sometime.');
      } else if (!data[0]) {
        this.loaderService.loaderDismiss();
        console.log(data);
        alert('Email not exist.');
      } else {
        this.loaderService.loaderDismiss();
        console.log(data);
        const userDetails = data[0];
        const userId = userDetails[0]._id;

        this.navigateToOTPVerification(data[1].userType, data[2].otp, userId);
      }
    });
  }

  navigateToOTPVerification(userType, otp, userId) {
    this.router.navigate(['otp-verification', userType, otp, userId]);
  }

  navigate() {
    this.navCtrl.back();
  }

  ngOnInit() {
    // Reactive form's validation.
    this.userEmailForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
    });
  }
}

/*
async isEmailOfDriver(userEmail: string) {
  this.alertService.loaderPresent('Please wait.', 'bubbles');
  const driverDetails = await this.driverService.getServerDriverDetailsByEmail(userEmail);

  // Subscribe the driverDetails to get data.
  driverDetails.subscribe(res => {
    console.log(res);
    const data = res['data'];

    if (!data[0]) {
      this.alertService.loaderDismiss();
      alert('Email not found.');
    } else {
      this.userType = 'driver';
      const driverId = data[0]._id;

      this.router.navigate(['/coordinator', this.userType, driverId]);

      return data;
    }
  });
}

async isEmailOfParent(userEmail: string) {
  this.alertService.loaderPresent('Please wait.', 'bubbles');
  const parentDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsByEmail(
    userEmail
  );

  // Subscribe the parentDetails to get data.
  parentDetails.subscribe(res => {
    console.log(res);
    const data = res['data'];

    if (!data[0]) {
      this.alertService.loaderDismiss();
      alert('Email not found.');
    } else {
      this.userType = 'parent';
      const parentId = data[0]._id;

      this.router.navigate(['/coordinator', this.userType, parentId]);

      return data;
    }
  });
}

async isEmailOfBusCoordinator(userEmail: string) {
  this.alertService.loaderPresent('Please wait.', 'bubbles');
  const busCordinatorDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsByEmail(
    userEmail
  );

  // Subscribe the busCoordinatorDetails to get data.
  busCordinatorDetails.subscribe(res => {
    console.log(res);
    const data = res['data'];

    if (!data[0]) {
      this.alertService.loaderDismiss();
      alert('Email not found.');
    } else {
      this.userType = 'busCoordinator';
      const busCoordinatorId = data[0]._id;

      this.router.navigate(['/coordinator', this.userType, busCoordinatorId]);

      return data;
    }
  });
}
 */
