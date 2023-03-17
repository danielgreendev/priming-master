import { Component } from '@angular/core';
import { ConfirmPopupBasicDemo } from '../../doc/confirmpopup/basicdoc';
import { ImportDoc } from '../../doc/confirmpopup/importdoc';
import { PropsDoc } from '../../doc/confirmpopup/propsdoc';
import { StyleDoc } from '../../doc/confirmpopup/styledoc';
import { ServiceDoc } from '../../doc/confirmpopup/servicedoc';
import { ConfirmationApiDoc } from '../../doc/confirmpopup/confirmationapidoc';

@Component({
    templateUrl: './confirmpopupdemo.html'
})
export class ConfirmPopupDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ConfirmPopupBasicDemo
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        }
    ];

    apiDocs = [
        {
            id: 'props',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'service',
            label: 'Confirmation Service',
            component: ServiceDoc
        },
        {
            id: 'confirmationapi',
            label: 'Confirmation API',
            component: ConfirmationApiDoc
        }
    ];
}
