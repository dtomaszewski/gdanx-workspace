import { async, TestBed } from '@angular/core/testing';
import { PaymentsFeatureShellModule } from './payments-feature-shell.module';

describe('PaymentsFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentsFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentsFeatureShellModule).toBeDefined();
  });
});
