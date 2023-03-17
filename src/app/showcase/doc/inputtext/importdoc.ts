import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'import-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
        <app-code [hideToggleCode]="true" [hideStackBlitz]="true" [hideCodeSandbox]="true" [code]="code"></app-code>
    </div>`
})
export class ImportDoc {
    value1: string;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
import { InputTextModule } from 'primeng/inputtext';`
    };
}
