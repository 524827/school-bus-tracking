import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides loader present and loader dismiss functionality for the loading content.
 * @class - LoaderService
 */
export class LoaderService {
  /**
   * @member {any} loader - It is the loader.
   * @member {Boolean} isLoaderActive - It stores true or false. It stores the status of the loader.
   */
  private loader: any;
  private loaderState: string;

  /**
   * @description - This constructor creates the instance of LoadingController.
   * @constructor
   * @param {LoadingController} loadingController - Instance of the LoadingController.
   */
  constructor(public loadingController: LoadingController) {}

  /**
   * @description - This function present the loader with user provided message and spinner type.
   *  This function also sets the isLoaderActive member to true.
   * @function - loaderPresent
   * @param {string} alertMessage - It is the required parameter. It stores the user provided message which shows when the loader is active.
   * @param {any} spinner - It is the default prameter which has default value 'lines'.
   * It also accepts user provided value which may be one of the from 'lines', 'lines-small', 'dots', 'bubbles', 'circles' and 'crescent'.
   * @returns - void.
   */
  async loaderPresent(alertMessage: string, spinner: any = 'lines') {
    // Creating loader and storing it in to loader member of the class.
    this.loader = await this.loadingController.create({
      message: alertMessage,
      spinner: spinner,
    });
    await this.loader.present();

    this.loaderState = 'active';
    return this.loaderState;
  }

  /**
   * @description - This function dismiss the loader.
   *  This function also sets the isLoaderActive member to false.
   * @function - loaderDismiss
   * @returns - void.
   */
  async loaderDismiss() {
    setTimeout(async () => {
      // Dismissing the loader.
      await this.loader.dismiss();
      this.loaderState = 'disable';
      return this.loaderState;
    }, 2000);
  }
}
