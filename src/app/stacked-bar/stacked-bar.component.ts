import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './stacked-bar-data';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss'],
})
export class StackedBarComponent implements OnInit {
  public chart: any;
  public barChartData: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: data,
      options: {
        aspectRatio: 2.5,
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
