import { Component } from '@angular/core';
import { AutoResizeDoc } from '../../doc/inputtextarea/autoresizedoc';
import { BasicDoc } from '../../doc/inputtextarea/basicdoc';
import { DisabledDoc } from '../../doc/inputtextarea/disableddoc';
import { EventsDoc } from '../../doc/inputtextarea/eventsdoc';
import { FloatlabelDoc } from '../../doc/inputtextarea/floatlabeldoc';
import { ImportDoc } from '../../doc/inputtextarea/importdoc';
import { KeyfilterDoc } from '../../doc/inputtextarea/keyfilterdoc';
import { PropsDoc } from '../../doc/inputtextarea/propsdoc';
import { StyleDoc } from '../../doc/inputtextarea/styledoc';

@Component({
    templateUrl: './inputtextareademo.html'
})
export class InputTextareaDemo {
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
            id: 'autoresize',
            label: 'AutoResize',
            component: AutoResizeDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyfilterDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatlabelDoc
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
        }
    ];
}
