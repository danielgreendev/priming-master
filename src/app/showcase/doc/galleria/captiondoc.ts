import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-caption-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Description of an image is specified with the <i>caption</i> template.</p>
        </app-docsectiontext>
        <div class="card">
            <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ width: '100%' }" [numVisible]="5">
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-nogutter justify-content-center">
                        <img [src]="item.thumbnailImageSrc" style="display: block;" />
                    </div>
                </ng-template>
                <ng-template pTemplate="caption" let-item>
                    <h4 style="margin-bottom: .5rem; color: #ffffff;">{{ item.title }}</h4>
                    <p>{{ item.alt }}</p>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code" selector="galleria-caption-demo"></app-code>
    </div>`
})
export class GalleriaCaptionDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }

    code: Code = {
        basic: `
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ width: '100%' }" [numVisible]="5">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
    <ng-template pTemplate="caption" let-item>
        <h4 style="margin-bottom: .5rem; color: #ffffff;">{{ item.title }}</h4>
        <p>{{ item.alt }}</p>
    </ng-template>
</p-galleria>
`,
        html: `
<div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%'}" [numVisible]="5"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    templateUrl: './galleria-caption-demo.html',
    styleUrls: ['./galleria-caption-demo.scss']
})
export class GalleriaCaptionDemo implements OnInit {
    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,
        service: ['PhotoService']
    };
}
