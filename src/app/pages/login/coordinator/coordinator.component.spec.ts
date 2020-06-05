import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorPage } from './coordinator.page';

describe('CoordinatorPage', () => {
  let component: CoordinatorPage;
  let fixture: ComponentFixture<CoordinatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
