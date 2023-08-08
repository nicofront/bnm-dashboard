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

// import { VerificationcodeModule } from 'src/components/verification-code/verification-code.module';
// import { VerificationComponent } from 'src/pages/verification/verification.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
