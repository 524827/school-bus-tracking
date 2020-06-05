import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides call of the vehicle's url.
 * @class - VehicleService
 */
export class VehicleService {
  /**
   * @description - This constructor creates the instance of HttpClient.
   * @param {HttpClient} http - Instance of HttpClient.
   */
  constructor(private http: HttpClient) {}

  /**
   * @description - This method send call to the server and fetches vehicle's data using vehicle's id.
   * @function - getServerVehicleDetails
   * @param {string} vehicleId - Stores the id of the vehicle.
   * @returns - Returns the response of the server.
   */
  getServerVehicleDetails(vehicleId: string) {
    // Sending request using vehicle's url to server for finding details by id.
    return this.http.get(`${environment.vehicleUrl}/show?vehicleId=${vehicleId}`);
  }

  /**
   * @description - This method send call to the server and fetches vehicle's data using driver's id.
   * @function - getDriversVehicleDetails
   * @param {string} driverId - Stores the id of the driver.
   * @returns - Returns the response of the server.
   */
  getDriversVehicleDetails(driverId: string) {
    // Sending request using vehicle's url to server for finding details by driver id.
    return this.http.get(`${environment.vehicleUrl}/vehicleByDriverId?driverId=${driverId}`);
  }
}
