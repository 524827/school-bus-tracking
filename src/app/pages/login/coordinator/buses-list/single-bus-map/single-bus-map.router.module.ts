import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleBusMapComponent } from './single-bus-map.component';

const routes: Routes = [
  /* {
   path: '',
   component: SingleBusMapComponent,
   children: [
     {
       path: 'single-bus-routes/:userType/:routeId',
       loadChildren:
         '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
     },
     {
       path: 'parent-view-map/:driverId',
       loadChildren: '../../../parent/parent-view-map/parent-view-map.module#ParentViewMapModule',
     },
     {
       path: '',
       redirectTo: 'single-bus-routes',
       pathMatch: 'full',
     },
   ],
 }, */

  {
    path: '',
    component: SingleBusMapComponent,
    children: [
      {
        path: 'bus-route',
        loadChildren:
          '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
      },
      {
        path: 'livemap/:userType/:driverId',
        loadChildren: '../../../../shared/view-map/view-map.module#ViewMapModule',
      },
      {
        path: '',
        redirectTo: 'bus-route',
        pathMatch: 'full',
      },
    ],
  },
];

/* const routes: Routes = [
  {
    // Route to admin-bus-details component.
    path: '',
    component: SingleBusMapComponent,
    children: [
      {
        // Route to bus-details component.{
        path: 'single-bus-routes/:userType/:routeId',
        children: [
          {
            path: '',
            loadChildren:
              '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
          },
        ],
      },
      // Route to admin-bus-details component.
      {
        path: 'parent-view-map/:driverId',
        children: [
          {
            path: '',
            loadChildren:
              '../../../parent/parent-view-map/parent-view-map.module#ParentViewMapModule',
          },
        ],
      },
      {
        // Route to bus-details component.{
        path: 'single-bus-routes',
        children: [
          {
            path: '',
            loadChildren:
              '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
          },
        ],
      },
    ],
  },
  {
    // Route to admin-bus-details component.
    path: '',
    redirectTo: 'single-bus-routes',
    pathMatch: 'full',
  },
]; */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleBusMapRouterModule {}
