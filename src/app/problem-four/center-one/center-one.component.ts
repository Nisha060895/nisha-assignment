import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-center-one',
    templateUrl: './center-one.component.html',
    styleUrls: ['./center-one.component.scss']
})
export class CenterOneComponent implements OnInit {

    @Output() textValueEmitted = new EventEmitter<String>();

    public textFromCentral: string = '';

    constructor() { }

    ngOnInit() {
    }

    textChanged(value) {
        this.textFromCentral = value;
        this.textValueEmitted.emit(value);
    }

}
