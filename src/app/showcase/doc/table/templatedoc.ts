import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-template-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Custom content at <i>header</i>, <i>body</i> and <i>footer</i> sections are supported via templating.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="products" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template pTemplate="caption">
                    <div class="flex align-items-center justify-content-between">
                        Products
                        <p-button icon="pi pi-refresh"></p-button>
                    </div>
                </ng-template>
                <ng-template pTemplate="header">
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Reviews</th>
                        <th>Status</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{ product.name }}</td>
                        <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="100" class="shadow-4" /></td>
                        <td>{{ product.price | currency: 'USD' }}</td>
                        <td>{{ product.category }}</td>
                        <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
                        <td>
                            <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{ product.inventoryStatus }}</span>
                        </td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="summary">
                    <div class="flex align-items-center justify-content-between">In total there are {{ products ? products.length : 0 }} products.</div>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-template-demo" [extFiles]="extFiles"></app-code>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableTemplateDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    cols: any[];

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }

    code: Code = {
        basic: `
<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="caption">
        <div class="flex align-items-center justify-content-between">
            Products
            <p-button icon="pi pi-refresh"></p-button>
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Reviews</th>
            <th>Status</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.name}}</td>
            <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="100" class="shadow-4" /></td>
            <td>{{product.price | currency:'USD'}}</td>
            <td>{{product.category}}</td>
            <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
            <td><span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span></td>
        </tr>
    </ng-template>
    <ng-template pTemplate="summary">
        <div class="flex align-items-center justify-content-between">
            In total there are {{products ? products.length : 0 }} products.
        </div>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="caption">
            <div class="flex align-items-center justify-content-between">
                Products
                <p-button icon="pi pi-refresh"></p-button>
            </div>
        </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Reviews</th>
                <th>Status</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.name}}</td>
                <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="100" class="shadow-4" /></td>
                <td>{{product.price | currency:'USD'}}</td>
                <td>{{product.category}}</td>
                <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
                <td><span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span></td>
            </tr>
        </ng-template>
        <ng-template pTemplate="summary">
            <div class="flex align-items-center justify-content-between">
                In total there are {{products ? products.length : 0 }} products.
            </div>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-template-demo',
    templateUrl: 'table-template-demo.html'
})
export class TableTemplateDemo implements OnInit {
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
