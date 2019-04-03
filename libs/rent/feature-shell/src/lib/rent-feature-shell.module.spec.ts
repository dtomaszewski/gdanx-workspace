import { async, TestBed } from '@angular/core/testing';
import { RentFeatureShellModule } from './rent-feature-shell.module';
import { SharedUiButtonsModule } from '@gdanx/shared/ui/buttons';
import { RentFeatureMapModule } from '@gdanx/rent/feature-map';

describe('RentFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RentFeatureShellModule,
        SharedUiButtonsModule,
        RentFeatureMapModule
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentFeatureShellModule).toBeDefined();
  });
});
