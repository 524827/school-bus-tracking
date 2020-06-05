import { TestBed } from '@angular/core/testing';

import { BuscoordinatorService } from './bus-coordinator.service';

describe('BuscoordinatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscoordinatorService = TestBed.get(BuscoordinatorService);
    expect(service).toBeTruthy();
  });
});
