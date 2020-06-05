import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DriverService } from '../../../services/driver.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditdriverComponent } from '../editdriver/editdriver.component';
import { DriverDetails } from '../../../model/driver-details';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'ngx-viewdriver',
  templateUrl: './viewdriver.component.html',
  styleUrls: ['./viewdriver.component.scss'],
})
export class ViewdriverComponent implements OnInit {
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
      driver_name: {
        title: 'Driver Name',
        type: 'string',
      },
      driver_email: {
        title: 'Email',
        type: 'string',
      },
      driver_contact: {
        title: 'Contact Number',
        type: 'number',
      },
      license_number: {
        title: 'License Number',
        type: 'number',
      },
      adhar_number: {
        title: 'Adhar Number',
        type: 'number',
      },
      pan_number: {
        title: 'PAN Number',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private driverService: DriverService, private modalService: NgbModal) {
    /**
     * get all vehicle details from server
     */
  }
  ngOnInit() {
    this.driverService.getDriverDetails().subscribe(response => {
      this.driverService.sortDriverData(response);
    });

    this.driverService.subject.subscribe(res => {
      if (res) {
        console.log(res);
        this.source.load(res);
      }
    });
  }
  /**
   * Delete particular row from smart table
   * @event {} - event object
   */
  onDeleteConfirm(event): void {
    const driver_id = event.data.driver_id;
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.driverService.removeDriverDetails(driver_id).subscribe(
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
    const activeModal = this.modalService.open(EditdriverComponent, {
      size: 'lg',
      container: 'nb-layout',
    });
    activeModal.componentInstance.driverDetails = event.data;
  }
}
