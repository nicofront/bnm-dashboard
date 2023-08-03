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

  passwordClose() {
    this.active = false;
  }

  passwordGo(id: any) {
    this.id = id;
  }

}
