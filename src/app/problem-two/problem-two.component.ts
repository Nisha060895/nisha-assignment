import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-problem-two',
    templateUrl: './problem-two.component.html',
    styleUrls: ['./problem-two.component.scss']
})
export class ProblemTwoComponent implements OnInit {

    public xPanelData: any[] = [];
    public yCompData: any[] = [];

    public xPanelDataForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.xPanelDataForm = this.fb.group({});
    }

    /**
     * @description called to add x panel
     * @memberof ProblemTwoComponent
     */
    addXPanel() {
        let count = this.xPanelData.length + 1;
        this.xPanelData.push(
            { 'controlName': `x${count}`, 'displayName': `X ${count}` }
        );
        this.xPanelData.forEach(x => {
            this.xPanelDataForm.addControl(x.controlName, this.fb.control(''));
        });
        this.xPanelDataForm.reset();
    }

    /**
     * @description called to change tabname of x panels
     * @memberof ProblemTwoComponent
     */
    changeTabName(xPanel) {
        let index = this.xPanelData.findIndex(x => x.controlName == xPanel.controlName);
        if (index > -1) {
            this.xPanelData[index]['displayName'] =
                this.xPanelDataForm.get(this.xPanelData[index]['controlName']).value;
        }
    }

    /**
     * @description Called to add y panel
     * @param {*} xPanel
     * @memberof ProblemTwoComponent
     */
    addYComponent(xPanel) {
        let index = this.xPanelData.findIndex(p => p.controlName == xPanel.controlName);
        if (index > -1) {
            this.xPanelData[index]['yCompData'] ? '' : this.xPanelData[index]['yCompData'] = [];
            let count = this.xPanelData[index]['yCompData'].length + 1;
            let yCompData = this.xPanelData[index]['yCompData'];
            yCompData.push(
                { 'controlName': `y${count}`, 'displayName': `Y ${count}` }
            );
            this.xPanelData[index]['yCompData'] = yCompData;
        }
    }

    /**
     * @description Called to display data in the console
     * @memberof ProblemTwoComponent
     */
    displayDataInConsole() {
        let displayData: any = {};
        this.xPanelData.forEach(y => {
            let yData = [];
            y['yCompData'].forEach(element => {
                yData.push(element['displayName']);
            });
            displayData[y['controlName']] = yData;
        })
        console.log('Data:', displayData);
    }

}
