import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  verificationKey(id: any, number: any) {
    var elements = document.getElementById(id)!.children
    var card:any = elements.item(number)!
    card.focus();
  }

  ngOnInit(): void {
  }

}
