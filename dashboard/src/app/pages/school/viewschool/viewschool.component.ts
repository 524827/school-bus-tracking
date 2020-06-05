import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SchoolService } from '../../../services/school.service';
import { SchoolData } from '../../../model/schoolData';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UpdateSchoolComponent} from '../updateschool/updateschool.component';

@Component({
  selector: 'ngx-viewschool',
  templateUrl: './viewschool.component.html',
  styleUrls: ['./viewschool.component.scss'],
})

  /**
   * @class - ViewschoolComponent
   *
   */
export class ViewschoolComponent {

  /**
   * @member {Array} schoolData - Stores the data of school.
   * @member {Any} SchoolprofileData - Stores the profile data school.
   */
  schooldata = [];
  SchoolprofileData;

  /**
   * @description -  It shows the action button like delete, in columns object it create the
   * columns for the table
   */
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      schoolName: {
        title: 'School Name',
        type: 'string',
      },
      branchName: {
        title: 'Branch Name',
        type: 'string',
      },
      officeNumber: {
        title: 'Office Number',
        type: 'string',
      },
      officeEmail: {
        title: 'E-mail',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  /**
   * @description - Its having the instances of SchoolService, NgbModal. It loads the
   * data to display by calling SchoolService.
   * @param schoolService - Instance of SchoolService.
   * @param modalService - Instance of modalSservice.
   */
  constructor(private schoolService: SchoolService, private modalService: NgbModal) {
    this.schoolService.getschoolDetails().subscribe(data => {
      this.schoolService.sortSchoolData(data);
      // const showdata = data['data'];
      // console.log(data);
      // console.log(showdata);

      // showdata.forEach(res => {
      //   const contact = res['school_contact'];
      //   const schoolInfo = {
      //     id: res['_id'],
      //     schoolName: res['school_name'],
      //     branchName: res['branch'],
      //     officeNumber: contact.office,
      //     officeEmail: contact.office_email,
      //     address: res['school_address'],
      //   };
      //   this.schooldata.push(schoolInfo);
      //   console.log(schoolInfo);
      // });
      this.schoolService.subject.subscribe(res => {
        if (res) {
          this.source.load(res);
        }
      });
    });
  }

  /**
   * @description - Function to delete the school details.
   * @param event
   */

  onDeleteConfirm(event): void {
    console.log(event.data.school_id);
    this.schoolService.deleteSchoolDetails(event.data.school_id).subscribe(res => {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve(event.data);
      } else {
        event.confirm.reject();
      }
    });

  }

  /**
   * @description - Function to select a particular row to update the data.
   * @param event
   */
  onUserRowSelect(event): void {
    this.showLargeModal(event);
  }

  /**
   * @description - Function to open a modal to update the data.
   * @param event
   */

  showLargeModal(event) {
    console.log('hello');
    const activeModal = this.modalService.open(UpdateSchoolComponent, { size: 'lg', container: 'nb-layout' });
    console.log(event.data);
    activeModal.componentInstance.SchoolprofileData = event.data;
   }
}

