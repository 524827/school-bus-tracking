import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
@NgModule({
  declarations: [StudentComponent],
  imports: [StudentRoutingModule],
})
export class StudentModule {}
