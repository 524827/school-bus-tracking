import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { VehicleService } from '../../../../services/vehicle.service';
import { DriverService } from '../../../../services/driver.service';
import { LivemapService } from '../../../../services/livemap.service';
import { StorageService } from '../../../../services/storage.service';
import { from, Observable } from 'rxjs';
import { IonItemGroup } from '@ionic/angular';

import { environment } from '../../../../../environments/environment';

declare const google: any;
@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss'],
})

/**
 * @description - This class initializes multiple buses location on map and sets the new position of buses icon.
 * @class - BusRouteComponent
 */
export class BusRouteComponent implements OnInit, OnDestroy {
  public interval;
  /**
   * @member {sring} vehicleImages - - Stores the vehicleImages folder link of server.
   * @member {sring} driverImages - - Stores the driverImages folder link of server.
   * @member {any} vehicleData - Stores the vehicle's data fetched from server.
   * @member {any} driverLogDetails - Stores the driver's log data fetched from server.
   * @member {Array} markers - Array of markers.
   * @member {any} map - Stores map data.
   */
  vehicleImages: String;
  driverImages: String;
  map: any;
  markers = [];
  vehicleData: any;
  driverLogDetails: any;

  /**
   * @description - This constructor initializes instances ofgeolocation, VehicleService, DriverService, LivemapService.
   * @constructor
   * @param {Geolocation} geolocation - Instance of Geolocation.
   * @param {VehicleService} vehicleService - Instance of VehicleService.
   * @param {DriverService} driverService - Instance of DriverService.
   * @param {LivemapService} liveMapService - Instance of LivemapService.
   */
  constructor(
    private geolocation: Geolocation,
    private vehicleService: VehicleService,
    private driverService: DriverService,
    private liveMapService: LivemapService,
    private storageService: StorageService
  ) {
    // Assigning vehicle images folder link of server to vehicleImages member.
    this.vehicleImages = environment.vehicleImages;

    // Assigning driver images folder link of server to driverImages member.
    this.driverImages = environment.driverImages;

    // Calling getCurrentLocation method of livemapService using liveMapService instance.
    this.liveMapService.getCurrentLocation();
  }

  /**
   * @description - This function calls vehicle and driver services to fetch data and assiging drivers current location.
   * @function - getAllVehicleFromServer
   */
  async getAllVehicleFromServer() {
    // Calling getServerVehicleDetails method with getAllVehicleDetails parameter of vehicle service.
    // Storing the response return from the server in to vehicleDetails.
    const vehicleDetails = await this.vehicleService.getServerVehicleDetails(
      'getAllVehicleDetails'
    );

    // Subscribing the vehicleDetails to get the data.
    vehicleDetails.subscribe(data => {
      // Assigning response data to vehicleData member.
      this.vehicleData = data['data'];

      // Accessing each vehicle details from vehicleData array using map function.
      this.vehicleData.map(async (item, index) => {
        // Calling getServerDriverDetailsById method driver service.
        // Storing the response return from the server in to driverDetails.
        const driverDetails = await this.driverService.getServerDriverDetailsById(
          item.driver_details._id
        );

        // Subscribing the driverDetails to get the data.
        driverDetails.subscribe(res => {
          // Assigning response data to value.
          const value = res['data'];

          // Assigning driver details.
          this.vehicleData[index].driver_details = value[0];

          // Accessing each driver log details from driverLogDetails array using map function.
          this.driverLogDetails.map((items, indexes) => {
            // Comparing  driver id of vehicle data with driver id of driver log.
            if (item.driver_details._id === items.driver_id) {
              // Assigning driver's current location when driver id match.
              item['loc'] =
                items.driverlog[items.driverlog.length - 1].current_location[
                  items.driverlog[items.driverlog.length - 1].current_location.length - 1
                ].curLocation;

              // Assigning location with proper named object key's.
              item['loc'] = { lat: item['loc'].latitude, lng: item['loc'].longitude };

              // Calling createMapMarker method by passing location and vehicleData as parameter.
              this.createMapMarker(item.loc, this.vehicleData[index]);
            }
          });
        });
      });
    });

    // Calling initMap method by passing latitude and longitude as parameter.
    this.initMap(19.961722, 73.807921);
  }

  /*  locateAllBuses() {
    this.getCurrentLocation();
  } */

  /**
   * @description - This function initialize the map with provided latitude and longitude.
   *  Also this function creates a marker and push it into the markers array.
   * @function - initMap
   * @param {number} latitude - Stores latitude.
   * @param {number} longitude - Stores longitude.
   */
  initMap(latitude: number, longitude: number) {
    // Creating object of latitude and longitude.
    const point = { lat: latitude, lng: longitude };

    // Creating instance of DirectionsService.
    const directionsService = new google.maps.DirectionsService();

    // Creating instance of DirectionsRenderer.
    const directionsDisplay = new google.maps.DirectionsRenderer();

    // Initializing instance of map.
    this.map = new google.maps.Map(
      // Passing HTML element to show map.
      <HTMLInputElement>document.getElementById('map'),
      // Setting other options.
      {
        // Setting zoom level of map.
        zoom: 10,

        // Setting center point of map.
        center: point,
      }
    );

    // Setting map using directionDisplay instance.
    directionsDisplay.setMap(this.map);
  }

