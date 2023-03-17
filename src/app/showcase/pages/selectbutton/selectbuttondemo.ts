import { Component } from '@angular/core';
import { BasicDoc } from '../../doc/selectbutton/basicdoc';
import { DisabledDoc } from '../../doc/selectbutton/disableddoc';
import { EventsDoc } from '../../doc/selectbutton/eventsdoc';
import { ImportDoc } from '../../doc/selectbutton/importdoc';
import { InvalidDoc } from '../../doc/selectbutton/invaliddoc';
import { MultipleDoc } from '../../doc/selectbutton/multipledoc';
import { PropsDoc } from '../../doc/selectbutton/propsdoc';
import { TemplateDoc } from '../../doc/selectbutton/templatedoc';

@Component({
    templateUrl: './selectbuttondemo.html'
})
export class SelectButtonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        }
    ];
}
