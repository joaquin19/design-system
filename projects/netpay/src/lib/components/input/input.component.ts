import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netpayComponent-input',
  template: `
  <div class="mt-3">
    <label for="" class="col-form-label">Input component</label>
    <input class="form-control col-sm-4" type="text" placeholder="hola mundo">
  </div>
  `,
  styles: [
  ]
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
