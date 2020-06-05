import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverbusdetailsPage } from './driverbusdetails.page';

describe('DriverbusdetailsPage', () => {
  let component: DriverbusdetailsPage;
  let fixture: ComponentFixture<DriverbusdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverbusdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverbusdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
