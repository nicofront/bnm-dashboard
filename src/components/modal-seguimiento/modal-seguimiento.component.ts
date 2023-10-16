import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Modalseguimiento } from './modal-seguimiento.types';

@Component({
  selector: 'bm-modal-seguimiento',
  styleUrls: ['modal-seguimiento.component.scss'],
  templateUrl: 'modal-seguimiento.component.html',
})
export class ModalseguimientoComponent {

  constructor() {
  }

  id : number = 1;
  active : boolean = true;
  visibility : boolean = false;
  tooltip : boolean = false;

  seguimientoClose() {
    this.active = false;
  }

  seguimientoTooltip() {
    if(this.tooltip) {
      this.tooltip = false;
    }else{
      this.tooltip = true;
    }
  }

  seguimientoToggle() {
    if(this.visibility) {
      this.visibility = false;
    }else{
      this.visibility = true;
    }
  }

  seguimientoGo(id: any) {
    this.id = id;
    this.tooltip = false;
  }

}
