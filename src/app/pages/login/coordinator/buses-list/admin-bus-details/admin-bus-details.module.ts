import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminBusDetailsComponent } from './admin-bus-details.component';
import { AdminBusDetailsRoutingModule } from './admin-bus-details.router.module';
@NgModule({
  declarations: [AdminBusDetailsComponent],
  imports: [IonicModule, CommonModule, FormsModule, AdminBusDetailsRoutingModule],
})
export class AdminBusDetailsModule {}
