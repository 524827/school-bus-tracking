import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddstudentComponent],
  imports: [
    ThemeModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddstudentComponent,
      },
    ]),
  ],
})
export class AddStudentModule {}
