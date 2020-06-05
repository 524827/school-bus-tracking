import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-driver',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class DriverComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
