import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewschoolComponent } from './viewschool.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdateSchoolComponent } from '../updateschool/updateschool.component';

@NgModule({
  declarations: [ViewschoolComponent, UpdateSchoolComponent],
  entryComponents: [UpdateSchoolComponent],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewschoolComponent,
      },
    ]),
  ],
})
export class ViewSchoolModule {}
