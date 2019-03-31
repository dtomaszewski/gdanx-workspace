import { async, TestBed } from '@angular/core/testing';
import { RentFeatureMapModule } from './rent-feature-map.module';

describe('RentFeatureMapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RentFeatureMapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentFeatureMapModule).toBeDefined();
  });
});
