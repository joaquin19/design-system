import { Component, Input } from '@angular/core';
import { IGridFields } from 'projects/netpay/src/lib/interfaces/gridFields.interface';
import { responseReportData } from './constatnts/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-system';
  elements: Array<IGridFields> = responseReportData;

  ngOnInit(): void {
  }
}
