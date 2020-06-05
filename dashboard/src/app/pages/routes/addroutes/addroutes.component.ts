import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { RouteService } from '../../../services/route.service';
import { DriverService } from '../../../services/driver.service';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'ngx-addroutes',
  templateUrl: './addroutes.component.html',
  styleUrls: ['./addroutes.component.scss'],
})
export class AddroutesComponent implements OnInit {
  public routeForm;
  public driverName = [];
  public vehicleNumber = [];
  public validation_messages: any; // store validation messages
  constructor(
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private driverService: DriverService,
    private vehicleService: VehicleService
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  /**
   * Contains form control data
   */
  ngOnInit() {
    this.routeForm = this.formBuilder.group({
      routeID: ['', Validators.compose([Validators.required])],
      driver_id: ['', Validators.compose([Validators.required])],
      vehicle_id: ['', Validators.compose([Validators.required])],
      routeDetails: this.formBuilder.array([this.addRouteDetails()]),
    });

    this.getDriverDetails();
    this.getVehicleDetails();
  }

  /**
   * This function call when user submit the form
   */
  onSubmit() {
    console.log(this.routeForm.value);
    console.log(this.routeForm.value.routeDetails);
    this.routeService.setRouteDetails(this.routeForm.value).subscribe(res => {
      console.log(res);
    });
  }

  /**
   * This function contains form control array
   */
  addRouteDetails(): FormGroup {
    return this.formBuilder.group({
      location: ['', Validators.compose([Validators.required])],
      morningTime: ['', Validators.compose([Validators.required])],
      afternoonTime: ['', Validators.compose([Validators.required])],
    });
  }

  /**
   * This function add input field dynamically
   */
  addButtonClick(): void {
    (<FormArray>this.routeForm.get('routeDetails')).push(this.addRouteDetails());
  }

  /**
   *  Get Driver details from server
   */
  getDriverDetails(): void {
    this.driverService.getDriverDetails().subscribe(data => {
      // this.driverName = data['data'];
      const driverData = data['data'];
      driverData.map(response => {
        const driver = {
          driver_name: response.driver_name,
          driver_id: response._id,
        };
        this.driverName.push(driver);
      });
    });
  }

  /**
   * Get Vehicle details from server
   */
  getVehicleDetails(): void {
    this.vehicleService.getVehicleDetails().subscribe(data => {
      const VehicleData = data['data'];
      VehicleData.map(response => {
        const vehicle = {
          vehicle_number: response.vehicle_details.vehicle_number,
          vehicle_id: response._id,
        };
        this.vehicleNumber.push(vehicle);
      });
    });
  }
}
