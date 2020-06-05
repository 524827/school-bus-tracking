import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewroutesComponent } from './viewroutes.component';

describe('ViewroutesComponent', () => {
  let component: ViewroutesComponent;
  let fixture: ComponentFixture<ViewroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
