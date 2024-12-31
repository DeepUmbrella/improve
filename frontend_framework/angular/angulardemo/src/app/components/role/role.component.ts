import { Component, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-role',

    imports: [CommonModule],
    template: ` <div
        class="{{ role_type }}"
        [style.borderColor]="border_color"
        [ngStyle]="role_style"
    ></div>`,
    styleUrl: './role.component.scss',
})
export class RoleComponent {
    @Input()
    role_style = {}
    @Input()
    border_color = 'red'
    @Input()
    role_type = 'default'
}
