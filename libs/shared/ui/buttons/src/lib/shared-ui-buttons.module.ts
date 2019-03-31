import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDefaultComponent } from './button-default/button-default.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonDefaultComponent],
  exports: [ButtonDefaultComponent]
})
export class SharedUiButtonsModule {}
