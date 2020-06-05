import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvehicleComponent } from './viewvehicle.component';

describe('ViewvehicleComponent', () => {
  let component: ViewvehicleComponent;
  let fixture: ComponentFixture<ViewvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
