import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DriverComponent } from './driver.component';
import { SideBarModule } from '../../shared/sidebar/sidebar.module';
import { DriverRoutingModule } from './driver-routing.module';
import { TabModule } from '../../shared/tab/tab.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [DriverComponent, NotificationComponent],
  entryComponents: [NotificationComponent],
  imports: [CommonModule, DriverRoutingModule, TabModule, SideBarModule, IonicModule],
  providers: [],
})
export class DriverModule {}
