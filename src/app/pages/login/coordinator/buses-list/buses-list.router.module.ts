import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesListComponent } from './buses-list.component';

const routes: Routes = [
  // Route for buses-list compomnent.
  {
    path: '',
    component: BusesListComponent,
  },
  /* {
    path: 'coordinator',
    children: [
      {
        path: 'single-bus-map',
        loadChildren: '../buses-list/single-bus-map/single-bus-map.module#SingleBusMapModule'
      },
      {
        path: 'admin-bus-details',
        loadChildren: '../buses-list/admin-bus-details/admin-bus-details.module#AdminBusDetailsModule'
      }
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusesListComponentRoutingModule { }
