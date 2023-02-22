import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [BrowserModule],
  exports: [TabsComponent],
})
export class TabsModule {}
