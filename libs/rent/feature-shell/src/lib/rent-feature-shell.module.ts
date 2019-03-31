import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentMainComponent } from './rent-main/rent-main.component';
import { SharedUiButtonsModule } from '@gdanx/shared/ui/buttons';
import { RentFeatureMapModule } from '@gdanx/rent/feature-map';

@NgModule({
  imports: [CommonModule, SharedUiButtonsModule, RentFeatureMapModule],
  declarations: [RentMainComponent],
  exports: [RentMainComponent],
  providers: []
})
export class RentFeatureShellModule {}
