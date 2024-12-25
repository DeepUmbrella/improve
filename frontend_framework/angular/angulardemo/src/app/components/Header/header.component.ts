import { Component } from '@angular/core'
import { NeonTimeComponent } from '../neon-time/neon-time.component'
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NeonTimeComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {}
