import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './driver.component';

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
    children: [
      {
        path: 'adddriver',
        loadChildren: './adddriver/adddriver.module#AddDriverModule',
      },
      {
        path: 'viewdriver',
        loadChildren: './viewdriver/viewdriver.module#ViewDriverModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
