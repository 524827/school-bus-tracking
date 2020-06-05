import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroutesComponent } from './addroutes.component';

describe('AddroutesComponent', () => {
  let component: AddroutesComponent;
  let fixture: ComponentFixture<AddroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
