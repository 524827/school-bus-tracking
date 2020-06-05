import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router, ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  public routeStatus = true;
  public livemapStatus = false;
  private selectedPath: string;
  public driverId: string;
  public userType;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    // find current route
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
  /**
   * this function change the value of routeStatus and livemapStatus for applying css
   */
  busRouteStyle() {
    this.routeStatus = true;
    this.livemapStatus = false;
  }

  /**
   * this function change the value of routeStatus and livemapStatus for applying css
   */
  liveMapStyle() {
    console.log(this.selectedPath);
    this.routeStatus = false;
    this.livemapStatus = true;
  }
  ngOnInit() {
    this.driverId = this.activeRoute.snapshot.queryParamMap.get('driverId');
    this.userType = this.activeRoute.snapshot.queryParamMap.get('user');
    console.log(this.driverId);
    // compare current route direction
    switch (this.selectedPath) {
      case '/driver/bus-route':
        console.log('match');
        this.routeStatus = true;
        this.livemapStatus = false;
        break;
      case '/driver/livemap':
        this.routeStatus = false;
        this.livemapStatus = true;
        break;
      default:
        console.log('doesnt match');
        break;
    }
  }
}
