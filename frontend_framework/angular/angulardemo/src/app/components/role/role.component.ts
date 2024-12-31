import { Component, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-role',

    imports: [CommonModule],
    template: ` <div
        [ngClass]="[role_type, 'default']"
        [ngStyle]="role_style"
    ></div>`,
    styleUrl: './role.component.scss',
})
export class RoleComponent {
    @Input()
    role_style = {}

    @Input()
    role_type = 'default'
}
