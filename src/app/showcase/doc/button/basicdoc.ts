import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'button-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Text to display on a button is defined with the <i>label</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Submit"></p-button>
        </div>
        <app-code [code]="code" selector="button-basic-demo"></app-code>
    </div>`
})
export class BasicDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button label="Submit"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-button label="Submit"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'button-basic-demo',
    templateUrl: './button-basic-demo.html',
    styleUrls: ['./button-basic-demo.scss']
})
export class ButtonBasicDemo { }`
    };
}
