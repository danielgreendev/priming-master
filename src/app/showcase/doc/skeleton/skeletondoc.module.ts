import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CardDoc } from './carddoc';
import { DataTableDoc } from './datatabledoc';
import { ImportDoc } from './importdoc';
import { ListDoc } from './listdoc';
import { PropsDoc } from './propsdoc';
import { ShapesDoc } from './shapesdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TableModule, SkeletonModule],
    declarations: [CardDoc, DataTableDoc, ImportDoc, ListDoc, PropsDoc, ShapesDoc, StyleDoc],
    exports: [CardDoc, DataTableDoc, ImportDoc, ListDoc, PropsDoc, ShapesDoc, StyleDoc]
})
export class SkeletonDocModule {}
