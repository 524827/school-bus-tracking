import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { DriverService } from './driver.service';
import { ParentService } from './parent.service';
import { BusCoordinatorService } from './bus-coordinator.service';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides functionality -
 * for set data in to native storage.
 * for get data from the native storage.
 * for remove data from the native storage.
 * @class - StorageService
 */
export class StorageService {
  public authState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  /**
   * @description - This constructor creates the instance of NativeStorage.
   * @constructor
   * @param {NativeStorage} nativeStorage - Instance of the NativeStorage.
   */
  constructor(
    private nativeStorage: NativeStorage,
    private router: Router,
    private driverService: DriverService,
    private parentService: ParentService,
    private busCoordinatorService: BusCoordinatorService
  ) {
    this.ifLoggedIn();
  }

  /**
   *This function get user details and store it to the Native Storage
   * @param userName - contain user name
   * @param userPassword - contain user password
   * @param userType - contain user type
   * @param userPhoto - contain user photo
   */
  setNativeStorage(
    userName: string,
    userPassword: string,
    userType: string,
    userPhoto: string
  ): void {
    // Setting item to native storage.
    this.nativeStorage
      .setItem('loginCredentials', {
        userName: userName,
        userPassword: userPassword,
        userType: userType,
        userPhoto: userPhoto,
      })
      .then(() => console.log('Stored item!'), error => console.error('Error storing item', error));
  }

  /**
   * @description - This function get the data from native storage.
   * @function - getFromNativeStorage
   * @returns -
   */
  getFromNativeStorage() {
    return this.nativeStorage.getItem('loginCredentials');
  }
  // This function return Subject boolean value
  isAuthenticated() {
    console.log(this.authState.value);
    return this.authState.value;
  }
  /**
   * This function check if user details are exists or not in native storage.
   * If user details exist then authState value is assign to true
   */
  ifLoggedIn() {
    this.nativeStorage.getItem('loginCredentials').then(response => {
      if (response) {
        console.log('already login');
        this.authState.next(true);
      }
    });
  }
  /**
   *This function get user details and store it to the Native Storage
   * @param userName - contain user name
   * @param userPassword - contain user password
   * @param userType - contain user type
   * @param userPhoto - contain user photo
   */
  loginUser(userName: string, userPassword: string, userType: string, userPhoto: string): void {
    // Setting item to native storage.
    this.nativeStorage
      .setItem('loginCredentials', {
        userName: userName,
        userPassword: userPassword,
        userType: userType,
        userPhoto: userPhoto,
      })
      .then(() => console.log('Stored item!'), error => console.error('Error storing item', error));
    this.authState.next(true);
  }

  /**
   * This function call when user logout from application.
   * User will navigate to the home page
   */
  logOut() {
    this.nativeStorage.remove('loginCredentials');
    this.router.navigate(['home']);
    this.authState.next(false);
  }

  setIntervalValue(intervalValue) {
    this.nativeStorage
      .setItem('intervalValue', intervalValue)
      .then(() => console.log('Stored item!'), error => console.error('Error storing item', error));
  }

  getIntervalValue() {
    return this.nativeStorage.getItem('intervalValue');
  }
  /**
   * This function is call when user details are exists in native storage
   * Base on userType user navigate to particular page
   */
  getLoginDetails() {
    this.getFromNativeStorage().then(item => {
      switch (item.userType) {
        case 'driver':
          this.driverService
            .getServerDriverDetails(item.userName, item.userPassword)
            .subscribe(res => {
              console.log(res);
              const data = res['data'];
              this.router.navigate(['/driver', item.userType, data._id]);
              return data;
            });
          break;
        case 'coordinator':
          this.busCoordinatorService
            .getServerBusCoordinatorDetails(item.userName, item.userPassword)
            .subscribe(res => {
              console.log(res);
              const data = res['data'];
              this.router.navigate(['/coordinator', item.userType, data._id]);
              return data;
            });
          break;
        case 'parent':
          this.parentService
            .getServerParentDetails(item.userName, item.userPassword)
            .subscribe(res => {
              console.log(res);
              const data = res['data'];
              this.router.navigate(['/parent', item.userType, data._id]);
              return data;
            });
          break;
      }
    });
  }
}
