import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { VehicleService } from '../../../services/vehicle.service';
import { EditvehicleComponent } from '../editvehicle/editvehicle.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss'],
})
export class ViewvehicleComponent implements OnInit {
  public vehicleDetails = [];
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      company_name: {
        title: 'Company Name',
        type: 'string',
      },
      school_name: {
        title: 'School Name',
        type: 'string',
      },
      vehicle_number: {
        title: 'Vehicle Number',
        type: 'string',
      },
      fuelType: {
        title: 'Fuel Type',
        type: 'string',
      },
      seatingCapacity: {
        title: 'Seating Capacity',
        type: 'number',
      },
      chassisNumber: {
        title: 'Chassis Number',
        type: 'string',
      },
      driver_name: {
        title: 'Driver Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private vehicleService: VehicleService, private modalService: NgbModal) {}

  ngOnInit() {
    /**
     * get all vehicle details from server
     */
    this.vehicleService.getVehicleDetails().subscribe(
      data => {
        console.log('in component', data);
        if (data) {
          this.vehicleService.sortVehicleData(data);
        }
      },
      err => {
        console.log('Response error');
      }
    );
    this.vehicleService.subject.subscribe(res => {
      console.log('in subject', res);
      if (res) {
        this.source.load(res);
      }
    });
  }
  /**
   * Delete particular row from smart table
   * @event {} - event object
   */
  onDeleteConfirm(event): void {
    const vehicle_id = event.data.vehicle_id;
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.vehicleService.removeVehicleDetails(vehicle_id).subscribe(
        response => {
          console.log(response);
        },
        err => {
          console.log('Response error');
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  /**
   * Update particular row from the smart table
   * @event {} - event object
   */
  onUserRowSelect(event): void {
    const activeModal = this.modalService.open(EditvehicleComponent, {
      size: 'lg',
      container: 'nb-layout',
    });
    activeModal.componentInstance.vehicleDetails = event.data;
  }
}
