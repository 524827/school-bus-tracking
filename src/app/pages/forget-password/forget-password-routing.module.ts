import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';

const routes: Routes = [
  /*  {
    path: '',
    component: ForgetPasswordComponent,
    children: [
      {
        path: '/otp-verification',
        loadChildren:
          '../app/pages/forget-password/otp-verification/otp-verification.module#OtpVerificationComponentModule',
      },
    ],
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPasswordRoutingModule {}
