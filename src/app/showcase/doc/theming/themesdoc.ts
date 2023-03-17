import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'themes-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>PrimeNG ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`
})
export class ThemesDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
primeng/resources/themes/bootstrap4-light-blue/theme.css
primeng/resources/themes/bootstrap4-light-purple/theme.css
primeng/resources/themes/bootstrap4-dark-blue/theme.css
primeng/resources/themes/bootstrap4-dark-purple/theme.css
primeng/resources/themes/md-light-indigo/theme.css
primeng/resources/themes/md-light-deeppurple/theme.css
primeng/resources/themes/md-dark-indigo/theme.css
primeng/resources/themes/md-dark-deeppurple/theme.css
primeng/resources/themes/mdc-light-indigo/theme.css
primeng/resources/themes/mdc-light-deeppurple/theme.css
primeng/resources/themes/mdc-dark-indigo/theme.css
primeng/resources/themes/mdc-dark-deeppurple/theme.css
primeng/resources/themes/fluent-light/theme.css
primeng/resources/themes/lara-light-blue/theme.css
primeng/resources/themes/lara-light-indigo/theme.css
primeng/resources/themes/lara-light-purple/theme.css
primeng/resources/themes/lara-light-teal/theme.css
primeng/resources/themes/lara-dark-blue/theme.css
primeng/resources/themes/lara-dark-indigo/theme.css
primeng/resources/themes/lara-dark-purple/theme.css
primeng/resources/themes/lara-dark-teal/theme.css
primeng/resources/themes/saga-blue/theme.css
primeng/resources/themes/saga-green/theme.css
primeng/resources/themes/saga-orange/theme.css
primeng/resources/themes/saga-purple/theme.css
primeng/resources/themes/vela-blue/theme.css
primeng/resources/themes/vela-green/theme.css
primeng/resources/themes/vela-orange/theme.css
primeng/resources/themes/vela-purple/theme.css
primeng/resources/themes/arya-blue/theme.css
primeng/resources/themes/arya-green/theme.css
primeng/resources/themes/arya-orange/theme.css
primeng/resources/themes/arya-purple/theme.css
primeng/resources/themes/nova/theme.css
primeng/resources/themes/nova-alt/theme.css
primeng/resources/themes/nova-accent/theme.css
primeng/resources/themes/luna-amber/theme.css
primeng/resources/themes/luna-blue/theme.css
primeng/resources/themes/luna-green/theme.css
primeng/resources/themes/luna-pink/theme.css
primeng/resources/themes/rhea/theme.css`
    };
}
