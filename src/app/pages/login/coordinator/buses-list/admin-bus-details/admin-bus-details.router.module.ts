import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBusDetailsComponent } from './admin-bus-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBusDetailsComponent,
    children: [
      {
        path: 'bus-route-details',
        loadChildren:
          '../admin-bus-details/bus-route-details/bus-route-details.module#BusRouteDetailsModule',
      },
      {
        path: 'bus-details/:userType/:vehicleId',
        loadChildren: '../../../../shared/bus-details/bus-details.module#BusDetailsModule',
      },
      {
        path: '',
        redirectTo: 'bus-route-details',
        pathMatch: 'full',
      },
    ],
  },
];

/* const routes: Routes = [
  {
    // Route to admin-bus-details component.
    path: '',
    component: AdminBusDetailsComponent,
    children: [
      // Route to admin-bus-details component.
      {
        path: 'bus-route-details/:vehicleId',
        children: [
          {
            path: '',
            loadChildren:
              '../admin-bus-details/bus-route-details/bus-route-details.module#BusRouteDetailsModule',
          },
        ],
      },
      {
        // Route to bus-details component.
        path: 'bus-details/:userType/:vehicleId',
        children: [
          {
            path: '',
            loadChildren: '../../../../shared/bus-details/bus-details.module#BusDetailsModule',
          },
        ],
      },
      {
        // Route to admin-bus-details component.
        path: '',
        redirectTo: 'bus-route-details',
        pathMatch: 'full',
      },
    ],
  },
  {
    // Route to admin-bus-details component.
    path: '',
    redirectTo: 'bus-route-details',
    pathMatch: 'full',
  },
]; */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBusDetailsRoutingModule {}
