import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-comp-y',
    templateUrl: './comp-y.component.html',
    styleUrls: ['./comp-y.component.scss']
})
export class CompYComponent implements OnInit {

    @Input() public yCompData: any[] = [];

    public yCompDataForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.yCompDataForm = this.fb.group({});
        this.createYCompForm();
    }

    createYCompForm() {
        this.yCompDataForm.addControl(this.yCompData['controlName'], this.fb.control(''));
        this.yCompDataForm.reset();
    }

    changeYCompTabName(panel) {
        this.yCompData['displayName'] = this.yCompDataForm.get(panel.controlName).value;
    }

}
