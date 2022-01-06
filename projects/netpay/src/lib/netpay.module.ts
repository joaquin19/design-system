import { GridComponent } from './components/grid/grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { SwitchModule } from '@progress/kendo-angular-inputs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

const COMPONENET = [
  InputComponent,
  ButtonComponent,
  GridComponent,
]

@NgModule({
  declarations: COMPONENET,
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SidebarModule,
    DateInputsModule,
    DropDownsModule,
    DialogModule,
    SwitchModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    PDFModule,
    ExcelModule,
  ],
  exports: COMPONENET
})
export class NetpayModule { }
