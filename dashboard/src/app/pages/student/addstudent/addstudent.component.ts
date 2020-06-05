import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { StudentService } from '../../../services/student.service';
import { VehicleService } from '../../../services/vehicle.service';
import { RouteService } from '../../../services/route.service';

@Component({
  selector: 'ngx-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss'],
})
/**
 * @class - AddstudentComponent
 */
export class AddstudentComponent implements OnInit {
  /**
   * @member {FormGroup} studentForm - Stores the form data.
   * @member {File} filesToUpload - Stores the file data.
   * @member {Any} validation_messages - Stores the validation messages.
   * @member {Array} gender - Stores the gender data.
   * @member {Array} studClass - Stores the classes.
   * @member {Array} dividion - Stores the divisions.
   */
  studentForm: FormGroup;
  filesToUpload: File;
  vehicles: Array<any> = [];
  routes: Array<any> = [];
  validation_messages: any; // store validation messages
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
   * @description - Its having the instances of FormBuilder, StudentService.
   * @param formBuilder - Instance of FormBuilder.
   * @param studentService - Instance of StudentService.
   */
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private vehicleService: VehicleService,
    private routeService: RouteService,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  /**
   * @description - Function implements the validation messgaes.
   */
  ngOnInit() {
    this.vehicleService.getVehicleDetails().subscribe(data => {
      const vehicledata = data['data'];
      console.log(vehicledata);
      console.log(data);

      vehicledata.map(res => {
        const vehicledetails = res['vehicle_details'];
        const vehicle = {
          vehicleNumber: vehicledetails.vehicle_number,
          id: res['_id'],
        };
        this.vehicles.push(vehicle);
        console.log(vehicle);
      });
    });

    this.routeService.getRouteDetails().subscribe(data => {
      const routedata = data['data'];
      console.log(routedata);
      console.log(data);
      routedata.map(
        res => {
          const route = {
            id: res['_id'],
          };
          this.routes.push(route);
          console.log(route);
        },
        err => {
          console.error(err);
        });
    });
    this.studentForm = this.formBuilder.group({
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

  /**
   * @description - Function submit the data of student.
   */

  onSubmit() {
    const data = {
      studentName: this.studentForm.value.studentName,
      gender: this.studentForm.value.gender,
      class: this.studentForm.value.class,
      division: this.studentForm.value.division,
      currentAddress: this.studentForm.value.currentAddress,
      permanentAddress: this.studentForm.value.permanentAddress,
      studentStop: this.studentForm.value.studentStop,
      vehicles: this.studentForm.value.vehicles,
      routes: this.studentForm.value.routes,
      photo: this.filesToUpload,
    };
    this.studentService.setstudentDetails(data);
  }

  /**
   * @description - Function clears the fields of the form.
   */
  onClear() {
    this.studentForm.reset();
  }

  /**
   * @description - Function is used to upload the file.
   * @param fileInput
   */
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0];
  }
}
