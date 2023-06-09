import { Component, Input } from '@angular/core';

@Component({
    selector: 'templates-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>content</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class TemplatesDoc {
    @Input() id: string;

    @Input() title: string;
}
