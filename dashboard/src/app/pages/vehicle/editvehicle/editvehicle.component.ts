import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { VehicleService } from '../../../services/vehicle.service';
import { SchoolService } from '../../../services/school.service';
import { DriverService } from '../../../services/driver.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetails } from '../../../model/vehicle-details';

@Component({
  selector: 'ngx-editvehicle',
  templateUrl: './editvehicle.component.html',
  styleUrls: ['./editvehicle.component.scss'],
})
export class EditvehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  schoolName = [];
  fileToUpload: File;
  public vehicleDetails;
  public driverName = [];
  public validation_messages: any; // store validation messages
  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private schoolService: SchoolService,
    private driverService: DriverService,
    private activeModal: NgbActiveModal,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  ngOnInit() {
    /**
     * vehicle form controls
     */
    this.vehicleForm = this.formBuilder.group({
      vehicleNumber: ['', Validators.compose([Validators.required])],
      companyName: ['', Validators.compose([Validators.required])],
      modalType: ['', Validators.compose([Validators.required])],
      fuelType: ['', Validators.compose([Validators.required])],
      chassisNumber: ['', Validators.compose([Validators.required])],
      seatingCapacity: ['', Validators.compose([Validators.required])],
      school_id: ['', Validators.compose([Validators.required])],
      driver_id: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
    });
    this.getSchoolDetails();
    this.getDriverDetails();
  }
  /**
   * This function get all form control values on button click
   */
  onSubmit() {
    const vehicle_id = this.vehicleDetails.vehicle_id;
    console.log(vehicle_id);
    const data = {
      vehicle_id: vehicle_id,
      vehicle_number: this.vehicleForm.value.vehicleNumber,
      company_name: this.vehicleForm.value.companyName,
      fuelType: this.vehicleForm.value.fuelType,
      modalType: this.vehicleForm.value.modalType,
      chassisNumber: this.vehicleForm.value.chassisNumber,
      seatingCapacity: this.vehicleForm.value.seatingCapacity,
      school_id: this.vehicleForm.value.school_id,
      driver_id: this.vehicleForm.value.driver_id,
    };
    this.vehicleService.updateVehicleDetails(data, this.fileToUpload).subscribe(
      res => {
        console.log(res);
        if (res) {
          this.vehicleService.sortVehicleData(res);
        }
      },
      err => {
        console.log('request unsuccessfull');
      });
    this.activeModal.close();
  }
  /**
   *This function get image from view
   * @param event - store image and its path
   */
  handleFileInput(event) {
    this.fileToUpload = <File>event.target.files[0];
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
  /**
   *  Get Driver details from server
   */
  getDriverDetails(): void {
    this.driverService.getDriverDetails().subscribe(
      data => {
        console.log(data);
        // this.driverName = data['data'];
        const driverData = data['data'];
        driverData.map(response => {
          const driver = {
            driver_name: response.driver_name,
            driver_id: response._id,
          };
          this.driverName.push(driver);
        });
      },
      err => {
        console.log('response error', err);
      });
  }
}
