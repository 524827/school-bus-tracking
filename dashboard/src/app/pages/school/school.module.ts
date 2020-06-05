import { NgModule } from '@angular/core';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';

@NgModule({
  imports: [SchoolRoutingModule],
  declarations: [SchoolComponent],
})
export class SchoolModule {}
