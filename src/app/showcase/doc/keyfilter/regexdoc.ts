import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'key-filter-regex-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>In addition to the presets, a regular expression can be configured for customization.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap gap-3">
            <div class="flex-auto">
                <label for="blockspace" class="font-bold block mb-2"> Block Space </label>
                <input pInputText id="blockspace" [pKeyFilter]="blockSpace" class="w-full" />
            </div>
            <div class="flex-auto">
                <label for="block" class="font-bold block mb-2"> Block < > * ! </label>
                <input pInputText id="block" [pKeyFilter]="blockChars" class="w-full" />
            </div>
        </div>
        <app-code [code]="code" selector="key-filter-regex-demo"></app-code>
    </div>`
})
export class RegexDoc {
    @Input() id: string;

    @Input() title: string;

    blockSpace: RegExp = /[^\s]/;

    blockChars: RegExp = /^[^<>*!]+$/;

    code: Code = {
        basic: `
<input pInputText [pKeyFilter]="blockSpace" />
<input pInputText [pKeyFilter]="blockChars" />`,

        html: `
<div class="card flex flex-wrap gap-3">
    <div class="flex-auto">
        <label for="blockspace" class="font-bold block mb-2"> Block Space </label>
        <input pInputText id="blockspace" pKeyFilter="int" class="w-full" />
    </div>
    <div class="flex-auto">
        <label for="block" class="font-bold block mb-2"> Block < > * ! </label>
        <input pInputText id="block" pKeyFilter="int" class="w-full" />
    </div>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'key-filter-regex-demo',
    templateUrl: './key-filter-regex-demo.html',
    styleUrls: ['./key-filter-regex-demo.scss']
})
export class KeyFilterRegexDemo {
    blockSpace: RegExp = /[^\s]/; 
    
    blockChars: RegExp = /^[^<>*!]+$/;
}`
    };
}
