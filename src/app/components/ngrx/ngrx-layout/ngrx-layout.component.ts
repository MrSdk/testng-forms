import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-layout',
  template: `
    <div class='row'>
    <div class="col-md-6">
      <app-ngrx-create></app-ngrx-create>
    </div>
    <div class="col-md-6">
      <app-ngrx-read></app-ngrx-read>
    </div>
    </div>
  `,
  styleUrls: ['./ngrx-layout.component.css']
})
export class NgrxLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
