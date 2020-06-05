import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { RouteService } from '../../../services/route.service';
import { RouteData } from '../../../model/route-details';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditrouteComponent } from '../editroute/editroute.component';

@Component({
  selector: 'ngx-viewroutes',
  templateUrl: './viewroutes.component.html',
  styleUrls: ['./viewroutes.component.scss'],
})
export class ViewroutesComponent implements OnInit {
  public routeDetails = [];
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
      route_id: {
        title: 'Route Id',
        type: 'string',
      },
      driver_name: {
        title: 'Driver Name',
        type: 'string',
      },
      vehicle_number: {
        title: 'Vehicle Number',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private routeService: RouteService, private modalService: NgbModal) {}

  ngOnInit() {
    this.routeService.getRouteData().subscribe(data => {
      console.log(data);
      this.routeService.sortRouteDetails(data);
      // const response = data['data'];

      /*  response.forEach(res => {
        const routeData = {
          route_id: res['route_id'],
          driver_name: res['driver_id'].driver_name,
          vehicle_number: res['vehicle_id'].vehicle_details.vehicle_number,
        };
        this.routeDetails.push(routeData);
        console.log(this.routeDetails);
      }); */
    });
    this.routeService.subject.subscribe(response => {
      console.log(response);
      if (response) {
        this.source.load(response);
      }
    });
  }

  onDeleteConfirm(event): void {
    const route_id = event.data.db_id;
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.routeService.removeRouteDetails(route_id).subscribe(
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

  onUserRowSelect(event): void {
    const activeModal = this.modalService.open(EditrouteComponent, {
      size: 'lg',
      container: 'nb-layout',
    });
    activeModal.componentInstance.routeDetails = event.data;
  }
}
