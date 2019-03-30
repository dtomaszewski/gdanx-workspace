import { async, TestBed } from '@angular/core/testing';
import { PaymentsDataAccessModule } from './payments-data-access.module';

describe('PaymentsDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentsDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentsDataAccessModule).toBeDefined();
  });
});
