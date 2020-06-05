import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'profile/:userType/:userId',
        loadChildren: '../../shared/profile/profile.module#ProfileModule',
      },
      {
        path: 'student-details/:parentId',
        loadChildren: '../parent/student-details/student-details.module#StudentDetailsModule',
      },
      {
        path: 'bus-details/:userType/:vehicleId',
        loadChildren: '../../shared/bus-details/bus-details.module#BusDetailsModule',
      },
      {
        path: 'parent-view-map/:userType/:driverId',
        loadChildren: '../../shared/view-map/view-map.module#ViewMapModule',
      },
      {
        path: 'single-bus-routes',
        loadChildren:
          '../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
