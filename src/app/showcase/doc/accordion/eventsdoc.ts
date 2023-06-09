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
                        <td>onClose</td>
                        <td>
                            event.originalEvent: Click object<br />
                            event.index: Index of the tab
                        </td>
                        <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                    </tr>
                    <tr>
                        <td>onOpen</td>
                        <td>
                            event.originalEvent: Click object<br />
                            event.index: Index of the tab
                        </td>
                        <td>Callback to invoke when a tab gets expanded.</td>
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
