import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ng-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';

import { TabsModule } from 'src/components/tabs/tabs.module';
import { CfooterModule } from 'src/components/cfooter/cfooter.module';
import { CardaseguradoModule } from 'src/components/card-asegurado/card-asegurado.module';
import { HomeComponent } from 'src/pages/home/home.component';
import { FooterComponent } from 'src/pages/pfooter/pfooter.component';
import { AseguradosComponent } from 'src/pages/asegurados/asegurados.component';

import { ModalbenefitsModule } from 'src/components/modal-benefits/modal-benefits.module';
import { BenefitsComponent } from 'src/pages/benefits/benefits.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, AseguradosComponent, BenefitsComponent],
  imports: [BrowserModule, AppRoutingModule, HighchartsChartModule, TooltipModule, TabsModule, CfooterModule, CardaseguradoModule, ModalbenefitsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
