import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { SchoolService } from '../../../services/school.service';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentService } from '../../../services/student.service';
import { VehicleService } from '../../../services/vehicle.service';
import { DriverService} from '../../../services/driver.service';


@Component({
  selector: 'ngx-modal',
  templateUrl: './updateschool.component.html',
  styleUrls: ['./updateschool.component.scss'],
})

  /**
   * @class - UpdateSchoolComponent
   */
export class UpdateSchoolComponent implements OnInit {

  /**
   * @member {FormGroup} UpdateschoolForm - Stores the school form field data.
   * @member {Any} validation_messages - Stores the validation messgaes
   * @member {File} filesToUpload - Stores the file which has to be uploaded.
   * @member {Any} SchoolprofileData - Stores the school profile details.
   */
  UpdateschoolForm: FormGroup;
  Students: Array<any> = [];
  vehicles: Array<any> = [];
  Driver: Array<any> = [];
  validation_messages: any;
  // parentData: Array<any> = [];
  filesToUpload: File;
  SchoolprofileData;

  /**
   * @description - Function implements the validation messages.
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

    this.driverService.getDriverDetails().subscribe(data => {
      const driverdata = data['data'];
      console.log(driverdata);
      console.log(data);

      driverdata.map(res => {
        // const driverdetails = res['vehicle_details'];
        const driver = {
          driverName: res['driver_name'],
          id: res['_id'],
        };
        this.Driver.push(driver);
        console.log(driver);
      });
    });

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

    this.UpdateschoolForm = this.formBuilder.group({
      schoolName: [
        '',
        Validators.compose([Validators.required /* Validators.pattern('[a-zA-Z]') */]),
      ],
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
      student: ['', Validators.compose([Validators.required])],
      vehicle: ['', Validators.compose([Validators.required])],
      driver: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
    });
  }

  modalHeader = 'Update School Details';

  source: LocalDataSource = new LocalDataSource();

  /**
   * @description - Its having the instances of NgbActiveModal, FormBuilder, SchoolService.
   * @param activeModal - Instnace of NgbActiveModal.
   * @param formBuilder - Instance of FormBuilder.
   * @param schoolService - Instance of SchoolService.
   */
  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private schoolService: SchoolService,
    private studentService: StudentService,
    private vehicleService: VehicleService,
    private driverService: DriverService,
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
   * @description - Function to update the details of school.
   */
  update() {
    console.log(this.SchoolprofileData);
    const data = {
      schoolName: this.UpdateschoolForm.value.schoolName,
      branchName: this.UpdateschoolForm.value.branchName,
      officeNumber: this.UpdateschoolForm.value.officeNumber,
      officeEmail: this.UpdateschoolForm.value.officeEmail,
      address: this.UpdateschoolForm.value.address,
      student: this.UpdateschoolForm.value.student,
      vehicle: this.UpdateschoolForm.value.vehicle,
      driver: this.UpdateschoolForm.value.driver,
      photo: this.filesToUpload,
      id: this.SchoolprofileData.school_id,
    };
    this.schoolService.updateSchoolDetails(data, this.SchoolprofileData.school_id).subscribe(response => {
      this.schoolService.sortSchoolData(response);
    },
      err => {
        console.log('Response error');
      });
    this.activeModal.close();
  }

  /**
   * @description - Function to upload the file.
   * @param fileInput
   */
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0];
  }
}


