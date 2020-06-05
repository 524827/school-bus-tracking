import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'src/app/model/sidebar';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public status = true;
  public vehicleStatus: string;
  public clrInterval;
  public userPhoto: string;
  public userType: string;

  @Input() pages: Array<MenuItem>;

  public driverId: string;
  private service: any;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private location: DriverService,
    private storageService: StorageService
  ) {
    this.getUserDetails();
  }

  getUserDetails() {
    setInterval(() => {
      // Getting user's profile picture from native storage.
      this.storageService
        .getFromNativeStorage()
        .then(item => {
          this.userPhoto = item.userPhoto;
          this.userType = item.userType;
        })
        .catch(err => {
          console.error('Error : ', err);
        });
    }, 10000);
  }
  ngOnInit() {
    this.driverId = this.router.snapshot.queryParamMap.get('driverId');
    this.getUserDetails();
  }
  /**
   * @function onChange()
   * this function change the toggle button event ON or OFF
   */
  onChange() {
    if (this.status) {
      this.buttonOn();
    } else {
      this.buttonOff();
    }
  }
  /**
   * @function buttonOn()
   * call when toggle button is ON
   */
  async buttonOn() {
    this.status = false;
    this.vehicleStatus = 'Active';
    this.location.setVehicleStatus(this.driverId, this.vehicleStatus).subscribe();
    await this.location.enableLocation(this.driverId);
    this.clrInterval = window.setInterval(() => {
      this.service = this.location.getCurrentLocation();
    }, 7000);
  }
  /**
   * @function buttonOff()
   * call when toggle button is OFF
   */
  buttonOff() {
    this.status = true;
    this.vehicleStatus = 'Parked';
    this.location.disableLocation();
    this.location.setVehicleStatus(this.driverId, this.vehicleStatus).subscribe();
    window.clearInterval(this.clrInterval);
  }
  /**
   *
   * @param url
   * navigate through url
   */
  navigateMenu(url, title) {
    console.log(url, 'url');

    if (title === 'Logout') {
      this.logout();
    } else {
      this.route.navigate([url]);
    }
  }

  logout() {
    window.clearInterval(this.clrInterval);
    this.storageService.logOut();
  }

  ngOnDestroy() {}
}
