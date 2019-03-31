import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentMainComponent } from './rent-main/rent-main.component';
import { RentDataAccessModule } from '@gdanx/rent/data-access';
import { SharedUiButtonsModule } from '@gdanx/shared/ui/buttons';

@NgModule({
  imports: [CommonModule, RentDataAccessModule, SharedUiButtonsModule],
  declarations: [RentMainComponent],
  exports: [RentMainComponent],
  providers: []
})
export class RentFeatureShellModule {}
