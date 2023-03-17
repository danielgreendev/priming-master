import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'knob-step-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Size of each movement is defined with the <i>step</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-knob [(ngModel)]="value" [step]="10"></p-knob>
        </div>
        <app-code [code]="code" selector="knob-step-demo"></app-code>
    </div>`
})
export class StepDoc {
    @Input() id: string;

    @Input() title: string;

    value: number;

    code: Code = {
        basic: `
<p-knob [(ngModel)]="value" [step]="10"></p-knob>`,

        html: `
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [step]="10"></p-knob>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'knob-step-demo',
    templateUrl: './knob-step-demo.html',
    styleUrls: ['./knob-step-demo.scss']
})

export class KnobStepDemo {
    value: number;
}`
    };
}
