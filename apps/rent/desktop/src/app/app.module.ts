import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RentFeatureShellModule } from '@gdanx/rent/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RentFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