  /**
   * @description - This function creates a marker for map.
   * @function - createMapMarker
   * @param {object} place - It stores the object of latitude and longitude to place the marker on map.
   * @param {any} vehicleData - Stores the vehicle details to show when user click on marker.
   * @returns - void.
   */
  createMapMarker(place: object, vehicleData: any): void {
    // Assigning bus icon url to busImage.
    const busImage = {
      // url: this.vehicleImages + '/bus2.png',
      url: '../../../../../assets/images/bus2.png',
    };

    // Creating marker.
    const marker = new google.maps.Marker({
      // Assigning map.
      map: this.map,

      // Setting marker position on map.
      position: place,

      // Setting marker icon.
      icon: busImage,

      // Setting animation on marker.
      animation: google.maps.Animation.DROP,

      // Setting title of marker. Title of the marker is vehicle number.
      title: vehicleData.vehicle_details.vehicle_number,
    });

    // Pushing created marker inti markers array.
    this.markers.push(marker);

    // Setting info window of the marker.
    const infoWindow = new google.maps.InfoWindow({
      // Setting content of info window.
      content:
        '<ion-card><ion-card-header color="primary" text-center>' +
        vehicleData.vehicle_details.vehicle_number +
        '</ion-card-header><ion-card-subtitle text-center color="tertiary">Driver : ' +
        vehicleData.driver_details.driver_name +
        '</ion-card-subtitle><ion-card-content>' +
        ' <img src ="' +
        this.driverImages +
        '/' +
        vehicleData.driver_details.driver_documents.photo +
        '"' +
        +'" class="mapInfoWindowImage" style="width:25px; height:25px;border-radius:50%;" />' +
        '<hr>' +
        '</ion-card-content></ion-card>',
    });

    // Adding listener of click event for marker.
    marker.addListener('click', () => {
      infoWindow.close(this.map, this.markers);
      setTimeout(function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }, 1000);
      setTimeout(function() {
        marker.setAnimation(google.maps.Animation.none);
      }, 6000);
      infoWindow.open(this.map, marker);
      setTimeout(function() {
        infoWindow.close(this.map);
      }, 7000);
    });
  }

  /**
   * @description - This function sets the geo coordinates using geolocation plugin.
   * @function - getCurrentLocation
   */
  getCurrentLocation() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        // Calling initMap method by passing latitude and longitude as parameter.
        this.initMap(resp.coords.latitude, resp.coords.longitude);
      })
      .catch(error => {
        console.log('Error getting location', error);
      });
  }

  ngOnInit() {
    this.interval = window.setInterval(
      () => {
        // Calling getCurrentLocation method of liveMapService to get current location of driver.
        this.liveMapService.getCurrentLocation();
      },
      // Interval time of 2 seconds
      5000
    );

    // Subscribing subject to get updated location data.
    this.liveMapService.curLocation.subscribe(response => {
      // Assigning driver log data coming from server to driverLogDetails memebr.
      this.driverLogDetails = response;

      // Checking for driverLogDetails.
      if (this.driverLogDetails) {
        // Visting each marker from markers array using array map function.
        this.markers.map((markerItem, markerIndex) => {
          // Visting each driver log details from driverLogDetails array using array map function.
          this.driverLogDetails.map((logItem, logIndex) => {
            // Visting each vehicle log details from vehicleData array using array map function.
            this.vehicleData.map((vehicleItem, vehicleIndex) => {
              // Compairing driver id of vehicle data with driver id of driver log data.
              if (vehicleItem.driver_details._id === logItem.driver_id) {
                // Compairing vehicle number of vehicle data with title of marker.
                if (vehicleItem.vehicle_details.vehicle_number === markerItem.title) {
                  // Assigning driver's current location to updatedLocation.
                  let updatedLocation =
                    logItem.driverlog[logItem.driverlog.length - 1].current_location[
                      logItem.driverlog[logItem.driverlog.length - 1].current_location.length - 1
                    ].curLocation;

                  // Assigning location with proper named object key's.
                  updatedLocation = {
                    lat: updatedLocation.latitude,
                    lng: updatedLocation.longitude,
                  };

                  // Setting the new updated position/location of marker.
                  this.markers[markerIndex].setPosition(
                    new google.maps.LatLng(updatedLocation.lat, updatedLocation.lng)
                  );
                }
              }
            });
          });
        });
      }
    });
    //   this.locateAllBuses();

    // Calling getAllVehicleFromServer method.
    this.getAllVehicleFromServer();
    this.storageService.setIntervalValue(this.interval);
  }
  ngOnDestroy() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }
}
