import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsMainComponent } from './payments-main/payments-main.component';
import { SharedUiButtonsModule } from '@gdanx/shared/ui/buttons';
import { PaymentsDataAccessModule } from '@gdanx/payments/data-access';

@NgModule({
  imports: [CommonModule, SharedUiButtonsModule, PaymentsDataAccessModule],
  declarations: [PaymentsMainComponent],
  exports: [PaymentsMainComponent]
})
export class PaymentsFeatureShellModule {}
