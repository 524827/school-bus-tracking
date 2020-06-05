import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';

import { ActionSheetController } from '@ionic/angular';
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from '@ionic-native/file-transfer/ngx';

import { StorageService } from '../../../services/storage.service';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoaderService } from '../../../services/loader.service';
import { AlertBoxService } from '../../../services/alert-box.service';
import { Subscription } from 'rxjs/Subscription';
import { BusCoordinatorService } from '../../../services/bus-coordinator.service';
import { DriverService } from '../../../services/driver.service';
import { ParentService } from '../../../services/parent.service';
import { serverUrl, environment } from '../../../../environments/environment';
import { UserProfileModel, SchoolProfileModel } from '../../../model/user-profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

/**
 * @description - This class provides the profile details of the user.
 * @class - ProfileComponent
 */
export class ProfileComponent implements OnInit, OnDestroy {
  /**
   * @member {string} userType - Stores the type of logged in user.
   * @member {string} userId - Stores the id of the user.
   * @member busCoordinatorData - Stores the bus coordinator's data.
   * @member driverData - Stores the driver's data.
   * @member parentData - Stores the parent's data.
   * @member profileData - Stores the user's profile data.
   * @member imageUrl - Stores the the path of the image.
   */
  public userType: string;
  public userId: string;
  private busCoordinatorData;
  private driverData;
  private parentData;
  profileData: UserProfileModel;
  schoolData: SchoolProfileModel;
  private imageUrl;
  subscription: Subscription;

