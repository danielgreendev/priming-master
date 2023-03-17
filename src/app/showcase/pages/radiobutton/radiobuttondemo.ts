import { Component } from '@angular/core';
import { DisabledDoc } from '../../doc/radiobutton/disableddoc';
import { DynamicDoc } from '../../doc/radiobutton/dynamicdoc';
import { EventsDoc } from '../../doc/radiobutton/eventsdoc';
import { GroupDoc } from '../../doc/radiobutton/groupdoc';
import { ImportDoc } from '../../doc/radiobutton/importdoc';
import { InvalidDoc } from '../../doc/radiobutton/invaliddoc';
import { MethodsDoc } from '../../doc/radiobutton/methodsdoc';
import { PropsDoc } from '../../doc/radiobutton/propsdoc';
import { StyleDoc } from '../../doc/radiobutton/styledoc';

@Component({
    templateUrl: './radiobuttondemo.html'
})
export class RadioButtonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
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
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
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
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDoc
        }
    ];
}
