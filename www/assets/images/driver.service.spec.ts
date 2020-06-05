import { TestBed } from '@angular/core/testing';

import { DriverService } from './driver.service';

describe('DriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverService = TestBed.get(DriverService);
    expect(service).toBeTruthy();
  });
});
