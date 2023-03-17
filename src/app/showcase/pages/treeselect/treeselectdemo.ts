import { Component } from '@angular/core';
import { BasicDoc } from '../../doc/treeselect/basicdoc';
import { CheckboxDoc } from '../../doc/treeselect/checkboxdoc';
import { DisabledDoc } from '../../doc/treeselect/disableddoc';
import { EventsDoc } from '../../doc/treeselect/eventsdoc';
import { FilterDoc } from '../../doc/treeselect/filterdoc';
import { FloatLabelDoc } from '../../doc/treeselect/floatlabeldoc';
import { ImportDoc } from '../../doc/treeselect/importdoc';
import { InvalidDoc } from '../../doc/treeselect/invaliddoc';
import { MultipleDoc } from '../../doc/treeselect/multipledoc';
import { PropsDoc } from '../../doc/treeselect/propsdoc';
import { StyleDoc } from '../../doc/treeselect/styledoc';
import { TemplatesDoc } from '../../doc/treeselect/templatesdoc';

@Component({
    templateUrl: './treeselectdemo.html'
})
export class TreeSelectDemo {
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
            id: 'checkbox',
            label: 'Checkbox',
            component: CheckboxDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDoc
        }
    ];
}
