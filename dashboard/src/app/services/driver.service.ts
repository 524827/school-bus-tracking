import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DriverDetails } from '../model/driver-details';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private headers = new HttpHeaders();
  public subject: BehaviorSubject<any[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  /**
   * This function store driver details in database
   * @param {object} driverData - store all driver details
   * @param {File} imageFile - store image and it's path
   *
   */
  setDriverDetails(driverData, imageFile) {
    const formData = new FormData();
    const files: Array<File> = imageFile;
    formData.append('body', JSON.stringify(driverData));
    files.forEach(images => {
      formData.append('file[]', images, images.name);
    });
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(environment.driverUrl + '/add', formData, { headers: undefined });
  }
  /**
   * This function get all driver name from database
   * @function getDriverName()
   */
  getDriverName(): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.get(environment.driverUrl + '/driver-name', { headers: this.headers });
  }

  /**
   * This function get all details of driver from database
   * @function getDriverDetails()
   */
  getDriverDetails(): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.get(environment.driverUrl + '/show-all', { headers: this.headers });
  }

  /**
   * This function update perticular driver details
   * @param {object} driverData - get perticular driver details and update into database
   * @param {File} imageFile - store image and it's path
   */
  updateDriverDetails(driverId, driverData, imageFile): Observable<object> {
    const formData = new FormData();
    const files: Array<File> = imageFile;
    formData.append('body', JSON.stringify(driverData));
    formData.append('driver_id', driverId);
    files.forEach(images => {
      formData.append('file[]', images, images.name);
    });
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(environment.driverUrl + '/update-driver', formData, { headers: undefined });
  }

  /**
   * This function remove particular driver details
   * @param {string} driver_id - Driver id
   */
  removeDriverDetails(driver_id): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.delete(environment.driverUrl + '/remove?driver_id=' + driver_id, {
      headers: this.headers,
    });
  }

  /**
   * This function sort driver information for smart table
   * @param {object} driver - Get all driver details for sorting
   *
   */
  sortDriverData(driver) {
    console.log(driver);
    const length = driver.data.length;
    const vehicleDetails = [];
    let driverData: DriverDetails;
    for (let i = 0; i < length; i++) {
      console.log(driver.data[i]);
      driverData = {
        driver_id: driver.data[i]._id,
        driver_name: driver.data[i].driver_name,
        driver_email: driver.data[i].driver_email,
        driver_contact: driver.data[i].mobile_numbers.primary_number,
        sec_contact: driver.data[i].mobile_numbers.primary_number,
        license_number: driver.data[i].license_number,
        parmenent_addr: driver.data[i].driver_addresses.parmanent_address,
        current_addr: driver.data[i].driver_addresses.current_address,
        adhar_number: driver.data[i].driver_documents.adhar_card_details.adhar_card_number,
        pan_number: driver.data[i].driver_documents.pan_card_details.pan_card_number,
      };
      vehicleDetails.push(driverData);
    }
    this.subject.next(vehicleDetails);
  }
}
