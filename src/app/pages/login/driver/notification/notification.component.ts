import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})

/**
 * @class - NotificationComponent
 */
export class NotificationComponent implements OnInit {
  /**
   * @member {Array} notificationArray - Array to store notification
   */
  public notificationData;

  /**
   * @description - The constructor has the instance of LocalNotification
   * @param localnotifications - Instance of LocalNotification
   */
  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {
    console.log(this.notificationData);
  }

  /**
   * closeModal()
   * This function close the modal controller
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
