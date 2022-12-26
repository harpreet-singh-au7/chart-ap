import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ApexStackedComponent } from './apex-stacked/apex-stacked.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, BarChartComponent, StackedBarComponent, ApexChartComponent, ApexStackedComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
