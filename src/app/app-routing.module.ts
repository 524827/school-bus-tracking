import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  //  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Route for the home.
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
  },

  // Route for the driver.
  {
    path: 'driver',
    loadChildren: '../app/pages/login/driver/driver.module#DriverModule',
    canActivate: [AuthGuardService],
  },
  // Route for the parent.
  {
    path: 'parent',
    loadChildren: '../app/pages/login/parent/parent.module#ParentModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'coordinator/:userType/:busCoordinatorId',
    loadChildren: '../app/pages/login/coordinator/coordinator.module#CoordinatorModule',
    canActivate: [AuthGuardService],
  },
  // Route for the forget password.
  {
    path: 'forget-password',
    loadChildren: '../app/pages/forget-password/forget-password.module#ForgetPasswordModule',
  },

  {
    path: 'route',
    loadChildren: '../app/pages/login/driver/route/route.module#RouteModule',
  },
  {
    path: 'profile/:userType/:userId',
    loadChildren: '../app/pages/shared/profile/profile.module#ProfileModule',
  },
  {
    path: 'bus-details/:vehicleId',
    loadChildren: '../app/pages/shared/bus-details/bus-details.module#BusDetailsModule',
  },
  {
    path: 'about-school',
    loadChildren: '../app/pages/shared/about-school/about-school.module#AboutSchoolModule',
  },
  {
    path: 'single-bus-map',
    loadChildren:
      '../app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.module#SingleBusMapModule',
  },
  {
    path: 'otp-verification',
    loadChildren:
      '../app/pages/forget-password/otp-verification/otp-verification.module#OtpVerificationComponentModule',
  },
  {
    path: 'reset-password',
    loadChildren:
      '../app/pages/forget-password/reset-password/reset-password.module#ResetPasswordComponentModule',
  },
  {
    path: 'admin-bus-details',
    loadChildren:
      '../app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.module#AdminBusDetailsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
