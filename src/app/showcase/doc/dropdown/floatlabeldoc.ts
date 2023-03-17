import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-floatlabel-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A floating label appears on top of the input field when focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <span class="p-float-label">
                <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" inputId="float-label"></p-dropdown>
                <label for="float-label">Select a City</label>
            </span>
        </div>
        <app-code [code]="code" selector="dropdown-floatlabel-demo"></app-code>
    </div>`
})
export class FloatLabelDoc {
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
<span class="p-float-label">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" inputId="float-label"></p-dropdown>
    <label for="float-label">Select a City</label>
</span>`,

        html: `
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" inputId="float-label"></p-dropdown>
        <label for="float-label">Select a City</label>
    </span>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-floatlabel-demo',
    templateUrl: './dropdown-floatlabel-demo.html',
    styleUrls: ['./dropdown-floatlabel-demo.scss']
})
export class DropdownFloatlabelDemo {
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
