import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner-three',
  templateUrl: './corner-three.component.html',
  styleUrls: ['./corner-three.component.scss']
})
export class CornerThreeComponent implements OnInit {

  @Input() updatedTextValue: String = '';

  constructor() { }

  ngOnInit() {
  }

}
