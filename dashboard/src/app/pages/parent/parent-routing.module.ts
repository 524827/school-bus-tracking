import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'addparent',
        loadChildren: './addparent/addparent.module#AddParentModule',
      },
      {
        path: 'viewparent',
        loadChildren: './viewparent/viewparent.module#ViewParentModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
