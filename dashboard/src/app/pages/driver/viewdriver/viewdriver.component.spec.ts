import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdriverComponent } from './viewdriver.component';

describe('ViewdriverComponent', () => {
  let component: ViewdriverComponent;
  let fixture: ComponentFixture<ViewdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
