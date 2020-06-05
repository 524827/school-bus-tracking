import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvehicleComponent } from './editvehicle.component';

describe('EditvehicleComponent', () => {
  let component: EditvehicleComponent;
  let fixture: ComponentFixture<EditvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
