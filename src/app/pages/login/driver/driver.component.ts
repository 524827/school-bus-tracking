import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/sidebar';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ModalController } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
  // this variable store the side menu content for driver
  public pages: Array<MenuItem>;
  private userData: object;
  private userId: string;
  private userType: string;
  public badge;
  public notification = [];
  constructor(
    private router: ActivatedRoute,
    private loaderService: LoaderService,
    public modalController: ModalController,
    private firebase: Firebase
  ) {}
  ngOnInit() {
    this.getNotification();
    this.loaderService.loaderDismiss();
    this.userId = this.router.snapshot.queryParamMap.get('driverId');
    this.userType = this.router.snapshot.queryParamMap.get('user');
    console.log(this.userType);
    // this.pages variable contains side menu item
    this.pages = [
      {
        title: 'Profile',
        url: `driver/profile/${this.userType}/${this.userId}`,
        icon: 'assets/profile/profile.png',
      },
      { title: 'About school', url: 'driver/aboutschool', icon: 'assets/profile/school.png' },
      { title: 'Location', url: '', icon: 'assets/profile/location.png' },
      {
        title: 'Bus Details',
        url: `driver/busdetails/${this.userId}`,
        icon: 'assets/profile/busLogo.png',
      },
      { title: 'Logout', url: '', icon: 'assets/profile/logout.png' },
    ];
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

  /**
   * This method call notification is push in application
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
}
