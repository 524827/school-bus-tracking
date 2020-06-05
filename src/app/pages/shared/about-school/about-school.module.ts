import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { SideBarModule } from '../sidebar/sidebar.module';
import { AboutSchoolComponent } from './about-school.component';
import { AboutSchoolRoutingModule } from './about-school-routing.module';

@NgModule({
  declarations: [AboutSchoolComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AboutSchoolRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutSchoolComponent,
      },
    ]),
  ],
})
export class AboutSchoolModule {}
