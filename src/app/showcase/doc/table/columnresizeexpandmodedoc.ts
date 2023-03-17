import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-column-resize-expand-mode-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>Setting <i>columnResizeMode</i> as <i>expand</i> changes the table width as well.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="products" [resizableColumns]="true" columnResizeMode="expand" styleClass="p-datatable-gridlines" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th pResizableColumn>Code</th>
                        <th pResizableColumn>Name</th>
                        <th pResizableColumn>Category</th>
                        <th pResizableColumn>Quantity</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-column-resize-expand-mode-demo" [extFiles]="extFiles"></app-code>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableColumnResizeExpandModeDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });
    }

    code: Code = {
        basic: `
<p-table [value]="products" [resizableColumns]="true" columnResizeMode="expand" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pResizableColumn>Code</th>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Category</th>
            <th pResizableColumn>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="products" [resizableColumns]="true" columnResizeMode="expand" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pResizableColumn>Code</th>
                <th pResizableColumn>Name</th>
                <th pResizableColumn>Category</th>
                <th pResizableColumn>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
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
    selector: 'table-column-resize-expand-mode-demo',
    templateUrl: 'table-column-resize-expand-mode-demo.html'
})
export class TableColumnResizeExpandModeDemo implements OnInit{
    products: Product[];

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
