import { NgModule } from '@angular/core';
import { RoutesComponent } from './routes.component';
import { RoutesRoutingModule } from './routes-routing.module';
import {RouteService } from '../../services/route.service';
@NgModule({
  declarations: [RoutesComponent],
  imports: [RoutesRoutingModule],
  providers: [RouteService],
})
export class RoutesModule {}

