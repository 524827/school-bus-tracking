import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CoordinatorComponent } from './coordinator.component';
import { RouterModule } from '@angular/router';
import { SideBarModule } from '../../shared/sidebar/sidebar.module';
import { CoordinatorComponentRoutingModule } from './coordinator.router.module';
import { BusesListComponent } from './buses-list/buses-list.component';

import { BusesListComponentModule } from './buses-list/buses-list.module';

import { BusRouteComponentModule } from './bus-route/bus-route.module';
import { TabModule } from '../../shared/tab/tab.module';

@NgModule({
  declarations: [CoordinatorComponent],
  imports: [CommonModule, IonicModule, TabModule, CoordinatorComponentRoutingModule],
  providers: [],
})
export class CoordinatorModule {}
