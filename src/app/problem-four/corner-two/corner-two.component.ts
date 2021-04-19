import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner-two',
  templateUrl: './corner-two.component.html',
  styleUrls: ['./corner-two.component.scss']
})
export class CornerTwoComponent implements OnInit {

  @Input() updatedTextValue: String = '';

  constructor() { }

  ngOnInit() {
  }

}
