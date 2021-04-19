import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-problem-three',
    templateUrl: './problem-three.component.html',
    styleUrls: ['./problem-three.component.scss']
})
export class ProblemThreeComponent implements OnInit {

    phoneNumberForm: FormGroup;

    phoneNumbersControls: any[] = [{ 'controlName': 'phoneNumber1', 'displayName': 'Phone Number 1' }]

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.initialzeForm();
        this.addPhoneNumber();
    }

    initialzeForm() {
        this.phoneNumberForm = this.fb.group({
        });
    }

    addPhoneNumber(adding: boolean = false) {
        let count = this.phoneNumbersControls.length + 1;
        if (adding) {
            this.phoneNumbersControls.push(
                { 'controlName': `phoneNumber${count}`, 'displayName': `Phone Number ${count}` }
            );
        }
        // Add control dynamically
        this.phoneNumbersControls.forEach(x => {
            this.phoneNumberForm.addControl(x.controlName, this.fb.control(''));
        });
        this.phoneNumberForm.reset();
    }

    removeControl(control) {
        let index = this.phoneNumbersControls.findIndex(y => y.controlName == control.controlName);
        if (index > 0) {
            this.phoneNumbersControls.splice(index, 1);
            this.phoneNumbersControls.forEach(x => {
                this.phoneNumberForm.addControl(x.controlName, this.fb.control(''));
            })
            this.phoneNumberForm.reset();
        }
    }

    displayDataInConsole() {
        let data = [];
        let formValues = this.phoneNumberForm.value;
        for (let key in formValues) {
            let dict = {};
            dict[key] = formValues[key]
            data.push(dict);
        }
        console.log('Results in required format:', data);
    }

    onlyNumber(evt) {
        // Only ASCII charactar in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

}
