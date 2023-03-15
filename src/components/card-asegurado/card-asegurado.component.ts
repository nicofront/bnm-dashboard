import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cardasegurado } from './card-asegurado.types';

@Component({
  selector: 'bm-card-asegurado',
  styleUrls: ['card-asegurado.component.scss'],
  templateUrl: 'card-asegurado.component.html',
})
export class CardaseguradoComponent {

  constructor() {
  }

  isActive:boolean = false;

  toggleEdit() {
  	if(!this.isActive){
  		this.isActive = true;
  	}else{
  		this.isActive = false;
  	}
  }

}
