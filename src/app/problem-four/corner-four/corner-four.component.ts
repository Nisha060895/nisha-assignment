import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner-four',
  templateUrl: './corner-four.component.html',
  styleUrls: ['./corner-four.component.scss']
})
export class CornerFourComponent implements OnInit {

  @Input() updatedTextValue: String = '';

  constructor() { }

  ngOnInit() {
  }

}
