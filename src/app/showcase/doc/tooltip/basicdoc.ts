import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'tooltip-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Tooltip is applied to an element with pTooltip directive where the value of the directive defines the text to display.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input type="text" pInputText pTooltip="Enter your username" placeholder="hover to display tooltip" />
        </div>
        <app-code [code]="code" selector="tooltip-basic-demo"></app-code>
    </div>`
})
export class TooltipBasicDemo {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input type="text" pInputText pTooltip="Enter your username" placeholder="hover to display tooltip">`,

        html: `
<div class="card flex justify-content-center">
    <input type="text" pInputText pTooltip="Enter your username" placeholder="hover to display tooltip">
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'tooltip-basic-demo',
    templateUrl: './tooltip-basic-demo.html'
})
export class TooltipBasicDemo {}`
    };
}
