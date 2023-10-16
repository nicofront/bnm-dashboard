import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Modalconsentimiento } from './modal-consentimiento.types';

@Component({
  selector: 'bm-modal-consentimiento',
  styleUrls: ['modal-consentimiento.component.scss'],
  templateUrl: 'modal-consentimiento.component.html',
})
export class ModalconsentimientoComponent {

  constructor() {
  }

  id : number = 1;
  active : boolean = true;
  visibility : boolean = false;
  tooltip : boolean = false;

  consentimientoClose() {
    this.active = false;
  }

  consentimientoTooltip() {
    if(this.tooltip) {
      this.tooltip = false;
    }else{
      this.tooltip = true;
    }
  }

  consentimientoToggle() {
    if(this.visibility) {
      this.visibility = false;
    }else{
      this.visibility = true;
    }
  }

  consentimientoGo(id: any) {
    this.id = id;
    this.tooltip = false;
  }

}
