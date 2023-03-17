import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'multiselect-virtualscroll-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance
                issues. Usage is simple as setting <i>virtualScroll</i> property to true and defining virtualScrollItemSize to specify the height of an item.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-multiSelect [options]="virtualCountries" [showToggleAll]="false" [(ngModel)]="selectedCountries" optionLabel="name" [virtualScroll]="true" [filter]="true" [virtualScrollItemSize]="43" class="multiselect-custom-virtual-scroll">
                <ng-template let-country pTemplate="item">
                    <div class="country-item">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
                        <div>{{ country.name }}</div>
                    </div>
                </ng-template>
            </p-multiSelect>
        </div>
        <app-code [code]="code" selector="multiselect-virtualscroll-demo"></app-code>
    </div>`
})
export class VirtualScrollDoc {
    @Input() id: string;

    @Input() title: string;

    virtualCountries: Country[];

    selectedCountries: Country[];

    constructor() {
        this.virtualCountries = [];
        for (let i = 0; i < 10000; i++) {
            this.virtualCountries.push({ name: 'Item ' + i, code: 'Item ' + i });
        }
    }

    code: Code = {
        basic: `
<p-multiSelect [options]="virtualCountries" [showToggleAll]="false" [(ngModel)]="selectedCountries" optionLabel="name" [virtualScroll]="true" [filter]="true" [virtualScrollItemSize]="43" class="multiselect-custom-virtual-scroll">
    <ng-template let-country pTemplate="item">
        <div class="country-item">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-multiSelect>`,

        html: `
<div class="card flex justify-content-center">
    <p-multiSelect [options]="virtualCountries" [showToggleAll]="false" [(ngModel)]="selectedCountries" optionLabel="name" [virtualScroll]="true" [filter]="true" [virtualScrollItemSize]="43" class="multiselect-custom-virtual-scroll">
        <ng-template let-country pTemplate="item">
            <div class="country-item">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-multiSelect>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'multiselect-virtualscroll-demo',
    templateUrl: './multiselect-virtualscroll-demo.html',
    styleUrls: ['./multiselect-virtualscroll-demo.scss']
})
export class MultiselectVirtualscrollDemo {

    virtualCountries: Country[];

    selectedCountries: Country[];

    constructor() {
        this.virtualCountries = []
        for (let i = 0; i < 10000; i++) {
            this.virtualCountries.push({ name: 'Item ' + i, code: 'Item ' + i });
        }
    }
}`
    };
}
