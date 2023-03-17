import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'appendto-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Overlay can be mounted into its location, body or DOM element instance using this option.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`
})
export class AppendToDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
import { PrimeNGConfig, OverlayOptions } from 'primeng/api';

this.primengConfig.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`
    };
}
