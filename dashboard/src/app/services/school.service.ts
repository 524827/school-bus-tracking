import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * @class - SchoolService
 */
export class SchoolService {
  // serverUrl = 'http://192.168.1.10:3000/dashboard/school';
  // serverUrl = 'http://localhost:3000/school';

  /**
   * @member headers - Instance of HttpHeaders().Used for constructing headers configruation.
   * @member formData - Instance of FormData().Used for storing the values.
   *
   */
  headers = new HttpHeaders();
  formData = new FormData();
  public subject: BehaviorSubject<any[]> = new BehaviorSubject(null);

  /**
   * @description - Its having instances of HttpClient
   * @param httpClient - Instances of HttpClient
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * @description - Function is to add the school details.
   * @param schoolData - It gets the data from
   */
  setSchoolDetails(schoolData) {
    console.log(schoolData);

    this.formData.append('body', JSON.stringify(schoolData));
    this.formData.append('file', schoolData.photo, schoolData.photo.name);

    this.headers.append('Content-type', 'application/json');
    this.httpClient
      .post(`${environment.schoolUrl}/add`, this.formData, { headers: this.headers })
      .subscribe(res => {
        window.alert('Added');
      });
  }

  /**
   * @description - Function is to update the school details.
   * @param schoolData - Storing the parent data.
   * @param school_id - storing the parent id.
   */

  updateSchoolDetails(schoolData, school_id): Observable<object> {
    console.log(schoolData);
    console.log(school_id);
    this.formData.append('body', JSON.stringify(schoolData));
    this.formData.append('file', schoolData.photo, schoolData.photo.name);
    console.log(this.formData);
    this.headers.append('Content-type', 'application/json');
    return this.httpClient.post(`${environment.schoolUrl}/update/${school_id}`, this.formData, {
      headers: undefined,
    });
  }

  /**
   * @description - Function to show the school in the table.
   */
  getschoolDetails(): Observable<object> {
    return this.httpClient.get(`${environment.schoolUrl}/show`);
  }

  /**
   * @description - Function to delete the school details.
   * @param school_id - Stores the school id.
   */

  deleteSchoolDetails(school_id) {
    return this.httpClient.delete(`${environment.schoolUrl}/remove?schoolId=${school_id}`);
  }

  /**
   * @description - Function to sort the data after update.
   * @param schooldata - Fetches the school data.
   */
  sortSchoolData(schooldata) {
    console.log('service data', schooldata);
    const length = schooldata.data.length;
    console.log(length);
    const schoolData = [];
    for (let i = 0; i < length; i++) {
      console.log(schooldata.data[i]);
      const school = {
        school_id: schooldata.data[i]._id,
        schoolName: schooldata.data[i].school_name,
        branchName: schooldata.data[i].branch,
        officeNumber: schooldata.data[i].school_contact.office,
        officeEmail: schooldata.data[i].school_contact.office_email,
        address: schooldata.data[i].school_address,
      };
      schoolData.push(school);
      this.subject.next(schoolData);
    }
  }
}
