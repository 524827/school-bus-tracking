import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddroutesComponent } from './addroutes.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../bootstrap/buttons/buttons.module';

@NgModule({
  declarations: [AddroutesComponent],
  imports: [
    ThemeModule,
    ReactiveFormsModule,
    ButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddroutesComponent,
      },
    ]),
  ],
})
export class AddRoutesModule {}
