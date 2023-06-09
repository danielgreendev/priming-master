import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>onClick</td>
                        <td>event: browser event<br /></td>
                        <td>Callback to invoke when default command button is clicked.</td>
                    </tr>
                    <tr>
                        <td>onDropdownClick</td>
                        <td>event: browser event<br /></td>
                        <td>Callback to invoke when dropdown button is clicked.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class EventsDoc {
    @Input() id: string;

    @Input() title: string;
}
