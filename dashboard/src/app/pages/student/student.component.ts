import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-student',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
