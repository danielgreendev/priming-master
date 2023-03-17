import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'tri-state-checkbox-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>TriStateCheckbox is defined using p-triStateCheckbox element and requires a value binding via ngModel.</p>
        </app-docsectiontext>
        <div class="card flex flex-column gap-3 align-items-center">
            <p-triStateCheckbox [(ngModel)]="value"></p-triStateCheckbox>
            <label>{{ value == null ? 'null' : value }}</label>
        </div>
        <app-code [code]="code" selector="tri-state-checkbox-basic-demo"></app-code>
    </div>`
})
export class BasicDoc {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<p-triStateCheckbox [(ngModel)]="value"></p-triStateCheckbox>`,

        html: `
<div class="card flex flex-column gap-3 align-items-center">
    <p-triStateCheckbox [(ngModel)]="value"></p-triStateCheckbox>
    <label>{{value == null ? 'null' : value}}</label>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'tri-state-checkbox-basic-demo',
    templateUrl: './tri-state-checkbox-basic-demo.html',
    styleUrls: ['./tri-state-checkbox-basic-demo.scss']
})
export class TriStateCheckboxBasicDemo {
    value: string;
}`
    };
}
