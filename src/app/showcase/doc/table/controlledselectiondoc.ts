import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-controlled-selection-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>Row selection can be controlled by utilizing <i>rowSelectable</i> and <i>disabled</i> properties.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [rowSelectable]="isRowSelectable" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width: 4rem">
                            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                        </th>
                        <th style="min-width:200px">Code</th>
                        <th style="min-width:200px">Name</th>
                        <th style="min-width:200px">Category</th>
                        <th style="min-width:200px">Quantity</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>
                            <p-tableCheckbox [value]="product" [disabled]="isOutOfStock(product)"></p-tableCheckbox>
                        </td>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-controlled-selection-demo" [extFiles]="extFiles"></app-code>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableControlledSelectionDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    selectedProducts: Product;

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {
        this.isRowSelectable = this.isRowSelectable.bind(this);
    }

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });
    }

    isRowSelectable(event) {
        return !this.isOutOfStock(event.data);
    }

    isOutOfStock(data) {
        return data.inventoryStatus === 'OUTOFSTOCK';
    }

    code: Code = {
        basic: `
<p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [rowSelectable]="isRowSelectable" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th style="min-width:200px">Code</th>
            <th style="min-width:200px">Name</th>
            <th style="min-width:200px">Category</th>
            <th style="min-width:200px">Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product" [disabled]="isOutOfStock(product)"></p-tableCheckbox>
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
    <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [rowSelectable]="isRowSelectable" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th style="min-width:200px">Code</th>
                <th style="min-width:200px">Name</th>
                <th style="min-width:200px">Category</th>
                <th style="min-width:200px">Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableCheckbox [value]="product" [disabled]="isOutOfStock(product)"></p-tableCheckbox>
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
    selector: 'table-controlled-selection-demo',
    templateUrl: 'table-controlled-selection-demo.html'
})
export class TableControlledSelectionDemo implements OnInit{
    products: Product[];

    selectedProducts: Product;

    constructor(private productService: ProductService) {
        this.isRowSelectable = this.isRowSelectable.bind(this);
    }

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    isRowSelectable(event) {
        return !this.isOutOfStock(event.data);
    }

    isOutOfStock(data) {
        return data.inventoryStatus === 'OUTOFSTOCK';
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
