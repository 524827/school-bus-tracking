import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewroutesComponent } from './viewroutes.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../@theme/theme.module';
import { EditrouteComponent } from '../editroute/editroute.component';

@NgModule({
  declarations: [ViewroutesComponent, EditrouteComponent],
  entryComponents: [EditrouteComponent],
  imports: [
    Ng2SmartTableModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewroutesComponent,
      },
    ]),
  ],
})
export class ViewRoutesModule {}
