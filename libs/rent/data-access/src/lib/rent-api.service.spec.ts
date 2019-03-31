import { TestBed } from '@angular/core/testing';

import { RentApiService } from './rent-api.service';

describe('RentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentApiService = TestBed.get(RentApiService);
    expect(service).toBeTruthy();
  });
});
