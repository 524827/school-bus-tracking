import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DriverbusdetailsComponent } from './driverbusdetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DriverbusdetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DriverbusdetailsComponent,
      },
    ]),
  ],
  providers: [],
})
export class DriverBusDetailsModule {}
