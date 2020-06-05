import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ValidationMsg } from '../../../model/validation';
import { RouteService } from '../../../services/route.service';
import { DriverService } from '../../../services/driver.service';
import { VehicleService } from '../../../services/vehicle.service';
import { RouteData } from '../../../model/route-details';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-editroute',
  templateUrl: './editroute.component.html',
  styleUrls: ['./editroute.component.scss'],
})
export class EditrouteComponent implements OnInit {
  public routeForm;
  routeDetails: RouteData;
  public driverName = [];
  public vehicleNumber = [];
  public validation_messages: any; // store validation messages
  constructor(
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private driverService: DriverService,
    private vehicleService: VehicleService,
    private activeModal: NgbActiveModal,
  ) {
    this.validation_messages = new ValidationMsg().validation_msg;
  }

  ngOnInit() {
    this.routeForm = this.formBuilder.group({
      routeID: ['', Validators.compose([Validators.required])],
      driver_id: ['', Validators.compose([Validators.required])],
      vehicle_id: ['', Validators.compose([Validators.required])],
    });

    this.getDriverDetails();
    this.getVehicleDetails();
  }
  /**
   * This function call when user submit the form
   */
  onSubmit() {
    //  const routeData: RouteData;
    const routeId = this.routeDetails.db_id;
    console.log(this.routeForm.value);
    const routeData = {
      db_id: routeId,
      route_id: this.routeForm.value.routeID,
      driver_id: this.routeForm.value.driver_id,
      vehicle_id: this.routeForm.value.vehicle_id,
    };
    this.routeService.updateRouteDetails(routeData).subscribe(res => {
      console.log('edit route data', res);
      this.routeService.sortRouteDetails(res);
    });
    this.activeModal.close();
  }

  /**
   *  Get Driver details from server
   */
  getDriverDetails(): void {
    this.driverService.getDriverDetails().subscribe(data => {
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
