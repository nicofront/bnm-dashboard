import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

  constructor() { }

  id : number = 1;

  verificationGo(id: any) {
    this.id = id;
  }

  verificationKey(id: any, number: any) {
    var elements = document.getElementById(id)!.children
    var card:any = elements.item(number)!
    card.focus();
  }

  ngOnInit(): void {
  }

}