  /**
   * @description - This constructor initializes the instances and access the route parameters.
   * @param {ModalController} modalController - Instance of the ModalController.
   * @param {NavController} navCtrl - Instance of the NavController.
   * @param {Router} router - Instance of the Router.
   * @param {ActivatedRoute} route - Instance of the ActivatedRoute.
   * @param {BusCoordinatorService} busCoordinatorService - Instance of the BusCoordinatorService.
   * @param {DriverService} driverService - Instance of the DriverService.
   * @param {ParentService} parentService - Instance of the ParentService.
   *  @param {FileTransfer} transfer - Instance of the FileTransfer.
   *  @param {Camera} camera - Instance of the Camera.
   *  @param {AlertService} alertService - Instance of the AlertService.
   *  @param {ActionSheetController} actionSheetController - Instance of the ActionSheetController.
   *  @param {Crop} crop - Instance of the Crop.
   * @param {Platform} platform - Instance of the Platform.
   * @param {StorageService} storageService - Instance of the storage service.
   */
  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private busCoordinatorService: BusCoordinatorService,
    private driverService: DriverService,
    private parentService: ParentService,
    private transfer: FileTransfer,
    private camera: Camera,
    private loaderService: LoaderService,
    private actionSheetController: ActionSheetController,
    private crop: Crop,
    private platform: Platform,
    private alertBoxService: AlertBoxService,
    private storageService: StorageService
  ) { }

  editProfile(userId) {
    this.presentModal(userId);
  }

  // Presenting model
  async presentModal(userId) {
    const modal = await this.modalController.create({
      component: EditprofileComponent,
      componentProps: { userId: userId, userType: this.userType },
    });
    modal
      .onDidDismiss()
      .then(() => {
        this.refreshUserData();
      })
      .catch();
    return await modal.present();
  }

  /**
   * @description - get the data of user from the server according to user type.
   * @function - getUserProfileData
   *
   */
  async getUserProfileData(userType: string) {
    console.log(userType);
    // Switch case to navigate according to user's type.
    switch (this.userType) {
      // When user type is driver.
      case 'driver': {
        this.getDriverDetails();
        break;
      }

      // When user type is parent.
      case 'parent': {
        this.getParentDetails();
        break;
      }

      // When user type is busCoordinator.
      case 'busCoordinator': {
        /* const schoolProfileCardElement = <HTMLElement>document.getElementById('schoolProfileCard');
        schoolProfileCardElement.setAttribute('style', 'display: none;'); */
        this.getBusCoordinatorDetails();
        break;
      }
      // Default
      default: {
        break;
      }
    }
  }

  setPersonalData(userId, userName, userAddress, userMobileNumber, userEmail, userPhoto) {
    this.profileData = {
      userId: userId,
      userName: userName,
      userAddress: userAddress,
      userMobileNumber: userMobileNumber,
      userEmail: userEmail,
      userPhoto: userPhoto,
    };
  }

  setSchoolData(schoolName: string, schoolAddress: string) {
    this.schoolData = {
      schoolName: schoolName,
      schoolAddress: schoolAddress,
    };
  }

  /**
   * @description - This function calls the driver's service and fetches the data.
   *  This function also sets the user's profile picture.
   * @function - getDriverDetails
   */
  async getDriverDetails() {
    // Call getServerDriverDetailsById method from driver service and store response to driverDetails.
    const driverDetails = await this.driverService.getServerDriverDetailsById(this.userId);

    // Subscribe the driverDetails to get data.
    this.subscription = driverDetails.subscribe(
      res => {
        console.log(res);
        const data = res['data'];
        console.log(data);
        // Stores the logged in driver's id.
        this.driverData = data[0];
        this.setPersonalData(
          this.driverData._id,
          this.driverData.driver_name,
          this.driverData.driver_addresses['permanent_address'],
          this.driverData.mobile_numbers['primary_number'],
          this.driverData.driver_email,
          this.driverData.driver_documents['photo']
        );

        this.setSchoolData(
          this.driverData.school_details.school_name,
          this.driverData.school_details.school_address
        );

        this.storageService
          .getFromNativeStorage()
          .then(item => {
            // Storing user's data into native storage of device.
            this.storageService.setNativeStorage(
              item.userName,
              item.userPassword,
              item.userType,
              this.driverData.driver_documents.photo
            );
          })
          .catch(err => {
            console.error('Error : ', err);
          });

        /*  // Getting profile picture element for setting src attribute.
        const profilePictureElement = document.getElementById('profilePicture') as HTMLImageElement;
        if (profilePictureElement != null) {
          // Setting profile picture using src attribute.
          profilePictureElement.src = `${environment.userImages}/this.profileData.driver_photo`;
        } */

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

  /**
   * @description - This function calls the parent's service and fetches the data.
   *  This function also sets the user's profile picture.
   * @function - getParentDetails
   */
  async getParentDetails() {
    // Call getServerParentDetailsById method from parent service and store response to parentDetails.
    const parentDetails = await this.parentService.getServerParentDetailsById(this.userId);

    // Subscribe the parentDetails to get data.
    this.subscription = parentDetails.subscribe(
      res => {
        console.log(res);
        const data = res['data'];

        // Stores the logged in parent's id.
        this.parentData = data[0];

        // Calling setPersonalData method for setting profileData object.
        this.setPersonalData(
          this.parentData._id,
          this.parentData.parent_name,
          this.parentData.parent_address,
          this.parentData.parent_contact_details.father_mobile_number,
          this.parentData.parent_contact_details.parent_email,
          this.parentData.parent_photo
        );

        this.storageService
          .getFromNativeStorage()
          .then(item => {
            // Storing user's data into native storage of device.
            this.storageService.setNativeStorage(
              item.userName,
              item.userPassword,
              item.userType,
              this.parentData.parent_photo
            );
          })
          .catch(err => {
            console.error('Error : ', err);
          });

        /* // Getting profile picture element for setting src attribute.
        const profilePictureElement = document.getElementById('profilePicture') as HTMLImageElement;
        if (profilePictureElement != null) {
          // Setting profile picture using src attribute.
          profilePictureElement.src = `${environment.userImages}/this.profileData.parent_photo`;
        } */

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

  /**
   * @description - This function calls the bus coordinator's service and fetches the data.
   *  This function also sets the user's profile picture.
   * @function - getBusCoordinatorDetails
   */
  async getBusCoordinatorDetails() {
    //  this.setSchoolData('', '');

    console.log(this.userId);
    // Call getServerBusCoordinatorDetailsById method from busCoordinator service and store response to busCoordinatorDetails.
    const busCordinatorDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsById(
      this.userId
    );

    // Subscribe the busCoordinatorDetails to get data.
    this.subscription = busCordinatorDetails.subscribe(
      res => {
        console.log(res);
        const data = res['data'];

        // Stores the busCoordinator's data in to busCoordinatorData member.
        this.busCoordinatorData = data[0];

        // Calling setPersonalData method for setting profileData object.
        this.setPersonalData(
          this.busCoordinatorData._id,
          this.busCoordinatorData.buscoordinator_name,
          this.busCoordinatorData.buscoordinator_address,
          this.busCoordinatorData.buscoordinator_mobile_number.primary_number,
          this.busCoordinatorData.buscoordinator_email_address,
          this.busCoordinatorData.buscoordinator_photo
        );

        this.storageService
          .getFromNativeStorage()
          .then(item => {
            // Storing user's data into native storage of device.
            this.storageService.setNativeStorage(
              item.userName,
              item.userPassword,
              item.userType,
              this.busCoordinatorData.buscoordinator_photo
            );
          })
          .catch(err => {
            console.error('Error : ', err);
          });

        /*  // Getting profile picture element for setting src attribute.
        const profilePictureElement = document.getElementById('profilePicture') as HTMLImageElement;

        if (profilePictureElement != null) {
          // Setting profile picture using src attribute.
          profilePictureElement.src = `${
            environment.busCoordinatorImages
          }/this.profileData.buscoordinator_photo`;
        } */

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

  /**
   * @description - This function presents action sheet and calls the function according to selected option.
   * @function - presentActionSheet
   */
  async presentActionSheet() {
    // Creating action sheet with 'Take a Picture', 'Select From Gallery' and 'Cancel' buttons.
    const actionSheet = await this.actionSheetController.create({
      // Setting the header of the action sheet.
      header: 'Choose options',

      // Creating array of buttons.
      buttons: [
        {
          text: 'Take a Picture',
          icon: 'camera',
          handler: () => {
            // Setting CameraOptions.
            const option: CameraOptions = {
              allowEdit: true,
              sourceType: this.camera.PictureSourceType.CAMERA,
              destinationType: this.camera.DestinationType.FILE_URI,
            };

            // Calling getPicture method.
            this.getCameraPicture(option);
          },
        },
        {
          text: 'Select From Gallery',
          icon: 'images',
          handler: () => {
            // Stting options.
            const option = {
              allowEdit: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.FILE_URI,
            };

            // Calling getPicture method.
            this.getGalleryPicture(option);
          },
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    // Presenting action sheet to user.
    await actionSheet.present();
  }

  /**
   * @description - This function opens the camera or gallery.
   * @function - getPicture
   * @param option - This parameter stores the information related with camera.
   */
  getCameraPicture(option) {
    // Calling getPicure method of camera.
    this.camera.getPicture(option).then(imageData => {
      // Calling profilePictureUploader method.
      this.profilePictureUploader(imageData);
    });
  }
  /**
   * @description - This function opens the camera or gallery.
   * @function - getPicture
   * @param option - This parameter stores the information related with camera.
   */
  getGalleryPicture(option) {
    // Calling getPicure method of camera.
    this.camera.getPicture(option).then(
      imageData => {
        const croppedImage = this.crop.crop(imageData, { quality: 100 }).then(newImageData => {
          console.log(newImageData);
          // Calling profilePictureUploader method.
          this.profilePictureUploader(newImageData);
        });
      },
      err => {
        console.error(err);
        // Handle error
      }
    );
  }

  /**
   * @description - This function uploads the profile picture to server.
   * @function - profilePictureUploader
   * @param imageData - It stores the image related data including path of the image.
   */
  profilePictureUploader(imageData) {
    // Assigning imageData to imageUrl member.
    this.imageUrl = imageData;

    // Creating file transfer object.
    const fileTransfer: FileTransferObject = this.transfer.create();

    // Creating and assigning options .
    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
      headers: {},
      params: {
        userType: this.userType,
        userId: this.userId,
      },
    };

    // Uploading the file to the server.
    fileTransfer
      .upload(
        /* Image path */ this.imageUrl,
        /* Server url */ encodeURI(`${serverUrl}/api/images/userImages`),
        options
      )
      .then(
        data => {
          this.refreshUserData();
        },
        err => { }
      );
  }

  /**
   * @description - This function navigate the page back.
   */
  navigateBack() {
    // Calling  back method of navCtrl.
    this.navCtrl.back();
  }

  refreshUserData() {
    if (this.userType === 'driver') {
      // Calling getDriverDetails method.
      this.getDriverDetails();
    } else if (this.userType === 'parent') {
      // Calling getParentDetails method.
      this.getParentDetails();
    } else {
      // Calling getBusCoordinatorDetails method.
      this.getBusCoordinatorDetails();
    }
  }

  ngOnInit() {
    // get the route parameters.
    this.route.params.subscribe(data => {
      this.userType = data.userType;
      this.userId = data.userId;
      // Calling getUserProfileData();

      this.loaderService.loaderPresent('Please wait.', 'crescent');
      this.getUserProfileData(this.userType);
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
