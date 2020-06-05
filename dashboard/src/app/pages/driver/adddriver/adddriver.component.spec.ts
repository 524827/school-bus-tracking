import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddriverComponent } from './adddriver.component';

describe('AdddriverComponent', () => {
  let component: AdddriverComponent;
  let fixture: ComponentFixture<AdddriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
