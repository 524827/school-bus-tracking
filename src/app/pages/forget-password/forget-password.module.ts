import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ForgetPasswordComponent } from './forget-password.component';
import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ForgetPasswordComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForgetPasswordComponent,
      },
    ]),
    ForgetPasswordRoutingModule,
  ],
  providers: [],
})
export class ForgetPasswordModule {}
