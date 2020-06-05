import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouteDetails } from '../model/route';
import { Observable, BehaviorSubject } from 'rxjs';
import { RouteData } from '../model/route-details';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  public subject: BehaviorSubject<any[]> = new BehaviorSubject(null);
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {}

  /**
   * This function set route information in database
   * @param {object} routedata - store route details
   */
  setRouteDetails(routedata: RouteDetails): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.post(environment.routeUrl + '/add', routedata, { headers: this.headers });
  }

  /**
   * This function get route information from database
   */
  getRouteData(): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.get(environment.routeUrl + '/show', { headers: this.headers });
  }

 /**
   * @description - Function to show the parent in the table.
   */

  getRouteDetails(): Observable<object> {
    return this.http.get(`${environment.routeUrl}/show-all`);
  }

  /**
 * This function update route information in database
 @param {object} routeData - get route details and update into database
 */
  updateRouteDetails(routeData: object): Observable<object> {
    console.log(routeData);
    this.headers.append('Content-type', 'application/json');
    return this.http.post(environment.routeUrl + '/update', routeData, { headers: this.headers });
  }

  /**
   * This function remove particular route details
   * @param {string} route_id - Route id
   */
  removeRouteDetails(route_id): Observable<object> {
    this.headers.append('Content-type', 'application/json');
    return this.http.delete(environment.routeUrl + '/remove?route_id=' + route_id, {
      headers: this.headers,
    });
  }

  /**
   *This function sort route details for smart table
   * @param {object} routeData - Get all route details for sorting
   */
  sortRouteDetails(routeData) {
    const length = routeData.data.length;
    const routeDetails = [];
    let route: RouteData;
    for (let i = 0; i < length; i++) {
      route = {
        db_id: routeData.data[i]._id,
        route_id: routeData.data[i].route_id,
        driver_name: routeData.data[i].driver_id.driver_name,
        vehicle_number: routeData.data[i].vehicle_id.vehicle_details.vehicle_number,
      };
      routeDetails.push(route);
    }
    this.subject.next(routeDetails);
  }
}
