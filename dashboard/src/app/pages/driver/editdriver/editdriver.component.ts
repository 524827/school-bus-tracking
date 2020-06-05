import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { DriverService } from '../../../services/driver.service';
import { SchoolService } from '../../../services/school.service';
import { DriverDetails } from '../../../model/driver-details';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-editdriver',
  templateUrl: './editdriver.component.html',
  styleUrls: ['./editdriver.component.scss'],
})
export class EditdriverComponent implements OnInit {
  driverDetails: DriverDetails;
  driverForm: FormGroup;
  fileToUpload: Array<File> = [];
  public validation_messages: any; // store validation messages

  schoolName = [];
  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private activeModal: NgbActiveModal,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  ngOnInit() {
    console.log(this.driverDetails);
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
    });
  }
  onSubmit() {
    const driverId = this.driverDetails.driver_id;
    console.log(driverId);
    this.driverService
      .updateDriverDetails(driverId, this.driverForm.value, this.fileToUpload)
      .subscribe(response => {
        this.driverService.sortDriverData(response);
      });
    this.activeModal.close();
  }

  handleFileInput(event) {
    this.fileToUpload.push(<File>event.target.files[0]);
  }
}
