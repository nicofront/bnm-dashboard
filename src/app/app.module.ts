import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { TabsModule } from 'src/components/tabs/tabs.module';
import { HomeComponent } from 'src/pages/home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, TooltipModule, NgChartsModule, TabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
