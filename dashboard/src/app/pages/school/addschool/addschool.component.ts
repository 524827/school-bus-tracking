import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { SchoolService } from '../../../../app/services/school.service';
import { ValidationMsg } from '../../../model/validation';

@Component({
  selector: 'ngx-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.scss'],
})

  /**
   * @class - AddschoolComponent
   */
export class AddschoolComponent implements OnInit {

  /**
   * @member {Object} schoolForm - Instance of FormGroup.
   * @member filesToUpload - Instance to upload a file.
   * @member {Any} validation_messages - Stores the validation messages.
   */
  schoolForm: FormGroup;
  filesToUpload: File;
  validation_messages: any; // store validation messages

  /**
   * @description - Constructor is having instances of FormBuilder, SchoolService
   * @param formBuilder- Instance of FormBuilder
   * @param schoolService - Instance of SchoolService.
   */
  constructor(private formBuilder: FormBuilder, private schoolService: SchoolService) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  /**
   * @description - Function implements validation function.
   */

  ngOnInit() {
    this.schoolForm = this.formBuilder.group({
      schoolName: ['', Validators.compose([Validators.required /* Validators.pattern('[a-zA-Z]') */])],
      branchName: ['', Validators.compose([Validators.required])],
      officeNumber: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      officeEmail: [
        '',
        Validators.compose([
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required,
        ]),
      ],
      address: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
    });
  }

  /**
   * @description - Function submit the school data.
   */
  async onSubmit() {
    const data = {
      schoolName: this.schoolForm.value.schoolName,
      branchName: this.schoolForm.value.branchName,
      officeNumber: this.schoolForm.value.officeNumber,
      officeEmail: this.schoolForm.value.officeEmail,
      address: this.schoolForm.value.address,
      photo: this.filesToUpload,
    };
    this.schoolService.setSchoolDetails(data);
  }

  /**
   * @description - Function clears the fields of the form.
   */

  onClear() {
    this.schoolForm.reset();
  }

  /**
   * @description - Function to upload a file.
   * @param fileInput
   */
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0];
  }
}
