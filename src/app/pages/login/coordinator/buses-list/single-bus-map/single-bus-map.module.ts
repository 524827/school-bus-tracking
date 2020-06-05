import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SingleBusMapComponent } from './single-bus-map.component';
import { SingleBusMapRouterModule } from './single-bus-map.router.module';
import { SingleBusRoutesModule } from '../../../../shared/single-bus-routes/single-bus-routes.module';
import { TabModule } from 'src/app/pages/shared/tab/tab.module';

@NgModule({
  declarations: [SingleBusMapComponent],
  imports: [
    TabModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        // Route for single-bus-map compomnent.
        path: '',
        component: SingleBusMapComponent,
      },
    ]),
    SingleBusMapRouterModule,
    SingleBusRoutesModule,
  ],
  providers: [],
})
export class SingleBusMapModule {}
