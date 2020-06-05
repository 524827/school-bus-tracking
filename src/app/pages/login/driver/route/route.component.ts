import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { DriverService } from '../../../../services/driver.service';
import { CurrentData } from '../../../../model/curLocation';
import { RouteService } from 'src/app/services/route.service';
import { NotificationService } from '../.././../../services/notification.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent implements OnInit {
  public address: CurrentData;
  public currentArea = '';
  public routeData = [];
  public backwardRoutes = [];
  public forwardRoutes = [];

  schoolData = { stop: 'School', time: { morning: '7:30 AM', afternoon: '2:00 PM' } };

  private driverId;
  constructor(
    public route: Router,
    private location: DriverService,
    private routedetails: RouteService,
    private router: ActivatedRoute,
    private nativeStorage: NativeStorage,
    private notificationService: NotificationService
  ) {
    console.log('In Route component');
  }

  ngOnInit() {
    // Get Login driver ID from URL
    this.driverId = this.router.snapshot.queryParamMap.get('driverId');
    // Get All routes from Database
    this.routedetails.getRouteDetails(this.driverId).subscribe(response => {
      this.routeData = response['data'];
      if (this.routeData['backward_routes']) {
        this.backwardRoutes = this.routeData['backward_routes'];
      } else if (this.routeData['forward_routes']) {
        this.forwardRoutes = this.routeData['forward_routes'];
      }
    });
    // Get current area of driver
    this.location.curLocation.subscribe((response: CurrentData) => {
      console.log('Response:-', response);
      this.address = response;
      if (this.address) {
        console.log(this.address.current_area);
        this.currentArea = this.address.current_area;
      }
      this.nativeStorage.getItem('currentArea').then(res => {
        if (this.currentArea === res && this.currentArea !== '') {
          this.notificationService.sendNotification(this.currentArea, this.driverId).subscribe();
        }
      });
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
      this.location.curLocation.subscribe((response: CurrentData) => {
        this.address = response;
        if (this.address) {
          this.currentArea = this.address.current_area;
        }
      });

      event.target.complete();
    }, 2000);
  }
}
