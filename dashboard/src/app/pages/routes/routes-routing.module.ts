import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesComponent } from './routes.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
    children: [
      {
        path: 'addroutes',
        loadChildren: './addroutes/addroutes.module#AddRoutesModule',
      },
      {
        path: 'viewroutes',
        loadChildren: './viewroutes/viewroutes.module#ViewRoutesModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
