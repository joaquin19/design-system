import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NetpayModule } from 'netpay';
// import { NetpayModule } from 'projects/netpay/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NetpayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
