import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-checkbox-selection-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>Multiple selection can also be handled using checkboxes by enabling the <i>selectionMode</i> property of column as <i>multiple</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width: 4rem">
                            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                        </th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>
                            <p-tableCheckbox [value]="product"></p-tableCheckbox>
                        </td>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-checkbox-selection-demo" [extFiles]="extFiles"></app-code>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCheckboxSelectionDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    selectedProducts: Product;

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });
    }

    code: Code = {
        basic: `
<p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product"></p-tableCheckbox>
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableCheckbox [value]="product"></p-tableCheckbox>
                </td>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-checkbox-selection-demo',
    templateUrl: 'table-checkbox-selection-demo.html'
})
export class TableCheckboxSelectionDemo implements OnInit{
    products: Product[];

    selectedProducts: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,

        service: ['ProductService']
    };

    extFiles = [
        {
            path: 'src/domain/product.ts',
            content: `
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`
        }
    ];
}
