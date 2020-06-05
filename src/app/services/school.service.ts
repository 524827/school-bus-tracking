import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides call of the school's url.
 * @class - SchoolService
 */
export class SchoolService {
  /**
   * @description - This constructor creates the instance of HttpClient.
   * @param {HttpClient} http - Instance of HttpClient.
   */
  constructor(private http: HttpClient) {}

  /**
   * @description - This method send call to the server and fetches all the school data.
   * @function - getServerSchoolDetails
   * @returns - Observable<object> - It contains the response of the server.
   */
  getServerSchoolDetails(): Observable<object> {
    // Sending request using schools's url to server for finding details of all schools.
    return this.http.get(`${environment.schoolUrl}/show`);
  }
}
