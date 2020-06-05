import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides ionic alert box with the provided message.
 * @class - AlertBoxService
 */
export class AlertBoxService {
  /**
   * @description - This constructor creates the instance of AlertController.
   * @constructor
   * @param {AlertController} alertController - Instance of the AlertController.
   */
  constructor(public alertController: AlertController) {}

  /**
   * @description - This function present the alert box with provided message.
   * @function - presentAlert
   * @param {string} header - It is the default parameter. It stores the header string of the alert box.
   * @param {string} subHeader - It is the required parameter. It stores the sub-header string of the alert box.
   * @param {string} message - It is the required parameter. It stores the message string of the alert box.
   * @returns - void.
   */
  async presentAlert(header: string = 'Alert', subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}


