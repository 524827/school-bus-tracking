import { NgModule } from '@angular/core';
import { ViewdriverComponent } from './viewdriver.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../@theme/theme.module';
import { EditdriverComponent } from '../editdriver/editdriver.component';

@NgModule({
  declarations: [ViewdriverComponent, EditdriverComponent],
  entryComponents: [EditdriverComponent],
  imports: [
    Ng2SmartTableModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewdriverComponent,
      },
    ]),
  ],
})
export class ViewDriverModule {}
