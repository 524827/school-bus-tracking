import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides calling for the send OTP url.
export class OtpService {
 * @class - BuscoordinatorService
 */
export class OtpService {
  /**
   * @description - This constructor creates the instance of HttpClient.
   * @param {HttpClient} http - Instance of the HttpClient.
   */
  constructor(private http: HttpClient) {}

  /**
   * @description - This method send call to the server and fetches user data based on email.
   * @param {string} userEmail - Stores email id provided by the user for recieve otp.
   * @returns - Observable<object> - It contains the response of the server.
   */
  getOTPFromServer(userEmail: string): Observable<object> {
    // Sending request to server.
    return this.http.get(`${environment.otpUrl}/?userEmail=${userEmail}`);
  }
}
