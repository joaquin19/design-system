import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

const COMPONENET = [
  InputComponent,
  ButtonComponent
]

@NgModule({
  declarations: COMPONENET,
  imports: [
    BrowserModule,
  ],
  exports: COMPONENET
})
export class NetpayModule { }
