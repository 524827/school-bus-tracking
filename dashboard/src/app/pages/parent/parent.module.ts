import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';
import { ParentRoutingModule } from './parent-routing.module';

@NgModule({
  imports: [ParentRoutingModule],
  declarations: [ParentComponent],
})
export class ParentModule {}
