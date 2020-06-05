import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPage } from './driver.page';

describe('DriverPage', () => {
  let component: DriverPage;
  let fixture: ComponentFixture<DriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
