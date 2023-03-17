import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'tree-table-paginator-template-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Paginator UI is customized using the <i>paginatorleft</i> and <i>paginatorright</i> property. Each element can also be customized further with your own UI to replace the default one, refer to the
                <a href="#" [routerLink]="['/paginator']">Paginator</a> component for more information about the advanced customization options.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-treeTable [value]="files" [columns]="cols" [paginator]="true" [rows]="10">
                <ng-template pTemplate="header" let-columns>
                    <tr>
                        <th *ngFor="let col of columns">
                            {{ col.header }}
                        </th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
                    <tr>
                        <td *ngFor="let col of columns; let i = index">
                            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0"></p-treeTableToggler>
                            {{ rowData[col.field] }}
                        </td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="paginatorleft">
                    <p-button icon="pi pi-refresh" styleClass="p-button-text"></p-button>
                </ng-template>

                <ng-template pTemplate="paginatorright">
                    <p-button icon="pi pi-download" styleClass="p-button-text"></p-button>
                </ng-template>
            </p-treeTable>
        </div>
        <app-code [code]="code" selector="tree-table-paginator-template-demo"></app-code>
    </div>`
})
export class PaginatorTemplateDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    files: TreeNode[];

    cols: any[];

    ngOnInit() {
        this.files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }

    code: Code = {
        basic: `
<p-treeTable [value]="files" [columns]="cols" [paginator]="true" [rows]="10">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr>
            <td *ngFor="let col of columns; let i = index">
                <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0"></p-treeTableToggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="paginatorleft">
        <p-button icon="pi pi-refresh" styleClass="p-button-text"></p-button>
    </ng-template>
    <ng-template pTemplate="paginatorright">
        <p-button icon="pi pi-download" styleClass="p-button-text"></p-button>
    </ng-template>
</p-treeTable>`,

        html: `
<div class="card">
    <p-treeTable [value]="files" [columns]="cols" [paginator]="true" [rows]="10">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
            <tr>
                <td *ngFor="let col of columns; let i = index">
                    <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0"></p-treeTableToggler>
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="paginatorleft">
            <p-button icon="pi pi-refresh" styleClass="p-button-text"></p-button>
        </ng-template>
        <ng-template pTemplate="paginatorright">
            <p-button icon="pi pi-download" styleClass="p-button-text"></p-button>
        </ng-template>
    </p-treeTable>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'tree-table-paginator-template-demo',
    templateUrl: './tree-table-paginator-template-demo.html',
})
export class TreeTablePaginatorTemplateDemo implements OnInit{
    files: TreeNode[];

    cols: any[];

    ngOnInit() {
        this.files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`
    };
}
