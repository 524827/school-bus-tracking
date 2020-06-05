import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * @class - ParentService
 */
export class ParentService {
  // serverUrl = 'http://192.168.1.10:3000/dashboard/parent';
  // serverUrl = 'http://localhost:3000/parent';

  /**
   * @member headers - Instance of HttpHeaders().Used for constructing headers configruation.
   * @member formData - Instance of FormData().Used for storing the values.
   */
  headers = new HttpHeaders();
  formData = new FormData();
  public subject: BehaviorSubject<any[]> = new BehaviorSubject(null);

  /**
   * @description -This constructors having instances of HttpClient.
   * @param httpClient - Instance of HttpClient.
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * @description - Function is to add the parent details.
   * @param parentData - It gets the data from
   */
  setParentDetails(parentData) {
    console.log(parentData);

    this.formData.append('body', JSON.stringify(parentData));
    this.formData.append('file', parentData.photo, parentData.photo.name);

    this.headers.append('Content-type', 'application/json');
    this.httpClient
      .post(`${environment.parentUrl}/add`, this.formData, { headers: this.headers })
      .subscribe(res => {
        window.alert('Added');
      });
  }

  /**
   * @description - Function is to update the parent details.
   * @param parentData - Storing the parent data.
   * @param parent_id - storing the parent id.
   */
  updateParentDetails(parentData, parent_id): Observable<object> {
    console.log(parentData);
    console.log(parent_id);
    const formData = new FormData();
    formData.append('body', JSON.stringify(parentData));
    formData.append('parent_id', parent_id);
    // this.formData.append('file', parentData.photo, parentData.photo.name);

    this.headers.append('Content-type', 'application/json');
    return this.httpClient.post(`${environment.parentUrl}/update-parent/${parent_id}`, parentData, {
      headers: undefined,
    });
  }

  /**
   * @description - Function to show the parent in the table.
   */

  getParentDetails(): Observable<object> {
    return this.httpClient.get(`${environment.parentUrl}/show-all`);
  }

  /**
   * @description - Function to delete the parent details.
   * @param parent_id - Stores the parent id.
   */

  deleteParentDetails(parent_id) {
    console.log(parent_id);
    return this.httpClient.delete(`${environment.parentUrl}/remove?schoolId=${parent_id}`);
  }

  /**
   * @description - Function to sort the data after update.
   * @param parentdata - Fetches the parent data.
   */
  sortParentData(parentdata) {
    console.log('service data', parentdata);
    const length = parentdata.data.length;
    console.log(length);
    const parentData = [];
    for (let i = 0; i < length; i++) {
      console.log(parentdata.data[i]);
      const parent = {
        parent_id: parentdata.data[i]._id,
        parentName: parentdata.data[i].parent_name,
        fathermobileNumber: parentdata.data[i].parent_contact_details.father_mobile_number,
        mothermobileNumber: parentdata.data[i].parent_contact_details.mother_mobile_number,
        landlineNumber: parentdata.data[i].parent_contact_details.parent_landline_number,
        alternateNumber: parentdata.data[i].parent_contact_details.alternate_mobile_number,
        email: parentdata.data[i].parent_contact_details.parent_email,
        username: parentdata.data[i].parent_username,
      };
      parentData.push(parent);
      this.subject.next(parentData);
    }
  }
}
