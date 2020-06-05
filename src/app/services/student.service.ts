import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides call of the student's url.
 * @class - StudentService
 */
export class StudentService {
  /**
   * @description - This constructor creates the instance of HttpClient.
   * @param {HttpClient} http - Instance of HttpClient.
   */
  constructor(private http: HttpClient) {}

  /**
   * @description - This method send call to the server and fetches student's data using student's id.
   * @function - getServerStudentDetails
   * @param {string} studentId - Stores the id of the student.
   * @returns - Observable<object> - It contains the response of the server.
   */
  getServerStudentDetails(studentId: string): Observable<object> {
    // Sending request using student's url to server for finding details by id.
    return this.http.get(`${environment.studentUrl}/show?studentId=${studentId}`);
  }
}
