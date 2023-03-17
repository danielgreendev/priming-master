import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'knob-color-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Colors are customized with the <i>textColor</i>, <i>rangeColor</i> and <i>valueColor</i> properties.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>
        </div>
        <app-code [code]="code" selector="knob-color-demo"></app-code>
    </div>`
})
export class ColorDoc {
    @Input() id: string;

    @Input() title: string;

    value: number = 50;

    code: Code = {
        basic: `
<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>`,

        html: `
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'knob-color-demo',
    templateUrl: './knob-color-demo.html',
    styleUrls: ['./knob-color-demo.scss']
})

export class KnobColorDemo {
    value: number = 50;
}`
    };
}
