import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparentComponent } from './addparent.component';

describe('AddparentComponent', () => {
  let component: AddparentComponent;
  let fixture: ComponentFixture<AddparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
