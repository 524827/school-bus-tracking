import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusesListComponent } from './buses-list.component';
import { BusesListComponentRoutingModule } from './buses-list.router.module';
import { AdminBusDetailsModule } from './admin-bus-details/admin-bus-details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        // Route for buses-list compomnent.
        path: '',
        component: BusesListComponent,
      },
    ]),
    BusesListComponentRoutingModule,
  ],
  declarations: [BusesListComponent],
})
export class BusesListComponentModule {}
