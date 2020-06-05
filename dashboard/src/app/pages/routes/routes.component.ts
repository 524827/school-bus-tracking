import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'ngx-routes',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class RoutesComponent implements OnInit {
  constructor(private routeService: RouteService) {}

  ngOnInit() {}
}
