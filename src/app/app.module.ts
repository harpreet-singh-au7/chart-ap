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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialExampleModule} from './material.module';
import {SidenavComponent} from './sidebar/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { TvpiComponent } from './tvpi/tvpi.component';

@NgModule({
  declarations: [AppComponent, BarChartComponent, StackedBarComponent, ApexChartComponent, ApexStackedComponent, HomeComponent, SidenavComponent, SideMenuComponent, TvpiComponent],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule, BrowserAnimationsModule, BrowserModule,
    FormsModule,
    MaterialExampleModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,],
  bootstrap: [AppComponent],
})
export class AppModule {}
