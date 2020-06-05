import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewMapRoutingModule } from './view-map-routing.module';
import { ViewMapComponent } from './view-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewMapRoutingModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewMapComponent,
      },
    ]),
  ],
  declarations: [ViewMapComponent],
})
export class ViewMapModule {}
