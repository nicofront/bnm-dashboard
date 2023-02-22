import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Tab } from './tabs.types';

@Component({
  selector: 'bm-tabs',
  styleUrls: ['tabs.component.scss'],
  templateUrl: 'tabs.component.html',
})
export class TabsComponent {
  @Input() tabs: Array<Tab>;
  @Output() readonly selectedTab = new EventEmitter<Tab>();
  activeTab = 0;

  constructor() {
    this.tabs = [];
  }

  tabChange(idx: number, tab: Tab): void {
    this.activeTab = idx;
    this.selectedTab.emit({ ...tab, id: idx });
  }
}
