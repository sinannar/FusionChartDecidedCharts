import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the library
import { AppComponent } from './app.component';

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    // Specify FusionChartsModule as an import 
    // and pass FusionCharts and Charts as a dependency
    // You can pass all other FusionCharts modules such as Charts, PowerCharts
    // Maps, Widgets e.t.c. after FusionCharts
    FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }