import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSchoolPage } from './about-school.page';

describe('AboutSchoolPage', () => {
  let component: AboutSchoolPage;
  let fixture: ComponentFixture<AboutSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSchoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
