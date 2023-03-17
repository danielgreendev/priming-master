import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'button-link-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A button can be rendered as a link as well.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Submit" styleClass="p-button-link"></p-button>
        </div>
        <app-code [code]="code" selector="button-link-demo"></app-code>
    </div>`
})
export class LinkDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button label="Submit" styleClass="p-button-link"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-button label="Submit" styleClass="p-button-link"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'button-link-demo',
    templateUrl: './button-link-demo.html',
    styleUrls: ['./button-link-demo.scss']
})
export class ButtonLinkDemo { }`
    };
}
