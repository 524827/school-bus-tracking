import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { ParentService } from '../../../services/parent.service';
import { UpdateParentComponent } from '../../../pages/parent/updateparent/updateparent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-viewparent',
  templateUrl: './viewparent.component.html',
  styleUrls: ['./viewparent.component.scss'],
})
/**
 * @class - ViewparentComponent
 */
export class ViewparentComponent implements OnInit {
  /**
   * @member {Array} parentData - Stores the parent data in the array.
   * @member {Object} ParentprofileData - Stores parent data.
   */
  parentData = [];
  ParentprofileData;

  /**
   * @description - It shows the action button like delete, in columns object it create the
   * columns for the table.
   */

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      update: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      parentName: {
        title: 'Parent Name',
        type: 'string',
      },
      fathermobileNumber: {
        title: 'Father Mobile Number',
        type: 'number',
      },
      mothermobileNumber: {
        title: 'Mother Mobile Number',
        type: 'number',
      },
      landlineNumber: {
        title: 'Landline Number',
        type: 'number',
      },
      alternateNumber: {
        title: 'Alternate Number',
        type: 'number',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  /**
   *@description - Its having instnaces of ParentService, NgbModal. In constructor its
   *loading whole parent data by accesing parent service.
   * @param parentService - Instance of ParentService.
   * @param modalService - Instance of NgbModal.
   */
  constructor(private parentService: ParentService, private modalService: NgbModal) {}

  ngOnInit() {
    this.parentService.getParentDetails().subscribe(data => {
      this.parentService.sortParentData(data);
    });
    this.parentService.subject.subscribe(res => {
      if (res) {
        this.source.load(res);
      }
    });
  }

  /**
   * @description - Function to delete parent details.
   * @param event
   */
  onDeleteConfirm(event): void {
    console.log(event.data.parent_id);
    this.parentService.deleteParentDetails(event.data.parent_id).subscribe(res => {
      if (window.confirm('Are you sure you want to delete?')) {
        console.log(event.data.id);
        event.confirm.resolve(event.data);
      } else {
        event.confirm.reject();
      }
    });
  }

  /**
   * @description - Function to select a row and update the same.
   * @param event
   */
  onUserRowSelect(event): void {
    this.showLargeModal(event);
  }

  /**
   * @description - Function to open modal for updating the data.
   * @param event
   */
  showLargeModal(event) {
    console.log('hello');
    const activeModal = this.modalService.open(UpdateParentComponent, {
      size: 'lg',
      container: 'nb-layout',
    });
    console.log(event.data);
    activeModal.componentInstance.ParentprofileData = event.data;
  }
}
