import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'listbox-multiple-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                ListBox allows choosing a single item by default, enable <i>multiple</i> property to choose more than one. When the optional <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new item requires meta key
                to be present.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [style]="{ width: '15rem' }" [multiple]="true" [metaKeySelection]="false"></p-listbox>
        </div>
        <app-code [code]="code" selector="listbox-multiple-demo"></app-code>
    </div>`
})
export class MultipleDoc {
    @Input() id: string;

    @Input() title: string;

    cities: City[];

    selectedCities: City[];

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
<p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [style]="{'width':'15rem'}"
     [multiple]="true" [metaKeySelection]="false"></p-listbox>`,

        html: `
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [style]="{'width':'15rem'}" 
        [multiple]="true" [metaKeySelection]="false"></p-listbox>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-multiple-demo',
    templateUrl: './listbox-multiple-demo.html',
    styleUrls: ['./listbox-multiple-demo.scss']
})
export class ListboxMultipleDemo {
    cities: City[];

    selectedCities: City[];
    
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
