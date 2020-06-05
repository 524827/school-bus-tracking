import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMapComponent } from './view-map.component';

describe('ParentViewMapComponent', () => {
  let component: ViewMapComponent;
  let fixture: ComponentFixture<ViewMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
