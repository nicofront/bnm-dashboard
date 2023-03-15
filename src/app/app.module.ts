import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { TabsModule } from 'src/components/tabs/tabs.module';
import { CfooterModule } from 'src/components/cfooter/cfooter.module';
import { CardaseguradoModule } from 'src/components/card-asegurado/card-asegurado.module';
import { HomeComponent } from 'src/pages/home/home.component';
import { FooterComponent } from 'src/pages/pfooter/pfooter.component';
import { AseguradosComponent } from 'src/pages/asegurados/asegurados.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, AseguradosComponent],
  imports: [BrowserModule, AppRoutingModule, TooltipModule, NgChartsModule, TabsModule, CfooterModule, CardaseguradoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
