import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { ParentService } from '../../../services/parent.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'ngx-addparent',
  templateUrl: './addparent.component.html',
  styleUrls: ['./addparent.component.scss'],
})

  /**
   * @class - AddparentComponent is a class to add parent in database.
   */
export class AddparentComponent implements OnInit {

  /**
   * @member {FormGroup} parentForm - Stores the data of the form.
   * @member {File} filesToUpload - Stores the details of file.
   * @member {Array} students - Stores id and name of student.
   * @member {Any} validation_messages - Stores the validation messages.
   */
  parentForm: FormGroup;
  filesToUpload: File;
  Students: Array<any> = [];
  public validation_messages: any;

  /**
   * @description - The constructor has the instances of StudentService, FormBuilder, ParentService.
   * @param studentService - Instance of StudentService.
   * @param formBuilder - Instance of FormBuilder.
   * @param parentService - Instance of ParentService.
   */
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private parentService: ParentService,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  /**
   * @description - In this function on initialization the student service is called and
   * the student data is fetched.
   */
  ngOnInit() {
    this.studentService.getstudentDetails().subscribe(data => {
      const studentdata = data['data'];
      console.log(studentdata);
      console.log(data);
      studentdata.map(res => {
        const studName = {
          students: res['student_name'],
          id: res['_id'],
        };
        this.Students.push(studName);
        console.log(studName);
      });
    });

    /**
     * @description - Validation messages.
     */
    this.parentForm = this.formBuilder.group({
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

  /**
   * @description - onSubmit function submits the data which is passed in the form.
   */
  onSubmit() {
    const data = {
      parentName: this.parentForm.value.parentName,
      father_mobileNumber: this.parentForm.value.father_mobileNumber,
      mother_mobileNumber: this.parentForm.value.mother_mobileNumber,
      landline_Number: this.parentForm.value.landline_Number,
      alternate_Number: this.parentForm.value.alternate_Number,
      email: this.parentForm.value.email,
      username: this.parentForm.value.username,
      password: this.parentForm.value.password,
      students: this.parentForm.value.students,
      photo: this.filesToUpload,
    };
    this.parentService.setParentDetails(data);
  }

  /**
   * @description - onClear function clear the form fields.
   */
  onClear() {
    this.parentForm.reset();
  }

  /**
   * @description - This function takes the file to its target.
   * @param fileInput - Stores the file path.
   */
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0];
    // console.log(this.filesToUpload);
  }
}
