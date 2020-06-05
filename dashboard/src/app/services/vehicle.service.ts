import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { VehicleDetails } from '../model/vehicle-details';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private headers = new HttpHeaders();
  public subject: BehaviorSubject<any[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}
  /**
   * @param {object} - contains vehicle form data
   * @param {File} - contains image and path
   */
  setVehicleDetails(vehcileData: VehicleDetails, imageFile: File) {
    console.log(imageFile);
    const formData = new FormData();
    formData.append('body', JSON.stringify(vehcileData));
    formData.append('file', imageFile, imageFile.name);
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(environment.vehicleUrl + '/add', formData, { headers: undefined });
  }
  /**
   * This function fetch vehicle number form server
   */
  getVehicleNumber(): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.get(environment.vehicleUrl + '/vehicle-number', { headers: this.headers });
  }
  /**
   * This function give all vehicle details form server
   */
  getVehicleDetails(): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.get(environment.vehicleUrl + '/show-all', { headers: this.headers });
  }

  /**
   * This function update perticular driver details
   * @param {object} driverData - get perticular driver details and update into database
   * @param {File} imageFile - store image and it's path
   */
  updateVehicleDetails(vehicleData, imageFile: File): Observable<object> {
    console.log(vehicleData);
    const formData = new FormData();
    formData.append('body', JSON.stringify(vehicleData));
    formData.append('file', imageFile, imageFile.name);
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(environment.vehicleUrl + '/update', formData, {
      headers: undefined,
    });
  }

  /**
   * This function remove particular vehicle details
   * @param {string} vehicle_id - Vehicle id
   */
  removeVehicleDetails(vehicle_id): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.delete(environment.vehicleUrl + '/remove?vehicle_id=' + vehicle_id, {
      headers: this.headers,
    });
  }

  /**
   * This function sort vehicle information for smart table
   * @param {object} vehicle - Get all vehicle details for sorting
   *
   */
  sortVehicleData(vehicle) {
    console.log('vehicle service', vehicle);
    const length = vehicle.data.length;
    const vehicleDetails = [];
    let vehicleData: VehicleDetails;
    for (let i = 0; i < length; i++) {
      console.log(vehicle.data[i]);
      vehicleData = {
        vehicle_id: vehicle.data[i]._id,
        company_name: vehicle.data[i].vehicle_details.company_name,
        vehicle_number: vehicle.data[i].vehicle_details.vehicle_number,
        fuelType: vehicle.data[i].vehicle_details.fuel_type,
        seatingCapacity: vehicle.data[i].vehicle_details.seat_capacity,
        chassisNumber: vehicle.data[i].vehicle_details.chassis_number,
        school_name: vehicle.data[i].school_details.school_name,
        driver_name: vehicle.data[i].driver_details.driver_name,
      };
      vehicleDetails.push(vehicleData);
    }
    this.subject.next(vehicleDetails);
  }
}
