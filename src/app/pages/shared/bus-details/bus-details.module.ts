import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { SideBarModule } from '../sidebar/sidebar.module';
import { BusDetailsComponent } from './bus-details.component';
import { BusDetailsRoutingModule } from './bus-details-routing.module';

@NgModule({
  declarations: [BusDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    BusDetailsRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: BusDetailsComponent,
      },
    ]),
  ],
})
export class BusDetailsModule {}
