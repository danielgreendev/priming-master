import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TerminalModule } from 'primeng/terminal';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TerminalBasicDemo } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TerminalModule],
    declarations: [ImportDoc, TerminalBasicDemo, StyleDoc, PropsDoc],
    exports: [AppDocModule]
})
export class TerminalDocModule {}
