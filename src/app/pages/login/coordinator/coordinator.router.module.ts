import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinatorComponent } from './coordinator.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorComponent,
    children: [
      {
        // Route for buses-list compomnent.
        path: 'buses-list/:userType',
        children: [
          {
            path: '',
            loadChildren: '../coordinator/buses-list/buses-list.module#BusesListComponentModule',
            canActivate: [AuthGuardService],
          },
        ],
      },

      // Route for bus-route compomnent.
      {
        path: 'bus-route',
        children: [
          {
            path: '',
            loadChildren: '../coordinator/bus-route/bus-route.module#BusRouteComponentModule',
          },
        ],
      },

      // Route for buses-list compomnent.
      {
        path: '',
        redirectTo: 'buses-list/busCoordinator',
        pathMatch: 'full',
      },
    ],
  },

  // Route for buses-list compomnent.
  {
    path: '',
    redirectTo: 'buses-list/busCoordinator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorComponentRoutingModule {}
