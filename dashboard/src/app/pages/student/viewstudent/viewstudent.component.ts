import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { StudentService } from '../../../services/student.service';
import { UpdateStudentComponent } from '../updatestudent/updatestudent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss'],
})

  /**
   * @class - ViewstudentComponent
   */
export class ViewstudentComponent implements OnInit {

  /**
   * @member {Object} studentProfileData - Stores the student profile data.
   */
  studentData = [];
  studentProfileData;

  /**
   * @description -  It shows the action button like delete, in columns object it create the
   * columns for the table
   */
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      studentName: {
        title: 'Student Name',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
      class: {
        title: 'Class',
        type: 'string',
      },
      division: {
        title: 'Division',
        type: 'string',
      },
      per_address: {
        title: 'Permanent Address',
        type: 'string',
      },
      cur_address: {
        title: 'Current Address',
        type: 'string',
      },
      stopLocation: {
        title: 'Stop Location',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  /**
   * @description - Its having instances of StudentService, NgbModal.
   * @param studentService - Instance of StudentService.
   * @param modalService - Instance of NgbModal
   */
  constructor(private studentService: StudentService, private modalService: NgbModal) {
    this.studentService.getstudentDetails().subscribe(data => {
      this.studentService.sortStudentData(data);
    });
    this.studentService.subject.subscribe(res => {
      if (res) {
        this.source.load(res);
      }
    });

      /* const showdata = data['data'];
      console.log(data);
      console.log(showdata);

      showdata.forEach(res => {
        const address = res['student_addresses'];
        const schoolInfo = {
          id: res['_id'],
          studentName: res['student_name'],
          gender: res['student_gender'],
          class: res['student_class'],
          division: res['student_class_division'],
          cur_address: address.current_address,
          per_address: address.permanent_address,
          stopLocation: res['student_stop_location'],
        };
        this.studentData.push(schoolInfo);
        console.log(schoolInfo);
      }); */
  }

  ngOnInit() { }

  /**
   * @description - Function to delete the student details.
   * @param event
   */

  onDeleteConfirm(event): void {
    console.log(event.data.student_id);
    this.studentService.deleteStudentDetails(event.data.student_id).subscribe(res => {
      if (window.confirm('Are you sure you want to delete')) {
        event.confirm.resolve(event.data);
      } else {
        event.confirm.reject();
      }
    });
  }

  /**
   * @description - Function to select the row and open a modal to update the data.
   * @param event
   */
  onUserRowSelect(event): void {
    this.showLargeModal(event);
  }

  /**
   * @description - Function to open the modal.
   * @param event
   */
  showLargeModal(event) {
    console.log('hello');
    console.log(event.data);
    console.log(event.data.student_id);
    const activeModal = this.modalService.open(UpdateStudentComponent, {
      size: 'lg',
      container: 'nb-layout',
    });

    activeModal.componentInstance.studentProfileData = event.data;
  }
}
