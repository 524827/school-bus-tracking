import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  /**
   * This function send notification to the parents.
   * @param currentArea - current area of driver.
   * @param driver_id - driver id
   */
  sendNotification(currentArea: string, driver_id: string) {
    const data = { currentArea: currentArea, driver_id: driver_id };
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(environment.notification + '/send_notification', data, {
      headers: headers,
    });
  }

  /**
   *This function save user token in route collection.
   * @param route_id - route id
   * @param token - user token
   */
  setUserToken(route_id: string, token: any) {
    const data = { route_id: route_id, userToken: token };
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(environment.notification + '/user_token', data, {
      headers: headers,
    });
  }
}
