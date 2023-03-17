import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'events-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`
})
export class EventsDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
import { PrimeNGConfig, OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent } from 'primeng/api';
import { AnimationEvent } from '@angular/animations';

this.primengConfig.overlayOptions: OverlayOptions = {
    onBeforeShow: (event?: OverlayOnBeforeShowEvent) => {};    // Callback to invoke before the overlay is shown.
    onShow: (event?: OverlayOnShowEvent) => {};                // Callback to invoke when the overlay is shown.
    onBeforeHide: (event?: OverlayOnBeforeHideEvent) => {};    // Callback to invoke before the overlay is hidden.
    onHide: (event?: OverlayOnHideEvent) => {};                // Callback to invoke when the overlay is hidden.
    onAnimationStart: (event?: AnimationEvent) => {};          // Callback to invoke when the animation is started.
    onAnimationDone: (event?: AnimationEvent) => {};           // Callback to invoke when the animation is done.
};`
    };
}
