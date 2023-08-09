import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  verificationKey(id: any) {
    var elements = document.getElementById('inputbox').children
    elements.item(id).focus();
  }

  ngOnInit(): void {
  }

}
