import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';
import { AlertBoxService } from '../../services/alert-box.service';
import { environment } from '../../../environments/environment';
import { NetworkService } from '../../services/network.service';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/**
   *@description - This is class handles the activities of home page. This class get and provides the school list.
  @class - HomePage
   */
export class HomePage implements OnInit {
  /**
   * @member {object} schoolData - stores school records get from server.
   * @member {string} schoolImages - stores school images folder link of server.
   */
  schoolData: [];
  schooldetails;
  schoolImages: any;

  /**
   * @description - This constructor calls getSchoolFromServer() method.
   * @param {SchoolService} schoolService - This param is the instance of school service.
   * @param {AlertService} alertService - This param is the instance of alert service.
   * @param {NetworkService} networkService - This param is the instance of network service.
   * @param {Network} network - This param is the instance of network.
   * @param {ToastController} toastController - This param is the instance of ToastController.
   */
  constructor(
    private schoolService: SchoolService,
    private networkService: NetworkService,
    private network: Network,
    private sanitizer: DomSanitizer,
    private toastController: ToastController
  ) {
    // Checking for internet connection.
    this.networkService.checkIsNetworkDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      // this.alertService.loaderDismiss();
      alert('No internet connection. Try to connect internet or wifi.');
    });

    this.networkService.checkIsNetworkConnect().subscribe(() => {
      console.log('network connected!');
      console.log(this.network.type);
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.

      // Calling getSchoolFromServer() method in constructor to set values of schoolData member when the component gets load.
      this.presentToast();
      // this.presentToastWithOptions();
      this.getSchoolFromServer();

      // Checking network type.

      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

    // Assigning school images folder link of server to schoolImages member.
    this.schoolImages = environment.schoolImages;

    // Calling getSchoolFromServer() method in constructor to set values of schoolData member when the component gets load.
    this.getSchoolFromServer();
  }

  /**
   * @description - This function presents toast.
   * @function - presentToast
   * @returns -
   */
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Internet Connected.',
      showCloseButton: true,
      duration: 5000,
    });
    toast.present();
  }

  /* async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',

      position: 'top',
      closeButtonText: 'Done',
    });
    toast.present();
  }
 */
  /**
   * @description - This function get the school data from services and assign it to schoolData member.
   * @function - getSchoolFromServer()
   * @returns -
   */
  async getSchoolFromServer() {
    // Presenting loader until response recieved from server.
    //  this.alertService.loaderPresent('Please wait.', 'crescent');

    // Calling getServerSchoolDetails() method from school service and store return data to schoolDetails.
    const schoolDetails = await this.schoolService.getServerSchoolDetails();

    // Set the subscribed data to schoolData member.
    schoolDetails.subscribe(item => {
      console.log(item);
      const schoolDetail = item['data'];
      this.schooldetails = schoolDetail;
      console.log(this.schooldetails.push);
     // this.schoolData.push(schoolDetails);

      // Dismiss the loader.
      //  this.alertService.loaderDismiss();
    });

    // Dismiss the loader.
    // this.alertService.loaderDismiss();
  }
  /**
   * @description - This function get the string provided by user, match it with school names and set the values to schoolData member.
   * @function - getSchool()
   * @param {string} value - Stores string provided by user.
   * @returns - void
   */
  getSchool(value: string): void {
    let dummyArrayOfSchool;

    // Check if value is empty or it is unset.
    if (!value) {
      // Calling getSchoolFromServer() method to set values of schoolData member when the value is not set.
      this.getSchoolFromServer();
    } else {
      // Assign schoolData to dummyArrayOfSchool.
      dummyArrayOfSchool = this.schoolData;

      // Assign empty array to scoolData member to make it empty.
      this.schoolData = [];

      // Assign filtered search result to schoolData member.
      this.schooldetails = dummyArrayOfSchool.filter(
        item =>
          item.school_name
            .toString()
            .toLowerCase()
            .indexOf(value.toString().toLowerCase()) > -1
      );
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getSchoolFromServer();
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {}
}
