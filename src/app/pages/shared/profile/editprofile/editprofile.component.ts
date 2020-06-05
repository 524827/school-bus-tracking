import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ValidationMsg } from '../../../../model/validation';

import { BusCoordinatorService } from '../../../../services/bus-coordinator.service';
import { DriverService } from '../../../../services/driver.service';
import { ParentService } from '../../../../services/parent.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  @Input() userId;
  @Input() userType;
  profileData;
  public validation_messages: any; // store validation messages

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private parentService: ParentService,
    private driverService: DriverService,
    private busCoordinatorService: BusCoordinatorService,
    private router: Router
  ) {
    // ValidationMsg() class store validation messages
    this.validation_messages = new ValidationMsg().validation_msg;
    setTimeout(() => {
      console.log(this.userId, this.userType);
      this.getProfileDetails();
    }, 100);
    console.log(this.userId, this.userType);
  }

  async getProfileDetails() {
    switch (this.userType) {
      // When user type is driver.
      case 'driver': {
        // Call getServerDriverDetails method from driver service and store response to driverDetails.
        //   this.alertService.loaderPresent('Please wait.', 'crescent');
        const driverDetails = await this.driverService.getServerDriverDetailsById(this.userId);

        // Subscribe the driverDetails to get data.
        driverDetails.subscribe(res => {
          console.log(res);
          let data = res['data'];
          data = data[0];

          this.setValuesToObject(
            data.driver_name,
            data.driver_addresses.permanent_address,
            data.mobile_numbers.primary_number,
            data.mobile_numbers.secondary_number,
            data.driver_email,
            data.driver_username
          );
        });
        break;
      }

      // When user type is parent.
      case 'parent': {
        // Call getServerParentDetails method from parent service and store response to parentDetails.

        const parentDetails = await this.parentService.getServerParentDetailsById(this.userId);

        // Subscribe the parentDetails to get data.
        parentDetails.subscribe(res => {
          console.log(res);
          let data = res['data'];
          data = data[0];
          this.setValuesToObject(
            data.parent_name,
            data.parent_address,
            data.parent_contact_details.father_mobile_number,
            data.parent_contact_details.alternate_mobile_number,
            data.parent_contact_details.parent_email,
            data.parent_username
          );
        });

        break;
      }

      // When user type is busCoordinator.
      case 'busCoordinator': {
        // Call getServerBusCoordinatorDetails method from busCoordinator service and store response to busCoordinatorDetails.

        const busCordinatorDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsById(
          this.userId
        );

        // Subscribe the busCoordinatorDetails to get data.
        busCordinatorDetails.subscribe(res => {
          console.log(res);
          let data = res['data'];
          data = data[0];

          this.setValuesToObject(
            data.buscoordinator_name,
            data.buscoordinator_address,
            data.buscoordinator_mobile_number.primary_number,
            data.buscoordinator_mobile_number.secondary_number,
            data.buscoordinator_email_address,
            data.buscoordinator_username
          );
        });
        break;
      }
      // Default
      default: {
        break;
      }
    }
  }

  setValuesToObject(fullName, address, mobileNumber, alternateNumber, email, userName) {
    this.profileData = {
      fullName: fullName,
      address: address,
      mobileNumber: mobileNumber,
      alternateNumber: alternateNumber,
      email: email,
      userName: userName,
    };
    console.log(this.profileData);
  }

  /**
   * closeModal()
   * This function close the modal controller
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }

  /**
   * onSubmit()
   * This function updates user information
   */
  async onSubmit(profileDetails: FormGroup) {
    switch (this.userType) {
      // When user type is driver.
      case 'driver': {
        const updatedUserData = {
          driverId: this.userId,
          driverName: profileDetails.value.fullName,
          permanentAddress: profileDetails.value.address,
          secondaryNumber: profileDetails.value.altNumber,
          primaryNumber: profileDetails.value.mobileNumber,
          driverEmail: profileDetails.value.email,
          driverUserName: profileDetails.value.username,
          driverPassword: profileDetails.value.password,
        };

        console.log('Data : ', updatedUserData);
        // Call getServerDriverDetails method from driver service and store response to driverDetails.
        //   this.alertService.loaderPresent('Please wait.', 'crescent');
        const driverDetails = await this.driverService.updateServerDriverAllDetails(
          updatedUserData
        );

        // Subscribe the driverDetails to get data.
        driverDetails.subscribe(res => {
          console.log(res);
          let data = res['data'];
          data = data[0];
          (<HTMLElement>document.getElementById('closeIcon')).click();
        });
        break;
      }

      // When user type is parent.
      case 'parent': {
        const updatedUserData = {
          parentId: this.userId,
          parentName: profileDetails.value.fullName,
          parentAddress: profileDetails.value.address,
          fatherMobileNumber: profileDetails.value.mobileNumber,
          alternateMobileNumber: profileDetails.value.altNumber,
          parentEmail: profileDetails.value.email,
          parentUserName: profileDetails.value.username,
          parentPassword: profileDetails.value.password,
        };

        // Call getServerParentDetails method from parent service and store response to parentDetails.

        const parentDetails = await this.parentService.updateServerParentAllDetails(
          updatedUserData
        );

        // Subscribe the parentDetails to get data.
        parentDetails.subscribe(res => {
          console.log(res);
          let data = res['data'];
          data = data[0];
          (<HTMLElement>document.getElementById('closeIcon')).click();
        });

        break;
      }

      // When user type is busCoordinator.
      case 'busCoordinator': {
        const updatedUserData = {
          busCoordinatorId: this.userId,
          busCoordinatorName: profileDetails.value.fullName,
          busCoordinatorAddress: profileDetails.value.address,
          primaryNumber: profileDetails.value.mobileNumber,
          secondaryNumber: profileDetails.value.altNumber,
          busCoordinatorEmail: profileDetails.value.email,
          busCoordinatorUserName: profileDetails.value.username,
          busCoordinatorPassword: profileDetails.value.password,
        };

        // Call getServerBusCoordinatorDetails method from busCoordinator service and store response to busCoordinatorDetails.

        const busCordinatorDetails = await this.busCoordinatorService.updateServerBusCoordinatorAllDetails(
          updatedUserData
        );

        // Subscribe the busCoordinatorDetails to get data.
        busCordinatorDetails.subscribe(res => {
          console.log(res);
          let data = res['data'];
          data = data[0];
          (<HTMLElement>document.getElementById('closeIcon')).click();
        });
        break;
      }
      // Default
      default: {
        break;
      }
    }
  }

  /**
   *
   * @function equalto()
   * This function validate password and confirm password
   * return null if password not match
   */
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const input = control.value;
      const isValid = control.root.value[field_name] === input;
      if (!isValid) {
        return { equalTo: { isValid } };
      } else {
        return null;
      }
    };
  }

  ngOnInit() {
    this.getProfileDetails();
    console.log(this.userId, this.userType);
    /**
     * Create a custome form control
     */
    this.profileForm = this.formBuilder.group({
      fullName: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      address: ['', Validators.compose([Validators.required])],
      mobileNumber: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      altNumber: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required,
        ]),
      ],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.compose([Validators.required, this.equalto('password')])],
    });
  }
}
