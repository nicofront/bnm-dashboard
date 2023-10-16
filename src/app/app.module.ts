import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { TooltipModule } from 'ng-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HighchartsChartModule } from 'highcharts-angular';

// import { TabsModule } from 'src/components/tabs/tabs.module';
// import { CfooterModule } from 'src/components/cfooter/cfooter.module';
// import { CardaseguradoModule } from 'src/components/card-asegurado/card-asegurado.module';
// import { HomeComponent } from 'src/pages/home/home.component';
// import { FooterComponent } from 'src/pages/pfooter/pfooter.component';
// import { AseguradosComponent } from 'src/pages/asegurados/asegurados.component';

import { ModalseguimientoModule } from 'src/components/modal-seguimiento/modal-seguimiento.module';
import { SeguimientoComponent } from 'src/pages/seguimiento/seguimiento.component';

@NgModule({
  declarations: [AppComponent, SeguimientoComponent],
  imports: [BrowserModule, AppRoutingModule, ModalseguimientoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
