import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { DriverService } from '../../../services/driver.service';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'ngx-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.scss'],
})
export class AdddriverComponent implements OnInit {
  driverForm: FormGroup;
  fileToUpload: Array<File> = [];
  public validation_messages: any; // store validation messages

  schoolName = [];
  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private schoolService: SchoolService,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      driverName: ['', Validators.compose([Validators.required])],
      driverEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      ],
      primNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
        ]),
      ],
      secNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[0-9]+'),
        ]),
      ],
      parmanentAddr: ['', Validators.compose([Validators.required])],
      currentAddr: ['', Validators.compose([Validators.required])],
      licenseNumber: ['', Validators.compose([Validators.required])],
      adharNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(12),
          Validators.pattern('[0-9]+'),
        ]),
      ],
      panNumber: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      school_id: ['', Validators.compose([Validators.required])],
    });
    this.getSchoolDetails();
  }
  onSubmit() {
    this.driverService.setDriverDetails(this.driverForm.value, this.fileToUpload).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });
  }

  handleFileInput(event) {
    this.fileToUpload.push(<File>event.target.files[0]);
  }

  /**
   * Get all school name from server
   */
  getSchoolDetails() {
    this.schoolService.getschoolDetails().subscribe(
      res => {
        // this.schoolName = res['data'];
        const schoolData = res['data'];
        schoolData.map(response => {
          const school = {
            school_name: response.school_name,
            school_id: response._id,
          };
          this.schoolName.push(school);
        });
      },
      err => {
        console.log('response error', err);
      });
  }
}
