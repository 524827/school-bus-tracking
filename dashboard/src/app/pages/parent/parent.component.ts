import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-parent',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
