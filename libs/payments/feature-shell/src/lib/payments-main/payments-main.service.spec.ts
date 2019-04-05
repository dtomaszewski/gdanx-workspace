import { TestBed } from '@angular/core/testing';

import { PaymentsMainService } from './payments-main.service';

describe('PaymentsMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentsMainService = TestBed.get(PaymentsMainService);
    expect(service).toBeTruthy();
  });
});
