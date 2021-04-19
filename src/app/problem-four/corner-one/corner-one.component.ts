import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-corner-one',
    templateUrl: './corner-one.component.html',
    styleUrls: ['./corner-one.component.scss']
})
export class CornerOneComponent implements OnInit {

    @Input() updatedTextValue: String = '';

    constructor() { }

    ngOnInit() {
    }

}
