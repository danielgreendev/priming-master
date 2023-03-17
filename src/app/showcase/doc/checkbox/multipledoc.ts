import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'checkbox-multiple-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Multiple mode is enabled by default, ngModel property refers to an array to bind the selected values.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-3">
            <div class="flex align-items-center gap-1">
                <p-checkbox name="group1" value="New York" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>
                <label for="ny">New York</label>
            </div>
            <div class="flex align-items-center gap-1">
                <p-checkbox name="group1" value="San Francisco" [(ngModel)]="selectedCities" inputId="sf"></p-checkbox>
                <label for="sf">San Francisco</label>
            </div>
            <div class="flex align-items-center gap-1">
                <p-checkbox name="group1" value="Los Angeles" [(ngModel)]="selectedCities" inputId="la"></p-checkbox>
                <label for="la">Los Angeles</label>
            </div>
        </div>
        <app-code [code]="code" selector="checkbox-multiple-demo"></app-code>
    </div>`
})
export class MultipleDoc {
    @Input() id: string;

    @Input() title: string;

    selectedCities: string[] = [];

    code: Code = {
        basic: `
<div class="flex align-items-center gap-1">
        <p-checkbox name="group1" value="New York" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>
        <label for="ny">New York</label>
</div>

<div class="flex align-items-center gap-1">
    <p-checkbox name="group1" value="San Francisco" [(ngModel)]="selectedCities" inputId="sf"></p-checkbox>
    <label for="sf">San Francisco</label>
</div>

<div class="flex align-items-center gap-1">
    <p-checkbox name="group1" value="Los Angeles" [(ngModel)]="selectedCities" inputId="la"></p-checkbox>
    <label for="la">Los Angeles</label>
</div>`,

        html: `
<div class="card flex justify-content-center gap-3">
    <div class="flex align-items-center gap-1">
        <p-checkbox name="group1" value="New York" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>
        <label for="ny">New York</label>
    </div>
    <div class="flex align-items-center gap-1">
        <p-checkbox name="group1" value="San Francisco" [(ngModel)]="selectedCities" inputId="sf"></p-checkbox>
        <label for="sf">San Francisco</label>
    </div>
    <div class="flex align-items-center gap-1">
        <p-checkbox name="group1" value="Los Angeles" [(ngModel)]="selectedCities" inputId="la"></p-checkbox>
        <label for="la">Los Angeles</label>
    </div>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-multiple-demo',
    templateUrl: './checkbox-multiple-demo.html',
    styleUrls: ['./checkbox-multiple-demo.scss']
})

export class CheckboxMultipleDemo {
    selectedCities: string[] = [];
}`
    };
}
