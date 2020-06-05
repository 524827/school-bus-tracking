import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesListPage } from './buses-list.page';

describe('BusesListPage', () => {
  let component: BusesListPage;
  let fixture: ComponentFixture<BusesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
