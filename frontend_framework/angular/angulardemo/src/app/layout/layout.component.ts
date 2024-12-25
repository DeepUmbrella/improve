import { Component } from '@angular/core'
import { HeaderComponent, FooterComponent } from '@components'

@Component({
    selector: 'app-layout',
    imports: [HeaderComponent, FooterComponent],
    template: `
        <app-header />
        <main class="layout">
            <ng-content></ng-content>
        </main>
        <app-footer />
    `,

    styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
