import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import barChartData from './bar-chart-data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public chart: any;

  public barChartLabels: any;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  public barChartData: any;

  constructor() {}

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: barChartData,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
