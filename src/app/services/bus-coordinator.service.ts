import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides calling for the bus coordinator's url.
 * @class - BuscoordinatorService
 */
export class BusCoordinatorService {
  /**
   * @description - This constructor creates the instance of HttpClient.
   * @param {HttpClient} http - Instance of the HttpClient.
   */
  constructor(private http: HttpClient) {}

  /**
   * @description - This method send call to the server and fetches bus coordinator's data using userName and userPassword for login.
   * @param {string} userName - Stores username of the bus coordinator.
   * @param {string} userPassword - Stores user password of the bus coordinator.
   * @returns - Observable<object> - It contains the response of the server.
   */
  getServerBusCoordinatorDetails(userName: string, userPassword: string): Observable<object> {
    // Sending request using bus coordinator's url to server.

    return this.http.get(
      `${
        environment.busCoordinatorUrl
      }/show?busCoordinatorUserName=${userName}&busCoordinatorPassword=${userPassword}`
    );
  }

  /**
   * @description - This method send call to the server and fetches bus coordinator's data using bus coordinators id.
   * @param {string} busCoordinatorId - Stores the id of the bus coordinator.
   * @returns - Returns the response of the server.
   */
  getServerBusCoordinatorDetailsById(busCoordinatorId: string) {
    // Sending request using bus coordinator's url to server for finding details by id.
    return this.http.get(
      `${environment.busCoordinatorUrl}/show?busCoordinatorId=${busCoordinatorId}`
    );
  }

  /**
   * @description - This method send call to the server and update bus coordinator's data using bus coordinators id.
   * @param {string} userData - Stores the data of the bus coordinator.
   * @returns - Returns the response of the server.
   */
  updateServerBusCoordinatorDetailsById(userData: object) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    // Sending request using bus coordinator's url to server for finding details by id.
    return this.http.post(`${environment.busCoordinatorUrl}/update`, userData, {
      headers: headers,
    });
  }

  /**
   * @description - This method send call to the server and update bus coordinator's data using bus coordinators id.
   * @param {string} userData - Stores the data of the bus coordinator.
   * @returns - Returns the response of the server.
   */
  updateServerBusCoordinatorAllDetails(userData: object) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    // Sending request using bus coordinator's url to server for finding details by id.
    return this.http.post(`${environment.busCoordinatorUrl}/updateAllDetails`, userData, {
      headers: headers,
    });
  }

  /**
   * @description - This method send call to the server and fetches bus coordinator's data using bus coordinators email.
   * @param {string} busCoordinatorEmail - Stores the id of the bus coordinator.
   * @returns - Returns the response of the server.
   */
  getServerBusCoordinatorDetailsByEmail(busCoordinatorEmail: string) {
    // Sending request using bus coordinator's url to server for finding details by email.
    return this.http.get(
      `${environment.busCoordinatorUrl}/show?busCoordinatorEmail=${busCoordinatorEmail}`
    );
  }


  
}
