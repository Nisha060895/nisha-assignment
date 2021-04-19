import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-problem-one',
    templateUrl: './problem-one.component.html',
    styleUrls: ['./problem-one.component.scss']
})
export class ProblemOneComponent implements OnInit {

    public indexFromUser: number;
    public computedValue: number;

    constructor() { }

    ngOnInit() {
    }

    indexChanged(value) {
        this.indexFromUser = value;
    }

    findValue() {
        if (this.indexFromUser % 2 == 0) {
            // Even Index
            this.computedValue = (this.indexFromUser) * (this.indexFromUser) - 1;
        } else {
            // odd Index
            this.computedValue = (this.indexFromUser) * (this.indexFromUser) + 1;
        }
    }

}
