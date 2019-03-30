import { async, TestBed } from '@angular/core/testing';
import { RentFeatureShellModule } from './rent-feature-shell.module';

describe('RentFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RentFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentFeatureShellModule).toBeDefined();
  });
});
