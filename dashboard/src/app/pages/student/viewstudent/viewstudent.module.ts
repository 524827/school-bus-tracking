import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { ViewstudentComponent } from './viewstudent.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdateStudentComponent } from '../updatestudent/updatestudent.component';

@NgModule({
  declarations: [ViewstudentComponent, UpdateStudentComponent],
  entryComponents: [UpdateStudentComponent],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewstudentComponent,
      },
    ]),
  ],
})
export class ViewStudentModule {}
