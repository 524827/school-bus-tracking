import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { ParentService } from '../../../services/parent.service';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'ngx-modal',
  templateUrl: './updateparent.component.html',
  styleUrls: ['./updateparent.component.scss'],
})

/**
 * @class - UpdateModalComponent
 */
export class UpdateParentComponent implements OnInit {
  /**
   * @member UpdateparentForm {Object} - Instance of FormGroup which stores the value of form.
   * @member Students {Array} - Array of students.
   * @member validation_messages {Any} - Stores the validation messages.
   * @member parentData {Array} - Array of parent data.
   * @member ParentprofileData - Stores the profile data of parent.
   */
  UpdateparentForm: FormGroup;
  Students: Array<any> = [];
  validation_messages: any;
  parentData: Array<any> = [];
  ParentprofileData;

  /**
   * @function ngOnInit() - It fetches the student data from student service, validation messages
   * assign to the form.
   */
  ngOnInit() {
    this.studentService.getstudentDetails().subscribe(data => {
      const studentdata = data['data'];
      console.log(studentdata);
      console.log(data);
      studentdata.forEach(res => {
        const studName = {
          students: res['student_name'],
          id: res['_id'],
        };
        this.Students.push(studName);
        console.log(studName);
      });
    });

    this.UpdateparentForm = this.formBuilder.group({
      parentName: [
        '',
        Validators.compose([
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z]*'),
          Validators.required,
        ]),
      ],
      father_mobileNumber: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      mother_mobileNumber: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      landline_Number: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      alternate_Number: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
          Validators.required,
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required,
        ]),
      ],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      students: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
    });
  }

  modalHeader = 'Update Parent Details';

  source: LocalDataSource = new LocalDataSource();

  /**
   * @description - Its having the instances of NgbActiveModal, FormBuilder,
   * ParentService, StudentSerivice.
   * @param activeModal - Instance of NgbActiveModal.
   * @param formBuilder - Instance of FormBuilder.
   * @param parentService - Instance of ParentService.
   * @param studentService - Istance of StudentService.
   */
  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private parentService: ParentService,
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
   * @description - Function to update the data.
   */
  update() {
    console.log('parent data in edit component', this.ParentprofileData);
    /* const data = {
      parentName: this.UpdateparentForm.value.parentName,
      father_mobileNumber: this.UpdateparentForm.value.father_mobileNumber,
      mother_mobileNumber: this.UpdateparentForm.value.mother_mobileNumber,
      landline_Number: this.UpdateparentForm.value.landline_Number,
      alternate_Number: this.UpdateparentForm.value.alternate_Number,
      email: this.UpdateparentForm.value.email,
      username: this.UpdateparentForm.value.username,
    }; */
    this.parentService
      .updateParentDetails(this.UpdateparentForm.value, this.ParentprofileData.parent_id)
      .subscribe(
        response => {
          console.log('update parent', response);
          this.parentService.sortParentData(response);
        },
        err => {
          console.log('Response error');
        });

    this.activeModal.close();
  }
}
