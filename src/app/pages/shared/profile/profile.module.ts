import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { EditProfileModule } from './editprofile/editprofile.module';
import {  FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileModule,

    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      },
    ]),
  ],
  providers: [],
})
export class ProfileModule {}
