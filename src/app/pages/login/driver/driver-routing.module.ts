import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './driver.component';

const routes: Routes = [
  // routes for Tab Menu
  {
    path: '',
    component: DriverComponent,
    children: [
      {
        path: 'bus-route',
        loadChildren: '../driver/route/route.module#RouteModule',
      },
      {
        path: 'livemap/:userType/:driverId',
        loadChildren: '../driver/map/map.module#MapModule',
      },
      {
        path: '',
        redirectTo: 'bus-route',
        pathMatch: 'full',
      },
    ],
  },

  // driver routes side menu
  {
    path: '',
    children: [
      {
        path: 'profile/:userType/:userId',
        loadChildren: '../../shared/profile/profile.module#ProfileModule',
      },
      {
        path: 'aboutschool',
        loadChildren: '../../shared/about-school/about-school.module#AboutSchoolModule',
      },
      {
        path: 'busdetails/:userId',
        loadChildren: '../driver/driverbusdetails/driverbusdetails.module#DriverBusDetailsModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
