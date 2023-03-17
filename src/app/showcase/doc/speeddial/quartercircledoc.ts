import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'speeddial-quarter-circle-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>type</i> is defined as <i>quarter-circle</i>, items are displayed in a half-circle around the button.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 500px; position: relative;" class="speeddial-circle-demo">
                <p-toast></p-toast>
                <p-speedDial [model]="items" radius="120" direction="up-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
                <p-speedDial [model]="items" radius="120" direction="up-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
                <p-speedDial [model]="items" radius="120" direction="down-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
                <p-speedDial [model]="items" radius="120" direction="down-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
            </div>
        </div>
        <app-code [code]="code" selector="speeddial-quarter-circle-demo"></app-code>
    </div>`,
    providers: [MessageService]
})
export class QuarterCircleDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];
    }

    code: Code = {
        basic: `
<p-speedDial [model]="items" radius="120" direction="up-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
<p-speedDial [model]="items" radius="120" direction="up-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
<p-speedDial [model]="items" radius="120" direction="down-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
<p-speedDial [model]="items" radius="120" direction="down-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>`,

        html: `
<div class="card">
    <div style="height: 500px; position: relative;" class="speeddial-circle-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="items" radius="120" direction="up-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
        <p-speedDial [model]="items" radius="120" direction="up-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
        <p-speedDial [model]="items" radius="120" direction="down-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
        <p-speedDial [model]="items" radius="120" direction="down-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
    </div>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speeddial-quarter-circle-demo',
    templateUrl: './speeddial-quarter-circle-demo.html',
    styleUrls: ['./speeddial-quarter-circle-demo.scss'],
    providers: [MessageService]
})
export class SpeeddialQuarterCircleDemo implements OnInit {
    items: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];
    }
}`,

        scss: `
:host ::ng-deep {
    .speeddial-circle-demo {
        .p-speeddial-quarter-circle {
            &.p-speeddial-direction-up-left {
                right: 0;
                bottom: 0;
            }

            &.p-speeddial-direction-up-right {
                left: 0;
                bottom: 0;
            }

            &.p-speeddial-direction-down-left {
                right: 0;
                top: 0;
            }

            &.p-speeddial-direction-down-right {
                left: 0;
                top: 0;
            }
        }
    }
}`
    };
}
