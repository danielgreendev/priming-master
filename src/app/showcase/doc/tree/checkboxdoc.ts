import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-checkbox-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Selection of multiple nodes via checkboxes is enabled by configuring <i>selectionMode</i> as <i>checkbox</i>.</p>
            <p>In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has <i>checked</i> and <i>partialChecked</i> properties to represent the checked state of a node</p>
        </app-docsectiontext>
        <app-code [code]="miniCode" [hideToggleCode]="true"></app-code>
        <div class="card flex flex-column align-items-center justify-content-center">
            <p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles"></p-tree>
        </div>
        <app-code [code]="code" selector="tree-checkbox-demo"></app-code>
    </div>`
})
export class CheckboxDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    files: TreeNode[];

    selectedFiles: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    miniCode: Code = {
        typescript: `
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}`
    };

    code: Code = {
        basic: `
<p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles"></p-tree>`,

        html: `
<div class="card flex flex-column align-items-center justify-content-center">
    <p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles"></p-tree>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-checkbox-demo',
    templateUrl: './tree-checkbox-demo.html',
    styleUrls: ['./tree-checkbox-demo.scss']
})
export class TreeCheckboxDemo implements OnInit {
    files: TreeNode[];

    selectedFiles: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,

        service: ['NodeService'],

        data: `
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`
    };
}
