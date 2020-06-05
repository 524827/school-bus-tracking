import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

import { StudentService } from '../../../../services/student.service';
import { ParentService } from '../../../../services/parent.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { LoaderService } from 'src/app/services/loader.service';
import { AlertBoxService } from '../../../../services/alert-box.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})

/**
 * @class - StudentDetailsComponent
 */
export class StudentDetailsComponent implements OnInit, OnDestroy {
  /**
   *@member {Any} studentData - It stores the student data.
    @member {Number} studentId - It stores the student id.
    @member {Any} parentData - It stores the parent data.
    @member {Number} parentId - It stores the parent id.
   */
  public studentData: any;
  private studentId: Number;
  private parentData: any;
  private parentId: Number;
  public studentImages: string;
  private subscription: Subscription;

  /**
   * @description- The constructor has the instances of NavController, StudentService,        ParentService, ActivatedRoute
   * @param navctl - Instance of NavController
   * @param studentService - Instance of StudentService
   * @param parentService - Instance of ParentService
   * @param route - Instance of ActivatedRoute
   */

  constructor(
    public navctl: NavController,
    private studentService: StudentService,
    private parentService: ParentService,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private alertBoxService: AlertBoxService
  ) {
    this.loaderService.loaderPresent('Please wait.', 'crescent');
    this.route.params.subscribe(data => {
      this.parentId = data.parentId;
      this.getParentData(this.parentId);
    });
    // Assigning vehicle images folder link of server to vehicleImages member.
    this.studentImages = environment.studentImages;
  }

  /**
   * @description - This function fetches the parent data by callin the
   * parent service and fetching the data by parent id and storing all
   * the data in parentDetails variable.
   * @param parentId - Stores the parent id.
   */

  async getParentData(parentId) {
    const parentDetails = await this.parentService.getServerParentDetailsById(parentId);
    console.log(parentDetails);
    this.subscription = parentDetails.subscribe(
      res => {
        this.parentData = res['data'];
        console.log(this.parentData);
        this.studentId = this.parentData[0].student_details[0]._id;

        this.getStudentData(this.studentId);
        console.log(this.parentData);

        // Dismiss the loader.
        this.loaderService.loaderDismiss();
      },
      err => {
        // Dismiss the loader.
        this.loaderService.loaderDismiss();

        setTimeout(() => {
          this.alertBoxService.presentAlert(
            'Alert',
            'Server Problem.',
            'Server not responding. Try after sometime.'
          );
        }, 1200);
      }
    );
  }

  /**
   * @description - This function is getting the student data by
   *  calling student service and storing all the data in studentDetails variable
   * @param studentId - It stores the id of student.
   */

  async getStudentData(studentId) {
    const studentDetails = await this.studentService.getServerStudentDetails(studentId);
    studentDetails.subscribe(
      data => {
        this.studentData = data['data'];
        console.log(data);
        console.log(this.studentData);
        this.loaderService.loaderDismiss();
      },
      err => {
        // Dismiss the loader.
        this.loaderService.loaderDismiss();

        setTimeout(() => {
          this.alertBoxService.presentAlert(
            'Alert',
            'Server Problem.',
            'Server not responding. Try after sometime.'
          );
        }, 1200);
      }
    );
  }

  ngOnInit() {}

  /**
   * @description - The function is used for routing to previous component.
   */
  back() {
    this.navctl.pop();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    // Dismiss the loader.
    this.loaderService.loaderDismiss();
  }
}
