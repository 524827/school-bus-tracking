import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SchoolService } from '../../../services/school.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AlertBoxService } from '../../../services/alert-box.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-about-school',
  templateUrl: './about-school.component.html',
  styleUrls: ['./about-school.component.scss'],
})

/**
 * @class AboutSchoolComponent
 */
export class AboutSchoolComponent implements OnInit, OnDestroy {
  /**
   * @member {Any} schoolData - stores the school data.
   */
  schoolData: any;
  schoolImages = environment.schoolImages;
  subscription: Subscription;

  /**
   * @description - The constructors have instances of NavController, SchoolService
   * @param navctl - It is an instance of NavController
   * @param schoolService - It is an instance of SchoolService
   */
  constructor(
    public navctl: NavController,
    private schoolService: SchoolService,
    private loaderService: LoaderService,
    private alertBoxService: AlertBoxService
  ) {
    this.getSchooldata();
  }

  ngOnInit() {}
  /**
   * @description - This function is for going back to the previous component
   */
  navigateBack() {
    this.navctl.pop();
  }

  /**
   * @description - The function getSchooldata gets all the school data by calling school service
   *and storing that data in schooldetails.
   */

  async getSchooldata() {
    const schooldetails = await this.schoolService.getServerSchoolDetails();

    this.subscription = schooldetails.subscribe(
      data => {
        console.log(data);
        this.schoolData = data[0];
        console.log(this.schoolData);
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
   * Dismiss active loader and unsubscribe running services.
   */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
