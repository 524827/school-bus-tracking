import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides call of the parent's url.
 * @class - ParentService
 */
export class ParentService {
  /**
   * @description - This constructor creates the instance of HttpClient.
   * @param {HttpClient} http - Instance of HttpClient.
   */
  public curLocation: BehaviorSubject<object> = new BehaviorSubject(null);
  private response = {};
  constructor(private http: HttpClient) {}

  /**
   * @description - This method send call to the server and fetches parent's data using userName and userPassword for login.
   * @function - getServerParentDetails
   * @param {string} userName - Stores username of the parent.
   * @param {string} userPassword - Stores user password of the parent.
   * @returns - Observable<object> - It contains the response of the server.
   */
  getServerParentDetails(userName: string, userPassword: string): Observable<object> {
    // Sending request using parent's url to server
    return this.http.get(
      `${environment.parentUrl}/show?parentUserName=${userName}&parentPassword=${userPassword}`
    );
  }

  /**
   * @description - This method send call to the server and fetches parent's data using parent id.
   * @function - getServerParentDetailsById
   * @param {string} parentId - Stores the id of the parent.
   * @returns - Observable<object> - It contains the response of the parent.
   */
  getServerParentDetailsById(parentId: string): Observable<object> {
    // Sending request using parent's url to server for finding details by id.
    return this.http.get(`${environment.parentUrl}/show?parentId=${parentId}`);
  }

  /**
   * @description - This method send call to the server and update parent's data using parents id.
   * @param {string} userData - Stores the data of the parent.
   * @returns - Returns the response of the server.
   */
  updateServerParentAllDetails(userData: object) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    // Sending request using parent's url to server for finding details by id.
    return this.http.post(`${environment.parentUrl}/updateAllDetails`, userData, {
      headers: headers,
    });
  }

  /**
   * @description - This method send call to the server and update parent's data using parent id.
   * @function - updateServerParentDetailsById
   * @param {string} parentId - Stores the id of the parent.
   * @returns - Observable<object> - It contains the response of the parent.
   */
  updateServerParentDetailsById(userData: object): Observable<object> {
    // Sending request using parent's url to server for finding details by id.
    return this.http.get(`${environment.parentUrl}`);
  }

  getServerParentDetailsByEmail(parentEmail: string): Observable<object> {
    // Sending request using parent's url to server for finding details by email.
    return this.http.get(`${environment.parentUrl}/show?parentEmail=${parentEmail}`);
  }

  /**
   * This function get current location of driver
   * @param driverId - driver id for get current location
   */
  getCurrentLocation(driverId) {
    const data = { driver_id: driverId };
    console.log('Data Parent : ', data);
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    this.http
      .post(environment.parentUrl + '/currentLocation', data, { headers: headers })
      .subscribe(res => {
        console.log(' : ', res);
        this.response = res['data'];
        this.curLocation.next(this.response);
      });
  }
}
