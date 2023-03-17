import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ConfirmPopupBasicDemo } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { ServiceDoc } from './servicedoc';
import { ConfirmationApiDoc } from './confirmationapidoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ConfirmPopupModule, ButtonModule, ToastModule, AppDocModule],
    declarations: [ConfirmPopupBasicDemo, ImportDoc, PropsDoc, StyleDoc, ServiceDoc, ConfirmationApiDoc],
    exports: [AppDocModule]
})
export class ConfirmPopupDocModule {}
