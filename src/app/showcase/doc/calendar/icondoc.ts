import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'calendar-icon-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>An additional icon is displayed next to the input field when <i>showIcon</i> is present.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [showIcon]="true"></p-calendar>
        </div>
        <app-code [code]="code" selector="calendar-icon-demo"></app-code>
    </div>`
})
export class IconDoc {
    @Input() id: string;

    @Input() title: string;

    date: Date;

    code: Code = {
        basic: `
<p-calendar [(ngModel)]="date" [showIcon]="true"></p-calendar>`,

        html: `
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [showIcon]="true"></p-calendar>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-icon-demo',
    templateUrl: './calendar-icon-demo.html',
    styleUrls: ['./calendar-icon-demo.scss']
})
export class CalendarIconDemo {
    date: Date;
}`
    };
}
