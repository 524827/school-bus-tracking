import { NgModule } from '@angular/core';
import { ViewparentComponent } from './viewparent.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdateParentComponent} from '../../parent/updateparent/updateparent.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewparentComponent,
      },
    ]),
  ],
  declarations: [ViewparentComponent, UpdateParentComponent],
  entryComponents: [UpdateParentComponent],
})
export class ViewParentModule {}
