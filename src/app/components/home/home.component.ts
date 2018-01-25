import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p [appResaltado] = "'orange'">
    Probando directivas
  </p>

  <app-css></app-css>

  <app-ng-style></app-ng-style>

    <app-clases></app-clases>

  <app-body></app-body>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
