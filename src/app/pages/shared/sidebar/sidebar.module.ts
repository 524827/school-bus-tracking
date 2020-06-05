import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SidebarComponent } from './sidebar.component';
import { SideBarRoutingModule } from './sidebar-routing.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, IonicModule ],
  exports: [SidebarComponent],
})
export class SideBarModule {}
