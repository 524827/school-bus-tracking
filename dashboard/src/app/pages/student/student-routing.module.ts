import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'addstudent',
        loadChildren: './addstudent/addstudent.module#AddStudentModule',
      },
      {
        path: 'viewstudent',
        loadChildren: './viewstudent/viewstudent.module#ViewStudentModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
