import { NgModule } from '@angular/core';
import { SchoolComponent } from './school.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    children: [
      {
        path: 'addschool',
        loadChildren: './addschool/addschool.module#AddschoolModule',
      },
      {
        path: 'viewschool',
        loadChildren: './viewschool/viewschool.module#ViewSchoolModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {}
