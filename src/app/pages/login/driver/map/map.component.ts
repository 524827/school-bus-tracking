import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DriverService } from '../../../../services/driver.service';
import { RouteService } from '../../../../services/route.service';
import { CurrentData, CurrentLocation } from 'src/app/model/curLocation';

declare const google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: any;
  @ViewChild('mapElement', {static: true}) mapElement;
  public curLocation: CurrentLocation;
  public address: CurrentData;
  public marker: any;
  public coordinates: CurrentLocation;
  driverId;
  vehicleId;
  wayPoints = [];
  constructor(
    private location: DriverService,
    private driverService: DriverService,
    private routeService: RouteService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(data => {
      this.driverId = data.driverId;
      console.log('Driver Id : ', this.driverId);
    });
  }

  ngOnInit() {
    console.log(this.driverId);
    this.getRouteData();
  }

  // Move bus icon over map.
  private moveBus(place: any): void {
    console.log('plcae : ', place);
    // set cuttent latitude and longitude to marker
    this.marker.setPosition(new google.maps.LatLng(place.latitude, place.longitude));
    //   this.map.panTo(new google.maps.LatLng({ lat: place.latitude, lng: place.longitude }));
  }

  async getRouteData() {
    const driverData = await this.routeService.getRouteAllDetails(this.driverId);
    driverData.subscribe(response => {
      this.initializeRoutesOnMap(response['data']);
    });
  }

  initializeRoutesOnMap(serverRouteData) {
    console.log('Working....');
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(19.965731, 73.826119),
    });
    directionsDisplay.setMap(this.map);

    serverRouteData.forward_routes.map((item, index) => {
      this.wayPoints.push({
        location: `${item.location}, Nashik`,
        stopover: true,
      });
    });

    const originPoint = this.wayPoints.shift();
    const destinationPoint = this.wayPoints.pop();
    directionsService.route(
      {
        origin: originPoint.location,
        destination: destinationPoint.location,
        waypoints: this.wayPoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          /*   const route = response.routes[0];
          const geocoder = new google.maps.Geocoder(); */

          this.marker = new google.maps.Marker({
            map: this.map,
            position: { lat: 19.9975, lng: 73.7898 },
            icon: '../../../../assets/images/bus2.png',
            animation: google.maps.Animation.DROP,
          });
          // Get current latitude and longitude of driver
          this.location.curLocation.subscribe((res: CurrentData) => {
            this.address = res;
            if (this.address) {
              console.log('Address : ', this.address);
              this.moveBus(this.address.curLocation); // move bus marker over map
            }
          });
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }
}
