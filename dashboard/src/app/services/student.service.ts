import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
   // serverUrl = 'http://192.168.1.10:3000/dashboard/student';
  // serverUrl = 'http://localhost:3000/student';
  /**
   * @member headers - Instance of HttpHeaders().Used for constructing headers configruation.
   * @member formData - Instance of FormData().Used for storing the values.
   */
  headers = new HttpHeaders();
  formData = new FormData();
  public subject: BehaviorSubject<any[]> = new BehaviorSubject(null);

  /**
   * @description - Its having the instance of HttpClient.
   * @param httpClient - Instance of HttpClient.
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * @description - Function is to add the student details.
   * @param studentData - It gets the data from
   */
  setstudentDetails(studentData) {
    console.log(studentData);

    this.formData.append('body', JSON.stringify(studentData));
    this.formData.append('file', studentData.photo, studentData.photo.name);

    this.headers.append('Content-type', 'application/json');
    this.httpClient
      .post(`${environment.studentUrl}/add`, this.formData, { headers: this.headers })
      .subscribe(res => {
        window.alert('Added');
      });
  }

  /**
   * @description - Function to show the parent in the table.
   */

  getstudentDetails(): Observable<object> {
    return this.httpClient.get(`${environment.studentUrl}/show-all`);
  }

  /**
   * @description - Function to delete the student details.
   * @param student_id - Stores the student id.
   */

  deleteStudentDetails(student_id) {
    console.log(student_id);
    return this.httpClient
      .delete(`${environment.studentUrl}/remove?schoolId=${student_id}`);
  }

  /**
   * @description - Function is to update the student details.
   * @param studentData - Storing the student data.
   * @param student_id - storing the student id.
   */

  updateStudentDetails(data, student_id): Observable<object>  {
    console.log(data);
    console.log(student_id);
    this.formData.append('body', JSON.stringify(data));
    this.formData.append('file', data.photo, data.photo.name);
    console.log(this.formData);
    this.headers.append('Content-type', 'application/json');
    return this.httpClient
      .post(`${environment.studentUrl}/update-student/${student_id}`, this.formData, { headers: undefined });
  }

  /**
   * @description - Function to sort the data after update.
   * @param studentdata - Fetches the student data.
   */
  sortStudentData(studentdata) {
    console.log('service data', studentdata);
    const length = studentdata.data.length;
    console.log(length);
    const studentData = [];
    for (let i = 0; i < length; i++) {
      console.log(studentdata.data[i]);
      const student = {
        student_id: studentdata.data[i]._id,
        studentName: studentdata.data[i].student_name,
        gender: studentdata.data[i].student_gender,
        class: studentdata.data[i].student_class,
        division: studentdata.data[i].student_class_division,
        per_address: studentdata.data[i].student_addresses.permanent_address,
        cur_address: studentdata.data[i].student_addresses.current_address,
        stopLocation: studentdata.data[i].student_stop_location,
      };
      studentData.push(student);
      this.subject.next(studentData);
    }
  }
}
