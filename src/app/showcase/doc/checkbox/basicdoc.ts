import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'checkbox-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>
        </div>
        <app-code [code]="code" selector="checkbox-basic-demo"></app-code>
    </div>`
})
export class BasicDoc {
    @Input() id: string;

    @Input() title: string;

    checked: boolean;

    code: Code = {
        basic: `
<p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>`,

        html: `
<div class="card flex justify-content-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-basic-demo',
    templateUrl: './checkbox-basic-demo.html',
    styleUrls: ['./checkbox-basic-demo.scss']
})

export class CheckboxBasicDemo {
    checked: boolean;
}`
    };
}
