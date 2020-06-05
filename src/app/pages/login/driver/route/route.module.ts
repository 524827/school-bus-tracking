import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouteComponent } from './route.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [RouteComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouteComponent,
      },
    ]),
  ],
})

export class RouteModule{}

