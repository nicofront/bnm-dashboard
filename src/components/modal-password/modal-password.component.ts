import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Modalpassword } from './modal-password.types';

@Component({
  selector: 'bm-modal-password',
  styleUrls: ['modal-password.component.scss'],
  templateUrl: 'modal-password.component.html',
})
export class ModalpasswordComponent {

  constructor() {
  }

  id : number = 1;
  active : boolean = true;
  visibility : boolean = false;
  tooltip : boolean = false;

  passwordClose() {
    this.active = false;
  }

  passwordTooltip() {
    if(this.tooltip) {
      this.tooltip = false;
    }else{
      this.tooltip = true;
    }
  }

  passwordToggle() {
    if(this.visibility) {
      this.visibility = false;
    }else{
      this.visibility = true;
    }
  }

  passwordGo(id: any) {
    this.id = id;
    this.tooltip = false;
  }

}
