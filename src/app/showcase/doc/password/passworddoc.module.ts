import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { EventsDoc } from './eventsdoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { MeterDoc } from './meterdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { TemplatesDoc } from './templatesdoc';
import { TogglemaskDoc } from './togglemaskdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PasswordModule, FormsModule, DividerModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MeterDoc, TogglemaskDoc, TemplateDoc, FloatLabelDoc, InvalidDoc, DisabledDoc, PropsDoc, EventsDoc, TemplatesDoc, StyleDoc]
})
export class PasswordDocModule {}
