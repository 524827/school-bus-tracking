import { NgModule } from '@angular/core';
import { AddparentComponent } from './addparent.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddparentComponent],
  imports: [
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddparentComponent,
      },
    ]),
  ],
})
export class AddParentModule {}
