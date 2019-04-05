import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsMainComponent } from './payments-main.component';
import { SharedUiButtonsModule } from '@gdanx/shared/ui/buttons';
import { PaymentsDataAccessModule } from '@gdanx/payments/data-access';

describe('PaymentsMainComponent', () => {
  let component: PaymentsMainComponent;
  let fixture: ComponentFixture<PaymentsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsMainComponent],
      imports: [SharedUiButtonsModule, PaymentsDataAccessModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
