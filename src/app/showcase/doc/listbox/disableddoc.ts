import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'listbox-disabled-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" [style]="{ width: '15rem' }"></p-listbox>
        </div>
        <app-code [code]="code" selector="listbox-disabled-demo"></app-code>
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
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" [style]="{ width: '15rem' }"></p-listbox>`,

        html: `
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" [style]="{ width: '15rem' }"></p-listbox>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-disabled-demo',
    templateUrl: './listbox-disabled-demo.html',
    styleUrls: ['./listbox-disabled-demo.scss']
})
export class ListboxDisabledDemo {
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
