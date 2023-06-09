import { Component, Input } from '@angular/core';

@Component({
    selector: 'messageprops-demo',
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
                        <td>severity</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Severity level of the message.</td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text content.</td>
                    </tr>
                    <tr>
                        <td>escape</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether displaying messages would be escaped or not.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>styleClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class MessagePropsDoc {
    @Input() id: string;

    @Input() title: string;
}
