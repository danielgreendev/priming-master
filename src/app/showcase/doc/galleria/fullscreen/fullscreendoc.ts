import { Component, Input } from '@angular/core';

@Component({
    selector: 'fullscreen-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>In fullscreen mode content covers the whole page over a modal layer.</p>
        </app-docsectiontext>
    </div>`
})
export class FullScreenDoc {
    @Input() id: string;

    @Input() title: string;
}
