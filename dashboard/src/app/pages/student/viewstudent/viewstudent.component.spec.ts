import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentComponent } from './viewstudent.component';

describe('ViewstudentComponent', () => {
  let component: ViewstudentComponent;
  let fixture: ComponentFixture<ViewstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
