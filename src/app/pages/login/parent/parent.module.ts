import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SideBarModule } from '../../shared/sidebar/sidebar.module';
import { ParentComponent } from './parent.component';
import { ParentRoutingModule } from './parent-routing.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [CommonModule, ParentRoutingModule, FormsModule, SideBarModule, IonicModule],
  declarations: [ParentComponent, NotificationComponent],
  entryComponents: [NotificationComponent],
})
export class ParentModule {}
