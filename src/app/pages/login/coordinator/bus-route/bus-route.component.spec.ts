import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRoutePage } from './bus-route.page';

describe('BusRoutePage', () => {
  let component: BusRoutePage;
  let fixture: ComponentFixture<BusRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusRoutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
