import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'calendar-inline-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Calendar is displayed as a popup by default, add <i>inline</i> property to customize this behavior.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [inline]="true" [showWeek]="true"></p-calendar>
        </div>
        <app-code [code]="code" selector="calendar-inline-demo"></app-code>
    </div>`
})
export class InlineDoc {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        basic: `
<p-calendar [(ngModel)]="date" [inline]="true" [showWeek]="true"></p-calendar>`,

        html: `
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [inline]="true" [showWeek]="true"></p-calendar>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-inline-demo',
    templateUrl: './calendar-inline-demo.html',
    styleUrls: ['./calendar-inline-demo.scss']
})

export class CalendarInlineDemo {
    date: Date[];
}`
    };
}
