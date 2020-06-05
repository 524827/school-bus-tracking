import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { ViewvehicleComponent } from './viewvehicle.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditvehicleComponent } from '../editvehicle/editvehicle.component';

@NgModule({
  declarations: [ViewvehicleComponent, EditvehicleComponent],
  entryComponents: [EditvehicleComponent],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewvehicleComponent,
      },
    ]),
  ],
})
export class ViewVehicleModule {}
