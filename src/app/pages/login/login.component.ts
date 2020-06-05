import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';

// Imports parent service.
import { ParentService } from '../../services/parent.service';
import { SchoolService } from '../../services/school.service';
import { DriverService } from '../../services/driver.service';
import { BusCoordinatorService } from '../../services/bus-coordinator.service';
import { LoaderService } from '../../services/loader.service';
import { StorageService } from '../../services/storage.service';
import { AlertBoxService } from 'src/app/services/alert-box.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

/**
 * @description - This class get the login credentials and navigate the page based on user type.
 * @class LoginComponent
 */
export class LoginComponent implements OnInit, OnDestroy {
  /**
   * @member {FormGroup} loginForm
   * @member {string} parentId - Stores the unique id of parent from server.
   * @member {string} schoolId - Stores the unique id of student from server.
   * @member {string} schoolId - Stores the unique id of school from server.
   * @member {string} driverId - Stores the unique id of driver from server.
   * @member {string} busCoordinatorId - Stores the unique id of busCoordinator from server.
   */
  loginForm: FormGroup;
  private parentId: string;
  private studentId: string;
  private schoolId: string;
  private driverId: string;
  private busCoordinatorId: string;
  subscription: Subscription;

  /**
   * @description - It creates instance of ParentService, DriverService, BuscoordinatorService, FormBuilder, Router and ActivatedRoute.
   * @constructor
   */
  constructor(
    private parentService: ParentService,
    private driverService: DriverService,
    private busCoordinatorService: BusCoordinatorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private storageService: StorageService,
    private alertBoxService: AlertBoxService
  ) {
    // Assign id of the selected school to schoolId member.
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
  }

  /**
   * @description - gets the submited form data and navigate the page according to conditions.
   * @function - loginUser
   * @param loginData - Stores the form data.
   */
  async loginUser(loginData: FormGroup) {
    // Switch case to navigate according to user's type.

    // Presenting the loader.
    this.loaderService.loaderPresent('Please wait.', 'crescent');
    switch (loginData.value.userType) {
      // When user type is driver.
      case 'driver': {
        // Call getServerDriverDetails method from driver service and store response to driverDetails.

        const driverDetails = await this.driverService.getServerDriverDetails(
          loginData.value.userName,
          loginData.value.userPassword
        );

        // Subscribe the driverDetails to get data.
        this.subscription = driverDetails.subscribe(
          res => {
            console.log(res);
            const data = res['data'];

            if (!data[0]) {
              // Dismiss the loader.
              this.loaderService.loaderDismiss();

              setTimeout(() => {
                this.presentAlertBox('Invalid username or password.');
              }, 1200);
            } else {
              // Stores the logged in driver's id.
              this.driverId = data[0]._id;

              // Storing login credentials into native storage of device.
              this.storageService.loginUser(
                loginData.value.userName,
                loginData.value.userPassword,
                loginData.value.userType,
                data[0].driver_documents.photo
              );

              /*    // Dismiss the loader.
              this.loaderService.loaderDismiss(); */
              // Navigate the page after driver's successful login.
              this.router.navigate(['/driver'], {
                queryParams: { user: loginData.value.userType, driverId: this.driverId },
              });
              /*  this.router.navigate(['/driver', loginData.value.userType, this.driverId]); */
              return data;
            }
          },
          err => {
            // Dismiss the loader.
            this.loaderService.loaderDismiss();

            setTimeout(() => {
              this.presentAlertBox('Server not responding. Try after sometime.', 'Server Error');
            }, 1200);
          }
        );
        break;
      }

      // When user type is parent.
      case 'parent': {
        // Call getServerParentDetails method from parent service and store response to parentDetails.
        const parentDetails = await this.parentService.getServerParentDetails(
          loginData.value.userName,
          loginData.value.userPassword
        );

        // Subscribe the parentDetails to get data.
        this.subscription = parentDetails.subscribe(
          res => {
            console.log(res);
            const data = res['data'];

            if (!data[0]) {
              // Dismiss the loader.
              this.loaderService.loaderDismiss();

              setTimeout(() => {
                this.presentAlertBox('Invalid username or password.');
              }, 1200);
            } else {
              // Stores the logged in parent's id.
              this.parentId = data[0]._id;
              this.studentId = data[0].student_details[0];

              // Storing login credentials into native storage of device.
              this.storageService.loginUser(
                loginData.value.userName,
                loginData.value.userPassword,
                loginData.value.userType,
                data[0].parent_photo
              );
              /*
              // Dismiss the loader.
              this.loaderService.loaderDismiss(); */

              this.router.navigate(['/parent'], {
                queryParams: { user: loginData.value.userType, perentId: this.parentId },
              });
            }
          },
          err => {
            // Dismiss the loader.
            this.loaderService.loaderDismiss();

            setTimeout(() => {
              this.presentAlertBox('Server not responding. Try after sometime.', 'Server Error');
            }, 1200);
          }
        );

        break;
      }

      // When user type is busCoordinator.
      case 'busCoordinator': {
        // Call getServerBusCoordinatorDetails method from busCoordinator service and store response to busCoordinatorDetails.

        const busCordinatorDetails = await this.busCoordinatorService.getServerBusCoordinatorDetails(
          loginData.value.userName,
          loginData.value.userPassword
        );

        // Subscribe the busCoordinatorDetails to get data.
        this.subscription = busCordinatorDetails.subscribe(
          res => {
            const data = res['data'];

            if (!data[0]) {
              // Dismiss the loader.
              this.loaderService.loaderDismiss();

              setTimeout(() => {
                this.presentAlertBox('Invalid username or password.');
              }, 1200);
            } else {
              // Stores the logged in busCoordinator's id.
              this.busCoordinatorId = data[0]._id;

              // Storing login credentials into native storage of device.
              this.storageService.loginUser(
                loginData.value.userName,
                loginData.value.userPassword,
                loginData.value.userType,
                data[0].buscoordinator_photo
              );

              /*      // Dismiss the loader.
              this.loaderService.loaderDismiss(); */

              // Navigate the page after busCoordinator's successful login.

              this.router.navigate([
                '/coordinator',
                loginData.value.userType,
                this.busCoordinatorId,
              ]);

              return data;
            }
          },
          err => {
            // Dismiss the loader.
            this.loaderService.loaderDismiss();

            setTimeout(() => {
              this.presentAlertBox('Server not responding. Try after sometime.', 'Server Error');
            }, 1200);
          }
        );
        break;
      }
      // Default
      default: {
        break;
      }
    }
  }

  /**
   * @description - This function calls the presentAlert method of AlertBoxService with the provided parameter.
   * @param {string} message - It stores the message string of the alert box.
   * @param {string} subHeader - It stores the sub-header string of the alert box.
   */
  presentAlertBox(message: string, subHeader: string = 'Login Failed') {
    // Calling the presentAlert method of AlertBoxService using the alertBoxService instance.
    this.alertBoxService.presentAlert('Alert', subHeader, message);
  }

  forgetPassword() {
    // Navigating to forget password page.
    this.router.navigate(['/forget-password']);
  }

  ngOnInit() {
    // Reactive form's validation.
    this.loginForm = this.formBuilder.group({
      userType: ['', Validators.required],
      userName: ['', Validators.required],
      userPassword: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
