import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: ECommerceComponent,
      },
      /**
       * where is my bus routes start
       */
      {
        path: 'school',
        loadChildren: './school/school.module#SchoolModule',
      },
      {
        path: 'parent',
        loadChildren: './parent/parent.module#ParentModule',
      },
      {
        path: 'driver',
        loadChildren: './driver/driver.module#DriverModule',
      },
      {
        path: 'vehicle',
        loadChildren: './vehicle/vehicle.module#VehicleModule',
      },
      {
        path: 'routes',
        loadChildren: './routes/routes.module#RoutesModule',
      },
      {
        path: 'student',
        loadChildren: './student/student.module#StudentModule',
      },
      /**
       * where is my bus routes end
       */
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
