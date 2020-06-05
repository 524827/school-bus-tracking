import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePage } from './route.page';

describe('RoutePage', () => {
  let component: RoutePage;
  let fixture: ComponentFixture<RoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
