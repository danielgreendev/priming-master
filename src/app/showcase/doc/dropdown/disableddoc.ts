import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-disabled-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true"></p-dropdown>
        </div>
        <app-code [code]="code" selector="dropdown-disabled-demo"></app-code>
    </div>`
})
export class DisabledDoc {
    @Input() id: string;

    @Input() title: string;

    cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    code: Code = {
        basic: `
<p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true"></p-dropdown>`,

        html: `
<div class="card flex justify-content-center">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true"></p-dropdown>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-disabled-demo',
    templateUrl: './dropdown-disabled-demo.html',
    styleUrls: ['./dropdown-disabled-demo.scss']
})
export class DropdownDisabledDemo {
    cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`
    };
}
