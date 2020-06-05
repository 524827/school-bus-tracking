import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusRouteDetailsComponent } from './bus-route-details.component';

@NgModule({
  declarations: [BusRouteDetailsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        // Route for bus-route-details.
        path: '',
        component: BusRouteDetailsComponent,
      },
    ]),
  ],
})
export class BusRouteDetailsModule {}
