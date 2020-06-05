import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'ngx-modal',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss'],
})

  /**
   * @class - UpdateStudentComponent
   */
export class UpdateStudentComponent implements OnInit {

  /**
   * @member {FormGroup} UpdatestudentForm - Stores the data of form fields.
   * @member {Any} validation_messages - Stores the validation messages
   * @member {File} filesToUpload - Stores the file details.
   * @member {Object} studentProfileData - Stores the student profile data.
   * @member {Array} gender - Stores gender details.
   * @member {Array} studeClass - Stores the class details.
   * @member {Array} division - Stores the division details.
   */
  UpdatestudentForm: FormGroup;
  Students: Array<any> = [];
  validation_messages: any;
  filesToUpload: File;
  studentProfileData;

  gender = ['Male', 'Female'];
  studClass = [
    '1st Standard',
    '2nd Standard',
    '3rd Standard',
    '4th Standard',
    '5th Standard',
    '6th Standard',
    '7th Standard',
  ];
  division = ['A', 'B', 'C', 'D'];

  /**
   * @description - Function to implements validation messages.
   */
  ngOnInit() {
    this.UpdatestudentForm = this.formBuilder.group({
      studentName: [
        '',
        Validators.compose([
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z]*'),
          Validators.required,
        ]),
      ],
      gender: ['', Validators.compose([Validators.required])],
      class: ['', Validators.compose([Validators.required])],
      division: ['', Validators.compose([Validators.required])],
      currentAddress: ['', Validators.compose([Validators.required])],
      permanentAddress: ['', Validators.compose([Validators.required])],
      studentStop: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
    });
  }

  modalHeader = 'Update Student Details';

  /**
   * @description - Its having instanes of NgbActiveModal, FormBuilder, StudentService.
   * @param activeModal- Instance of NgbActiveModal
   * @param formBuilder - Instance of FormBuilder
   * @param studentService - Instance of StudentService
   */
  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  /**
   * @description - Function to close the modal.
   */
  closeModal() {
    this.activeModal.close();
  }

  /**
   * @description - Function to update the student data.
   */
  update() {
    console.log(this.UpdatestudentForm.value);

    const data = {
      studentName: this.UpdatestudentForm.value.studentName,
      gender: this.UpdatestudentForm.value.gender,
      class: this.UpdatestudentForm.value.class,
      division: this.UpdatestudentForm.value.division,
      currentAddress: this.UpdatestudentForm.value.currentAddress,
      permanentAddress: this.UpdatestudentForm.value.permanentAddress,
      studentStop: this.UpdatestudentForm.value.studentStop,
      photo: this.filesToUpload,
      id: this.studentProfileData.student_id,
    };
    console.log(this.studentProfileData.id);
    this.studentService.updateStudentDetails(data, this.studentProfileData.id).subscribe(response => {
      console.log('update parent', response);
      this.studentService.sortStudentData(response);
    },
      err => {
        console.log('Response error');
      });
  }

  /**
   * @description - Function to upload file.
   * @param fileInput
   */

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0];
  }
}
