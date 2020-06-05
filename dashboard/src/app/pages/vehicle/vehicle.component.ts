import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-vehicle',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class VehicleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
