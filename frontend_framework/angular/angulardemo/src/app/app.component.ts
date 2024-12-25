import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, LayoutComponent],
    template: `
        <app-layout>
            <router-outlet />
        </app-layout>
    `,
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Hello Angular!'
}
