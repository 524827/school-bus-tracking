import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DriverService } from '../../../services/driver.service';
import { CurrentData } from '../../../model/curLocation';
import { RouteService } from '../../../services/route.service';
import { Response } from '../../../model/routeDetails';
import { NavController } from '@ionic/angular';
import { ParentService } from '../../../services/parent.service';
import { LoaderService } from '../../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-view-routes',
  templateUrl: './single-bus-routes.component.html',
  styleUrls: ['./single-bus-routes.component.scss'],
})
export class SingleBusRoutesComponent implements OnInit, OnDestroy {
  public address: CurrentData;
  public currentArea = '';
  public routeData = [];
  public backwardRoutes = [];
  public forwardRoutes = [];
  public subscription: Subscription;

  schoolData = { stop: 'School', time: { morning: '7:30 AM', afternoon: '2:00 PM' } };

  private userType: string;
  private routeId: string;
  private driverId: string;
  private interval: any;
  constructor(
    public navCtrl: NavController,
    public route: Router,
    private parent: ParentService,
    private location: DriverService,
    private routedetails: RouteService,
    private router: ActivatedRoute,
    private loaderService: LoaderService
  ) {
    console.log('In Route component');
    // Get the route parameter.
    this.router.params.subscribe(data => {
      this.userType = data.userType;
      this.routeId = data.routeId;
    });
  }

  /**
   * Get userType or routeId from url
   * Get driverId from given route
   */
  async ngOnInit() {
    this.userType = this.router.snapshot.queryParamMap.get('user');
    this.routeId = this.router.snapshot.queryParamMap.get('routeId');
    this.loaderService.loaderDismiss();
    // Get Login driver ID from URL
    // this.routeId = this.router.snapshot.queryParamMap.get('routeId');
    console.log(this.routeId);
    await this.routedetails.getRouteDriverId(this.routeId).subscribe(res => {
      const response = res['data'];
      console.log(res);
      this.driverId = response['driver_id'];
      this.getRouteDetails(this.driverId);
    });
    // Get All routes from Database

    // Get current area of driver
    this.parent.curLocation.subscribe((response: CurrentData) => {
      this.address = response;
      if (this.address) {
        console.log(this.address.current_area);
        this.currentArea = this.address.current_area;
      }
    });
  }

  /**
   * This function called when user pull down to refresh the page.
   * @param event
   */
  doRefresh(event) {
    setTimeout(() => {
      this.routedetails.getRouteDetails(this.driverId).subscribe(response => {
        this.routeData = response['data'];
        if (this.routeData['backward_routes']) {
          this.backwardRoutes = this.routeData['backward_routes'];
        } else if (this.routeData['forward_routes']) {
          this.forwardRoutes = this.routeData['forward_routes'];
        }
      });
      event.target.complete();
    }, 2000);
  }

  /**
   * Function for navigate back
   */
  navigateBack() {
    clearInterval(this.interval);
    this.navCtrl.pop();
  }

  /**
   * This function fetch route details from server.
   */
  getRouteDetails(driverId) {
    this.routedetails.getRouteDetails(driverId).subscribe(response => {
      console.log(response);
      this.routeData = response['data'];
      if (this.routeData['backward_routes']) {
        this.backwardRoutes = this.routeData['backward_routes'];
      } else if (this.routeData['forward_routes']) {
        this.forwardRoutes = this.routeData['forward_routes'];
      }
      this.startLocationInterval(this.driverId);
    });
  }

  /**
   * This function start interval and fetch current location of driver from server
   */
  startLocationInterval(driverId) {
    this.interval = setInterval(() => {
      console.log('Parent');
      this.parent.getCurrentLocation(driverId);
    }, 9000);
  }

  /**
   * Clear interval and loader
   */
  ngOnDestroy() {
    clearInterval(this.interval);
    console.log('destroy');
    this.loaderService.loaderDismiss();
  }
}
