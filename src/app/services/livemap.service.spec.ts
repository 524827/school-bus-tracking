import { TestBed } from '@angular/core/testing';

import { LivemapService } from './livemap.service';

describe('LivemapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivemapService = TestBed.get(LivemapService);
    expect(service).toBeTruthy();
  });
});
