import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'calendar-month-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Month only picker is enabled by specifying view as month in addition to a suitable dateFormat.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>
        </div>
        <app-code [code]="code" selector="calendar-month-demo"></app-code>
    </div>`
})
export class MonthDoc {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        basic: `
<p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>`,

        html: `
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-month-demo',
    templateUrl: './calendar-month-demo.html',
    styleUrls: ['./calendar-month-demo.scss']
})
export class CalendarMonthDemo {
    date: Date[];
}`
    };
}
