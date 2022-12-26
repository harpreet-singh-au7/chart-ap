import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ApexStackedComponent } from './apex-stacked/apex-stacked.component';


const routes: Routes = [
  { path: 'barchart', component: BarChartComponent },
  { path: 'stackedbar', component: StackedBarComponent },
  { path: 'apexchart', component: ApexChartComponent },
  { path: 'apexstacked', component: ApexStackedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
