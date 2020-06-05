import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SingleBusRoutesRoutingModule } from './single-bus-routes-routing.module';
import { SingleBusRoutesComponent } from './single-bus-routes.component';
import { TabModule } from '../../shared/tab/tab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabModule,
    SingleBusRoutesRoutingModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SingleBusRoutesComponent,
      },
    ]),
  ],
  declarations: [SingleBusRoutesComponent],
})
export class SingleBusRoutesModule {}
