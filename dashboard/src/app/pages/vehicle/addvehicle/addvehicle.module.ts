import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { AddvehicleComponent } from './addvehicle.component';
import { ButtonsModule } from '../../forms/buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddvehicleComponent],
  imports: [
    ThemeModule,
    ButtonsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddvehicleComponent,
      },
    ]),
  ],
})
export class AddVehicleModule {}
