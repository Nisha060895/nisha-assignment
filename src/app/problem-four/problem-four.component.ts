import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-problem-four',
    templateUrl: './problem-four.component.html',
    styleUrls: ['./problem-four.component.scss']
})
export class ProblemFourComponent implements OnInit {

    public updatedTextValue: String = '';

    constructor() { }

    ngOnInit() {
    }

    public newValueEmitted(event){
        this.updatedTextValue = event;
    }

}
