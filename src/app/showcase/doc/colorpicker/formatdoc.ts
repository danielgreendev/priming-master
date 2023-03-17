import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'colorpicker-format-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb". Example below has 3 colorpickers having default values with different formats.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap gap-3">
            <div class="flex-1 flex flex-column align-items-center gap-3">
                <label htmlFor="cp-hex" class="font-bold block mb-2"> HEX </label>
                <p-colorPicker [(ngModel)]="color"></p-colorPicker>
                <span>{{ color }}</span>
            </div>
            <div class="flex-1 flex flex-column align-items-center gap-3">
                <label htmlFor="cp-rgb" class="font-bold block mb-2"> RGB </label>
                <p-colorPicker [(ngModel)]="colorRGB" format="rgb"></p-colorPicker>
                <span>{{ 'r:' + colorRGB.r + ' g:' + colorRGB.g + ' b:' + colorRGB.b }}</span>
            </div>
            <div class="flex-1 flex flex-column align-items-center gap-3">
                <label htmlFor="cp-hsb" class="font-bold block mb-2"> HSB </label>
                <p-colorPicker [(ngModel)]="colorHSB" format="hsb"></p-colorPicker>
                <span>{{ 'h:' + colorHSB.h + ' s:' + colorHSB.s + ' b:' + colorHSB.b }}</span>
            </div>
        </div>
        <app-code [code]="code" selector="colorpicker-format-demo"></app-code>
    </div>`
})
export class FormatDoc {
    @Input() id: string;

    @Input() title: string;

    color: string = '#6466f1';

    colorRGB: any = { r: 100, g: 102, b: 241 };

    colorHSB: any = { h: 239, s: 59, b: 95 };

    code: Code = {
        basic: `
<p-colorPicker [(ngModel)]="color"></p-colorPicker>
<p-colorPicker [(ngModel)]="colorRGB" format="rgb"></p-colorPicker>
<p-colorPicker [(ngModel)]="colorHSB" format="hsb"></p-colorPicker>`,

        html: `
<div class="card flex flex-wrap gap-3">
    <div class="flex-1 flex flex-column align-items-center gap-3">
        <label htmlFor="cp-hex" class="font-bold block mb-2"> HEX </label>
        <p-colorPicker [(ngModel)]="color"></p-colorPicker>
        <span>{{ color }}</span>
    </div>
    <div class="flex-1 flex flex-column align-items-center gap-3">
        <label htmlFor="cp-rgb" class="font-bold block mb-2"> RGB </label>
        <p-colorPicker [(ngModel)]="colorRGB" format="rgb"></p-colorPicker>
        <span>{{ 'r:' + colorRGB.r + ' g:' + colorRGB.g + ' b:' + colorRGB.b }}</span>
    </div>
    <div class="flex-1 flex flex-column align-items-center gap-3">
        <label htmlFor="cp-hsb" class="font-bold block mb-2"> HSB </label>
        <p-colorPicker [(ngModel)]="colorHSB" format="hsb"></p-colorPicker>
        <span>{{ 'h:' + colorHSB.h + ' s:' + colorHSB.s + ' b:' + colorHSB.b }}</span>
    </div>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'colorpicker-format-demo',
    templateUrl: './colorpicker-format-demo.html',
    styleUrls: ['./colorpicker-format-demo.scss']
})
export class ColorpickerFormatDemo {
    color: string = '#6466f1';

    colorRGB: any = { r: 100, g: 102, b: 241 };

    colorHSB: any = { h: 239, s: 59, b: 95 };
}`
    };
}
