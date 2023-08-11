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
  status: boolean = false;

  benefitsGo(id: any) {
    // event.preventDefault();
    this.id = id;
  }
  accordiontg() {
    console.log('yes!');
    this.status = !this.status;   
  }

}
