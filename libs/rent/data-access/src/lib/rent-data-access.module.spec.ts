import { async, TestBed } from '@angular/core/testing';
import { RentDataAccessModule } from './rent-data-access.module';

describe('RentDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RentDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentDataAccessModule).toBeDefined();
  });
});
