import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'src/app/model/sidebar';
import { ModalController } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ParentService } from '../../../services/parent.service';
import { StudentService } from '../../../services/student.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from '../../../services/notification.service';
import { environment } from '../../../../environments/environment';
import { LoaderService } from 'src/app/services/loader.service';
import { AlertBoxService } from '../../../services/alert-box.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})

/**
 * @class  ParentComponent
 */
export class ParentComponent implements OnInit, OnDestroy {
  /**
 *@member {Any} studentData - Stores the student data.
 *@member {Number} parentId - Stores the parent Id.
 @member {Number} studentId - Stores the student Id.
 @member {Any} parentData - Stores the parent data.
 @member {Array} pages - Stores the item of side bar in the component.
 */

  public studentData: any;
  public userId;
  public vehicleId: string;
  private studentId;
  public badge;
  public notification = [];
  public notificationData = [];
  private parentData: any;
  public pages: Array<MenuItem>;
  public userType: string;
  public driverId: string;
  public routeId: string;
  public studentImages: string;
  private subscription: Subscription;

  /**
   * @description - The constructors has instances of ParentService,
   * StudentService, PopoverController, Router, ActivatedRoute
   * @param parentService - Instance of ParentService
   * @param studentService - Instance of StudentService
   * @param popoverController - Instance of PopoverController
   * @param router - Instance of Router
   * @param activatedroute - Instance of ActivatedRoute
   */

  constructor(
    private parentService: ParentService,
    private studentService: StudentService,
    private router: Router,
    private firebase: Firebase,
    public modalController: ModalController,
    private activatedroute: ActivatedRoute,
    private notificationService: NotificationService,
    private loaderService: LoaderService,
    private alertBoxService: AlertBoxService
  ) {
    // Assigning vehicle images folder link of server to vehicleImages member.
    this.studentImages = environment.studentImages;
  }

  ngOnInit() {
    this.userId = this.activatedroute.snapshot.queryParamMap.get('perentId');
    this.userType = this.activatedroute.snapshot.queryParamMap.get('user');
    console.log(this.userId, this.userType);
    if (this.userId) {
      this.getParentData(this.userId);
    }

    console.log('in parent component');
    this.badge = this.notification.length;
    this.getNotification();
    this.loaderService.loaderDismiss();
  }

  /**
   * @description - This function is getting parent data by calling the parent service,
   *  storing the data in parentDetails.
   * @param parentId - This parameter stores the id of parent
   */

  async getParentData(parentId) {
    const parentDetails = await this.parentService.getServerParentDetailsById(parentId);

    this.subscription = parentDetails.subscribe(
      res => {
        this.parentData = res['data'];
        this.studentId = this.parentData[0].student_details[0]._id;

        this.driverId = this.parentData[0].driver_details;
        this.initializeSidebarPages();
        this.getStudentData(this.studentId);
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
        //  this.getrouteData(this.driverId);
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
   * @description - This function is getting the student data by caling the student service
   * @param studentId - This parameter stores the id of student.
   */

  async getStudentData(studentId) {
    const studentDetails = await this.studentService.getServerStudentDetails(studentId);
    studentDetails.subscribe(data => {
      this.studentData = data['data'];
      this.vehicleId = this.studentData[0].route_details.vehicle_id;
      this.routeId = this.studentData[0].route_details._id;
      this.driverId = this.studentData[0].route_details.driver_id;
      this.getUserToken(this.routeId);
      this.initializeSidebarPages();
      this.loaderService.loaderDismiss();
    });
  }

  goToRoute() {
    /* this.router.navigate(['parent/single-bus-routes', this.userType, this.routeId]); */
    this.router.navigate(['parent/single-bus-routes'], {
      queryParams: { user: this.userType, routeId: this.routeId },
    });
  }

  goToLiveMap() {
    this.router.navigate(['parent/parent-view-map', this.userType, this.driverId]);
  }

  goToBusDetails() {
    this.router.navigate(['parent/bus-details', this.userType, this.vehicleId]);
  }

  /**
   * @description - This function is loading the side bar at the intial start
   *  which has routing to the other component like Profile, Student Information, About School,    *  Bus Details, Logout
   */
  initializeSidebarPages() {
    this.pages = [
      {
        title: 'Profile',
        url: `parent/profile/${this.userType}/${this.userId}`,
        icon: 'assets/profile/profile.png',
      },
      {
        title: 'Student Information',
        url: 'parent/student-details/' + this.userId,
        icon: 'assets/profile/student.png',
      },
      {
        title: 'About School',
        url: '/about-school',
        icon: 'assets/profile/school.png',
      },
      { title: 'Logout', url: '', icon: 'assets/profile/logout.png' },
    ];
  }

  getUserToken(route_id) {
    this.firebase
      .getToken()
      .then(token => {
        this.notificationService.setUserToken(route_id, token).subscribe();
      })
      .catch(error => console.error('Error getting token', error));
  }

  /**
   * This function receive notification from firebase
   */
  getNotification() {
    this.firebase.onNotificationOpen().subscribe(data => {
      console.log('notification data', data);
      if (data.wasTapped) {
        this.notification.push(data);
        // this.nativeStoreage.setItem('notificationData', data.body);
        console.log(this.notification.length);
        this.badge = this.notification.length;
      } else {
        this.notification.push(data);
        console.log(this.notification.length);
        this.badge = this.notification.length;
      }
    });
  }

  // Presenting model
  async presentModal() {
    this.badge = null;
    const modal = await this.modalController.create({
      component: NotificationComponent,
      componentProps: { notificationData: this.notification },
    });
    modal
      .onDidDismiss()
      .then(() => {})
      .catch();
    return await modal.present();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
