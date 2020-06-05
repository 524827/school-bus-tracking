import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private http: HttpClient) {}

  /**
   * Get routes details associated with driver
   * @function getRouteDetails()
   * @param driverId
   */
  getRouteDetails(driverId: string) {
    const data = { driver_id: driverId };
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${environment.driverUrl}/routeDetails`, data, { headers: headers });
  }

  /**
   * Get routes details associated with driver
   * @function getRouteAllDetails()
   * @param driverId
   */
  getRouteAllDetails(driverId: string) {
    const data = { driver_id: driverId };
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${environment.driverUrl}/routeAllDetails`, data, { headers: headers });
  }
  /**
   * This function fetch driver details from giver route.
   * @param routeId - route id
   */
  getRouteDriverId(routeId: string) {
    const data = { routeId: routeId };
    console.log(data);
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(environment.parentUrl + '/driverDetails', data, { headers: headers });
  }
}
