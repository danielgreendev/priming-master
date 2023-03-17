import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDoc } from './importdoc';
import { AutoFocusBasicDemo } from './basicdoc';
import { PropsDoc } from './propsdoc';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, AutoFocusModule, InputTextModule],
    declarations: [ImportDoc, AutoFocusBasicDemo, PropsDoc],
    exports: [AppDocModule]
})
export class AutoFocusDocModule {}
