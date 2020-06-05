import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentDetailsRoutingModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentDetailsComponent,
      },
    ]),
  ],
  declarations: [StudentDetailsComponent],
})
export class StudentDetailsModule {}
