import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificationPage } from './otp-verification.page';

describe('OtpVerificationPage', () => {
  let component: OtpVerificationPage;
  let fixture: ComponentFixture<OtpVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpVerificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
