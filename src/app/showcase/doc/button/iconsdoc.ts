import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'button-icons-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Icon of a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-content-center gap-3">
            <p-button icon="pi pi-check"></p-button>
            <p-button label="Submit" icon="pi pi-check"></p-button>
            <p-button label="Submit" icon="pi pi-check" iconPos="right"></p-button>
        </div>
        <app-code [code]="code" selector="button-icons-demo"></app-code>
    </div>`
})
export class IconsDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button icon="pi pi-check"></p-button>
<p-button label="Submit" icon="pi pi-check"></p-button>
<p-button label="Submit" icon="pi pi-check" iconPos="right"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-button icon="pi pi-check"></p-button>
    <p-button label="Submit" icon="pi pi-check"></p-button>
    <p-button label="Submit" icon="pi pi-check" iconPos="right"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'button-icons-demo',
    templateUrl: './button-icons-demo.html',
    styleUrls: ['./button-icons-demo.scss']
})
export class ButtonIconsDemo { }`
    };
}
