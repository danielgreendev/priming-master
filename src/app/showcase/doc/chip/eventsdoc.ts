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
                        <td>onRemove</td>
                        <td>event: Browser event</td>
                        <td>Callback to invoke when a chip is removed.</td>
                    </tr>
                    <tr>
                        <td>onImageError</td>
                        <td>event: Browser event</td>
                        <td>This event is triggered if an error occurs while loading an image file.</td>
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
