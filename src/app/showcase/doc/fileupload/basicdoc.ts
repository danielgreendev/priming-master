import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'file-upload-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>FileUpload basic <i>mode</i> provides a simpler UI as an alternative to default advanced mode.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast></p-toast>
            <p-fileUpload mode="basic" chooseLabel="Choose" name="demo[]" url="./upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)"></p-fileUpload>
        </div>
        <app-code [code]="code" selector="file-upload-basic-demo" [extFiles]="extFiles"></app-code>
    </div>`,
    providers: [MessageService]
})
export class FileUploadBasicDemo {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    code: Code = {
        basic: `
<p-fileUpload mode="basic" chooseLabel="Choose" name="demo[]" url="./upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)"></p-fileUpload>`,
        html: `
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-fileUpload mode="basic" chooseLabel="Choose" name="demo[]" url="./upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)"></p-fileUpload>
</div>`,
        typescript: `
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'file-upload-basic-demo',
    templateUrl: './file-upload-basic-demo.html',
    providers: [MessageService]
})
export class FileUploadBasicDemo {

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}`
    };

    extFiles = [
        {
            path: 'src/upload.php',
            content: `
<?php header('Access-Control-Allow-Origin: *'); ?>
<?php echo '{"success": true}'; ?> `
        }
    ];
}
