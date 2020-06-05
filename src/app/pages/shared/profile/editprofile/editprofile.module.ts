import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EditprofileComponent } from './editprofile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditprofileComponent],
  entryComponents: [EditprofileComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class EditProfileModule {}
