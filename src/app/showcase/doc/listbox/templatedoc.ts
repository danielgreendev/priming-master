import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'listbox-template-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Custom content for an option is displayed with the <i>pTemplate</i> property that takes an option as a parameter.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }">
                <ng-template let-country pTemplate="item">
                    <div class="country-item">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
                        <div>{{ country.name }}</div>
                    </div>
                </ng-template>
            </p-listbox>
        </div>
        <app-code [code]="code" selector="listbox-template-demo"></app-code>
    </div>`
})
export class TemplateDoc {
    @Input() id: string;

    @Input() title: string;

    countries: Country[];

    selectedCountry: Country;

    constructor() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }

    code: Code = {
        basic: `
<p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }">
    <ng-template let-country pTemplate="item">
        <div class="country-item">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-listbox>`,

        html: `
<div class="card flex justify-content-center">
    <p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }">
        <ng-template let-country pTemplate="item">
            <div class="country-item">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-listbox>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface Country {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-template-demo',
    templateUrl: './listbox-template-demo.html',
    styleUrls: ['./listbox-template-demo.scss']
})
export class ListboxTemplateDemo {
    countries: Country[];

    selectedCountry: Country;

    constructor() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`
    };
}
