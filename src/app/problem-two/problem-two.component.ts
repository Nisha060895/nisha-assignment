import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-two',
  templateUrl: './problem-two.component.html',
  styleUrls: ['./problem-two.component.scss']
})
export class ProblemTwoComponent implements OnInit {

  public xData: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addX() {
    this.xData.push({ 'name': `x${this.xData.length + 1}` });
  }

}
