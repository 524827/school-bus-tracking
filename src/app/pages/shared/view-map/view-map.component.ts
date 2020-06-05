import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { DriverService } from '../../../services/driver.service';
import { ParentService } from '../../../services/parent.service';
import { RouteService } from '../../../services/route.service';
import { CurrentData, CurrentLocation } from 'src/app/model/curLocation';
import { Subscription } from 'rxjs';

declare const google: any;
@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.scss'],
})
/**
 * @class - ParentViewMapComponent
 */
export class ViewMapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: any;
  public userType;
  @ViewChild('mapElement', {static: true}) mapElement;
  public curLocation: CurrentLocation;
  public address: CurrentData;
  public marker: any;
  public coordinates: CurrentLocation;
  public driverId;
  public vehicleId;
  public subcription: Subscription;

  wayPoints = [];
  public interval;
  constructor(
    private parentService: ParentService,
    private driverService: DriverService,
    private routeService: RouteService,
    private router: ActivatedRoute,
    public navctl: NavController
  ) {
    /*  this.userType = this.router.snapshot.queryParamMap.get('user');
         this.driverId = this.router.snapshot.queryParamMap.get('driverId'); */
  }

  ngOnInit() {
    this.router.params.subscribe(data => {
      console.log('userType in Constructor', data);
      this.driverId = data.driverId;
      this.userType = data.userType;
    });
    this.getRouteData();
    this.startLocationInterval(this.driverId);
    /*  // Get current latitude and longitude of driver
    this.location.curLocation.subscribe((response: CurrentData) => {
      this.address = response;
      if (this.address) {
        console.log('Address : ', this.address);
        this.moveBus(this.address.curLocation); // move bus marker over map
      }
    }); */
  }
  /**
   *  ngAfterViewInit function loads map after component view has fully initiolized
   */
  ngAfterViewInit() {
    /* console.log('Worked...');
    const center = { lat: 19.9975, lng: 73.7898 };
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center,
      zoom: 10,
    });
    directionsDisplay.setMap(this.map);

    // create marker for display current location
    this.marker = new google.maps.Marker({
      map: this.map,
      position: { lat: 19.9975, lng: 73.7898 },
      icon: '../../../../assets/images/bus.png',
      animation: google.maps.Animation.DROP,
    }); */
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
      zoom: 5,
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
          this.parentService.curLocation.subscribe((res: CurrentData) => {
            console.log('Res : ', res);
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

  startLocationInterval(driverId) {
    this.interval = setInterval(() => {
      this.parentService.getCurrentLocation(driverId);
    }, 10000);
  }

  navigateBack() {
    this.navctl.pop();
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
