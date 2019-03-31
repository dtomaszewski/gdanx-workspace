import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentsFeatureShellModule } from '@gdanx/payments/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaymentsFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
