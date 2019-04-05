import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentMainComponent } from './rent-main.component';
import { RentFeatureMapModule } from '@gdanx/rent/feature-map';
import { SharedUiButtonsModule } from '@gdanx/shared/ui/buttons';

describe('RentMainComponent', () => {
  let component: RentMainComponent;
  let fixture: ComponentFixture<RentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentMainComponent],
      imports: [SharedUiButtonsModule, RentFeatureMapModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
