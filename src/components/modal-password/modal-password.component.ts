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

  passwordClose() {
    this.active = false;
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
  }

}
