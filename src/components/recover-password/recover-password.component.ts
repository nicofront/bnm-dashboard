import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recoverpassword } from './recover-password.types';

@Component({
  selector: 'bm-recover-password',
  styleUrls: ['recover-password.component.scss'],
  templateUrl: 'recover-password.component.html',
})
export class RecoverpasswordComponent {

  constructor() {
  }

  id : number = 1;

  verificationGo(id: any) {
    this.id = id;
  }

}
