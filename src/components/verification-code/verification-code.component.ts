import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Verificationcode } from './verification-code.types';

@Component({
  selector: 'bm-verification-code',
  styleUrls: ['verification-code.component.scss'],
  templateUrl: 'verification-code.component.html',
})
export class VerificationcodeComponent {

  constructor() {
  }

  id : number = 1;

  benefitsGo(id: any) {
    // event.preventDefault();
    this.id = id;
  }

}
