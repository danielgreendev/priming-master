import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'chips-regexpseperator-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A new chip is added when <i>enter</i> key is pressed, <i>separator</i> property allows definining an additional key. Currently only valid value is , to create a new item when comma key is pressed.</p>
        </app-docsectiontext>
        <div class="card p-fluid">
            <p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>
        </div>
        <app-code [code]="code" selector="chips-regexpseperator-demo"></app-code>
    </div>`
})
export class RegexpSeperatorDoc {
    @Input() id: string;

    @Input() title: string;

    separatorExp: RegExp = /,| /;

    values: string[];

    code: Code = {
        basic: `
<p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>`,

        html: `
<div class="card p-fluid">
    <p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'chips-regexpseperator-demo',
    templateUrl: './chips-regexpseperator-demo.html',
    styleUrls: ['./chips-regexpseperator-demo.scss']
})
export class ChipsRegexpseperatorDemo {
    values: string[];

    separatorExp: RegExp = /,| /;
}`
    };
}
