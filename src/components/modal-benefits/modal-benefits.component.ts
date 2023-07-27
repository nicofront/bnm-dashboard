import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Modalbenefits } from './modal-benefits.types';

@Component({
  selector: 'bm-modal-benefits',
  styleUrls: ['modal-benefits.component.scss'],
  templateUrl: 'modal-benefits.component.html',
})
export class ModalbenefitsComponent {

  constructor() {
  }

  id : number = 1;

  benefitsGo(id: any) {
    event.preventDefault();
    this.id = id;
  }

}
