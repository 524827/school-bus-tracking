import { NgModule } from '@angular/core';
import { AdddriverComponent } from './adddriver.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../../@theme/theme.module';
import { ButtonsModule } from '../../forms/buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdddriverComponent],
  imports: [
    ThemeModule,
    ButtonsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdddriverComponent,
      },
    ]),
  ],
})
export class AddDriverModule {}
