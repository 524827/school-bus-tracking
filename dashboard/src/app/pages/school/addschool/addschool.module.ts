import { NgModule } from '@angular/core';
import { AddschoolComponent } from './addschool.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddschoolComponent],
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddschoolComponent,
      },
    ]),
  ],
})
export class AddschoolModule {}
