import { Component, Input } from '@angular/core';

@Component({
    selector: 'props-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>pFocusTrapDisabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When set as true, focus wouldn't be managed.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class PropsDoc {
    @Input() id: string;

    @Input() title: string;
}
