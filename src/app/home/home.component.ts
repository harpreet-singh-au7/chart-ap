import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="act-home">
    <div class="list-item">
  <h3>Chart Examples - Chart JS & ApexChart</h3>
  <ul>
      

      <li><a [routerLink]="'/barchart'">Sample chart - Chart JS</a></li>
      <li><a [routerLink]="'/stackedbar'">Stacked Bar - Chart JS</a></li>
      <li><a [routerLink]="'/apexchart'">Sample chart - ApexChart</a></li>
      <li><a [routerLink]="'/apexstacked'">Stacked Bar - ApexChart</a></li>
      
  </ul>
</div>
<app-sidenav></app-sidenav>
</div>`
,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
