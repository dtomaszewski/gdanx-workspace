import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentMapComponent } from './rent-map/rent-map.component';
import { RentDataAccessModule } from '@gdanx/rent/data-access';

@NgModule({
  imports: [CommonModule, RentDataAccessModule],
  declarations: [RentMapComponent],
  exports: [RentMapComponent]
})
export class RentFeatureMapModule {}
